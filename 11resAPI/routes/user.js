const express = require('express');
const router = express.Router();
const {handleGetAllUser, handlePostUser, handleDeleteUser,handleGetUserById,handlePatchUpdate  } = require('../controllers/user')

router
    .route('/')
    .get(handleGetAllUser)
    .post(handlePostUser)

// or we can do also this
router
    .route('/:id')
    .get(handleGetUserById)
    .patch(handlePatchUpdate)
    .delete(handleDeleteUser);

module.exports = router;

// router.get('/', (req, res) => {
//     res.end("Home Page...");
// })

// routes
// router.get('/', async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//         <ul>
//             ${allDbUsers.map((user) => `<li>${user.first_name}</li>`).join("")}
//         </ul>
//     `;
//     res.send(html);
// })

// router like app.get apis
// router.get("/", handleGetAllUser);

// router.post("/", handlePostUser);







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