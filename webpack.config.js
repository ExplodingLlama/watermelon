const webpack = require('webpack');

module.exports = {
    entry: "./frontend/index.jsx",
    output: {
        path: __dirname + "/public/build",
        filename: "app.js"
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
}
