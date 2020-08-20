const fs = require('fs');
const path = require('path');

const directory_path = path.join(__dirname, '../site_configs');
fs.readdir(directory_path, function (err, files) {
    if (err) {
        return console.log(`Unable to scan directory: ${err}`);
    }
    files.forEach(function (file) {
        fs.readdir(`${process.cwd()}/site_configs/${file}`, (errorrr, dir_files) => {
            if (errorrr) console.log(errorrr);
            else if (fs.existsSync(`${process.cwd()}/site_configs/${file}/styles`)) {
                console.log('File already exists');
            } else {
                fs.mkdirSync(`${process.cwd()}/site_configs/${file}/styles`);
            }
        });
    });
});
