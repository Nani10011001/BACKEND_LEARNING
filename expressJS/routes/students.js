import express from "express";
const Router = express.Router();
Router.get("/all",(req,res)=>{
    res.send("this is the teachers route")
})
Router.post("/create",(req,res)=>{
    res.send("create teachers route")
})
Router.put("/update",(req,res)=>{
    res.send("upda trteachers route")
})
Router.delete("/delete",(req,res)=>{
    res.send("this is the teachers route")
})
export default Router