import BasePortal from '../../../js/build';
import SiteConfig from './60279-config';
import Distance from '../../../js/calculate-distance';
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

        console.log('day js value: ', dayjs().format('MM/DD/YYYY'), 'Type: ', typeof dayjs().format('MM/DD/YYYY'));
        check_in_input.setAttribute('value', dayjs().format('MM/DD/YYYY'));
        console.log(check_in_input);
    }
}

new ChildPortal();
new Distance();
