// blocking code 
/* console.log("start");
alert("block")
console.log("end") */
// non blocking code
/* console.log("start");
setTimeout(()=>{
    alert("non-blocking code ")
},1000);
console.log("end") */
import fs from "fs"
console.log("start")
/* const data=fs.readFileSync("text.txt")
console.log(data.toString()) */
// non blocking code
fs.readFile("text.txt",(err,data)=>{
    if(err) throw err;
    console.log(data.toString())
})
console.log("end")