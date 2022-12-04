// const mongoose = require("mongoose");
// // const Market = mongoose.model("Market");
// const Review = mongoose.model("Review");
const Review = require("../models/review");
const cors = require("cors");   

const now = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
// const now = "2022-12-03" 

exports.createReview = (async (req, res, next) => {
    const review = await Review.findOne({
        reportDate: now
    });
    console.log(review)

    if (review == null) {
        await Review.create({
            puas: req.body.puas,
            biasa: req.body.biasa,
            tidakPuas: req.body.tidakPuas,
            reportDate: now
        });
    } else {
        await Review.updateOne({ reportDate: now }, {
            // $inc: {
                puas: req.body.puas,
                biasa: req.body.biasa,
                tidakPuas: req.body.tidakPuas
            // }
        });

    }

    res.status(201).json({
        success: true,
        review,
    });

})
exports.getReviewNow=  (cors(), async (req, res, next) => {
    const reviews = await Review.find({reportDate:now});
    res.status(200).json({
        success: true, reviews
    });
});

exports.getAllReview = (async (req, res, next) => {
    const reviews = await Review.find();
    res.status(200).json({
        success: true, reviews
    });
});





