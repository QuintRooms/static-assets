import BasePortal from '../../../js/build';
import SiteConfig from './90957-config';
import Distance from '../../../js/calculate-distance';
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
new Distance();

async function addThirdPartyRateText() {
    await utilities.waitForSelectorInDOM('.originalPrice');
    console.log('after waitForSelectorInDOM');
    const page_name = utilities.getPageName();
    console.log('page name:' + page_name);
    if (page_name !== 'search-results') return;
    console.log('after if page_name == search-results')
    const original_price = document.querySelector('div.originalPrice');
    original_price.insertAdjacentHTML('beforebegin', '<div class="third-party-rate-span">Third Party Rate: </div>');
}

addThirdPartyRateText();