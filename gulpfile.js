var gulp = require('gulp'),
    server = require('browser-sync'),
    sass = require('gulp-sass'),
    minify = require('gulp-csso'),
    concat = require('gulp-concat');

gulp.task('styles', function() {
  gulp.src('sass/style.scss')
//  .pipe(concat('style.scss'))
  .pipe(sass())
  .pipe(gulp.dest('css'))
//  .pipe(minify())
//  .pipe(gulp.dest('css/min'))
  .pipe(server.reload({stream: true}))
});

gulp.task('serve', function(){
  server.init({
    server: {
      baseDir: './'
    },
    notify: false
  });
});

gulp.task ('watch', ['serve', 'styles'], function() {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('*.html', server.reload);
  gulp.watch('js/*.js', server.reload);
});