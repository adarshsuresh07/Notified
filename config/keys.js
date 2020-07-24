require('dotenv').config()

module.exports = {
    mongoURI : "mongodb+srv://haseena-hassan:haseena@2199@notified-version-1-0.jtpfl.mongodb.net/Notified?retryWrites=true&w=majority",
    secretOrKey : process.env.JWT_SECRET,
    sendgridKey: process.env.SENDGRID_API_KEY,
    senderSender: process.env.SENDGRID_SENDER
}