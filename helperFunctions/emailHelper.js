const sgMail = require('@sendgrid/mail')
const keys = require('../config/keys')
sgMail.setApiKey(keys.sendgridKey)


module.exports = function sendVerificationEmail(to, token) {
    const msg = {
        to: to.email,
        from: keys.sendgSender,
        subject: 'Verify Your Email',
        text: 'Welcome user',
        html: `<strong>
                    Hello ${to.fullname}
                </strong>
                <p>You're on your way!
                    <br>Let's confirm your email address.</p>
                <center><a href="${keys.domain}/verification/${token}">
                    <button type="button" 
                        style="background-color: #008CBA;border: none;
                            color: white; padding: 15px 32px; text-align: center;
                            display: inline-block; font-size: 12px; margin: 4px 2px;">
                        Confirm Email Address</button>
                <a/></center>
                <p>Thanks for signing up to Notified :)</p>
                `
    }
    sgMail.send(msg)
        .then(res => console.log("Success : " + res))
        .catch(err => console.log("Error : " + err))
    
}

