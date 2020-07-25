const mongoose = require("mongoose")
const Schema = mongoose.Schema

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
    active: {
        type: Boolean,
        default: true
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
        type: mongoose.ObjectId,
        required: true
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

module.exports = Opening = mongoose.model("opening", OpeningSchema)
