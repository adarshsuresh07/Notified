const express = require("express")
const router = express.Router()
const Opening = require("../../models/Opening")


// @route POST api/openings/create
// @desc Create new opening
// @access Public
router.post("/create", (req, res) => {
    
})



// @route GET api/openings/all
// @desc Get all Openings
// @access Public
router.get("/all", (req, res) => {

})




// @route GET api/openings/:id
// @desc Get a specific Opening 
// @access Public
router.get("/:id", (req, res) => {

})




// @route PUT api/openings/update
// @desc Update an Opening
// @access Public
router.put("/update", (req, res) => {

})



// @route DELETE api/openings/update
// @desc Delete an Opening
// @access Public
router.delete("/delete", (req, res) => {

})


module.exports = router