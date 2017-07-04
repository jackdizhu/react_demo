const webpack = require('webpack')
const path = require('path')

var _path = './public/';

module.exports = {
    entry: {
        index: _path + 'src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js',
        library: '[name].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },
    // plugins: [new webpack.optimize.UglifyJsPlugin(), new webpack.optimize.ModuleConcatenationPlugin()],
}
