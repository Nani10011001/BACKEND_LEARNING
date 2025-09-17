import dns from "dns"
dns.lookup("localhost",(err,address, famaily)=>{
    if(err) return "error occured"
console.log("localhost address",address)
    console.log(famaily===4? "ipv4":"ipv6")
})
