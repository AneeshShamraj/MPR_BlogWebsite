const mongoose=require("mongoose");
 const postSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    timestamp:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
    },
 });

 module.exports=mongoose.model("Post",postSchema);