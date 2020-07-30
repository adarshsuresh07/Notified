const sgMail = require('@sendgrid/mail')
const keys = require('../config/keys')
sgMail.setApiKey(keys.sendgridKey)


module.exports = function sendVerificationEmail(data) {
    const msg = {
        to: data.email,
        from: keys.sendgSender,
        subject: 'Thanks for writing to us',
        text: 'Feedback',
        html: `<strong>
                    Hi
                </strong>
                <p>Thanks for the Feedback</p>
                <p>We will get back to you soon with many changes with all your support</p>
                <p>Thanks for using Notified :)</p>
                `
    }
    const msg2 = {
        to: keys.fbHolder,
        from: keys.sendgSender,
        subject: 'Notified feedback',
        text: 'Feedback',
        html: `<strong>
                    You've got a feedback from ${data.email}
                </strong>
                <p>Here is the feedback:
                    <br>${data.feedback}</p>
                `
    }
    sgMail.send(msg)
        .then(res => console.log("Success : " + res))
        .catch(err => console.log("Error : " + err))
    sgMail.send(msg2)
        .then(res => console.log("Success : " + res))
        .catch(err => console.log("Error : " + err))

}

