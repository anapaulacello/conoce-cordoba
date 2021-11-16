/* const express = require("express");
const router = express.Router();

const {  createDay, getAllDays, getDayByDate,updateDay,deleteDay,getDaysFromUser ,addDayToUser,deleteDayFromUser} = require("../controllers/day.controller");
router.post("/create", createDay);
router.get("/", getAllDays);
router.get("/:date",getDayByDate)
router.put("/update/",updateDay)
router.delete("/delete",deleteDay)

//itinerario
router.get("/user/days",getDaysFromUser)
router.post("/user/day/add",addDayToUser)
router.delete("/user/day/delete",deleteDayFromUser)

module.exports = router; */