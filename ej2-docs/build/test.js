'use strict';

var fs = require('fs');
var gulp = require('gulp');
var glob = require('glob');
var shelljs = require('shelljs');

/**
 * Lint md files in src location
 */
gulp.task('lint', ['root-summary'], function (done) {
    var markdownlint = require("markdownlint");
    var options = {
        files: glob.sync('./src/**/*.md',{ ignore:'./src/**/api*.md'}),
        config: require("../.markdownlint.json")
    };
    markdownlint(options, function (result, err) {
        if (err.toString().length) {
            console.error(err.toString());
            done();
            process.exit(1);
        }
        else {
            console.log('\n*** Markdown Lint Succeeded ***\n');
            done();
        }
    });
});

/**
 * Check typo issues in src md files
 */
gulp.task('typo', function () {
    // copy/paste .spelling file in .bin location
    fs.writeFileSync('./node_modules/.bin/.spelling', fs.readFileSync('./.spelling', 'utf8'));
    // goto .bin location
    shelljs.cd('./node_modules/.bin/');
    // run mdspell command
    var output = shelljs.exec('mdspell ../../src/**/*.md !../../src/**/api*.md !../../src/summary.md -r -n -a -x --color');
    // return root location
    shelljs.cd('../../');
    if (output.code !== 0) {
        console.error('\n** ej2-docs have typo issues ***');
        process.exit(1);
    }
});

/**
 * Test build task functions
 */
gulp.task('build-test', function () {
    var jasmineNode = require('gulp-jasmine-node');
    return gulp.src(['build/spec/**/*spec.js'])
        .pipe(jasmineNode({
            timeout: 10000
        }));
});

/**
 * Run lint and typo
 */
gulp.task('test', ['lint', 'typo']);

/**
 * Run ci-test
 */
gulp.task('ci-test', ['test', 'build-test']);