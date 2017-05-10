'use strict';

var fs = require('fs');
var gulp = require('gulp');
var glob = require('glob');
var config = require('../config.json');
var mappingNames = config.mapping;

/**
 * Create root summary.md
 */
gulp.task('root-summary', function () {
    var files = glob.sync('./src/**/summary.md', { silent: true, ignore: ['./src/summary.md'] });
    return createRootSummary('./src/', files);
});

// Creating root summary 
function createRootSummary(rootPath, controls) {
    var controlSummary = '';
    // Create top level common chapters in tree panel
    var topSummary = '# Summary\n' + getTopSummary();
    for (var i = 0; i < controls.length; i++) {
        var mdData = fs.readFileSync(controls[i], 'utf8');
        controlSummary = controlSummary + getControlSummary(controls[i], mdData);
    }
    // create bottom level common chapters in tree panel
    var bottomSummary = getBottomSummary();
    var content = topSummary + controlSummary + bottomSummary;
    // write root summary file
    fs.writeFileSync(rootPath + 'summary.md', content);
}
exports.createRootSummary = createRootSummary;

// Get top level summary in tree panel
function getTopSummary() {
    var top = fs.readFileSync('./src/top.md', 'utf8');
    var path = './src/base/api-index.md';
    if(fs.existsSync(path)){
        var temp = fs.readFileSync(path,'utf8');
        if(temp.length){
            temp = temp.replace(/Hide_/g,'API - ');
            top += '\n' + temp;
        }
    }
    return top.length ? '\n' + top + '\n\n----\n' : top;
}
exports.getTopSummary = getTopSummary;

// get bottom level summary in tree panel
function getBottomSummary() {
    var bottom = fs.readFileSync('./src/bottom.md', 'utf8');
    return bottom.length ? '\n' + bottom : bottom;
}
exports.getBottomSummary = getBottomSummary;

// Get control summary from each component's summary.md
function getControlSummary(controlPath, mdData) {
    var baseName = controlPath.split('/')[2];
    var apiList = controlPath.split('summary.md')[0] + 'api-index.md';
    var control = getControlName(baseName);
    // generate control root
    var controlRoot = '\n* [' + control + '](' + baseName + '/index.md)\n';
    // set sub chapters to root summary
    var mdList = mdData.split('\n'), subChapter = '';
    if(fs.existsSync(apiList)){
        var apiData = fs.readFileSync(apiList, 'utf8');
        apiData= apiData.replace(/Hide_/g,'API - ')
        mdList = mdList.concat(apiData.split('\n'));
    }
    for (var i = 0; i < mdList.length; i++) {
        subChapter = subChapter + '    ' + mdList[i] + '\n';
    }
    
    // return control summary
    return controlRoot + subChapter + '\n----\n';
}
exports.getControlSummary = getControlSummary;

// Naming convention for components summary
function getControlName(baseName) {
    if(mappingNames[baseName]) {
        return mappingNames[baseName];
    }
    var splitted = baseName.split('-');
    var name = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1);
    for (var k = 1; k < splitted.length; k++) {
        name = name + splitted[k].charAt(0).toUpperCase() + splitted[k].slice(1);
    }
    return name;
}
exports.getControlName = getControlName;
