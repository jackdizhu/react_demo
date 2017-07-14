const webpack = require('webpack')
const path = require('path')

var _path = './public/';

module.exports = {
    entry: {
        index: _path + 'src/index.js',
    },
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].[chunkhash:8].js',
        library: '[name].[chunkhash:8].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'] // 'jsx-loader',
            },
        ],
    },
    // plugins: [new webpack.optimize.UglifyJsPlugin(), new webpack.optimize.ModuleConcatenationPlugin()],
}
