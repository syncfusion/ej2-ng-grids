'use strict';

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var glob = require('glob');
var shelljs = require('shelljs');

/**
 * Copy samples to gitbook location
 */
gulp.task('samples', function () {
    // Copy samples to _book
    var files = glob.sync('{./samples/**/*.js,./samples/**/*.ts,./samples/**/*.css,./samples/**/*.html,./samples/**/*.json}', { silent: true });
    for (var i = 0; i < files.length; i++) {
        var content = fs.readFileSync(files[i], 'utf8');
        var destFile = files[i].replace('./', './_book/');
        var dest = path.dirname(destFile);
        if (!fs.existsSync(dest)) {
            shelljs.mkdir('-p', dest);
        }
        fs.writeFileSync(destFile, content);
    }

    // Copy syncfusion dependencies
    copyDependencies();

    // Copy images to book
    //gulp.src(['./images/**/*.gif', './images/**/*.png', './images/**/*.jpg'])
    //    .pipe(gulp.dest('./_book/samples/images'));
});

function getEntryPoints() {
    var entries = {};
    var entryFiles = glob.sync('./samples/**/index.js');
    for (var i = 0; i < entryFiles.length; i++) {
        var entry = entryFiles[i].replace('.js', '');
        entries[entry] = entryFiles[i];
    }
    return entries;
}

function copyDependencies() {
    var dest = './_book/samples/@syncfusion/';
    var files = glob.sync('./node_modules/@syncfusion/**/dist/*.js', { silent: true });
    if (!fs.existsSync(dest)) {
        shelljs.mkdir('-p', dest);
    }
    for (var i = 0; i < files.length; i++) {
        var content = fs.readFileSync(files[i], 'utf8');
        var fileName = path.basename(files[i]);
        fs.writeFileSync(dest + fileName, content);
    }
}
