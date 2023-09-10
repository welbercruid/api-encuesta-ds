const express = require('express');
const router = express.Router();
const preguntaControllers = require('../controllers/pregunta');

router.post('/crear', preguntaControllers.addPregunta); // si
router.get('/', preguntaControllers.getPreguntas);          // si
router.get('/:id', preguntaControllers.getPreguntas);          // si
//router.post('/preguntas/:preguntaId/respuestas', preguntaControllers.addRespuesta); // si
router.delete('/:preguntaId', preguntaControllers.deletePregunta)

module.exports = router;
