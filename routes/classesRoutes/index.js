const express = require("express");
const router = express.Router();
const ClassesController = require("../../controllers/ClassesController");

router.get("/", ClassesController.getAll);
router.get("/:id", ClassesController.getById);
router.post("/register", ClassesController.create);
router.put("/update/:id", ClassesController.update);
router.delete("/delete/:id", ClassesController.delete);

module.exports = router;
