import BasePortal from '../../js/build';
import Utilities from '../../js/utilities';
import SiteConfig from './60311-config';

const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

async function addWeekendButtons() {
    await utilities.waitForSelectorInDOM('header');
    document.querySelector('header').insertAdjacentHTML(
        'beforeend',
        `<div class="event-week pull-right">
            <a id="week-one" target="_blank" href="https://aclfestival.hotelsforhope.com/group-event?id=32970">Book Weekend One</a>
            <a id="week-two" target="_blank" href="https://aclfestival.hotelsforhope.com/group-event?id=37465">Book Weekend Two</a>
        </div>`
    );
}

addWeekendButtons();
