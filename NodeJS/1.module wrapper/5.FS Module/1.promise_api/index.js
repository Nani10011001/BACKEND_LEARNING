import * as fs from "fs/promises";
//creating Directory /folder
// fs.mkdir("c:\\js created")// to create a directory
//s.readdir("c:\\js created") show the file in the dir
//fs.rmdir("c:\\js created\\course")// delect the folder in the folder of js
// fs.writeFile("READ.Md","hello nani ") we create file and write the data
//fs.readFile("READ.Md", "utf8") WE CAN SEE THE CONTENT 
//fs.appendFile("READ.Md", "i am going to become a rich millinor") it help to send the add into the READ.md file
//fs.copyFile("READ.Md", "i am going to become a rich millinor")
try{


const data = await fs.stat("READ.MD")
console.log("Data appended successfully:", data) 
}catch(error){
console.log(error)
}