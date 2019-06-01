module.exports = {
    entry: {
        51108: './src/51108.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    devtool: 'sourc-emap',
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};