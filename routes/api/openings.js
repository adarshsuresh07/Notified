const express = require("express")
const router = express.Router()
const Opening = require("../../models/Opening")
const notificationHandler = require('../../helperFunctions/notificationHelper')


// @route POST api/openings/create
// @desc Create new opening
// @access Public
router.post("/create", (req, res) => {
    Opening.findOne({
        position: req.body.position,
        company: req.body.company,
        category: req.body.category
    })
        .then(opening => {
            if (opening) {
                return res.status(400).json({ msg: "Opening already exists" })
            } else {
                Opening.create(req.body)
                    .then(opening => {
                        notificationHandler(opening)
                        res.json({
                            msg: 'Opening added successfully',
                            newEntry: opening
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            msg: 'Unable to add opening',
                            error: err
                        })
                    })
            }
        })
})



// @route GET api/openings/all
// @desc Get all Openings
// @access Private
router.get("/all", (req, res) => {
    Opening.find()
        .then(openings => {
            res.json(openings)
        })
        .catch(err =>
            res.status(404).json({
                msg: 'No openings found',
                error: err
            })
        )
})




// @route GET api/openings/:id
// @desc Get a specific Opening 
// @access Public
router.get("/:id", (req, res) => {
    Opening.findById(req.params.id)
        .then(opening => {
            res.json(opening)
        })
        .catch(err =>
            res.status(404).json({
                msg: 'Opening not found',
                error: err
            })
        )
})




// @route PUT api/openings/update/:id
// @desc Update an Opening
// @access Public
router.put("/update/:id", (req, res) => {
    Opening.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(opening => {
            res.json({
                msg: 'Updated successfully',
                updatedTo: opening
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Unable to update the Database',
                error: err
            })
        })
})




// @route DELETE api/openings/delete/:id
// @desc Delete an Opening
// @access Private
router.delete("/delete/:id", (req, res) => {
    Opening.findByIdAndRemove(req.params.id, req.body)
        .then(opening => {
            res.json({
                msg: 'Opening deleted successfully',
                deleted: opening
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'No such opening',
                error: err
            })
        })
})


module.exports = router