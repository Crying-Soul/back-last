const Bot = require("../models/Bot");
const User = require("../models/User");
const ErrorController = require("./error.controller");
const sh = require("shelljs");
const { validationResult } = require("express-validator");
const fs = require("fs");
function getSQLDateWithMonthsAdded(monthsToAdd) {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + monthsToAdd);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Месяц начинается с 0, поэтому добавляем 1 и форматируем
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
class BotController extends ErrorController {
  async create(req, res) {
    const validator = validationResult(req);
    const user = await User.findByToken(req.token);
    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }
    const userFolder = "./users/" + user.id;
    if (!fs.existsSync(userFolder)) {
      fs.mkdirSync(userFolder, { recursive: true });
    }
    const bot = await Bot.createAssocUser(user.id);

    const envContent = Object.keys(bot)
      .map((key) => `${key}=${bot[key]}`)
      .join("\n");
    fs.writeFileSync(
      `${userFolder}/user-${user.id}_bot-${bot.id}.env`,
      envContent
    );
    sh.exec("./bots/createbot.bat");
    bot.status = false;
    res.status(200).json(bot);
  }
  async start(req, res) {
    const validator = validationResult(req);
    const user = await User.findByToken(req.token);
    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }
    await Bot.update(
      req.params.id,
      `status="online", last_start="${getSQLDateWithMonthsAdded(0)}"`
    );
    sh.exec("./bots/startbot.bat");
    return;
  }
  async stop(req, res) {
    const validator = validationResult(req);
    const user = await User.findByToken(req.token);
    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }
    await Bot.update(
      req.params.id,
      `status="offline", last_start="${getSQLDateWithMonthsAdded(0)}"`
    );
    sh.exec("./bots/stopbot.bat");
    return;
  }
  async update(req, res) {
    const validator = validationResult(req);
    const user = await User.findByToken(req.token);
    const bot_id = req.params.id;
    const bot_fields = [
      "name",
      "logo",
      "status",
      "coin_logo",
      "coin_name",
      "bg_dialog",
    ];

    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }
    const userFolder = "./users/" + user.id;
    const data = req.body;
    let sqlUpdate = [];
    for (const key in data) {
      if (data.hasOwnProperty(key) && bot_fields.includes(key)) {
        let value = data[key];

        if (key == "logo") {
          fs.writeFileSync(`${userFolder}/user-${user.id}-logo.jpg`, value);
          value = `\/users\/${user.id}\/user\-${user.id}-logo\.jpg`;
          
        }
        const keyValue = `${key}=${
          typeof value === "string" ? `'${value}'` : value
        }`;
        // Добавляем другие обновления в массив sqlUpdate
        sqlUpdate.push(keyValue);
        
      }
    }

    console.log(sqlUpdate);

    sqlUpdate = sqlUpdate.join(", ");

    if (!fs.existsSync(userFolder)) {
      fs.mkdirSync(userFolder, { recursive: true });
    }
    const bot = await Bot.update(bot_id, sqlUpdate);
    console.log(bot);
    const envContent = Object.keys(bot)
      .map((key) => `${key}=${bot[key]}`)
      .join("\n");
    fs.writeFileSync(
      `${userFolder}/user-${user.id}_bot-${bot.id}.env`,
      envContent
    );

    res.status(200).json(bot);
  }
  async all(req, res){
    const validator = validationResult(req);
    const user = await User.findByToken(req.token);

    

    if (!user) {
      validator.errors.push({
        msg: "Такого пользователя не существует!",
        path: null,
        value: null,
      });
      super.sendError(403, validator, res);
      return;
    }
    const bots = await Bot.getAllByUser(user.id);
    res.status(200).json(bots)
    return;
  }

}

module.exports = new BotController();
