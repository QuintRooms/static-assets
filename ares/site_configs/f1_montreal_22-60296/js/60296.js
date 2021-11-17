import BasePortal from '../../../js/build';
import SiteConfig from './60296-config';
import f1Styles from '../../../clients/formula_1/js/f1';
import Distance from '../../../js/calculate-distance';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id, site_config.lodging.event_name, 'Montreal CA', '#000');

// f1Styles(site_config.site_id);

new ChildPortal();
new Distance();

async function insertFooterText() {
    await utilities.waitForSelectorInDOM('.f1-policy');
    const footer_policy = document.querySelector('.f1-policy');

    footer_policy.insertAdjacentHTML(
        'beforebegin',
        `
        <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quintrooms-logo-footer.png" alt="Quintrooms Logo" />
        <p class="f1-partner-text">Authorized Hotel Booking Partner of F1 Miami Grand Prix</p>
        `
    );
}
insertFooterText();

async function changeArnRateTextLanguage() {
    await utilities.waitForSelectorInDOM('.ArnShowRatesLink');

    const selected_language = document.querySelector('#language-label span').innerText;
    const room_array = document.querySelectorAll('#standardAvail .rateRow');
    if (selected_language === 'Français') {
        utilities.updateHTML('.ArnSearchHeader', 'Modifier La Recherche');
        utilities.updateHTML('.sort-wrapper h4', 'Trier');
        utilities.updateHTML('.lblAmenities', 'Équipements');
        room_array.forEach((i) => {
            const book_button = i.querySelector('.ArnShowRatesLink');
            book_button.innerHTML = 'Réserver';
            // utilities.updateHTML('.full-stay','${fixed_full_stay} for ${nights} nights');
        });
    } else {
        utilities.updateHTML('.ArnSearchHeader', 'Update Search');
        utilities.updateHTML('.sort-wrapper h4', 'Sort');
        utilities.updateHTML('.lblAmenities', 'Amenities');
        room_array.forEach((i) => {
            const book_button = i.querySelector('.ArnShowRatesLink');
            book_button.innerHTML = 'Book Rooms';
            // utilities.updateHTML('.full-stay','${fixed_full_stay} for ${nights} nights');
        });
    }
}

changeArnRateTextLanguage();
