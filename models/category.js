const mongoose = require("mongoose");

const categoryScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      uppercase: true,
      unique: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categoryScheme);
