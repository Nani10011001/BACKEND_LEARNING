import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile( "C:\Users\nani9\OneDrive\Desktop\js\NodeJS\public\home.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } else if (req.url === "/about") {
        fs.readFile( "C:\Users\nani9\OneDrive\Desktop\js\NodeJS\public\home.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } else {
        fs.readFile( "C:\Users\nani9\OneDrive\Desktop\js\NodeJS\public 404.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    }
});

server.listen(9010, () => console.log("Server is running at http://localhost:9010"));