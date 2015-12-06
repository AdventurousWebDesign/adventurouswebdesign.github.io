var gulp      = require('gulp');
var concat    = require('gulp-concat');
var rename    = require('gulp-rename');
var uglify    = require('gulp-uglify');

var globalConfig = {
  css:     'css',
  sass:    '_sass',
  js:      '_js',
  js_dest: 'js',
  npm:     'node_modules',
};

gulp.task('scripts', function() {
  return gulp.src([
      globalConfig.npm + '/uikit/dist/js/core/core.js',
      globalConfig.npm + '/uikit/dist/js/core/touch.js',
      globalConfig.npm + '/uikit/dist/js/core/utility.js',
      globalConfig.npm + '/uikit/dist/js/core/smooth-scroll.js',
      globalConfig.npm + '/uikit/dist/js/core/scrollspy.js',
      globalConfig.npm + '/uikit/dist/js/core/toggle.js',
      globalConfig.npm + '/uikit/dist/js/core/alert.js',
      globalConfig.npm + '/uikit/dist/js/core/button.js',
      globalConfig.npm + '/uikit/dist/js/core/dropdown.js',
      globalConfig.npm + '/uikit/dist/js/core/grid.js',
      globalConfig.npm + '/uikit/dist/js/core/modal.js',
      globalConfig.npm + '/uikit/dist/js/core/nav.js',
      globalConfig.npm + '/uikit/dist/js/core/offcanvas.js',
      globalConfig.npm + '/uikit/dist/js/core/switcher.js',
      globalConfig.npm + '/uikit/dist/js/core/tab.js',
      globalConfig.npm + '/uikit/dist/js/core/cover.js',
      globalConfig.npm + '/uikit/dist/js/components/sticky.js',
      globalConfig.npm + '/uikit/dist/js/components/slideshow.js',
      globalConfig.npm + '/uikit/dist/js/components/datepicker.js',
      globalConfig.npm + '/uikit/dist/js/components/tooltip.js',
      globalConfig.npm + '/uikit/dist/js/components/slider.js',
      globalConfig.js + '/main.js'
    ])
    .pipe(concat('adventurous.js'))
    .pipe(uglify())
    .pipe(gulp.dest(globalConfig.js_dest));
});

// Watch files
gulp.task('watch', function () {
  gulp.watch(globalConfig.js + '/*.js', ['scripts']);
});

// Default task
gulp.task('default', ['watch']);

