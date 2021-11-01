import BasePortal from '../../../js/build';
import SiteConfig from './62631-config';
import LandingPage from '../../../js/components/landing_page/landing-page';
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
                <span id="desktop">Need 10+ rooms for any of the CFP Championship games? We're here to help you secure great rates.</span>     
                <span id="tablet">Need 10+ rooms for the CFP Championship games?</span>
                <span id="mobile">Need 10+ rooms?</span>
            </div>
            <div class="lucid-button">
                <a id="lucid-link" target="_blank" href="https://form.jotform.com/203066540331141?bookingPortal=CFP%20Championship">Book 10+ Rooms</a>
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

// async function addBrs() {
//     if (!document.querySelector('.RootBody')) return;
//     await utilities.waitForSelectorInDOM('.event-name');
//     document.querySelector('.event-1 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> CFP NATIONAL CHAMPIONSHIP INDIANAPOLIS 2022</h2>';
//     document.querySelector('.event-2 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> ANYWHERE</h2>';
// }

// addBrs();
