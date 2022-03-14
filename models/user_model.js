const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            // min: 8,
            // max: 20,
            // required:[true, "Password, minimum 8 and max 20 characters long."]
        },
        location: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        // review: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Review" 
        // }],
        // post: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Post"
        // }],
    }
);



module.exports = User  = mongoose.model('User', userSchema);