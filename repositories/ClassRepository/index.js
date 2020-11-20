"use strict";

const Class = require('../../models/Class');

module.exports = {

    getAll() {
        return Class.find();
    },

    getById(id) {
        return Class.findById(id);
    },

    getByEmail(email) {
        return Class.findOne(email);
    },

    create(user) {
        return Class.create(user);
    },

    update(id, updateuser) {
        return Class.findByIdAndUpdate(id, updateuser, {
            new: true,
            runValidators: true,
        });
    },

    delete(id) {
        return Class.findByIdAndRemove(id);
    },
};
