const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");
const Restaurant = require("../models/restaurantModel");

const createReviewRestaurant = asyncHandler(async (req, res) => {
  const { review, rating, userId, restaurantId } = req.body;
  const buildRestaurant = new Review({
    review,
    rating,
    userId,
    restaurantId,
  });

  const createReview = await buildRestaurant.save();

  const restaurant = await Restaurant.findById(restaurantId);
  restaurant.reviews.push(createReview);
  const totalRating = restaurant.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  restaurant.rating = totalRating / restaurant.reviews.length;
  await restaurant.save();

  return res.status(200).json({
    createReview,
    message: "restaurant created successfully",
  });
});

module.exports = {
  createReviewRestaurant,
};
