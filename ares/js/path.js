export default function setupPath() {
    let path = '';

    if (process.env.environment === 'production') {
        path = 'https://static.hotelsforhope.com/ares/site_configs';
    } else if (process.env.environment === 'development') {
        path = 'https://dev-static.hotelsforhope.com/ares/site_configs';
    } else if (process.env.environment === 'local') {
        path = '../../site_configs';
    }
    
    return {path};
}