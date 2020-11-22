const mongoose = require('mongoose');

//Code Review Schema

const reviewSchema = mongoose.Schema({
    reviewName: { type: String },
    reviewDate: { type: String },
    issue: { type: String },
    solution: { type: String }
});

module.exports = mongoose.model('Review', reviewSchema); 