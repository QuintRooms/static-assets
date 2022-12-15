import BasePortal from '../../../js/build';
import SiteConfig from './84421-config';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        // this.updateSpecialRequestsLabelText();
    }

    updateSpecialRequestsLabelText() {
        utilities.waitForTextInDOM('#theSpecialRequestsAjax label', 'Note to Hotel Staff: (optional)').then(() => {
            document.querySelector('#theSpecialRequestsAjax label').textContent = `Please note any additional guests or special requests here.`;
        });
    }
}

new ChildPortal();

// Replace No Vacancny text with Room Description text
// const no_vacancy_text_change = async () => {
//     await utilities.waitForSelectorInDOM('.ArnLimitedAvail');
//     document.querySelector('.ArnLimitedAvail').insertAdjacentHTML(
//         'afterend',
//         `
//     <div class="available-options-container">
//         <div class='available-options-text'>
//             Rooms are only available for: </br> 5 or 10 nights starting 2/6/2022, or 5 nights starting 7/6/2022.
//         </div>
//     </div>
//     `
//     );
// };

// no_vacancy_text_change();

// Replace No Vacancny text with Room Description text
// const min_night_text = async () => {
//     await utilities.waitForSelectorInDOM('.ArnPropName');
//     document.querySelector('.ArnPropName').insertAdjacentHTML(
//         'beforeend',
//         `
//     <div class="minimum-nights-container">
//         <div class='minimum-nights-text'>
//             *5 night minimum
//         </div>
//     </div>
//     `
//     );
// };

// min_night_text();

// Replace No Vacancny text with Room Description text
// const additional_notes_text = async () => {
//     await utilities.waitForSelectorInDOM('#theSpecialRequestsAjax');
//     document.querySelector('#theSpecialRequestsAjax').innerText = "Additional guest name or special requests please note here.";
// };

// additional_notes_text();

// Insert Room Availability Text
// const includeSponsorBanner = async () => {
//     await utilities.waitForSelectorInDOM('.logo');
//     document.querySelector('.logo img').insertAdjacentHTML(
//     'afterend',
//     `
//     <div class="sponsor-container">
//         <div class='sponsor-text'>
//             *Rooms are only available for 5 or 10 nights starting 2/6/2022, or 5 nights starting 7/6/2022.
//         </div>
//     </div>
//     `
//     );
// }

// includeSponsorBanner();
