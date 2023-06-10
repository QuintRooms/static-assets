import BasePortal from '../../../js/build';
import SiteConfig from './85764-config';
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
    
    <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quintrooms-logo-footer.png" alt="Quintrooms Logo" />
    <p class="f1-partner-text">Authorized Hotel Booking Partner of the F1 Las Vegas Grand Prix. </p>
    </br>
    <div class="f1-h4h-logo">
        <p class="f1-policy" style="margin-top: 35px; font-size: 12px;">The F1 FORMULA 1 logo, F1 logo, FORMULA 1, F1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX, PADDOCK CLUB, FORMULA 1 LAS VEGAS GRAND PRIX and related marks are trademarks of Formula One Licensing BV, a Formula 1 company. All rights reserved.</p>
    </div>
    `


}

insertFooterText();

async function setListenerForPolicyModal() {
    await utilities.waitForSelectorInDOM('.span.open-modal');

    const policies_lower = document.querySelector('#policies-fees');
    policies_lower.addEventListener('click', (e) => {
        document.querySelector('span.open-modal').click();
    });
}

setListenerForPolicyModal();

async function hideFirstAmenity() {
    console.log('first amenity function was called and accessed')
    await utilities.waitForSelectorInDOM('#theBody');
    console.log('first amenity function passed initial await selector')
    if (document.querySelector('.SinglePropDetail')) {
        console.log('first amenity function passed singlePropDetail conditional')
        await utilities.waitForSelectorInDOM('.show-amenities');
        //select first Amenity element and set display to 'none'
        document.querySelector('.show-amenities').style.visibility = 'hidden !important';
        console.log('end of first amenity function')
    }  

}

hideFirstAmenity()

