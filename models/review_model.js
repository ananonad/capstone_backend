const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            min: [1, 'Rating must be from 1 to 5 stars.'],
            max: [5, 'Rating must be from 1 to 5 stars.'],
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
)


module.exports = Review  = mongoose.model('Review', reviewSchema);