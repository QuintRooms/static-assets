/* eslint-disable no-console */
const readline = require('readline');
// eslint-disable-next-line import/no-extraneous-dependencies
const fsx = require('fs-extra');
const fs = require('fs');

let site_name;
let site_id;
let resbeat_client;

function waitForFile(filePath) {
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            const file = fs.existsSync(filePath);
            if (file) {
                resolve(file);
                clearInterval(interval);
                return file;
            }
        }, 50);
    });
}

// TODO write function to add new line to 'local' object in EntryPoins.js with new site id and name
// function addToEntryPoints(){

// }

async function editScss() {
    // TODO if Resbeat site, import resbeat.config.scss
    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;

    await waitForFile(`${directory_path}/styles/${site_id}.scss`);
    fs.readFile(`${directory_path}/styles/${site_id}.scss`, 'utf8', (err, data) => {
        if (err) throw err;
        const scss_var = data.replace(/template-11111/g, `${site_name}-${site_id}`);
        fs.writeFile(`${directory_path}/styles/${site_id}.scss`, scss_var, (er) => {
            if (er) throw er;
            console.log('\n - Scss file updated with new site ID');
        });
    });
}

function editConfigForResbeat(data, path) {
    let config_data = data;
    const resbeat_data = [
        {
            old: "affiliate_id: ''",
            new: 'affiliate_id: 16827',
        },
        {
            old: 'master_id: 920',
            new: 'master_id: 2143',
        },
        {
            old: "site_type: 'lodging'",
            new: "site_type: 'cug'",
        },
        {
            old: 'plCZXR0GZ7J1',
            new: 'pl58QCMXHS4C',
        },
        {
            old: 'b9763a419845b59957b8cc5c9b13440c',
            new: '1514caaca583b1ed25dad3b0c6addf0a',
        },
        {
            old: 'is_cug: false',
            new: 'is_cug: true',
        },
        {
            old: "percent_off_text: 'off'",
            new: `percent_off_text: "BEAT 'EM BY"`,
        },
        {
            old: 'show_percent_savings: false',
            new: 'show_percent_savings: true',
        },
        {
            old: "exclusive_rate_text: 'Exclusive Rate'",
            new: "exclusive_rate_text: ''",
        },
        {
            old: "host_hotel_text: 'Host Hotel'",
            new: "host_hotel_text: ''",
        },
        {
            old: "partner_hotel_text: 'Partner Hotel'",
            new: "partner_hotel_text: ''",
        },
        {
            old: 'show_stars: false',
            new: 'show_stars: true',
        },
        {
            old: 'show_property_type: false',
            new: 'show_property_type: true',
        },
        {
            old: 'show_currency_select: false',
            new: 'show_currency_select: true',
        },
        {
            // TODO below not updating
            old: "google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700'",
            new: "google_font_url: ''",
        },
        {
            old: 'is_resbeat_client: false',
            new: 'is_resbeat_client: true',
        },
        {
            old: "confirmation_email_from: 'Hotels for Hope'",
            new: "confirmation_email_from: 'RESBEAT'",
        },
    ];

    resbeat_data.forEach((el) => {
        const old_string = el.old;
        const regex = new RegExp(old_string, 'g');
        config_data = config_data.replace(regex, el.new);
    });

    fs.writeFile(path, config_data, (er) => {
        if (er) throw er;
    });

    console.log(`\n - Resbeat config variables have been added to ${site_name}'s config.`);
    console.log('\n - - - - - - - - - - - - - - - - - - - - - - - - - -');
}

async function editConfig() {
    let formatted_data;
    const path = `${process.cwd()}/site_configs/${site_name}-${site_id}/js/${site_id}-config.js`;
    await waitForFile(`${path}`);
    fs.readFile(`${path}`, 'utf8', (err, data) => {
        if (err) throw err;
        formatted_data = data.replace(/site_id = 11111;/g, `site_id = ${site_id};`).replace(/template/g, `${site_name}`);
        fs.writeFile(`${path}`, formatted_data, (error) => {
            if (error) throw error;
            console.log('\n - Config JS file updated with new site ID and name');
            if (resbeat_client) editConfigForResbeat(formatted_data, path);
        });
    });
}

async function editChildJs() {
    // TODO add ternary for if Resbeat client to then pull in resbeat.js
    // TODO if Resbeat client, 'extends Resbeat'
    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;
    await waitForFile(`${directory_path}/js/${site_id}.js`);
    fs.readFile(`${directory_path}/js/${site_id}.js`, 'utf8', (err, data) => {
        if (err) throw err;
        const formatted = data.replace(/import SiteConfig from '.\/template-config'/g, `import SiteConfig from './${site_id}-config'`);
        fs.writeFile(`${directory_path}/js/${site_id}.js`, formatted, (er) => {
            if (er) throw er;
            console.log('\n - Child JS file updated with new site ID and name');
            editConfig();
        });
    });
}

function buildSrcFile() {
    const src_content = `import '../site_configs/${site_name}-${site_id}/js/${site_id}';
import '../site_configs/${site_name}-${site_id}/styles/${site_id}.scss';
`;
    const directory_path = `${process.cwd()}/src`;
    fs.appendFile(`${directory_path}/${site_id}.js`, src_content, (err) => {
        if (err) throw err;
        console.log('\n - SRC file updated with imports');
    });
    editChildJs();
    editScss();
}

function renameFiles() {
    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;
    fs.readdir(directory_path, (err) => {
        if (err) {
            return console.log(`Unable to scan directory: ${err}`);
        }
        // TODO refactor - not DRY
        fs.rename(`${directory_path}/js/template.js`, `${directory_path}/js/${site_id}.js`, (error) => {
            if (error) throw error;
        });
        fs.rename(`${directory_path}/js/template-config.js`, `${directory_path}/js/${site_id}-config.js`, (error) => {
            if (error) throw error;
        });
        fs.rename(`${directory_path}/styles/template.scss`, `${directory_path}/styles/${site_id}.scss`, (error) => {
            if (error) throw error;
        });
        buildSrcFile();
    });
}

function buildSiteDir() {
    const source = `${process.cwd()}/site_configs/template_site`;
    const destination = `${process.cwd()}/site_configs/${site_name}-${site_id}`;
    fsx.copy(source, destination, (err) => {
        if (err) {
            console.log('An error occured while copying the folder.');
            return console.error(err);
        }
        renameFiles();
    });
}

function getSiteVars() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - -');
    rl.question('\nPlease enter the site ID:  ', (id) => {
        rl.question('\nPlease enter the site name:  ', (name) => {
            rl.question('\nIs this site for a Resbeat client? (Y/N):  ', (response) => {
                console.log(response);
                console.log(typeof response);
                resbeat_client = response === 'y';
                site_id = id;
                site_name = name;
                console.log(`\nThank you, building files for ${site_name}-${site_id} now.`);
                console.log('\n - - - - - - - - - - - - - - - - - - - - - - - - - -');
                rl.close();
            });
        });
    });
    rl.on('close', () => {
        buildSiteDir();
    });
}

getSiteVars();
