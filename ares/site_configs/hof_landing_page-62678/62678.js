import BasePortal from '../../js/build';
import SiteConfig from './62678-config';
import LandingPage from '../../js/components/landing-page';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new LandingPage(site_config.landing_page_events, site_config.primary_color, site_config.secondary_color, site_config.primary_text_color).init();
new ChildPortal();
