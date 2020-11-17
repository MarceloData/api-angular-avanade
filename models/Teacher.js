const mongoose = require("../database/db");

const Schema = mongoose.Schema;
const teachersSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        require: true,
    },
    image_url: {
        type: String,
        require: false,
        default: undefined,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        require: false,
        default: undefined,
    },
});

module.exports = mongoose.model("Teacher", teachersSchema, "teachers");
