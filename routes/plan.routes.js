const { Router } = require("express");
const planController = require("../controllers/plan.controller.js");
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

router.get(
    "/all",
    planController.all
  );
  router.post(
    "/update",
    verifyToken, 
    planController.update
  );
  router.post(
    "/renew",
    verifyToken, 
    planController.renew
  );
  router.get(
    "/current",
    verifyToken,
    planController.current  )


module.exports = router;