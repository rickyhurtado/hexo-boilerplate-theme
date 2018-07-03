var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var cssPath = 'themes/boilerplate/source/css';
var scssPath = cssPath + '/_scss';

gulp.task('sass', function() {
  return gulp.src(scssPath + '/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest(cssPath + '/'))
});

gulp.task('watch', function(){
  gulp.watch(scssPath + '/**/*.scss', ['sass']);
})

gulp.task('minify-css', () => {
  return gulp.src(cssPath + '/styles.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cssPath));
});
