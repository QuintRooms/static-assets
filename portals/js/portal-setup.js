class Portal {

    constructor(site_id, page_name, result) {
        this.site_id = site_id;
        this.page_name = page_name;

        this.init();
    }

    init() {
        this.getSiteId();
        this.getPageName();
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
            this.page_name = 'FAQ';
            return;
        }
    }

    async fetchAsset(url) {
        let response = await fetch(url);
        let data = await response.text();

        if (response.status != 200) {
            throw new Error('File at path ' + url + ' not found.');
        }
        return data;
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

    insertAssets() {
        // insert html
        if (this.page_name = 'FAQ') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/faq.html').then(data => document.querySelector('.WBFaq').innerHTML = data);
        }

        // insert scripts
        let script = document.createElement('script');
        script.src = 'https://static.hotelsforhope.com/portals/' + this.site_id + '/' + this.site_id + '.js';
        document.querySelector('body').appendChild(script);

        // insert styles
        this.fetchAsset('https://static.hotelsforhope.com/portals/styles/styles.css').then(data => document.querySelector('body').insertAdjacentHTML('afterBegin', '<style>' + data + '</style>'));
        this.fetchAsset(this.site_id + '/' + this.site_id + '.css').then(data => document.querySelector('body').insertAdjacentHTML('afterBegin', '<style>' + data + '</style>'));
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

    openMap() {
        if (this.page_name == 'search-results') {
            let map = document.querySelector('.ArnRightExtraContainer');
            let mapBtn = document.querySelector('.openMapBtn');
            mapBtn.classList.toggle('closeMapBtn');
            map.classList.toggle('showMap');
        }
    }

    createMapButton() {
        if (this.page_name = 'search-results') {
            document.querySelector('#Properties').insertAdjacentHTML('beforebegin', '<div class="openMapBtn"></div>');
            document.querySelector('.openMapBtn').addEventListener('click', this.openMap);
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
        if (this.page_name == 'search-results') {
            let arr = document.querySelectorAll(collapsedSelector);
            arr.forEach(function(element, index) {
                element.style.display = 'none';
            });
            document.querySelector(openSelector).style.display = 'block';
        }
    }

    updateRoomDescription(selector, text) {
        if (document.querySelector('.SinglePropDetail')) {
            var original = document.querySelectorAll(selector);
            original.forEach(function(element, index) {
                var rateDate = document.querySelector('.ArnRateFromTo');
                element.removeChild(rateDate);
                var updated = element.innerHTML.replace('Special Event Rate', '<span style="font-weight:bold; color:#111; font-size: 17px;">' + text + '</span>');
                element.innerHTML = updated;
            });
        }
    }

    removeSavingsLessThan10() {
        if (this.page_name = 'property-detail') {
            let savings = document.querySelector('.bestPrice .originalPrice').getAttribute('amount');
            savings = savings.replace(/[^a-zA-Z0-9 ]/g, "");
            if (savings < 1000) {
                document.querySelector('.bestPrice .percentSavings').style.display = 'none';
            }
            return false;
        }
        if (this.page_name == 'search-results') {
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
}

class LRGPortal extends Portal {
    eventRateProp() {
        let eventProp = document.querySelectorAll('.SearchHotels .S16');
        eventProp.forEach(function(element, index) {
            if (element.querySelector('.sash') == null) {
                element.insertAdjacentHTML('afterBegin', this.fetchAsset('../html/sash.html').then(data => document.querySelector('.WBFaq').innerHTML = data));

                if (element.querySelector('.percentSavings')) {
                    let percentSavings = element.querySelector('.percentSavings').textContent;
                    element.querySelector('.percent-off').insertAdjacentHTML('afterBegin', percentSavings);

                }
                if (element.querySelector('.credits ue')) {
                    let yourSavings = element.querySelector('.creditsValue').textContent;
                    element.querySelector('.yourSavings').insertAdjacentHTML('afterBegin', ' (Save ' + yourSavings + ')');
                }
            }
        });
    }

    singlePropDetailLRGTag() {
        let singlePropLRG = document.querySelectorAll('.SinglePropDetail .SB16 .ArnNightlyRate');
        singlePropLRG.forEach(function(element) {
            if (element) {
                element.insertAdjacentHTML('afterbegin', this.fetchAsset('../html/singlePropSash.html').then(data => document.querySelector('.WBFaq').innerHTML = data));
            }
        });
    }

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

}

class noLRGPortal extends Portal {

}

let portal = new LRGPortal();
portal.insertAssets();
portal.ieForEachPolyfill();
portal.updateHTML('.WBSupportForm .ArnSupportChatTable tr td', '<p>If you would like to speak with a representative, please call <strong>512-691-9555.</strong></p><strong>Phone Center Hours</strong><ul><li>Call Center Weekday Hours: 8:00 AM - 5:30 liM CST</li><li> Call Center Weekend Hours: Closed</li></ul><p>Or, please use the form below, and one of our consultants will respond promptly.</p>');
portal.appendToParent('.ConfirmationForm .confirmMessageContainer.desktopVersion', '.ConfirmationForm .GuestForms');
portal.appendToParent('.confirmMessageContainer.mobileVersion', '.ConfirmationForm .PaymentPolicies');
portal.appendToParent('.ConfirmationForm .meetH4H.desktopVersion', '.ConfirmationForm .GuestForms');
portal.appendToParent('.ConfirmationForm .meetH4H.mobileVersion', '.ConfirmationForm .PaymentPolicies');
portal.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
portal.appendToParent('.lrgTipContainer', '#theDatePrompt');
portal.createHTML('<link rel="shortcut icon" href="../images/h4h-fav.ico"', 'head', 'beforeend');
portal.accordion('.PropertyAmenities legend', '.ArnAmenityContainer');
portal.donationAmount();
portal.createMapButton();

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
    }, 1);
});