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

const beach_property_list = '236435,179461,3983382,233505,37003,626284,500825,256124,2681,16286,238362,36053,623490,240375,752193,24437,430088,3385223,43658,422794,3846047,33831,33569,48449,216347,24622,848867'
const beach_property_url = 'https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=60295&longitude=-80.23964600000000&latitude=25.95829850000000&radius=100&checkin=5/5/2022&nights=4&properties=236435,179461,3983382,233505,37003,626284,500825,256124,2681,16286,238362,36053,623490,240375,752193,24437,430088,3385223,43658,422794,3846047,33831,33569,48449,216347,24622,848867&map&locationlabel=Hard+Rock+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&groupid=50425&utm_source=internal'

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

async function setBeachFilterFromLocalStorage() {
    await utilities.waitForSelectorInDOM('.filter-wrapper');
    const local_storage = window.localStorage;
    const beach_state = local_storage.getItem('beach_filter');
    if (!beach_state) return;
    console.log('beach_state', beach_state);
    const beach_checkbox = document.querySelector('input[name=beach-checkbox]');
    if (beach_state === true) {
        beach_checkbox.checked = true;
    } else {
        beach_checkbox.checked = false;
    }
    addListenerToBeachBox()
}
setBeachFilterFromLocalStorage();

async function insertBeachFilter() {
    await utilities.waitForSelectorInDOM('.sort-wrapper');
    const sort_wrapper = document.querySelector('.sort-wrapper');
    

    sort_wrapper.insertAdjacentHTML(
        'afterEnd',
        `
        <div class="filter-wrapper" id="filter-wrapper">
            <h4>Filter</h4>
            <input type='checkbox' id='beach-checkbox' name='beach-checkbox'></input>
            <label for="beach-checkbox">Beachfront Location</label>
        </div>
        `
    );
}
insertBeachFilter();

async function addListenerToBeachBox() {
    console.log('inside addlistenertobeachbox')
    await utilities.waitForSelectorInDOM('#beach-checkbox');
    const beach_checkbox = document.querySelector('input[name=beach-checkbox]');
    const current_url = new URL(window.location.href);
    const current_properties = current_url.searchParams.get('properties');
    console.log('current_properties', current_properties);
    const local_storage = window.localStorage;

    if (current_properties !== beach_property_list) {
        const local_storage = window.localStorage;
        local_storage.setItem('initial_url', current_url);
    }


    beach_checkbox.addEventListener('change', (e) => {
        e.preventDefault();
        if (beach_checkbox.checked) {
            console.log("Checkbox is checked..");
            local_storage.setItem('beach_filter', true);
            window.location.href = beach_property_url;
        } else {
            console.log("Checkbox is not checked..");
            local_storage.setItem('beach_filter', false);
            const initial_url = local_storage.getItem('initial_url');
            window.location.href = initial_url;
        }
      });
}

async function changeActiveSortItem(newActiveClass) {
    const clicked_sort_a_tag = document.querySelector(`.${newActiveClass}`);
    const local_storage = window.localStorage;
    local_storage.setItem('beach_filter', newActiveClass);
    const sort_href = clicked_sort_a_tag.href;
    // console.log('sort_href', sort_href)
    window.location.href = sort_href;
}

//ACTIVE ITEM STATE CHANGE



//OLD SORT FUNCTION

// async function setActiveItemFromLocalStorage() {
//     // await utilities.waitForSelectorInDOM('.sort-wrapper');
//     await utilities.waitForSelectorInDOM('.ArnFilterByBeachfront');
//     const local_storage = window.localStorage;
//     const beach_state = local_storage.getItem('beach_filter');
//     if (!beach_state) return;
//     const beach_checkbox = document.querySelectorAll('.active');
//     beach_checkbox.forEach((i) => {
//         i.classList.remove('active');
//         // if(!i.classList.contains('ArnSortByAvailability')){

//         // }
//     });
//     console.log('beach_state', beach_state);
//     const beach_filter = document.querySelector(`.${beach_state}`);
//     beach_filter.classList.add('active');
//     console.log('beach_filter.classList', beach_filter.classList);
// }
// setActiveItemFromLocalStorage();

// async function insertBeachFilter() {
//     await utilities.waitForSelectorInDOM('.sort-wrapper');
//     const sort_wrapper = document.querySelector('.sort-wrapper');

//     sort_wrapper.insertAdjacentHTML(
//         'afterEnd',
//         `
//         <div class="sort-wrapper" id="filter-wrapper">
//             <h4>Filter</h4>
//             <input type='checkbox' id='beach-checkbox' name='beach-checkbox'></input>
//             <label for="beach-checkbox">Beachfront Location</label>
//         </div>
//         `
//     );
// }
// insertBeachFilter();

// async function addListenerToSortWrapper() {
//     await utilities.waitForSelectorInDOM('.sort-wrapper');
//     const sort_wrapper = document.querySelector('.sort-wrapper');
//     sort_wrapper.addEventListener('click', (e) => {
//         e.preventDefault();
//         const clicked_sort_a_tag = e.target.closest('a');
//         // console.log('clicked_sort_a_tag', clicked_sort_a_tag);

//         if (clicked_sort_a_tag.classList.contains('ArnFilterByBeachfront')) {
//             changeActiveSortItem('ArnFilterByBeachfront');
//         } else if (clicked_sort_a_tag.classList.contains('ArnSortByDistance')) {
//             changeActiveSortItem('ArnSortByDistance');
//         } else if (clicked_sort_a_tag.classList.contains('ArnSortByPrice')) {
//             changeActiveSortItem('ArnSortByPrice');
//         } else if (clicked_sort_a_tag.classList.contains('ArnSortByClass')) {
//             changeActiveSortItem('ArnSortByClass');
//         }
//     });
// }
// addListenerToSortWrapper();

// async function changeActiveSortItem(newActiveClass) {
//     const clicked_sort_a_tag = document.querySelector(`.${newActiveClass}`);
//     const local_storage = window.localStorage;
//     local_storage.setItem('beach_filter', newActiveClass);
//     const sort_href = clicked_sort_a_tag.href;
//     // console.log('sort_href', sort_href)
//     window.location.href = sort_href;
// }


// "longitude=-80.23964600000000&nights=4&type=geo&map=&cid=GROUP-EVENT-EMAIL&useMiles=&latitude=25.95829850000000&utm_source=internal&checkin=5/5/2022&pageSize=10&siteid=60295&groupid=50425&&currency=USD&locationlabel=Hard Rock Stadium&radius=100"
//BEACHFRONT URL
{/* <a class="ArnFilterByBeachfront" href="https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=60295&longitude=-80.23964600000000&latitude=25.95829850000000&radius=100&checkin=5/5/2022&nights=4&properties=236435,179461,3983382,233505,37003,626284,500825,256124,2681,16286,238362,36053,623490,240375,752193,24437,430088,3385223,43658,422794,3846047,33831,33569,48449,216347,24622,848867&map&locationlabel=Hard+Rock+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&groupid=50425&utm_source=internal"><div>Beachfront Location</div></a> */}
//INITIAL URL
// https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=60295&longitude=-80.23964600000000&latitude=25.95829850000000&radius=100&checkin=5/5/2022&nights=4&properties=3385223,255939,240375,37003,178994,20735,2732315,179461,2681,626284,158522,500825,259911,238764,277689,422794,252829,623490,3374,24437,848867,216347,1714083,3327067,238362,3808499,752193,33569,4460287,24622,222338,430088,3846047,10181,4463220,256124,236435,16286,36053,35663,3983382,4508047,10280,51206,175591,1682734,233505,236708,174544,179936,16529,10116,2324,176956,24618,10117,1303262,208368,182430,32656,43658,283572,271200,33831,24620,48449,716976,180475,34301,259007,20681,236428&map&locationlabel=Hard+Rock+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&groupid=50425&utm_source=internal