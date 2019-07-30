import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'Room Steals');
cugPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/favicon.png', 'href');


jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.event-rate', 'Exclusive Rates');
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (document.querySelector('#AdminControlsContainer')) {
                    document.querySelector('#AdminControlsContainer').insertAdjacentHTML('afterBegin', '<a class="room-steals" href="https://roomsteals.com">Room Steals</a>');
                } else {
                    cugPortal.createHTML('header', '<a class="room-steals" href="https://hotels.roomsteals.com">Room Steals</a>', 'afterBegin');
                }

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

let script = document.createElement('script');
script.setAttribute('src', 'https://static.hotelsforhope.com/js/room-steals-provider.js');
document.head.appendChild(script);

function moveSearch() {

    // search stuff
    let searchContainer = document.querySelector('.ArnQuadSearchContainer');
    document.querySelector('.ArnSearchContainerMainDiv').insertAdjacentElement('afterBegin', searchContainer);
    let cityInput = document.querySelector('#city');
    document.querySelector('#CitySearchContainer').textContent = 'City';
    let checkIn = document.querySelector('#theCheckIn');
    let checkOut = document.querySelector('#theCheckOut');
    let rooms = document.querySelector('#rooms');
    let adults = document.querySelector('#adults');
    let sort = document.querySelector('#SortControlsContainer');

    // property stuff
    let propertyContainer = document.querySelector('#currentPropertyPage');
    let properties = propertyContainer.querySelectorAll('.ArnProperty');

    properties.forEach(function(element) {
        if (element.querySelector('.arnUnit')) {
            let price = element.querySelector('.arnUnit').textContent;
            let unitPrice = price.split('.')[0];
            price = unitPrice;
        }
    });


    document.querySelector('body').insertAdjacentHTML('beforeEnd', `
        <style>
            .ArnPropNameLink{
                font-size: 18px;
            }
            .SearchHotels .ArnRateCell{
                position: static;
            }
            .SearchHotels .ArnPropAddress{
                display: none;
            }
            .SearchHotels .ArnPropAddress, .ArnGoCitySearch, .ArnGoLandmarkSearch, .ArnGoAirportSearch, .ArnSearchHotelsImg, .ArnSearchHotelsImg + b, .ArnSecondarySearchOuterContainer, #HotelNameContainer{
                display: none;
            }

        </style>

    `);
}