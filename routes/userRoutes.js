const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post('/', UserController.createUser);
router.get('/email/:email', UserController.searchByEmail);
router.get('/id/:id', UserController.searchById);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
