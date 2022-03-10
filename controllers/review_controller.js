const express = require('express');
const router = express.Router();
const { Review, List } = require("../models");



router.get("/", async (req, res) => {
    try {
    res.json(await Review.find({}));
    } catch (error) {
    
    res.status(400).json(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
    const review = await Review.create(req.body);
    return res.status(200).json(review)
    } catch (error) {
    res.status(400).json(error);
    }
});


router.put("/:id", async (req, res) => {
    try {
        res.json(
            await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.json(await Review.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router