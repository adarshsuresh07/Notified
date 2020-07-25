const sgMail = require('@sendgrid/mail')
const keys = require('../config/keys')
sgMail.setApiKey(keys.sendgridKey)


module.exports = function sendVerificationEmail(to, token) {
    const msg = {
        to: to.email,
        from: keys.sendgSender,
        subject: 'Verify Your Email',
        text: 'Welcome user',
        html: `<strong>Hello ${to.fullname}</strong><p>Click on this link to verify your email <br> ${keys.domain}/verification/${token}</p>Thanks for signing up to Notified :)`,
    }
    sgMail.send(msg)
        .then(res => console.log("Success : " + res))
        .catch(err => console.log("Error : " + err))
    
}

