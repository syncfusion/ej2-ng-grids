var fs = require('fs');
var path = require('path');
var glob = require('glob');
var html = require('html');
var md = require('markdown-it');
var shelljs = require('shelljs');
var cheerio = require('cheerio');
var hljs = require('highlight.js');
var config = require('../config.json');
var mappingNames = config.mapping;
var sampleIndexes = {},
    csId = null;

// highlight.js ext types
var types = {
    ".ts": "typescript",
    ".js": "javascript",
    ".scss": "scss",
    ".css": "css",
    ".html": "html",
    ".xml": "xml",
    ".json": "json"
}

if (fs.existsSync('./samples')) {
    shelljs.rm('-rf', './samples');
}

module.exports = {
    website: {
        assets: "./book",
        js: [
            "ej2-data.js",
            "syncfusion-ej2.js"
        ],
        css: [
            "syncfusion-ej2.css",
            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        ],
        images: [
            "images/"
        ]
    },
    hooks: {
        "finish:before": function() {
            var files = glob.sync('./_book/**/*.html', { silent: true });
            // get subChapters from root file
            getSubChapters(files[0]);
            for (var i = 0; i < files.length; i++) {
                // clear all subChapters in all html files
                clearSubChapters(files[i]);
                renderHeaderAnchor(files[i]);
            }
            if (this.output.name === 'website') {
                shelljs.exec('gulp samples');
            }
        }
    },
    blocks: {
        tab: {
            process: function(block) {
                // get tab template for wrapping code block
                var container = fs.readFileSync('./templates/code-container.html', 'utf8');
                // get the sample path
                var samplePath = createSample(block);
                // get default-active code snippet
                if (block.kwargs.isDefaultActive) {
                    container = container.replace(/preview tab-pane/, 'preview tab-pane default-active');
                }
                // set code snippet id to the nav elements
                var codeName = block.kwargs.template.split('/')[1];
                container = container.replace(/{{csId}}/g, codeName + csId);
                // set the sample path on preview button
                container = container.replace(/{{samplePath}}/g, '.' + samplePath);
                // create source tab under code snippets
                if (block.kwargs.sourceFiles) {
                    container = showFiles(container, samplePath, block.kwargs.sourceFiles);
                } else {
                    // render md codes to html highlight.js code block
                    var codesnippet = renderCodeSnippets(block.body);
                    container = container.replace('{{codesnippet}}', codesnippet);
                }
                return container;
            }
        }
    }
};

// Create source tab for multiple files
function showFiles(container, samplePath, filesGlob) {
    // get current container
    var $ = cheerio.load(container);
    var filesCollection = filesGlob.split(','),
        sampleFiles = [];
    for (var i = 0; i < filesCollection.length; i++) {
        sampleFiles.push(samplePath + '/' + filesCollection[i]);
    }
    var patterString = sampleFiles.toString();
    // get the glob pattern from file arguments
    var globPattern = sampleFiles.length > 1 ? '{' + patterString + '}' : patterString;
    var files = glob.sync(globPattern);
    // append the ul for source tab
    $('.source').html('');
    $('.source').append('<div class="ej2-source-tab"><ul class="nav nav-tabs"></ul></div>');
    var active = 'active',
        hidden = '';
    // create source content for code snippets
    for (var i = 0; i < files.length; i++) {
        var fileName = path.basename(files[i]);
        var fileAttr = fileName.split('.').join('-');
        var fileType = types[path.extname(files[i])]
        var type = fileType ? fileType : 'javascript';
        var hlContent = renderCodeSnippets('```' + type + '\n' + fs.readFileSync(files[i], 'utf8') + '\n```');
        if (i > 0) {
            active = '';
            hidden = 'ej2-hidden';
        }
        // append the li to ul element
        var li = '<li class="' + active + ' ej2-source-li" for="' + fileAttr + '"><a data-toggle="tab">' + fileName + '</a></li>';
        $('.ej2-source-tab .nav-tabs').append(li);
        // append the source content with highlight.js format in the container
        $('.ej2-source-tab').append('<div class="ej2-source-content ' + hidden + ' ' + fileAttr + '">' + hlContent + '</div>');
    }
    return $.html();
}

// Clear subChapters
function clearSubChapters(file) {
    var $ = getDomElements(file);
    var curTitle = getCurrentTitle(file);
    var root = file.indexOf('index.html') !== -1 ? '' : '..\\';
    $('head link[rel="shortcut icon"]')[0].attribs.href = root + "gitbook\\gitbook-plugin-syncfusion-ej2\\images\\favicon.ico";
    var tText = $('title').text();
    $('title').text(tText.replace(/API -/g, 'API / '));
    $('.book').prepend('<div class="book-overlay"></div>');
    $('.book-overlay').append($('.book-summary,.book-body'))
    $('.book').prepend(`<div class='ej2-header' style=''>
            <div class='ej2-header-left'>
            <a href="../index.html" title='Essential JavaScript 2 Documentation' style="display:block;"><div class='ej2-head-logo'></div></a>
            </div>
               <div class = 'ej2-header-right'></div>
           </div>`);
    $('.book-header').html('');
    var tLen = curTitle.length;
    $('.book-header').append('<div class="ej2-route-title">' +
        (file.indexOf('_book/index.html') !== -1 ? '' : '<a href="../index.html" class="home-icon"><span class="ej2-home"></span></a>') +
        (tLen ? ' / ' : '') + curTitle + '</div>');
    $('.book-body').prepend($('.book-header'));
    $('.book-header').append('<div class="b-head-right pull-right"></div>');
    var classIndex = ['.navigation-prev', '.navigation-next'];
    var curicon = ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'];
    $('.navigation-prev, .navigation-next').removeClass('navigation');
    for (var i = 0; i < 2; i++) {
        var aele;
        var isDisabled = false;
        var actualEle = $(classIndex[i]);
        if (actualEle.length) {
            $('.b-head-right').append('<div id="temp"></div');
            var tempEle = $('.b-head-right #temp').append(actualEle);
            aele = tempEle.html();
            tempEle.remove();
        } else {
            isDisabled = true;
            aele = curicon[i];
        }
        $('.b-head-right').append('<button class="btn btn-default"' + (isDisabled ? 'disabled= "true"' : '') + '>' + aele + '</button>')
    }

    //  $('.navigation-prev, .navigation-next').removeClass('navigation');
    // $('.b-head-right').append($('.navigation-prev, .navigation-next'));
    $('.body-inner').append(`
    <div id="footer-nav-bar">
    
    </div>
    <footer class="doc-footer">
    <div id="footer-bar">
    <div class="pull-left copyright">
        <div class="copy-text">Copyright © 2001-2017 Syncfusion Inc.</div>
    </div>
    <div class="pull-right">
        <a href="//www.syncfusion.com"target="_blank">
            <div class="f-logo"></div>
        </a>
    </div>
    </div>
    </div>
    </footer>`);
    var newLinkElement = $('.b-head-right a').clone();
    if (newLinkElement.length == 2) {
        var preEle = $(newLinkElement[0]);
        var preText = '<span class="name">' + preEle.attr('aria-label').split(':')[1] + '</span>';
        preEle.html("PREVIOUS" + preText).addClass('left');
        var nextEle = $(newLinkElement[1]);
        var nextText = '<span class="name">' + nextEle.attr('aria-label').split(':')[1] + '</span>';
        nextEle.html("NEXT" + nextText).addClass('right');
    } else {
        var className = $(newLinkElement[0]).hasClass('navigation-next') ? 'right' : 'left';
        var navText = className == 'right' ? 'NEXT' : 'PREVIOUS';
        var curElem = $(newLinkElement[0]);
        var curTextm = '<span class="name">' + $(newLinkElement[0]).attr('aria-label').split(':')[1] + '</span>';
        curElem.html(navText + curTextm).addClass(className);
    }
    $("#footer-nav-bar").append(newLinkElement);
    // get children chapter of summary
    var li = $('.summary > .chapter');
    for (var i = 0; i < li.length; i++) {
        // check the li contains articles
        if (!$(li[i]).children('.articles').length) {
            continue;
        } else {
            // remove articles from li.chapter
            $(li[i]).children('.articles').remove();
            // add data-child attribute
            $(li[i]).attr('data-child', true);
        }
    }
    var apili = $('li:contains("API -")').addClass('hide-api');
    //remove githib preference
    $('li:contains("Published with GitBook")').addClass('hide-api');
    // remove navigation from left and right
    // rewrite html file without subChapters
    fs.writeFileSync(file, $.html());
}

function getCurrentTitle(filePath) {
    var isIndex = false
    var parsedText = filePath.replace(/.html|\.|_book/g, '');
    parsedText = parsedText.split('/');
    var ret = [];
    var len = parsedText.length;
    if (filePath.indexOf('index.html') !== -1) {
        isIndex = true;
        len -= 1;
    }
    for (var i = 0; i < len; i++) {
        var text = parsedText[i]
        if (text.length) {
            if (text === 'base') {
                continue;
            }
            if (text.indexOf('api-') !== -1) {
                ret.push('<a href="./api.html">API&nbsp;</a>');
                text = text.split('api-')[1];
            } else if (text === 'api') {
                text = 'API';
            }
            var ltext = getFullName(text);
            if (i < len - 1 && !isIndex) {
                ltext = '<a href="./">' + ltext + '&nbsp;</a>';
            }
            ret.push(ltext);
        }

    }
    return ret.join('/ ');
}

function getFullName(str) {
    if (mappingNames[str]) {
        return mappingNames[str];
    }
    var temp = str.split('-');
    var ret = '';
    for (var j = 0, len = temp.length; j < len; j++) {
        ret += ' ' + toUpperCase(temp[j]);
    }
    return ret;
}

function toUpperCase(str) {
    return str[0].toUpperCase() + str.substr(1);
}

function renderHeaderAnchor(file) {
    var $ = getDomElements(file);
    var headers = $(':header').not('h1');
    if (!headers.length) {
        $('.page-wrapper').css('width', '100%');
        fs.writeFileSync(file, html.prettyPrint($.html()), { indent_size: 2 });
        return;
    }
    // insert right toc after page wrapper in book body
    $('<div class="ej2-right-toc"><span>Contents</span></div>').insertAfter('.page-wrapper');
    var rightPane = cheerio('<ul></ul>');
    for (var i = 0; i < headers.length; i++) {
        // get current header element
        var header = $(headers[i]);
        // get current header id
        var headerId = header.attr('id');
        if (headerId) {
            header.addClass('ej2-headers');
            var headerValue = header.html();
            // create anchor tag for current header element
            var anchor = '<a href="#' + headerId + '" class="ej2-anchors"><i class="fa fa-link"></i></a>';
            // append the anchor tag to current header element
            $(header).append(anchor);
            // get li for right side pane
            var li = '<li class="ej2-anchor-' + header[0].name + '"><a href="#' + headerId + '">' + headerValue + '</a></li>';
            // append the li to ul of right side pane
            rightPane.append(li);
        }
    }
    $('.ej2-right-toc').append('<ul>' + rightPane.html() + '</ul>');
    // rewrite html file with header anchors
    fs.writeFileSync(file, html.prettyPrint($.html()), { indent_size: 2 });
}

function getSubChapters(file) {
    var $ = getDomElements(file);

    // get children chapter of summary
    var li = $('.summary > .chapter'),
        mdList = [];
    // get ej2data from custom plugin
    var ej2Data = fs.readFileSync('./gitbook-plugin-syncfusion-ej2/book/ej2-data.js', 'utf8');
    ej2Data = ej2Data.replace('window.ej2Chapters = ', '').slice(0, -1);
    // parse ej2Data
    mdList = JSON.parse(ej2Data);
    for (var i = 0; i < li.length; i++) {
        // check the li contains articles
        if (!$(li[i]).children('.articles').length) {
            continue;
        }
        for (var j = 0; j < mdList.length; j++) {
            // check the li data-level with ej2Data level
            if ($(li[i]).data('level') == mdList[j].level) {
                // create a clone of current li.chapter
                var artClone = $(li[i]).children('.articles').clone();
                // get ul element from li.chapter
                var ul = html.prettyPrint($("<div />").append(artClone).html(), { indent_size: 2 });
                // get subChapters from current li.chapter and store it in ej2Data
                var visibleUl = $(ul).find('li:not(:contains("API -"))');
                var hiddenUL = $(ul).find('li:contains("API -")').addClass('hide-api');
                mdList[j]['subChapters'] = '<ul class="articles">' + visibleUl + hiddenUL + '</ul></div>';
                break;
            }
        }
    }
    var data = 'window.ej2Chapters = ' + JSON.stringify(mdList) + ';';
    // rewrite ej2Data with subChapters
    fs.writeFileSync('./_book/gitbook/gitbook-plugin-syncfusion-ej2/ej2-data.js', data)
}

// Get DOM element from html file
function getDomElements(file) {
    // get html string
    var htmlString = fs.readFileSync(file, 'utf8');
    // create DOM using cheerio
    return cheerio.load(htmlString);
}

// Get highlighted html code snippet from markdown string
function renderCodeSnippets(mdContent) {
    var hljsmd = md({
        highlight: function(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (e) {
                    console.log(e);
                }
            }
            return '';
        }
    });
    return hljsmd.render(mdContent).trim();
}

// create sample from templates
function createSample(block) {
    var template = block.kwargs.template;
    var currentTemplate = './templates/' + template;
    var samplePath = './samples/' + template + getSampleId(template);
    // update or create folder for current sample
    if (fs.existsSync(samplePath)) {
        shelljs.rm('-rf', samplePath);
        shelljs.mkdir('-p', samplePath);
    } else {
        shelljs.mkdir('-p', samplePath);
    }
    // get current template settings
    var settings = require('.' + currentTemplate + '/settings.json');
    var codes = getCodeSnippets(block.body);
    var templateFiles = glob.sync(currentTemplate + '/**/*', { silent: true, ignore: currentTemplate + '/settings.json' });
    for (var i = 0; i < templateFiles.length; i++) {
        var fileName = getFileName(templateFiles[i]);
        var file = samplePath + '/' + fileName;
        if (!fs.existsSync(path.dirname(file))) {
            shelljs.mkdir('-p', path.dirname(file));
        }
        if (fileName == '') {
            continue;
        }
        var templateContent = fs.readFileSync(templateFiles[i], 'utf8');
        // Insert or append current code snippet in template file
        if (templateFiles[i] === currentTemplate + '/' + settings.file) {
            if (settings.line > -1) {
                // split the template content based on next line
                var splitted = templateContent.split('\n');
                // Insert the code in the splitted template with line number
                splitted.splice(settings.line, 0, codes);
                // write the inserted code in the file
                fs.writeFileSync(file, splitted.join('\n'));
            } else {
                templateContent = templateContent + codes;
                fs.appendFileSync(file, templateContent);
            }
        } else {
            // move other common template files to samples loction
            fs.writeFileSync(file, templateContent);
        }
    }
    createPlnkrFile(samplePath);
    return samplePath;
}

// Create a plnkr file for each samples
function createPlnkrFile(plnkrPath) {
    var files = glob.sync(plnkrPath + '/**', { silent: true });
    var plnkr = {};
    for (var i = 0; i < files.length; i++) {
        var fileName = getFileName(files[i]);
        if (fileName != '') {
            plnkr[fileName] = fs.readFileSync(files[i], 'utf8');
        }
    }
    fs.writeFileSync(plnkrPath + '/plnkr.json', JSON.stringify(plnkr));
}

// Get code snippet alone from md code blocks
function getCodeSnippets(mdContent) {
    return mdContent.replace(/\r?\n|\r/, '').replace(/```[a-zA-Z]+|```/g, '').trim();
}

// create unique id for each sample location
function getSampleId(currentPath) {
    // check current template path exist in the common object
    if (!sampleIndexes[currentPath]) {
        sampleIndexes[currentPath] = 1
    } else {
        // increase the sample name index
        sampleIndexes[currentPath] = sampleIndexes[currentPath] + 1;
    }
    return csId = '-cs' + sampleIndexes[currentPath];
}

// Get current template fileName
function getFileName(filePath) {
    var fileName = '';
    if (path.basename(path.dirname(filePath)) === 'app') {
        fileName = 'app/';
    }
    if (!fs.lstatSync(filePath).isDirectory()) {
        fileName = fileName + path.basename(filePath);
    }
    return fileName;
}