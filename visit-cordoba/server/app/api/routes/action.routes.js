const express = require("express");
const router = express.Router();

const { createAction,getAllAction,getActionById,getActionByName,findAction} = require("../controllers/action.controller");

router.post("/create", createAction );
router.get("/allAction",getAllAction);
router.get("/:actionId",getActionById);
router.get("/name/:actionName",getActionByName)
router.get("/allAction/:name",findAction)

module.exports = router;