const sgMail = require('@sendgrid/mail')
const keys = require('../config/keys')
sgMail.setApiKey(keys.sendgridKey)




module.exports = function sendVerificationEmail(to, token) {
    const msg = {
        to: to,
        from: keys.sendgSender,
        subject: 'Verify Your Email',
        text: `Click on this link to verify your email ${keys.sendgSender}/verification?token=${token}&email=${to}`,
        html: '<strong>Thanks for signing up to Notified</strong>',
    }
    sgMail.send(msg)
        .then(() => console.log("Confirmation Email sent successfully"))
        .catch(err => console.log(err))
        // .then(() => {}, error => { console.error(error)
        // if (error.response) console.error(error.response.body) })
    
}

