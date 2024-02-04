const mongoose = require("mongoose")
const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: {type:String},
  password:String,
  
},{timestamps:true});

module.exports = mongoose.model('User', userSchema);