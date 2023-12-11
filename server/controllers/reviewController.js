const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");
const Restaurant = require("../models/restaurantModel");



const createReviewRestaurant = asyncHandler(async (req, res) => {
    const { question, options, answer } = req.body;
  
    const buildRestaurant = await new Question({
      question,
      options,
      answer
    });
  
    const createReview = await buildRestaurant.save();
  
    const allRestaurant = await Restaurant.find({});
  
    const restaurant = allRestaurant[allRestaurant.length - 1];
    restaurant.questions.push(createReview);
    await restaurant.save();
  
    return res.status(200).json({
      createReview,
      message: "restaurant created successfully",
    });
  });

  module.exports = {
    createReviewRestaurant,
  }