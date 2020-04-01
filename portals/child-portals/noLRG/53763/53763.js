import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Austin Marathon Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Austin Marathon Exclusive Rates');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');

        if (noLRGPortal.site_id == 59243){
            noLRGPortal.addCustomTag('<div>Opens August 2020</div>', 3979523)
        }
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/53763/images/logo-full.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://youraustinmarathon.com/', 'href');
                document.querySelector('.logo').insertAdjacentHTML('afterEnd', '<span class="event-dates">Feb 12-14, 2021 - Downtown Austin, TX</span>');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/53763/53763.css">');