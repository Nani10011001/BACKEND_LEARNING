install of express of npm i express 
after dowloading we should start nodemon to index js
  "start": "nodemon index.js"
  then we run it npm start command
  1.basic routing:
  import express from "express"
  store in the variable like const app=express()
  then we 
  app.get("/",(req,res)=>{
    res.send("write the content like hello guys")
  })
  //get post put put for update patch  parically update data
  post to create the data insert get to retrive the data
  http request method
string pattern path:

app.get("/ab?cd",(req,res)=>{
            res.send("if the user send the request (acd)or(abcd) it will be works")})
            // Correct regex example
app.get(/^\/users\/\d{4}$/, (req, res) => {
    res.send("if the user sends the request at /users/xxxx, it will work");
});
callback in the express
postmon method of api
get (respons)
post(at new element) 
put(update the data)
delect(remove the data)
app.get("/studentapp",(req,res)=>{
    res.send("all students data")
})
app.post("/studentapp",(req,res)=>{
    res.send("new students data")
})
app.put("/studentapp",(req,res)=>{
    res.send("  update students data")
})
app.delete("/studentapp",(req,res)=>{
    res.send("  remove students data")
})


Route in express:
app.route (instance of router and avoid duplicate codes)
app.route("/studentapp")
.get((req,res)=>res.send("Welcome to the student app!"))
.post((req,res)=>res.send("Student app post request"))
.put((req,res)=>res.send("update student app"))
.delete((req,res)=>res.send("delete student app"))


Router :
create routes folder for put your routes in a separte file
create instance of express.router()
instead of app.method change to "router Mentod "
export router
import router
use the (app.use)built in middleware & provide your routes
syntax:
import express from "express";
const Router = express.Router();
Router.get("/all",(req,res)=>{
    res.send("this is the students route")
})
Router.post("/create",(req,res)=>{
    res.send("create the students route")
})
Router.put("/update",(req,res)=>{
    res.send("update the students route")
})
Router.delete("/delete",(req,res)=>{
    res.send("this is the delete students route")
})
export default Router

route params:
capturing the id of the user

app.get("/student/delete/:id",(req,res)=>{
    res.send(req.params.id)
})deleting it

app.get("/ecom/product/samsung/:model",(req,res)=>{
    res.send(req.params.model)
})
app.get("/ecom/product/samsung/:model/:id",(req,res)=>{
  const {model,id}=req.params;
  res.send(`samsung ${model}ultra z flip1 product id(${id})`)
}) // multi params of the routing

app.params functions
app.param("id",(req,res,next,id)=>{//id three name
    console.log("id:",id)
    next()
})
app.get("/user/:id",(req,res)=>{// here id should be same
    res.send("repsonse good")
    console.log("working")
})
controllers in the express
create a file for routing of the data like
get,post,put,delete

import express from "express";
import { getPat,postPat,putPat,delPat } from "../controller/patients.js";
const Router=express.Router();
Router.get("/all",getPat)
Router.post("/create",postPat)
Router.put("/update",putPat)
Router.delete("/delete",delPat)
export default Router



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
app.use("/patients",patient)

query string:
query is a part of the url ? client to server
send the data from client to the server
import express from "express";
const routers=express.Router();
routers.get("/product",(req,res)=>{
 const {name,id}=req.query  
res.send(`hello ${name} your id is ${id}`)
})
export default routers
how to get a data from client to resver



sending json:
frist we want create a file and insert the data using the array inside object then export it
import it 
app.get("/fruits",(req,res)=>{
    res.json(fruits)
})
//use the res.json(use the name)

middle ware in the express js
middle take three parameters req,res,next 

helps to check where the user is valid or invalid while requesting
request
middleware(valid shows the data)
 response

ejs npm i install we create app.set("view engine","ejs")
it help to render the data add create the file index.ejs and 
we can also render data of javascript using <%= variablename %> like inside of the <h1></h1>
conditional rendering 
<% if (userid==20) { %>
<h1>id: <%=userid> </h1>
<% } else if(user===30) {%>
<h1><%=userid%></h1>
<% }%>

loops in ejs
<% for(let i=0;i<=4;i++>) {%>
<h1>
loop rendering</h1>
<%}%>
<% const data=[1,2,3,4,6]%>
<% for(d in data){%>
<h1><%=d%></h1>
<%}%>
