import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription('.RoomDescription', "Life is Beautiful Exclusive Rate");

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
        noLRGPortal.addCustomTag('Host Hotel', 41188);
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = {
        attributes: false,
        childList: true,
        subtree: false
    };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/51662/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://lifeisbeautiful.com', 'href');

                if(noLRGPortal.site_id == 51662){
                    document.querySelector('header').insertAdjacentHTML('beforeEnd', '<h2>Artists & Vendors</h2>');
                }

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

// Custom Banner Ad
noLRGPortal.createHTML('.SearchHotels .ArnLeftSearchContainer', '<a class="ad-unit" target="_blank" href="http://roomfunding.com/projects/detail/help-all-students-succeed"><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51662/images/ad.png"></a>', 'beforeEnd');