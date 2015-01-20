'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

/**
 * Path to assets folder where you'll author CSS, JavaScript assets
 * @type {String}
 */
var assetsFolderPath = 'app/assets';

/**
 * Public folder path to assets processed by gulp, this can be adjusted for sitecore
 * @type {String}
 */
var publicFolderPath = 'public';

/**
 * Source paths where you'll author SASS
 * @type {Object}
 */
var sourcePaths = {
    sass: [assetsFolderPath + '/styles/**/*.scss']
};

/**
 * Destination paths where assets will go after they're built, do not edit files in this
 * directory directly
 * @type {Object}
 */
var destinationPaths = {
    styles: publicFolderPath + '/styles',
};

// gulp sass
gulp.task('sass', function() {
    gulp.src(sourcePaths.sass)
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(destinationPaths.styles));
});

// gulp watch
gulp.task('watch', function() {
    gulp.watch(sourcePaths.sass, ['sass']);
});

// default gulp task
gulp.task('default', ['sass']);