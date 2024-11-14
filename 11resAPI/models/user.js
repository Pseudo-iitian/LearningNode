const mongoose = require('mongoose');

// user schema has been design
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    job_title:{
        type: String,
    },
    gender:{
        type:String,
    }},
    {timestamps: true}
);

const User = mongoose.model("user",userSchema); // it create as colleciton with plural name of user as users

module.exports = User;
