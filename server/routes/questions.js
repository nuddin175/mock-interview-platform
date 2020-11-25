const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');


router.get('/:questionId', questionController.getQuestion);

router.post('/', questionController.create);

module.exports = router;
