const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require('express');
// const myServer = http.createServer(); // it creates a web server for use.
// now who will handle this request coming from user to the webserver
// who can process the incoming request, so we have to created a handler function

// handler work - is to process the incomign request

const app = express(); // this app is a handler function

app.get('/',(req,res)=>{
    return res.send("Hello from home page.")
});

app.get('/about',(req,res)=>{

    return res.send("hello from about page." + " hey " + req.query.name + ' you are ' + req.query.age + " years old.");
});


function handler(req,res){
    // console.log("New Request received...");
    // console.log(req);
    // res.end("Hello from server");
    if(req.url==="/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} ${req.method} New Req Recieved\n`;
    // true means we have to parese the query parameters too
    const myUrl = url.parse(req.url,true);``
    console.log(myUrl);

    fs.appendFile("file.txt", log, (err, data) => {
        // once it get append the log into the file.txt then hello from server or res will be send to user.
        // res.end("Hello from server");
        switch(myUrl.pathname){
            case '/':
                if(req.method==='GET') res.end("Home Page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                // console.log(username);
                res.end(`Hi! ${username}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Here are your result for ` +search);
            case '/signup':
                if(req.method==='GET'){
                    res.end("This is singup page.")
                }
                else if(req.method==='POST'){
                    // db queuery
                    res.end("Success");
                }
            default:
                res.end("404 not found");
        }
    })
}

app.listen(8000, ()=> console.log("Server Started!"));

// const myServer = http.createServer(app);


// now server must listen to some port
// myServer.listen(8000, ()=> console.log("Server Started..."));
