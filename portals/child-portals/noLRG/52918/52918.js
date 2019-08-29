import NoLRGPortal from '../../../js/portal-setup.js';

// var moment = require('moment');
// moment().format();

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Dutch Grand Prix Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Dutch Grand Prix Exclusive Rate');
noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

noLRGPortal.translateText('#groupRequest', 'group request');
noLRGPortal.translateText('#contactUs', 'contact us');
noLRGPortal.translateText('#theMarketingOptInAjax label', 'marketing opt in');

noLRGPortal.translateText('#speakToRep', 'speak to rep');
noLRGPortal.translateText('#phoneCenterHours', 'phone center hours');
noLRGPortal.translateText('#weekdayHours', 'weekday hours');
noLRGPortal.translateText('#weekendHours', 'weekend hours');
noLRGPortal.translateText('#useForm', 'use support form');

noLRGPortal.translateText('.confirmationContainer .thankYou', 'thank you');
noLRGPortal.translateText('.confirmationContainer .congratsText', 'congrats');
noLRGPortal.translateText('.confirmationContainer .impact', 'impact');
noLRGPortal.translateText('.confirmationContainer .learnMore', 'use support form');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Partner Hotel');
        noLRGPortal.translateText('.perNight', 'per night');
        noLRGPortal.translateText('.openMapBtn', 'open map');

        noLRGPortal.addCustomTag('Train Access', 7319616);
        noLRGPortal.addCustomTag('Train Access', 24832);
        noLRGPortal.addCustomTag('Train Access', 276769);
        noLRGPortal.addCustomTag('Train Access', 199659);
        noLRGPortal.addCustomTag('Train Access', 31992);
        noLRGPortal.addCustomTag('Train Access', 3415520);
        noLRGPortal.addCustomTag('Train Access', 360867);
        noLRGPortal.addCustomTag('Train Access', 651049);
        noLRGPortal.addCustomTag('Train Access', 1701460);
        noLRGPortal.addCustomTag('Train Access', 801928);
        noLRGPortal.addCustomTag('Train Access', 284789);
        noLRGPortal.addCustomTag('Train Access', 482391);
        noLRGPortal.addCustomTag('Train Access', 48520);
        noLRGPortal.addCustomTag('Train Access', 410192);
        noLRGPortal.addCustomTag('Train Access', 420792);
        noLRGPortal.addCustomTag('Train Access', 1629992);
        noLRGPortal.addCustomTag('Train Access', 545746);
        noLRGPortal.addCustomTag('Train Access', 224220);
        noLRGPortal.addCustomTag('Train Access', 34167);
        noLRGPortal.addCustomTag('Train Access', 234002);
        noLRGPortal.addCustomTag('Train Access', 1985366);
        noLRGPortal.addCustomTag('Train Access', 237482);
        noLRGPortal.addCustomTag('Train Access', 3341285);
        noLRGPortal.addCustomTag('Train Access', 228776);
        noLRGPortal.addCustomTag('Train Access', 199667);
        noLRGPortal.addCustomTag('Train Access', 32238);
        noLRGPortal.addCustomTag('Train Access', 224621);
        noLRGPortal.addCustomTag('Train Access', 234784);
        noLRGPortal.addCustomTag('Train Access', 49597);
        noLRGPortal.addCustomTag('Train Access', 3344794);
        noLRGPortal.addCustomTag('Train Access', 3464848);
        noLRGPortal.addCustomTag('Train Access', 249512);
        noLRGPortal.addCustomTag('Train Access', 49589);
        noLRGPortal.addCustomTag('Train Access', 268763);
        noLRGPortal.addCustomTag('Train Access', 172363);
        noLRGPortal.addCustomTag('Train Access', 239319);
        noLRGPortal.addCustomTag('Train Access', 32240);
        noLRGPortal.addCustomTag('Train Access', 389168);
        noLRGPortal.addCustomTag('Train Access', 441274);
        noLRGPortal.addCustomTag('Train Access', 1155863);
        noLRGPortal.translateText('.customTag', 'train access');


        // if (window.matchMedia('(max-width: 565px)').matches) {
        //     if (!document.querySelector('#currentPropDisclaimer')) {
        //         document.querySelector('#currentPropertyPage').insertAdjacentHTML('afterBegin', '<p id="currentPropDisclaimer">By default, hotel options are displayed for the weekend of May 7th-10th, 2020. Formula 1®, and the FIA, have not confirmed these dates. Feel free to book with confidence as cancellations/modifications are allowed dependent on the FIA\'s ratified 2020 F1® Calendar.</p>');
        //     }
        // }

    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateHTML('header', `
                    <a class="logo" href="http://www.dutchgp.com/" target="_blank">
                        <img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/52918/images/logo.png" alt="Logo">
                    </a>
                    <div class="navCollapse" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse">
                        <span class="toggle-bar top-bar"></span> 
                        <span class="toggle-bar middle-bar"></span> 
                        <span class="toggle-bar bottom-bar"></span>
                    </div>
                    <span class="mobileNav">
                        <li>
                           <a href="https://form.jotform.com/91966384058167" target="_blank" id="groupRequest">Group Request</a>
                        </li>
                        <li>
                            <a href="https://events.hotelsforhope.com/v6/support?siteId=52918" target="_blank" id="contactUs">Contact Us</a>
                        </li>
                        <li>
                            <div id="language" class="languageContainer">
                                <div id=":0.targetLanguage" style="display: inline;">
                                    <select id="language" class="goog-te-combo" onchange="arnChangeTheme(this.value)">
                                        <option class="translateMe" selected="">Select Language</option>
                                        <option value="standard">English (United States)</option>
                                        <option value="dutch">Nederlands (Dutch)</option>
                                    </select>
                                </div>
                            </div>
                        </li>
                    </span>
                    `);

                noLRGPortal.translateText('#slideit > label', 'support');
                noLRGPortal.translateText('#slideit > section > span', 'support');
                noLRGPortal.translateText('#slideit .tw div', 'email us');
                noLRGPortal.translateText('header p', 'date prompt');

                // if (!document.querySelector('#theDatePrompt')) {
                //     document.querySelector('.logo').insertAdjacentHTML('afterEnd', '<p>By default, hotel options are displayed for the weekend of May 7th-10th, 2020. Formula 1®, and the FIA, have not confirmed these dates. Feel free to book with confidence as cancellations/modifications are allowed dependent on the FIA\'s ratified 2020 F1® Calendar.</p>');
                // }

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