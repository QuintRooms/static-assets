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
    await utilities.waitForSelectorInDOM('.otherPrice');
    console.log('after waitForSelectorInDOM');
    const page_name = utilities.getPageName();
    if (page_name !== 'search-results') return;
    console.log('after pagename validation');
    const other_price_elements = document.querySelectorAll('.SearchHotels div.otherPrice');
    console.log('other_price_elements' + other_price_elements);
    other_price_elements.forEach(other_price => {
        console.log('original_price:' + other_price);
        other_price.insertAdjacentHTML('beforebegin', '<div class="third-party-rate-span">Third Party Rate: </div>');
    });
}

addThirdPartyRateText();