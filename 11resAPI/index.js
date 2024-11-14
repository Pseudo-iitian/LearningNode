// const users = require("./MOCK_DATA.json");
const express = require('express');
const app = express();
const PORT = 8000;
const { error } = require('console');
const userRouter = require('./routes/user')
const {connectMongoDB} = require('./connection');
const {logreqres} = require('./middlewares/index')

// connection
connectMongoDB('mongodb://127.0.0.1:27017/youtube-api-1')
.then(()=> console.log("MongoDB connected!"))
.catch((err)=> console.log("error: ", err))

// middleware initialized
app.use(express.urlencoded({extended: false}));
app.use(logreqres("log.txt"));

// routes, it means any request made on /user, just update on userRouter
app.use('/user',userRouter); // it will be added as /user/:id,etc.


// listening to some port server startingeℎ
app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT}`));

// Middle ware, it is needed because, body is coming undefinded, means jbb koi form data ata hai post request me to express ko nhi pta ise handle kaise 
// kerna hai to we have to use urlencoded.
// is middleware ne kya kiya, ki iss data jo hmnse post man me post request kiya, use uthaya aur fir, uska object banaya, fir use req.body me daal
// diya.

// about middle wares
// app.use((req,res,next)=>{
//     console.log("hello from middle ware 1");
//     req.myUsername = "abhishek.dev"
//     // return res.json({message: "hello from middleware 1"});
//     next();
// })

// app.use((req,res,next)=>{
//     // console.log("hello from middle ware 2", req.myUsername);
//     fs.appendFile("log.txt",`\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (err,data)=>{
//         next();
//     });
//     // return res.end("hey!");
//     // next();
// })