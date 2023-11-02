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
    const page_name = utilities.getPageName();
    if (page_name !== 'search-results') return;
    const original_price_elements = document.querySelectorAll('.SearchHotels div.originalPrice');
    console.log('original_price_elements: ' + original_price_elements);
    original_price_elements.forEach(original_price => {
        console.log('original_price:' + original_price);
        original_price.insertAdjacentHTML('beforebegin', '<div class="third-party-rate-span">Third Party Rate: </div>');
    });
}

addThirdPartyRateText();