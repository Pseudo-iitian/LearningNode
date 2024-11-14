const User = require('../models/user')
const {v4: uuidv4} = require('uuid');
const {setUser} = require('../service/auth')

async function handleUserSignup(req,res) {
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect('/')
}

// these email and password are the name in form type got it
async function handleUserlogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    console.log("printing user: ",user);
    // console.log({ email, password, _id });

    if (!user) {
        return res.render('login', {
            error: "Invalid Username or Password.",
            popupMessage: "Please check your email and password."
        });
    }

    // const sessionId = uuidv4(); // we created a session id
    // token is use of stateless authentication.
    const token = setUser(user); // when setting the name we are getting token in return a long string containing data stored in payload
    res.cookie("uid",token);
    return res.redirect('/');
}

module.exports = {
    handleUserSignup,
    handleUserlogin,
}