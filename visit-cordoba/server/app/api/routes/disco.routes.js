const express = require("express");
const router = express.Router();

const { createDisco, getAllDiscos, getDiscoById } = require("../controllers/disco.controller");

router.post("/create", createDisco );
router.get("/", getAllDiscos);
router.get("/:discoId", getDiscoById);

module.exports = router;