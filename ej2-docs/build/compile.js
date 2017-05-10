'use strict';

var fs = require('fs');
var gulp = require('gulp');
var shelljs = require('shelljs');

/**
 * Compile md to html
 */
gulp.task('build', ['create-data'], function () {
    compile();
});

/**
 * Compile md file to json
 */
gulp.task('parse-json', ['root-summary'], function () {
    // install custom plugin in ej2-docs
    shelljs.exec('npm link ./gitbook-plugin-syncfusion-ej2', { silent: true });
    // parse json meta data in ej2-docs
    shelljs.exec('gitbook build ./ --format json ./summary-json', { silent: true });
});


/**
 * Watch md file changes
 */
gulp.task('watch', ['serve'], function () {
    gulp.watch('./src/**/*.md', ['serve']);
});

/**
 * Serve gitbook in browser
 */
gulp.task('serve', ['create-data'], function () {
    shelljs.exec('gitbook serve');
});

// Compile the md files using gitbook
function compile() {
    var output = shelljs.exec('gitbook build');
    if (output.code !== 0) {
        process.exit(1);
    }
}