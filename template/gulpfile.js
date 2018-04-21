var gulp = require('gulp');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');

gulp.task('css', function () {
  return gulp.src('source/stylesheets/site.css')
    .pipe(postcss([
      require('postcss-import'), 
      tailwindcss('./tailwind.js'), 
      require('postcss-cssnext')
    ]))
    .pipe(gulp.dest('./.tmp/stylesheets'));
});

gulp.task('build', ['css']);

gulp.task('default', ['css'], function() {
  gulp.watch('source/stylesheets/**/*.css', ['css']);
});