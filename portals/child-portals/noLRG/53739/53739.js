import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Formula 1 Vietnam Grand Prix Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Formula 1 Vietnam Grand Prix Exclusive Rate');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/53739/images/logo-white.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/?siteid=53739', 'href');
                noLRGPortal.createHTML('#language', '<a href="https://form.jotform.com/92754977819176" target="_blank">Group Request</a><a href="https://events.hotelsforhope.com/v6/support?siteId=53739" target="_blank">Contact Us</a>', 'beforeBegin');
                document.querySelector('select#language').insertAdjacentHTML('beforeEnd', '<option value="vietnamese">Tiếng Việt (Vietnamese)</option>');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');