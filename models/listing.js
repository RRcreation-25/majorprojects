const mongoose = require("mongoose")
const Review = require("./review.js")
const schema = mongoose.Schema

const listingSchema = new schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
       
    },
    image:{
        url:String,
        filename:String
    },
    reviews:[
        {
            type:schema.Types.ObjectId,
            ref:"Review"

        }
    ],
    owner:{
        type:schema.Types.ObjectId,
        ref:"User"
    },
    price:Number,
    location:String,
    country:String,
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    lat: Number,
    lon: Number
})

listingSchema.post("findOneAndDelete", async (listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}})
    }

})





const Listing = mongoose.model("Listing",listingSchema)

module.exports = Listing