const http = require("http");
const fs = require("fs");
// const myServer = http.createServer(); // it creates a web server for use.
// now who will handle this request coming from user to the webserver
// who can process the incoming request, so we have to created a handler function

// handler work - is to process the incomign request


const myServer = http.createServer((req,res)=>{
    // console.log("New Request received...");
    // console.log(req);
    // res.end("Hello from server");
    if(req.url==="/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
    fs.appendFile("file.txt", log, (err, data) => {
        // once it get append the log into the file.txt then hello from server or res will be send to user.
        // res.end("Hello from server");
        switch(req.url){
            case '/':
                res.end("Home Page...");
                break;
            case '/about':
                res.end("I am Abhishek Verma");
                break;
            default:
                res.end("404 not found");
        }
    })
});

// now server must listen to some port
myServer.listen(8000, ()=> console.log("Server Started..."));
