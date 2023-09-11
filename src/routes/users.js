const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users');

router.get('/', usersControllers.get);
router.get('/:id', usersControllers.get);
router.post('/', usersControllers.add);
router.get('/validate/up', usersControllers.validateUser);

module.exports = router;
