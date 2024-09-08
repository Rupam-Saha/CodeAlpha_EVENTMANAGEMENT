const mongoose=require("mongoose");
const x=new mongoose.Schema({
    Event_id:{
        type:String,
        required:true,
        unique:true
    },
    Event_name:{
        type:String,
        required:true,
        unique:true
    },
    Event_date:{
        type:String,
        required:true
    },
    Event_venue:{
        type:String,
        required:true
    }
});
const eventSchema=mongoose.model("eventdetail",x);
module.exports=eventSchema;