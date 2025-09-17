import express from "express";
import path from "path";
const app = express();


// ...existing code from index.js...
// Middleware to parse JSON request bodies
/* app.set("view engine","ejs")
app.use(express.static('./public')) // this is used to serve static files   
app.get("/homepage",(req,res)=>{
    res.sendFile(path.join(process.cwd(),"./public/index.html"))
})
 */
//app.listen(7012, () => console.log("server working up http://localhost:7012"));
