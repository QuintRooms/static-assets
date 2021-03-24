import BasePortal from '../../../js/build';
import SiteConfig from './68711-config';
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

async function addHeaderContent() {
    await utilities.waitForSelectorInDOM('header');
    const header = document.querySelector('header');
    header.insertAdjacentHTML('beforeend', '<span class="event-dates">Feb 11-13, 2022 - Downtown Austin, TX</span>');
}

addHeaderContent();
