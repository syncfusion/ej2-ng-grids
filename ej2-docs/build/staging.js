'use strict';

var fs = require('fs');
var gulp = require('gulp');
var zip = require('gulp-zip');
var gzip = require('gulp-gzip');
var request = require('request');

function host(filePath, done) {
    var appName = filePath.split('./')[1];
    gulp.src([filePath + '/**/*'])
        .pipe(gzip({ append: false }))
        .pipe(zip(appName + '.zip'))
        .pipe(gulp.dest(filePath))
        .on('end', function() {
            var options = {
                url: process.env.STAGING_SERVER + 'staging/index.ashx',
                formData: {
                    staging: 'true',
                    file: fs.createReadStream(filePath + '/' + appName + '.zip')
                },
                headers: {
                    'content-type': 'application/x-zip-compressed'
                }
            };
            request.post(options, function(err, resp, body) {
                if (err) {
                    console.log(err);
                    done(err);
                    process.exit(1);
                } else {
                    var JsonResp = JSON.parse(body);
                    console.log(JsonResp.status);
                    console.log(appName + ' - Staged Successfully In ' + JsonResp.location + ' Location');
                    done();
                }
            });
        })
        .on('error', function(e) {
            done(e);
            process.exit(1);
        });
}
exports.host = host;