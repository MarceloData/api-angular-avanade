const express = require("express");
const router = express.Router();

const users = require("./usersRoutes");
const teachers = require("./teachersRoutes");
const students = require("./studentsRoutes");

router.use("/users", users);
router.use("/teachers", teachers);
router.use("/students", students);

module.exports = router;
