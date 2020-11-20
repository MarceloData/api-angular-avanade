"use strict";

const Teacher = require('../../models/Teacher');

module.exports = {

    getAll() {
        return Teacher.find();
    },

    getById(id) {
        return Teacher.findById(id);
    },

    getByEmail(email) {
        return Teacher.findOne(email);
    },

    create(user) {
        return Teacher.create(user);
    },

    update(id, updateuser) {
        return Teacher.findByIdAndUpdate(id, updateuser, {
            new: true,
            runValidators: true,
        });
    },

    delete(id) {
        return Teacher.findByIdAndRemove(id);
    },
};
