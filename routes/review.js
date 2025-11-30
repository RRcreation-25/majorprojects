const express = require("express")
const router = express.Router({mergeParams:true})
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js");
const Review = require("..models/review.js");

const {validateReview,isLoggedIn,isReviewAuthor} = require("../midelware.js")

const reviewController = require("../controllers/review.js")

//review
//post route


router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.creeateReview))

//review delete route

router.delete("/:reviewid",isLoggedIn,isReviewAuthor,reviewController.deleteReview)


module.exports = router
