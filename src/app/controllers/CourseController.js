const Course = require('../models/Course');

class CourseController {
  //[GET] /courses/:slug
  show(req, res) {
    res.send('NEW DETAIL!!! - ' + req.params.slug);
  }
}

module.exports = new CourseController();
