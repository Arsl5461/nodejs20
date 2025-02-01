const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number
    },
    password:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

module.exports=mongoose.model("User",userSchema)