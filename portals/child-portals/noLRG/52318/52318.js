import Portal from '../../../js/portal-setup.js';

let noLRGPortal = new Portal();

document.title = 'Hanoi Street Circuit Rooms';
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
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/52318/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.bahraingp.com/', 'href');
                noLRGPortal.createHTML('#language', `
                    <a href="https://events.hotelsforhope.com/v6/support?siteId=52318" target="_blank">Contact Us</a>
                    <div class="languageMask" id=":0.targetLanguage" onclick="showLanguageDropdown()">
                        <div class="country">
                            <span class="flag"><img src="https://events.hotelsforhope.com/appSkins/51659/v6/themes/standard/images/us-flag.png" alt="US Flag"></span>
                            <span class="languageText">English (United States)</span>
                        </div>
                        <div class="languageDropdown">
                            <div class="country" onclick="arnChangeTheme('vietnamese')">
                                <span class="flag"><img src="https://events.hotelsforhope.com/appSkins/51659/v6/themes/standard/images/vn-flag.png" alt="Vietnam Flag"></span>
                                <span class="languageText">Tiếng Việt (Vietnamese)</span>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/#15151E/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="i-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="#15151E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                        <path d="M4 10 L9 5.7 4.5 1" />
                    </svg>
                `, 'beforeBegin');

                function showLanguageDropdown() {
                    let languageDropdown = document.querySelector('.languageDropdown');
                    languageDropdown.classList.toggle('showDropdown');
                }

                showLanguageDropdown();
                
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');