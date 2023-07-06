const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    tags: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
