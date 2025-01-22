const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const cors = require('cors');
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();

let isConnected = false;
const MONGODB_URL = process.env.MONGODB_URL;

async function connectToDB () {
  if(!isConnected){
    try{
      await mongoose.connect(MONGODB_URL);
      isConnected= true;
      console.log("mongodb connected")
    }
    catch(err){
      console.log("failed to connect", err);
      console.error(err);
    }
  }
  else{
    console.log("Db already connected.");
  }
};
connectToDB();

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const app = express();
app.use(express.json());
app.use(cors());

// const ALL_USERS = [
//   {
//     id: 1,
//     email: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh"
//   },
//   {
//     id: 2,
//     email: "abhishek@gmail.com",
//     password: "124",
//     name: "Abhishek Verma"
//   },
//   {
//     id: 3,
//     email: "aish@gmail.com",
//     password: "434",
//     name: "Aish Mishra"
//   }
// ]

// function userExists(email,password) {
  // should check in the database
  // for(let i=0;i<ALL_USERS.length;++i){
  //   if(ALL_USERS[i].email===email && ALL_USERS[i].password===password){
  //     return true;
  //   }
  // }
  // return false;
// }

app.post("/signup",async function(req, res){
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  const existingUser = await User.findOne({email: email});
  if(existingUser){
    console.log("User already exists.");
    return res.status(400).json({message: "User already exists."});
  }

  // const User = new User({
  //   name: name,
  //   email: email,
  //   password: password
  // });

  // User.save(); // saving the data of user in db
  //create user now in the data User database
  await User.create({
    name: name,
    email: email,
    password: password
  })

  return res.json({
    message: "User created successfully"
  })
})

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({email,password});
  if (!user) {
    return res.status(403).json({
      message: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ email: email }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization.split(" ")[1];

  // console.log(token);
  try {
    const decoded = jwt.verify(token, jwtPassword);
    // console.log(decoded);
    const email = decoded.email;
    // return a list of users other than this username from the database
    const ALL_USERS = await User.find({});
    // const users = [];
    // for(let i=0;i<ALL_USERS.length;++i){
    //   if(ALL_USERS[i].email!=email){
    //     users.push(ALL_USERS[i]);
    //   }
    // }
    const users = ALL_USERS.filter((user)=>{
      if(user.email!=email) return true;
      return false;
    })

    return res.json(users);

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
      error: err
    });
  }
});

app.listen(3000,()=>{
    console.log("server started.")
});