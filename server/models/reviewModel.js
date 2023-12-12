const mongoose = require("mongoose");

const reviewModel = new mongoose.Schema({
  review: {
    type: String,
  },
  rating:{
      type: Number,
    },
  userId:{
    type: String,
    required: true,
    },
  restaurantId:{
      type: String,
    },
});

module.exports = mongoose.model("review", reviewModel);