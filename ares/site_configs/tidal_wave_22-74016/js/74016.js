import BasePortal from '../../../js/build';
import SiteConfig from './74016-config';
// import Utilities from '../../../js/utilities';

// const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

const redirect_to_new_site = ()=> {
    window.location.href = 'https://events.quintrooms.com/group-event?id=55133'
};

redirect_to_new_site();



// Insert Sponsor Banner
// const include_sponsor_banner = async () => {
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
//             <img src="https://dev-static.hotelsforhope.com/ares/site_configs/governors_ball_21-70366/img/logo-hilton.png" alt="Hilton logo">
//         </div>
//     </div>
//     `
//     );
// };

// include_sponsor_banner();
