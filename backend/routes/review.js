const express = require("express");
const {
    createReview, getAllReview, getReviewNow
} = require("../controllers/review");
const router = express.Router();


router.route("/review/now").post(createReview);
router.route("/review").get(getAllReview);
router.route("/review/now").get(getReviewNow)


module.exports = router;
