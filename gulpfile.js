const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('sass', compilasass);
gulp.task('watch', watch);
gulp.task('browser', browser);
gulp.task('default', gulp.parallel('watch', 'browser', 'sass'));

function browser(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

function compilasass () {
  return gulp.src('css/scss/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('css/compilad/'))
  .pipe(browserSync.stream());
}

function watch(){
  gulp.watch('css/scss/*.scss', compilasass);
  gulp.watch('*html').on('change', browserSync.reload)
}