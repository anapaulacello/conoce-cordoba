const express = require("express");
const router = express.Router();

const { createAction,getAllAction,getActionById,getActionByName} = require("../controllers/action.controller");

router.post("/create", createAction );
router.get("/allAction",getAllAction);
router.get("/:actionId",getActionById);
router.get("/name/:actionName",getActionByName)

module.exports = router;