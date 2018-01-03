const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            "babel-polyfill",
            './src/index.js',
        ],
        vendor: ["lodash"]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};