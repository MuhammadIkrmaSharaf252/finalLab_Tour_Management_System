const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  visitedAttractions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attraction" }],
});

const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
