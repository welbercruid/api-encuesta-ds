const express = require('express');
const router = express.Router();
const respuestaControllers = require('../controllers/respuesta');

router.post('/:preguntaId/', respuestaControllers.add); // si

module.exports = router;