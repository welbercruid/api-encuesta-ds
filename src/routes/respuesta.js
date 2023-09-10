const express = require('express');
const router = express.Router();
const respuestaControllers = require('../controllers/respuesta');

router.post('/preguntas/:preguntaId/respuestas', respuestaControllers.addRespuesta); // si

module.exports = router;