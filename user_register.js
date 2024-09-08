const mongoose=require("mongoose");
const y=new mongoose.Schema({
    Event_id:{
        type:String,
        required:true
    },
    User_email:{
        type:String,
        required:true        
    },
    User_name:{
        type:String,
        required:true
    },
    User_id:{
        type:String,
        required:true,
        unique:true
    }
})
const userregSchema=mongoose.model("user_register",y);
module.exports=userregSchema;