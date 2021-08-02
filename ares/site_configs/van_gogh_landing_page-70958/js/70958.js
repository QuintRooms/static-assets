import BasePortal from '../../../js/build';
import SiteConfig from './70958-config';
import LandingPage from '../../../js/components/landing_page/landing-page';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new LandingPage(site_config.landing_page_events, site_config.hide_search_on_landing_page).init();
new ChildPortal();
