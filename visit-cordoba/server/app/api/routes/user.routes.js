const express = require("express");
const router = express.Router();
const { register, login, logout,getUserDays ,addUserDay} = require("../controllers/user.controller");
const { isAuth } = require("../../../middlewares/auth.middleware");


router.post("/register", register);
router.post("/login", login);
router.post("/logout", [isAuth], logout);
//itinerario
router.get("/days",getUserDays)
router.post("/day/add",addUserDay)
module.exports = router;