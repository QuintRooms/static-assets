export default function getSiteConfig() {
    // const directory = document.querySelector('meta[name="directory_name"]').getAttribute('content');
    // const site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');

    const config_details_meta = document.querySelector('meta[name="config_details"]');

    if (!config_details_meta) return;

    const site_id = config_details_meta.getAttribute('site_id');
    const path = config_details_meta.getAttribute('path');

    return {
        site_id,
        path,
    };
}
