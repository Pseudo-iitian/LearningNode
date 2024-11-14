// const sessionIdToUserMap = new Map(); // using this we are maintaing our state using map i.e. statefull auth
const jwt = require("jsonwebtoken");
const secret = "Abhishek#123@"; // this key is same as certified stamp, which tells that it is verified.
// here, this is secret key, if we want to change something in the token stored incookie uid, then we will not be able to sign in because we have a scret
// key which is validating with this secret key to token, that is correct or not.

function setUser(user){
    // sessionIdToUserMap.set(id,user);
    // console.log(user);
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret);
    // it will set the data here
    // sc
}

function getUser(token){
    // return sessionIdToUserMap.get(id);
    if(!token) return null;
    try{
        return jwt.verify(token,secret);
    }
    catch(err){
        return null;
    }
}

module.exports = {
    setUser, 
    getUser,
}