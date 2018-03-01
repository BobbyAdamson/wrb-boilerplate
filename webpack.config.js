const webpack = require('webpack');
const path = require('path');

const config = {
    entry: path.resolve('src/index.js'),

    devtool: "source-map",

    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader'
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    }
}

module.exports = config;