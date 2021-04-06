const {domain} = process.env;

export default () => {
    let path = '';

    if (process.env.NODE_ENV === 'production') {
        path = `https://static.${domain}/ares`;
    } else if (process.env.NODE_ENV === 'develop') {
        path = `https://dev-static.${domain}/ares`;
    } else if (process.env.NODE_ENV === 'local') {
        path = '../..';
    }
    return {path};
};
