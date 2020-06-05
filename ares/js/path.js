export default function setupPath() {
    let path = '';
    let stylesheet = '';

    if (process.env.environment === 'production') {
        path = 'https://static.hotelsforhope.com/ares/site_configs';
        stylesheet = 'https://static.hotelsforhope.com/ares/styles';
    } else if (process.env.environment === 'develop') {
        path = 'https://dev-static.hotelsforhope.com/ares/site_configs';
        stylesheet = 'https://dev-static.hotelsforhope.com/ares/styles';
    } else if (process.env.environment === 'local') {
        path = '../../site_configs';
        stylesheet = '../../styles';
    }

    return {path, stylesheet};
}
