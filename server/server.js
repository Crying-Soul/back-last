const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("../routes/user.routes");
const botRouter = require("../routes/bot.routes");
const planRouter = require("../routes/plan.routes");
const functionRouter = require("../routes/function.routes");
const formData = require("express-form-data");
const os = require("os");
module.exports = class Server {
  constructor(port = process.env.port || 3000) {
    this.port = port;
    this.app = express();
  }

  setup() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(formData.parse({
      uploadDir: os.tmpdir(),
      autoClean: true
    }));
    this.app.use(cors());
  }

  start() {
    this.setup();
    this.app.use("/api/user/", userRouter);
    this.app.use("/api/bot/", botRouter);
    this.app.use("/api/plan/", planRouter);
    this.app.use("/api/function/", functionRouter);
    this.app.listen(this.port, () => {
      console.log(`Server started at http://127.0.0.1:${this.port}`);
    });
  }
};
