const mongoose = require('mongoose');

// connection
// mongoose.connect('mongodb://127.0.0.1:27017/youtube-api-1')
// .then(()=> console.log("mongodb connected."))
// .catch((err)=> console.log("Mongo Err: ", err));

async function connectMongoDB(url){
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDB,
}