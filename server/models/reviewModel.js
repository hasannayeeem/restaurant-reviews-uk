const mongoose = require("mongoose");

const reviewModel = new mongoose.Schema({
  comment: {
    type: String,
    require: true,
  },
  rating:{
      type: Number,
    },
  userId:{
      type: String,
    },
});

module.exports = mongoose.model("review", reviewModel);