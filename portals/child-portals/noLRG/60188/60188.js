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


noLRGPortal.updateAttribute('.RootBody', 'background-image: url(https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/banner.png)', 'style');


function showCoronavirusInfoBanner(){

    // add conditional here for landing page

    if(noLRGPortal.page_name !== 'landing-page') return;

    let body = document.querySelector('body')
    let banner = document.createElement('div');
    let content = document.createElement('div');
    let infoText = document.createElement('h1');
    let link = document.createElement('a');
    let closeBanner = document.createElement('button');

    closeBanner.classList.add('close-banner-button');
    banner.classList.add('info-banner');
    content.classList.add('message-content');
    link.classList.add('details-link');
    closeBanner.classList.add('close-alert');

    infoText.textContent =  'Travel Information:';
    link.textContent = 'COVID-19 Update';
    link.href = 'https://www.hotelsforhope.com/covid19/';
    link.setAttribute('target', '_blank');
    closeBanner.textContent = 'X';
    
    banner.appendChild(content);
    content.appendChild(infoText);
    content.appendChild(link);
    banner.appendChild(closeBanner);
    body.appendChild(banner)

    closeBanner.addEventListener('click', function(evt){
        banner.style.display = 'none';
    });

//  - - - - Styles - - - - 
    banner.style.color = '#fff'
    banner.style.display = 'flex';
    banner.style.alignItems = 'center';
    banner.style.justifyContent = 'space-between';
    banner.style.width = '100%';
    banner.style.height = 'auto';
    banner.style.backgroundColor = '#1A1A1A';
    banner.style.position = 'absolute';
    banner.style.top = '20%';
    banner.style.padding = '10px';
    banner.style.fontFamily = 'inherit';

    content.style.display = 'flex';
    content.style.flexDirection = 'row';
    content.style.alignItems = 'center';

    link.style.textDecoration = 'underline';
    link.style.color = '#fff';
    link.style.fontSize = '30px';
    link.style.margin = '5px';

    closeBanner.color = '#fff';
    closeBanner.style.backgroundColor = '#1A1A1A';
    closeBanner.style.border = 'none'
    closeBanner.style.fontSize = '30px';
    closeBanner.style.margin = '8px';
    

}

showCoronavirusInfoBanner();