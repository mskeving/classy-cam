var webpack = require('webpack');

module.exports = {
    entry: {
        app: "./app.js",
    },
    devtool: 'source-map',
    output: {
        path: __dirname,
        publicPath: "http://localhost:8080/assets/",
        filename: "build/[name].bundle.js"
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }]
    }
};
