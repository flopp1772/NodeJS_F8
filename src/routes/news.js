const express = require('express');
const router = express.Router();

const NewController = require('../app/controllers/NewsController');

router.use('/:slug', NewController.show);
router.use('/', NewController.index);

module.exports = router;
