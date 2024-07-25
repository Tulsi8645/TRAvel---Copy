const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  from: String,
  to: String,
  departDate: String,
  duration: String,
  adults: Number,
  children: Number,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
