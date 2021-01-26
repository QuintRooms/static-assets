/* eslint-disable no-console */
const fs = require('fs');
const handlebars = require('handlebars');
const mjml2html = require('mjml');
// eslint-disable-next-line import/no-extraneous-dependencies
const fsx = require('fs-extra');

const ares = `${process.cwd()}`;
let site_id;
let site_name;

async function buildEmail(context) {
    const conf_template = fs.readFileSync(`${ares}/emails/templates_mjml/confirmation.mjml`, 'utf8');
    const template = handlebars.compile(conf_template);
    const mjml = template(context);
    const {html} = mjml2html(mjml);

    fsx.outputFile(`${ares}/site_configs/${site_name}/emails/confirmation/confirmation.html`, html.toString(), {encoding: 'utf8'}, (err) => {
        if (err) {
            return console.log(err);
        }
    });
}

function createConfig(siteObj) {
    const data = JSON.stringify(siteObj);
    // fs.writeFileSync(`${ares}/site_configs/${site_name}/emails/email_config/${site_id}.json`, data);
    fsx.outputFile(`${ares}/site_configs/${site_name}/emails/email_config/${site_id}.json`, data);
    if (siteObj.has_default_conf_email) {
        buildEmail(siteObj);
    }
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
        has_default_conf_email: extractValue(siteConfig, 'has_default_conf_email:', ',') === 'true',
        // TODO make below image urls dynamic.
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
