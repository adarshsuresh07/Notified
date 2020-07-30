require('dotenv').config()

module.exports = {
    mongoURI : process.env.MONGO_URI,
    secretOrKey : process.env.JWT_SECRET,
    sendgridKey: process.env.SENDGRID_API_KEY,
    sendgSender: process.env.SENDGRID_SENDER,
    owner: process.env.OWNER,
    domain: process.env.DOMAIN,
    port: process.env.PORT,
    env: process.env.NODE_ENV
}