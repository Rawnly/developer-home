#!/usr/bin/env node

// Gulpfile
require('colors');
require('chili-js');

// var coffee = require('gulp-coffee');
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {

  // File watching
  log(`Watching for changes`.yellow)

  // Watch files and call the task
  // gulp.watch('./coffee/**/*.coffee', ['coffee']);
  gulp.watch('./sass/**/*.sass', ['sass']);

  gulp.watch('./src/**/**', ['reload']);

  // BrowserSync init :)
  browserSync.init({
      server: {
          baseDir: "./src/"
      }
  });
});

// Convert CoffeeScript to JavaScript
// gulp.task('coffee', function() {
//   gulp.src('./coffee/*.coffee')
//     .pipe(coffee({bare: true}).on('error', gutil.log))
//     .pipe(gulp.dest('./src/js/'))
//     .pipe(browserSync.stream());
//     log( `Coffee` );
// });

// Convert SASS to CSS
gulp.task('sass', function () {
  gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
    log( `SASS` );
});

// Reload the webpage
gulp.task('reload', function() {
  browserSync.reload();
});
