/* eslint-disable no-console */
const readline = require('readline');
// eslint-disable-next-line import/no-extraneous-dependencies
const fsx = require('fs-extra');
const fs = require('fs');

let site_name;
let site_id;
let resbeat_client;
let update_env;
let clone_from_name;
let clone_from_id;

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

function updateEnv() {
    if (!update_env) return;
    const env = `${process.cwd()}/.env`;
    const env_data = `environment=local
site_id=${site_id}
directory_name=${site_name}
isCUG=false
domain=hotelsforhope.com`;
    const resbeat_env = `environment=local
site_id=${site_id}
directory_name=${site_name}
isCUG=true`;

    fs.readFile(env, 'utf8', (error, data) => {
        if (error) throw error;
        const data_update = resbeat_client ? resbeat_env : env_data;
        fs.writeFile(env, data_update, (err) => {
            if (err) throw err;
            console.log(`\n - .env has been updated`);
        });
    });
}

function addToEntryPoints() {
    const entry_points = `${process.cwd()}/js/build_tools/entry-points.js`;

    const new_line = `// new sites populate below
            '${site_name}-${site_id}': './src/${site_id}.js', // ${site_name.replace('_', ' ')}`;
    const regex = new RegExp(`// new sites populate below`, 'g');

    fs.readFile(entry_points, 'utf8', (err, data) => {
        if (err) throw err;
        const formatted_data = data.replace(regex, new_line);
        fs.writeFile(entry_points, formatted_data, (error) => {
            if (error) throw error;
            console.log(`\n - New site added to 'local' in 'entry-points.js'`);
        });
    });
    updateEnv();
}

async function editScss() {
    let scss_var;
    const resbeat_config_imports = `@import '../../../styles/sass/config-styles/base-styles.config.scss';
    @import '../../../styles/sass/config-styles/resbeat.config.scss';`;

    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;

    await waitForFile(`${directory_path}/styles/${site_id}.scss`);
    fs.readFile(`${directory_path}/styles/${site_id}.scss`, 'utf8', (err, data) => {
        if (err) throw err;
        if (resbeat_client) {
            const regex = new RegExp(`@import '../../../styles/sass/config-styles/base-styles.config.scss';`, 'g');
            scss_var = data.replace(`${clone_from_name}-${clone_from_id}`, `${site_name}-${site_id}`).replace(regex, resbeat_config_imports);
        } else {
            scss_var = data.replace(`${clone_from_name}-${clone_from_id}`, `${site_name}-${site_id}`);
        }
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
            // TODO below not updating - probably because '//' escapes a character in Regex
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

        formatted_data = data
            .replace(`site_id = ${clone_from_id};`, `site_id = ${site_id};`)
            .replace(`${clone_from_name}`, `${site_name}`)
            .replace(`${clone_from_name}`, `${site_name}`)
            .replace(/event_id:.*,/, `event_id: '',`)
            .replace(/event_dates:.*,/, `event_dates: '',`);
        fs.writeFile(`${path}`, formatted_data, (error) => {
            if (error) throw error;
            console.log('\n - Config JS file updated with new site ID and name');
            if (resbeat_client) editConfigForResbeat(formatted_data, path);
        });
    });
}

async function editChildJs() {
    let formatted;
    const resbeat_child = `import Resbeat from '../../../js/resbeat';
import SiteConfig from './${site_id}-config';

const site_config = new SiteConfig();
class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();
`;

    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;
    await waitForFile(`${directory_path}/js/${site_id}.js`);
    fs.readFile(`${directory_path}/js/${site_id}.js`, 'utf8', (err, data) => {
        if (err) throw err;
        if (resbeat_client) {
            fs.writeFile(`${directory_path}/js/${site_id}.js`, resbeat_child, (error) => {
                if (error) throw error;
                console.log('\n - Child JS file updated site ID, site name and Resbeat import');
                editConfig();
            });
        } else {
            formatted = data.replace(`import SiteConfig from './${clone_from_id}-config'`, `import SiteConfig from './${site_id}-config'`);
            fs.writeFile(`${directory_path}/js/${site_id}.js`, formatted, (er) => {
                if (er) throw er;
                console.log('\n - Child JS file updated with new site ID and name');
                editConfig();
            });
        }
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
    addToEntryPoints();
}

function deleteOldFiles() {
    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;
    fs.readdir(directory_path, (err) => {
        if (err) {
            return console.log(`Unable to scan directory to delete old files: ${err}`);
        }
        // TODO refactor - not DRY
        fs.rmdir(`${directory_path}/emails`, { recursive: true }, (error) => {
            if (error) throw error;
        });
        fs.unlink(`${directory_path}/styles/${clone_from_id}.css`, (error) => {
            if (error) throw error;
        });
        fs.unlink(`${directory_path}/styles/${clone_from_id}.css.map`, (error) => {
            if (error) throw error;
        });
    });
}

function renameFiles() {
    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;
    fs.readdir(directory_path, (err) => {
        if (err) {
            return console.log(`Unable to scan directory: ${err}`);
        }
        // TODO refactor - not DRY
        fs.rename(`${directory_path}/js/${clone_from_id}.js`, `${directory_path}/js/${site_id}.js`, (error) => {
            if (error) throw error;
        });
        fs.rename(`${directory_path}/js/${clone_from_id}-config.js`, `${directory_path}/js/${site_id}-config.js`, (error) => {
            if (error) throw error;
        });
        fs.rename(`${directory_path}/styles/${clone_from_id}.scss`, `${directory_path}/styles/${site_id}.scss`, (error) => {
            if (error) throw error;
        });
        deleteOldFiles();
        buildSrcFile();
    });
}

function buildSiteDir() {
    const source = `${process.cwd()}/site_configs/${clone_from_name}-${clone_from_id}`;
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
    rl.question('\nPlease enter the site new ID:  ', (id) => {
        rl.question('\nPlease enter the new site name:  ', (name) => {
            rl.question('\nIs this site for a Resbeat client? (Y/N):  ', (resbeat_response) => {
                rl.question('\nPlease enter the name of the project you would like to clone from (excluding the id):  ', (clone_name) => {
                    rl.question('\nPlease enter the id of the project you would like to clone from:  ', (clone_id) => {
                        rl.question('\nWould you like to update the .env file to new site name and ID? (Y/N): ', (env_response) => {
                            resbeat_client = resbeat_response.toLowerCase() === 'y';
                            site_id = id;
                            site_name = name;
                            clone_from_name = clone_name;
                            clone_from_id = clone_id;
                            update_env = env_response.toLowerCase() === 'y';
                            console.log(`\nThank you, building files for ${site_name}-${site_id} now.`);
                            console.log('\n - - - - - - - - - - - - - - - - - - - - - - - - - -');
                            rl.close();
                        });
                    });
                });
            });
        });
    });
    rl.on('close', () => {
        buildSiteDir();
    });
}

getSiteVars();
