const Attraction = require("../models/Attraction");
const Review = require("../models/Review");

exports.addAttraction = async (req, res) => {
  try {
    const { name, location, entryFee } = req.body;
    const attraction = new Attraction({ name, location, entryFee });
    await attraction.save();
    res.status(201).json({ message: "Attraction added successfully", attraction });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTopRatedAttractions = async (req, res) => {
  try {
    const topAttractions = await Attraction.find().sort({ rating: -1 }).limit(5);
    res.status(200).json(topAttractions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
