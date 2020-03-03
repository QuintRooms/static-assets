import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/51474/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.breederscup.com/', 'href');

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/51474/51474.css">');

function useLogoForVenueMapMarker() {
    let map_markers = document.querySelectorAll('.arn-green-marker-icon');

    if (!map_markers) return;

    map_markers.forEach((marker) => {
        marker.setAttribute('src', `https://static.hotelsforhope.com/portals/child-portals/noLRG/51474/images/logo.png`);
    });
}

jQuery('#theBody').on('arnMapLoadedEvent', () => {
    useLogoForVenueMapMarker();
});