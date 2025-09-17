
const greet=require("./greet")
greet("Nani")// this allow to use the file from the greet.js file to this file
const {person1,person2,person3}=require("./peoples")
greet(person3)
greet(person2)
greet(person1)


