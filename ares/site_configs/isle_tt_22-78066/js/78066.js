import BasePortal from '../../../js/build';
import SiteConfig from './78066-config';
import Utilities from '../../../js/utilities';
const utilities = new Utilities();

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

//Replace No Vacancny text with Room Description text
const noVacancyTextChange = async () => {
    await utilities.waitForSelectorInDOM('.ArnLimitedAvail');
    document.querySelector('.ArnLimitedAvail').insertAdjacentHTML(
        'afterend',
        `
    <div class="available-options-container">
        <div class='available-options-text'>
            Rooms are only available for:</br> 5 or 10 nights starting 2/6/2022,</br> or 5 nights starting 7/6/2022.
        </div>
    </div>
    `
    );
}

noVacancyTextChange();


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


