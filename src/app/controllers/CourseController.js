const Course = require('../models/Course');

class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug }).lean()
      .then(course => {
        if (!course) return res.status(404).send('Course not found');
        res.render('courses/show', course);  // ← Truyền trực tiếp
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render('courses/create')
  }

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/hqdefault.jpg`;

    const course = new Course(formData);
    course.save()
      .then(() => res.redirect('/')) // hoặc res.send('Course saved!')
      .catch(error => next(error));
  }

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id).lean()
      .then(course => {
        if (!course) return res.status(404).send('Course not found');
        res.render('courses/edit', { course });  // Truyền object course vào view
      })
      .catch(next);
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }

  // Soft delete
  softDelete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => {
        const backURL = req.get('Referer') || '/me/stored/courses';
        res.redirect(backURL);
      })
      .catch(next);
  }

  // Force delete (hard delete)
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        const backURL = req.get('Referer') || '/me/stored/courses';
        res.redirect(backURL);
      })
      .catch(next);
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        const backURL = req.get('Referer') || '/me/trash/courses';
        console.log('Đã khôi phục thành công:', req.params.id);
        res.redirect(backURL);
      })
      .catch(next);
  }

  // [DELETE] /courses/:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        const backURL = req.get('Referer') || '/me/trash/courses';
        res.redirect(backURL);
      })
      .catch(next);
  }

}

module.exports = new CourseController();