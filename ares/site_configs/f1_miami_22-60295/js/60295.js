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

f1Styles(site_config.site_id, site_config.lodging.event_name);

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
        <a class="ArnSortByBeachfront" href="https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=60295&longitude=-80.23964600000000&latitude=25.95829850000000&radius=100&checkin=5/5/2022&nights=4&properties=338522,255939,240375,158522,2681,500825,179461,37003,259911,178994,20735,422794,252829,623490,3374,626284,848867,216347,24437,171408,332706,238362,380849,752193,33569,446028,24622,222338,430088,384604,10181,446322,256124,236435,16286,36053,35663,398338,273231,277689,450804,238764,10280,51206,175591,168273,233505,236708,174544,179936,16529,10116,2324,176956,24618,10117,130326,208368,182430,32656,43658,283572,271200,33831,24620,48449,716976,180475,34301,259007,20681,236428&map&locationlabel=Hard+Rock+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&groupid=50425&utm_source=internal"><div>Beachfront Location</div></a>
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

    // const current_url = new URL(window.location.href);
    // if (newActiveClass === 'ArnSortByBeachfront') {
    //     current_url.searchParams.set('properties',
    //     `338522,255939,240375,158522,2681,500825,179461,37003,259911,178994,20735,422794,252829,623490,3374,626284,848867,216347,24437,171408,332706,238362,380849,752193,33569,446028,24622,222338,430088,384604,10181,446322,256124,236435,16286,36053,35663,398338,273231,277689,450804,238764,10280,51206,175591,168273,233505,236708,174544,179936,16529,10116,2324,176956,24618,10117,130326,208368,182430,32656,43658,283572,271200,33831,24620,48449,716976,180475,34301,259007,20681,236428`
    //     );
    //     window.location.href = beachfrontUrl;
    // } else {
    //     // console.log('clicked_sort_a_tag', clicked_sort_a_tag);
    //     const sort_href = clicked_sort_a_tag.href
    //     // console.log('sort_href', sort_href)
    //     window.location.href = sort_href;
    // }
}

// console.log(e);
// console.log(e.target);
// e.preventDefault();
// if (e.target.querySelector('a>div')){
//     const clickedClass = e.target.querySelector('a>div').closest('a').classList;
// }

// async function addListenerToBeachButton() {
//     await utilities.waitForSelectorInDOM('.ArnSortByBeachfront');
//     const beachSortButton = document.querySelector('.ArnSortByBeachfront');
//     beachSortButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         changeActiveSortItem('ArnSortByBeachfront')
//     });
// };
// addListenerToBeachButton();
