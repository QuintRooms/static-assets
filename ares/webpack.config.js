const webpack = require('webpack');

module.exports = {
    entry: {
        'local_portal-11111': './src/11111.js', // local portal
        'cug_template-39624': './src/39624.js', // CUG Template
        'shaky_knees_21-49553': './src/49553.js', // Shaky Knees
        'room_steals-52342': './src/52342.js', // Room Steals
        'tortuga_20-53474': './src/53474.js', // Tortuga
        'housing_template-60265': './src/60265.js', // Housing Template
        'voodoo_21-60792': './src/60792.js', // Voodoo
        'ares_child-60279': './src/60279.js', // Ares Child Test
        'lolla_21-60828': './src/60828.js', // lollapalooza 2021
        'lolla_20-52975': './src/52975.js', // lollapalooza 2020
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
    devtool: 'hidden-source-map',
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map',
            append: '\n//# sourceMappingURL=https://dev-static.hotelsforhope.com/ares/dist/[url]',
        }),
    ],
};
