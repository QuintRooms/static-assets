import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Lollapalooza Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Lollapalooza Exclusive Rate');
noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');


jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
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
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/52975/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.lollapalooza.com/', 'href');
                noLRGPortal.createHTML('.logo', '<span class="event-dates">Jul 30 - Aug 2, 2020 - Grant Park, Chicago</span>', 'afterEnd');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');  