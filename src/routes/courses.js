const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');

// Route tạo khóa học
router.get('/create', CourseController.create);            // [GET] /courses/create
router.post('/store', CourseController.store);             // [POST] /courses/store

// Các thao tác với ID
router.get('/:id/edit', CourseController.edit);            // [GET] /courses/:id/edit
router.put('/:id', CourseController.update);               // [PUT] /courses/:id
router.delete('/:id', CourseController.softDelete);        // [DELETE] /courses/:id
router.delete('/:id/force', CourseController.forceDelete); // [DELETE] /courses/:id/force
router.patch('/:id/restore', CourseController.restore);    // [PATCH] /courses/:id/restore

// Route hiển thị khóa học theo slug — ĐẶT CUỐI CÙNG
router.get('/:slug', CourseController.show);               // [GET] /courses/:slug

module.exports = router;