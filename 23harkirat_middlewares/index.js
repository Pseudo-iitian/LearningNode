const express = require('express');
const app = express();
const zod = require("zod");

// need some checks 
// 1- kidney id can be 1 or 2 and username and password should exist in headers
// kidney will be query 

// this is the prechecks needed for this
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password
    
    if(username!='abhishek' || password!='123'){
        res.status(403).json({message: "user does not found."})
    }else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({message: "kidney is not fine."})
    }
    else{
        next();
    }
};

app.use(express.json());


let numberOfRequests = 0;
function calculateRequests(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}
app.get("/",calculateRequests,(req,res)=>{
    res.json({message: `total requests : ${numberOfRequests}`});
})

app.get("/health-checkup",userMiddleware, kidneyMiddleware, (req,res)=>{
    // const kidneyId = req.query.kidneyId;
    // const username = req.headers.username;
    // const password = req.headers.password;

    // if(username!='abhishek' || password!='123'){
    //     res.status(403).json({message: "user does not found."})
    //     return;
    // }

    // if(kidneyId!=1 && kidneyId!=2){
    //     res.status(403).json({message: "user does not found."})
    //     return;
    // }

    res.json({message: "you are healthy."})
})

const schema = zod.array(zod.number()); // an array of numbers
app.post("/kidney-checkup", (req,res)=>{
    console.log(req.body);
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        return res.json({
            message: response.error.issues[0].message
        })
    }
    else{
        console.log(response);
        res.send({response});
    }
    // const kidneyLength = kidneys.length;

    // res.send("you have " + kidneyLength + " kidneys")
})





// middle ware for global catches if any error happens, it always at the end of the file
app.use((err,req,res,next)=>{
    res.json({
        message:"sorry something went wrong, please try after some time."
    })
})

app.listen(3001,()=>{
    console.log("server started");
})