const router = require('express').Router();
const { prependOnceListener } = require('../models/location_model');
const List = require('./models/list_model');


router.get("/list", async (req, res) => {
    try {
        res.json(await List.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post("/list", async (req, res) => {
    try {
        res.json(await List.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put("/list/:id", async (req, res) => {
    try {
        res.json(await List.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error)
    }
});

router.delete("/list/:id", async (req, res) => {
    try {
        res.json(await List.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;