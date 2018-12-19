const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username :{
        type: String,
        required: [true, "Choose a Username"],
        minlength: [3, "Names must be at least 3 characters long"]
    },
    password:{
        type: String,
        required: [true, "please enter a password"],
        minlength: [8, "Passwords must be at least 8 characters long"],
        bcrypt: true
    },
    email: {
        type: String,
        required: [true, "Please enter a contact email"],
       
    },
    firstName :{
        type: String,
        required: [true, "How do you want people to call you?"],
        minlength: [2, "Please use a name at least 2 characters long"]
    },
    masterStatus: {
        type: Boolean,
        default: false
    },
    campaigns: [],
    characters:[],
    zipCode: {
        required: [true, "Please enter your local zip code so new friends can find you"],
        type: Number
        },
    preferences: [],
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
})
UserSchema.plugin(require("mongoose-bcrypt"))

mongoose.model('User', UserSchema)