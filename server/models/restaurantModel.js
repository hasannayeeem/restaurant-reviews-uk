const mongoose = require("mongoose");

const restaurantModel = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    cuisine: {
      type: String,
    },
    rating: {
      type: String,
    },
    reviews: [
      {
        // id: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "review",
        // },
        review: {
          type: String,
        },
        name: {
          type: String,
        },
        rating: {
            type: Number,
          },
        userId: {
            type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("restaurant", restaurantModel);
