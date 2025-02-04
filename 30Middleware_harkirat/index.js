const express = require('express');

const app = express();

// like you can create function where you pass age and it validate after you can proceed furthere
// middleware
function isOldEnoughMiddleware(req,res,next){
    if(req.query.age>14){
        next();
    }
    else{
        res.status(411).json({
            message: "Sorry, You are not of age yet."
        })
    }
}

app.use(isOldEnoughMiddleware); // the whole first check this and then go ahead for every route it will check this, order matters like if you use this after ride1 route then it will not validate age for route1 routes got it it will only validate the route below to it i.e. ride2 and ride3.

// ride1, ride2, ride3 means there are three jhulaa you can say
app.get('/ride1',isOldEnoughMiddleware, (req,res)=>{
    res.json({
        message: "You can successfully riden the ride1"
    })
});

app.get('/ride2',isOldEnoughMiddleware,(req,res)=>{
    res.json({
        message: "You can successfully riden the ride2"
    })
});

app.get('/ride3',isOldEnoughMiddleware, (req,res)=>{
    res.json({
        message: "You can successfully riden the ride3"
    })
});




app.listen(3000,()=>{
    console.log("server started...");
})