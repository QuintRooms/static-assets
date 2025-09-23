import BasePortal from '../../../js/build';
import SiteConfig from './58196-config';
import LandingPage from '../../../js/components/landing_page/landing-page';
import Utilities from '../../../js/utilities';

const {domain} = process.env;
const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new LandingPage(site_config.landing_page_events, site_config.hide_search_on_landing_page).init();
new ChildPortal();

async function addLandingPageBottomAdvertisement() {
    await utilities.waitForSelectorInDOM('.events');

    document.querySelector('.events').insertAdjacentHTML(
        'afterend',
        `
            <a class="landing-bottom-ad" href="https://www.barrett-jackson.com/" target="_blank">
                <img src="https://static.${domain}/ares/site_configs/bj_landing_page-58196/img/landing_ad.png" alt="Advertisement">
            </a>
        `
    );
}

addLandingPageBottomAdvertisement();
