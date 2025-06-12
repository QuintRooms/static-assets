import BasePortal from '../../../js/build';
import SiteConfig from './110264-config';
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

const addExclusiveRateSashToExtraRooms = async () => {
    await utilities.waitForSelectorInDOM('#standardAvail');
    const page_name = utilities.getPageName();
    if (!page_name === 'property-detail') return;
    if (!document.querySelector('#moreRatesLink')) return;
    const showMoreRatesLink = document.querySelector('#moreRatesLink');
    const moreRatesDiv = document.querySelector('#moreRates');

    console.log('showMoreRatesLink =' + showMoreRatesLink);
    console.log('moreRatesDiv =' + moreRatesDiv);

    // const rates = moreRatesDiv.querySelectorAll('div.rateRow');
    // rates.forEach((el) => {
    //     if (el.innerHTML.includes('Special Event Rate')) {
    //         updateRoomDescription(el);
    //     }
    // });
};
//Insert Sponsor Banner
// const includeSponsorBanner = async () => {
//     await utilities.waitForSelectorInDOM('header');
//     document.querySelector('header').insertAdjacentHTML(
//     'afterend',
//     `
//     <div class="sponsor-container">
//         <div class='sponsor-text'>
//             Proudly sponsored by
//         </div>
//         <div class='sponsor-text-space'></div>
//         <div class='sponsor-logo'>
//             <img src="https://dev-static.hotelsforhope.com/ares/site_configs/governors_ball_21-70366/img/logo-hilton.png" alt="Hilton logo">
//         </div>

//     </div>
//     `
//     );
// }

addExclusiveRateSashToExtraRooms();
