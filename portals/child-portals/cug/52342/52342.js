import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'Room Steals');
cugPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/favicon.png', 'href');
cugPortal.updateText('#theMarketingOptInAjax label', 'I want to receive the latest information by email from Room Steals including event reminders, relevant news, surveys, offers, and promotions.');

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
                if (document.querySelector('#AdminControlsContainer')) {
                    document.querySelector('#AdminControlsContainer').insertAdjacentHTML('afterBegin', '<a class="room-steals" href="https://roomsteals.com">Room Steals</a>');
                } else {
                    cugPortal.createHTML('header', '<a class="room-steals" href="https://hotels.roomsteals.com">Room Steals</a>', 'afterBegin');
                }

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

let script = document.createElement('script');
script.setAttribute('src', 'https://static.hotelsforhope.com/js/room-steals-provider.js');
document.head.appendChild(script);

if (document.querySelector('.WBLoginForm') || document.querySelector('.WBForgotPasswordForm')) {
    window.location.href = 'https://roomsteals.com/login';
    document.querySelector('body').style.display = 'none';
}