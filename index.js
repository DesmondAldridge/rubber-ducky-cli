const mongoose = require('mongoose');

//Map global promise
mongoose.Promise = global.Promise;
//Connect to db
const db = mongoose.connect('mongodb://localhost:27017/duckycli', { useNewUrlParser: true , useUnifiedTopology: true});

//Import model
const Review = require('./models/codeReview');

//Add Review
const addReview = (review) => {
    Review.create(review).then(review => {
        console.info('New Review Added');
        db.close();
    })
}

//Find Review
const findReview = (name) => {
    //Make case insensitive
    const search = new RegExp(name, 'i');
    Review.find({$or: [{reviewName: search}, {reviewDate: search}]})
    .then(review => {
        console.info(review);
        console.info(`${review.length} matches`);
        db.close();
    });
}

//Update Review
const updateReview = (_id, review) => {
    Review.update({ _id }, review)
    .then(review => {
        console.info('Review has been updated');
        db.close();
    });
}

//Remove Review
const removeReview = (_id) => {
    Review.remove({ _id })
    .then(review => {
        console.info('Review has been removed');
        db.close();
    });
}

//List Reviews
const listReviews = () => {
    Review.find()
    .then(reviews => {
        console.info(reviews);
        console.info(`${reviews.length} reviews`)
        db.close();
    })
}

const askDuck = () => {
    console.log('QUACK')
}



//Export All Methods
module.exports = {
    addReview,
    findReview,
    updateReview,
    removeReview,
    listReviews,
    askDuck
}