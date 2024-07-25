const Booking = require("../models/bookingModel");

const saveBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    await newBooking.save();
    res.json({ message: "Booking saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save booking" });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch bookings" });
  }
};

module.exports = { saveBooking, getBookings };
