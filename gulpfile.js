var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

var paths = {
    entry: './www/app.js',
    output: './www',
    isass: [
        './scss/**/*.scss'
    ],
    sass: [
        './www/**/*.scss'
    ],
    js: [
        './www/**/*.js',
        '!./www/bundle.js',
        '!./www/bundle.map.js'
    ],
    html: [
        './www/**/*.html'
    ]
};

gulp.task('default', ['sass']);

gulp.task('dev', function() {
    return gulp.src(paths.entry)
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest(paths.output));
});

gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.isass, ['sass', 'dev']);
    gulp.watch(paths.sass, ['dev']);
    gulp.watch(paths.js, ['dev']);
    gulp.watch(paths.html, ['dev']);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
