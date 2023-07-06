const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    file: {
      type: String,
      // required: true,
    },
    judul: {
      type: String,
      required: true,
    },
    isi_berita: {
      type: String,
      required: true,
    },
    kategori_id: {
      type: String,
      // required: true,
    },
    user_id: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Berita", newsSchema);
