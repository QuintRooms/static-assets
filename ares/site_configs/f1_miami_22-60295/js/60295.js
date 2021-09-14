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

f1Styles(site_config.site_id);

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
};
insertFooterText();

async function setActiveItemFromLocalStorage() {
    // await utilities.waitForSelectorInDOM('.sort-wrapper');
    await utilities.waitForSelectorInDOM('.ArnSortByBeachfront');
    const activeStorage = window.localStorage;
    let activeClass = activeStorage.getItem('activeItem');
    if(!activeClass) return;
    const activeItemArr = document.querySelectorAll('.active');
    activeItemArr.forEach((i)=> {
        i.classList.remove('active');
    });
    console.log('activeClass',activeClass);
    let activeItem = document.querySelector(`.${activeClass}`);
    activeItem.classList.add('active');
    console.log('activeItem.classList', activeItem.classList)
};
setActiveItemFromLocalStorage();

async function insertBeachSortButton() {
    await utilities.waitForSelectorInDOM('.sort-wrapper');
    const sort_wrapper = document.querySelector('.sort-wrapper');

    sort_wrapper.insertAdjacentHTML(
        'beforeEnd',
        `
        <a class="ArnSortByBeachfront" href="https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=60295&longitude=-80.23964600000000&latitude=25.95829850000000&radius=100&checkin=5/5/2022&nights=4&properties=236435,
        179461,
        3983382,
        233505,
        37003,
        626284,
        500825,
        256124,
        2681,
        16286,
        238362,
        36053,
        623490,
        240375,
        752193,
        24437,
        430088,
        3385223,
        43658,
        422794,
        3846047,
        33831,
        33569,
        48449,
        216347,
        24622,
        848867&map&locationlabel=Hard+Rock+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&groupid=50425&utm_source=internal"><div>Beachfront Location</div></a>
        `
    );
};
insertBeachSortButton();

async function addListenerToSortWrapper() {
    await utilities.waitForSelectorInDOM('.sort-wrapper');
    const sort_wrapper = document.querySelector('.sort-wrapper');
    sort_wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        const clickedSortATag = e.target.closest('a');
        // console.log('clickedSortATag', clickedSortATag);

        if (clickedSortATag.classList.contains('ArnSortByBeachfront')){
            changeActiveSortItem('ArnSortByBeachfront');
        } else if (clickedSortATag.classList.contains('ArnSortByDistance')) {
            changeActiveSortItem('ArnSortByDistance');
        } else if (clickedSortATag.classList.contains('ArnSortByPrice')) {
            changeActiveSortItem('ArnSortByPrice');
        } else if (clickedSortATag.classList.contains('ArnSortByClass')) {
            changeActiveSortItem('ArnSortByClass');
        }
    });
};
addListenerToSortWrapper();

async function changeActiveSortItem(newActiveClass) {
    const clickedSortATag = document.querySelector(`.${newActiveClass}`);
    const activeStorage = window.localStorage;
    activeStorage.setItem('activeItem', newActiveClass);
    const sortHref = clickedSortATag.href
    // console.log('sortHref', sortHref)
    window.location.href = sortHref;
}