import http from "http";
const server = http.createServer((req, res) => {
  //  res.writeHead(200, { "Content-Type": "text/html" });
  //res.statusCode=404
  //res.statusMessage="daddy its bad"
  res.writeHead(202,"good boy",{"content-Type":"text/html"})
    res.write("<h1>hello guys</h1>");
});
server.listen(8000, () => {
    console.log("Server is running at  http://localhost:8000")
})
/* import http from "http"
const servers=http.createServer((req,res)=>{

  res.writeHead(202,"good status",{"content-type":"text/html"})
  res.write("<h1> hello ladies</h1>")
})
servers.listen(7000) */