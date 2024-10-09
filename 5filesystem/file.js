const fs = require('fs');
// console.log(fs);

// Sunc... (blocking task )
// fs.writeFileSync('./file.txt',"hey! Abhishek this side. ok bro"); // a synchronous call, so we justified the path of file.

// Async... (unblocking task)
// fs.writeFile("./file.txt", "hello world async", (err) => {});

// const result = fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result);

// Async... rading the file
// fs.readFile('./contacts.txt',"utf-8", (err,result)=>{
//     if(err){
//         console.log("ERror", err);
//     }
//     else{
//         console.log(result);
//     }
// });

// appending things
// fs.appendFileSync("./file.txt", new Date().getDate().toLocaleString());

// copy the file to another file.
// fs.cpSync("./file.txt","./copy.txt");

// to delete a file 
// fs.unlinkSync("./copy.txt");

// getting the statics of the file, like the creation time, updation time, etc.
console.log(fs.statSync("./file.txt").isFile());
console.log(fs.statSync("./file.txt"));

// it created folders recursively
fs.mkdirSync("my-docs/a/b/c/d", {recursive: true});

// blocking and non blocking request


