const updSchema=require("../validator/update-user-details");
const check2=()=>async (req,res,next)=>{
    try{
        const x=await updSchema.parseAsync(req.body);
        next(); 
    }
    catch(error){
        res.status(400).json(error.issues[0].message);
    }
}
module.exports=check2;