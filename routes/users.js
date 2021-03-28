var express = require('express');
var router = express.Router();
const userHandler = require("../controllers/userController.js");

/* GET users */
router.get('/', userHandler.findAll);

/* POST new user */
router.post('/', userHandler.create);

/* DELETE user */
router.delete('/:userId', userHandler.delete);

/* UPDATE user */
router.put('/:userId', userHandler.update);

module.exports = router;
