const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect('mongodb://blimbing:blimbing_@codemarket-shard-00-00.ribpd.mongodb.net:27017,codemarket-shard-00-01.ribpd.mongodb.net:27017,codemarket-shard-00-02.ribpd.mongodb.net:27017/review-arduino?ssl=true&replicaSet=atlas-di072z-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Mongodb Connected with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase;