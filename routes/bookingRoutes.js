const express = require("express");
const {
  saveBooking,
  getBookings,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/submit-booking", saveBooking);
router.get("/get-bookings", getBookings);

module.exports = router;
