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


    let body = document.body;
    let banner = document.createElement('div');
    let content = document.createElement('div');
    let infoText = document.createElement('h1');
    let link = document.createElement('a');
    let closeBanner = document.createElement('button');
    let linkImage = document.createElement('svg');

    linkImage = '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" style= "transform: scale(0.3)"><path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class=""></path></svg>';

    closeBanner.classList.add('close-banner-button');
    banner.classList.add('info-banner');
    content.classList.add('message-content');
    link.classList.add('details-link');
    closeBanner.classList.add('close-alert');
    infoText.textContent =  'Travel Information:';
    link.innerHTML = `<h1>COVID-19</h1> ${linkImage}`;
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
    banner.style.order = '-1';
    banner.style.top = '20%';
    banner.style.padding = '10px';
    banner.style.fontFamily = 'inherit';
    content.style.fontSize = '20px';


    content.style.display = 'flex';
    content.style.flexDirection = 'row';
    content.style.alignItems = 'center';


    infoText.style.margin = '0px';

    link.style.textDecoration = 'underline';
    link.style.color = '#fff';
    link.style.margin = '5px';

    closeBanner.color = '#fff';
    closeBanner.style.backgroundColor = '#1A1A1A';
    closeBanner.style.border = 'none'
    closeBanner.style.margin = '8px';
}

showCoronavirusInfoBanner();