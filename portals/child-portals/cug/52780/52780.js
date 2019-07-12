import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'C3 Travels');

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

                cugPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/logo.png', 'src');
                cugPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/?siteid=' + cugPortal.site_id, 'href');

                let logo = document.querySelector('.logo');
                let adminControls = document.querySelector('#AdminControlsContainer');
                if (adminControls) {
                    adminControls.insertAdjacentElement('afterBegin', logo);
                }

                if (document.querySelector('.MemberAuthenticated')) {
                    document.querySelector('#AdminControlsContainer').insertAdjacentElement('afterBegin', logo);
                }

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');