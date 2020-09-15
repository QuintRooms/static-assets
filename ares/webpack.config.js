const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EntryPoints = require('./js/entry-points');
// const Path = require('./js/path');
// const SourceMapPath = require('./js/source-map-path');

module.exports = () => {
    return {
        entry() {
            return EntryPoints();
        },
        output: {
            filename: 'dist/[name].js',
            path: `${__dirname}`,
        },
        optimization: {
            nodeEnv: false,
            minimize: true,
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
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false,
                                additionalData: `$env: ${process.env.NODE_ENV};`,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    use: [{loader: 'url-loader'}],
                },
            ],
        },
        devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            new Dotenv(),
            // new webpack.SourceMapDevToolPlugin({
            //     filename: 'dist/[name].map',
            //     sourceRoot: SourceMapPath(),
            // }),
            new MiniCssExtractPlugin({
                moduleFilename: ({name}) => `./site_configs/[name]/styles/${name.slice(-5)}.css`,
            }),
        ],
    };
};
