import BasePortal from '../../../js/build';
import SiteConfig from './100609-config';
import f1Styles from '../../../clients/formula_1/js/f1';
// import Distance from '../../../js/calculate-distance';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const { domain } = process.env;

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id, site_config.lodging.event_name, 'Las Vegas', '#000');

new ChildPortal();
// new Distance();

async function insertFooterText() {
    await utilities.waitForSelectorInDOM('.f1-policy');
    const footer_policy = document.querySelector('.f1-policy');

    // footer_policy.insertAdjacentHTML(
    //     'beforebegin',
    //     `
    //     <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quintrooms-logo-footer.png" alt="Quintrooms Logo" />
    //     <p class="f1-partner-text">Authorized Hotel Booking Partner of the F1 Las Vegas Grand Prix. </p>
    //     `
    // );

    footer_policy.innerHTML = `
    
    <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quint_logo_white.png" alt="Quint Logo" />
    <p class="f1-partner-text">Authorized Hotel Booking Partner of the F1 Las Vegas Grand Prix. </p>
    </br>
    <div class="f1-h4h-logo">
        <p class="f1-policy" style="margin-top: 35px; font-size: 12px;">The F1 FORMULA 1 logo, F1 logo, FORMULA 1, F1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX, PADDOCK CLUB, FORMULA 1 LAS VEGAS GRAND PRIX and related marks are trademarks of Formula One Licensing BV, a Formula 1 company. All rights reserved.</p>
    </div>
    `
}

async function setListenerForPolicyModal() {
    await utilities.waitForSelectorInDOM('.span.open-modal');

    const policies_lower = document.querySelector('#policies-fees');
    policies_lower.addEventListener('click', (e) => {
        document.querySelector('span.open-modal').click();
    });
}

async function hideFirstAmenity() {
    console.log('first amenity function was called and accessed')
    await utilities.waitForSelectorInDOM('#theBody');
    console.log('first amenity function passed initial await selector')
    if (document.querySelector('.SinglePropDetail')) {
        console.log('first amenity function passed singlePropDetail conditional')
        await utilities.waitForSelectorInDOM('.show-amenities');
        //select first Amenity element and set display to 'none'
        // document.querySelector('.show-amenities').style.visibility = 'hidden';
        document.querySelector('.show-amenities').innerHTML = '';
        // let clickEvent = new MouseEvent("click", {
        //     "view": window,
        //     "bubbles": true,
        //     "cancelable": false
        // });
        document.getElementById("show-more-or-less").click();
        console.log('end of first amenity function')
    }  

}


async function updateDatePromptLogo() {
    if (!document.querySelector('.SearchHotels')) return;
    await utilities.waitForSelectorInDOM('#theQuickCheckIn');
    const date_prompt_image = document.querySelectorAll('#theDatePrompt #datePromptContainer img');
    date_prompt_image[0].src = `${env_path.path}/site_configs/f1_lvgp_retail-100609/img/email-logo.png`;
}

async function updateSearchPageH3() {
    if (!document.querySelector('.RootBody')) return;
    await utilities.waitForSelectorInDOM('h3');
    const h3Text = document.querySelector('.RootBody h3');
    h3Text.innerText = 'Year round rates exclusive to LVGP!';
}

async function addLVGPRoomsButton() {
    if (!document.querySelector('.RootBody')) return;
    await utilities.waitForSelectorInDOM('book-plus');

    let requestRoomsButton = `
        <li>
            <a href="https://form.jotform.com/240656046741153?bookingPortal=Las%20Vegas%20Grand%20Prix" class="book-plus" target="_blank">Request 2024 LVGP Rooms</a>
        </li>
    `
    const tenPlusButton = document.querySelector('book-plus');
    header_upper.insertAdjacentHTML('afterend', races_contact);
}

hideFirstAmenity();
updateSearchPageH3();
addLVGPRoomsButton();
insertFooterText();
// updateDatePromptLogo();
setListenerForPolicyModal();