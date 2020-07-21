import { Schema, model } from "mongoose"

const OpeningSchema = new Schema({
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    due: {
        type: Date
    },
    description: {
        type: String
    },
    contact: {
        type: String
    },
    applylink: {
        type: String
    },
    furtherdetails: {
        type: String
    },
    image: {
        type: String
    },
    posted_by: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})
export default Opening = model("opening", OpeningSchema)
