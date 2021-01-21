const fs = require('fs');

const ares = `${process.cwd()}`;
let site_id;

function hello(site) {
    site_id = site.slice(-5);
    console.log(site_id);
    console.log(site);
    console.log(ares);
}

// eslint-disable-next-line no-unused-vars
function createConfig(site_details) {
    const data = JSON.stringify(site_details);

    fs.writeFileSync(`${ares}/email_configs/${site_id}.json`, data);
}

module.exports = hello;

/* Things to grab:
    - client name
    -

*/
