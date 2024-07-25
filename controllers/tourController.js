const Tour = require("../models/Tour");

const addTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    await newTour.save();
    res.json({ message: "Tour added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add tour" });
  }
};

const getTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    res.json({ success: true, tours });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch tours" });
  }
};

module.exports = { addTour, getTours };
