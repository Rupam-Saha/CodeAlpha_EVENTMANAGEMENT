require("dotenv").config();
const express=require("express");
const connectToDB=require("./connection/connect");
const app=express();
app.use(express.json());
const port=process.env.port;
const r=require("./route/route");
app.use("",r);
connectToDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running at ${port}`);
    })
})