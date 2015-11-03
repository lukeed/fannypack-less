var Fannypack = require('fannypack')
var gulp      = require('gulp')
var $         = Fannypack.$

var less      = require('gulp-less')

module.exports = function(config){
  if(!config.less) return

  var paths = {
    src: $.Pather.join(config.root.src, config.less.src, '/**/*.' + config.less.extensions),
    dest: $.Pather.join(config.root.dest, config.less.dest)
  }

  gulp.task('less', function () {
    return gulp.src(paths.src)
      .pipe( $.SourceMaps.init() )
      .pipe( less(config.less.options) )
      .on('error', $.ErrorHandler)
      .pipe( $.Autoprefix(config.autoprefixer) )
      .pipe( $.SourceMaps.write() )
      .pipe( gulp.dest(paths.dest) )
      .pipe( $.BrowserSync.reload({stream:true}) )
  })
};
