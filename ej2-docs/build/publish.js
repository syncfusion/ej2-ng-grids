'use strict';

var fs = require('fs');
var gulp = require('gulp');
var staging = require('./staging.js');

/**
 * publish user guide docs
 */
gulp.task('publish-docs', function(done) {
    var isMaster = (process.env.BRANCH_NAME !== process.env.STAGING_BRANCH &&
        process.env.BRANCH_NAME !== process.env.HOTFIX_BRANCH);

    var docsPath = isMaster ? './production.angular.documentation' : './angular.documentation';
    fs.mkdirSync(docsPath);
    // update docs location with latest documentation
    gulp.src(['./_book/**/*', '!./_book/**/*.md'])
        .pipe(gulp.dest(docsPath))
        .on('end', function() {
            staging.host(docsPath, done);
        })
        .on('error', function(e) {
            done(e);
        });
});