import BasePortal from '../../../js/build';
import SiteConfig from './62678-config';
import LandingPage from '../../../js/components/landing-page/landing-page';
import Utilities from '../../../js/utilities';

const dayjs = require('dayjs');

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        this.prepopulateSearchDate();
    }

    async prepopulateSearchDate() {
        if (utilities.getPageName !== 'search-results') return;

        await utilities.waitForSelectorInDOM('#theQuickCheckIn');

        const check_in_input = document.querySelector('#theDatePrompt #theQuickCheckIn');

        if (!check_in_input) return;

        check_in_input.value = dayjs().format('MM/DD/YYYY');
    }
}

new LandingPage(site_config.landing_page_events).init();
new ChildPortal();
