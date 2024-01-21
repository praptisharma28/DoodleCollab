const express = require("express");
const { registerLimiter } = require("../middleware/rateLimiter");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { registerValidationRules } = require("../middleware/Validation");
const router = express.Router();

router
  .route("/register")
  .post(registerLimiter, registerValidationRules, registerUser);
router.route("/login").post(loginUser);
router.route("/register").get(getUser);

module.exports = router;
