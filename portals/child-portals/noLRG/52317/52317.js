import Portal from '../../../js/portal-setup.js';

let noLRGPortal = new Portal();

noLRGPortal.updateText('title', 'Bahrain International Circuit Rooms');

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
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/logo-dark.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.bahraingp.com/', 'href');
                noLRGPortal.createHTML('#language', '<a href="https://events.hotelsforhope.com/v6/support?siteId=' + noLRGPortal.site_id + '" target="_blank">Contact Us</a>', 'beforeBegin');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');