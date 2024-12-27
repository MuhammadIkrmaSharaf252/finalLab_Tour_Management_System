const Review = require("../models/Review");
const Attraction = require("../models/Attraction");
const Visitor = require("../models/Visitor");

exports.addReview = async (req, res) => {
  try {
    const { attractionId, visitorId, score, comment } = req.body;

    const visitor = await Visitor.findById(visitorId);
    if (!visitor.visitedAttractions.includes(attractionId)) {
      throw new Error("Visitor must visit the attraction before reviewing.");
    }

    const review = new Review({ attraction: attractionId, visitor: visitorId, score, comment });
    await review.save();

    const reviews = await Review.find({ attraction: attractionId });
    const avgRating = reviews.reduce((sum, review) => sum + review.score, 0) / reviews.length;

    await Attraction.findByIdAndUpdate(attractionId, { rating: avgRating });

    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
