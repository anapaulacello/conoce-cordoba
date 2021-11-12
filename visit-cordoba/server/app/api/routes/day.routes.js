const express = require("express");
const router = express.Router();

const {  createDay, getAllDays, getDayByDate} = require("../controllers/day.controller");
router.post("/create", createDay);
router.get("/", getAllDays);
router.get("/:date",getDayByDate)


module.exports = router;