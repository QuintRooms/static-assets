import BasePortal from '../../../js/build';
import SiteConfig from './103622-config';
import f1Styles from '../../../clients/formula_1/js/f1';
// import Distance from '../../../js/calculate-distance';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const { domain } = process.env;

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id, site_config.lodging.event_name, 'Las Vegas', '#000');

new ChildPortal();
// new Distance();

async function insertFooterText() {
    await utilities.waitForSelectorInDOM('.f1-policy');
    const footer_policy = document.querySelector('.f1-policy');

    // footer_policy.insertAdjacentHTML(
    //     'beforebegin',
    //     `
    //     <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quintrooms-logo-footer.png" alt="Quintrooms Logo" />
    //     <p class="f1-partner-text">Authorized Hotel Booking Partner of the F1 Las Vegas Grand Prix. </p>
    //     `
    // );

    footer_policy.innerHTML = `
    
    <img style="max-width: 175px; margin-top: 10px;" src="https://dev-static.hotelsforhope.com/ares/clients/formula_1/images/quint_logo_white.png" alt="Quint Logo" />
    <p class="f1-partner-text">Authorized Hotel Booking Partner of the F1 Las Vegas Grand Prix. </p>
    </br>
    <div class="f1-h4h-logo">
        <p class="f1-policy" style="margin-top: 35px; font-size: 12px;">The F1 FORMULA 1 logo, F1 logo, FORMULA 1, F1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX, PADDOCK CLUB, FORMULA 1 LAS VEGAS GRAND PRIX and related marks are trademarks of Formula One Licensing BV, a Formula 1 company. All rights reserved.</p>
    </div>
    `


}



async function setListenerForPolicyModal() {
    await utilities.waitForSelectorInDOM('.span.open-modal');

    const policies_lower = document.querySelector('#policies-fees');
    policies_lower.addEventListener('click', (e) => {
        document.querySelector('span.open-modal').click();
    });
}



async function hideFirstAmenity() {
    console.log('first amenity function was called and accessed')
    await utilities.waitForSelectorInDOM('#theBody');
    // console.log('first amenity function passed initial await selector')
    if (document.querySelector('.SinglePropDetail')) {
        // console.log('first amenity function passed singlePropDetail conditional')
        await utilities.waitForSelectorInDOM('.show-amenities');
        //select first Amenity element and set display to 'none'
        // document.querySelector('.show-amenities').style.visibility = 'hidden';
        document.querySelector('.show-amenities').innerHTML = '';
        // let clickEvent = new MouseEvent("click", {
        //     "view": window,
        //     "bubbles": true,
        //     "cancelable": false
        // });
        document.getElementById("show-more-or-less").click();
        // console.log('end of first amenity function')
    }  

}

async function updateSearchHotelsPagePricingAndMapMarker() {
    await utilities.waitForSelectorInDOM('#theBody');
    if (document.querySelector('.SearchHotels')) {
        await utilities.waitForSelectorInDOM('.full-stay');
        const propArr = document.querySelectorAll('.ArnProperty');
        propArr.forEach(prop => {

            const rateTotalElement = prop.querySelector('.full-stay')
            //Get Total For x Nights Text
            const rateTotalText = rateTotalElement.innerHTML;

            //Remove Total From Total For x Nights Text From Dom
            const indexOfF = rateTotalText.indexOf('f');
            const perNightText = rateTotalText.substring(indexOfF);
            rateTotalElement.innerHTML = perNightText;

            //Get Total String and replace the top price
            const totalRateString = rateTotalText.substring(0, rateTotalText.indexOf("f"));
            prop.querySelector('.arnUnit').innerHTML = totalRateString;
        });

        //Replace map marker text with Hotel Name
        await utilities.waitForSelectorInDOM('.ArnPropNameLink');
        const propertyNameText = document.querySelector('.ArnPropNameLink span').innerHTML;
        document.querySelector('.arnMapMarkerSpan').innerHTML = propertyNameText;
    }
}

async function updatePropDetailPricing() {
    await utilities.waitForSelectorInDOM('#theBody');
    if (document.querySelector('.SinglePropDetail')) {
        await utilities.waitForSelectorInDOM('.full-stay');
        const roomRateRowArr = document.querySelectorAll('.rateRow');

        roomRateRowArr.forEach(room => {
            const rateTotalElement = room.querySelector('.full-stay')
            //Get Total For x Nights Text
            const rateTotalText = rateTotalElement.innerHTML;

            //Remove Total From Total For x Nights Text From Dom
            const indexOfF = rateTotalText.indexOf('f');
            const perNightText = rateTotalText.substring(indexOfF);
            rateTotalElement.innerHTML = perNightText;

            //Get Total String and replace the top price
            const propPageNightlyTotalElement = room.querySelector('.SinglePropDetail .ArnNightlyRate strong');
            const totalRateString = rateTotalText.substring(0, rateTotalText.indexOf("f"));
            const propPageNightlyTotalText = propPageNightlyTotalElement.innerHTML;
            const propPageRateNightlyAmount = propPageNightlyTotalText.substring(1, propPageNightlyTotalText.indexOf("<"));
            const propPageRateNewString = propPageNightlyTotalText.replace(propPageRateNightlyAmount, totalRateString);
            propPageNightlyTotalElement.innerHTML = propPageRateNewString;

            //Get Room Descriptions
            const roomDescriptionElement = room.querySelector(".RoomDescription");
            const roomDescriptionUpdatedText = roomDescriptionElement.innerText.replace('Additional fees: ', '').replace('..', '.').replace('Hotel requires a 5-night minimum stay for this reservation.', '').replace('undefined', '');
            roomDescriptionElement.innerText = roomDescriptionUpdatedText;
        });
    }
}

updateSearchHotelsPagePricingAndMapMarker();
updatePropDetailPricing();
hideFirstAmenity();
insertFooterText();
setListenerForPolicyModal();


// async function rearrangeAllPricing() {
//     await utilities.waitForSelectorInDOM('#theBody');
//     if (document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail')) {
//         await utilities.waitForSelectorInDOM('.full-stay');
//         // const propArr = document.querySelectorAll('.ArnProperty');
//         // propArr.forEach(prop => {
//         // });
//         const roomRateRowArr = document.querySelectorAll('.rateRow');
//         // roomRateRowArr.forEach(room => {
//         // });
//         const rateTotalElement = document.querySelector('.full-stay')
//         //Get Total For x Nights Text
//         const rateTotalText = rateTotalElement.innerHTML;

//         //Remove Total From Total For x Nights Text From Dom
//         const indexOfF = rateTotalText.indexOf('f');
//         const perNightText = rateTotalText.substring(indexOfF);
//         rateTotalElement.innerHTML = perNightText;

//         //Get Total String and replace the top price
//         const totalRateString = rateTotalText.substring(0, rateTotalText.indexOf("f"));
//         if (document.querySelector('.SearchHotels')) {
//             document.querySelector('.arnUnit').innerHTML = totalRateString;
//         } else if (document.querySelector('.SinglePropDetail')) {
//             const propPageNightlyTotalElement = document.querySelector('.SinglePropDetail .ArnNightlyRate strong');
//             const propPageNightlyTotalText = propPageNightlyTotalElement.innerHTML;
//             const propPageRateNightlyAmount = propPageNightlyTotalText.substring(1, propPageNightlyTotalText.indexOf("<"));
//             const propPageRateNewString = propPageNightlyTotalText.replace(propPageRateNightlyAmount, totalRateString);
//             propPageNightlyTotalElement.innerHTML = propPageRateNewString;
//         }

//         // //Replace map marker text with Hotel Name
//         // const propertyNameText = document.querySelector('.ArnPropNameLink span').innerHTML;
//         // document.querySelector('.arnMapMarkerSpan').innerHTML = 'propertyNameText';
//     }

//     if (document.querySelector('.SearchHotels')) {
//         //Replace map marker text with Hotel Name
//         await utilities.waitForSelectorInDOM('.ArnPropNameLink');
//         const propertyNameText = document.querySelector('.ArnPropNameLink span').innerHTML;
//         document.querySelector('.arnMapMarkerSpan').innerHTML = propertyNameText;
//     }
// }