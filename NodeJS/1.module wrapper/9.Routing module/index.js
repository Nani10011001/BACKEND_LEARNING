import http from "http";
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(204,{"content-type":"text/html"})
res.end("<h1>home page</h1><a href='/about'>about</a><br><a href='/contact'>contact</a>")
    }else if(req.url==="/about"){
        res.end("<h1>about page</h1>")
    }else if(req.url==="/contact")
    {
        res.end("<h1>contact</h1>")
    }else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("page not found")
    }
});
server.listen(7000,()=>console.log("server is running at http://localhost:7000"))