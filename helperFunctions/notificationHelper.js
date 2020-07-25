const sgMail = require('@sendgrid/mail')
const keys = require('../config/keys')
sgMail.setApiKey(keys.sendgridKey)
const User = require('../models/User')



const sentNotification = function (to, publisher, details) {
    const msg = {
        to: to.email,
        from: keys.sendgSender,
        subject: 'New opening added to Notified',
        text: 'Welcome user',
        html: `<strong>Hello ${to.fullname}</strong><p>${publisher} added a new ${details.category} opening at ${details.company}. Check out Notified for more details.</p>Thanks for using Notified :)`,
    }
    sgMail.send(msg)
        .then(res => console.log("Success : " + res))
        .catch(err => console.log("Error : " + err))
}


module.exports = function notificationHandler(opening) {
    const details = {
        company: opening.company,
        category: opening.category
    }
    User.findById(opening.posted_by)
        .then(user => {
            const author = user
            User.find()
                .then(users => {
                    users.forEach(user => {
                        if(user.verified && !(user._id.equals(author._id))) {
                            sentNotification(user, author.fullname, details)
                        }
                    })
                })
                .catch(e => console.log(e))
        })
    
}