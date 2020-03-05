const webpack = require('webpack');

module.exports = {
    entry: {
        39624: './src/39624.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map',
            append: '\n//# sourceMappingURL=https://dev-static.hotelsforhope.com/ares/dist/' + '[url]'
        })
    ]
};