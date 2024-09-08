const userRegisterSchema=require("../validator/user-register-validation");
const check1=()=>async (req,res,next)=>{
    try{
        const a=await userRegisterSchema.parseAsync(req.body);
        next();
    }
    catch(error){
        const err=error.issues[0].message;
        res.status(400).json(err);
    }
}
module.exports=check1;