const meRouter = require('./me');
const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter); // Sửa 'course' thành 'courses'
  app.use('/me', meRouter); // Sửa 'course' thành 'courses'
  app.use('/', siteRouter); // Để cuối vì '/' khớp tất cả
}

module.exports = route;