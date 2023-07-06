const mongoose = require("mongoose");

const galeriSchema = new mongoose.Schema(
  {
    gambar: {
      type: String,
      // required: true,
    },
    judul: {
      type: String,
      required: true,
    },
    desc: {
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

module.exports = mongoose.model("Gallery", galeriSchema);
