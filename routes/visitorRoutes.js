const express = require("express");
const { addVisitor, getVisitorActivity } = require("../controllers/visitorController");
const router = express.Router();

router.post("/", addVisitor);
router.get("/activity", getVisitorActivity);

module.exports = router;
