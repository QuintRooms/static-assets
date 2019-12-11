import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

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
                cugPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/cug/52863/images/logo.png', 'src');
                cugPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/static-index.html?siteid=52863', 'href');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

function redirectIfNotAuthenticated() {
    if (document.querySelector('.MemberNotAuthenticated') && document.querySelector('.indexPage')) {
        window.location.href = 'https://events.hotelsforhope.com/v6/login?siteid=52863';
    }

    if (document.querySelector('.RootBody')) {
        setTimeout(function(){
            window.location.href = 'https://events.hotelsforhope.com/v6/index?siteid=52863';
        }, 500);
    }
}

redirectIfNotAuthenticated();

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/cug/52863/52863.css">');