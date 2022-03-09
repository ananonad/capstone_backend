const express = require('express');
const router = express.Router();
const { List } = require("../models");
const { modelName} = require("../models/list_model");


app.get("/", async (req, res) => {
    try {
    res.json(await List.find({}));
    } catch (error) {
    
    res.status(400).json(error);
    }
});

app.post("/", async (req, res, next) => {
    try {
    const list = await List.create(req.body);
    return res.status(200).json(list)
    } catch (error) {
    res.status(400).json(error);
    }
});


app.put("/:id", async (req, res) => {
    try {
        res.json(
            await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

app.delete("/:id", async (req, res) => {
    try {
        res.json(await List.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error)
    }
})