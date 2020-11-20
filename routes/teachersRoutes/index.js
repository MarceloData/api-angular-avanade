const express = require("express");
const router = express.Router();
const TeachersController = require("../../controllers/TeachersController");

router.get("/", TeachersController.getAll);
router.get("/:id", TeachersController.getById);
router.post("/register", TeachersController.create);
router.put("/update/:id", TeachersController.update);
router.delete("/delete/:id", TeachersController.delete);

module.exports = router;
