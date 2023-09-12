const express = require('express');
const router = express.Router();
const preguntaControllers = require('../controllers/pregunta');

router.post('/', preguntaControllers.add); // si
router.get('/', preguntaControllers.get);          // si
router.get('/:id', preguntaControllers.get);          // si
router.delete('/:preguntaId', preguntaControllers.del)

module.exports = router;
