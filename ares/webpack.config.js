const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const EntryPoints = require('./js/entry-points');
const SourceMapPath = require('./js/source-map-path');

module.exports = (env) => {
    return {
        entry() {
            return EntryPoints();
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
            new Dotenv(),
            new webpack.SourceMapDevToolPlugin({
                filename: '[name].map',
                sourceRoot: SourceMapPath(),
            }),
        ],
    };
};
