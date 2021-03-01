import BasePortal from '../../../js/build';
import SiteConfig from './63713-config';
import Roomcash from './roomcash';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        new Roomcash(site_config);
        this.addDevelopTextToHeader();
    }

    async addDevelopTextToHeader() {
        await utilities.waitForSelectorInDOM('.header-container');

        const header = document.querySelector('.header-container');

        if (!header) return;

        header.insertAdjacentHTML('afterEnd', `<h1 id="develop-messaging">DEVELOPMENT SITE</h1>`);
    }
}

new ChildPortal();
