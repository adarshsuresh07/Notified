import { Schema, model } from "mongoose"
import List from './List'

const UserSchema = new Schema({
  name: {
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
    type: [List]
  },
  applied: {
    type: [List]
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})
export default User = model("user", UserSchema)