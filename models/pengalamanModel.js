const mongoose = require("mongoose");

const expSchema = new mongoose.Schema(
  {
    org: {
      type: String,
      required: true,
    },
    posisi: {
      type: String,
      required: true,
    },
    desc_org: {
      type: String,
      required: true,
    },
    loc: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    startYear: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
    endYear: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      // required: true,
    },
    foto: {
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

module.exports = mongoose.model("Exp", expSchema);
