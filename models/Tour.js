const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
