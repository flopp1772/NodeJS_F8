const Course = require('../models/Course');

class MeController {
  // [GET] /me/stored/courses
  async storedCourses(req, res, next) {
    try {
      const [courses, deletedCourses] = await Promise.all([
        Course.find({ deleted: false }).lean(),
        Course.findDeleted().lean(), // Có thể trả cả bản ghi chưa xóa
      ]);

      const filtered = deletedCourses.filter(course => course.deleted); // Lọc thủ công

      res.render('me/stored-courses', {
        courses,
        deletedCount: filtered.length, // Đếm chính xác số lượng đã xóa
      });
    } catch (err) {
      console.error('[storedCourses Error]', err);
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .lean()
      .then((courses) => {
        const filtered = courses.filter(course => course.deleted); // Chỉ lấy bản ghi có flag `deleted`
        res.render('me/trash-courses', { deletedCourses: filtered });
      })
      .catch(next);

  }

}

module.exports = new MeController();