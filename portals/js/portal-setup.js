export default class Portal {
    constructor(site_id, page_name) {
        this.site_id = site_id;
        this.page_name = page_name;

        this.init();
    }

    init() {
        this.getSiteId();
        this.getPageName();
        this.ieForEachPolyfill();
    };

    getSiteId() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
        return this.site_id;
    }

    getPageName() {
        let bodyClasses = document.querySelector('body');

        if (bodyClasses.classList.contains('SearchHotels')) {
            this.page_name = 'search-results';
            return;
        }

        if (bodyClasses.classList.contains('SinglePropDetail')) {
            this.page_name = 'property-detail';
            return;
        }
        if (bodyClasses.classList.contains('CheckOutForm')) {
            this.page_name = 'checkout';
            return;
        }
        if (bodyClasses.classList.contains('ConfirmationForm')) {
            this.page_name = 'confirmation';
            return;
        }
        if (bodyClasses.classList.contains('RootBody')) {
            this.page_name = 'landing-page';
            return;
        }
        if (bodyClasses.classList.contains('WBFaq')) {
            this.page_name = 'faq';
            return;
        }
        if (bodyClasses.classList.contains('WBTermsAndConditions')) {
            this.page_name = 'terms-conditions';
            return;
        }
        if (bodyClasses.classList.contains('WBPrivacyPolicy')) {
            this.page_name = 'privacy-policy';
            return;
        }
        if (bodyClasses.classList.contains('WBRateGuaranteeForm2')) {
            this.page_name = 'lrg-page';
            return;
        }
    }

    ieForEachPolyfill() {
        if ('NodeList' in window && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function(callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }
    }

    async fetchAsset(url) {
        let response = await fetch(url);
        let data = await response.text();
        return data;
    }

    insertAssets() {
        // insert html
        if (document.querySelector('header')) {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/header.html')
                .then(data => document.querySelector('header').insertAdjacentHTML('afterBegin', data))
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });

            this.fetchAsset('https://static.hotelsforhope.com/portals/html/supportSlider.html')
                .then(data => document.querySelector('header').insertAdjacentHTML('afterEnd', data))
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'faq') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/faq.html')
                .then(data => document.querySelector('.WBFaq .ArnSubPage').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'privacy-policy') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/privacyPolicy.html')
                .then(data => document.querySelector('.WBPrivacyPolicy .ArnSubPage').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'terms-conditions') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/termsAndConditions.html')
                .then(data => document.querySelector('.WBTermsAndConditions .ArnSubPage').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'confirmation') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/confirmationInfoSubHeader.html')
                .then(data => document.querySelector('.confirmationPage').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }
    }

    // insert child script
    async insertChildAssets() {
        // stylesheets
        document.querySelector('header').insertAdjacentHTML('beforeBegin', '<link href="https://static.hotelsforhope.com/portals/styles/styles.css" rel="stylesheet"><link href="https://static.hotelsforhope.com/portals/child-portals/' + this.site_id + '/' + this.site_id + '.css" rel="stylesheet">');
    }

    updateAttribute(attribute, argument, selector) {
        let arr = document.querySelectorAll(selector);
        arr.forEach(function(element, index) {
            element.setAttribute(attribute, argument);
        });
    }

    addCustomTag(text, propId) {
        if (document.querySelector('#theArnProperty' + propId + ' .ArnPropThumb > .customTag')) {} else if (document.querySelector('#theArnProperty' + propId)) {
            let propertyThumbnail = document.querySelector('#theArnProperty' + propId + ' .ArnPropThumb');
            propertyThumbnail.insertAdjacentHTML('afterbegin', '<div class="customTag">' + text + '</div>');
        }
    }

    updateText(selector, text) {
        let classList = document.querySelectorAll(selector);
        classList.forEach(function(element, index) {
            element.textContent = text;
        });
    }

    updateHTML(selector, html) {
        let classList = document.querySelectorAll(selector);
        if (classList) {
            classList.forEach(function(element, index) {
                element.innerHTML = html;
            });
        }
    }

    createHTML(html, parentToAppendTo, location) {
        let parent = document.querySelector(parentToAppendTo);
        if (parent) {
            parent.insertAdjacentHTML(location, html);
        }
    }

    appendToParent(childSelector, parentSelector) {
        let childElement = document.querySelector(childSelector);
        let parentElement = document.querySelector(parentSelector);

        if (childElement && parentElement) {
            parentElement.appendChild(childElement);
        }
    }

    accordion(openElement, contentElement) {
        let content = document.querySelector(contentElement);
        let open = document.querySelector(openElement);
        if (open && content) {
            content.classList.add('hideAccordion');
            open.addEventListener('click', function() {
                content.classList.toggle('hideAccordion');
            });
        }
    }

    createMapButton() {
        if (this.page_name === 'search-results' && document.querySelector('.openMapBtn') === null) {
            document.querySelector('#Properties').insertAdjacentHTML('beforeBegin', '<div class="openMapBtn"></div>');
            let map = document.querySelector('.ArnRightExtraContainer');
            document.querySelector('.openMapBtn').addEventListener('click', function() {
                let mapBtn = document.querySelector('.openMapBtn');
                mapBtn.classList.toggle('closeMapBtn');
                map.classList.toggle('showMap');
            });
        }
    }

    roomCountThreshhold() {
        let count = document.querySelectorAll('.roomCount strong');
        count.forEach(function(element, index) {
            let number = element.textContent;
            if (number > 5) {
                element.parentNode.style.display = 'none';
            }
        });
    }

    collapseSearchBy(openSelector, collapsedSelector) {
        if (this.page_name === 'search-results') {
            let arr = document.querySelectorAll(collapsedSelector);
            arr.forEach(function(element, index) {
                element.style.display = 'none';
            });
            document.querySelector(openSelector).style.display = 'block';
        }
    }

    updateRoomDescription(selector, text) {
        if (document.querySelector('.SinglePropDetail')) {
            let original = document.querySelectorAll(selector);
            original.forEach(function(element, index) {
                let rateDate = document.querySelector('.ArnRateFromTo');
                element.removeChild(rateDate);
                let updated = element.innerHTML.replace('Special Event Rate', '<span style="font-weight:bold; color:#111; font-size: 17px;">' + text + '</span>');
                element.innerHTML = updated;
            });
        }
    }

    removeSavingsLessThan10() {
        if (this.page_name === 'property-detail' && document.querySelector('.bestPrice .originalPrice')) {
            let savings = document.querySelector('.bestPrice .originalPrice').getAttribute('amount');
            savings = savings.replace(/[^a-zA-Z0-9]/g, "");
            if (savings < 1000) {
                document.querySelector('.bestPrice .percentSavings').style.display = 'none';
            }
            return false;
        }
        if (this.page_name === 'search-results') {
            let savingsArr = document.querySelectorAll('.yourSavings');
            savingsArr.forEach(function(element) {
                let savings = element.textContent;
                savings = savings.replace(/\D+/g, '');
                if (savings < 1000) {
                    element.parentElement.style.display = 'none';
                }
            });
        }
    }

    donationAmount() {
        if (document.querySelector('.ConfirmationForm')) {
            let nights = document.querySelector('.numberOfNights th').textContent.split(' ')[0];
            document.querySelector('.topRoomFunding').innerHTML = '<p>Your reservation just generated an <span>$ ' + nights * 2 + ' donation</span> to <span>RoomFunding</span>.  And that\'s at no cost to you.</p>';
        }
    }

    searchHotelsExclusiveSash(sashHTML) {
        let eventProp = document.querySelectorAll('.SearchHotels .S16');
        eventProp.forEach(function(element, index) {
            if (element && element.querySelector('.sash') === null) {
                element.insertAdjacentHTML('afterBegin', sashHTML);
            }
        });
    }

    singlePropExclusiveTag(tagHTML) {
        let singlePropLRG = document.querySelectorAll('.SinglePropDetail .SB16 .ArnNightlyRate');
        singlePropLRG.forEach(function(element) {
            if (element && element.querySelector('.exclusiveRate') === null) {
                element.insertAdjacentHTML('afterbegin', tagHTML);
            }
        });
    }
    createParentPortal() {
        this.insertAssets();
        this.updateHTML('.WBSupportForm .ArnSupportChatTable tr td', '<p>If you would like to speak with a representative, please call <strong>512-691-9555.</strong></p><strong>Phone Center Hours</strong><ul><li>Call Center Weekday Hours: 8:00 AM - 5:30 PM CST</li><li> Call Center Weekend Hours: Closed</li></ul><p>Or, please use the form below, and one of our consultants will respond promptly.</p>');

        // Checkout form input validation
        this.updateAttribute('type', 'email', '#theEmailAddressAjax input');

        // shows numpad on ios
        this.updateAttribute('inputmode', 'numeric', '.CheckOutForm #theCountryCode');
        this.updateAttribute('inputmode', 'numeric', '.CheckOutForm #theAreaCode');
        this.updateAttribute('inputmode', 'numeric', '.CheckOutForm #thePhoneNumber');

        this.updateAttribute('value', 'Update Search', '.SearchHotels #theSubmitButton');
        this.updateAttribute('value', 'Update Search', '#theOtherSubmitButton');
        this.updateText('.modifySearch', 'Update Search');

        this.appendToParent('.ConfirmationForm .confirmMessageContainer.desktopVersion', '.ConfirmationForm .GuestForms');
        this.appendToParent('.confirmMessageContainer.mobileVersion', '.ConfirmationForm .PaymentPolicies');
        this.appendToParent('.ConfirmationForm .meetH4H.desktopVersion', '.ConfirmationForm .GuestForms');
        this.appendToParent('.ConfirmationForm .meetH4H.mobileVersion', '.ConfirmationForm .PaymentPolicies');
        this.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
        this.appendToParent('.lrgTipContainer', '#theDatePrompt');

        this.createHTML('<link id="favicon" rel="shortcut icon" href="https://static.hotelsforhope.com/portals/images/h4h-fav.ico">', 'head', 'beforeend');
        this.accordion('.PropertyAmenities legend', '.ArnAmenityContainer');
        this.donationAmount();
    }

    ratesReadyEventMethods() {
        this.updateText('.ArnShowRatesLink', 'Book Rooms');
        this.updateText('a.bookRoom', 'Book Rooms');
        this.updateText('a.holdRoom', 'Hold Rooms');
        this.updateAttribute('target', '_blank', '.SearchHotels .ArnShowRatesLink');

        this.collapseSearchBy('.lblNearbyCities', '.lblNearbyCities + select');
        this.collapseSearchBy('.lblCurrency', '.lblCurrency + select');
        this.collapseSearchBy('.lblAmenities', '#AmentitiesContainer .ArnSearchField div');
        this.collapseSearchBy('.lblPropertyType', '#PropertyTypesContainer .ArnSearchField div');
        this.collapseSearchBy('.lblRating', '#PropertyClassesContainer .ArnSearchField div');

        this.roomCountThreshhold();
        this.removeSavingsLessThan10();
        this.createMapButton();

        this.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate">Exclusive Rate</span></div>');
        this.singlePropExclusiveTag('<div class="exclusiveRate">Exclusive Rate</div>');
    }
}

class LRGPortal extends Portal {
    insertLRGAssets() {
        if (this.page_name === 'lrg-page') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/lrgForm.html')
                .then(data => document.querySelector('#theWBRateGuaranteeForm2Body').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }
        if (document.querySelector('#datePromptContainer')) {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/datePrompt.html')
                .then(data => document.querySelector('#datePromptContainer').innerHTML = data)
                .then(() => {
                    Portal.prototype.appendToParent('.lrgTipContainer', '#theDatePrompt');
                })
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }
    }

    createLRGPortal() {
        this.insertLRGAssets();
        this.updateText('.WBRateGuaranteeForm > h1', 'Meet the Lowest Rate Guarantee');
        this.updateAttribute('href', 'https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=' + this.site_id + '&theme=standard', '.tooltipLink');
    }

    ratesReadyEventMethods() {
        this.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate">Lowest Rate Guarantee <span class="hoverTooltip">i</span><div class="tooltipContainer"><span class="tooltipClose">X</span><p>This rate is protected by our Lowest Rate Guarantee. Find a lower rate and our partners at Hotels for Hope will not only match it, but will throw in an extra $10. <br><a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=51107&theme=standard" target="_blank" class="tooltipLink">Learn more</a></p></div><div class="svg-container"><div class="triangle-bottomright"></div><svg class="svg-badge" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-38 0 512 512.00142"> <g> <path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " style=" stroke:none;fill-rule:nonzero;fill:rgb(255,255,255);fill-opacity:1;"/> </g> </svg> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg"> <path class="checkmark__check" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" d="M8 14l4 4 8-9"/></svg> </div></span></span></div>');
        this.singlePropExclusiveTag('<div class="exclusiveRate"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-38 0 512 512.00142"><g id="surface1"><path d="M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"/><path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"/></g></svg>&nbsp;Lowest Rate Guarantee <span class="hoverTooltip">i</span><div class="tooltipContainer"><span class="tooltipClose">X</span><p>This rate is protected by our Lowest Rate Guarantee. Find a lower rate and our partners at Hotels for Hope will not only match it, but will throw in an extra $10. <br><a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=50055&theme=standard" target="_blank" class="tooltipLink">Learn more</a></p></div></div>');
    }
}

class NoLRGPortal extends Portal {
    ratesReadyEventMethods() {
        this.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate">Exclusive Rate</span></div>');
        this.singlePropExclusiveTag('<div class="exclusiveRate">Exclusive Rate</div>');
    }
}

let portal = new Portal();
portal.createParentPortal();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        portal.ratesReadyEventMethods();
    }, 1);
});

let header = document.querySelector('header');
let config = { attributes: false, childList: true, subtree: false };

function callback(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.addedNodes[0].className === 'logo') {
            portal.insertChildAssets();
            observer.disconnect();
        }
    }
};

let observer = new MutationObserver(callback);
observer.observe(header, config);