var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sequence = require('gulp-sequence');

var theme = 'themes/boilerplate';
var cssPath = theme + '/source/css';
var bulmaFiles = cssPath + '/_bulma/**/*.sass';
var scssPath = cssPath + '/_scss';
var scssFiles = scssPath + '/**/*.scss';
var jsPath = theme + '/source/js';
var jsFiles = jsPath + '/_lib/**/*.js';

gulp.task('sass', function() {
  return gulp.src(scssPath + '/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest(cssPath + '/'))
});

gulp.task('minify-css', () => {
  return gulp.src(cssPath + '/styles.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cssPath));
});

gulp.task('concat-scripts', function() {
  return gulp.src(jsFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(jsPath))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(jsPath));
});

gulp.task('translate-es6', () =>
  gulp.src(jsPath + '/app.min.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(gulp.dest(jsPath))
);

gulp.task('compile-sass', function(callback) {
  sequence('sass', 'minify-css')(callback)
});

gulp.task('transpile-js', function(callback) {
  sequence('concat-scripts', 'translate-es6')(callback)
});

gulp.task('watch', function(){
  gulp.watch(bulmaFiles, ['compile-sass']);
  gulp.watch(scssFiles, ['compile-sass']);
  gulp.watch(jsFiles, ['transpile-js']);
});
