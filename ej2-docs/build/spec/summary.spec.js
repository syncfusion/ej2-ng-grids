'use strict';

var fs = require('fs');
var shelljs = require('shelljs');
var summary = require('../summary.js');

describe('summary - ', function () {
    describe('createRootSummary method - ', function () {
        var summaryPath = './temp/summary.md';
        shelljs.mkdir('-p', './temp');
        it('testing empty controls', function () {
            summary.createRootSummary('./temp/', []);
            expect(fs.existsSync(summaryPath)).toEqual(true);
            var expected = '# Summary\n' + summary.getTopSummary() + summary.getBottomSummary();
            expect(fs.readFileSync(summaryPath, 'utf8')).toEqual(expected);
        });

        it('testing some controls', function () {
            shelljs.mkdir('-p', './temp/base');
            shelljs.mkdir('-p', './temp/list-view');
            fs.writeFileSync('./temp/base/summary.md', '* [Base Test](base/test.md)');
            fs.writeFileSync('./temp/list-view/summary.md', '* [List Test](list-view/test.md)');
            var controls = [
                './temp/base/summary.md',
                './temp/list-view/summary.md',
            ]
            summary.createRootSummary('./temp/', controls);
            expect(fs.existsSync(summaryPath)).toEqual(true);
            var expected = '# Summary\n' + summary.getTopSummary() +
                '\n* [Base](base/index.md)' +
                '\n    * [Base Test](base/test.md)\n\n----\n' +
                '\n* [ListView](list-view/index.md)' +
                '\n    * [List Test](list-view/test.md)\n\n----\n' +
                summary.getBottomSummary();
            expect(fs.readFileSync(summaryPath, 'utf8')).toEqual(expected);
            shelljs.rm('-rf', './temp');
        });
    });

    describe('getControlSummary method - ', function () {
        it('testing control summary', function () {
            shelljs.mkdir('-p', './temp/base');
            var subChapters = '* [Chapter1](base/chapter1)\n* [Chapter1](base/chapter2)';
            var actual = summary.getControlSummary('./temp/base/summary.md', subChapters);
            var expected = '\n* [Base](base/index.md)\n' +
                '    * [Chapter1](base/chapter1)\n' +
                '    * [Chapter1](base/chapter2)\n\n----\n';
            expect(actual).toEqual(expected);
            shelljs.rm('-rf', './temp');
        });
    });

    describe('getControlName method - ', function () {
        it('testing empty name', function () {
            expect(summary.getControlName('')).toEqual('');
        });

        it('testing simple name', function () {
            expect(summary.getControlName('base')).toEqual('Base');
        });

        it('testing single hyphon name', function () {
            expect(summary.getControlName('list-view')).toEqual('ListView');
        });

        it('testing complex name', function () {
            expect(summary.getControlName('list-view-test')).toEqual('ListViewTest');
        });
    });
});