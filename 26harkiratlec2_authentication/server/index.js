const express = require("express");
const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
const jwtPassword = "123456";
const cors = require('cors');

// mongoose.connect(
//   "your_mongo_url",
// );

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   pasword: String,
// });

const ALL_USERS = [
  {
    id: 1,
    email: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh"
  },
  {
    id: 2,
    email: "abhishek@gmail.com",
    password: "124",
    name: "Abhishek Verma"
  },
  {
    id: 3,
    email: "aish@gmail.com",
    password: "434",
    name: "Aish Mishra"
  }
]

const app = express();
app.use(express.json());
app.use(cors());
function userExists(email, password) {
  // should check in the database
  for(let i=0;i<ALL_USERS.length;++i){
    if(ALL_USERS[i].email===email && ALL_USERS[i].password===password){
      return true;
    }
  }
  return false;
}

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (!userExists(email, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ email: email }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization.split(" ")[1];

  // console.log(token);
  try {
    const decoded = jwt.verify(token, jwtPassword);
    // console.log(decoded);
    const email = decoded.email;
    // return a list of users other than this username from the database
    const users = [];
    for(let i=0;i<ALL_USERS.length;++i){
      if(ALL_USERS[i].email!=email){
        users.push(ALL_USERS[i]);
      }
    }

    return res.json(users);

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,()=>{
    console.log("server started.")
});