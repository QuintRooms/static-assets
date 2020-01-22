export default class BasePortal {
    constructor(site_id, site_config_json, page_name) {
        this.site_id = site_id;
        this.site_config_json = site_config_json;
        this.page_name = page_name;
    }

    init() {
        this.getSiteID().then(() => {
            this.getSiteConfigJSON().then(() => {
                this.getPageName();
                this.ieForEachPolyfill();

                // open footer links in new tab
                this.updateAttribute('.ArnSupportLinks .lowRateLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .faqLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .termsLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .privacyLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .supportLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .cancelLink', '_blank', 'target');
                this.createHTML('head', `<link id="favicon" rel="shortcut icon" href="${this.site_config_json['fav_icon_url']}">`, 'beforeEnd');

                // Checkout form input validation
                this.updateAttribute('#theEmailAddressAjax input', 'email', 'type');

                // Shows numpad on ios
                this.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
                this.updateAttribute('.CheckOutForm #theAreaCode', 'inputmode');
                this.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
                this.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');

                this.updateRoomDescription();
                this.createImageSlider();
                this.pollingFinished().then(() => {
                    console.log('PollingFinished() fired.')
                    this.createStarIcons();
                    this.showSearchContainerOnMobile();
                    this.createMobileSortAndFilter();
                });
            });
        });
    }

    /**
     *@description gets site id from siteId meta tag
     */
    async getSiteID() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
        console.log('BasePortal getSiteID() fired.', this.site_id);
        return await this.site_id;
    }

    async getSiteConfigJSON() {
        console.log('getSiteConfigJSON fired', this.site_id);
        try {
            return await fetch(`https://dev-static.hotelsforhope.com/ares/js/site_configs/${this.site_id}/${this.site_id}.json`, { method: 'GET' })
                .then(response => response.json())
                .then((json) => {
                    this.site_config_json = json;
                    console.log('site_config_json:', json);
                });
        } catch {
            console.log('could not get site config');
        }
    }

    /**
     *@description gets page name using css classes from body tag
     */
    async getPageName() {
        let body_classes = document.querySelector('body');

        if (body_classes.classList.contains('SearchHotels')) {
            this.page_name = 'search-results';
            return await this.page_name;
        }

        if (body_classes.classList.contains('SinglePropDetail')) {
            this.page_name = 'property-detail';
            return await this.page_name;
        }

        if (body_classes.classList.contains('CheckOutForm')) {
            this.page_name = 'checkout';
            return await this.page_name;
        }

        if (body_classes.classList.contains('ConfirmationForm')) {
            this.page_name = 'confirmation';
            return await this.page_name;
        }

        if (body_classes.classList.contains('RootBody')) {
            this.page_name = 'landing-page';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBFaq')) {
            this.page_name = 'faq';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBTermsAndConditions')) {
            this.page_name = 'terms-conditions';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBPrivacyPolicy')) {
            this.page_name = 'privacy-policy';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBRateGuaranteeForm2')) {
            this.page_name = 'lrg-page';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBValidatedRegistrationForm')) {
            this.page_name = 'cug-registration';
            return await this.page_name;
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

        if (!arr) {
            return;
        }

        arr.forEach(function(element, index) {
            element.setAttribute(attribute, argument);
        });
    }

    /**
     *@description updates text of specified selector
     *@param string selector - selector to update text
     *@param string text - text to update
     */
    updateText(selector, text) {
        let class_list = document.querySelectorAll(selector);
        if (!class_list) {
            return;
        }

        class_list.forEach(function(element, index) {
            element.textContent = text;
        });
    }

    /**
     *@description updates innerHTML of selector
     *@param string selector - selector to update
     *@param string html - html to add
     */
    updateHTML(selector, html) {
        let class_list = document.querySelectorAll(selector);

        if (!class_list) {
            return;
        }

        class_list.forEach(function(element, index) {
            element.innerHTML = html;
        });
    }

    /**
     *@description creates html and inserts into specified location
     *@param string parent_to_append_to - selector to put new html
     *@param string html - html to add to parent
     *@param string location - where to add in relation to parent using JS method insertAdjacentHTML - arguments include beforeBegin, beforeEnd, afterBegin, afterEnd
     */
    async createHTML(parent_to_append_to, html, location) {
        return await new Promise(resolve => {
            let parent = document.querySelector(parent_to_append_to);

            if (!parent || parent == null) {
                return;
            }

            parent.insertAdjacentHTML(location, html);
            resolve();
        });
    }

    /**
     *@description moves a child element into a parent element
     *@param string child_selector - selector to move into parent
     *@param string parentSelector - selector to move child element into
     */
    appendToParent(child_selector, parent_selector) {
        let child_element = document.querySelector(child_selector);
        let parent_element = document.querySelector(parent_selector);

        if (!child_element || !parent_element || child_element == null || parent_element == null) {
            return;
        }

        parent_element.appendChild(child_element);
    }
    /**
     *@description adds a tag for each contracted property on the searchHotels page
     *@param string selector - DOM selector
     */
    updateRoomDescription() {
        let room_description_el = document.querySelectorAll('.RoomDescription');
        if (!document.querySelector('.SinglePropDetail') || !room_description_el || !this.site_config_json['is_lodging']) {
            return;
        }

        room_description_el.forEach(function(element) {
            element.innerHTML = element.innerHTML.replace('Special Event Rate', `<span id="exclusive-event-rate" style="font-weight:bold; color:#111; font-size: 17px;">${this.site_config_json['event_name']}</span>`);
        });
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

    createImageSlider() {
        if (!document.querySelector('.SinglePropDetail') || !document.querySelector('.ArnPhotoContainer>tbody>tr>td:nth-child(1)')) {
            return;
        }

        document.querySelector('.propThumbs').removeChild(document.querySelector('.thumbScroller'));
        let slider_container = document.querySelector('.ArnPhotoContainer');
        let images_container = document.querySelector('.ArnPhotoContainer > tbody > tr > td:nth-child(1)');
        let current_image = 0;
        let prop_thumbs = document.querySelectorAll('.propThumbs div');
        let thumb_count = prop_thumbs.length;

        let svg_arrow = '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
        slider_container.insertAdjacentHTML('beforeEnd', `<div class="image-arrow arrow-left">${svg_arrow}</div><div class="image-arrow arrow-right">${svg_arrow}</div>`);

        let left_arrow = slider_container.querySelector('.arrow-left');
        let right_arrow = slider_container.querySelector('.arrow-right');

        left_arrow.addEventListener('click', () => {

            if (current_image == 0) {
                current_image = thumb_count;
            }

            current_image -= 1;
            prop_thumbs[current_image].click();

        });

        right_arrow.addEventListener('click', () => {

            current_image += 1;
            if (current_image == thumb_count) {
                current_image = 0;
            }
            prop_thumbs[current_image].click();
        });
    }

    createStarIcons() {
        let star_elements = document.querySelectorAll('.ArnPropClass');
        star_elements.forEach(function(star) {
            let number_of_stars = star.textContent;
            let num = number_of_stars.replace(/\D/g, "");
            let star_svg = '<svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

            if (num == 1) {
                star.innerHTML = star_svg;
            }
            if (num == 2) {
                star.innerHTML = star_svg + star_svg;
            }
            if (num == 3) {
                star.innerHTML = star_svg + star_svg + star_svg;
            }
            if (num == 4) {
                star.innerHTML = star_svg + star_svg + star_svg + star_svg;
            }
            if (num == 5) {
                star.innerHTML = star_svg + star_svg + star_svg + star_svg + star_svg;
            }
        });
    }

    async pollingFinished() {
        console.log('pollingFinished() fired.');
        return await new Promise(resolve => {
            let interval = setInterval(() => {
                if (document.querySelector('.pollingFinished')) {
                    resolve();
                    clearInterval(interval);
                };
            }, 250);
        });
    }

    createMobileSortAndFilter() {
        console.log('createMobileSortAndFilter() fired.')
        if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('.SearchHotels')) {
            return;
        }
        updateText('.sort', '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter');

        createHTML('<div class="sort-filter-container"><div class="sort-filter-header"><h3>Sort &amp; Filter</h3><span class="sort-filter-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#9c6aad" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#9c6aad" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="mobile-sort-container"><h4>Sort By</h4></div><div class="mobile-filter-container"><h4>Filter By</h4></div></div>', 'body', 'beforeEnd');

        let sort_button = document.querySelector('.ArnSortBy');
        let sort_container = document.querySelector('#sort-wrapper');
        let filter_container = document.querySelector('.ArnSecondarySearchOuterContainer');
        let sort_filter_container = document.querySelector('.sort-filter-container');

        sort_button.removeEventListener('click', () => {});
        sort_button.addEventListener('click', () => {
            sort_filter_container.classList.toggle('show-sort-filter');
            document.querySelector('.mobile-sort-container').insertAdjacentElement('beforeEnd', sort_container);
            document.querySelector('.mobile-filter-container').insertAdjacentElement('beforeEnd', filter_container);
            filter_container.style.display = 'block';
            sort_container.style.display = 'block';
        });

        document.querySelector('.sort-filter-close').addEventListener('click', () => {
            sort_filter_container.classList.toggle('show-sort-filter');
        });
        debugger;
        document.querySelector('#sort-wrapper a').addEventListener('click', (target) => {
            target.toElement.classList.toggle('active-filter');
        });

        let filters = filter_container.querySelectorAll('.ArnSearchField');
        filters.forEach((filter) => {
            filter.classList.add('panel');
        });
    }

    showSearchContainerOnMobile() {
        console.log('showSearchContainerOnMobile() fired.')
        if (!document.querySelector('.SearchHotels')) {
            return;
        }

        let content_el = document.querySelector('.SearchHotels .ArnPrimarySearchContainer');
        let location_el = document.querySelector('meta[name="SearchLocation"]');
        console.log('location_el:', location_el);
        let check_in_el = document.querySelector('meta[name="checkIn"]');
        let check_out_el = document.querySelector('meta[name="checkOut"]');
        let adults_el = document.querySelector('meta[name="numberOfAdults"]');
        let location_text;
        let check_in_text;
        let check_in_date;
        let check_out_text;
        let check_out_date;
        let adults_text;
        const month_names = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        if (location_el) {
            location_text = location_el.getAttribute('content');
        }

        if (check_in_el) {
            check_in_text = check_in_el.getAttribute('content');
            check_in_date = new Date(check_in_text);
        }

        if (check_out_el) {
            check_out_text = check_out_el.getAttribute('content');
            check_out_date = new Date(check_out_text);
        }

        if (adults_el) {
            adults_text = adults_el.getAttribute('content');
        }

        createHTML(`<div class="show-search-container"><svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg><div class="search-info"><h3>${location_text}</h3><span><span class="search-dates">${month_names[check_in_date.getMonth()]} ${check_in_date.getDate() + 1} - ${month_names[check_out_date.getMonth()]} ${check_out_date.getDate() + 1} </span><span class="adults-count">${adults_text} guests</span></span></div></div>`, '.SearchHotels .ArnPrimarySearchOuterContainer', 'beforeBegin');

        document.querySelector('.show-search-container').addEventListener('click', () => {
            content_el.classList.toggle('show-search');
        });
    }
}