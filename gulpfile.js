const jshint = require('gulp-jshint');

var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Paso por aqui');
});

gulp.task('lint', function() {
  return gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});
