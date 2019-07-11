const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");

module.exports = {
    entry: {
        48729: './src/48729.js',
        51108: './src/51108.js',
        52317: './src/52317.js',        
        52318: './src/52318.js',        
        52342: './src/52342.js',
        51441: './src/51441.js',
        51442: './src/51442.js',
        52407: './src/52407.js',
        51438: './src/51438.js',
        51821: './src/51821.js',
        51824: './src/51824.js',
        51440: './src/51440.js',
        52780: './src/52780.js',
        52783: './src/52783.js',       
        52866: './src/52866.js',
        52867: './src/52867.js',    
        52863: './src/52863.js',      
        52870: './src/52870.js'
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