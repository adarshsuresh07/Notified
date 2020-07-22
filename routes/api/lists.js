const express = require("express")
const router = express.Router()
const User = require("../../models/User")


// @route POST api/lists/todo/add
// @desc Add to todo list
// @access Private
router.post("/todo/add", (req, res) => {
    User.findOne({ id: req.body.userid })
        .then(user => {
            user.todo.push({id : req.body.openingid})
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Item added to todo"
                }))
                .catch(err => res.status(400).json({
                    msg: "Failed to add item to todo",
                    error: err
                }))
        })
        .catch(err => res.status(400).json({
            msg: "Unable to find user",
            error: err
        }))
})



// @route POST api/lists/todo/remove
// @desc Remove from todo list
// @access Private
router.post("/todo/remove", (req, res) => {
    User.findOne({ id: req.body.userid })
        .then(user => {
            user.todo.pull({id : req.body.openingid})
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Item removed from todo"
                }))
                .catch(err => res.status(400).json({
                    msg: "Failed to remove item",
                    error: err
                }))
        })
        .catch(err => res.status(400).json({
            msg: "Unable to find user",
            error: err
        }))
})



// @route POST api/lists/applied/add
// @desc Move item from todo to applied
// @access Private
router.post("/applied/add", (req, res) => {
    User.findOne({ id: req.body.userid })
        .then(user => {
            user.todo.pull({id : req.body.openingid})
            user.applied.push({id : req.body.openingid})
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Item moved from todo to applied"
                }))
                .catch(err => res.status(400).json({
                    msg: "Failed to move item from todo to applied",
                    error: err
                }))
        })
        .catch(err => res.status(400).json({
            msg: "Unable to find user",
            error: err
        }))
})



// @route POST api/lists/applied/back
// @desc Move applied item back to todo
// @access Private
router.post("/applied/back", (req, res) => {
    User.findOne({ id: req.body.userid })
        .then(user => {
            user.applied.pull({id : req.body.openingid})
            user.todo.push({id : req.body.openingid})
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Item moved back to todo"
                }))
                .catch(err => res.status(400).json({
                    msg: "Failed to move item back to todo",
                    error: err
                }))
        })
        .catch(err => res.status(400).json({
            msg: "Unable to find user",
            error: err
        }))
})



// @route POST api/lists/todo/clear
// @desc Clear items in todo list
// @access Private
router.post("/todo/clear", (req, res) => {
    User.findOne({ id: req.body.userid })
        .then(user => {
            user.todo.pullAll()        // or loop and pop until length=0 :update
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Todo list cleared"
                }))
                .catch(err => res.status(400).json({
                    msg: "Failed to clear todo",
                    error: err
                }))
        })
        .catch(err => res.status(400).json({
            msg: "Unable to find user",
            error: err
        }))
})



// @route POST api/lists/applied/clear
// @desc Clear items in applied list
// @access Private
router.post("/applied/clear", (req, res) => {
    User.findOne({ id: req.body.userid })
        .then(user => {
            user.applied.pullAll()        // or loop and pop until length=0 :update
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Applied list cleared"
                }))
                .catch(err => res.status(400).json({
                    msg: "Failed to clear applied",
                    error: err
                }))
        })
        .catch(err => res.status(400).json({
            msg: "Unable to find user",
            error: err
        }))
})


module.exports = router