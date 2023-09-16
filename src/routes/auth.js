const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const authMiddlewares = require('../middlewares/auth');

router.use(authMiddlewares.authLogger);

router.post('/register', authMiddlewares.validarData, authController.register);
//router.put('/', authController.updatePassword);
router.post('/login', authController.login);
//router.post('/login', usersControllers.login);
module.exports = router;