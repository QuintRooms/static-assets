const fs = require('fs');
const path = require('path');

const directory_path = path.join(__dirname, '../site_configs');
fs.readdir(directory_path, function (err, files) {
    if (err) {
        return console.log(`Unable to scan directory: ${err}`);
    }
    files.forEach((file) => {
        fs.readdir(`${process.cwd()}/site_configs/${file}`, (error) => {
            if (error) return;
            if (!fs.existsSync(`${process.cwd()}/site_configs/${file}/styles`)) {
                fs.mkdirSync(`${process.cwd()}/site_configs/${file}/styles`);
                console.log(`- - - - - Directory made in ${file} - - - - - -`);
            } else if (!fs.existsSync(`${process.cwd()}/site_configs/${file}/styles/${file.slice(-5)}`)) {
                fs.writeFileSync(`${process.cwd()}/site_configs/${file}/styles/${file.slice(-5)}.scss`);
                console.log(`- - - - - scss file made in ${file}/styles - - - - - -`);
            }
        });
    });
});
