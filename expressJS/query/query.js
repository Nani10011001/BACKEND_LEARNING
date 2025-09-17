import express from "express";
const routers=express.Router();
routers.get("/product",(req,res)=>{
 const {name,id}=req.query  
res.send(`hello ${name} your id is ${id}`)
})
export default routers