const readline = require('readline');
// eslint-disable-next-line import/no-extraneous-dependencies
const fsx = require('fs-extra');
const fs = require('fs');

let site_name;
let site_id;
let resbeat_client = false;

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

function getSiteVars() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - -');
    rl.question('\nPlease enter the site name:  ', (name) => {
        rl.question('\nPlease enter the site ID:  ', (id) => {
            rl.question('\nIs this site for a Resbeat client? (Y/N):  ', (response) => {
                if (response.toLowerCase === 'y') {
                    resbeat_client = true;
                }
                site_id = id;
                site_name = name;
                console.log(`\nThank you, building files for ${site_name}-${site_id} now.`);
                console.log('\n - - - - - - - - - - - - - - - - - - - - - - - - - -');
                rl.close();
            });
        });
    });
    rl.on('close', () => {
        // process.exit(0);
        buildSiteDir();
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
        nameFiles();
    });
}

function buildSrcFile() {
    const src_content = `import '../site_configs/${site_name}-${site_id}/js/${site_id}';
import '../site_configs/${site_name}-${site_id}/styles/${site_id}.scss';
`;
    const directory_path = `${process.cwd()}/src`;
    fs.appendFile(`${directory_path}/${site_id}.js`, src_content, (err) => {
        if (err) throw err;
    });
    editFiles();
}

async function editFiles() {
    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;

    // Child file
    await waitForFile(`${directory_path}/js/${site_id}.js`);
    fs.readFile(`${directory_path}/js/${site_id}.js`, 'utf8', (err, data) => {
        if (err) throw err;
        const formatted = data.replace(/import SiteConfig from '.\/template-config'/g, `import SiteConfig from './${site_id}-config'`);
        fs.writeFile(`${directory_path}/js/${site_id}.js`, formatted, (er) => {
            if (er) throw er;
        });
    });

    // Config
    await waitForFile(`${directory_path}/js/${site_id}-config.js`);
    fs.readFile(`${directory_path}/js/${site_id}-config.js`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        const site_id_edit = data.replace(/const site_id = 11111/g, `const site_id = ${site_id}`);
        fs.writeFile(`${directory_path}/js/${site_id}-config.js`, site_id_edit, (er) => {
            if (er) throw er;
        });
        const site_name_edit = data.replace(/template/g, `${site_name}`);
        fs.writeFile(`${directory_path}/js/${site_id}-config.js`, site_name_edit, (er) => {
            if (er) throw er;
        });
        if (resbeat_client) {
            const resbeat_algolia_app_id = data.replace(/plCZXR0GZ7J1/g, 'pl58QCMXHS4C');
            const resbeat_algolia_api_key = data.replace(/b9763a419845b59957b8cc5c9b13440c/g, '1514caaca583b1ed25dad3b0c6addf0a');
            fs.writeFile(`${directory_path}/js/${site_id}-config.js`, resbeat_algolia_app_id, (er) => {
                if (er) throw er;
            });
            fs.writeFile(`${directory_path}/js/${site_id}-config.js`, resbeat_algolia_api_key, (er) => {
                if (er) throw er;
            });
            fs.writeFile(`${directory_path}/js/${site_id}-config.js`, data.replace(/is_resbeat_client: false/g, 'is_resbeat_client: true'), (er) => {
                if (er) throw er;
            });
            fs.writeFile(`${directory_path}/js/${site_id}-config.js`, data.replace(/confirmation_email_from: 'Hotels for Hope'/g, `confirmation_email_from: 'RESBEAT'`), (er) => {
                if (er) throw er;
            });
            fs.writeFile(`${directory_path}/js/${site_id}-config.js`, data.replace(/lodging/g, `'cug'`), (er) => {
                if (er) throw er;
            });
            fs.writeFile(`${directory_path}/js/${site_id}-config.js`, data.replace(/lodging/g, `'cug'`), (er) => {
                if (er) throw er;
            });
            fs.writeFile(`${directory_path}/js/${site_id}-config.js`, data.replace(/is_cug: false/g, `'is_cug: true'`), (er) => {
                if (er) throw er;
            });
            fs.writeFile(`${directory_path}/js/${site_id}-config.js`, data.replace(/percent_off_text: 'off'/g, `'percent_off_text: "BEAT 'EM BY"'`), (er) => {
                if (er) throw er;
            });
        }
    });

    // Scss
    await waitForFile(`${directory_path}/styles/${site_id}.scss`);
    fs.readFile(`${directory_path}/styles/${site_id}.scss`, 'utf8', (err, data) => {
        if (err) throw err;
        const scss_var = data.replace(/template-11111/g, `${site_name}-${site_id}`);
        fs.writeFile(`${directory_path}/styles/${site_id}.scss`, scss_var, (er) => {
            if (er) throw er;
        });
    });
}

function nameFiles() {
    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;
    fs.readdir(directory_path, (err) => {
        if (err) {
            return console.log(`Unable to scan directory: ${err}`);
        }
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

getSiteVars();
