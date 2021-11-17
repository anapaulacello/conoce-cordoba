const express = require("express");
const router = express.Router();

const { createDay,getAllDays,getDayByDate,deleteDay,updateDay,getDaysFromUser,addDayToUser,deleteDayFromUser} = require("../controllers/day.controller");

router.post("/create", createDay);
router.get("/get",getAllDays)
router.get("/:date",getDayByDate)
router.delete("/delete",deleteDay)
router.put("/update",updateDay)

router.get("/user/day/get",getDaysFromUser)
router.post("/user/day/add",addDayToUser)
router.delete("/user/day/delete",deleteDayFromUser)
/*


//itinerario
router.get("/user/days",getDaysFromUser)
router.post("/user/day/add",addDayToUser)
router.delete("/user/day/delete",deleteDayFromUser)
*/
module.exports = router; 