const express = require("express");
const app = express();
const PORT = 3001;
const authenticate = require("./controller/authentication.js");

app.get("/",(req,res)=>{
    res.send({
        message: "Hi! I am Abhishek Verma"
    })
})

app.use(express.json());
app.use("/",authenticate);

app.listen(PORT, ()=>{
    console.log("server started");
});