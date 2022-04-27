import BasePortal from '../../../js/build';
import SiteConfig from './73525-config';
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

//Insert Sponsor Banner
const includeSponsorBanner = async () => {
    await utilities.waitForSelectorInDOM('header');
    document.querySelector('header').insertAdjacentHTML(
        'afterend',
        `
    <div class="sponsor-container">
        <div class='sponsor-text'>
            Resorts World is the Host Hotel for Barrett Jackson and home of the new Tesla Tunnel. Exclusive rates for Resorts World coming soon!
        </div>        
    </div>
    `
    );
}

includeSponsorBanner();