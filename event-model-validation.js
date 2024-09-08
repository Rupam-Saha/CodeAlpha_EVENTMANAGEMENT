const {z}=require("zod");
const valiSchema=z.object({
    Event_id:z
    .string({required_error:"Event id can't be empty"})
    .trim()
    .min(4,{message:"Event id can't be less than 4 letters"})
    .max(8,{message:"Event id can't be more than 8 letters"}),
    Event_name:z
    .string({required_error:"Event name can't be empty"})
    .trim()
    .min(4,{message:"Event name can't be less than 4 letters"})
    .max(50,{message:"Event name be more than 50 letters"}),
    Event_date:z
    .string({required_error:"Event date can't be empty"})
    .trim()
    .min(10,{message:"Event date can't be less than 10 letters"})
    .max(10,{message:"Event date can't be more than 10 letters"}),
    Event_venue:z
    .string({required_error:"Event venue can't be empty"})
    .trim()
    .min(2,{message:"Event venue can't be less than 2 letters"})
    .max(20,{message:"Event venue can't be more than 20 letters"})
})
module.exports=valiSchema;