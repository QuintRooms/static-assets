import BasePortal from '../../../js/build';
import SiteConfig from './104135-config';
import LandingPage from '../../../js/components/landing_page/cfp-landing-page-bar-design';
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

async function renderEventGroupHeaders() {
    // await utilities.waitForSelectorInDOM('.ArnPrimarySearchContainer');
    await utilities.waitForSelectorInDOM('.championship');
    const championshipEventsArray = document.querySelectorAll('.championship');
    const lastChampionshipEvent = championshipEventsArray[championshipEventsArray.length - 1];
    const firstChampionshipEvent = championshipEventsArray[0];

    console.log('championshipEventsArray ' + championshipEventsArray);
    console.log('lastChampionshipEvent ' + lastChampionshipEvent);
    console.log('firstChampionshipEvent ' + firstChampionshipEvent);

    firstChampionshipEvent.insertAdjacentHTML(
        'beforebegin',
        `
        <div class="event-group-header-container">
            <hr width="30%" size="2" color="#000" class="event-group-header-left-box">
            <div class="event-group-header">NATIONAL CHAMPIONSHIP GAMES</div>
            <hr width="30%" size="2" color="#000" margin-top="30px" class="event-group-header-right-box">
        </div>
        `
    ); 

    lastChampionshipEvent.insertAdjacentHTML(
        'afterend',
        `
        <div class="event-group-header-container">
            <div class="event-group-header-left-box"></div>
            <div class="event-group-header">PLAYOFF GAMES</div>
            <div class="event-group-header-right-box"></div>
        </div>
        `
    ); 

}

renderEventGroupHeaders();

// async function addBrs() {
//     if (!document.querySelector('.RootBody')) return;
//     await utilities.waitForSelectorInDOM('.event-name');
//     document.querySelector('.event-1 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> CFP NATIONAL CHAMPIONSHIP INDIANAPOLIS 2022</h2>';
//     document.querySelector('.event-2 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> ANYWHERE</h2>';
// }

// addBrs();
