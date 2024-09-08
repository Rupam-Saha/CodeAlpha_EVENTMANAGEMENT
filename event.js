const valiSchema=require("../validator/event-model-validation");
const check=()=>async (req,res,next)=>{
    try{
        const x=await valiSchema.parseAsync(req.body);
        next();
    }
    catch(error){
        const err=error.issues[0].message;
        res.status(400).json(err);
    }
}
module.exports=check;