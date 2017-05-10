var packageJSON = require('./package.json');
var moduleName = packageJSON.name.split('/')[1];
var externals = Object.keys(packageJSON.dependencies);
var uglify = require('rollup-plugin-uglify');

export default {
    entry: 'src/index.js',
    format: 'umd',
    dest: 'dist/' + moduleName + '.umd.min.js',
    context: 'window',
    external: externals,
    plugins: [uglify()],
    onwarn: function(message) { },
    moduleName: moduleName
};