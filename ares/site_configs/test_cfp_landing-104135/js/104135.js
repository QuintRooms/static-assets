import BasePortal from '../../../js/build';
import SiteConfig from './104135-config';
import LandingPage from '../../../js/components/landing_page/landing-page-bar-design';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new LandingPage(site_config.landing_page_events, site_config.hide_search_on_landing_page).init();
new ChildPortal();

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

async function renderEventGroupHeaders() {
    // await utilities.waitForSelectorInDOM('.ArnPrimarySearchContainer');
    await utilities.waitForSelectorInDOM('.events');

    document.querySelector('.ArnPrimarySearchContainer').insertAdjacentHTML(
        'afterend',
        `
        <div class="first-event-header">Championship Games</div>
        `
    );

    


}

renderLucidBanner();

async function changeButtonText() {
    await utilities.waitForSelectorInDOM('.view-hotels');
    const view_hotels_buttons = document.querySelectorAll('.view-hotels');
    view_hotels_buttons[0].innerHTML = 'VIEW HOTELS';
    view_hotels_buttons[1].innerHTML = 'SUBMIT REQUESTS';
    view_hotels_buttons[2].innerHTML = 'VIEW HOTELS';
    view_hotels_buttons[3].innerHTML = 'VIEW HOTELS';
    view_hotels_buttons[4].innerHTML = 'VIEW HOTELS';
    view_hotels_buttons[5].innerHTML = 'VIEW HOTELS';
    view_hotels_buttons[6].innerHTML = 'VIEW HOTELS';
    view_hotels_buttons[6].innerHTML = 'VIEW HOTELS';
}

changeButtonText();

// async function addBrs() {
//     if (!document.querySelector('.RootBody')) return;
//     await utilities.waitForSelectorInDOM('.event-name');
//     document.querySelector('.event-1 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> CFP NATIONAL CHAMPIONSHIP INDIANAPOLIS 2022</h2>';
//     document.querySelector('.event-2 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> ANYWHERE</h2>';
// }

// addBrs();
