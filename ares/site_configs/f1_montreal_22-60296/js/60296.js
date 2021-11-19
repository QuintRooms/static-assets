import BasePortal from '../../../js/build';
import SiteConfig from './60296-config';
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
        <p class="f1-partner-text">Authorized Hotel Booking Partner of the F1 Canadian Grand Prix</p>
        `
    );
}
insertFooterText();

const selected_language = utilities.getMetaTagContent('theme');

async function changeUpdateSearchTextOnPropPage() {
    await utilities.waitForSelectorInDOM('.translateMe');

    if (selected_language === 'french') {
        console.log('inside french changeUpdateSearchTextOnPropPage');
        utilities.updateHTML('.translateMe', 'Modifier La Recherche');
    } else {
        utilities.updateHTML('.translateMe', 'Update Search');
    }
}
changeUpdateSearchTextOnPropPage();

// const confirmation_agreement_el = document.querySelector('.confirmationAgreement');

async function changeConfirmationAgreementTextOnCheckout() {
    await utilities.waitForSelectorInDOM('.confirmationAgreement');
    // console.log('inside changeConfirmationAgreementTextOnCheckout');
    // if (selected_language === 'french') {
    //     console.log('inside french changeConfirmationAgreementTextOnCheckout');
    //     confirmation_agreement_el.innerHTML = `En cochant cette case, j'accepte les <span id="policies-fees">Politiques Et Frais</span> ci-dessus et les <a id="t-and-cs" target="_blank" href="https://events.${domain}/v6/terms-and-conditions?&siteId=60296&theme=standard">Conditions Générales</a> trouvées sur ce site Web.`;
    // } else {
    //     console.log('inside English changeConfirmationAgreementTextOnCheckout');
    //     confirmation_agreement_el.innerHTML = `By checking this box I agree to the <span id="policies-fees">Policies & Fees</span> above and the <a id="t-and-cs" target="_blank" href="https://events.${domain}/v6/terms-and-conditions?&siteId=60296&theme=standard">Terms & Conditions</a> found on this website.`;
    // }

    const policies_lower = document.querySelector('#policies-fees');
    policies_lower.addEventListener('click', (e) => {
        document.querySelector('span.open-modal').click();
    });
}

changeConfirmationAgreementTextOnCheckout();
