import NoLRGPortal from '../../../js/portal-setup';

const no_l_r_g_portal = new NoLRGPortal();

no_l_r_g_portal.updateRoomDescription(
    '.RoomDescription',
    'Republic of Texas Motorcycle Rally Exclusive Rates'
);

jQuery(document).on('ratesReadyEvent', function () {
    setTimeout(() => {
        no_l_r_g_portal.ratesReadyEventMethods();
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    const element = document.querySelector(elementWaitingFor);
    const config = {attributes: false, childList: true, subtree: false};

    function callback(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                no_l_r_g_portal.updateAttribute(
                    '.logo img',
                    'https://static.hotelsforhope.com/portals/child-portals/noLRG/59465/images/logo-light.png',
                    'src'
                );
                no_l_r_g_portal.updateAttribute(
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
