require('dotenv').config({path: '.env'});

module.exports = () => {
    let source_map_path = '';

    // production environment
    if (process.env.environment === 'production') {
        source_map_path = 'https://static.hotelsforhope.com/ares/dist';

        // develop environment
    } else if (process.env.environment === 'develop') {
        source_map_path = 'https://dev-static.hotelsforhope.com/ares/dist';

        // local environment
    } else if (process.env.environment === 'local') {
        source_map_path = './dist';
    }
    return source_map_path;
};
