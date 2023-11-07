import BasePortal from '../../../js/build';
import SiteConfig from './90957-config';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();
const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    async init() {
        await this.addThirdPartyExclusiveStyling();
    }

    async addThirdPartyExclusiveStyling() {
        await utilities.waitForSelectorInDOM('.OnSale');
        const page_name = utilities.getPageName();
        if (page_name !== 'search-results') return;

        const contracted_props = document.querySelectorAll('#currentPropertyPage div.OnSale');

        console.log(contracted_props.length);

        async function update_tp_text() {
            await (contracted_props[0].querySelector('.SearchHotels div.originalPrice'));
            contracted_props.forEach((property) => {
                const original_price = property.querySelector('.SearchHotels div.originalPrice');
                console.log(original_price);
                const original_price_text = original_price.textContent;
                console.log(original_price_text);
                original_price.innerText = '3rd Party: ' + original_price_text;
                console.log(original_price);;
            });
        }
        update_tp_text();
    }
}
new ChildPortal();

// async function addThirdPartyRateText() {
//     await utilities.waitForSelectorInDOM('.originalPrice');
//     const page_name = utilities.getPageName();
//     if (page_name !== 'search-results') return;

//     // const original_price_elements = document.querySelectorAll('.SearchHotels div.originalPrice');
//     // console.log('original_price_elements: ' + original_price_elements);

//     // original_price_elements.forEach(original_price => {
//     //     console.log('original_price:' + original_price);
//     //     original_price.insertAdjacentHTML('beforebegin', '<div class="third-party-rate-span">Third Party Rate: </div>');
//     // });

//     original_price_elements.forEach((original_price) => {
//         const original_price_text = original_price.textContent;
//         console.log('original_price:' + original_price_text);
//         const price_parent_box = original_price.parentElement.parentElement;
//         console.log('priceparentbox' + price_parent_box);
//         price_parent_box.insertAdjacentHTML(
//             'afterBegin', 
//             `
//             <div class="third-party-orig-price">
//                 Third Party Rate: <span class="strike-through-price">${original_price_text}</span>
//             </div>
//             `
//             );
//     });
// }

// addThirdPartyRateText();



// addThirdPartyExclusiveStyling();

    // contracted_props.forEach((property) => {
    //     const original_price = property.querySelector('.SearchHotels div.originalPrice');
    //     const main_rate_box = property.querySelector('.mainRate');
    //     let tp_rate_container = document.createElement('div');
    //     let orig_strike_price = document.createElement('span');

    //     tp_rate_container.id = 'tp-rate-container';
    //     tp_rate_container.style.display = 'flex';
    //     tp_rate_container.style.flexDirection = 'row';
    //     tp_rate_container.innerHTML = '<span class="tp-text">3rd Party</span>';
    //     main_rate_box.prepend(tp_rate_container);
        
    //     orig_strike_price.classList.add("tp-text");
    //     const original_price_text = original_price.textContent;
    //     orig_strike_price.innerText = original_price_text;

    //     tp_rate_container.appendChild(orig_strike_price);
    // });
