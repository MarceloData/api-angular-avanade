const mongoose = require("../../database/db");

const Schema = mongoose.Schema;
const classSchema = new Schema({
    teacher: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    students: {
        type: Array,
        required: false,
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

module.exports = mongoose.model("Class", classSchema, "classes");
