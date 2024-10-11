const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

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
    return res.json(users);
});

// :id means it is variable
// app.get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

app.post('/api/users',(req,res)=>{
    // todo - to create a new user.
    return res.json({status: "pending"});
});

// app.patch('/api/users/:id',(req,res)=>{
//     return res.json({status: "pending"});
// });

// app.delete("/api/users/:id",(req,res)=>{
//     // todo pending, delete the user with id
//     return res.json({status:"Pending"});
// });


// or we can do also this
app
    .route('/api/users/:id')
    .get((req,res)=>{
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .post((req,res)=>{
        // todo - to create a new user.
        return res.json({status: "pending"});
    })
    .patch((req,res)=>{
        return res.json({status: "pending"});
    })
    .delete((req,res)=>{
        // todo pending, delete the user with id
        return res.json({status:"Pending"});
    });

app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT}`));

