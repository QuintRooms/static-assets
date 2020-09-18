import BasePortal from '../../../js/build';
import SiteConfig from './62678-config';
import LandingPage from '../../../js/components/landing-page/landing-page';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        this.prepopulateSearchCity();
    }

    async prepopulateSearchCity() {
        if (!document.querySelector('.RootBody')) return;

        await utilities.waitForSelectorInDOM('#address-input');

        const city_input = document.querySelector('#address-input');

        if (!city_input) return;

        city_input.value = 'Canton, OH';
    }
}

new LandingPage(site_config.landing_page_events, site_config.hide_search_on_landing_page).init();
new ChildPortal();
