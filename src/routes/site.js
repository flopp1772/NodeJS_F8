const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');

// Trang chủ
router.get('/', SiteController.index);

// Trang tìm kiếm (dùng query: /search?q=...)
router.get('/search', SiteController.search);

module.exports = router;
