const express = require("express");
const router = express.Router();

const {  createDay, getAllDays, getDayByDate,updateDay,deleteDay} = require("../controllers/day.controller");
router.post("/create", createDay);
router.get("/", getAllDays);
router.get("/:date",getDayByDate)
router.put("/update/",updateDay)
router.delete("/delete",deleteDay)


module.exports = router;