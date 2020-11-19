import BasePortal from '../../../js/build';
import SiteConfig from './59243-config';
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
// updated for rescheduled dates
async function addHeaderContent() {
    await utilities.waitForSelectorInDOM('header');
    const header = document.querySelector('header');
    header.insertAdjacentHTML('beforeend', '<span class="event-dates">April 23-25, 2021 - Downtown Austin, TX</span>');
}

addHeaderContent();
