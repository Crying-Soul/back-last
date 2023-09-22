const { Router } = require("express");
const botController = require("../controllers/bot.controller.js");
const { check } = require("express-validator");
const router = new Router();

function verifyToken(req, res, next) {
  const bearerToken = req.headers["authorization"];
  if (typeof bearerToken !== "undefined") {
    const bearer = bearerToken.split(" ");
    req.token = bearer[1];
    next();
  } else {
    res.status(403).json({
      error: "Ivalid token",
    });
  }
}

router.get("/all",verifyToken, botController.all);
router.post('/create', verifyToken, botController.create)
router.post('/:id/start', verifyToken, botController.start)
router.post('/:id/stop', verifyToken, botController.stop)
router.patch("/update/:id", verifyToken, botController.update);

module.exports = router;
