const fs = require('fs');
const path = require('path');

const scss_vars = `$header_background: ;
$logo_flex_position: ;
$logo_max_width: ;
$background_color: ;
$secondary_background_color: ;
$primary_color: ;
$secondary_color: ;
$primary_text_color: ;
$secondary_text_color: ;
$border_color: ;
$button_hover_background_color: ;
$button_hover_text_color: ;
$button_hover_border_color: ;
$google_font_name: '';

@import '../../../styles/sass/config-styles/base-styles.config.scss';

`;

function appendFile(filePath, dataToWrite, fileVar) {
    fs.appendFile(filePath, dataToWrite, (err) => {
        if (err) throw err;
        console.log(`- - - - - scss file made in ${fileVar}/styles - - - - - -`);
    });
}

function addDirs() {
    const directory_path = path.join(__dirname, '../site_configs');
    fs.readdir(directory_path, (err, files) => {
        if (err) {
            return console.log(`Unable to scan directory: ${err}`);
        }
        files.forEach((file) => {
            const file_path = `${process.cwd()}/site_configs/${file}/`;

            fs.readdir(file_path, (error) => {
                if (error) return;
                if (!fs.existsSync(`${file_path}/styles`)) {
                    fs.mkdirSync(`${file_path}/styles`);
                    console.log(`- - - - - Directory made in ${file} - - - - - -`);
                    appendFile(`${file_path}/styles/${file.slice(-6)}.scss`, scss_vars, file);
                } else if (!fs.existsSync(`${file_path}/styles/${file.slice(-6)}.scss`)) {
                    appendFile(`${file_path}/styles/${file.slice(-6)}.scss`, scss_vars, file);
                }
            });
        });
    });
}

function addToSrc() {
    const directory_path = path.join(__dirname, '../src');
    fs.readdir(directory_path, (err, files) => {
        if (err) {
            return console.log(`Unable to scan directory: ${err}`);
        }
        files.forEach((file) => {
            const file_path = `${process.cwd()}/site_configs/${file}/`;

            fs.readdir(file_path, (error) => {
                if (error) return;
                if (!fs.existsSync(`${file_path}/styles`)) {
                    fs.mkdirSync(`${file_path}/styles`);
                    console.log(`- - - - - Directory made in ${file} - - - - - -`);
                    appendFile(`${file_path}/styles/${file.slice(-6)}.scss`, scss_vars, file);
                } else if (!fs.existsSync(`${file_path}/styles/${file.slice(-6)}.scss`)) {
                    appendFile(`${file_path}/styles/${file.slice(-6)}.scss`, scss_vars, file);
                }
            });
        });
    });
}

addDirs();
addToSrc();
