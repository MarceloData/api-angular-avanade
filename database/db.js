const mongoose = require("mongoose");

const db =
    "mongodb://MarceloUser:MarceloUser@cluster0-shard-00-00.hvxi9.mongodb.net:27017,cluster0-shard-00-01.hvxi9.mongodb.net:27017,cluster0-shard-00-02.hvxi9.mongodb.net:27017/api_desafio_angular?ssl=true&replicaSet=atlas-72jssz-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(
    db,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Connected to mongodb");
        }
    }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
