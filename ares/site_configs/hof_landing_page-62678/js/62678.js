import BasePortal from '../../../js/build';
import SiteConfig from './62678-config';
import LandingPage from '../../../js/components/landing_page/landing-page';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new LandingPage(site_config.landing_page_events).init();
new ChildPortal();
