import BasePortal from '../../../js/build';
import SiteConfig from './110264-config';
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

const addExclusiveRateSashToExtraRooms = async () => {
    await utilities.waitForSelectorInDOM('#standardAvail');
    const page_name = utilities.getPageName();
    if (!page_name === 'property-detail') return;
    if (!document.querySelector('#moreRatesLink')) return;
    const showMoreRatesLink = document.querySelector('#moreRatesLink');
    const moreRatesDiv = document.querySelector('#moreRates');

    console.log('showMoreRatesLink =' + showMoreRatesLink);
    console.log('moreRatesDiv =' + moreRatesDiv);

    function updateRoomDescription(selector) {
        if (!document.querySelector('.SinglePropDetail')) return;
        selector.innerHTML = selector.innerHTML.replace(
            'Special Event Rate',
            `<span class="prop-detail-exclusive-rate-tag exclusive-rate" style="position: static; margin:0 2px 2px 2px; display: inline-block; color: #fff; font-size: 14px; font-weight: light; padding: 5px;">Exclusive Rate</span>`
        );
    }

    // Debounce timer to wait for rendering to finish
    let debounceTimer = null;

    // MutationObserver callback
    const observer = new MutationObserver(() => {
        // Reset debounce timer each time a mutation occurs
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            console.log('Finished rendering, scanning for text...');
            const rates = moreRatesDiv.querySelectorAll('div.rateRow');
            rates.forEach((el) => {
                if (el.innerHTML.includes('Special Event Rate')) {
                    updateRoomDescription(el);
                }
            });
        }, 500); // wait 500ms after last mutation
    });

    // Setup observer on ratesList (or parent container)
    observer.observe(moreRatesDiv, {childList: true, subtree: true});

    moreRatesDiv.addEventListener('click', () => {
        console.log('Waiting for new rates to load...');
        // Nothing else is done here. The observer will detect DOM changes.
    });
};

addExclusiveRateSashToExtraRooms();

//Insert Sponsor Banner
// const includeSponsorBanner = async () => {
//     await utilities.waitForSelectorInDOM('header');
//     document.querySelector('header').insertAdjacentHTML(
//     'afterend',
//     `
//     <div class="sponsor-container">
//         <div class='sponsor-text'>
//             Proudly sponsored by
//         </div>
//         <div class='sponsor-text-space'></div>
//         <div class='sponsor-logo'>
//             <img src="https://dev-static.hotelsforhope.com/ares/site_configs/governors_ball_21-70366/img/logo-hilton.png" alt="Hilton logo">
//         </div>

//     </div>
//     `
//     );
// }
