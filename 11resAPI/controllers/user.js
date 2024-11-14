const User = require('../models/user');

async function handleGetAllUser(req, res) {
    console.log("getting user...");
    // console.log("I am in get request with ", req.myUsername);
    // res.setHeader("X-myName","Abhishek Verma");
    // console.log(req);
    const allDbUsers = await User.find({});
    // console.log(req);
    return res.json(allDbUsers);
}

async function handlePostUser(req, res) {
    // todo - to create a new user.
    const body = req.body;
    console.log("body is ", body);
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All fields are req..." });
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
    console.log("result: ", result);
    return res.status(201).json({ msg: "success" })

}

async function handleGetUserById(req, res) {
    // console.log(req);
    // const id = Number(req.params.id);
    // const allDbUsers = await User.find({});
    // const user = allDbUsers.find((user) => user._id === id);
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: "user not found." });
    }
    console.log("printing user on the screen...")
    return res.json(user);
}

async function handlePatchUpdate(req, res) {
    await User.findByIdAndUpdate(req.params.id, { last_name: "Verma" });
    return res.json({ msg: "success!" }); // res.json will go there in db response terminal
}

async function handleDeleteUser(req, res) {
    // todo pending, delete the user with id
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}

module.exports = {
    handleGetAllUser,
    handlePostUser,
    handleGetUserById,
    handlePatchUpdate,
    handleDeleteUser,
}