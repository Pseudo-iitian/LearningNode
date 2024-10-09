const math = require('./math'); // ./ is important to check for pwd, else go for installed modules.
const {addFun, subFun} = require('./math');// we can also do the destructuring
// console.log(math.addFun(233,334));
// console.log(math.subFun(34,23));

console.log(math.add(2,4));  