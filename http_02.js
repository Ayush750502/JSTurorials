const hwl = require('./selfModules/text');
const http = require('node:http');//calling http module
const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req , res) =>{//Calling New Server
    console.log('Page is loaded!');
    //res.statusCode = 200;//res -> response object
    ////Here it is sending a stutus code telling that request is fulfilled
    //res.setHeader('Content-Type' , 'text/plain');
    ////Used to set a single header value
    ////Or we can use
    res.writeHead(200 , 'Content-Type' , 'text/html')
    res.write(hwl.htmltext());
    console.log('server is ending');
    res.end();
});

server.listen(port , () => {
    console.log(`Server is running at -
    
    'http://localhost:${port}'
                 or
    'http://${hostname}:${port}' `);
});