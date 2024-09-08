const {z}=require("zod");
const userRegisterSchema=z.object({
    Event_id:z
    .string({required_error:"Event id can't be empty"})
    .trim()
    .min(4,{message:"Event id can't be less than 4 letters"})
    .max(8,{message:"Event id can't be more than 8 letters"}),
    User_email:z
    .string({required_error:"User Email can't be empty"})
    .trim()
    .min(12,{message:"User Email can't be less than 12 letters"})
    .max(25,{message:"User Email can't be more than 25 letters"}),
    User_name:z
    .string({required_error:"User Name can't be empty"})
    .trim()
    .min(3,{message:"User Name can't be less than 3 letters"})
    .max(25,{message:"User Name can't be more than 25 letters"}),
    User_id:z
    .string({required_error:"User ID can't be empty"})
    .trim()
    .min(4,{message:"User ID can't be less than 4 letters"})
    .max(8,{message:"User ID can't be more than 8 letters"})
})
module.exports=userRegisterSchema;