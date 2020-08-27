const readline = require('readline');
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
        buildSiteDir();
        process.exit(0);
    });
}

function buildSiteDir() {
    console.log('this is the build site func');
}

getSiteVars();
