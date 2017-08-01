'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  purify = require('gulp-purifycss');



gulp.task("concatCss", function() {
  gulp.src([
  'css/normalize.css',
  'css/foundation.css',
  'css/basics.css',
  'css/menu.css',
  'css/footer.css',
  'css/hero.css',
  'css/photo-grid.css',
  'css/modals.css'
  ])
  .pipe(concat("app.css"))
  .pipe(gulp.dest("css"));
});

gulp.task('purifyCss', function() {
  return gulp.src('css/app.min.css')
    .pipe(purify(['js/*.js', './*.html']))
    .pipe(clean())
    .pipe(rename('app.min.pure.css'))
    .pipe(gulp.dest('./css/'));
});


gulp.task("cleanScripts", function() {
  gulp.src([
  'js/lazyload.js',
  'js/jquery.js',  
  'js/fastclick.js',
  'js/foundation.js',
  'js/foundation.equalizer.js',
  'js/foundation.reveal.js'
  ])
  .pipe(concat("app.js"))
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest("js"));
});
