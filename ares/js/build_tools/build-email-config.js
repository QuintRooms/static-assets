const fs = require('fs');

const ares = `${process.cwd()}`;
let site_id;
let site_name;

function createConfig(siteObj) {
    const data = JSON.stringify(siteObj);
    fs.writeFileSync(`${ares}/email_configs/${site_id}.json`, data);
}

function extractValue(string, startChar, endChar) {
    const value = string.substring(string.indexOf(startChar), string.indexOf(endChar, string.indexOf(startChar)) + 1);
    return value.slice(value.indexOf(':') + 2, value.indexOf(endChar));
}

function buildSiteObject(siteConfig, siteStyles) {
    const site_details = {
        site_id: `${site_id}`,
        primary_color: extractValue(siteStyles, '$primary_color:', ';'),
        secondary_color: extractValue(siteStyles, '$secondary_color:', ';'),
        client_name: extractValue(siteConfig, 'event_name:', ',').slice(1, -1),
        site_url: extractValue(siteConfig, 'logo_outbound_url:', ',').slice(1, -1),
        logo: `https://dev-static.hotelsforhope.com/ares/site_configs/${site_name}/img/logo.png`,
        banner: `https://dev-static.hotelsforhope.com/ares/site_configs/${site_name}/img/banner.png`,
    };
    createConfig(site_details);
}

function defineVars(site) {
    site_id = site.slice(-5);
    site_name = site;
    const site_config = fs.readFileSync(`${ares}/site_configs/${site_name}/js/${site_id}-config.js`, 'utf8');
    const site_styles = fs.readFileSync(`${ares}/site_configs/${site_name}/styles/${site_id}.scss`, 'utf8');
    buildSiteObject(site_config, site_styles);
}

module.exports = defineVars;
