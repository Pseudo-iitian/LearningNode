const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;
const fs = require("fs");
const { error } = require('console');
const mongoose = require('mongoose');

// connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-api-1')
.then(()=> console.log("mongodb connected."))
.catch((err)=> console.log("Mongo Err: ", err));

// user schema has been design
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    job_title:{
        type: String,
    },
    gender:{
        type:String,
    }},
    {timestamps: true}
);

const User = mongoose.model("user",userSchema); // it create as colleciton with plural name of user as users



// Middle ware, it is needed because, body is coming undefinded, means jbb koi form data ata hai post request me to express ko nhi pta ise handle kaise 
// kerna hai to we have to use urlencoded.
// is middleware ne kya kiya, ki iss data jo hmnse post man me post request kiya, use uthaya aur fir, uska object banaya, fir use req.body me daal
// diya.
app.use(express.urlencoded({extended: false}));

app.use((req,res,next)=>{
    console.log("hello from middle ware 1");
    req.myUsername = "abhishek.dev"
    // return res.json({message: "hello from middleware 1"});
    next();
})

app.use((req,res,next)=>{
    // console.log("hello from middle ware 2", req.myUsername);
    fs.appendFile("log.txt",`\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (err,data)=>{
        next();
    });
    // return res.end("hey!");
    // next();
})


app.get('/',(req,res)=>{
    res.end("Home Page...");
})


// routes

app.get('/users',async (req,res)=>{
    const allDbUsers = await User.find({});
    const html = `
        <ul>
            ${allDbUsers.map((user)=> `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
})

// rest apis
app.get("/api/users",async (req,res)=>{
    console.log("getting user...");
    // console.log("I am in get request with ", req.myUsername);
    // res.setHeader("X-myName","Abhishek Verma");
    console.log(req);
    const allDbUsers = await User.find({});
    // console.log(req);
    return res.json(allDbUsers);
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

app.post("/api/users",async(req,res)=>{
    // todo - to create a new user.
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are req..."});
    }
    // users.push({...body,id:users.length + 1 });
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    //     console.log("body",body); // ye body undefined aa rha hai
    //     // console.log(users);
        // return res.status(201).json({status: "success!", id: users.length});    
    // });
    // user created
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender,
    })
    console.log("result: ",result);
    return res.status(201).json({msg: "success"})
}) ;


// or we can do also this
app
    .route('/api/users/:id')
    .get ( async (req,res)=>{
        // console.log(req);
        // const id = Number(req.params.id);
        // const allDbUsers = await User.find({});
        // const user = allDbUsers.find((user) => user._id === id);
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({error: "user not found."});
        }
        console.log("printing user on the screen...")
        return res.json(user);
    })
    .patch(async(req,res)=>{
        await User.findByIdAndUpdate(req.params.id, {last_name: "Verma"});
        return res.json({msg: "success!"}); // res.json will go there in db response terminal
    })
    .delete(async (req,res)=>{
        // todo pending, delete the user with id
        await User.findByIdAndDelete(req.params.id);
        return res.json({status:"success"});
    });

app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT}`));

