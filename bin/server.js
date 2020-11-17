const express = require("express");
const bodyParser = require("body-parser");
const router = require("../routes");

const PORT = 3500;

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(router);

server.listen(PORT, function () {
    console.log("Server is running on localhost: " + PORT);
});
