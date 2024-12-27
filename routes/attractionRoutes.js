const express = require("express");
const { addAttraction, getTopRatedAttractions } = require("../controllers/attractionController");
const router = express.Router();

router.post("/", addAttraction);
router.get("/top-rated", getTopRatedAttractions);

module.exports = router;
