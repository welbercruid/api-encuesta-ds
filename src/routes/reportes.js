const express = require('express');
const router = express.Router();
const reportsControllers = require('../controllers/reportes');

router.get('/reportes', reportsControllers.reports);

module.exports = router;