const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;
const fs = require("fs");

// Middle ware, it is needed because, body is coming undefinded, means jbb koi form data ata hai post request me to express ko nhi pta ise handle kaise 
// kerna hai to we have to use urlencoded.
// is middleware ne kya kiya, ki iss data jo hmnse post man me post request kiya, use uthaya aur fir, uska object banaya, fir use req.body me daal
// diya.
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.end("Home Page...");
})


// routes

app.get('/users',(req,res)=>{
    const html = `
        <ul>
            ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
})

// rest apis
app.get("/api/users",(req,res)=>{
    console.log("getting user...");
    return res.json(users);
});

// :id means it is variable
// app.get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

// app.patch('/api/users/:id',(req,res)=>{
//     return res.json({status: "pending"});
// });

// app.delete("/api/users/:id",(req,res)=>{
//     // todo pending, delete the user with id
//     return res.json({status:"Pending"});
// });

app.post("/api/users",(req,res)=>{
    // todo - to create a new user.
    const body = req.body;
    users.push({...body,id:users.length + 1 });
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        console.log("body",body); // ye body undefined aa rha hai
        // console.log(users);
        return res.json({status: "success!", id: users.length});    
    });
}) 

// or we can do also this
app
    .route('/api/users/:id')
    .get((req,res)=>{
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        console.log("printing user on the screen...")
        return res.json(user);
    })
    .patch((req,res)=>{
        return res.json({status: "pending"});
    })
    .delete((req,res)=>{
        // todo pending, delete the user with id
        return res.json({status:"Pending"});
    });

app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT}`));

