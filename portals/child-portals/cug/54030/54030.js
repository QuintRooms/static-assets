import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'Community Brands Rooms');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.event-rate', 'Exclusive Rate');
        // cugPortal.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Host Hotel</span></span></div>', '.SearchHotels .S16');         
        // cugPortal.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Host Hotel</span></span></div>', '.SearchHotels .S20');        
        // cugPortal.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Host Hotel</span></span></div>', '.SearchHotels .S33');    
        cugPortal.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Host Hotel</span></span></div>', '.ArnProperty#theArnProperty20578');    
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                cugPortal.updateAttribute('.logo img', 'https://dev-static.hotelsforhope.com/portals/child-portals/cug/54030/images/logo.png', 'src');
                cugPortal.updateAttribute('.logo', 'https://www.communitybrands.com/', 'href');

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');