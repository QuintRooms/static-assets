import NoLRGPortal from '../../../js/portal-setup';

const no_lrg_portal = new NoLRGPortal();

no_lrg_portal.updateRoomDescription(
    '.RoomDescription',
    'Republic of Texas Motorcycle Rally Exclusive Rates'
);

jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        no_lrg_portal.ratesReadyEventMethods();
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    const element = document.querySelector(elementWaitingFor);
    const config = {attributes: false, childList: true, subtree: false};

    function callback(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                no_lrg_portal.updateAttribute(
                    '.logo img',
                    'https://static.hotelsforhope.com/portals/child-portals/noLRG/59465/images/logo-white.png',
                    'src'
                );
                no_lrg_portal.updateAttribute(
                    '.logo',
                    'https://www.rotrally.com/',
                    'href'
                );

                observer.disconnect();
            }
        }
    }
    const observer = new MutationObserver(callback);
    observer.observe(element, config);
}

waitForElementToLoad('header');

document
    .querySelector('body')
    .insertAdjacentHTML(
        'beforeEnd',
        '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/59465/59465.css">'
    );
