import BasePortal from '../../../js/build';
import SiteConfig from './62631-config';
import LandingPage from '../../../js/components/landing_page/landing-page';
import Utilities from '../../../js/utilities';

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

async function addBrs() {
    if (!document.querySelector('.RootBody')) return;
    await utilities.waitForSelectorInDOM('.event-name');
    document.querySelector('.event-1 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> CFP CHAMPIONSHIP INDIANAPOLIS 2022</h2>';
    document.querySelector('.event-2 .event-name').innerHTML = '<h2 class="event-name">SEARCH <br> ANYWHERE</h2>';
}

addBrs();
