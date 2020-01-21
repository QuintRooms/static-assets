export default class BasePortal {
    constructor(site_config_json) {
        site_id;
        this.site_config_json = site_config_json;
    }

    /**
     *@description gets site id from siteId meta tag
     */
    async getSiteID() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
        console.log('BasePortal getSiteID() fired.')
        return await this.site_id;
    }

    async getSiteConfigJSON() {
        try {
            return await fetch('https://static.hotelsforhope.com/ares/js/site_configs/')
        }
    }
    /**
     *@description gets page name using css classes from body tag
     */
    getPageName() {
        let body_classes = document.querySelector('body');

        if (body_classes.classList.contains('SearchHotels')) {
            return this.page_name = 'search-results';
        }

        if (body_classes.classList.contains('SinglePropDetail')) {
            return this.page_name = 'property-detail';
        }
        if (body_classes.classList.contains('CheckOutForm')) {
            return this.page_name = 'checkout';
        }
        if (body_classes.classList.contains('ConfirmationForm')) {
            return this.page_name = 'confirmation';
        }
        if (body_classes.classList.contains('RootBody')) {
            return this.page_name = 'landing-page';
        }
        if (body_classes.classList.contains('WBFaq')) {
            return this.page_name = 'faq';
        }
        if (body_classes.classList.contains('WBTermsAndConditions')) {
            return this.page_name = 'terms-conditions';
        }
        if (body_classes.classList.contains('WBPrivacyPolicy')) {
            return this.page_name = 'privacy-policy';
        }
        if (body_classes.classList.contains('WBRateGuaranteeForm2')) {
            return this.page_name = 'lrg-page';
        }

        if (body_classes.classList.contains('WBValidatedRegistrationForm')) {
            return this.page_name = 'cug-registration';
        }
    }

    /**
     *@description forEach polyfill for internet explorer
     *@return {void}
     */
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

    /**
     *@description updates an attribute tag of a specified selector
     *@param string selector - selector to update
     *@param string argument - value to update
     *@param string attribute - which attribute to update
     */
    updateAttribute(selector, argument, attribute) {
        let arr = document.querySelectorAll(selector);
        arr.forEach(function(element, index) {
            if (element) {
                element.setAttribute(attribute, argument);
            }
        });
    }

    /**
     *@description updates text of specified selector
     *@param string selector - selector to update text
     *@param string text - text to update
     */
    updateText(selector, text) {
        let class_list = document.querySelectorAll(selector);
        class_list.forEach(function(element, index) {
            if (element) {
                element.textContent = text;
            }
        });
    }

    /**
     *@description updates innerHTML of selector
     *@param string selector - selector to update
     *@param string html - html to add
     */
    updateHTML(selector, html) {
        let class_list = document.querySelectorAll(selector);
        if (class_list) {
            class_list.forEach(function(element, index) {
                element.innerHTML = html;
            });
        }
    }

    /**
     *@description creates html and inserts into specified location
     *@param string parent_to_append_to - selector to put new html
     *@param string html - html to add to parent
     *@param string location - where to add in relation to parent using JS method insertAdjacentHTML - arguments include beforeBegin, beforeEnd, afterBegin, afterEnd
     */
    createHTML(parent_to_append_to, html, location) {
        let parent = document.querySelector(parent_to_append_to);
        if (parent) {
            parent.insertAdjacentHTML(location, html);
        }
    }

    /**
     *@description moves a child element into a parent element
     *@param string child_selector - selector to move into parent
     *@param string parentSelector - selector to move child element into
     */
    appendToParent(child_selector, parentSelector) {
        let childElement = document.querySelector(child_selector);
        let parentElement = document.querySelector(parentSelector);

        if (childElement && parentElement) {
            parentElement.appendChild(childElement);
        }
    }
    /**
     *@description adds a tag for each contracted property on the searchHotels page
     *@param string selector - DOM selector
     *@param string text - text to display - usually 'Event Name Exclusive Rate'
     */
    updateRoomDescription(selector, text) {
        if (document.querySelector('.SinglePropDetail')) {
            let original = document.querySelectorAll(selector);
            original.forEach(function(element, index) {
                let updated = element.innerHTML.replace('Special Event Rate', '<span id="exclusive-event-rate" style="font-weight:bold; color:#111; font-size: 17px;">' + text + '</span>');
                element.innerHTML = updated;
            });
        }
    }

    /**
     *@description shows how much a user donated to charity on checkout page - should refactor to allow selector and text as arguments
     */
    donationAmount() {
        if (document.querySelector('.ConfirmationForm')) {
            let nights = document.querySelector('.numberOfNights th').textContent.split(' ')[0];

            if (document.querySelector('.topRoomFunding') && nights != null) {
                document.querySelector('.topRoomFunding').innerHTML = '<p>Your reservation just generated an <span>$ ' + nights * 2 + ' donation</span> to <span>RoomFunding</span>.  And that\'s at no cost to you.</p>';
            }
        }
    }

    addPerNightToPrice(page, selector) {
        let page_element = document.querySelector(page);
        if (page_element) {
            let price = document.querySelectorAll(selector);
            price.forEach(function(element) {
                let parent = element.parentNode;
                if (!parent.querySelector('.perNight'))
                    element.insertAdjacentHTML('afterEnd', '<span class="perNight translateMe">per night</span>');
            });
        }
    }

    updateBookingFeeLanguage() {
        if (document.querySelector('.CheckOutForm')) {
            let due_now = document.querySelector('p.confirmedDueNowCharge span.confirmationAgreement');
            if (due_now) {

                if ((due_now.textContent.includes('4.95') || due_now.textContent.includes('5.00')) && due_now.textContent.includes('Hotels For Hope')) {
                    due_now.insertAdjacentHTML('beforeEnd', ' <i>This fee is in addition to any immediate charges for prepayment as required in the above deposit and booking terms.</i>');
                }
            }
            return;
        }
    }

    hidePropertyThumbnailArrowIfNoPropertyThumbnails() {
        if (!this.page_name === 'search-results') {
            return;
        }

        let thumbnails = document.querySelectorAll('.ArnImageLink img');
        thumbnails.forEach(function(thumbnail) {
            if (thumbnail) {
                let url = thumbnail.getAttribute('src');
                if (url.includes('no_image_300.gif')) {
                    let thumbnail_parent = thumbnail.parentNode;
                    if (thumbnail_parent) {
                        thumbnail_parent.classList.add("no-images");
                        let arrows = thumbnail_parent.previousSibling;
                        if (arrows && arrows.classList.contains('ArnPropImageButtons')) {
                            arrows.style.display = 'none';
                        }
                    }
                }
            }
        });
    }

    buildBasePortal() {
        // open footer links in new tab
        this.updateAttribute('.ArnSupportLinks .lowRateLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .faqLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .termsLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .privacyLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .supportLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .cancelLink', '_blank', 'target');

        // Checkout form input validation
        this.updateAttribute('#theEmailAddressAjax input', 'email', 'type');

        // Shows numpad on ios
        this.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
        this.updateAttribute('.CheckOutForm #theAreaCode', 'inputmode');
        this.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
        this.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
    }
}

