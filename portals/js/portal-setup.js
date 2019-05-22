class Portal {

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

        // insert scripts
        let script = document.createElement('script');
        script.src = 'https://static.hotelsforhope.com/portals/' + this.site_id + '/' + this.site_id + '.js';
        document.querySelector('body').appendChild(script);

        // parent stylesheet
        document.querySelector('header').insertAdjacentHTML('beforeBegin', '<link href="https://static.hotelsforhope.com/portals/styles/styles.css" rel="stylesheet">');
        // child stylesheet
        document.querySelector('header').insertAdjacentHTML('beforeBegin', '<link href="https://static.hotelsforhope.com/portals/' + this.site_id + '/' + this.site_id + '.css');

        // insert html
        if (document.querySelector('header')) {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/header.html')
                .then(data => document.querySelector('header').insertAdjacentHTML('afterBegin', data))
                .catch(function() {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });

            this.fetchAsset('https://static.hotelsforhope.com/portals/html/supportSlider.html')
                .then(data => document.querySelector('header').insertAdjacentHTML('afterEnd', data))
                .catch(function() {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'faq') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/faq.html')
                .then(data => document.querySelector('.WBFaq .ArnSubPage').innerHTML = data)
                .catch(function() {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'privacy-policy') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/privacyPolicy.html')
                .then(data => document.querySelector('.WBPrivacyPolicy .ArnSubPage').innerHTML = data)
                .catch(function() {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'terms-conditions') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/termsAndConditions.html')
                .then(data => document.querySelector('.WBTermsAndConditions .ArnSubPage').innerHTML = data)
                .catch(function() {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'confirmation') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/confirmationInfoSubHeader.html')
                .then(data => document.querySelector('.confirmationPage').innerHTML = data)
                .catch(function() {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }
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
        if (this.page_name === 'property-detail') {
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
                if (element.querySelector('.percentSavings')) {
                    let percentSavings = element.querySelector('.percentSavings').textContent;
                    element.querySelector('.percent-off').insertAdjacentHTML('afterBegin', percentSavings);

                }
                if (element.querySelector('.creditsValue')) {
                    let yourSavings = element.querySelector('.creditsValue').textContent;
                    element.querySelector('.yourSavings').insertAdjacentHTML('afterBegin', ' (Save ' + yourSavings + ')');
                }
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
}

class LRGPortal extends Portal {
    setLowestRateURL() {
        let tooltipURL = document.querySelector('.tooltipLink');
        tooltipURL.setAttribute('href', 'https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=' + this.site_id + '&theme=standard');
    }

    rateGuaranteePage() {
        let eventRateGuarantee = document.querySelector('body.WBRateGuaranteeForm2');
        if (eventRateGuarantee) {
            document.querySelector('.WBRateGuaranteeForm > h1').textContent = 'Meet the Lowest Rate Guarantee';
            document.title = 'Lowest Rate Guarantee';
        }
    }

    insertLRGForm() {
        if (this.page_name === 'lrg-page') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/lrgForm.html')
                .then(data => document.querySelector('#theWBRateGuaranteeForm2Body').innerHTML = data)
                .catch(function() {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }
    }
}

class noLRGPortal extends Portal {

}

let portal = new Portal();
portal.insertAssets();
portal.updateHTML('.WBSupportForm .ArnSupportChatTable tr td', '<p>If you would like to speak with a representative, please call <strong>512-691-9555.</strong></p><strong>Phone Center Hours</strong><ul><li>Call Center Weekday Hours: 8:00 AM - 5:30 liM CST</li><li> Call Center Weekend Hours: Closed</li></ul><p>Or, please use the form below, and one of our consultants will respond promptly.</p>');

portal.appendToParent('.ConfirmationForm .confirmMessageContainer.desktopVersion', '.ConfirmationForm .GuestForms');
portal.appendToParent('.confirmMessageContainer.mobileVersion', '.ConfirmationForm .PaymentPolicies');
portal.appendToParent('.ConfirmationForm .meetH4H.desktopVersion', '.ConfirmationForm .GuestForms');
portal.appendToParent('.ConfirmationForm .meetH4H.mobileVersion', '.ConfirmationForm .PaymentPolicies');
portal.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
portal.appendToParent('.lrgTipContainer', '#theDatePrompt');

portal.createHTML('<link rel="shortcut icon" href="https://static.hotelsforhope.com/portals/images/h4h-fav.ico">', 'head', 'beforeend');
portal.accordion('.PropertyAmenities legend', '.ArnAmenityContainer');
portal.donationAmount();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        portal.updateText('.ArnShowRatesLink', 'Book Rooms');
        portal.updateText('a.bookRoom', 'Book Rooms');
        portal.updateText('a.holdRoom', 'Hold Rooms');

        portal.collapseSearchBy('.lblNearbyCities', '.lblNearbyCities + select');
        portal.collapseSearchBy('.lblCurrency', '.lblCurrency + select');
        portal.collapseSearchBy('.lblAmenities', '#AmentitiesContainer .ArnSearchField div');
        portal.collapseSearchBy('.lblPropertyType', '#PropertyTypesContainer .ArnSearchField div');
        portal.collapseSearchBy('.lblRating', '#PropertyClassesContainer .ArnSearchField div');

        portal.roomCountThreshhold();
        portal.removeSavingsLessThan10();
        portal.createMapButton();
    }, 1);
});