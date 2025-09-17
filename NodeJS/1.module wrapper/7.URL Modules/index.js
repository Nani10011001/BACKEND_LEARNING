
import {URL} from "url";
const myUrl=new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");
console.log(myUrl.hash)
console.log(myUrl.href)
console.log(myUrl.pathname)
/* console.log(myUrl) */
console.log(myUrl.protocol)
console.log(myUrl.search)
// both work as the same
console.log(myUrl.toJSON())
console.log(myUrl.toString())
