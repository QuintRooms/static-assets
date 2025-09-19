const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EntryPoints = require('./js/build_tools/entry-points');
const build_emails = require('./js/build_tools/build-emails');

module.exports = () => {
    return {
        entry() {
            const sites = EntryPoints();
            if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'develop') {
                for (const site in sites) {
                    if (site !== 'f1_landing_page') {
                        build_emails(site);
                    }
                }
            }
            return sites;
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
                    test: /\.s[ac]ss$/i, // allow .scss and .sass
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
                                implementation: require('sass'), // <- force Dart Sass
                                sourceMap: false,
                                additionalData: `$env: ${process.env.NODE_ENV};\n $domain: '${process.env.domain}';`,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    use: [{ loader: 'url-loader' }],
                },
            ],
        },
        devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            new Dotenv(),
            new MiniCssExtractPlugin({
                moduleFilename: ({ name }) => `./site_configs/[name]/styles/${name.slice(-6)}.css`,
            }),
        ],
    };
};
