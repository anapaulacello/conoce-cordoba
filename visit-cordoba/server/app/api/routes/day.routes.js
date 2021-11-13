const express = require("express");
const router = express.Router();

const {  createDay, getAllDays, getDayByDate,updateDay} = require("../controllers/day.controller");
router.post("/create", createDay);
router.get("/", getAllDays);
router.get("/:date",getDayByDate)
router.put("/update/",updateDay)


module.exports = router;