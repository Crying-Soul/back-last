const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");

const ErrorController = require("./error.controller");
const Company = require("../models/Company");
const Plan = require("../models/Plan");

class UserController extends ErrorController {
  async login(req, res) {
    const { email, password } = req.body;
    const validator = validationResult(req);

    if (!validator.isEmpty()) {
      super.sendError(401, validator, res);
      return;
    }
    const user = await User.findOne(email);
    console.log(user);

    if (!user) {
      validator.errors.push({
        msg: "Такой пользователь не существует!",
        path: null,
        value: null,
      });
    } else if (!(await bcrypt.compare(password, user.password))) {
      validator.errors.push({
        msg: "Неверный пароль",
        path: null,
        value: null,
      });
    } else {
      const token = jwt.sign({ userId: user.id }, "digital");
      await User.updateToken(user.email, token);
      res.status(200).json({ token: token });
      return;
    }
    super.sendError(401, validator, res);
    return;
  }

  async signup(req, res) {
    const { name, email, password } = req.body;
    const validator = validationResult(req);
    if (!validator.isEmpty()) {
      super.sendError(400, validator, res);
      return;
    } else if (await User.findOne(email)) {
      validator.errors.push({
        msg: "Такой пользователь уже существует",
        path: null,
        value: null,
      });
    } else {
      const defaultCompany = await Company.create();
      const user = await User.createUser(
        name,
        email,
        await bcrypt.hash(password, 11),
        defaultCompany.id
      );
      await Plan.createAssocUser(user.id);
      const token = jwt.sign({ userId: user.id }, "digital-skills");
      await User.updateToken(user.email, token);
      res.status(201).json({ token: token });
      return;
    }

    super.sendError(400, validator, res);
  }
  async companyUpdate(req, res) {
    const validator = validationResult(req);

    const user = await User.findByToken(req.token);
    console.log(user);

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

    const company = await Company.update(
      user.id,
      `name="${data.company_name}", phone="${data.company_phone}", address="${data.company_address}"`
    );
    const new_user = await User.update(user.id, `name="${data.name}"`);
    res.status(200).json([company, new_user]);
    return;
  }
  async current(req, res) {
    const validator = validationResult(req);

    const user = await User.findByToken(req.token);
    console.log(user);

    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }
    
    const company = await Company.getById(user.company_id);
    res.status(200).json({
      name: user.name,
      companyName: company.name,
      companyPhone: company.phone,
      companyAddress: company.address
    })
    return;
  }
}

module.exports = new UserController();
