'use strict';

var fs = require('fs');
var gulp = require('gulp');

/**
 * Create datasource from parse-json
 */
gulp.task('create-data', ['parse-json'], function () {
    // get json meta data for root summary
    var parseJson = JSON.parse(fs.readFileSync('./summary-json/README.json', 'utf8'));
    // get all li.chapters summary
    var parts = parseJson.summary.parts, ej2Parts = [];
    for (var i = 0; i < parts.length; i++) {
        // get articles from the chapter
        var articles = parts[i].articles;
        for (var j = 0; j < articles.length; j++) {
            var article = articles[j];
            var baseName = article.path.split('/')[0];
            // get required summary properties
            var partObj = {
                title: article.title,
                level: article.level,
                name: baseName
            };
            ej2Parts.push(partObj);
        }
    }
    var data = 'window.ej2Chapters = ' + JSON.stringify(ej2Parts) + ';';
    // write summary values in ej2Data
    fs.writeFileSync('./gitbook-plugin-syncfusion-ej2/book/ej2-data.js', data);
});
