import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription('.RoomDescription', 'Hotels for Hope Exclusive Rates');

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
                noLRGPortal.updateAttribute('.logo img', 'https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.hotelsforhope.com/', 'href');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/60188.css">');

function updateBgImage(){

    if(!document.querySelector('.RootBody')) return;

    document.querySelector('.RootBody').style.background = 'url(https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/banner.png) no-reapeat center center /cover';
}

updateBgImage();