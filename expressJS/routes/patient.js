import express from "express";
import { getPat,postPat,putPat,delPat } from "../controller/patients.js";
const Router=express.Router();
Router.get("/all",getPat)
Router.post("/create",postPat)
Router.put("/update",putPat)
Router.delete("/delete",delPat)
export default Router