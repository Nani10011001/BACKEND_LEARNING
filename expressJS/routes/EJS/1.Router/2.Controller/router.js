import express from "express";
const Router=express.Router();
import { homePage } from "./homeController.js";
import { aboutPage } from "./aboutController.js";
Router.get("/",homePage)
Router.get("/about",aboutPage)