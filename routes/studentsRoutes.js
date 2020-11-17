const express = require("express");
const router = express.Router();
const StudentsController = require("../controllers/StudentsController");

router.get("/", StudentsController.getAll);
router.get("/:id", StudentsController.get);
router.post("/register", StudentsController.create);
router.put("/update/:id", StudentsController.update);
router.delete("/delete/:id", StudentsController.delete);

module.exports = router;
