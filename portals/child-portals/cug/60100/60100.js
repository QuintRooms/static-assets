import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                cugPortal.updateAttribute('.logo', 'https://www.stay22.com/', 'href');
                cugPortal.appendToParent('.MemberAuthenticated .logo', '.MemberAuthenticated #AdminControlsContainer')
                cugPortal.updateAttribute('.logo img', 'https://dev-static.hotelsforhope.com/portals/child-portals/cug/60100/images/logo.svg', 'src');

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://dev-static.hotelsforhope.com/portals/child-portals/cug/60100/60100.css">');

cugPortal.updateText('.CreateAnAccountAction', 'Register');