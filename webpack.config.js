"use strict";

var webpack = require('webpack');

var webpackConf = {
    cache: true,
    entry:
    {
        main: './build/main.js'
    },
    output: {
        path: './assets/dist/',
        filename: '[name].js',
        chunkFilename: "[id].[chunkhash].bundle.js",
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
        ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'app'
        ],
        extensions: ["", ".js"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('main', 'common.js'),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production') {
    webpackConf.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: "false"
        })
    );
}

module.exports = webpackConf;

//new webpack.optimize.UglifyJsPlugin(),