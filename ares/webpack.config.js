const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

let source_map_path = '';

if (process.env.environment === 'production') {
    source_map_path = 'https://static.hotelsforhope.com/ares/dist';
} else if (process.env.environment === 'development') {
    source_map_path = 'https://dev-static.hotelsforhope.com/ares/dist';
} else if (process.env.environment === 'local') {
    source_map_path = './dist';
}

module.exports = (env) => {
    return {
        entry: {
            'local_portal-11111': './src/11111.js', // local portal
            'cug_template-39624': './src/39624.js', // CUG Template
            'shaky_knees_20-60303': './src/60303.js', // Shaky Knees
            'room_steals-52342': './src/52342.js', // Room Steals
            'tortuga_20-60336': './src/60336.js', // Tortuga
            'housing_template-60265': './src/60265.js', // Housing Template
            'voodoo_21-60792': './src/60792.js', // Voodoo
            'ares_child-60279': './src/60279.js', // Ares Child Test
            'ares_child-60278': './src/60278.js', // Ares Child Test
            'lolla_21-60828': './src/60828.js', // lollapalooza 2021
            'lolla_20-52975': './src/52975.js', // lollapalooza 2020
            'acl_20-53336': './src/53336.js', // acl 2020
            'bj_las_vegas_20-60089': './src/60089.js', // BJ Las Vegas 2020
            'bj_west_palm_beach_20-60292': './src/60292.js', // BJ W Palm Beach 2020
            'bj_northeast_20-60086': './src/60086.js', // BJ Northeast 2020
            'bj_scottsdale_21-58513': './src/58513.js', // BJ scottsdale 2021
            'hof_marathon_21-60871': './src/60871.js', // HOF Marathon 2021
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
                sourceRoot: `${source_map_path}`,
            }),
        ],
    };
};
