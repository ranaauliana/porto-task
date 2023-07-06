const mongoose = require("mongoose");

const docSchema = new mongoose.Schema(
  {
    file: {
      type: String,
      // required: true,
    },
    judul: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", docSchema);
