var path = require('path');
var nodeExternals = require('webpack-node-externals');
var NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {

    mode: "development",
    target: "node",
    entry: {
        app: './app'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
                {
                    test: /\.js$/,
                    exclude: /node_module/,
                    loader: "babel-loader",
                }
            ],
      },

    externals: [nodeExternals()],
    plugins: [
        new NodemonPlugin(), // Dong
    ],

};