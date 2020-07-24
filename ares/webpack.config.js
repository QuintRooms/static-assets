const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EntryPoints = require('./js/entry-points');
const SourceMapPath = require('./js/source-map-path');

module.exports = (env) => {
    return {
        entry() {
            return EntryPoints();
        },
        output: {
            filename: 'dist/[name].js',
            path: `${__dirname}`,
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
            ],
        },
        devtool: 'hidden-source-map',
        plugins: [
            new Dotenv(),
            new webpack.SourceMapDevToolPlugin({
                filename: 'dist/[name].map',
                sourceRoot: SourceMapPath(),
            }),
            new MiniCssExtractPlugin({
                // filename: './styles/site-styles/[name].css',
                filename: './site_configs/[name]/[name].css',
            }),
        ],
    };
};
