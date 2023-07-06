const mongoose = require("mongoose");

const profilSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tlp: {
      type: Number,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    kota: {
      type: String,
      required: true,
    },
    kec: {
      type: String,
      required: true,
    },
    kodepos: {
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

module.exports = mongoose.model("Profil", profilSchema);
