import * as fs from "fs";
fs.mkdir("c:\\index js",(error)=>{
    if(error) throw error;
    console.log("directory created")
})// call back api