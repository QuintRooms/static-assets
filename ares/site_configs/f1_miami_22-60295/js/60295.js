import BasePortal from '../../../js/build';
import SiteConfig from './60295-config';
import f1Styles from '../../../clients/formula_1/js/f1';
import Distance from '../../../js/calculate-distance';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id, site_config.lodging.event_name, 'South Florida');

new ChildPortal();
new Distance();

async function insertFooterText() {
    await utilities.waitForSelectorInDOM('.f1-policy');
    const footer_policy = document.querySelector('.f1-policy');

    footer_policy.insertAdjacentHTML(
        'beforebegin',
        `
        <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quintrooms-logo-footer.png" alt="Quintrooms Logo" />
        <p class="f1-partner-text">Authorized Hotel Booking Partner of F1 Miami Grand Prix</p>
        `
    );
}
insertFooterText();

async function setActiveItemFromLocalStorage() {
    // await utilities.waitForSelectorInDOM('.sort-wrapper');
    await utilities.waitForSelectorInDOM('.ArnSortByBeachfront');
    const active_storage = window.localStorage;
    const active_class = active_storage.getItem('active_item');
    if (!active_class) return;
    const active_item_arr = document.querySelectorAll('.active');
    active_item_arr.forEach((i) => {
        i.classList.remove('active');
        // if(!i.classList.contains('ArnSortByAvailability')){

        // }
    });
    console.log('active_class', active_class);
    const active_item = document.querySelector(`.${active_class}`);
    active_item.classList.add('active');
    console.log('active_item.classList', active_item.classList);
}
setActiveItemFromLocalStorage();

async function insertBeachSortButton() {
    await utilities.waitForSelectorInDOM('.sort-wrapper');
    const sort_wrapper = document.querySelector('.sort-wrapper');

    sort_wrapper.insertAdjacentHTML(
        'beforeEnd',
        `
        <a class="ArnSortByBeachfront" href="https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=60295&longitude=-80.23964600000000&latitude=25.95829850000000&radius=100&checkin=5/5/2022&nights=4&properties=236435,179461,3983382,233505,37003,626284,500825,256124,2681,16286,238362,36053,623490,240375,752193,24437,430088,3385223,43658,422794,3846047,33831,33569,48449,216347,24622,848867&map&locationlabel=Hard+Rock+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&groupid=50425&utm_source=internal"><div>Beachfront Location</div></a>
        `
    );
}
insertBeachSortButton();

async function addListenerToSortWrapper() {
    await utilities.waitForSelectorInDOM('.sort-wrapper');
    const sort_wrapper = document.querySelector('.sort-wrapper');
    sort_wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        const clicked_sort_a_tag = e.target.closest('a');
        // console.log('clicked_sort_a_tag', clicked_sort_a_tag);

        if (clicked_sort_a_tag.classList.contains('ArnSortByBeachfront')) {
            changeActiveSortItem('ArnSortByBeachfront');
        } else if (clicked_sort_a_tag.classList.contains('ArnSortByDistance')) {
            changeActiveSortItem('ArnSortByDistance');
        } else if (clicked_sort_a_tag.classList.contains('ArnSortByPrice')) {
            changeActiveSortItem('ArnSortByPrice');
        } else if (clicked_sort_a_tag.classList.contains('ArnSortByClass')) {
            changeActiveSortItem('ArnSortByClass');
        }
    });
}
addListenerToSortWrapper();

async function changeActiveSortItem(newActiveClass) {
    const clicked_sort_a_tag = document.querySelector(`.${newActiveClass}`);
    const active_storage = window.localStorage;
    active_storage.setItem('active_item', newActiveClass);
    const sort_href = clicked_sort_a_tag.href;
    // console.log('sort_href', sort_href)
    window.location.href = sort_href;
}
