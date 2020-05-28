import BasePortal from '../../js/build';
import Utilities from '../../js/utilities';

const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super();
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
