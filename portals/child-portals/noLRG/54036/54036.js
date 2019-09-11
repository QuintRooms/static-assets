import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Special Olympics of Texas Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Special Olympics of Texas Rates');
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
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/54036/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'http://www.sotx.org/', 'href');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');
noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

// Mansfield
if (noLRGPortal.site_id == 53324 && noLRGPortal.page_name == 'search-results') {
    document.querySelector('#currentPropertyPage').insertAdjacentHTML('beforeBegin', '<h4 style="margin-left:15px;">Fieldhouse USA Mansfield</h4>');
}

// Frisco
if (noLRGPortal.site_id == 53323 && noLRGPortal.page_name == 'search-results') {
    document.querySelector('#currentPropertyPage').insertAdjacentHTML('beforeBegin', '<h4 style="margin-left:15px;">Fieldhouse USA Frisco</h4>');

}

// Grapevine
if (noLRGPortal.site_id == 53322 && noLRGPortal.page_name == 'search-results') {
    document.querySelector('#currentPropertyPage').insertAdjacentHTML('beforeBegin', '<h4 style="margin-left:15px;">Fieldhouse USA Grapevine</h4>');

}