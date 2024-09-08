const {z}=require("zod");
const updSchema=z.object({
    User_name:z
    .string({required_error:"User name feild can't be empty"})
    .trim()
    .min(5,{message:"User name can't be less than 5 letters"})
    .max(25,{message:"User name can't be more than 25 letters"})
    .optional(),
    User_email:z
    .string({required_error:"User email feild can't be empty"})
    .trim()
    .email()
    .min(10,{message:"User email can't be less than 10 letters"})
    .max(30,{message:"User email can't be more than 30 letters"})
    .optional()
})
module.exports=updSchema;