// function add(a,b){
//     return a + b;
// }

// function sub(a,b){
//     return a- b;
// }


// module.exports = {
//     addFun: add,
//     subFun: sub,
// }

// another way of exporting is to use the exports objects
exports.add = (a,b) => a + b;
exports.sub = (a,b) => a - b; // this is an anonymous function

// module.exports = {
//     add,
//     sub,
// }
// returnoing an object'
// module.exports = add; // fopr returnning only one fucntion

// module.exports = 'add';
// whatever be the value of module.exports will be the value of math variable in main.js

