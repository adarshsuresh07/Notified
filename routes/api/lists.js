const express = require("express")
const router = express.Router()
const Opening = require("../../models/Opening")


// @route POST api/lists/todo/add
// @desc Add to todo list
// @access Private
router.post("/todo/add", (req, res) => {
    
})



// @route POST api/lists/todo/remove
// @desc Remove to todo list
// @access Private
router.post("/todo/remove", (req, res) => {
    
})



// @route POST api/lists/applied/add
// @desc Add to applied list
// @access Private
router.post("/applied/add", (req, res) => {
    
})



// @route POST api/lists/applied/remove
// @desc Remove to applied list
// @access Private
router.post("/applied/remove", (req, res) => {
    
})


module.exports = router