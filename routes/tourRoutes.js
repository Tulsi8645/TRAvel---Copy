const express = require("express");
const { addTour, getTours } = require("../controllers/tourController");

const router = express.Router();

router.post("/add-tour", addTour);
router.get("/get-tours", getTours);

module.exports = router;
