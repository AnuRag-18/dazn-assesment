const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    streamingLink: {
        type: String,
        required: true
    }
});

const movie = new mongoose.model('Movie', schema);

module.exports = movie;