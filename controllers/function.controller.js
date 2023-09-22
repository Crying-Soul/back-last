const ErrorController = require("./error.controller");

const Function = require("../models/Function");

class FunctionController extends ErrorController {
  async all(req, res) {
    res.status(200).json(await Function.getAll());
  }
}

module.exports = new FunctionController();
