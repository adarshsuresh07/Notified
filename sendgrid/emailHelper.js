const sgMail = require('@sendgrid/mail')
const { sendgridKey , sendgridSender } = require('../config/keys')
sgMail.setApiKey(sendgridKey)


module.exports = function sendVerificationEmail(to, token) {
    const msg = {
        to: to,
        from: sendgridSender,
        subject: 'Verify Your Email',
        text: `Click on this link to verify your email ${sendgridSender}/verification?token=${token}&email=${to}`,
        html: '<strong>Thanks for signing up to Notified</strong>',
    }
    sgMail.send(msg)
        .then(() => console.log("Confirmation Email sent successfully"))
        .catch(err => console.log(err))
        // .then(() => {}, error => { console.error(error)
        // if (error.response) console.error(error.response.body) })
    
}

