const express = require('express');
const router = express.Router();
const preguntaControllers = require('../controllers/pregunta');

router.post('/preguntas', preguntaControllers.addPregunta); // si
router.get('/', preguntaControllers.allPreguntas);          // si
//router.post('/preguntas/:preguntaId/respuestas', preguntaControllers.addRespuesta); // si
router.delete('/preguntas/:preguntaId/', preguntaControllers.deletePregunta)
//router.put('/preguntas/:preguntaId/respuestas/:respuestaId/votar', preguntaControllers.votar);

module.exports = router;
