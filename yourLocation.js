//const http = require('node:http');
//const prompt = require('node:prompt-sync');
//const locate = require('./selfModules/takinglocation');
//
//http.createServer(function(req , res) {
//    prompt.start();
//    res.writeHead('Content-Type' , 'text/html');
//    let locating = locate.location();
//    console.log(prompt.locating);
//    res.write(`
//<div>
//    <h3>Your Location is </h3>
//    <p></p>
//</div>
//`);//${locating}
//    res.end();
//}).listen(8020 , function(){
//    console.log(`Server:
//
//http://localhost:8020`);
//});


const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { initializeRoutes } = require("./routes");

let app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app = initializeRoutes(app);
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "welcome to the beginning of greatness",
  });
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("We are live and connected");
  console.log(socket.id);
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});