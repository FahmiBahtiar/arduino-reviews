// const mongoose = require("mongoose");
// // const Market = mongoose.model("Market");
// const Review = mongoose.model("Review");
const Review = require("../models/review");
// const cors = require("cors");

// const now = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
// const now = "2022-12-06"
var date = new Date();
const now = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toJSON().slice(0, 10).replace(/-/g, '-');


// console.log(now)

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
      $inc: {
        puas: req.body.puas,
        biasa: req.body.biasa,
        tidakPuas: req.body.tidakPuas
      }
    });

  }

  res.status(201).json({
    success: true,
    review,
  });

})
exports.getReviewNow = (async (req, res, next) => {
  const reviews = await Review.findOne({ reportDate: now });
  res.status(200).json(
    reviews
  );
});

exports.getAllReview = (async (req, res, next) => {
  var startDate = req.query.startDate
  var endDate = req.query.endDate


  // res.header("Access-Control-Allow-Origin", '*'); // Update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ((startDate == "" || startDate == null || startDate == undefined) && (endDate == "" || endDate == null || endDate == undefined)) {
    let reviews = await Review.find().sort({ "reportDate": -1 });

    res.status(200).json(reviews);
  } else {
//2022-12-07

    const reviews = await Review.find({
      "reportDate": -1,
      reportDate: {
        
        $gte:startDate,
        $lte: endDate
        // $gte: new Date(Number(a[0]),Number(a[1]) , Number(a[2])),
        // $lt: new Date(Number(b[0]), Number(b[1]), Number(b[2]))
      
      }
    });
    res.status(200).json(
      reviews
    );
  }


});



