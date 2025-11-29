const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../midelware.js")
const multer = require("multer")
const {storage} = require("../cloudnaryConfig.js")
const upload = multer({storage})
const listingController = require("../controllers/listings.js")


//Index Route
router
.route("/")
.get(wrapAsync(listingController.index))
//Create Route
.post( validateListing,isLoggedIn,upload.single("listing[image]"), wrapAsync(listingController.createListing));

//New Route
router.get("/new",isLoggedIn, listingController.renderNewRoute);


router.route("/:id")
//Show Route
.get(wrapAsync(listingController.showListing))

//Update Route
.put(validateListing,isLoggedIn,isOwner,upload.single("listing[image]"), wrapAsync(listingController.updateListing))
//Delete Route
.delete(isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));



//Edit Route
router.get("/:id/edit",isLoggedIn, wrapAsync(listingController.editListing));






module.exports = router
