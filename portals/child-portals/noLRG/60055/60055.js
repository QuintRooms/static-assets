import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription('.RoomDescription', 'A Day in the Vines Exclusive Rate');

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
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://adayinthevines.com/', 'href');

                document.querySelector('header').insertAdjacentHTML('beforeEnd', '<a class="stay22" target="_blank" href="https://www.stay22.com/embed/a-day-in-the-vines?hidebrandlogo=true&zoom=10">Find your Airbnb rental</a>');

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/' + noLRGPortal.site_id + '.css">');

function useLogoForVenueMapMarker() {
    let map_markers = document.querySelectorAll('.arn-green-marker-icon');

    if (!map_markers) return;

    map_markers.forEach((marker) => {
        marker.setAttribute('src', `https://static.hotelsforhope.com/portals/child-portals/noLRG/60055/images/favicon.png`);
    });
}

jQuery('#theBody').on('arnMapLoadedEvent', () => {
    useLogoForVenueMapMarker();
});