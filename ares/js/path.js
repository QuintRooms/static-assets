module.exports = () => {
    let path = '';

    if (process.env.environment === 'production') {
        path = 'https://static.hotelsforhope.com/ares';
    } else if (process.env.environment === 'develop') {
        path = 'https://dev-static.hotelsforhope.com/ares';
    } else if (process.env.environment === 'local') {
        path = '../..';
    }

    return {path};
};
