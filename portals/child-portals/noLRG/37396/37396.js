import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription('.RoomDescription', 'Barrett-Jackson Rooms');

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
            noLRGPortal.addCustomTag('<div style="border-bottom: 1px solid rgba(255, 255, 255, .4);">Hilton Hotel</div><div>Complimentary Shuttle</div>', 16460);
            addHiltonTags();
            noLRGPortal.updateText('.event-rate', 'Exclusive Barrett-Jackson Rates');
        }


        if (noLRGPortal.site_id == 49552) {
            noLRGPortal.addCustomTag('<div>New Marriott Open 2020</div>', 3486114);
            noLRGPortal.updateText('.event-rate', 'Exclusive Barrett-Jackson Rates');
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
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.barrett-jackson.com/', 'href');
                document.querySelector('body').insertAdjacentHTML('beforeEnd', '<a href="https://www.grandcanyon.org/" class="side-banner" target="_blank"><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/leftbanner.jpg"></a>');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

function addHiltonTags() {
    let hiltonPropIds = [236618, 16, 31, 21, 12937, 267891, 257288, 1220075, 1268837, 175722, 65, 188905, 16460, 16343, 12715, 71, 16797, 16417, 277232, 16454, 16470, 165275, 182101, 659056, 3349002, 50725, 282039, 16523, 1269346, 1367176, 1239970, 272052, 188634, 3469078, 378245, 3309155, 277416, 2302525, 3167140, 16837, 859570, 215220, 2048227, 13770, 13499, 67, 20050, 20252, 415537, 6, 619759, 24, 446580, 25, 3349688, 2048225, 1243044, 1758007, 851719, 20132, 180778, 244634, 20130, 277730, 277731, 187648, 20133, 20164, 262395, 19706, 3011273, 16452, 220004, 2048226, 3468713];

    hiltonPropIds.forEach(function(prop) {
        if (document.querySelector('#theArnProperty' + prop)) {
            document.querySelector('#theArnProperty' + prop + ' .ArnContainer').style.background = 'url("https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/hilton-logo.svg") no-repeat 100% 25px / 65%';

            if (window.matchMedia("(max-width: 500px)").matches) {
                document.querySelector('#theArnProperty' + prop + ' .ArnContainer').style.background = 'url("https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/hilton-logo.svg") 0 85% / 100% no-repeat';
            }

            noLRGPortal.addCustomTag('<div style="border-bottom: 1px solid rgba(255, 255, 255, .4);">Hilton Hotel</div>', prop);
            // if (document.querySelector('#theArnProperty' + prop + '> .sash')) {
            //     document.querySelector('#theArnProperty' + prop + '> .sash .event-rate').textContent = 'Hilton Deals';
            // }
        }
    });
}

function getPropIds() {
    let props = document.querySelectorAll('.propId');
    let propIds = [];
    props.forEach(function(prop) {
        propIds.push(prop.textContent);
    });
    console.log(propIds);
}

// getPropIds();