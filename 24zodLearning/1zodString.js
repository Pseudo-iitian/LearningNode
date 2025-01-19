const zod = require("zod");

// create schema for which you want to validate on 
const schema = zod.string();
// const response = schema.parse(1);
const response = schema.safeParse("fdsajlj");
console.log(response);



// 2 for object
const User = zod.object({
    username: zod.string()
})
// const response1 = User.safeParse({username: "abhishek"});
const response1 = User.safeParse({
    username: 123
})
console.log(response1);



const input = "hi i am abhishek verma :-)";
const urlinput = " gfda     "
console.log(zod.string().trim(urlinput));







// parse through zod error 
// safeparse through error but in json format
