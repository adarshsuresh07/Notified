const mongoose = require("mongoose")
const Schema = mongoose.Schema
 
const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  todo: {
    type: [{id :  mongoose.ObjectId}]
  },
  applied: {
    type: [{id :  mongoose.ObjectId}]
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model("users", UserSchema)
