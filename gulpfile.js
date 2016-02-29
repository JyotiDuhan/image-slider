var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css');

var jsPath = 'js/*.js',
	cssPath = 'css/*.css';

gulp.task('buildjs', function(){
	return gulp.src(jsPath)
		   .pipe(uglify())
		   .pipe(concat('image-slider.min.js'))
		   .pipe(gulp.dest('dest/'));
});

gulp.task('buildcss', function(){
	return gulp.src(cssPath)
		   .pipe(minifyCss())
		   .pipe(concat('image-slider.min.css'))
		   .pipe(gulp.dest('dest/'));
});

gulp.task('default', ['buildjs', 'buildcss']);	
