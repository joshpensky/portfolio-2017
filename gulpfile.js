'use strict';

var fs = require('fs');
var gulp = require('gulp');
var clean = require('gulp-clean');
var fileinclude = require('gulp-file-include');
var mergeStream = require('merge-stream');
var rename = require('gulp-rename');
var sequence = require('gulp-sequence');
var sass = require('gulp-sass');
var template = require('gulp-template');

gulp.task('build', sequence('projects', 'html', 'sass'));

gulp.task('clean-dist', function() {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('build:all', ['clean-dist'], sequence('build', 'copy'))

gulp.task('html', function() {
  return gulp
    .src('./src/pages/**/*')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('projects', function() {
    const projects = JSON.parse(fs.readFileSync('./src/data/projects.json'));
    var tasks = [];
    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        if (i - 1 >= 0) {
            var previous = projects[i - 1];
            project.previous = {
                id: previous.id,
                title: previous.title,
            }
        }
        if (i + 1 < projects.length) {
            var next = projects[i + 1];
            project.next = {
                id: next.id,
                title: next.title,
            }
        }
        tasks.push(
            gulp.src('./src/templates/project.html')
                .pipe(rename(project.id + '.html'))
                .pipe(template(project))
                .pipe(gulp.dest('./src/pages/projects'))
        );
    }
    return mergeStream(tasks);
})

gulp.task('copy', function() {
    return gulp
        .src([
            './src/fonts/**/*',
            './src/img/**/*',
            './src/js/**/*',
            './src/php/**/*',
            './src/humans.txt',
            './src/resume.pdf',
            './src/robots.txt'
        ], {
            base: './src'
        })
        .pipe(gulp.dest('./dist'));
});