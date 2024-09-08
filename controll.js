const eventSchema=require("../models/event-model");
const userregSchema=require("../models/user_register");
const addevent=async(req,res)=>{
    try{
        const data=req.body;
        const check=await eventSchema.findOne({Event_id:data.Event_id,Event_name:data.Event_name});
        if(check){
            res.status(400).json({msg:"This event is already registered"});
        }
        else{
            const y=await eventSchema.create(data);
            res.status(200).json({msg:"Successfully registered"});
        }
    }
    catch(error){
        res.status(400).json({msg:"can't add this event"});
    }
}
const userReg=async (req,res)=>{
    try{
        const data=req.body;
        const ch=await eventSchema.findOne({Event_id:data.Event_id});
        const cid=await userregSchema.findOne({User_id:data.User_id});
        if(cid){
            res.status(400).json({msg:"this user id is belongs to other User"});
        }
        else{
            if(ch){
                const c=await userregSchema.findOne({Event_id:data.Event_id,User_email:data.User_email});
                if(c){
                    res.status(400).json({msg:"This email id is already registered for this event"});
                }
                else{
                    const x=await userregSchema.create(data);
                    res.status(200).json({msg:"Succesfully Registered"});
                }
            }
            else{
                res.status(400).json({msg:"Invalid Event ID"});
            }   
        }
    }
    catch(error){
        res.status(400).json(error);
    }
}
const eventDetails=async(req,res)=>{
    try{
        const id=req.params.Event_id;
        const details=await eventSchema.findOne({Event_id:id},{_id:0,__v:0});
        if(details){
            res.status(200).json({Event_details:details});
        }
        else{
            res.status(400).json({msg:"This Event Id is not Valid"});
        }
    }
    catch(error){
        res.status(400).json(error);
    }
}
const updatedetails=async(req,res)=>{
    try{
        const userid=req.params.User_id;
        const eventid=req.params.Event_id;
        const data=req.body;
        const x=await userregSchema.findOne({User_id:userid,Event_id:eventid});
        if(x){
            //const upd=await userregSchema.updateOne({User_id:userid,Event_id:eventid},{$set:{User_email:data.User_email,User_name:data.User_name}});
            const upd=await userregSchema.updateOne({User_id:userid,Event_id:eventid},{$set:data});
            if(upd.acknowledged){
                res.status(200).json({msg:"Updated successfully"});
            }
            else{
                res.status(400).json({msg:"Update can't happend"});
            }
        }
        else{
            res.status(400).json({msg:"For this user id this event id is not registered"});
        }
    }
    catch(error){
        res.status(400).json(error);
    }
}
const deletereg=async (req,res)=>{
    try{
        const userid=req.params.User_id;
        const x=await userregSchema.findOne({User_id:userid});
        if(x){
            const del=await userregSchema.deleteOne({User_id:x.User_id});
            if(del.acknowledged){
                res.status(200).json({msg:"Successfully deleted"});
            }
            else{
                res.status(400).json({msg:"failed"});
            }
        }
        else{
            res.status(400).json({msg:"Invalid user id"});
        }
    }
    catch(error){
        res.status(400).json(error);
    }
}
module.exports={addevent,userReg,eventDetails,updatedetails,deletereg};