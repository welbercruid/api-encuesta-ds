const express = require('express');
const router = express.Router();
const tagsControllers = require('../controllers/tags');

router.get('/', tagsControllers.get);
router.post('/crear', tagsControllers.add);
router.get('/:id', tagsControllers.get);
router.get('/search/:nombre', tagsControllers.search);
module.exports = router;