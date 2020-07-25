const express = require("express")
const router = express.Router()
const jwt_decode = require("jwt-decode")
const User = require("../../models/User")




// @route POST user/verification/:token
// @desc Verify registered user 
// @access Private
router.post("/:token", (req, res) => {
    const decoded = jwt_decode(req.params.token)
    User.findById(decoded.id)
        .then(user => {
            user.update({verified: true})
                .then(() => {
                    res.json({
                        msg: "User account verified",
                        user: user.fullname
                    })
                })
                .catch(err => {
                    res.json({
                        msg: "User account not verified",
                        error: err
                    })
                })
        })
        .catch(err => 
            res.status(404).json({ 
                msg: 'User not found',
                error: err 
            })
        )
})


module.exports = router