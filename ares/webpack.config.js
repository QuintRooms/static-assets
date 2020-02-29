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
    devtool: 'source-map',
    plugins: []
};