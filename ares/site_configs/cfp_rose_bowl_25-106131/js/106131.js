import BasePortal from '../../../js/build';
import SiteConfig from './106131-config';
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
    view_hotels_buttons[7].innerHTML = 'VIEW HOTELS';
    view_hotels_buttons[8].innerHTML = 'TBD';
    view_hotels_buttons[9].innerHTML = 'TBD';
    view_hotels_buttons[10].innerHTML = 'TBD';
    view_hotels_buttons[11].innerHTML = 'TBD';
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
            <div class="event-group-header">NATIONAL CHAMPIONSHIP GAMES</div>
        </div>
        `
    ); 

    lastChampionshipEvent.insertAdjacentHTML(
        'afterend',
        `
        <div class="event-group-header-container">
            <div class="event-group-header">PLAYOFF GAMES</div>
        </div>
        `
    ); 

}

renderEventGroupHeaders();

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

async function changeSearchText() {
    await utilities.waitForSelectorInDOM('#CitySearchContainer');
    const search_label = document.querySelector('#CitySearchContainer span');
    const search_text = search_label.firstChild;
    search_text.textContent = 'LOCATION SEARCH:'
}
changeSearchText();

// async function removeLoadingScreen() {
//     const loader = document.querySelector('#searching');
//     loader.style.display = 'none';
// }

// removeLoadingScreen();

// async function addBrs() {
//     if (!document.querySelector('.RootBody')) return;
//     await utilities.waitForSelectorInDOM('.event-name');
//     document.querySelector('.event-1 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> CFP NATIONAL CHAMPIONSHIP INDIANAPOLIS 2022</h2>';
//     document.querySelector('.event-2 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> ANYWHERE</h2>';
// }

// addBrs();

// <hr width="30%" size="2" color="#949494" class="event-group-header-left-box">
// <hr width="30%" size="2" color="#949494" margin-top="30px" class="event-group-header-right-box">

// <hr width="40%" size="2" color="#949494" class="event-group-header-left-box">
// <hr width="40%" size="2" color="#949494" margin-top="30px" class="event-group-header-right-box">
