const jwt = require("jsonwebtoken");

// const value = {
//     name: "Abhishek Verma",
//     accountNumber: 123456789,
//     bankName: "UCO Bank"
// }

// generation of token
// const token = jwt.sign(value,"secret");
// console.log(token);

// verification of token
// const verifedData = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJoaXNoZWsgVmVybWEiLCJhY2NvdW50TnVtYmVyIjoxMjM0NTY3ODksImJhbmtOYW1lIjoiVUNPIEJhbmsiLCJpYXQiOjE3Mzc2OTE0OTl9.dlinO5OQcumhCiZepmVBHk1ZFwJqmkYmmhA6cQQqZn0","secret");
// console.log(verifedData);

try{
    let a;
    console.log("hii there from inside before getting error.")
    console.log(a.length); // getting error stops execuution goes in catch then run other program's code.
    console.log("hi there from inside try")
}
catch(e){
    console.log("inside catch statement");
}

console.log("hi there ");