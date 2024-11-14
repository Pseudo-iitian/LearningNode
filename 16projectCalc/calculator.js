const express = require('express');

const app = express();

const PORT = 8000;

app.get('/',(req,res)=>{
    console.log("hii");
    res.json({msg: "hi brother"});
})

// first is port and second part is function or call back function
app.listen(PORT,()=> console.log("Server Started at", PORT));