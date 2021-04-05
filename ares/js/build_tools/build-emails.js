/* eslint-disable no-console */
const fs = require('fs');
const handlebars = require('handlebars');
const mjml2html = require('mjml');
// eslint-disable-next-line import/no-extraneous-dependencies
const fsx = require('fs-extra');

const ares = `${process.cwd()}`;
let site_id;
let site_name;

/**
 *@description Checks if name of the site being built has already been added to site-names.json
 *@returns Boolean
 */
function siteNameExists() {
    const site_names = fs.readFileSync(`${ares}/js/json/site-names.json`, 'utf8');
    if (site_names.includes(`"${site_id}": "${site_name}"`)) return true;
}

/**
 *@description Adds the site id and site name as a key/value to site-names.json
 */
function addEmailSiteName() {
    if (siteNameExists()) return;
    try {
        const data = fs.readFileSync(`${ares}/js/json/site-names.json`, 'utf8');

        const trimmed_data = data.trim();
        const site_names = trimmed_data.substring(1, trimmed_data.length - 2);
        const site_names_updated = `{${site_names},\n    "${site_id}": "${site_name}"\n}`;

        fs.writeFileSync(`${ares}/js/json/site-names.json`, site_names_updated);

        console.log(`\n"${site_id}": "${site_name}" added to site-names.json\n`);
    } catch (error) {
        console.log(`Cannot add "${site_name}" to site-names.json. \nerror: `, error);
    }
}
/**
 *@description creates a confirmation.html file for each site inside an /emails directory within that site's directory that uses site specific colors and logos.
 *@param Object - "Context" - site specific object containing logo, primary color, secondary color, text color, theme and has_custom_email boolean.
 *@param String - "inputPath" - path of the mjml file to build from (custom email or default confirmation email)
 *@param String - "fileName" - file name of email (confirmation, welcome, cancellation etc)
 */
async function buildEmail(context, inputPath, fileName) {
    addEmailSiteName();
    const conf_template = fs.readFileSync(`${ares}/${inputPath}`, 'utf8');
    const {html} = mjml2html(conf_template);
    const template = handlebars.compile(html.toString());
    const data = template(context);
    fsx.outputFile(`${ares}/site_configs/${site_name}/emails/${fileName}.html`, data, (err) => {
        if (err) {
            return console.log(err);
        }
    });
}

/**
 *@description creates a JSON file within a site's /emails directory based off of the site config object and calls the buildEmail function with args based off if the site has a custom email or default confirmation email
 *@param object - site specifc config object
 */
function createFiles(siteObj) {
    const data = JSON.stringify(siteObj);
    fsx.outputFile(`${ares}/site_configs/${site_name}/emails/${site_id}.json`, data);
    if (siteObj.has_custom_emails) {
        const email_dir = fs.readdirSync(`${ares}/site_configs/${site_name}/emails`);
        email_dir.forEach((file) => {
            if (file.includes('.mjml')) {
                buildEmail(siteObj, `/site_configs/${site_name}/emails/${file}`, file.substring(0, file.length - 5));
            }
        });
        if (!email_dir.toString().includes('.mjml')) {
            console.log(
                "\u001b[1;33m\n------------------------------------------------------------------------------------------------------------------\n\nNo custom emails exists, please build the custom email template you wish to compile at the following location:\n\n  site_configs\n         |\n         |- /emails\n               |\n               |- /confirmation\n                     |\n                     |- confirmation.html\n\nOr change the site's config 'has_custom_emails' to false to use the default room booking confirmation email.\n\n------------------------------------------------------------------------------------------------------------------"
            );
        }
    } else {
        buildEmail(siteObj, 'emails/default_templates_mjml/confirmation.mjml', 'confirmation');
    }
}

/**
 *@description will extract a portion of a string. A helper function to grab config values from the site config js or scss config
 *@param String - The string that the desired value is located in
 *@param String - Starting character to slice from
 *@param String - Ending character to slice to
 *@return String
 */
function extractValue(string, startChar, endChar) {
    const value = string.substring(string.indexOf(startChar), string.indexOf(endChar, string.indexOf(startChar)) + 1);
    return value.slice(value.indexOf(':') + 2, value.indexOf(endChar));
}

/**
 *@description Creates an object with site specific values from a site config js file and site styles scss file. These values are commonly needed in emails (brand colors, logos, background/hero images, text color, theme, site url for outbound href for logos etc )
 *@param String - site config javascript file
 *@param String - site styles scss file
 */
function buildSiteObject(siteConfig, siteStyles) {
    let logo;
    if (siteConfig.includes('email_logo_file_location')) {
        logo = extractValue(siteConfig, 'email_logo_file_location:', ',').split('img/');
        console.log('LOGO: ', logo);
    } else {
        logo = extractValue(siteConfig, 'logo_file_location:', ',').split('img/');
    }

    try {
        logo = logo[1].replace(`\``, '');
    } catch (e) {
        console.log('\x1b[41m%s\x1b[0m', `/img/logo.png does not exist. Add a logo to ${site_name}-${site_id}. Error: ${e}`);
        return;
    }

    const theme_color = extractValue(siteConfig, 'theme:', ',').slice(1, -1) === 'light' ? '#fff' : '#000';

    const site_details = {
        site_id: `${site_id}`,
        primary_color: extractValue(siteStyles, '$primary_color:', ';'),
        secondary_color: extractValue(siteStyles, '$secondary_color:', ';'),
        client_name: extractValue(siteConfig, 'event_name:', ',').slice(1, -1),
        site_url: extractValue(siteConfig, 'logo_outbound_url:', ',').slice(1, -1),
        has_custom_emails: extractValue(siteConfig, 'has_custom_emails:', ',') === 'true',
        logo: `https://dev-static.hotelsforhope.com/ares/site_configs/${site_name}/img/${logo}`,
        theme: theme_color,
        text: theme_color === '#fff' ? '#666' : '#F5FFFA',
    };

    // if site is RoomCash, base64 encode the portal url
    if (site_details.site_id === '63713' || site_details.site_id === '63712') {
        const encoded_portal_link_param = Buffer.from('https://hotels.roomcash.com/v6?&siteid=63712&type=property').toString('base64');
        site_details.portal_url = `${extractValue(siteConfig, 'email_portal_link:', ',').slice(1, -1)}${encoded_portal_link_param}`;
    }
    createFiles(site_details);
}

/**
 *@description Creates global string variables of the site config js file and the site styles scss file
 *@param String - the name of the site currently being built by Webpack. Has the format 'site_name-site_id'
 */
function defineVars(site) {
    site_id = site.slice(-5);
    site_name = site;
    const site_config = fs.readFileSync(`${ares}/site_configs/${site_name}/js/${site_id}-config.js`, 'utf8');
    const site_styles = fs.readFileSync(`${ares}/site_configs/${site_name}/styles/${site_id}.scss`, 'utf8');
    buildSiteObject(site_config, site_styles);
}

module.exports = defineVars;
