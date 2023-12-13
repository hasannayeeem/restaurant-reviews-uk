const express = require('express');
// verify jwt middleware
// const checkLogin = require('../middlewares/checkLogin.js');


// user controllers
const {
	// postUser,
	getAllUser,
	singleUser,
	updateUser,
	deleteUser,
	emailPost,
	vipFinder,
	getAuthEngineer,
	singleUserByEmail,
} = require('../controllers/userController');

// restaurantController 
const {
	createRestaurant,
    getAllRestaurant,
    getRestauranstsByUserEmail,
    getRestaurantType,
    getSingleRestaurant,
    submitRestaurant,
    deleteRestaurant,
  } = require("../controllers/restaurantController");

//   reviewController
const {
	createReviewRestaurant,
  } = require("../controllers/reviewController");


const router = express.Router()

// user routes here
// router.post('/user', postUser)
router.get('/user', getAllUser)
router.get('/user/:id', singleUser)
// in this put method need the quer param as email
router.put('/user', updateUser)
router.delete('/user/:id', deleteUser)
router.post('/user', emailPost)
router.get('/vipUser', vipFinder)
router.get('/authEngineer/:email', getAuthEngineer)
router.get('/singleUserByEmail/:email', singleUserByEmail);

// restaurant routes 

router.post("/create-restaurant", createRestaurant);
router.post("/submit-restaurant/:restaurant_id", submitRestaurant);
router.post("/filter-restaurant-type", getRestaurantType);
router.get("/get-all-restaurant", getAllRestaurant);
router.get("/get-my-restaurants", getRestauranstsByUserEmail);
router.get("/get-single-restaurant/:id", getSingleRestaurant);
router.delete("/delete-restaurant/:id", deleteRestaurant);

// question routes 

router.post("/create-review", createReviewRestaurant);



module.exports = router;