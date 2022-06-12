const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/auth");

router.get("/init", authController.initDatabase);
router.post(
  "/register",
  //   [
  //     body("email").isEmail().escape(),
  //     body("firstname").not().isEmpty().escape(),
  //     body("lastname").not().isEmpty().escape(),
  //   ],
  authController.register
);
router.post("/login", authController.login);

module.exports = router;
