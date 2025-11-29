const Review = require("../models/review")
const Listing = require("../models/listing")

module.exports.creeateReview = async (req,res)=>{
let listing = await Listing.findById(req.params.id)

let newReview = new Review(req.body.review)

listing.reviews.push(newReview)
newReview.author = req.user._id
await newReview.save() 
await listing.save()

req.flash("success","New Review created")


res.redirect(`/listings/${listing._id}`)

}

module.exports.deleteReview = async(req,res)=>{
 const {id,reviewid} = req.params
  
  let result1 = await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}})
let result = await Review.findByIdAndDelete(reviewid)
req.flash("success","Review deleted")
res.redirect(`/listings/${id}`)
}