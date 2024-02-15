const inpt = require('./selfModules/extractInput');
const hwl = require('./selfModules/text');
const http = require('node:http');//calling http module
const url = require('node:url');//for taking url
const hostname = '127.0.0.1';
const port = 8000;

http.createServer(function (req , res){//Calling New Server
    //res.statusCode = 200;//res -> response object
    ////Here it is sending a stutus code telling that request is fulfilled
    //res.setHeader('Content-Type' , 'text/plain');
    ////Used to set a single header value
    ////Or we can use
    res.writeHead(200 , 'Content-Type' , 'text/html')
    res.write(hwl.htmltext(port));
    console.log('Page is loaded!');
    let link = url.parse(req.url , true);
    search = link.search;
    let ins = inpt.giveInputs(search);
    //console.log(`the value received: '${ins}' \nit's type: ${typeof ins}`);
    console.log("value:\n");
    if(ins != null){
        ins.forEach(element => {
            console.log(element);
        });
    }
    else{
        console.log('It is null');
    }
    console.log(`It's type is ${typeof ins}`);
    console.log('server is ending');
    res.end();
}).listen(port , function (){
    console.log(`Server is running at -

    'http://localhost:${port}'
                 or
    'http://${hostname}:${port}' `);
});