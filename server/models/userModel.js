const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
	},
	name: {
		type: String,
		// required: true,
		// minlength: 3,
		// maxlength: 50,
	},
	userName: {
		type: String,
		// required: true,
		// minlength: 5,
		// unique: true,
		// maxlength: 50,
	},
	address: {
		type: String,
		// required: true,
		// minlength: 5,
		// maxlength: 255,
	},
	currentAddress: {
		type: String,
		// required: true,
		// minlength: 5,
		// maxlength: 255,
	},
	isPaid: {
		type: Boolean,
		default: false,
	},
	zip: {
		type: Number,
		// required: true,
	},
	currentZip: {
		type: Number,
		// required: true,
	},
	phone: {
		type: String,
		// required: true,
		// minlength: 7,
		// maxlength: 15,
	},
	country: { 
		type: String,
		// required: true,
		// minlength: 3,
	},
	ambiance: { 
		type: String,
		// required: true,
		// minlength: 3,
	},
	dietry: { 
		type: String,
		// required: true,
		// minlength: 3,
	},
	cuisines: { 
		type: String,
		// required: true,
		// minlength: 3,
	},
	currentCountry: { 
		type: String,
		// required: true,
		// minlength: 3,
	},
	nid: {
		type: String,
		// required: true,
		// minlength: 11,
		// maxlength: 20,
	},
	photo: String,
	role: {
		type: String,
		// enum: ['engineer', 'worker', 'admin'],
	},
	vip: Boolean,
	admin: {
		type: Boolean,
	},
	userInfo: String,
})

const user = mongoose.model('user', userSchema)
module.exports = user