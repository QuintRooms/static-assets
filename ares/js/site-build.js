const readline = require('readline');
// eslint-disable-next-line import/no-extraneous-dependencies
const fsx = require('fs-extra');
// const fs = require('fs');

let site_name;
let site_id;
// const src_content = `
//         import '../site_configs/${site_name}-${site_id}/js/${site_id}';
//         import '../site_configs/${site_name}-${site_id}/styles/${site_id}.scss';
// `;

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
    console.log(process.cwd());
    fsx.copy(source, destination, (err) => {
        if (err) {
            console.log('An error occured while copying the folder.');
            return console.error(err);
        }
        console.log('Copy completed!');
    });
}

getSiteVars();
