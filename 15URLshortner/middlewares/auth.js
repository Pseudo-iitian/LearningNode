const {getUser} = require('../service/auth');

async function restrictToLoggedinUserOnly(req,res, next){
    // console.log("request is: ", req);
    const userUid = req.cookies?.uid;
    console.log("user uid is : ", userUid);
    if(!userUid){
        console.log("user does not exist!");
        return res.redirect("/login");
    } 
    const user = getUser(userUid);
    console.log(user);
    if(!user){
        console.log("user does not exist!");
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
}