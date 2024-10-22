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

f1Styles(site_config.site_id, site_config.lodging.event_name, 'Miami FL', '#000');

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
    await utilities.waitForSelectorInDOM('.lucid-content');
    const lucid_content = document.querySelector('.lucid-content');

    lucid_content.innerHTML = `<span style="text-align: center;">Look for <span style="background:#008e97; margin-left: 2px; margin-right: 2px; position: static; font-size: 14px; font-weight: lighter; padding: 5px; border: 1px solid #ccc;">Exclusive Rate</span> - these hotels have the guaranteed lowest rates in Miami FL!</span>`
}
updateBannerTag();

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
