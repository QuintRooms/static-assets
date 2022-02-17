import BasePortal from '../../../js/build';
import SiteConfig from './78066-config';

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
    document.querySelector('ArnLimitedAvail').insertAdjacentHTML(
        'afterend',
        `
    <div class="sponsor-container">
        <div class='available-options-text'>
            Rooms are only available for 5 or 10 nights starting 2/6/2022, or 5 nights starting 7/6/2022.
        </div>
    </div>
    `
    );
}

noVacancyTextChange();


//Insert Sponsor Banner
// const includeSponsorBanner = async () => {
//     await utilities.waitForSelectorInDOM('header');
//     document.querySelector('header').insertAdjacentHTML(
//         'afterend',
//         `
//     <div class="sponsor-container">
//         <div class='sponsor-text'>
//             Proudly sponsored by
//         </div>
//         <div class='sponsor-text-space'></div>
//         <div class='sponsor-logo'>
//             <img src="https://dev-static.hotelsforhope.com/ares/site_configs/isle_tt_22-78066/img/logo-sportsnet.png" alt="Hilton logo">
//         </div>
        
//     </div>
//     `
//     );
// }

// includeSponsorBanner();


