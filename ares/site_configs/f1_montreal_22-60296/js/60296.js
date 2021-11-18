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

// function getMeta(metaName) {
//     const metas = document.getElementsByTagName('meta');

//     for (let i = 0; i < metas.length; i++) {
//         if (metas[i].getAttribute('name') === metaName) {
//             return metas[i].getAttribute('content');
//         }
//     }
//     return 'standard';
// }



const selected_language = utilities.getMetaTagContent('theme');
console.log(`THEME META TAG IN CANADIAN GP IS ${selected_language}`);

async function changeUpdateSearchTextOnPropPage() {
    // const selected_language = document.querySelector('#language-label span').innerText;
    await utilities.waitForSelectorInDOM('.translateMe');

    if (selected_language === 'french') {
        console.log('inside french changeUpdateSearchTextOnPropPage');
        utilities.updateHTML('.translateMe', 'Modifier La Recherche');
    } else {
        utilities.updateHTML('.translateMe', 'Update Search');
    }
}
changeUpdateSearchTextOnPropPage();

const confirmation_agreement_el = document.querySelector('.confirmationAgreement');

async function changeConfirmationAgreementTextOnCheckout() {
    // const selected_language = document.querySelector('#language-label span').innerText;
    await utilities.waitForSelectorInDOM('.confirmationAgreement');
    console.log('inside changeConfirmationAgreementTextOnCheckout');
    if (selected_language === 'french') {
        console.log('inside french changeConfirmationAgreementTextOnCheckout');
        confirmation_agreement_el.innerHTML = `En cochant cette case, j'accepte les <span id="policies-fees">Politiques Et Frais</span> ci-dessus et les <a id="t-and-cs" target="_blank" href="https://events.${domain}/v6/terms-and-conditions?&siteId=60296&theme=standard">Conditions Générales</a> trouvées sur ce site Web.`
    } else {
        console.log('inside English changeConfirmationAgreementTextOnCheckout');
        confirmation_agreement_el.innerHTML = `By checking this box I agree to the <span id="policies-fees">Policies & Fees</span> above and the <a id="t-and-cs" target="_blank" href="https://events.${domain}/v6/terms-and-conditions?&siteId=60296&theme=standard">Terms & Conditions</a> found on this website.`
    }

    const policies_lower = document.querySelector('#policies-fees');
    policies_lower.addEventListener('click', (e) => {
        document.querySelector('span.open-modal').click();
    });
}

changeConfirmationAgreementTextOnCheckout();

async function changeArnRateTextLanguage() {
    await utilities.waitForSelectorInDOM('.sort-wrapper h4');
    // await utilities.waitForSelectorInDOM('.sort-wrapper h4');
    const room_array = document.querySelectorAll('.ArnProperty');

    //MAKE SURE IS FRENCH!!
    if (selected_language === 'french') {
        room_array.forEach((i) => {
            if (!i.querySelector('.full-stay')) return;
            // const full_stay_text = i.querySelector('.full-stay').textContent;
            // const new_full_stay_text = full_stay_text.replace('for', 'pour').replace('nights', 'nuits');
            // console.log('new_full_stay_text', new_full_stay_text);
            const per_night_text = i.querySelector('.arnUnit + div');

            // setTimeout(() => {
                // i.querySelector('.full-stay').textContent = new_full_stay_text;
            // }, 3000);

            per_night_text.textContent = 'par nuit';
        });
    }
}

changeArnRateTextLanguage();

// async function changeLucidBannerText() {
//     await utilities.waitForSelectorInDOM('header');
//     const selected_language = document.querySelector('#language-label span').innerText;
//     const lucid_content = document.querySelector('.lucid-content');
//     if (selected_language === 'Français') {
//         lucid_content.innerHTML = `<span style="text-align: center;">Recherchez un <span style="background: #000; margin-left: 2px; margin-right: 2px; position: static; font-size: 14px; font-weight: lighter; padding: 5px; border: 1px solid #ccc;">Tarif Exclusif</span> - ces hôtels ont les tarifs les plus bas garantis près de  Circuit Gilles Villeneuve }!</span>`;
//     } else {
//         lucid_content.innerHTML = `<span style="text-align: center;">Look for <span style="background: #000; margin-left: 2px; margin-right: 2px; position: static; font-size: 14px; font-weight: lighter; padding: 5px; border: 1px solid #ccc;">Exclusive Rate</span> - these hotels have the guaranteed lowest rates near Circuit Gilles Villeneuve }!</span>`;
//     }
// }
// changeLucidBannerText();

// async function changeArnRateTextLanguage() {
//     await utilities.waitForSelectorInDOM('.sort-wrapper h4');

//     const selected_language = document.querySelector('#language-label span').innerText;
//     const room_array = document.querySelectorAll('.ArnProperty');
//     if (selected_language === 'Français') {// async function changeArnRateTextLanguage() {
//     await utilities.waitForSelectorInDOM('.sort-wrapper h4');

//     const selected_language = document.querySelector('#language-label span').innerText;
//     const room_array = document.querySelectorAll('.ArnProperty');
//     if (selected_language === 'Français') {
//         utilities.updateHTML('.ArnSearchHeader', 'Modifier La Recherche');
//         utilities.updateHTML('.sort-wrapper h4', 'Trier');
//         utilities.updateHTML('.lblAmenities', 'Équipements');

//         document.querySelector(
//             '.lucid-content'
//         ).innerHTML = `<span style="text-align: center;">Recherchez un <span style="background: #000; margin-left: 2px; margin-right: 2px; position: static; font-size: 14px; font-weight: lighter; padding: 5px; border: 1px solid #ccc;">Tarif Exclusif</span> - ces hôtels ont les tarifs les plus bas garantis près de  Circuit Gilles Villeneuve
//         }!</span>`;

//         room_array.forEach((i) => {
//             const book_button = i.querySelector('.ArnShowRatesLink');
//             const full_stay_text = i.querySelector('.full-stay');
//             book_button.innerHTML = 'Réserver';
            
//         utilities.updateHTML('.ArnSearchHeader', 'Modifier La Recherche');
//         utilities.updateHTML('.sort-wrapper h4', 'Trier');
//         utilities.updateHTML('.lblAmenities', 'Équipements');

//         document.querySelector(
//             '.lucid-content'
//         ).innerHTML = `<span style="text-align: center;">Recherchez un <span style="background: #000; margin-left: 2px; margin-right: 2px; position: static; font-size: 14px; font-weight: lighter; padding: 5px; border: 1px solid #ccc;">Tarif Exclusif</span> - ces hôtels ont les tarifs les plus bas garantis près de  Circuit Gilles Villeneuve
//         }!</span>`;

//         room_array.forEach((i) => {
//             const book_button = i.querySelector('.ArnShowRatesLink');
//             const full_stay_text = i.querySelector('.full-stay');
//             book_button.innerHTML = 'Réserver';
            
//             // utilities.updateHTML('.full-stay','${fixed_full_stay} for ${nights} nights');
//         });
//     } else {
//         utilities.updateHTML('.ArnSearchHeader', 'Update Search');
//         utilities.updateHTML('.sort-wrapper h4', 'Sort');
//         utilities.updateHTML('.lblAmenities', 'Amenities');

//         document.querySelector(
//             '.lucid-content'
//         ).innerHTML = `<span style="text-align: center;">Look for <span style="background: #000; margin-left: 2px; margin-right: 2px; position: static; font-size: 14px; font-weight: lighter; padding: 5px; border: 1px solid #ccc;">Exclusive Rate</span> - these hotels have the guaranteed lowest rates near Circuit Gilles Villeneuve
//         }!</span>`;

//         room_array.forEach((i) => {
//             const book_button = i.querySelector('.ArnShowRatesLink');
//             book_button.innerHTML = 'Book Rooms';
//             // utilities.updateHTML('.full-stay','${fixed_full_stay} for ${nights} nights');
//         });
//     }
// }
// changeArnRateTextLanguage();
