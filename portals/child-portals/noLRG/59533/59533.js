import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Dutch Grand Prix Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Dutch Grand Prix Exclusive Rate');
noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');
noLRGPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/51108/images/favicon.png', 'href');


function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateHTML('header', `
                    <a class="logo" href="https://f1miamigp.com/" target="_blank">
                        <img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/59533/images/logo.png" alt="Logo">
                    </a>
                    <div class="navCollapse" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse">
                        <span class="toggle-bar top-bar"></span> 
                        <span class="toggle-bar middle-bar"></span> 
                        <span class="toggle-bar bottom-bar"></span>
                    </div>
                    <span class="mobileNav">
                        <li>
                            <a href="https://events.hotelsforhope.com/v6/support?siteId=59533" target="_blank" id="contactUs">Contact Us</a>
                        </li>
                    </span>
                    `);

                function openMobileNav() {
                    let navCollapse = document.querySelector('.navCollapse');
                    if (navCollapse) {
                        navCollapse.addEventListener('click', function() {
                            document.querySelector('.mobileNav').classList.toggle('showNav');
                        });
                    }
                }
                openMobileNav();

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

if (noLRGPortal.language == 'dutch') {
    document.querySelector('body').insertAdjacentHTML('beforeEnd',
        `
            <style>
                .advancedIcon {
                    display: inline-block;
                    padding: 5px 0;
                }
                .SinglePropDetail .OnSale .bestPrice .yourRateAmount{
                    display: inline;
                }

                @media only screen and (max-width: 800px) {
                    .SinglePropDetail .bestPrice .percentSavings{
                        top: -54px !important;
                    }   
                    .SinglePropDetail .yourRateAmount{
                        text-align: center;
                        width: 100% !important;
                    }
                }
            </style>
        `);
}

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/59533/59533.css">');