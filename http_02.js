const http = require('node:http');//calling http module
const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req , res) =>{//Calling New Server
    res.statusCode = 200;//res -> response object
    //Here it is sending a stutus code telling that request is fulfilled
    res.setHeader('Content-Type' , 'text/plain');
    res.end('Hello World!\n');
});