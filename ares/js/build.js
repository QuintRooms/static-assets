 // <script type="module" async src="https://dev-static.hotelsforhope.com/ares/js/site_configs/39624/39624.js"></script>
 export default class BasePortal {

     site_id;
     page_name;
     site_config;
     svg_arrow = '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';

     init() {
         this.ieForEachPolyfill();
         this.getSiteID().then(() => {
             this.getSiteConfigJSON().then(() => {
                 this.getPageName();
                 this.applyConfigColors();
                 this.setFontFromConfig();
                 this.setupDatePrompt();

                 // all pages
                 this.buildMobileMenu();
                 this.createHTML(`<link id="favicon" rel="shortcut icon" href="${this.site_config.fav_icon_url}">`, 'head', 'beforeEnd');

                 if (this.site_config.site_type != 'cug') {
                     this.createHTML(`<header><a href="${this.site_config.logo_outbound_url}" target="_blank"><img src="${this.site_config.logo_file_location}" alt="Logo"></a></header>`, 'body', 'afterBegin');
                 }

                 if (this.site_config.site_type == 'cug') {
                     this.waitForSelectorInDOM('#AdminControlsContainer').then(() => {
                         this.createHTML(`<a href="${this.site_config.logo_outbound_url}" target="_blank"><img src="${this.site_config.logo_file_location}" alt="Logo"></a>`, '#AdminControlsContainer', 'afterBegin');
                     });
                 }

                 this.updateAttribute('.ArnSupportLinks .lowRateLink', '_blank', 'target');
                 this.updateAttribute('.ArnSupportLinks .faqLink', '_blank', 'target');
                 this.updateAttribute('.ArnSupportLinks .termsLink', '_blank', 'target');
                 this.updateAttribute('.ArnSupportLinks .privacyLink', '_blank', 'target');
                 this.updateAttribute('.ArnSupportLinks .supportLink', '_blank', 'target');
                 this.updateAttribute('.ArnSupportLinks .cancelLink', '_blank', 'target');
                 this.updateHTML('.ArnLeftListContainer > span.translateMe', 'Search');

                 // single prop detail methods
                 if (this.page_name == 'property-detail') {
                     this.updateHTML('.SinglePropDetail .OptionsPricing a', 'Rooms');
                     this.updateHTML('.SinglePropDetail .Details a', 'General Info');
                     this.updateHTML('.SinglePropDetail .Map a', 'Map');
                     this.updateHTML('.SinglePropDetail .Reviews a', 'Reviews');
                     this.accordion('#thePropertyAmenities', '.ArnAmenityContainer', 'legend');
                     this.updatePropReviewsURLToUseAnchor();
                     this.updateRoomDescription();
                     this.createImageSlider();
                     this.moveElementIntoExistingWrapper('div.subHeaderContainer > div > a > span.translateMe', '.SinglePropDetail .ArnLeftListContainer', 'afterBegin');
                     this.moveElementIntoExistingWrapper('.SinglePropDetail .ArnTripAdvisorDetails.HasReviews', '.SinglePropDetail .ArnPropAddress', 'afterEnd');
                 }

                 // checkout page methods
                 if (this.page_name == 'checkout') {
                     this.createModal([document.querySelector('#theConfirmationPoliciesAjax'), document.querySelector('#theStayPolicies')], 'Policies & Fees', 'checkout', '#theConfirmationContainer', 'afterBegin');
                     this.setupReservationSummaryContainer();
                     // Checkout form input validation
                     this.updateAttribute('#theEmailAddressAjax input', 'email', 'type');
                     this.moveElementIntoExistingWrapper('#theBookingPage #theRateDescription', '#theHotel', 'beforeEnd');

                     // Shows numpad on ios
                     this.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
                     this.updateAttribute('.CheckOutForm #theAreaCode', 'inputmode');
                     this.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
                     this.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
                     this.updateHTML('#theCharges legend', 'Rate Info');
                     this.updateHTML('.taxFeeRow th', '<span>Taxes:</span>');
                     this.updateHTML('#theHotel legend', 'Reservation Summary');
                     this.formatCheckoutForm();
                 }

                 // root page methods
                 if (this.page_name == 'landing-page') {
                     this.updateHTML('.RootBody .ArnSearchHeader', 'Start Your Search');
                     this.createHTML('<h1>Start Your Search</h1><h3>From cozy budget hotels to upscale resorts, we have what you are looking for</h3>', '.RootBody .ArnPrimarySearchContainer', 'beforeBegin');
                     this.moveOrphanedElementsIntoNewWrapper([document.querySelector('.RootBody .ArnLeftSearchContainer form')], 'root-search-container', '.RootBody .ArnSearchContainerMainDiv', 'afterBegin');
                 }

                 this.updateHTML('#thePassCodeAjax label', 'Promocode');
                 this.updateHTML('#theUserNameAjax label', 'Username/Email');
                 this.createHTML('<h1>Login</h1>', '#theWBLoginFormBody form', 'beforeBegin');
                 this.createHTML('<h1>Register</h1>', '#theWBValidatedRegistrationFormBody form', 'beforeBegin');
                 this.createHTML('<h1>Forgot Password?</h1>', '#theWBForgotPasswordFormBody form', 'beforeBegin');
                 this.createHTML('<div class="redeem-promocode-container"><h2>Have a promocode?</h2></div>', '#theWBLoginFormBody .ForgotPasswordAction', 'afterEnd');
                 this.mapReadyMethods();

                 this.waitForSelectorInDOM('.pollingFinished').then(() => {
                     if (!this.page_name == 'search-results') {
                         return;
                     }
                     this.updateAttribute('.ArnShowRatesLink', '_blank', 'target')
                     this.moveSearchOptionLabelsOutsideOfWrapper('.lblNearbyCities');
                     this.moveSearchOptionLabelsOutsideOfWrapper('.lblAmenities');
                     this.moveSearchOptionLabelsOutsideOfWrapper('.lblRating');
                     this.moveSearchOptionLabelsOutsideOfWrapper('.lblPropertyType');
                     this.moveSearchOptionLabelsOutsideOfWrapper('.lblCurrency');

                     this.updateHTML('.lblNearbyCities', 'Nearby Cities ' + this.svg_arrow);
                     this.updateHTML('.lblAmenities', 'Amenities ' + this.svg_arrow);
                     this.updateHTML('.lblRating', 'Stars ' + this.svg_arrow);
                     this.updateHTML('.lblPropertyType', 'Property Type ' + this.svg_arrow);
                     this.updateHTML('.lblCurrency', 'Currency ' + this.svg_arrow);
                     this.updateHTML('.ArnShowRatesLink', 'Book Rooms');
                     this.updateHTML('#ShowHotelOnMap', 'Open Map');
                     this.updateHTML('#CitySearchContainer > span', 'Where:');
                     this.updateHTML('.ArnSearchHeader', 'Search');
                     this.updateHTML('.ArnSortBy', `<div class="sort">Sort ${this.svg_arrow}</div>`);
                     this.moveFooterOutOfSearchContainer();
                     this.createStarIcons();
                     this.showSearchContainerOnMobile();
                     this.openSortByDropdown();
                     this.moveReviewsIntoPropNameContainer();
                     this.moveElementIntoExistingWrapper('.ArnPropClass', '.ArnPropName', 'beforeEnd');
                     this.moveElementIntoExistingWrapper('#theOtherSubmitButton', '.ArnSecondarySearchOuterContainer', 'beforeEnd');
                     this.movePropClassBelowPropName();

                     this.moveOrphanedElementsIntoNewWrapper([document.querySelector('.ArnSortByDealPercent'), document.querySelector('.ArnSortByDealAmount'), document.querySelector('.ArnSortByPrice'), document.querySelector('.ArnSortByClass'), document.querySelector('.ArnSortByType')], 'sort-wrapper', '.ArnSortBy', 'beforeEnd').then(() => {
                         this.createMobileSortAndFilter();
                     });
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
         console.log('getSiteConfigJSON fired');
         try {
             return await fetch(`https://dev-static.hotelsforhope.com/ares/js/site_configs/${this.site_id}/${this.site_id}.json`, { method: 'GET' })
                 .then(response => response.json())
                 .then((json) => {
                     this.site_config = json;
                     console.log('site_config:', json);
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
     updateHTML(selectors, text) {
         let elements_to_update = document.querySelectorAll(selectors);
         elements_to_update.forEach(function(element) {
             if (element) {
                 element.innerHTML = text;
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
     async createHTML(html, parent_to_append_to, location) {
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
         if (!document.querySelector('.SinglePropDetail') || !room_description_el || this.site_config.site_type != "lodging") {
             return;
         }

         room_description_el.forEach((element) => {
             element.innerHTML = element.innerHTML.replace('Special Event Rate', `<span id="exclusive-event-rate" style="font-weight:bold; color:#111; font-size: 17px;">${this.site_config.lodging.event_name}</span>`);
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
             star.style.display = 'inline';
             let number_of_stars = star.textContent;
             let num = number_of_stars.replace(/\D/g, "");
             let star_svg = '<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

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

     async waitForSelectorInDOM(selector) {
         return await new Promise(resolve => {
             console.log('waitForSelectorInDOM() fired.');
             let interval = setInterval(() => {
                 if (document.querySelector(selector)) {
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
         this.updateHTML('.sort', '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter');

         this.createHTML('<div class="sort-filter-overlay"><div class="sort-filter-container"><div class="sort-filter-header"><h3>Sort &amp; Filter</h3><span class="sort-filter-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="mobile-sort-container"><h4>Sort By</h4></div><div class="mobile-filter-container"><h4>Filter By</h4></div></div></div>', 'body', 'beforeEnd');

         let sort_button = document.querySelector('.ArnSortBy');
         let sort_container = document.querySelector('#sort-wrapper');
         let filter_container = document.querySelector('.ArnSecondarySearchOuterContainer');
         let sort_filter_container = document.querySelector('.sort-filter-overlay');

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

         this.createHTML(`<div class="show-search-container"><svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg><div class="search-info"><h3>${location_text}</h3><span><span class="search-dates">${month_names[check_in_date.getMonth()]} ${check_in_date.getDate() + 1} - ${month_names[check_out_date.getMonth()]} ${check_out_date.getDate() + 1} </span><span class="adults-count">${adults_text} guests</span></span></div></div>`, '.SearchHotels .ArnPrimarySearchOuterContainer', 'beforeBegin');

         document.querySelector('.show-search-container').addEventListener('click', () => {
             content_el.classList.toggle('show-search');
         });
     }

     moveElementIntoExistingWrapper(element_to_move, wrapper, adjacent_position) {
         if (document.querySelector(wrapper) && document.querySelector(element_to_move)) {
             document.querySelector(wrapper).insertAdjacentElement(adjacent_position, document.querySelector(element_to_move));
         }
     }

     async moveOrphanedElementsIntoNewWrapper(elements_array, wrapper_id, adjacent_element_class, adjacent_position) {
         console.log('moveOrphanedElementsIntoNewWrapper() fired.');
         return await new Promise(resolve => {
             if (document.querySelector(adjacent_element_class)) {
                 document.querySelector(adjacent_element_class).insertAdjacentHTML(adjacent_position, '<div class id="' + wrapper_id + '"></div>');
                 elements_array.forEach((element) => {
                     document.getElementById(wrapper_id).insertAdjacentElement('beforeEnd', element);
                     resolve();
                 });
             }
         });
     }

     createWrapper(query_selectors, wrapper_parent, new_wrapper_class, adjacent_location) {
         const wrapper = document.createElement('div');

         if (!wrapper) {
             return;
         }

         wrapper.setAttribute('class', new_wrapper_class);
         Array.prototype.forEach.call(document.querySelectorAll(query_selectors), (children) => {
             wrapper.appendChild(children);
         });

         document.querySelector(wrapper_parent).insertAdjacentElement(adjacent_location, wrapper);
     }

     buildMobileMenu() {
         let menu_el = document.querySelector('#commands');
         let header_el = document.querySelector('#AdminControlsContainer');

         if (!menu_el && !header_el) {
             return;
         }

         header_el.insertAdjacentHTML('beforeEnd', '<div class="hamburger" id="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>');

         let menu_button_el = document.querySelector('#hamburger');

         if (!menu_button_el) {
             return;
         }

         menu_button_el.addEventListener('click', () => {
             menu_button_el.classList.toggle('is-active');
             menu_el.classList.toggle('active');
         });
     }

     openSortByDropdown() {
         if (document.querySelector('.ArnSortBy')) {
             document.querySelector('.ArnSortBy').addEventListener('click', () => {
                 document.querySelector('#sort-wrapper').classList.toggle('sort-open');
                 if (document.querySelector('.sort svg')) {
                     document.querySelector('.sort svg').classList.toggle('flip-svg');
                 }
             });
         }
     }

     showAdditionalPolicies() {
         if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('#theBookingPage')) {
             return;
         }

         let additional_policies = document.querySelector('#theStayPolicies');
         let additional_policies_legend = additional_policies.querySelector('legend');
         let additional_policies_height = additional_policies.offsetHeight;
         let policies = document.querySelector('#theConfirmationPoliciesAjax');

         policies.insertAdjacentElement('afterEnd', additional_policies);
         moveOrphanedElementsIntoNewWrapper(document.querySelectorAll('#theStayPolicies *'), 'policies-container', '#theStayPolicies', 'beforeEnd');
         additional_policies.insertAdjacentElement('beforeBegin', additional_policies_legend);
         additional_policies.insertAdjacentHTML('beforeEnd', `
        <style>
            #theStayPolicies {
                height: 0;
                display: none;
            }
            .show-policies{
                height: ${additional_policies_height}px !important;
                display: block !important;
            }
        </style>
        `);

         additional_policies_legend.addEventListener('click', () => {
             additional_policies.classList.toggle('show-policies');
         });
     }

     updatePropReviewsURLToUseAnchor() {
         if (!document.querySelector('.SinglePropDetail')) {
             return;
         }

         let review_link = document.querySelector('.reviewCount a');
         review_link.setAttribute('href', '#thePropertyReviews');
     }

     moveFooterOutOfSearchContainer() {
         if (document.querySelector('.SearchHotels') && document.querySelector('.ArnSupportBottom')) {
             document.querySelector('body').insertAdjacentElement('beforeEnd', document.querySelector('.ArnSupportBottom'))
         }
     }

     moveReviewsIntoPropNameContainer() {
         let prop_names = document.querySelectorAll('.SearchHotels .ArnPropName');

         if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnContainer')) {
             return;
         }

         prop_names.forEach((prop_name) => {
             prop_name.insertAdjacentElement('beforeEnd', prop_name.parentElement.querySelector('.ArnTripAdvisorDetails'));
         });
     }

     toggleMap() {
         if (document.querySelector('#arnCloseAnchorId')) {
             document.querySelector('#ShowHotelOnMap').innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-map fa-w-18 fa-2x"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg> Open Map';
             document.querySelector('#arnCloseAnchorId').addEventListener('click', function() {
                 document.querySelector('#arnCloseAnchorId').classList.toggle('closeMap');
                 document.querySelector('.ArnPropertyMapInner').classList.toggle('showMap');
                 if (document.querySelector('.closeMap')) {
                     this.textContent = 'X';
                 } else {
                     this.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-map fa-w-18 fa-2x"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg> Open Map';
                 }
             });
         }
     }
     mapReadyMethods() {
         jQuery('#theBody').on('arnMapLoadedEvent', () => {
             L.control.scale().addTo(window.ArnMap);
             this.toggleMap();
             this.highlightMapMarkersOnPropertyHover();
         });
     }

     accordion(main_container, content_container, open_button) {
         if (!document.querySelector(main_container)) {
             return;
         }
         let main_container_el = document.querySelector(main_container);
         let open_el = main_container_el.querySelector(open_button);

         let content_el = main_container_el.querySelector(content_container);
         let svg_arrow = '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
         let height = content_el.offsetHeight;

         document.querySelector(main_container).insertAdjacentHTML('beforeEnd',
             `<style>
                ${content_container}{
                    transform: translateY(-${height}px);
                    pointer-events: none;
                    transition: all .75s ease;
                    height: 0;
                    position: relative;
                }
                .show-content{
                    transform: translateY(0) !important;
                    opacity: 1 !important;
                    pointer-events: initial !important;
                    height: ${height}px !important;
                }
            </style>
            `);
         open_el.insertAdjacentHTML('beforeEnd', svg_arrow);

         open_el.addEventListener('click', () => {
             content_el.classList.toggle('show-content');
             open_el.querySelector('svg').classList.toggle('flip-svg');
         });
     }

     movePropClassBelowPropName() {
         const prop_containers = document.querySelectorAll('.ArnContainer');

         if (!document.querySelector('.SearchHotels')) {
             return;
         }

         prop_containers.forEach(function(container) {
             let prop_class = container.querySelector('.ArnPropClass');
             let prop_name = container.querySelector('.ArnPropName');
             if (container && prop_class && prop_name) {
                 prop_name.insertAdjacentElement('beforeEnd', prop_class);
             }
         });
     }

     moveSearchOptionLabelsOutsideOfWrapper(search_label) {
         let label = document.querySelector(search_label);

         if (!label) {
             return;
         }

         label.classList.add('accordion');
         let label_parent = label.parentNode;

         if (label_parent) {
             label_parent.insertAdjacentElement('beforeBegin', label)

             label.addEventListener('click', function() {
                 label_parent.classList.toggle('panel');
                 label.querySelector('svg').classList.toggle('flip-svg');
             });
         }
     }

     createModal(array_of_elements_to_put_in_modal_body, modal_title, page_name, open_button_parent_selector, open_button_location) {
         if (!page_name) {
             return;
         }

         document.querySelector(open_button_parent_selector).insertAdjacentHTML(open_button_location, `<span class="open-modal">Show ${modal_title}</span>`);

         document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>${modal_title}</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>`);

         array_of_elements_to_put_in_modal_body.forEach((element) => {
             document.querySelector('.modal-content').insertAdjacentElement('beforeEnd', element);
         });

         document.querySelector('.open-modal').addEventListener('click', () => {
             document.querySelector('.modal-overlay').classList.toggle('show-modal');
         });

         document.querySelector('.close-modal').addEventListener('click', () => {
             document.querySelector('.modal-overlay').classList.toggle('show-modal');
         });
     }

     setupReservationSummaryContainer() {
         let check_in_element = document.querySelector('.checkInRow td');
         let check_out_element = document.querySelector('.checkOutRow td');
         let locale_element = document.querySelector('meta[name="locale"]')

         if (!check_in_element || !check_out_element || !locale_element) {
             return;
         }

         let locale = locale_element.getAttribute('content').replace('_', '-');
         let check_in_text = check_in_element.textContent;
         let check_out_text = check_out_element.textContent;

         let check_in_date = new Date(check_in_text).toLocaleDateString('en-US');
         let check_out_date = new Date(check_out_text).toLocaleDateString('en-US');

         this.createHTML(`<span class="date-container">${check_in_date} - ${check_out_date}`, '#theHotelAddress', 'beforeBegin');
         this.moveElementIntoExistingWrapper('.totalRow .discount', '.theHotelName', 'afterEnd');
     }

     formatCheckoutForm() {
         if (!this.page_name == 'checkout') {
             return;
         }

         let room_reservations = document.querySelectorAll('.WBGuestFormFields');
         let reservation_count = 0;

         room_reservations.forEach((reservation) => {
             reservation_count++;

             this.moveElementIntoExistingWrapper(`#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardBillingNameAjax${reservation_count - 1}`, `#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardNumberAjax`, 'afterEnd');


             this.createWrapper(`.RoomNumber-${reservation_count} .guestCityZip > table > tbody > tr > td > div, .RoomNumber-${reservation_count} .guestCityZip > table > tbody > tr >td:nth-child(2) > div, #theStateAjax${reservation_count}, #theCountryAjax${reservation_count}`, `#theBillingAddressAjax${reservation_count}`, `billing-details-container`, 'afterEnd');

             this.createWrapper(`.RoomNumber-${reservation_count} #theCreditCardBillingNameAjax${reservation_count}, .RoomNumber-${reservation_count} #theCardExpirationFieldsAjax, .RoomNumber-${reservation_count} #theCardVerificationAjax`, `.RoomNumber-${reservation_count} #theCreditCardNumberAjax`, `credit-card-details`, 'afterEnd');

             this.updateHTML(`#theCreditCardBillingNameAjax${reservation_count - 1} label`, 'Cardholder\'s Name');
             this.updateHTML(`#theBillingAddressAjax${reservation_count - 1} label`, 'Billing Address');
             this.updateHTML(`.RoomNumber-${reservation_count} > legend`, 'Billing Info');
             this.updateHTML(`.RoomNumber-${reservation_count} .paymentMethods`, '<span class="creditcards"><img src="https://dev-static.hotelsforhope.com/ares/images/creditcards.png" alt="Credit Cards"></span>');
             this.createHTML('<legend>Credit Card Info</legend>', `.RoomNumber-${reservation_count} .guestBillingAddress`, 'beforeBegin');
         });
     }

     applyConfigColors() {
         if (!this.site_config) {
             return;
         }

         document.querySelector('body').insertAdjacentHTML('beforeEnd', `
            <style>
            /* Primary Background Color */
                #searching h2:after,
                #theConfirmationButton,
                #theOtherSubmitButton:active,
                #theOtherSubmitButton:focus,
                #theOtherSubmitButton:hover,
                .ArnPrimarySearchContainer,
                .ArnShowRatesLink,
                .ArnTripAdvisorDetails.HasReviews .ratingCount,
                .CreateAnAccountAction,
                .RootBody #theSubmitButton,
                .SimpleSearch,
                .WBForgotPasswordFormActions .submit,
                .WBLoginFormActions .submit,
                .WBValidatedRegistrationFormActions .submit,
                .arn-leaflet-reset-button,
                .arnMapMarker,
                .arnMapMarker:hover,
                .bookRoom,
                .HoldRoomsForm .submit,
                #datePromptContainer+.SimpleSearch .CheckRates .submit,
                .yui3-skin-sam .yui3-calendar-day:hover {
                    background:${this.site_config.primary_color}
                }

                @media screen and (max-width:1105px) {

                    #arnCloseAnchorId,
                    #arnCloseAnchorId:active,
                    #arnCloseAnchorId:focus,
                    #arnCloseAnchorId:hover,
                    .closeMap {
                        background:${this.site_config.primary_color}
                    }
                }

                @media screen and (max-width:800px) {

                    #commands a:active,
                    #commands a:focus,
                    #commands a:hover,
                    #commands button:active,
                    #commands button:focus,
                    #commands button:hover,
                    #sort-wrapper a:before,
                    #sort-wrapper a.active-filter:before {
                        background:${this.site_config.primary_color}
                    }
                }

                #searching,
                #theConfirmationButton,
                #theOtherSubmitButton:active,
                #theOtherSubmitButton:focus,
                #theOtherSubmitButton:hover,
                .HoldRoomsForm .submit,
                .ArnPrimarySearchContainer,
                .ArnShowRatesLink,
                .ArnTripAdvisorDetails.HasReviews .ratingCount,
                .SinglePropDetail .CheckRates .submit,
                .CreateAnAccountAction,
                .RootBody #theSubmitButton,
                .SearchHotels #theSubmitButton,
                .SimpleSearch,
                .WBForgotPasswordFormActions .submit,
                .WBLoginFormActions .submit,
                .WBValidatedRegistrationFormActions .submit,
                .arnMapPopup .rate,
                #datePromptContainer+.SimpleSearch .CheckRates .submit,
                .bookRoom {
                    color:${this.site_config.primary_text_color}
                }

                @media screen and (max-width:1105px) {

                    #arnCloseAnchorId,
                    #arnCloseAnchorId:active,
                    #arnCloseAnchorId:focus,
                    #arnCloseAnchorId:hover,
                    .closeMap {
                        color:${this.site_config.primary_text_color}
                    }
                }

                @media screen and (max-width: 800px) {

                    #commands a:active,
                    #commands a:focus,
                    #commands a:hover,
                    #commands button:active,
                    #commands button:focus,
                    #commands button:hover {
                        color:${this.site_config.primary_text_color}
                    }
                }
                .holdRoom,
                .reviewCount a,
                #theAdditionalEmailsLink a,
                #theOtherSubmitButton,
                .RootBody #theSubmitButton:active,
                .RootBody #theSubmitButton:focus,
                .RootBody #theSubmitButton:hover,
                .SearchHotels #theSubmitButton:active,
                .SearchHotels #theSubmitButton:focus,
                .SearchHotels #theSubmitButton:hover,
                .SinglePropDetail #moreRatesLink,
                .SinglePropDetail .ArnRateCancelAnchor,
                .open-modal,
                .sort {
                    color:${this.site_config.secondary_text_color}
                }

                @media screen and (max-width:800px) {
                    #theBookingPage legend#policies-legend {
                        color:${this.site_config.secondary_text_color}
                    }
                }

                header,
                #AdminControlsContainer {
                    border-bottom:3px solid ${this.site_config.primary_color}
                }

                .arnMapMarker:hover .arnMapMarkerTriangle,
                .arnMapMarkerTriangle {
                    border-top-color:${this.site_config.primary_color}
                }

                #theOtherSubmitButton,
                .ArnSecondarySearchOuterContainer select,
                .ArnShowRatesLink,
                .RootBody #theSubmitButton,
                .bookRoom,
                .sort,
                .HoldRoomsForm .submit {
                    border:1px solid ${this.site_config.primary_color}
                }

                .ArnSearchField {
                    border-bottom:1px solid ${this.site_config.primary_color}   
                }

                .holdRoom,
                .ArnShowRatesLink:active,
                .ArnShowRatesLink:focus,
                .ArnShowRatesLink:hover,
                .bookRoom:active,
                .bookRoom:focus,
                .bookRoom:hover {
                    border: 1px solid ${this.site_config.primary_color}
                }

                @media screen and (max-width:1105px) {
                    #arnCloseAnchorId {
                        border:1px solid ${this.site_config.primary_color}
                    }
                }

                @media screen and (max-width:800px) {
                    #sort-wrapper a:before {
                        border:2px solid ${this.site_config.primary_color}
                    }
                }
            </style>
            `);
     }

     setFontFromConfig() {
         if (!this.site_config) {
             return;
         }

         this.createHTML(`<link href="${this.site_config.google_font_url}" rel="stylesheet">`, 'head', 'beforeEnd');

         document.querySelector('body').insertAdjacentHTML('beforeEnd', `<style>*{font-family: ${this.site_config.google_font_name}, 'Helvetica' !important;}</style>`);
     }

     setupDatePrompt() {
         let date_prompt = document.querySelector('#theDatePrompt');

         if (!date_prompt) {
             return;
         }

         date_prompt.querySelector('#datePromptContainer').insertAdjacentHTML('afterBegin', `<img src="${this.site_config.logo_file_location}" alt="Logo">`)
     }

     highlightMapMarkersOnPropertyHover() {
         let prop_container = document.querySelector('#currentPropertyPage');
         let properties = document.querySelectorAll('.ArnContainer');
         let prop_id_el;
         let prop_id;

         if (!prop_container) {
             return;
         }
         properties.forEach((property) => {
             property.addEventListener('mouseenter', (e) => {
                 prop_id_el = property.parentElement.querySelector('.propId');
                 if (!prop_id_el) {
                     return;
                 }
                 prop_id = prop_id_el.textContent;
                 ArnMapDispatcher.eventPropertyHighlightOn(prop_id)
             });

             property.addEventListener('mouseleave', (e) => {
                 ArnMapDispatcher.eventPropertyHighlightOff(prop_id)
             });
         });
     }

     showFullStayAndNightlyRates() {
         let average_rate;
         let full_stay_rate;
         let nights = getTotalNights();
         let properties = document.querySelectorAll('.ArnContainer');

         console.log(nights)

         if (this.page_name != 'search-results' || this.page_name != 'property-detail') {
             return;
         }

         properties.forEach((property) => {
             average_rate = property.querySelector('.averageNightly');
             full_stay_rate = property.querySelector('.arnPrice .arnUnit');

             average_rate.insertAdjacentHTML('afterEnd', `<div> per night</div>`);
             full_stay_rate.insertAdjacentHTML('beforeEnd', `<span> for ${nights} nights </span>`)
         });
     }

     getTotalNights() {
         let nights;
         let check_in;
         let check_out;
         const check_in_el = document.querySelector('meta[name="checkIn"]');
         const check_out_el = document.querySelector('meta[name="checkOut"]');

         if (!check_in_el || !check_out_el) {
             return;
         }

         check_in = new Date(check_in_el.getAttribute('content'));
         check_out = new Date(check_out_el.getAttribute('content'));
         nights = (check_out.getTime() - check_in.getTime()) / (1000 * 3600 * 24);

         return nights;
     }
 }