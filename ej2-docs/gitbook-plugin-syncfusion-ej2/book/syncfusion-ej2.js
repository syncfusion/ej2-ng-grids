require(['gitbook', 'jQuery'], function(gitbook, $) {

    // Common variables
    var CHAPTER = 'li.chapter';
    var TOGGLE = 'ej2-expanded';
    var LS_NAMESPACE = 'ej2ExpandedChapters'
    var scrollTop = 0;
    var toScroll = false;
    window.plnkrRequests = {};

    // Page Init
    var init = function() {
        // get li.chapters with data-child attr and bind click event
        $(CHAPTER + '[data-child="true"]')
            .on('click', function(e) {
                scrollTop = $('nav')[0].scrollTop;
                toScroll = true;
                // get current li.chapter
                var li = $(e.target).closest('li');
                // check and prevent if it has toggle class
                if (li.hasClass(TOGGLE)) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                // expand or collapse li.chapter
                toggle($(e.target).closest(CHAPTER));
            });
        // remove empty space after code buttons
        $('.ej2-code-buttons').next('p').remove();
        // handle code container tab click event
        $('.ej2-li').on('click', function(e) {
            createSample(e);
        });
        // handle source tab files
        $('.ej2-source-li').on('click', function(e) {
            switchSource(e);
        });
        // handle click event on headers
        $('.ej2-headers, .ej2-headers i.fa-link,.ej2-right-toc a').on('click', function(e) {
            var href = $(e.target).closest('a').attr('href');
            if (href && href.indexOf('#') !== -1) {
                setActiveHeader(e);
                return false;
            }

        });
        // handle scroll event on content body
        $('.body-inner').scroll(function() {

            var offTop = $(this).offset().top;
            // get all visible header
            var headers = $(':header:visible').not('h1');
            for (var i = 0; i < headers.length; i++) {
                if (offTop < ($(headers[i]).offset().top + $(headers[i]).height())) {
                    var rightToc = $('.ej2-right-toc')[0];
                    $('.ej2-right-toc .active').removeClass('active');
                    var curEle = $(rightToc).find('li:eq(' + i + ')');
                    var offHeight = rightToc.offsetHeight;
                    var rscrollTop = rightToc.scrollTop;
                    var eOfftTop = curEle[0].offsetTop;
                    if (offHeight < rightToc.scrollHeight &&
                        ((eOfftTop - rscrollTop > (offHeight - 20)) || (eOfftTop < rscrollTop))) {
                        rightToc.scrollTop = eOfftTop;
                    }
                    curEle.addClass('active');
                    $('.ej2-right-toc .selected').removeClass('selected');
                    if (!curEle.hasClass('ej2-anchor-h2')) {
                        curEle.prevAll('.ej2-anchor-h2').first().addClass('selected');
                    }
                    break;
                }
            }
            if (window.matchMedia("(max-width: 464px)").matches) {
                if ($('.body-inner')[0].scrollTop > 60) {
                    $('.book-overlay')[0].style.top = '0px';
                } else {
                    $('.book-overlay')[0].style.top = '65px';
                }
            }
        });
        // handle window resize event
        $(window).resize(function() {
            if ($(this).width() < 768) {
                $('.book').removeClass('with-summary');
            } else {
                $('.book').addClass('with-summary');
            }
        });
        // get all plunker li elements
        var plnkrs = $('.ej2-plnkr.ej2-disabled');
        for (var i = 0; i < plnkrs.length; i++) {
            // get plnkr path from anchor element
            var plnkrPath = $(plnkrs[i]).find('a').data('path');
            // get plnkr id from data-path
            var plnkrId = getPlnkrId(plnkrPath);
            // get required plnkr file contents      
            getPlnkrFiles(plnkrId, plnkrPath, plnkrs[i]);
        }
        if ($('.default-active')[0]) {
            var cont = $('.default-active').closest('.ej2-code-container');
            cont.find('a')[1].click();
        }
    }

    // Get all plunker files for each samples
    var getPlnkrFiles = function(plnkrId, plnkrPath, element) {
        // create object for plunker files
        if (!plnkrRequests[plnkrId]) {
            plnkrRequests[plnkrId] = {};
        }
        // get plunker file contents
        $.get(plnkrPath + '/plnkr.json', function(content, result) {
            if (result == 'success') {
                plnkrRequests[plnkrId] = JSON.parse(content);
            }
            // enable plnkr button in code snippets
            $(element).removeClass('ej2-disabled');
        }, 'text');
    }

    // Get sample's plunker id
    var getPlnkrId = function(plnkrPath) {
        var parsedPath = plnkrPath.split('/');
        return parsedPath[parsedPath.length - 1];
    }

    // Toggle exand or collapse
    var toggle = function(chapter) {
        if (chapter.hasClass(TOGGLE)) {
            collapse(chapter);
        } else {
            expand(chapter);
        }
    }

    // Expand li.chapter
    var expand = function(chapter) {
        if ($(chapter).data('child') === true) {
            chapter.addClass(TOGGLE);
        }
    }

    // Collapse li.chapter
    var collapse = function(chapter) {
        chapter.removeClass(TOGGLE);
    }

    // Render subChapters while expanding li.chapter
    var renderChapters = function(level) {
        // get current chapter data
        var chapterData = getChapterData(level);
        // get main li.chapter
        var mainChapter = $('li.chapter[data-level="' + level + '"]');
        // append subChapters in main chapter
        mainChapter.append(chapterData.subChapters);
        // expand main chapter
        expand(mainChapter);
    }

    // Get chapters data
    var getChapterData = function(level) {
        // get chapters data from ej2.data.js
        var chapters = window.ej2Chapters;
        for (var i = 0; i < chapters.length; i++) {
            if (level == chapters[i].level) {
                return chapters[i];
            }
        }
    }

    // Get main chapter DOM element
    var getMainChapter = function(level) {
        var currentChapter = $(CHAPTER + '[data-level="' + level + '"]');
        if (!currentChapter.length) {
            var level = parseFloat(level);
            return $(CHAPTER + '[data-level="' + level + '"]');
        }
        return currentChapter;
    }

    var createSample = function(e) {
        if ($(e.target).closest('.ej2-plnkr').length) {
            createPlnkr(e);
            return;
        }
        // remove all iframe from current page
        $('.ej2-sample-frame').remove();
        // update all code container with default view
        $('.ej2-preview').removeClass('active');
        $('.preview').css('display', 'none');
        $('.ej2-source').addClass('active');
        $('.source').css('display', 'block');
        // get current code container
        var container = $(e.target).closest('.ej2-code-container');
        // update current li as active in container
        container.find('li.ej2-li.active').removeClass('active');
        $(e.target).closest('.ej2-li').addClass('active');
        // show source code while selecting source tab
        if ($(e.target).closest('.ej2-li').hasClass('ej2-source')) {
            container.find('.source').css('display', 'block');
            container.find('.preview').css('display', 'none');
        } else {
            container.find('.preview').css('display', 'block');
            container.find('.source').css('display', 'none');
            // create iframe for current source
            var frameSrc = $(e.target).data('sample');
            var iframe = '<iframe class="ej2-sample-frame" src="' + frameSrc + '"></iframe>';
            // append iframe in preview tab
            container.find('.preview').append(iframe);
        }
    }

    // switch source files on tab
    var switchSource = function(e) {
        // get current source tab element
        var sourceTab = $(e.target).closest('.ej2-source-tab');
        // remove active class from previous active element
        $(sourceTab).find('.ej2-source-li.active').removeClass('active');
        // hide all the source files
        $(sourceTab).find('.ej2-source-content').addClass('ej2-hidden');
        // get and set active class to current li
        var li = $(e.target).closest('li.ej2-source-li').addClass('active');
        // get file id from current li
        var fileId = $(li).attr('for');
        // show current file source content
        $(sourceTab).find('.' + fileId).removeClass('ej2-hidden');
    }

    // setting active header in the current page
    var setActiveHeader = function(e) {
        var header = $(e.target).closest('.ej2-headers'),
            href;
        // get href value from current header
        if (header.length) {
            href = $(header).find('a.ej2-anchors').attr('href');
        } else {
            href = $(e.target).attr('href');
        }
        if (!href) {
            return;
        }
        // animate the content body and set href
        $('.book-body, .body-inner').animate({
            scrollTop: $(href).length && $(href).position().top + 50
        }, 500, function() {
            window.location.href = window.location.origin + window.location.pathname + href;
        });
    }

    // Open the sample in plnkr.co
    var createPlnkr = function(e) {
        // create a form element with plnkr actions
        var form = $('<form/>', { action: 'http://plnkr.co/edit/?p=preview', method: 'post', target: '_blank' })
            .css('display', 'none').appendTo(document.body);
        // get current sample's plnkr id
        var plnkrId = getPlnkrId($(e.target).data('path'));
        var plnkrFiles = Object.keys(plnkrRequests[plnkrId]);
        // set html file as root in plnkr
        $('<input type=hidden />').attr('name', 'files[index.html]').val(plnkrRequests[plnkrId]['index.html']).appendTo(form);
        // add all plnkr files in the form
        for (var i = 0; i < plnkrFiles.length; i++) {
            var fileName = plnkrFiles[i];
            if (fileName !== 'index.html') {
                $('<input type=hidden />').attr('name', 'files[' + fileName + ']').val(plnkrRequests[plnkrId][fileName]).appendTo(form);
            }
        }
        // submit the plnkr form
        form[0].submit();
        form.remove();
    }

    // Gitbook page change event
    gitbook.events.bind('page.change', function() {
        init();
        var level = gitbook.state.level;
        // get main chapter
        var mainChapter = getMainChapter(level);
        // render subChapters if current chapter has child
        if ($(mainChapter).data('child') === true) {
            renderChapters($(mainChapter).data('level'));
        }
        // add active class to current li.chapter
        var curEle = $(CHAPTER + '[data-level="' + level + '"]');
        if (curEle.hasClass('hide-api')) {
            if ($(mainChapter).hasClass('hide-api')) {
                $(mainChapter).parent().find('li:contains("API")').addClass('active')
            } else {
                $(mainChapter).find('a:contains("API")').parent('li').addClass('active');
            }

        } else {
            curEle.addClass('active');
        }

        if (toScroll) {
            $('nav')[0].scrollTop = scrollTop;
            toScroll = false;
        }
    });
});