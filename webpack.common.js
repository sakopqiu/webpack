const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            "babel-polyfill",
            './src/index.js',
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
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
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};