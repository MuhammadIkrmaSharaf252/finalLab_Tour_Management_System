const Visitor = require("../models/Visitor");

exports.addVisitor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const visitor = new Visitor({ name, email });
    await visitor.save();
    res.status(201).json({ message: "Visitor registered successfully", visitor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVisitorActivity = async (req, res) => {
  try {
    const visitors = await Visitor.find().populate("visitedAttractions");
    const activity = visitors.map((visitor) => ({
      name: visitor.name,
      email: visitor.email,
      reviewedCount: visitor.visitedAttractions.length,
    }));
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
