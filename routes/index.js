const express = require("express");
const router = express.Router({strict:true});

const teachers = require("./teachersRoutes");
const students = require("./studentsRoutes");
const classes = require("./classesRoutes");

router.use("/teachers", teachers);
router.use("/students", students);
router.use("/classes", classes);

module.exports = router;
