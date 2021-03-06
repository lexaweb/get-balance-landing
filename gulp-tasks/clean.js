const del = require('del'),
  cached = require('gulp-cached')

module.exports = function clean(cb) {
  return del('build/*').then(() => {
    cached.caches = {};
    cb()
  })
}
