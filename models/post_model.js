const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
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
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: "622f8f427a42cdd2ae251063"
        },
    }
);


module.exports = Post = mongoose.model('Post', postSchema);