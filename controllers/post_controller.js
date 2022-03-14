const express = require('express');
const router = express.Router();
const { Post } = require("../models");
const { modelName} = require("../models/post_model");


router.get("/", async (req, res) => {
    try {
    res.json(await Post.find({}));
    } catch (error) {
    
    res.status(400).json(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        return res.status(200).json(list)
    } catch (error) {
        res.status(400).json(error);
    }
});


router.put("/:id", async (req, res) => {
    try {
        res.json(
            await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            );
        } catch (error) {
            res.status(400).json(error);
        }
    });
    
    router.delete("/:id", async (req, res) => {
        try {
            res.json(await Post.findByIdAndRemove(req.params.id));
        } catch (error) {
            res.status(400).json(error)
        }
    })
    
    router.get("/:id", async (req, res) => {
        try {
            res.json(await Post.findOne({"_id": req.params.id})); 
        } catch (error) {
            res.status(400).json(error)
        }
    });
    module.exports = router