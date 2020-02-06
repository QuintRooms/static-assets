import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/54271/images/favicon.ico', 'href');

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
                cugPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/cug/54271/images/logo.png', 'src');
                cugPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/?siteid=' + cugPortal.site_id, 'href');
                cugPortal.updateText('#user_points_text_2', 'Points');
                if (document.querySelector('#commands')) {
                    document.querySelector('#commands').insertAdjacentHTML('afterBegin', '<a href="https://events.hotelsforhope.com/v6/register?siteid=54271&addPromoCode">Add Points</a>');

                    document.querySelector('header').insertAdjacentHTML('beforeEnd', '<div class="mobile-toggle">Menu</div>');
                    if (document.querySelector('.mobile-toggle')) {
                        document.querySelector('.mobile-toggle').addEventListener('click', function() {
                            document.querySelector('#AdminControls').classList.toggle('show-menu');
                        });
                    }
                }
                cugPortal.updateAttribute('.SendMeNewPasswordAction', 'Send New Password', 'value');
                cugPortal.updateText('.CreateAnAccountAction', 'Register');
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

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/cug/54271/54271.css">');