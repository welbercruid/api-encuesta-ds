const express = require('express');
const router = express.Router();
const respuestaControllers = require('../controllers/respuesta');

router.post('/:preguntaId/', respuestaControllers.addRespuesta); // si

module.exports = router;