import eventEmitter from "events";
const eventEmitterInstance = new eventEmitter();
eventEmitterInstance.once("responses",(name,id)=>{
console.log(`user: ${name} id:${id}`)
})
eventEmitterInstance.emit("responses","jai","24781f0024")
eventEmitterInstance.emit("response","nani","45")
