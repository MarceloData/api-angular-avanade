const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");
const login = require("../validators/login");

router.post("/login", login.validate);

router.get("/", UsersController.getAll);
router.get("/:id", UsersController.get);
router.post("/register", UsersController.create);
router.put("/update/:id", UsersController.update);
router.delete("/delete/:id", UsersController.delete);

module.exports = router;
