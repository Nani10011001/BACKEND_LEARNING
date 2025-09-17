import http from "http";
import fs from "fs";


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile( "./public/home.html", (error, data) => {
            if (error) {
                
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Internal Server Error",error);
                return;
            }
            res.end(data);
        });
    } else if (req.url === "/about") {
        fs.readFile( "./public/About.html", (error, data) => {
            if (error) {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Internal Server Error",error);
                return;
            }
            res.end(data);
        });
    } else {
        fs.readFile( "./public/404.html", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error",error);
                return;
            }
            res.end(data);
        });
    }
});

server.listen(4010, () => console.log("Server is running at http://localhost:4010"));