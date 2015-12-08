var gulp         = require('gulp');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var buffer       = require('vinyl-buffer');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var rename       = require("gulp-rename");
var run          = require('gulp-run');

require('es6-promise').polyfill();

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


gulp.task('sassc', function () {
  gulp.src('css/adventurous.scss', { buffer: false })
    .pipe(plumber(function(err) {
        gutil.beep();
        var errorTxt = err.message +'\n\n'+ err.source;
        gutil.log(gutil.colors.red(errorTxt));
    }))
    .pipe(run('sassc -s', {verbosity: 1}))
    .pipe(rename(function (path) { path.extname = ".css"; }))
    .pipe(buffer())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css/'));
});

// Watch files
gulp.task('watch', function () {
  gulp.watch(globalConfig.js + '/*.js', ['scripts']);
  gulp.watch([globalConfig.sass + '/*.scss', 'css/*'], ['sassc']);
});

// Default task
gulp.task('default', ['watch']);

