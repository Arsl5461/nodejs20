const mongoose=require("mongoose")

const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://pnymeet:abc12345@cluster0.9zzsr.mongodb.net/")
    console.log("MongoDb Connected Successfully");
    
}

module.exports=connectDb