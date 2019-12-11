import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Rockweave Festival Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Rockweave Exclusive Rate');

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
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/51663/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/group-event?id=34885', 'href');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/51663/51663.css">');