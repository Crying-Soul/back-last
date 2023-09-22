const { Router } = require("express");
const userController = require("../controllers/user.controller.js");
const { check } = require("express-validator");
const router = new Router();

function verifyToken(req, res, next){
    const bearerToken = req.headers['authorization'];
    if (typeof bearerToken !== "undefined"){
        const bearer = bearerToken.split(' ');
        req.token = bearer[1];
        next()
    }else{
        res.status(403).json({
            error: "Ivalid token"
        })
    }
}
/**
 * Post requests
 */
router.post(
  "/login",
  [
    check("email")
      .exists()
      .withMessage("Требуется Email")
      .isEmail()
      .withMessage("Неверный email")
      .not()
      .isEmpty()
      .withMessage("Email не может быть пустым")
      .normalizeEmail(),
    check("password")
      .exists()
      .withMessage("Требуется пароль")
      .not()
      .isEmpty()
      .withMessage("Пароль не может быть пустым")
      // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
      .withMessage(
        "Password must include one lowercase character, one uppercase character, a number, and a special character."
      ),
  ],
  
  userController.login
);
router.post(
  "/signup",
  [
    check("name")
      .exists()
      .withMessage("Имя должно существовать")
      .not()
      .isEmpty()
      .withMessage("Имя не может быть пустым")
      .isLength({ min: 2 })
      .withMessage("Имя должно быть как минимум два символа"),

    check("email")
      .exists()
      .withMessage("Email должен существовать")
      .isEmail()
      .withMessage("Некоректный Email")
      .not()
      .isEmpty()
      .withMessage("Email не может быть пустым")
      .normalizeEmail(),
    check("password")
      .exists()
      .withMessage("Пароль должен существовать")
      .not()
      .isEmpty()
      .withMessage("Пароль не может быть пустым")
      // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
      .withMessage("Пароль не соответствует требованиям"),
  ],
  userController.signup
);
router.patch("/company/update", verifyToken, userController.companyUpdate);

router.get('/current', verifyToken, userController.current)
router.get('/graph/:count', userController.graphPoints)



module.exports = router;
