import express from "express";
const getPat=(req,res)=>{
    res.send("all patients data")
}
const postPat=(req,res)=>{
    res.send("new patients data")
}
const putPat=(req,res)=>{
    res.send(" update patients data")
}
const delPat=(req,res)=>{
    res.send("remove patients data")
}
export {getPat,postPat,putPat,delPat}