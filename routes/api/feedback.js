const express = require("express")
const router = express.Router()
const feedbackHandler = require('../../helperFunctions/feedbackemail')
const Validator = require("validator")

// @route POST api/feedback/
// @desc Send feedback
// @access Public
router.post("/add", (req, res) => {
    const data = {
        email: req.body.email,
        feedback: req.body.feedback
    }
    if (Validator.isEmpty(data.email)) {
        return res.status(400).json({ msg: "Email should be present" })
    } else if (!Validator.isEmail(data.email)) {
        return res.status(400).json({ msg: "Not a valid email" })
    }
    else {
        feedbackHandler(data)
        res.json({
            msg: 'Feedback sent successfully',
        })
        // res.status(400).json({
        //     msg: 'Unable to send feedback',
        //     error: err
        // })
    }
})

module.exports = router
