module.exports = () => {
    let path = '';

    if (process.env.NODE_ENV === 'production') {
        path = 'https://static.hotelsforhope.com/ares';
    } else if (process.env.NODE_ENV === 'develop') {
        path = 'https://dev-static.hotelsforhope.com/ares';
    } else if (process.env.NODE_ENV === 'local') {
        path = '../..';
    }

    return {path};
};
