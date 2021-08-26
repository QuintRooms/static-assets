import BasePortal from '../../../js/build';
import SiteConfig from './70012-config';
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

//Insert Sponsor Mention
const includeSponsorBanner = async () => {
    await utilities.waitForSelectorInDOM('header');
    document.querySelector('header').insertAdjacentHTML(
    'beforeend',
    `
    <div class="sponsor-container">
        <div class='sponsor-text'>
            Proudly sponsored by
        </div>
        <div class='sponsor-text-space'></div>
        <div class='sponsor-logo'>
            <img src="https://dev-static.hotelsforhope.com/ares/site_configs/governors_ball_21-70366/img/logo-hilton.png" alt="Hilton logo">
        </div>
        
    </div>
    `
    );
}

includeSponsorBanner();
