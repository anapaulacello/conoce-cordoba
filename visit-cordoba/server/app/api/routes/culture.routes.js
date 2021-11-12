const express = require("express");
const router = express.Router();

const { createCulture, getAllCultures, getCultureById } = require("../controllers/culture.controller");

router.post("/create", createCulture );
router.get("/", getAllCultures);
router.get("/:cultureId", getCultureById);

module.exports = router;