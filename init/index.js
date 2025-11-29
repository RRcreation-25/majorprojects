if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const mongoose = require("mongoose")
const initdata = require("./data.js")
const listing =  require("../models/listing.js")


const mongo_url ="mongodb+srv://wanderlust:raviranjanverma@wanderlust.qazxxtx.mongodb.net/?appName=wanderlust"
main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})

async function main() {

   await mongoose.connect(mongo_url);
}


// const deleteData = async ()=>{
//     await listing.deleteMany({})
//     console.log("data deleted")
// }
// deleteData()

const initData = async ()=>{

   const initData1 = await initdata.data.map((obj)=>({...obj,owner:"692acb6bf66495ccb21973af"}))
  
    await listing.insertMany(initData1)
    
}

initData()


