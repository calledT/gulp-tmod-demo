var gulp        = require('gulp');
var tmod        = require('gulp-tmod');
var browserSync = require('browser-sync');

var srcPath = 'test/tpl/**/*.html';

// Default
gulp.task('tmod-default', function() {
  return gulp.src(srcPath)
    .pipe(tmod({
        type: 'default',
        templateBase: 'test/tpl'
      }))
    .pipe(gulp.dest('test/build/default'));
});


// CMD
gulp.task('tmod-cmd', function() {
  return gulp.src(srcPath)
    .pipe(tmod({
      type: 'cmd',
      templateBase: 'test/tpl'
    }))
    .pipe(gulp.dest('test/build/cmd'));
});

// AMD
gulp.task('tmod-amd', function() {
  return gulp.src(srcPath)
    .pipe(tmod({
      type: 'amd',
      templateBase: 'test/tpl'
    }))
    .pipe(gulp.dest('test/build/amd'));
});


gulp.task('serve', ['tmod-default', 'tmod-cmd', 'tmod-amd'], function() {
  browserSync.init({server: {baseDir: 'test'}});

  gulp.watch('test/tpl/**/*.html', ['tmod-default', 'tmod-cmd', 'tmod-amd']);
});

