import BasePortal from '../../../js/build';
import SiteConfig from './106138-config';
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

async function removeHoldRoomsText() {
    console.log('inside removeHoldRoomsText');
    await utilities.waitForSelectorInDOM('.GroupHoldForm');
    console.log('passed waitForSelectorInDOM');
    if (!document.querySelector('.GroupHoldForm')) return;
    console.log('passed GroupHoldForm in DOM');
    // const prop_id = document.querySelector('.propId').innerHTML;
    const available_rooms_array = document.querySelectorAll('.ArnNightlyRateCal');
    // if (prop_id === '339955' || prop_id === '281084') {
    console.log(`available_rooms_array: ${available_rooms_array}`);
    available_rooms_array.forEach((text_element) => {
        console.log('inside available_rooms_array FOREACH');
        const inner_room_text = text_element.innerText;
        console.log(`inner_room_text: ${inner_room_text}`);
        const room_text_array = inner_room_text.split(' ');
        room_text_array.splice(1, 2);
        const new_room_string = room_text_array.join(' ');
        console.log(`new_room_string: ${new_room_string}`);
        text_element.innerHTML = new_room_string;
        // const remove_val_from_index = [1, 2];
        // for (let i = remove_val_from_index.length - 1; i >= 0; i--) room_text_array.splice(remove_val_from_index[i], 1);
    });
    // }
}

removeHoldRoomsText();
