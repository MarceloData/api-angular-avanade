const mongoose = require("../database/db");

const Schema = mongoose.Schema;
const studentSchema = new Schema({
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
    grade: {
        type: Number,
        require: false,
        default: 0,
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

module.exports = mongoose.model("Student", studentSchema, "students");
