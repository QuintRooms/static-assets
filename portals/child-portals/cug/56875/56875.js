import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/favicon.png', 'href');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.event-rate', 'Exclusive Rates');
        cugPortal.updateText('.creditsLabel', 'Points Applied:');

        if (document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail')) {
            removeCurrencyFromCredits();
        }
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                cugPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/logo.svg', 'src');
                cugPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/?siteid=' + cugPortal.site_id, 'href');

                if (document.querySelector('#commands')) {
                    document.querySelector('header').style.display = 'none';
                    document.querySelector('#AdminControlsContainer').insertAdjacentElement('afterBegin', document.querySelector('.logo'));
                }
                cugPortal.updateAttribute('.SendMeNewPasswordAction', 'Send New Password', 'value');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

function removeCurrencyFromCredits() {
    let credits = document.querySelectorAll('.creditsValue');
    if (credits) {
        credits.forEach(function(credit) {
            credit.textContent = credit.textContent.split(" ")[0];
        });
    }
}
// removeCurrencyFromCredits();