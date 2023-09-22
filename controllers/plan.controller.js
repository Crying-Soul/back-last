const ErrorController = require("./error.controller");

const Plan = require("../models/Plan");
const User = require("../models/User");
const { validationResult } = require("express-validator");
const Function = require("../models/Function");
function getSQLDateWithMonthsAdded(monthsToAdd) {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + monthsToAdd);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Месяц начинается с 0, поэтому добавляем 1 и форматируем
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
class PlanController extends ErrorController {
  async all(req, res) {
    res.status(200).json(await Plan.getAll());
  }
  async update(req, res) {
    const validator = validationResult(req);

    const user = await User.findByToken(req.token);
    // console.log(user);

    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }
    const data = req.body;
    // console.log(user.id);
    const user_plan = await Plan.update(
      user.id,
      `plan_id=${data.planId}, price="${data.price}"`
    );
    if (data.functions.length > 0) {
      // console.log(user_plan);
      const users_funcs = await Function.userFuncs(user_plan.id);
      if (users_funcs) {
        await Function.removeForUser(user_plan.id);
      }

      data.functions.forEach(async (id) => {
        await Function.create(user_plan.id, id);
      });
    }

    res.status(200).json({ msg: "Success" });

    return;
  }

  async renew(req, res) {
    const validator = validationResult(req);

    const user = await User.findByToken(req.token);
    // console.log(user);

    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }
    const data = req.body;
    const new_plan = await Plan.update(
      user.id,
      `\`from\`="${getSQLDateWithMonthsAdded(
        0
      )}", \`to\`="${getSQLDateWithMonthsAdded(data.months)}", price=${
        data.price
      }`
    );
    res.status(200).json(new_plan);
    return;
  }
  async current(req, res) {
    const validator = validationResult(req);

    const user = await User.findByToken(req.token);
    // console.log(user);

    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }

    const user_plan = await Plan.getById(user.id);

    user_plan.functions = [];
    const funcs = await Function.userFuncs(user_plan.id);
    funcs.forEach((f) => {
      if (f.function_id) user_plan.functions.push(f.function_id);
    });

    res.status(200).json({
      planId: user_plan.plan_id,
      functions: user_plan.functions,
      from: user_plan.from,
      to: user_plan.to,
      price: user_plan.price,
    });
    return;
  }
}

module.exports = new PlanController();
