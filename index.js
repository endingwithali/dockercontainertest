// const http = require('http');
import http from "http";
import fetch from "node-fetch";
import { createApi } from 'unsplash-js';

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    if (req.method=="GET"){
        fetch(`https://api.unsplash.com/search/photos?page=1&query=beans&client_id=${process.env.API_KEY}`).then((response) => {   
            console.log(response)
        })

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Beans');
    }
    else{
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('GO AWAY');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
