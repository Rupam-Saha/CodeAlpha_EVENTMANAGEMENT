const mongoose=require("mongoose");
const url=process.env.url;
const connectToDB=async ()=>{
    try{
        const x=await mongoose.connect(url);
        console.log("connected with database");
    }
    catch(error){
        console.log("can't connect with database");
    }
}
module.exports=connectToDB;