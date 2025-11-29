const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});

  res.render("listings/index2.ejs", { allListings });
}

module.exports.renderNewRoute = (req, res) => {
 
    res.render("listings/new.ejs");
  
 
}

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({
    path:"reviews",
    populate:{
    path:"author"
  }}).populate("owner");

  res.render("listings/show.ejs", { listing });
}


module.exports.createListing = async (req, res,next) => {
 let url = req.file.path;
 let filename = req.file.filename;
 
  
     const newListing = new Listing(req.body.listing);
 newListing.owner = req.user._id
newListing.image = {url,filename};
 // Store lat/lon if provided by geocoding form
 if (req.body.listing.lat && req.body.listing.lon) {
   newListing.lat = parseFloat(req.body.listing.lat);
   newListing.lon = parseFloat(req.body.listing.lon);
   newListing.geometry = {
     type: 'Point',
     coordinates: [newListing.lon, newListing.lat]
   };
 }
    await newListing.save();
    req.flash("success","new listing created")
  
   
 
    res.redirect("/listings");
   
 
}


module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  let newListingImage = listing.image.url;
  newListingImage = newListingImage.replace("/upload","/upload/w_250")
  res.render("listings/edit.ejs", { listing ,newListingImage});
}

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  
 
   let listing =  await Listing.findByIdAndUpdate(id, { ...req.body.listing });

   if(typeof req.file !== "undefined"){
   let url = req.file.path;
 let filename = req.file.filename;
listing.image = {url,filename}
   }
   
   // Store lat/lon if provided by geocoding form
   if (req.body.listing.lat && req.body.listing.lon) {
     listing.lat = parseFloat(req.body.listing.lat);
     listing.lon = parseFloat(req.body.listing.lon);
     listing.geometry = {
       type: 'Point',
       coordinates: [listing.lon, listing.lat]
     };
   }
   
await listing.save()
  req.flash("success","listing updated")
  res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","listing deleted")
  res.redirect("/listings"); 
}