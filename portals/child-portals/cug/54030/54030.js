import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'Community Brands Rooms');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.event-rate', 'Exclusive Rates');
        cugPortal.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Exclusive Rate</span></span></div>', '.ArnProperty:first-child');
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

// if (document.querySelector('.WBLoginForm') || document.querySelector('.WBForgotPasswordForm')) {
//     window.location.href = 'https://www.communitybrands.com/';
//     document.querySelector('body').style.display = 'none';
// }