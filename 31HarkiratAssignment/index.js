const express = require('express');
const app = express();
let requestCount = 0;

function requestCountMiddleware(req,res,next){
    requestCount+=1;
    console.log(requestCount);
    next();
    // how do you come to know if the request is made, simply if the controls come here in this function 
}

let requestForUser = {}; // empty object
// setinterval will empty the number of request of all user after 1 seconds so that he can retry
setInterval(()=>{
    requestCount=0;
    requestForUser = {};
},1000)
// app.use(requestCountMiddleware);

let errorCount = 0;

function handleRateLimitMiddleware(req,res,next){
    requestCount ++;
    console.log(requestCount);

    if(requestCount>5){
        res.status(400).json({message: "Too Many Requests."})
    }
    else{
        next();
    }
    // next();
    // const userId = req.headers['user-id']; // passed in header
    // console.log(requestForUser[userId]);
    // if(requestForUser[userId]){
    //     if(requestForUser[userId]>5){
    //         res.status(400).json({message: "Too Many Requests."})
    //     }
    //     else{
    //         next();
    //     }
    // }else{
    //     // came for the first time
    //     requestForUser[userId]=1;
    //     console.log(requestForUser[userId],userId);
    //     next();
    // }
}


app.get('/user', handleRateLimitMiddleware, function(req,res){
    // res.status(200).json({
    //     name:'Abhishek Verma'
    // })
    throw new Error("User not found");
    res.status(200).json({name:"Abhsihek"})
}) 

app.get('/requestCount',(req,res)=>{
    res.status(200).json({ count: requestCount})
})

// error handling middleware 
app.use((err,req,res,next)=>{
    // console.error(err);
    res.status(404).send("Page not Found.")
    errorCount+=1;
    console.log(errorCount);
})

app.listen(3000,()=>{
    console.log("server started");
})