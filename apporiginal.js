// mongodb+srv://jonnsroger:0000@cluster0.llzaiq5.mongodb.net/bookingApp

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://jonnsroger:0000@cluster0.llzaiq5.mongodb.net/bookingApp"
);

// Define Booking Schema
const bookingSchema = new mongoose.Schema({
  from: String,
  to: String,
  departDate: String,
  duration: String,
  adults: Number,
  children: Number,
});

const Booking = mongoose.model("Booking", bookingSchema);

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve userbookings.html
app.get("/userbookings", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "userbookings.html"));
});

// Handle form submissions
app.post("/submit-booking", async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    await newBooking.save();
    res.json({ message: "Booking saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save booking" });
  }
});

// Get all bookings
app.get("/get-bookings", async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch bookings" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
