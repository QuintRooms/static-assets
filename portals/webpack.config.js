const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");

module.exports = {
    entry: {
        51108: './src/51108.js',
        52317: './src/52317.js',        
        52318: './src/52318.js',        
        52342: './src/52342.js',
        51441: './src/51441.js',
        52407: './src/52407.js',
        51438: './src/51438.js',
        51821: './src/51821.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            { test: /\.(js)$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader', options: {insertInto: '#h4h-styles'} }, { loader: 'css-loader' }],
            },
        ]
    },
    plugins: [
        new OptimizeCSSAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: { preset: ['default', { discardComments: { removeAll: true } }], },
            canPrint: false,
        }),
    ]
};