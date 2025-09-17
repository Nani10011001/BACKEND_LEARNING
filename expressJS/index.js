import express from "express";
import patient from "./routes/patient.js"
import product from "./query/query.js";
import fruits from "./routes/json/fructs.js";
import middleware from "./middleware/middleware.js";
import path from "path";
const app = express();
app.use("/patients",patient)// help use to run every time
app.use("/products",product)
app.get("/fruits",(req,res)=>{
    res.json(fruits)
})
app.get("/",middleware ,(req,res)=>{
    res.send("hello admin request granted")
})
app.use(express.static('./public')) // this is used to serve static files   
app.get("/homepage",(req,res)=>{
    res.sendFile(path.join(process.cwd(),"./public/index.html"))
})
app.set("view engine","ejs")
app.use(express.static('./public')) // this is used to serve static files   
app.get("/homepage",(req,res)=>{
    res.sendFile(path.join(process.cwd(),"./public/index.html"))
})

//app.listen(7011, () => console.log("server working up http://localhost:7022"));
