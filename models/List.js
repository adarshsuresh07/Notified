import { Schema, model } from "mongoose"

const ListSchema = new Schema({
  id: {
    type: ObjectId,
    required: true
  }
})

export default List = model("list", ListSchema)