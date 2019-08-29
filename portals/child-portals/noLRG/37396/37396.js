import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription('.RoomDescription', "Barrett-Jackson Rooms");

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
        noLRGPortal.addCustomTag('Host Hotel', 41188);

        if (noLRGPortal.site_id == 37396) {
            noLRGPortal.addCustomTag('Free Tram to Mandalay Bay', 564);
            noLRGPortal.addCustomTag('Free Tram to Mandalay Bay', 22619);
        }

        if (noLRGPortal.site_id == 37395) {
            noLRGPortal.addCustomTag('Shuttle to Mohegan Sun', 191384);
        }

        if (noLRGPortal.site_id == 49551) {
            noLRGPortal.addCustomTag('<div style="border-bottom: 1px solid rgba(255, 255, 255, .4);">Host Hotel</div><div>Complimentary Shuttle</div>', 20);
        }

    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = {
        attributes: false,
        childList: true,
        subtree: false
    };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.barrett-jackson.com/', 'href');
                document.querySelector('body').insertAdjacentHTML('beforeEnd', '<a href="https://www.grandcanyon.org/" class="side-banner" target="_blank"><img src="https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/leftbanner.jpg"></a>');
                observer.disconnect();

            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');