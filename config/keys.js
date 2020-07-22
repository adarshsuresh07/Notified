require('dotenv').config()

module.exports = {
    mongoURI : process.env.MONGO_URI,
    secretOrKey : process.env.JWT_SECRET,
    sendgridKey: process.env.SENDGRID_API_KEY,
    senderSender: process.env.SENDGRID_SENDER
}