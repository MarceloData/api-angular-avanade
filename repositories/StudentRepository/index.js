"use strict";

const Student = require('../../models/Student');

module.exports = {

    getAll() {
        return Student.find();
    },

    getById(id) {
        return Student.findById(id);
    },

    getByEmail(email) {
        return Student.findOne(email);
    },

    create(user) {
        return Student.create(user);
    },

    update(id, updateuser) {
        return Student.findByIdAndUpdate(id, updateuser, {
            new: true,
            runValidators: true,
        });
    },

    delete(id) {
        return Student.findByIdAndRemove(id);
    },
};
