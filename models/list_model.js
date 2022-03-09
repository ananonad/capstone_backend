const mongoose = require('mongoose');

const listSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }
);



module.exports = List = mongoose.model('List', listSchema);
