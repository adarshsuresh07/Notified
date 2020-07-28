const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwt_decode = require("jwt-decode")
const keys = require("../../config/keys")
const User = require("../../models/User")
const sendEmail = require('../../helperFunctions/emailHelper')
const Validator = require("validator")


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/email", (req, res) => {
    // const { errors, isValid } = validateRegisterInput(req.body)
    const data = req.body;
    if (Validator.isEmpty(data.email)) {
        return res.status(400).json({ msg: "Email field is required" })
    }
    if (!Validator.isEmail(data.email)) {
        return res.status(400).json({ msg: "Email is invalid" })
    }
    User.findOne({ email: data.email }).then(user => {
        if (user) {
            const payload = {
                id: user.id,
                fullname: user.fullname
            }
            jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 * 24 },
                (err, token) => {
                    if (err) res.status(400).json({
                        msg: "Token generation for verification failed",
                        error: err
                    })
                    sendEmail(user, token, "reset")
                }
            )
            res.json({
                msg: 'Email for reseting password sent',
            })
        }
        else {
            return res.status(400).json({ msg: "No user with this email id" })
        }
    })
})

// @route POST user/verification/:token
// @desc Verify registered user 
// @access Private
router.post("/password", (req, res) => {
    const data = req.body;
    var decoded='';
    try{
        decoded = jwt_decode(data.token);
    }
    catch{
        return res.status(400).json({ msg: "Invalid token error" })
    }
    User.findById(decoded.id)
        .then(user => {
            if (Validator.isEmpty(data.password)) {
                return res.status(400).json({ msg: "Password field is required" })
            }
            if (Validator.isEmpty(data.password2)) {
                return res.status(400).json({ msg: "Confirm password field is required" })
            }
            if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
                return res.status(400).json({ msg: "Password must be at least 6 characters" })
            }
            if (!Validator.equals(data.password, data.password2)) {
                return res.status(400).json({ msg: "Passwords must match" })
            }
            // Hash password 
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(data.password, salt, (err, hash) => {
                    if (err) throw err
                    var new_password = hash
                    user.update({ password: new_password })
                        .then(() => {
                            res.json({
                                msg: "Password reset successfull",
                                user: user.fullname
                            })
                        })
                        .catch(err => {
                            res.json({
                                msg: "Unable to reset the password",
                                error: err
                            })
                        })
                })
            })
        }).catch(err =>
            res.status(400).json({
                msg: "User doesn't exist",
                error: err
            })
        )
})
module.exports = router