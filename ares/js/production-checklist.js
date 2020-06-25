require('dotenv').config({path: '.env'});
const readline = require('readline');

if (process.env.environment === 'production') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log('----------- Production Reminders ----------- \n');
    console.log('- Site details have been added to the CRM.');
    console.log('- White labeled domains have been added to debounce.io to properly validate emails. Credentials are in the references doc in the tech drive.');
    console.log('- Client email details have been added to generate-email-config.js.');

    rl.question(`\nDon't forget about the tasks above for a production site! Acknowledge this has been seen. (Y/N)`, (response) => {
        console.log('\nPlease update this as needed. Thanks, that is all! \n');
        console.log('Production sites are now building. \n');
        process.exit(0);
    });
}
