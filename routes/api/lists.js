const express = require("express")
const router = express.Router()
const User = require("../../models/User")


// @route POST api/lists/todo/add
// @desc Add to todo list
// @access Private
router.post("/todo/add", (req, res) => {
    User.findById(req.body.userid)
        .then(user => {
            var exist = false
            user.todo.forEach(element => {
                if(element.id.equals(req.body.openingid)){
                    exist = true
                }
            })
            if(exist){
                res.status(400).json({ 
                    msg: "Item already in todo"
                })
            } else {
                user.todo.unshift({id : req.body.openingid})
                user.save()
                    .then(user => res.status(200).json({ 
                        msg: "Item added to todo",
                        user: user.fullname,
                        updated_todo: user.todo
                    }))
                    .catch(err => res.status(400).json({
                        msg: "Failed to add item to todo",
                        error: err
                    }))
            }
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
    User.findById(req.body.userid)
        .then(user => {
            user.todo.splice(user.todo.findIndex(t => t.id.equals(req.body.openingid)) , 1)
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Item removed from todo",
                    user: user.fullname,
                    updated_todo: user.todo
                }))
                .catch(err => res.status(400).json({
                    msg: "Failed to remove item from todo",
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
    User.findById(req.body.userid)
        .then(user => {
            user.todo.splice(user.todo.findIndex(t => t.id.equals(req.body.openingid)) , 1)
            user.applied.unshift({id : req.body.openingid})
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Item moved from todo to applied",
                    user: user.fullname,
                    updated_todo: user.todo,
                    updated_applied: user.applied
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
    User.findById(req.body.userid)
        .then(user => {
            user.applied.splice(user.applied.findIndex(t => t.id.equals(req.body.openingid)) , 1)
            user.todo.push({id : req.body.openingid})
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Item moved back to todo",
                    user: user.fullname,
                    updated_todo: user.todo,
                    updated_applied: user.applied
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
    User.findById(req.body.userid)
        .then(user => {
            user.todo.splice(0, user.todo.length)
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Todo list cleared",
                    user: user.fullname,
                    updated_todo: user.todo
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
    User.findById(req.body.userid)
        .then(user => {
            user.applied.splice(0, user.applied.length)
            user.save()
                .then(user => res.status(200).json({ 
                    msg: "Applied list cleared",
                    user: user.fullname,
                    updated_applied: user.applied
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