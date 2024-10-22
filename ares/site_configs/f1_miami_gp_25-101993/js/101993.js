import BasePortal from '../../../js/build';
import SiteConfig from './101993-config';
import f1Styles from '../../../clients/formula_1/js/f1';
import Distance from '../../../js/calculate-distance';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const {domain} = process.env;

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id, site_config.lodging.event_name, 'Miami FL', '#008e97');

// f1Styles(site_config.site_id);

new ChildPortal();
new Distance();

async function insertFooterText() {
    await utilities.waitForSelectorInDOM('.f1-policy');
    const footer_policy = document.querySelector('.f1-policy');

    footer_policy.insertAdjacentHTML(
        'beforebegin',
        `
       <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quint_logo_white.png" alt="Quint Logo" />
        <p class="f1-partner-text">Authorized Hotel Booking Partner of the F1 Miami Grand Prix</p>
        `
    );
}
insertFooterText();

async function updateBannerTag() {
    await utilities.waitForSelectorInDOM('.lucid-content span');
    const lucid_content = document.querySelectorAll('.lucid-content span');

    lucid_content.forEach((element) => element.style.background = "#008e97");
}
// pdateBannerTag();u

// const selected_language = utilities.getMetaTagContent('theme');

// async function changeUpdateSearchTextOnPropPage() {
//     await utilities.waitForSelectorInDOM('.translateMe');

//     if (selected_language === 'french') {
//         utilities.updateHTML('.translateMe', 'Modifier La Recherche');
//     } else {
//         utilities.updateHTML('.translateMe', 'Update Search');
//     }
// }
// changeUpdateSearchTextOnPropPage();

// async function setListenerForPolicyModal() {
//     await utilities.waitForSelectorInDOM('.span.open-modal');

//     const policies_lower = document.querySelector('#policies-fees');
//     policies_lower.addEventListener('click', (e) => {
//         document.querySelector('span.open-modal').click();
//     });
// }

// setListenerForPolicyModal();
