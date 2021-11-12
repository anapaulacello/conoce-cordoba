const express = require("express");
const router = express.Router();
const { register, login, logout,addDay } = require("../controllers/user.controller");
const { isAuth } = require("../../../middlewares/auth.middleware");


router.post("/register", register);
router.post("/login", login);
router.post("/logout", [isAuth], logout);
router.post("/add", addDay)
module.exports = router;