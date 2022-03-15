const express = require('express');
const router = express.Router();
const { List } = require("../models");
const { modelName} = require("../models/list_model");


router.get("/", async (req, res) => {
    try {
    res.json(await List.find({}));
    } catch (error) {
    
    res.status(400).json(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
    const list = await List.create(req.body);
    return res.status(200).json(list)
    } catch (error) {
    res.status(400).json(error);
    }
});


router.put("/:id", async (req, res) => {
    try {
        res.json(
            await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.json(await List.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error)
    }
});

router.get("/:id", async (req, res) => {
    try {
        res.json(await List.findOne({"_id": req.params.id})); 
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router