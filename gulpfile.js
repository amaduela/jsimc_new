var gulp = require('gulp');
var less = require('gulp-less');
var minifycss = require('gulp-csso');
var notify = require('gulp-notify');

gulp.task('bootstrapless', function() {
	return gulp.src('node_modules/bootstrap/less/**/**')
	  .pipe(gulp.dest(('src/less/bootstrap/')));
});