const mongoose = require("../../database/db");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const teacherSchema = new Schema({
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
    password: {
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

teacherSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

module.exports = mongoose.model("Teacher", teacherSchema, "teachers");
