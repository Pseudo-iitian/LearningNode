const express = require("express");
const route = express.Router(); // Initialize Router
const z = require("zod");

route.get("/signup",(req,res)=>{
    res.send("I am at the signup page.")
    // signup ke liye name, email, phone, password chahiye
});

function validateSignup(req,res,next){
    const {name,email,phone,password} = req.body;
    const SignUpSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string().length(10),
        password: z.string().min(8)
    });
    const response = SignUpSchema.safeParse({name,email,phone, password});
    if(!response.success){
        const error = response.error.issues[0].message;
        // alert(error)
        res.status(411).json({
            message:error
        });
    }
    else{
        next();
    }
}


route.post("/signup",validateSignup, (req,res)=>{
    const {name, email, phone, password} = req.body;
    console.log("signup successfull");
    // taking db as my local storage.

    localStorage.setItem("name",name);

    // saving to db
    res.json({message:"signup successfull"})
});

module.exports = route;