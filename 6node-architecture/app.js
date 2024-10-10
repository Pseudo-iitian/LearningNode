const fs = require('fs');
const os = require("os");
// Sync...
// console.log("Sync...")
// console.log(1);
const resonse = fs.readFileSync("./file.txt","utf-8");
// console.log(resonse);
// console.log(2);


//Async...
// console.log("Async...")
// console.log(1);
const response = fs.readFile("./file.txt","utf-8",(err,res)=>{
    if(err){
        console.log("error: ", err);
    }
    else{
        // console.log(res);
    }
});
// console.log("2");
// console.log("3");
// console.log("4");

console.log(os.cpus().length); // TOTAL 8 CPUS so we can go for creation of 8 thread at max
