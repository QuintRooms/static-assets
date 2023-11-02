import BasePortal from '../../../js/build';
import SiteConfig from './90957-config';

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

async function addThirdPartyRateText() {
    await utilities.waitForSelectorInDOM('.otherPrice');
    const other_price = document.querySelector('.otherPrice');
    other_price.insertAdjacentHTML('beforebegin', '<span class="third-party-rate-span">Third Party Rate: </span>');
}

addThirdPartyRateText();

new ChildPortal();
