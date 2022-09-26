import BasePortal from '../../../js/build';
import SiteConfig from './83219-config';
import f1Styles from '../../../clients/formula_1/js/f1';
import Distance from '../../../js/calculate-distance';
import Utilites from '../../../js/utilities';

const utilities = new Utilites();

const { domain } = process.env;

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id);
utilities.replacePropThumbImage(site_config.prop_image_replacement);

new ChildPortal();
new Distance();

async function insertFooterText() {
    await utilities.waitForSelectorInDOM('.f1-policy');
    const footer_policy = document.querySelector('.f1-policy');

    footer_policy.insertAdjacentHTML(
        'beforebegin',
        `
        <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quintrooms-logo-footer.png" alt="Quintrooms Logo" />
        <p class="f1-partner-text">Authorized Hotel Booking Partner of the F1 Dutch Grand Prix</p>
        `
    );
}
insertFooterText();

const selected_language = utilities.getMetaTagContent('theme');

async function setListenerForPolicyModal() {
    await utilities.waitForSelectorInDOM('.span.open-modal');

    const policies_lower = document.querySelector('#policies-fees');
    policies_lower.addEventListener('click', (e) => {
        document.querySelector('span.open-modal').click();
    });
}

setListenerForPolicyModal();
