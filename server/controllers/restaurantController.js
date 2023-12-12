const mongoose = require("mongoose");
const Restaurant = require("../models/restaurantModel");
const asyncHandler = require("express-async-handler");

const createRestaurant = asyncHandler(async (req, res) => {
    const {
      name,
      image,
      description,
      location,
      cuisine,
      rating,
    } = req.body;
  
    const buildRestaurant = await new Restaurant({
      name,
      image,
      description,
      location,
      cuisine,
      rating,
    });
  
    const createRestaurant = await buildRestaurant.save();
  
    return res.status(200).json({
      createRestaurant,
      message: "successfully created a restaurant Demo",
    });
  });


  const getAllRestaurant = asyncHandler(async (req, res) => {
    const allRestaurant = await Restaurant.find({});
    if (!allRestaurant) {
    } else {
      return res.status(200).json({
        allRestaurant,
      });
    }
  });

  const getRestauranstsByUserEmail = asyncHandler(async (req, res) => {
    const email = req.query.email;
    const myRestaurants = await Restaurant.find({});
    // let perticipatedRestaurants = [];

    const restaurants = myRestaurants.filter((restaurants => (restaurants.users.filter((user => (user.userEmail === email)))).length && restaurants))
    // for(let i=0;i<myRestaurants.length;i++){
    //   const restaurant = myRestaurants[i];
    //   console.log('EEEEEEEEEEEEE: '+restaurant)
    //   for(let j=0;j<restaurant.users.length;j++){
    //     const quser = restaurant.users[j];
    //     if(quser.userEmail===email){
    //       console.log('matched:::::::    '+email);

    //       perticipatedRestaurants.push(restaurant);
    //       console.log(perticipatedRestaurants);
    //     }
    //   }
    // }
    // console.log(perticipatedRestaurants);
    // if (!perticipatedRestaurants) {
    //   return
    // } else {
    //   return res.status(200).json({
    //     perticipatedRestaurants,
    //   });
    // }

    if (!restaurants) {
      return
    } else {
      return res.status(200).json({
        restaurants,
      });
    }
  });

  const getRestaurantType = asyncHandler(async (req, res) => {
    const { restaurant } = req.body;
  
    if (restaurant.toLowerCase() === "all") {
      const allRestaurant = await Restaurant.find();
      return res.status(200).json({
        allRestaurant,
      });
    } else {
      const allRestaurant = await Restaurant.find({restaurantType : restaurant});
      return res.status(200).json({
        allRestaurant,
      });
    }
  });
  
  const getSingleRestaurant = asyncHandler(async (req, res) => {
    const singleRestaurant = await Restaurant.findById(req.params.id);
  
    if (!singleRestaurant) {
    } else {
      return res.status(200).json({
        singleRestaurant,
      });
    }
  });


  const submitRestaurant = asyncHandler(async (req, res) => {
    const user = {
      userId: req.body.userId,
      userName: req.body.userName,
      userEmail: req.body.email,
      marks: req.body.mark,
      paid: req.body.paid,
    };
  
    const findRestaurant = await Restaurant.findById(req.params.restaurant_id);
    findRestaurant.users.push(user);
    const saveSubmit = await findRestaurant.save();
  
    return res.status(200).json({
      saveSubmit: saveSubmit,
      message: "Successfully Restaurant Submitted ",
    });
  });


  const deleteRestaurant = asyncHandler(async (req, res) => {
    const deleteRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    const allRestaurant = await Restaurant.find({});
    if (!deleteRestaurant) {
      res.status(400);
      throw new Error("Something Went Wrong!");
    } else {
      return res.status(200).json({
        deleteRestaurant,
        allRestaurant,
        message: "deleted successfully",
      });
    }
  });

  module.exports = {
    createRestaurant,
    getAllRestaurant,
    getRestauranstsByUserEmail,
    getRestaurantType,
    getSingleRestaurant,
    submitRestaurant,
    deleteRestaurant,
  };