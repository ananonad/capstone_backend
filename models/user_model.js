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
        location: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        }
    }
);

const User  = mongoose.model('User', userSchema);

module.exports = User;