import BasePortal from '../../../js/build';
import SiteConfig from './94904-config';
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

// Insert Sponsor Banner
const include_sponsor_banner = async () => {
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
            <img src="https://dev-static.hotelsforhope.com/ares/site_configs/ohana_festival_22-77149/img/logo-ihg.png" alt="IHG logo">
        </div>
    </div>
    `
    );
};

// include_sponsor_banner();
