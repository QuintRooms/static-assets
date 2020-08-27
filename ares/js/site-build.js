const readline = require('readline');
// eslint-disable-next-line import/no-extraneous-dependencies
const fsx = require('fs-extra');
const fs = require('fs');

let site_name;
let site_id;

function getSiteVars() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - -');
    rl.question('\nPlease enter the site name:', (name) => {
        rl.question('\nPlease enter the site ID:', (id) => {
            site_id = id;
            site_name = name;
            console.log(`\nThank you, building files for ${site_name}-${site_id} now.`);
            console.log('\n - - - - - - - - - - - - - - - - - - - - - - - - - -');
            rl.close();
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
        console.log(`\nsrc file for ${site_name}-${site_id} made in ${directory_path}`);
    });
    editFiles();
}

function editFiles() {
    const directory_path = `${process.cwd()}/site_configs/${site_name}-${site_id}`;
    // Child file
    fs.readFile(`${directory_path}/js/${site_id}.js`, (data) => {
        console.log('Data: ', data);
        const formatted = data.replace(/import SiteConfig from '.\/template-/g, `import SiteConfig from './${site_name}-config'`);
        fs.writeFile(`${directory_path}/js/${site_id}.js`, formatted, 'utf8');
    });
    // Config

    // Scss
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
        fs.rename(`${directory_path}/js/template-config.js`, `${directory_path}/js/${site_name}-${site_id}.js`, (error) => {
            if (error) throw error;
        });
        fs.rename(`${directory_path}/styles/template.scss`, `${directory_path}/styles/${site_id}.scss`, (error) => {
            if (error) throw error;
        });
        buildSrcFile();
    });
}

getSiteVars();
