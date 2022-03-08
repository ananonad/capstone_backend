const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        rating: {
            min: [1, 'Rating must be from 1 to 5 stars.'],
            max: [5, 'Rating must be from 1 to 5 stars.'],
            required: true
        },
        title
    }
)