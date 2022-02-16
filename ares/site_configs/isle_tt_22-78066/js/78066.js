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


