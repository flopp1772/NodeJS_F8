const Course = require('../models/Course');

class SiteController {
  // [GET] /
  async index(req, res, next) {
    Course.find({}).lean()
      .then(courses => res.render('home', { courses }))
      .catch(err => res.status(400).json({ error: 'ERROR!!!' }));
  }

  // [GET] /search
  search(req, res) {
    const keyword = req.query.q || '';
    res.render('search', { keyword });
  }
}

module.exports = new SiteController();
