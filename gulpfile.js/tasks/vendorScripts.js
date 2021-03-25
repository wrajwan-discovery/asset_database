
var config = require('../config');
var path = require('path');
var gulp = require('gulp');
var glob = require('glob');


var scriptCopyTask = config.tasks.copyScripts; 
var scriptClientCopyTask = config.tasks.copyClientScripts; 
var imgCopyTask = config.tasks.copyImg; 
var vidCopyTask = config.tasks.copyVid; 
var fontCopyTask = config.tasks.copyFonts; 
var dataCopyTask = config.tasks.copyData; 

gulp.task('copyScripts', function () {
		// Vendor scripts
    gulp.src(path.join(config.root.src, scriptCopyTask.src, '**/*.js'))
    .pipe(gulp.dest(path.join(config.root.dest, scriptCopyTask.dest)))
});

gulp.task('copyClientScripts', function () {
    // Client scripts
gulp.src(path.join(config.root.src, scriptClientCopyTask.src, '**/*.js'))
.pipe(gulp.dest(path.join(config.root.dest, scriptClientCopyTask.dest)))
});

gulp.task('copyImg', function () {
    // Images
    gulp.src(path.join(config.root.src, imgCopyTask.src, '**/*'))
    .pipe(gulp.dest(path.join(config.root.dest, imgCopyTask.dest)))
});

gulp.task('copyVid', function () {
    // Videos
    gulp.src(path.join(config.root.src, vidCopyTask.src, '**/*'))
    .pipe(gulp.dest(path.join(config.root.dest, vidCopyTask.dest)))
});

gulp.task('copyFonts', function () {
    // Fonts
    gulp.src(path.join(config.root.src, fontCopyTask.src, '**/*'))
    .pipe(gulp.dest(path.join(config.root.dest, fontCopyTask.dest)))
});

gulp.task('copyData', function () {
    // Videos
    gulp.src(path.join(config.root.src, dataCopyTask.src, '**/*.json'))
    .pipe(gulp.dest(path.join(config.root.dest, dataCopyTask.dest)))
});