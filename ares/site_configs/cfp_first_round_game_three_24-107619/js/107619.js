import BasePortal from '../../../js/build';
import SiteConfig from './107619-config';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

// async function setLoadingScreen() {
//     await utilities.waitForSelectorInDOM('#searching');
//     const loader = document.querySelector('#searching');
//     loader.style.display = 'block';
// }

// setLoadingScreen();


async function renderLucidBanner() {
    await utilities.waitForSelectorInDOM('.events');

    document.querySelector('.events').insertAdjacentHTML(
        'afterend',
        `
        <div class="lucid-banner">
            <div class="lucid-content">
                <span id="desktop">NEED 10+ ROOMS FOR ANY OF THE CFP CHAMPIONSHIP GAMES? <br> WE'RE HERE TO HELP YOU SECURE GREAT RATES.</span>       
                <span id="tablet">Need 10+ rooms for the CFP Championship games?</span>
                <span id="mobile">Need 10+ rooms?</span>
            </div>
            <div class="lucid-button">
                <a id="lucid-link" target="_blank" href="https://form.jotform.com/203066540331141?bookingPortal=CFP%20Championship">CONTACT US</a>
            </div>
        </div>
        <style>
        header {
            border-bottom: unset !important;
        }
        </style>
        `
    );
}

renderLucidBanner();

async function insertFooterText() {
    await utilities.waitForSelectorInDOM('.pb-container');
    const footer_logo_container = document.querySelector('.pb-container');

    footer_logo_container.insertAdjacentHTML(
        'afterend',
        `
        <p class="official-partner-footer-text">Official College Football Playoff Hotel Booking Partner</p>
        `
    );
}
insertFooterText();

// Insert Team Names
const insert_team_names_title = async () => {
    await utilities.waitForSelectorInDOM('header');
    document.querySelector('header').insertAdjacentHTML(
        'beforeend',
        `
    <div class="team-names-container">
        <div class='team-names-text'>
            INDIANA AT NOTRE DAME
        </div>          
    </div>
    `
    );
};

insert_team_names_title();