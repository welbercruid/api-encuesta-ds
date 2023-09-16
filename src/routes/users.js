const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users');
const usersMiddlewares = require('../middlewares/users');
const logged = require('../middlewares/logged');

router.use(usersMiddlewares.usersLogger);
router.use(logged);

router.get('/', usersControllers.get);
router.get('/id/:id', usersMiddlewares.validarID, usersControllers.get);
router.get('/profile', usersControllers.profile);
//router.post('/', usersControllers.add);
//router.post('/login', usersControllers.login);
// router.get('/login/up', usersControllers.login);
module.exports = router;
