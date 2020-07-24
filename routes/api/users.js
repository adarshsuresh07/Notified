const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")
const User = require("../../models/User")
const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")

const sendEmail = require('../../helperFunctions/emailHelper')



// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ msg: "Email already exists" })
        } else {
            const newUser = new User({
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password
            })
            // Hash password 
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err
                newUser.password = hash
                newUser
                    .save()
                    .then(user => {
                        const payload = {
                            id: user.id,
                            fullname: user.fullname
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 36000 },
                            (err, token) => {
                                if (err) res.status(400).json({
                                    msg: "Token generation failed",
                                    error: err
                                })
                                sendEmail(newUser.email, token)
                                res.json({
                                    msg: "Confirmation email sent"
                                })
                            }
                        )
                        res.json({ 
                            msg: 'Registration successful',
                            newUser: user 
                        })
                    }) 
                    .catch(err => console.log({ 
                        msg: 'Unable to register user',
                        error: err 
                    }))
                })
            })

        }
    })
})



// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body)
    if (!isValid) {
        return res.status(400).json(errors)
    }
    const email = req.body.email
    const password = req.body.password
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ msg: "Email not found" })
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    fullname: user.fullname
                }
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 36000 },
                    (err, token) => {
                        if (err) res.status(400).json({
                            msg: "Token generation failed",
                            error: err
                        })
                        res.json({
                            msg: "Login successful",
                            user: user,
                            token: token
                        })
                    }
                )
            } else {
                return res.status(400).json({ msg: "Password incorrect" })
            }
        })
    })
})



// @route GET api/users/getuser/:id
// @desc Get user details
// @access Private
router.get("/getuser/:email", (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            const userData = {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                verified: user.verified,
                todo: user.todo,
                applied: user.applied
            }
            res.json(userData)
        })
        .catch(err => 
            res.status(404).json({ 
                msg: 'User not found',
                error: err 
            })
        )
})

// @route DELETE api/users/delete/:id
// @desc Delete a user
// @access Private
router.delete("/delete/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
        .then(user => {
            res.json({ 
                msg: 'User account deleted successfully',
                deleted: user
            })
        })
        .catch(err => {
            res.status(400).json({ 
                msg: 'No such user',
                error: err
            })
        })
})



module.exports = router