require('webpack');

module.exports = {
    entry: {
        11111: './src/11111.js', // local portal
        39624: './src/39624.js', // CUG Template
        60265: './src/60265.js', //  Housing Template
        60792: './src/60792.js', // Voodoo
        53474: './src/53474.js', // Tortuga
        49553: './src/49553.js', // Shaky Knees
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    // devtool: 'hidden-source-map',
    // plugins: [
    //     new webpack.SourceMapDevToolPlugin({
    //         filename: '[name].map',
    //         append: '\n//# sourceMappingURL=https://dev-static.hotelsforhope.com/ares/dist/[url]'
    //     })
    // ]
};
