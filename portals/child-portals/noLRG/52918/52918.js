import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Dutch Grand Prix Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Dutch Grand Prix Exclusive Rate');
noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Official Hotel');
        noLRGPortal.translateText('.perNight', 'per night');
        noLRGPortal.translateText('.openMapBtn', 'open map');
    }, 1);
});

noLRGPortal.translateText('#groupRequest', 'group request');
noLRGPortal.translateText('#contactUs', 'contact us');
noLRGPortal.translateText('#theMarketingOptInAjax label', 'marketing opt in');

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.circuitzandvoort.nl/en/', 'href');
                noLRGPortal.createHTML('#language', '<a class="hidden-xs" href="https://form.jotform.com/91966384058167" target="_blank"><span id="groupRequest">Group Request</span></a> <a class="hidden-xs" href="https://events.hotelsforhope.com/v6/support?siteId=' + noLRGPortal.site_id + '" target="_blank"><span id="contactUs">Contact Us</span></a>', 'beforeBegin');

                noLRGPortal.translateText('#slideit > label', 'support');
                noLRGPortal.translateText('#slideit > section > span', 'support');
                noLRGPortal.translateText('#slideit .tw div', 'email us');

                if (window.matchMedia('(max-width: 565px)').matches) {
                    noLRGPortal.updateText('#language .translateMe', 'Language');
                }

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');