import NoLRGPortal from '../../../js/portal-setup.js';

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
noLRGPortal.translateText('.lrgTip', 'date prompt');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Official Hotel');
        noLRGPortal.translateText('.perNight', 'per night');
        noLRGPortal.translateText('.openMapBtn', 'open map');

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
        noLRGPortal.addCustomTag('Train Access', 48520);
        noLRGPortal.addCustomTag('Train Access', 224220);
        noLRGPortal.addCustomTag('Train Access', 234002);
        noLRGPortal.addCustomTag('Train Access', 1985366);
        noLRGPortal.addCustomTag('Train Access', 3341285);
        noLRGPortal.addCustomTag('Train Access', 228776);
        noLRGPortal.addCustomTag('Train Access', 199667);
        noLRGPortal.addCustomTag('Train Access', 32238);
        noLRGPortal.addCustomTag('Train Access', 224621);
        noLRGPortal.addCustomTag('Train Access', 234784);
        noLRGPortal.addCustomTag('Train Access', 172363);
        noLRGPortal.addCustomTag('Train Access', 32240);
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateHTML('header', `
                    <a class="logo" href="https://www.circuitzandvoort.nl/en/" target="_blank">
                        <img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/52918/images/logo.png" alt="Logo">
                    </a>
                    <div class="navCollapse" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse">
                        <span class="toggle-bar top-bar"></span> 
                        <span class="toggle-bar middle-bar"></span> 
                        <span class="toggle-bar bottom-bar"></span>
                    </div>
                    <span class="mobileNav">
                        <li>
                            <a ref="https://form.jotform.com/91966384058167" target="_blank"><span id="groupRequest">Group Request</span></a>
                        </li>
                        <li>
                            <a ref="https://events.hotelsforhope.com/v6/support?siteId=52918" target="_blank"><span id="contactUs">Contact Us</span></a>
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