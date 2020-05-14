import 'whatwg-fetch';
import '@babel/polyfill';
import 'url-polyfill';
import Utilities from './utilities';

const dayjs = require('dayjs');

const utilities = new Utilities();

export default class BasePortal {
    constructor() {
        this.site_id = '';
        this.page_name = '';
        this.site_config = '';
        this.currency = '';
        this.svg_arrow =
            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
        this.map_loaded = false;
    }

    init() {
        utilities.ieForEachPolyfill();
        this.getSiteID().then((site_id) => {
            this.getSiteConfigJSON(site_id).then(async () => {
                this.getPageName();
                this.applyConfigColors();
                this.setRootPageBackgroundImage();
                this.setFontFromConfig();
                this.setupDatePrompt();
                this.showLanguageFromCongif();
                this.createCurrencyDropDown();

                // all pages
                this.addSocialMetaTags(this.site_config.lodging.event_name, this.site_config.lodging.event_id);
                this.buildMobileMenu();
                utilities.createHTML(`<link id="favicon" rel="shortcut icon" href="${this.site_config.fav_icon_url}">`, 'head', 'beforeEnd');

                if (this.site_config.site_type !== 'cug') {
                    await utilities.createHTML(
                        `<header><a class="logo" href="${this.site_config.header.logo_outbound_url}" target="_blank"><img src="${this.site_config.header.logo_file_location}" alt="Logo"></a></header>`,
                        '.config-container',
                        'afterEnd'
                    );
                }

                if (this.site_config.site_type === 'cug') {
                    if (document.querySelector('.MemberNotAuthenticated')) {
                        utilities.createHTML(
                            `<header><a href="${this.site_config.header.logo_outbound_url}" target="_blank"><img src="${this.site_config.header.logo_file_location}" alt="Logo"></a></header>`,
                            'body',
                            'afterBegin'
                        );
                    }

                    utilities.waitForSelectorInDOM('#AdminControlsContainer').then(() => {
                        utilities.createHTML(
                            `<a href="${this.site_config.header.logo_outbound_url}" target="_blank"><img src="${this.site_config.header.logo_file_location}" alt="Logo"></a>`,
                            '#AdminControlsContainer',
                            'afterBegin'
                        );
                    });
                }

                utilities.updateAttribute('.ArnSupportLinks a', '_blank', 'target');

                // single prop detail methods
                if (this.page_name === 'property-detail') {
                    this.addImageSlideshow();
                    utilities.updateHTML('.SinglePropDetail .Map a', 'Map');
                    utilities.updateHTML('.SinglePropDetail .Reviews a', 'Reviews');
                    utilities.updateHTML('.SinglePropDetail .OptionsPricing a', 'Rooms');
                    utilities.updateHTML('.SinglePropDetail .Details a', 'General Info');

                    this.isPropByGateway(this.site_config.exclusive_rate_text, this.site_config.custom_tag_text, this.site_config.lodging.event_name);
                    this.updateRoomDescription();
                    this.updatePropReviewsURLToUseAnchor();

                    this.getTotalNights().then((nights) => {
                        this.getCurrency().then((currency) => {
                            this.showFullStayAndNightlyRates(nights, currency);
                        });
                    });

                    this.accordion('#thePropertyAmenities', '.ArnAmenityContainer', 'legend');
                    utilities.moveElementIntoExistingWrapper('.SinglePropDetail .ArnTripAdvisorDetails.HasReviews', '.SinglePropDetail .ArnPropAddress', 'afterEnd');
                    utilities.moveElementIntoExistingWrapper('div.subHeaderContainer > div > a > span.translateMe', '.SinglePropDetail .ArnLeftListContainer', 'afterBegin');
                }

                // checkout page methods
                if (this.page_name === 'checkout') {
                    utilities.createModal(
                        [document.querySelector('#theConfirmationPoliciesAjax'), document.querySelector('#theStayPolicies')],
                        'Policies & Fees',
                        'checkout',
                        '#theConfirmationContainer',
                        'afterBegin'
                    );
                    utilities.updateAttribute('#theEmailAddressAjax input', 'email', 'type');
                    // Shows numpad on ios
                    utilities.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
                    utilities.updateAttribute('.CheckOutForm #theAreaCode', 'inputmode');
                    utilities.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
                    utilities.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
                    utilities.updateHTML('#theCharges legend', 'Rate Info');
                    utilities.updateHTML('.taxFeeRow th', '<span>Taxes:</span>');
                    utilities.updateHTML('#theHotel legend', 'Reservation Summary');

                    this.formatCheckoutForm();
                    this.setupReservationSummaryContainer();
                    utilities.moveElementIntoExistingWrapper('#theBookingPage #theRateDescription', '#theHotel', 'beforeEnd');
                    utilities.emailVerificationSetup();
                }

                // root page methods
                if (document.querySelector('.RootBody')) {
                    // this.addAlgoliaSearch();
                    utilities.updateHTML('.RootBody .ArnSearchHeader', 'Start Your Search');
                    utilities.createHTML(
                        '<h1>Start Your Search</h1><h3>From cozy budget hotels to upscale resorts, we have what you are looking for</h3>',
                        '.RootBody .ArnPrimarySearchContainer',
                        'beforeBegin'
                    );
                    utilities.moveOrphanedElementsIntoNewWrapper(
                        [document.querySelector('.RootBody .ArnLeftSearchContainer form')],
                        'root-search-container',
                        '.RootBody .ArnSearchContainerMainDiv',
                        'afterBegin'
                    );
                    utilities.moveElementIntoExistingWrapper('.ArnSecondarySearchOuterContainer', '.ArnPrimarySearchContainer', 'beforeEnd');
                }

                utilities.updateHTML('#thePassCodeAjax label', 'Promocode');
                utilities.updateHTML('#theUserNameAjax label', 'Username/Email');
                utilities.createHTML('<h1>Login</h1>', '#theWBLoginFormBody form', 'beforeBegin');
                utilities.createHTML('<h1>Register</h1>', '#theWBValidatedRegistrationFormBody form', 'beforeBegin');
                utilities.createHTML('<h1>Forgot Password?</h1>', '#theWBForgotPasswordFormBody form', 'beforeBegin');
                utilities.createHTML('<div class="redeem-promocode-container"><h2>Have a promocode?</h2></div>', '#theWBLoginFormBody .ForgotPasswordAction', 'afterEnd');

                if (this.site_config.show_tax_inclusive_rates) {
                    jQuery('#theBody').on('arnMapLoadedEvent', () => {
                        this.getTotalNights().then((nights) => {
                            this.getCurrency().then((currency) => {
                                this.getNightlyRateForMapMarkers(nights, currency);
                            });
                        });
                    });
                }

                if (this.page_name === 'lrg-page') {
                    this.replaceLRGForm();
                }

                // if (this.page_name === 'search-results') {
                //     this.addAlgoliaSearch();
                // }

                jQuery('#theBody').on('arnMapLoadedEvent', async () => {
                    this.map_loaded = true;
                    await utilities.waitForSelectorInDOM('.pollingFinished');

                    if (!document.querySelector('.leaflet-control-scale-line')) {
                        L.control.scale().addTo(window.ArnMap);
                    }

                    this.useLogoForVenueMapMarker();
                    this.highlightMapMarkersOnPropertyHover();
                    this.changeContractedPropertyPinColor();
                });

                utilities.waitForSelectorInDOM('.pollingFinished').then((selector) => {
                    if (!document.querySelector('.SearchHotels')) return;

                    if (!this.map_loaded) {
                        if (!document.querySelector('.leaflet-control-scale-line')) {
                            L.control.scale().addTo(window.ArnMap);
                        }

                        this.useLogoForVenueMapMarker();
                        this.highlightMapMarkersOnPropertyHover();
                        this.changeContractedPropertyPinColor();
                    }
                    utilities.appendToParent('#pagerBottomAjax', '#currentPropertyPage');
                    this.isPropByGateway(this.site_config.exclusive_rate_text, this.site_config.custom_tag_text, this.site_config.lodging.event_name);
                    this.toggleMap();
                    this.addLRGDetails();
                    this.getTotalNights().then((nights) => {
                        this.getCurrency().then((currency) => {
                            this.showFullStayAndNightlyRates(nights, currency);
                        });
                    });
                    this.createStarIcons();
                    this.addHRToProperties();
                    this.showLoaderOnResultsUpdate();
                    this.showSearchContainerOnMobile();
                    this.moveFooterOutOfSearchContainer();
                    this.moveReviewsIntoPropNameContainer();

                    utilities.updateAttribute('.ArnShowRatesLink', '_blank', 'target');

                    this.movePropClassBelowPropName();
                    this.activateCheckboxByClickingOnAssociatedLabel();
                    utilities.updateHTML('.ArnSearchHeader', 'Search');
                    utilities.updateHTML('#ShowHotelOnMap', 'Open Map');
                    utilities.updateHTML('.ArnShowRatesLink', 'Book Rooms');
                    utilities.updateHTML('#CitySearchContainer > span', 'Where:');
                    utilities.updateHTML('.lblRating', 'Stars');
                    utilities.updateHTML('.lblCurrency', 'Currency');
                    utilities.updateHTML('.lblAmenities', 'Amenities');
                    utilities.updateHTML('.lblNearbyCities', 'Nearby Cities');
                    utilities.updateHTML('.lblPropertyType', 'Property Type');
                    utilities.updateHTML('.ArnSortBy', `<div class="sort">Sort</div>`);
                    utilities.moveElementIntoExistingWrapper('.ArnPropClass', '.ArnPropName', 'beforeEnd');
                    utilities.moveElementIntoExistingWrapper('#theOtherSubmitButton', '.ArnSecondarySearchOuterContainer', 'beforeEnd');

                    utilities
                        .createWrapper(
                            '.ArnSortByDealPercent, .ArnSortByDistance, .ArnSortByDealAmount, .ArnSortByAvailability, .ArnSortByPrice, .ArnSortByClass, .ArnSortByType',
                            '.ArnSecondarySearchOuterContainer',
                            'sort-wrapper',
                            'afterBegin'
                        )
                        .then(() => {
                            this.createMobileSortAndFilter();
                            utilities.createHTML('<h4>Sort</h4>', '.sort-wrapper', 'afterBegin');
                        });
                    // utilities
                    //     .moveOrphanedElementsIntoNewWrapper(
                    //         [
                    //             document.querySelector('.ArnSortByDealPercent'),
                    //             document.querySelector('.ArnSortByDistance'),
                    //             document.querySelector('.ArnSortByDealAmount'),
                    //             document.querySelector('.ArnSortByAvailability'),
                    //             document.querySelector('.ArnSortByPrice'),
                    //             document.querySelector('.ArnSortByClass'),
                    //             document.querySelector('.ArnSortByType'),
                    //         ],
                    //         'sort-wrapper',
                    //         '.ArnSortBy',
                    //         'beforeEnd'
                    //     )
                    //     .then(() => {
                    //         this.createMobileSortAndFilter();
                    //         utilities.moveElementIntoExistingWrapper('.sort-wrapper', '.ArnSecondarySearchOuterContainer', 'afterBegin');
                    //         utilities.createHTML('<h4>Sort</h4>', '.sort-wrapper', 'afterBegin');
                    //     });
                });
                this.applyCustomStyles();
                this.addSocialMediaShareButtons(this.site_config.lodging.event_name, this.site_config.lodging.event_id);
            });
        });
    }

    /**
     *@description gets site id from siteId meta tag
     *@return {string}
     */
    async getSiteID() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');

        if (!this.site_id) return;

        return this.site_id;
    }

    async getSiteConfigJSON(site_id) {
        let path = '';

        if (window.location.href.includes('arn_html')) {
            path = `/ares/site_configs/${site_id}/${site_id}.json`;
        } else if (window.location.href.includes('dev-static')) {
            path = `https://dev-static.hotelsforhope.com/ares/site_configs/${site_id}/${site_id}.json`;
        } else {
            path = `https://static.hotelsforhope.com/ares/site_configs/${site_id}/${site_id}.json`;
        }

        try {
            return fetch(path, {method: 'GET'})
                .then((response) => response.json())
                .then((json) => {
                    this.site_config = json;
                    console.log('site_config:', json);
                });
        } catch (error) {
            console.log('could not get site config', error);
        }
        console.log(path);
        return this.site_config;
    }

    /**
     *@description gets page name using css classes from body tag
     */
    async getPageName() {
        const body_classes = document.body;

        if (body_classes.classList.contains('SearchHotels')) {
            this.page_name = 'search-results';
        }

        if (body_classes.classList.contains('SinglePropDetail')) {
            this.page_name = 'property-detail';
        }

        if (body_classes.classList.contains('CheckOutForm')) {
            this.page_name = 'checkout';
        }

        if (body_classes.classList.contains('ConfirmationForm')) {
            this.page_name = 'confirmation';
        }

        if (body_classes.classList.contains('RootBody')) {
            this.page_name = 'landing-page';
        }

        if (body_classes.classList.contains('WBFaq')) {
            this.page_name = 'faq';
        }

        if (body_classes.classList.contains('WBTermsAndConditions')) {
            this.page_name = 'terms-conditions';
        }

        if (body_classes.classList.contains('WBPrivacyPolicy')) {
            this.page_name = 'privacy-policy';
        }

        if (body_classes.classList.contains('WBRateGuaranteeForm2')) {
            this.page_name = 'lrg-page';
        }

        if (body_classes.classList.contains('WBValidatedRegistrationForm')) {
            this.page_name = 'cug-registration';
        }

        return this.page_name;
    }

    async getCurrency() {
        const currency_el = document.querySelector('meta[name="currency"]');
        if (!currency_el) return;

        this.currency = currency_el.getAttribute('content');

        return this.currency;
    }

    /**
     *@description adds a tag for each contracted property on the searchHotels page
     *@param string selector - DOM selector
     */
    updateRoomDescription() {
        const room_description_el = document.querySelectorAll('.RoomDescription');
        if (!document.querySelector('.SinglePropDetail') || !room_description_el || this.site_config.site_type !== 'lodging') return;

        room_description_el.forEach((element) => {
            element.innerHTML = element.innerHTML.replace(
                'Special Event Rate',
                `<span id="exclusive-event-rate" style="font-weight:bold; color:#111; font-size: 17px;">${this.site_config.lodging.event_name}</span>`
            );
        });
    }

    /**
     *@description shows how much a user donated to charity on checkout page - should refactor to allow selector and text as arguments
     */
    donationAmount() {
        if (document.querySelector('.ConfirmationForm')) {
            const nights = document.querySelector('.numberOfNights th').textContent.split(' ')[0];

            if (document.querySelector('.topRoomFunding') && nights !== null) {
                document.querySelector('.topRoomFunding').innerHTML = `<p>Your reservation just generated an <span>$ ${
                    nights * 2
                } donation</span> to <span>RoomFunding</span>.  And that's at no cost to you.</p>`;
            }
        }
    }

    addPerNightToPrice(page, selector) {
        const page_element = document.querySelector(page);
        if (page_element) {
            const price = document.querySelectorAll(selector);
            price.forEach((element) => {
                const parent = element.parentNode;
                if (!parent.querySelector('.perNight')) element.insertAdjacentHTML('afterEnd', '<span class="perNight translateMe">per night</span>');
            });
        }
    }

    updateBookingFeeLanguage() {
        if (document.querySelector('.CheckOutForm')) {
            const due_now = document.querySelector('p.confirmedDueNowCharge span.confirmationAgreement');
            if (due_now) {
                if ((due_now.textContent.includes('4.95') || due_now.textContent.includes('5.00')) && due_now.textContent.includes('Hotels For Hope')) {
                    due_now.insertAdjacentHTML(
                        'beforeEnd',
                        ' <i>This fee is in addition to any immediate charges for prepayment as required in the above deposit and booking terms.</i>'
                    );
                }
            }
        }
    }

    hidePropertyThumbnailArrowIfNoPropertyThumbnails() {
        if (!this.page_name === 'search-results') {
            return;
        }

        const thumbnails = document.querySelectorAll('.ArnImageLink img');
        thumbnails.forEach((thumbnail) => {
            if (thumbnail) {
                const url = thumbnail.getAttribute('src');
                if (url.includes('no_image_300.gif')) {
                    const thumbnail_parent = thumbnail.parentNode;
                    if (thumbnail_parent) {
                        thumbnail_parent.classList.add('no-images');
                        const arrows = thumbnail_parent.previousSibling;
                        if (arrows && arrows.classList.contains('ArnPropImageButtons')) {
                            arrows.style.display = 'none';
                        }
                    }
                }
            }
        });
    }

    createStarIcons() {
        const star_elements = document.querySelectorAll('.ArnPropClass');
        star_elements.forEach((star) => {
            star.style.display = 'inline';
            const number_of_stars = star.textContent;
            const num = number_of_stars.replace(/\D/g, '');
            const star_svg =
                '<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

            if (num === '1') {
                star.innerHTML = star_svg;
            }
            if (num === '2') {
                star.innerHTML = star_svg + star_svg;
            }
            if (num === '3') {
                star.innerHTML = star_svg + star_svg + star_svg;
            }
            if (num === '4') {
                star.innerHTML = star_svg + star_svg + star_svg + star_svg;
            }
            if (num === '5') {
                star.innerHTML = star_svg + star_svg + star_svg + star_svg + star_svg;
            }
        });
    }

    // refactor meeeeee
    createMobileSortAndFilter() {
        if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('.SearchHotels')) return;

        utilities.updateHTML(
            '.sort',
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter'
        );

        utilities.createHTML(
            '<div class="sort-filter-overlay"><div class="sort-filter-container"><div class="sort-filter-header"><h3>Sort &amp; Filter</h3><span class="sort-filter-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="mobile-sort-container"></div><div class="mobile-filter-container"><h4>Filter</h4></div></div></div>',
            'body',
            'beforeEnd'
        );

        const sort_button = document.querySelector('.ArnSortBy');
        const sort_container = document.querySelector('.sort-wrapper');
        const filter_container = document.querySelector('.ArnSecondarySearchOuterContainer');
        const sort_filter_container = document.querySelector('.sort-filter-overlay');

        sort_button.removeEventListener('click', () => {});
        sort_button.addEventListener('click', () => {
            sort_filter_container.classList.toggle('show-sort-filter');
            document.querySelector('.mobile-sort-container').insertAdjacentElement('beforeEnd', sort_container);
            document.querySelector('.mobile-filter-container').insertAdjacentElement('beforeEnd', filter_container);
            filter_container.style.display = 'block';
            sort_container.style.display = 'block';
            document.body.classList.toggle('fixed');
        });

        document.querySelector('.sort-filter-close').addEventListener('click', () => {
            sort_filter_container.classList.toggle('show-sort-filter');
            document.body.classList.toggle('fixed');
        });

        document.querySelector('.sort-wrapper a').addEventListener('click', (target) => {
            target.toElement.classList.toggle('active-filter');
        });

        const filters = filter_container.querySelectorAll('.ArnSearchField');
        filters.forEach((filter) => {
            filter.classList.add('panel');
        });
    }

    showSearchContainerOnMobile() {
        let adults_text = '';
        let location_text = '';
        let check_in_text = '';
        let check_in_date = '';
        let check_out_text = '';
        let check_out_date = '';
        const check_in_el = document.querySelector('meta[name="checkIn"]');
        const check_out_el = document.querySelector('meta[name="checkOut"]');
        const adults_el = document.querySelector('meta[name="numberOfAdults"]');
        const location_el = document.querySelector('meta[name="SearchLocation"]');
        const content_el = document.querySelector('.SearchHotels .ArnPrimarySearchContainer');

        if (!check_in_el || !check_out_el || !location_el || !adults_el) return;

        adults_text = adults_el.getAttribute('content');
        location_text = location_el.getAttribute('content');
        check_in_text = check_in_el.getAttribute('content');
        check_out_text = check_out_el.getAttribute('content');

        check_in_date = dayjs(check_in_text);
        check_out_date = dayjs(check_out_text);

        utilities.createHTML(
            `
            <div class="show-search-container">
                <span class="search-close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                        <polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"></polyline>
                        <polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"></polyline>
                    </svg>
                </span>
                <svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <div class="search-info">
                    <h3>${location_text}</h3>
                    <span>
                        <span class="search-dates">${check_in_date.format('MMMM D')} - ${check_out_date.format('MMMM D')}</span>
                        <span class="adults-count">${adults_text} guests</span>
                    </span>
                </div>
            </div>`,
            '.SearchHotels .ArnPrimarySearchOuterContainer',
            'beforeBegin'
        );

        document.querySelector('.show-search-container').addEventListener('click', () => {
            content_el.classList.toggle('show-search');
            document.querySelector('.search-close').classList.toggle('show-search-close');
        });
    }

    buildMobileMenu() {
        const menu_el = document.querySelector('#commands');
        const header_el = document.querySelector('#AdminControlsContainer');

        if (!menu_el && !header_el) return;

        header_el.insertAdjacentHTML('beforeEnd', '<div class="hamburger" id="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>');

        const menu_button_el = document.querySelector('#hamburger');

        if (!menu_button_el) return;

        menu_button_el.addEventListener('click', () => {
            menu_button_el.classList.toggle('is-active');
            menu_el.classList.toggle('active');
        });
    }

    showAdditionalPolicies() {
        const additional_policies = document.querySelector('#theStayPolicies');
        const additional_policies_legend = additional_policies.querySelector('legend');
        const additional_policies_height = additional_policies.offsetHeight;
        const policies = document.querySelector('#theConfirmationPoliciesAjax');

        if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('#theBookingPage')) return;

        policies.insertAdjacentElement('afterEnd', additional_policies);
        utilities.moveOrphanedElementsIntoNewWrapper(document.querySelectorAll('#theStayPolicies *'), 'policies-container', '#theStayPolicies', 'beforeEnd');
        additional_policies.insertAdjacentElement('beforeBegin', additional_policies_legend);

        additional_policies.insertAdjacentHTML(
            'beforeEnd',
            `
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
    `
        );

        additional_policies_legend.addEventListener('click', () => {
            additional_policies.classList.toggle('show-policies');
        });
    }

    updatePropReviewsURLToUseAnchor() {
        const review_link = document.querySelector('.reviewCount a');

        if (this.page_name !== 'property-detail' || !review_link) return;

        review_link.setAttribute('href', '#thePropertyReviews');
    }

    moveFooterOutOfSearchContainer() {
        if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnSupportBottom')) return;

        document.body.insertAdjacentElement('beforeEnd', document.querySelector('.ArnSupportBottom'));
    }

    moveReviewsIntoPropNameContainer() {
        const prop_names = document.querySelectorAll('.SearchHotels .ArnPropName');

        if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnContainer')) return;

        prop_names.forEach((prop_name) => {
            prop_name.insertAdjacentElement('beforeEnd', prop_name.parentElement.querySelector('.ArnTripAdvisorDetails'));
        });
    }

    toggleMap() {
        const map = document.querySelector('#ArnPropertyMap');
        const map_btn = document.querySelector('#arnCloseAnchorId');
        const header = document.querySelector('header');
        const currency = document.querySelector('.config-container');

        if (!map_btn || !map) return;

        map_btn.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-map fa-w-18 fa-2x"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg><span> Open Map</span>';

        map_btn.addEventListener('click', () => {
            map_btn.classList.toggle('closeMap');
            map.classList.toggle('showMap');
            document.body.classList.toggle('fixed');
            header.classList.toggle('hideElement');
            currency.classList.toggle('hideElement');

            map_btn.classList.contains('closeMap') ? (map_btn.querySelector('span').textContent = ' Close Map') : (map_btn.querySelector('span').innerHTML = ' Open Map');
        });
    }

    accordion(main_container, content_container, open_button) {
        if (!document.querySelector(main_container)) {
            return;
        }
        const main_container_el = document.querySelector(main_container);
        const open_el = main_container_el.querySelector(open_button);

        const content_el = main_container_el.querySelector(content_container);
        const svg_arrow =
            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
        const height = content_el.offsetHeight;

        document.querySelector(main_container).insertAdjacentHTML(
            'beforeEnd',
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
        `
        );
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

        prop_containers.forEach((container) => {
            const prop_class = container.querySelector('.ArnPropClass');
            const prop_name = container.querySelector('.ArnPropName');
            if (container && prop_class && prop_name) {
                prop_name.insertAdjacentElement('beforeEnd', prop_class);
            }
        });
    }

    setupReservationSummaryContainer() {
        let check_in_date = '';
        let check_in_text = '';
        let check_out_date = '';
        let check_out_text = '';
        const check_in_element = document.querySelector('.checkInRow td');
        const check_out_element = document.querySelector('.checkOutRow td');
        const currency_element = document.querySelector('meta[name="currency"]');

        if (!check_in_element || !check_out_element || !currency_element) return;

        check_in_text = check_in_element.textContent;
        check_out_text = check_out_element.textContent;

        check_in_date = dayjs(check_in_text).format(this.site_config.dayjs_date_format);
        check_out_date = dayjs(check_out_text).format(this.site_config.dayjs_date_format);

        utilities.createHTML(`<span class="date-container">${check_in_date} - ${check_out_date}`, '#theHotelAddress', 'beforeBegin');
        utilities.moveElementIntoExistingWrapper('.totalRow .discount', '.theHotelName', 'afterEnd');
    }

    formatCheckoutForm() {
        const room_reservations = document.querySelectorAll('.WBGuestFormFields');
        let reservation_count = 0;

        room_reservations.forEach((reservation) => {
            reservation_count += 1;

            utilities.moveElementIntoExistingWrapper(
                `#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardBillingNameAjax${reservation_count - 1}`,
                `#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardNumberAjax`,
                'afterEnd'
            );

            utilities.createWrapper(
                `.RoomNumber-${reservation_count} .guestCityZip > table > tbody > tr > td > div, .RoomNumber-${reservation_count} .guestCityZip > table > tbody > tr >td:nth-child(2) > div, #theStateAjax${reservation_count}, #theCountryAjax${reservation_count}`,
                `#theBillingAddressAjax${reservation_count}`,
                `billing-details-container`,
                'afterEnd'
            );

            utilities.createWrapper(
                `.RoomNumber-${reservation_count} #theCreditCardBillingNameAjax${reservation_count}, .RoomNumber-${reservation_count} #theCardExpirationFieldsAjax, .RoomNumber-${reservation_count} #theCardVerificationAjax`,
                `.RoomNumber-${reservation_count} #theCreditCardNumberAjax`,
                `credit-card-details`,
                'afterEnd'
            );

            utilities.updateHTML(`#theCreditCardBillingNameAjax${reservation_count - 1} label`, "Cardholder's Name");
            utilities.updateHTML(`#theBillingAddressAjax${reservation_count - 1} label`, 'Billing Address');
            utilities.updateHTML(`.RoomNumber-${reservation_count} > legend`, 'Billing Info');
            utilities.updateHTML(
                `.RoomNumber-${reservation_count} .paymentMethods`,
                '<span class="creditcards"><img src="https://dev-static.hotelsforhope.com/ares/images/credit_cards/credit_cards.png" alt="Credit Cards"></span>'
            );
            utilities.createHTML('<legend>Credit Card Info</legend>', `.RoomNumber-${reservation_count} .guestBillingAddress`, 'beforeBegin');
        });
    }

    setRootPageBackgroundImage() {
        if (!this.site_config) return;
        document.body.insertAdjacentHTML(
            'beforeEnd',
            `

            <style>
                .RootBody{
                    background: ${this.site_config.banner_image_url};
                }
            </style>`
        );
    }

    // probably a much better way to do this
    applyConfigColors() {
        if (!this.site_config) return;

        document.body.insertAdjacentHTML(
            'beforeEnd',
            `
        <style>
        /* Header */

        header {
            justify-content: ${this.site_config.header.logo_flex_position};
            background: ${this.site_config.header.background};
        }

        .logo img{
            max-width: ${this.site_config.header.logo_max_width};
        }

        /* Primary Background Color */
            #searching h2:after,
            #theConfirmationButton,
            .ArnPrimarySearchContainer,
            .ArnShowRatesLink,
            .ArnTripAdvisorDetails.HasReviews .ratingCount,
            .CreateAnAccountAction,
            .RootBody #theOtherSubmitButton,
            .SimpleSearch,
            .WBForgotPasswordFormActions .submit,
            .WBLoginFormActions .submit,
            .WBValidatedRegistrationFormActions .submit,
            .arn-leaflet-reset-button,
            .bookRoom,
            .HoldRoomsForm .submit,
            #datePromptContainer+.SimpleSearch .CheckRates .submit,
            .yui3-skin-sam .yui3-calendar-day:hover,
            .sort-wrapper .active,
            .sort-wrapper a:hover {
                background:${this.site_config.primary_color}
            }

            @media screen and (max-width:1105px) {

                #arnCloseAnchorId,
                #arnCloseAnchorId:active,
                #arnCloseAnchorId:focus,
                #arnCloseAnchorId:hover {
                    border: 1px solid ${this.site_config.primary_color}
                }

                .closeMap {
                    border: 1px solid ${this.site_config.primary_text_color}!important;
                    background-color: ${this.site_config.primary_color}!important;
                    color: ${this.site_config.primary_text_color}!important;
                }
            }

            @media screen and (max-width:800px) {

                #commands a:active,
                #commands a:focus,
                #commands a:hover,
                #commands button:active,
                #commands button:focus,
                #commands button:hover,
                .sort-wrapper a:before,
                .sort-wrapper a.active-filter:before,
                .sort {
                    background:${this.site_config.primary_color}
                }
            }

            #searching,
            #theConfirmationButton,
            .HoldRoomsForm .submit,
            .ArnPrimarySearchContainer,
            .ArnShowRatesLink,
            .ArnTripAdvisorDetails.HasReviews .ratingCount,
            .SinglePropDetail .CheckRates .submit,
            .CreateAnAccountAction,
            .RootBody #theOtherSubmitButton,
            .SearchHotels #theSubmitButton,
            .SimpleSearch,
            .WBForgotPasswordFormActions .submit,
            .WBLoginFormActions .submit,
            .WBValidatedRegistrationFormActions .submit,
            .arnMapPopup .rate,
            #datePromptContainer+.SimpleSearch .CheckRates .submit,
            .bookRoom,
            .sort-wrapper .active,
            .sort-wrapper a:hover {
                color:${this.site_config.primary_text_color}
            }

            span.exclusive-rate {
                background: ${this.site_config.secondary_color};
                color: #fff;
            }


            @media screen and (max-width:1105px) {

                #arnCloseAnchorId,
                #arnCloseAnchorId:active,
                #arnCloseAnchorId:focus,
                #arnCloseAnchorId:hover {
                    color:${this.site_config.secondary_text_color}
                }
            }

            @media screen and (max-width: 800px) {

                #commands a:active,
                #commands a:focus,
                #commands a:hover,
                #commands button:active,
                #commands button:focus,
                #commands button:hover,
                .sort {
                    color:${this.site_config.primary_text_color}
                }
            }
            .holdRoom,
            .reviewCount a,
            #theAdditionalEmailsLink a,
            #theOtherSubmitButton,
            .SinglePropDetail .ArnRateCancelAnchor,
            .open-modal,
            .lowest-rate-link,
            .SinglePropDetail .RateCalendarPopupAnchor,
            .ArnContentContainer legend {
                color:${this.site_config.secondary_text_color};
            }
            
            input#theSubmitButton,
            .RootBody #theOtherSubmitButton,
            .bookRoom,
            .arn-leaflet-reset-button,
            input#theConfirmationButton,
            a.ArnShowRatesLink {
                background: ${this.site_config.primary_color};
                color: ${this.site_config.primary_text_color};
                border: 1px solid ${this.site_config.border_color};
            }

            .CheckRates input.submit,
            .CheckRates input.submit,
            .CheckRates input.submit {
                background: ${this.site_config.primary_color};
                color: ${this.site_config.primary_text_color};
            }

            input#theSubmitButton:hover,
            input#theSubmitButton:focus,
            input#theSubmitButton:active,
            #theOtherSubmitButton:hover,
            #theOtherSubmitButton:focus,
            #theOtherSubmitButton:active,
            .RootBody #theOtherSubmitButton:hover,
            .RootBody #theOtherSubmitButton:focus,
            .RootBody #theOtherSubmitButton:active,
            .bookRoom:hover,
            .bookRoom:focus,
            .bookRoom:active,
            .arn-leaflet-reset-button:hover,
            .arn-leaflet-reset-button:focus,
            .arn-leaflet-reset-button:active,
            input#theConfirmationButton:hover,
            input#theConfirmationButton:focus,
            input#theConfirmationButton:active,
            a.ArnShowRatesLink:hover {
                background: ${this.site_config.button_hover_background_color};
                color: ${this.site_config.button_hover_text_color};
                border: 1px solid ${this.site_config.primary_color};
            }

            .CheckRates input.submit:hover,
            .CheckRates input.submit:focus,
            .CheckRates input.submit:active {
                background: ${this.site_config.button_hover_background_color};
                color: ${this.site_config.button_hover_text_color};
            }

            .SinglePropDetail #moreRatesLink {
                color: ${this.site_config.primary_color};
                border-color: ${this.site_config.primary_color};
            }
            
            .SinglePropDetail #moreRatesLink:hover {
                background-color: ${this.site_config.primary_color}
            }

            @media screen and (max-width:800px) {
                #theBookingPage legend#policies-legend {
                    color:${this.site_config.secondary_text_color}
                }
            }

            header,
            #AdminControlsContainer {
                border-bottom:3px solid ${this.site_config.border_color}
            }

            .arnMapMarker.contracted-pin,
            .arnMapMarker.contracted-pin.highlight{
                border: 1px solid ${this.site_config.primary_text_color};
                background: ${this.site_config.secondary_color};
                color: ${this.site_config.primary_text_color};
            }

            .arnMapMarker.contracted-pin:hover {
                border: 1px solid ${this.site_config.secondary_color};
                background: ${this.site_config.primary_text_color};
                color: ${this.site_config.secondary_color};
            }

            .arnMapMarker.contracted-pin .arnMapMarkerTriangle {
                border-top-color: ${this.site_config.secondary_color};
            }

            #theOtherSubmitButton,
            .ArnSecondarySearchOuterContainer select,
            .ArnShowRatesLink,
            .RootBody #theOtherSubmitButton,
            .bookRoom,
            .sort,
            .HoldRoomsForm .submit {
                border:1px solid ${this.site_config.border_color}
            }

            .holdRoom {
                border: 1px solid ${this.site_config.border_color}
            }

            @media screen and (max-width:1105px) {
                #arnCloseAnchorId,
                .sort {
                    border:1px solid ${this.site_config.primary_color}
                }
            }

            @media screen and (max-width:800px) {
                .sort-wrapper a:before {
                    border:2px solid ${this.site_config.primary_color}
                }
            }
        </style>
        `
        );
    }

    async applyCustomStyles() {
        if (!this.site_config.has_custom_styles) return;
        document.body.insertAdjacentHTML('beforeend', `<link href="${this.site_config.custom_styles_url}" rel="stylesheet">`);
    }

    setFontFromConfig() {
        if (!this.site_config) return;

        utilities.createHTML(`<link href="${this.site_config.google_font_url}" rel="stylesheet">`, 'head', 'beforeEnd');
        document.body.insertAdjacentHTML('beforeEnd', `<style>*{font-family: ${this.site_config.google_font_name}, 'Helvetica' !important;}</style>`);
    }

    // refactor me, please!
    showLanguageFromCongif() {
        let language_label = '';
        let active_language = '';

        const language_container_el = document.querySelector('#language');
        const config_container = document.querySelector('.config-container');
        const active_language_el = document.querySelector('meta[name="theme"]');

        if (!this.site_config || !config_container || !active_language_el || !language_container_el) return;
        if (!this.site_config.show_language_select) {
            language_container_el.style.display = 'none';
            return;
        }

        active_language = active_language_el.getAttribute('content');
        document.querySelector(`.language-container div[value='${active_language}']`).classList.add('active-language');
        document.body.insertAdjacentElement('afterBegin', config_container);
        config_container.insertAdjacentElement('afterBegin', language_container_el);
        language_label = language_container_el.querySelector('#language-label');
        language_label.querySelector('span').innerHTML = document.querySelector('.active-language').innerHTML;

        language_label.addEventListener('click', () => {
            language_container_el.querySelector('.language-container').classList.toggle('show-language-container');

            // return if ie - ie can't toggle svgs
            if (window.document.documentMode) return;

            language_label.querySelector('svg').classList.toggle('flip-svg');
        });

        window.addEventListener('click', (e) => {
            if (document.querySelector('.show-language-container')) {
                if (e.target === document.querySelector('#language-label') || e.target.parentNode === document.querySelector('.language-container')) return;

                document.querySelector('.language-container').classList.toggle('show-language-container');

                // return if ie - ie can't toggle svgs
                if (window.document.documentMode) return;

                language_label.querySelector('svg').classList.toggle('flip-svg');
            }
        });
    }

    // needs a refactor real bad
    createCurrencyDropDown() {
        let currencies = '';
        let clicked_currency;
        const currencies_obj = {};
        let selected_currency = '';
        let submit;
        let currencies_select;
        let currencies_node_list;

        const currency_label = document.querySelector('#currency-label');
        const currencies_container = document.querySelector('.currencies');
        const config_container = document.querySelector('.config-container');
        const top_currencies_container = document.querySelector('.top-currencies');

        if (this.page_name === 'search-results' || this.page_name === 'landing-page') {
            submit = document.querySelector('#theOtherSubmitButton');
            currencies_select = document.querySelector('#CurrenciesContainer select');
            currencies_node_list = document.querySelectorAll('#CurrenciesContainer select option');
        } else if (this.page_name === 'property-detail') {
            submit = document.querySelector('.CheckRates .submit');
            currencies_select = document.querySelector('.ArnCurrency select');
            currencies_node_list = document.querySelectorAll('.ArnCurrency select option');
        }

        if (!currencies_node_list || !config_container || !currency_label || !top_currencies_container || !currencies_select) return;

        currencies_node_list.forEach((currency) => {
            if (currency.getAttribute('selected')) {
                selected_currency = currency.value;
            }

            currencies_obj[currency.label] = currency.value;
        });

        currencies = Object.entries(currencies_obj);

        currencies.forEach((currency) => {
            if (
                currency[0] === 'United States Dollars' ||
                currency[0] === 'Euro' ||
                currency[0] === 'United Kingdom Pounds' ||
                currency[0] === 'Mexico Pesos' ||
                currency[0] === 'Canada Dollars' ||
                currency[0] === 'Australia Dollars'
            ) {
                top_currencies_container.insertAdjacentHTML('beforeEnd', `<div id=${currency[1]}>${currency[0]}</div>`);
            }

            currencies_container.insertAdjacentHTML('beforeEnd', `<div id=${currency[1]}>${currency[0]}</div>`);
        });

        currency_label.addEventListener('click', () => {
            currencies_container.classList.toggle('show-currencies-container');

            // return if ie - ie can't toggle an svg
            if (window.document.documentMode) return;

            currency_label.querySelector('svg').classList.toggle('flip-svg');
        });

        currencies_container.addEventListener('click', (e) => {
            if (!e.target.getAttribute('id')) return;

            clicked_currency = e.target.getAttribute('id');
            document.querySelector('.active-currency').classList.remove('active-currency');
            document.getElementById(clicked_currency).classList.add('active-currency');
            currency_label.querySelector('span').textContent = document.querySelector('.active-currency').textContent;
            currencies_select.value = clicked_currency;

            if (document.querySelector('.SearchHotels')) submit.click();
        });

        document.getElementById(selected_currency).classList.add('active-currency');

        window.addEventListener('click', (e) => {
            if (document.querySelector('.show-currencies-container')) {
                if (
                    e.target === document.querySelector('.currencies') ||
                    e.target === document.querySelector('#currency-label') ||
                    e.target.parentNode === document.querySelector('.currencies') ||
                    e.target.parentNode === document.querySelector('.top-currencies')
                )
                    return;

                currencies_container.classList.toggle('show-currencies-container');

                // return if ie - ie can't toggle svgs
                if (window.document.documentMode) return;
                currency_label.querySelector('svg').classList.toggle('flip-svg');
            }
        });

        currency_label.querySelector('span').textContent = document.querySelector('.active-currency').textContent;
    }

    setupDatePrompt() {
        const date_prompt = document.querySelector('#theDatePrompt');

        if (!date_prompt) return;

        date_prompt.querySelector('#datePromptContainer').insertAdjacentHTML('afterBegin', `<img src="${this.site_config.header.logo_file_location}" alt="Logo">`);
    }

    highlightMapMarkersOnPropertyHover() {
        let prop_id;
        let prop_id_el;
        const properties = document.querySelectorAll('.ArnContainer');
        const prop_container = document.querySelector('#currentPropertyPage');

        if (!prop_container) return;

        properties.forEach((property) => {
            property.addEventListener('mouseenter', (e) => {
                prop_id_el = property.parentElement.querySelector('.propId');

                if (!prop_id_el) return;

                prop_id = prop_id_el.textContent;
                ArnMapDispatcher.eventPropertyHighlightOn(prop_id);
            });

            property.addEventListener('mouseleave', (e) => {
                ArnMapDispatcher.eventPropertyHighlightOff(prop_id);
            });
        });
    }

    // refactor me, please!
    showFullStayAndNightlyRates(nights, currency) {
        let rate;
        let properties;
        let average_rate;
        let full_stay_rate;
        let fixed_full_stay;

        if (this.site_config.show_tax_inclusive_rates) {
            if (document.querySelector('.SearchHotels')) {
                properties = document.querySelectorAll('.ArnContainer');
                properties.forEach((property) => {
                    average_rate = property.querySelector('.ArnRateCell .ArnPriceCell .averageNightly');
                    full_stay_rate = property.querySelector('.arnPrice .arnUnit');

                    if (!average_rate || !full_stay_rate) return;

                    average_rate.insertAdjacentHTML('afterEnd', `<div>per night</div>`);
                    full_stay_rate.insertAdjacentHTML('beforeEnd', `<span> for ${nights} nights </span>`);

                    if (nights === 1) property.querySelector('.arnPrice').style.display = 'none';
                });
            }

            if (document.querySelector('.SinglePropDetail')) {
                properties = document.querySelectorAll('.ArnNightlyRate');
                properties.forEach((property) => {
                    average_rate = property.querySelector('.averageNightly');
                    full_stay_rate = property.querySelector('strong');

                    if (!average_rate || !full_stay_rate) return;

                    average_rate.insertAdjacentHTML('afterEnd', `<div>per night</div>`);
                    full_stay_rate.insertAdjacentHTML('beforeEnd', `<span> for ${nights} nights </span>`);

                    if (nights === 1) property.querySelector('.averageNightly').style.display = 'none';
                });
            }
        }

        if (!this.site_config.show_tax_inclusive_rates) {
            if (document.querySelector('.SearchHotels')) {
                properties = document.querySelectorAll('.ArnContainer');
                properties.forEach((property) => {
                    rate = property.querySelector('.arnPrice');
                    average_rate = property.querySelector('.arnPrice .arnUnit');

                    if (!average_rate || !rate) return;

                    full_stay_rate = parseFloat(average_rate.textContent) * nights;
                    fixed_full_stay = full_stay_rate.toFixed(2);

                    if (!average_rate) return;

                    currency === 'USD'
                        ? rate.insertAdjacentHTML('beforeEnd', `<div>per night</div><div class="full-stay">$${fixed_full_stay} for ${nights} nights </div>`)
                        : rate.insertAdjacentHTML('beforeEnd', `<div>per night</div><div class="full-stay">${fixed_full_stay} ${currency} for ${nights} nights </div>`);
                    if (nights === 1) property.querySelector('.full-stay').style.display = 'none';
                });

                document.body.insertAdjacentHTML('beforeEnd', '<style>.arnCurrency,.arnUnit{font-size: 17px;}.arnCurrency + div{font-weight:500;}</style>');
            }

            if (document.querySelector('.SinglePropDetail')) {
                properties = document.querySelectorAll('.ArnNightlyRate');
                properties.forEach((property) => {
                    average_rate = property.querySelector('strong');
                    full_stay_rate = parseFloat(average_rate.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '')) * nights;

                    if (!average_rate || !full_stay_rate) return;

                    fixed_full_stay = full_stay_rate.toFixed(2);

                    if (!fixed_full_stay) return;

                    currency === 'USD'
                        ? average_rate.insertAdjacentHTML('beforeEnd', `<div>per night</div><div class="full-stay">$${fixed_full_stay} for ${nights} nights </div>`)
                        : average_rate.insertAdjacentHTML('beforeEnd', `<div>per night</div><div class="full-stay">${fixed_full_stay} ${currency} for ${nights} nights </div>`);
                    if (nights === 1) property.querySelector('.full-stay').style.display = 'none';
                });

                document.body.insertAdjacentHTML(
                    'beforeEnd',
                    '<style>.ArnNightlyRate strong{font-size: 17px !important;}.ArnNightlyRate strong div:first-child{font-weight:500;margin-bottom:4px;}.ArnNightlyRate strong div{font-size:13px;}</style>'
                );
            }
        }
    }

    async getTotalNights() {
        const check_in_el = document.querySelector('meta[name="checkIn"]');
        const check_out_el = document.querySelector('meta[name="checkOut"]');

        if (!check_in_el || !check_out_el) return;

        const check_in = new Date(check_in_el.getAttribute('content'));
        const check_out = new Date(check_out_el.getAttribute('content'));
        const nights = (check_out.getTime() - check_in.getTime()) / (1000 * 3600 * 24);

        return nights;
    }

    getNightlyRateForMapMarkers(nights, currency) {
        let average_rate;
        let full_stay_rate;
        let fixed_average_rate;
        const map_markers = document.querySelectorAll('.arnMapMarkerSpan');

        map_markers.forEach((marker) => {
            full_stay_rate = marker.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '');
            average_rate = full_stay_rate / nights;
            fixed_average_rate = parseFloat(average_rate).toFixed(0);

            currency === 'USD' ? (marker.textContent = `$${fixed_average_rate}`) : (marker.textContent = `${fixed_average_rate} ${currency}`);
        });
    }

    addTitleToProperties() {
        let property_name;
        let property_name_el;
        const properties = document.querySelectorAll('.ArnContainer');

        if (!document.querySelector('.SearchHotels')) return;

        properties.forEach((property) => {
            property_name_el = property.querySelector('.ArnPropNameLink');
            property_name = property_name_el.querySelector('span').textContent;

            property_name_el.setAttribute('title', property_name);
        });
    }

    showLoaderOnResultsUpdate() {
        const loader = document.querySelector('#searching');
        const update_buttons = document.querySelectorAll('#theSubmitButton', '#theOtherSubmitButton');

        if (!document.querySelector('.SearchHotels')) return;

        update_buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if (document.querySelector('input#theCheckIn').value === '') {
                    this.style_validation_fields('input#theCheckIn');
                    return;
                }
                loader.style.display = 'block';
            });
        });
    }

    changeContractedPropertyPinColor() {
        const property_elements = document.querySelectorAll('.ArnProperty');
        const map_pins_list = document.querySelectorAll('.arnMapMarker');
        if (!property_elements) return;

        const properties_array = [];
        const contracted_properties_index = [];

        property_elements.forEach((property) => {
            if (property.classList.contains('ArnPropertyTierOne') || property.classList.contains('ArnPropertyTierTwo')) {
                properties_array.push(true);
            } else {
                properties_array.push(false);
            }
        });

        properties_array.forEach((property, i) => {
            if (!property) return;

            contracted_properties_index.push(i);
        });

        contracted_properties_index.forEach((contracted_property_index) => {
            map_pins_list[contracted_property_index].classList.add('contracted-pin');
        });
    }

    // map will need a redraw for this to work - will come back to this
    setMapMarkerSize() {
        let currency = '';
        const currency_el = document.querySelector('meta[name="currency"]');
        const map_markers = document.querySelectorAll('.arnMapMarker');

        if (!currency_el || !map_markers) return;

        currency = currency_el.getAttribute('content');

        if (currency === 'USD') return;

        map_markers.forEach((marker) => {
            marker.style.width = '85px';
        });
    }

    useLogoForVenueMapMarker() {
        const map_markers = document.querySelectorAll('.arn-green-marker-icon');

        if (!this.site_config) return;

        map_markers.forEach((marker) => {
            marker.setAttribute('src', `${this.site_config.map_marker_image_url}`);
        });
    }

    activateCheckboxByClickingOnAssociatedLabel() {
        const checkbox_wrappers = document.querySelectorAll('.ArnSearchField div');

        if (!checkbox_wrappers) return;

        checkbox_wrappers.forEach((wrapper) => {
            if (!wrapper.querySelector('input[type="checkbox"]')) return;

            wrapper.querySelector('span').addEventListener('click', (e) => {
                wrapper.querySelector('input[type="checkbox"]').click();
            });
        });
    }

    addHRToProperties() {
        const props = document.querySelectorAll('.ArnProperty');

        if (!props) return;

        props.forEach((prop) => {
            prop.insertAdjacentHTML('afterEnd', '<hr class="prop-hr">');
        });
    }

    /**
     *@description Swaps out the city search for lat/lng geo search and autocomplete for Algolia's autocomplte.
     */
    addAlgoliaSearch() {
        let lat_lng;
        let default_lat_lng;
        let url;
        const {origin} = window.location;
        const params = new URL(window.location.href);
        const search_params = new URLSearchParams(params.search);

        function setInputToRequired(selector) {
            if (!document.querySelector(selector)) return;
            document.querySelector(selector).required = true;
        }

        function hideArnSearchElements(selectors) {
            if (!document.querySelector('.SearchHotels')) return;
            const elements = document.querySelectorAll(selectors);

            elements.forEach((element) => {
                element.style.display = 'none';
            });
        }

        function removeArnSearchBar(selector) {
            if (!document.querySelector(selector)) return;

            document.querySelector(selector).remove();
        }

        function insertAlgoliaSearch(page, selector, adjacent_location, html) {
            if (!document.querySelector(page)) return;

            document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
        }

        function prepopulateDestinationInputOnSearchHotels() {
            if (!document.querySelector('.SearchHotels')) return;

            const destination = search_params.get('destination');
            const algolia_input = document.querySelector('input#address-input');
            algolia_input.value = destination;

            algolia_input.addEventListener('click', () => {
                algolia_input.value = '';
            });
        }

        function setDropdownIndex(dropdown_selector) {
            const dropdown = document.querySelector(dropdown_selector);
            let value = dropdown.querySelector(`option[value="${dropdown.value}"]`).textContent;

            dropdown.addEventListener('change', () => {
                for (let i = 0; i < dropdown.length; i += 1) {
                    if (dropdown[i].selected) {
                        dropdown.selectedIndex = i;
                        value = dropdown[i].textContent;
                        break;
                    }
                }
                return value;
            });
            return value;
        }

        const construct_url_on_submit = () => {
            const arn_submit_btn = document.querySelector('input#theSubmitButton');
            arn_submit_btn.setAttribute('onClick', '');

            document.querySelector('form#searchForm').addEventListener('submit', (e) => {
                e.preventDefault();

                const rooms_value = setDropdownIndex('select#rooms');
                const adults_value = setDropdownIndex('select#adults');
                const check_in_value = dayjs(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY');
                const check_out_value = dayjs(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY');
                const nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');
                const destination_value = document.querySelector('input#address-input').value;

                const original_params = document.querySelector('meta[name="originalParams"]').content;
                const original_params_url = new URLSearchParams(original_params);

                const build_url = (lat, lng) => {
                    url = `${origin}/v6/?currency=${this.currency}&type=geo&siteid=${this.site_id}&longitude=${lng}&latitude=${lat}&radius=${this.site_config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${this.site_config.distance_unit}&mapSize=${this.site_config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
                };

                if (lat_lng) build_url(lat_lng.lat, lat_lng.lng);
                else if (default_lat_lng) build_url(default_lat_lng.lat, default_lat_lng.lng);
                else if (!lat_lng && !default_lat_lng && this.page_name === 'search-results') build_url(original_params_url.get('latitude'), original_params_url.get('longitude'));

                window.location.href = url;
            });
        };

        insertAlgoliaSearch('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
        insertAlgoliaSearch(
            '.SearchHotels',
            'div#theSearchBox',
            'afterBegin',
            '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />'
        );
        removeArnSearchBar('input#city');
        prepopulateDestinationInputOnSearchHotels();
        setDropdownIndex('select#rooms');
        setDropdownIndex('select#adults');
        setInputToRequired('input#theCheckIn');

        jQuery('#theBody').on('arnMapLoadedEvent', () => {
            if (search_params.has('locationlabel') || search_params.has('points')) return;
            hideArnSearchElements('img.arn-green-marker-icon');
        });

        hideArnSearchElements('.ArnGoCitySearch, div.ArnSearchHotelsImg+br, .ArnGoLandmarkSearch, .ArnGoAirportSearch, div#HotelNameContainer');
        construct_url_on_submit();

        (() => {
            const places_autocomplete = places({
                appId: this.site_config.algolia_app_id,
                apiKey: this.site_config.algolia_api_key,
                container: document.querySelector('input#address-input'),
            }).configure({
                aroundLatLngViaIP: 'false',
                type: 'city',
            });
            places_autocomplete.on('change', function resultSelected(e) {
                document.querySelector('input#address-input').value = e.suggestion.value || '';
                lat_lng = e.suggestion.latlng;
            });
            places_autocomplete.on('suggestions', function saveDefaultGeo(e) {
                // eslint-disable-next-line no-underscore-dangle
                default_lat_lng = e.rawAnswer.hits[0]._geoloc;
            });
        })();
    }

    /**
     *@description Looks at the prop id and checks if it should have a custom tag or sash
     @param string takes the text for the exclusive rate sash
     @param string takes the text for the custom tag text
     */
    isPropByGateway(exclusiveRateText, customTagText, eventName) {
        if (this.page_name === 'search-results') {
            const props = document.querySelectorAll('div.ArnProperty');
            props.forEach((el) => {
                if (el.classList.contains('ArnPropertyTierTwo') && this.site_config.exclusive_rate_text !== '' && this.site_config.custom_tag_text !== '') {
                    addCustomTag(customTagText, el);
                    addExclusiveRatesSash(exclusiveRateText, el);
                }
                if (el.classList.contains('ArnPropertyTierOne') && this.site_config.exclusive_rate_text !== '') {
                    addExclusiveRatesSash(exclusiveRateText, el);
                }
            });
        }

        if (this.page_name === 'property-detail') {
            const rates = document.querySelectorAll('div.rateRow');
            rates.forEach((el) => {
                if (el.querySelector('table.SB16') || (el.querySelector('table.SB20') && this.site_config.exclusive_rate_text !== '')) {
                    updateRoomDescription(el, eventName, exclusiveRateText);
                }
            });
        }

        /**
        *@description adds a sash to a property
        @param string DOM selector 
        @param string Event name from site_config 
        @param string Exclusive rate text
        */
        function updateRoomDescription(selector, name, text) {
            if (!document.querySelector('.SinglePropDetail')) return;
            const original = selector.querySelector('.RoomDescription');
            original.insertAdjacentHTML('afterbegin', `<span id="exclusive-event-rate">${name} ${text}</span>`);
        }

        /**
        *@description adds a sash to a property
        @param string takes the text for the exclusive rate sash
        @param string is the parent element for the current iteration 
        */
        function addExclusiveRatesSash(text, selector) {
            selector.querySelector('div.ArnPropThumb').insertAdjacentHTML('afterbegin', `<span class="exclusive-rate">${text}</span>`);
        }

        /**
        *@description adds a custom tag to a property thumbnail image
        @param string takes the text for custom tag
        @param string is the parent element for the current iteration 
        */
        function addCustomTag(text, selector) {
            selector.querySelector('div.ArnPropThumb').insertAdjacentHTML('beforeend', `<div class="custom-tag">${text} </div>`);
        }
    }

    addLRGDetails() {
        if (this.site_config.site_type !== 'lodging' || !this.site_config.lodging.is_lrg) return;

        const properties = document.querySelectorAll('.S16, .S20');

        if (!properties) return;

        properties.forEach((property) => {
            if (!property.querySelector('.arnPrice')) return;

            property.querySelector('.arnPrice').insertAdjacentHTML(
                'afterEnd',
                `
                <a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=${this.site_id}&amp;theme=standard" target="_blank" class="lowest-rate-link">Lowest Rate. <span>Guaranteed.</span></a>
            `
            );
        });
    }

    async replaceLRGForm() {
        if (this.site_config.site_type !== 'lodging' && !this.site_config.is_lrg) return;

        try {
            const html = await fetch('https://dev-static.hotelsforhope.com/components/lrg-form/lrg-form.html').then((response) => response.text());

            document.querySelector('#theWBRateGuaranteeForm2Body').innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    }

    addImageSlideshow() {
        document.querySelector('#thePropertyImages').style.display = 'none';

        const prop_id = document.querySelector('meta[name="aPropertyId"]').content;
        let counter = 0;
        let prop_images;
        let carousel_images;

        async function getPropImages() {
            try {
                // const data = await fetch(`https://api.hotelsforhope.com/arn/properties/${prop_id}`, {
                const data = await fetch(`https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h&password=hDzYz9HHwcJDDthPK&propertyid=${prop_id}`, {
                    method: 'GET',
                }).then((response) => response.json());
                return data.Images.map((e) => e.ImagePath.replace(/_300/, '_804480'));
            } catch (error) {
                console.log(error);
            }
        }

        async function createPropImageSlideshow() {
            prop_images = await getPropImages();
            document.querySelector('.ArnPropName').insertAdjacentHTML(
                'afterend',
                `<div class="carousel-container">
                    <div class="carousel-slide">
                    </div>
                    <a id="previousBtn">&#10094;</a>
                    <a id="nextBtn">&#10095;</a>
                </div>`
            );
            populateImages();
        }

        function populateImages() {
            carousel_images = document.querySelectorAll('.carousel-slide img');
            for (let i = counter === 0 ? counter : counter + 2; i < counter + 5; i += 1) {
                if (i === prop_images.length) return;
                document.querySelector('.carousel-slide').insertAdjacentHTML(
                    'beforeend',
                    `<div class="image-wrapper">
                        <div class ="image-number">${i + 1}/${prop_images.length}</div>
                        <img src=${prop_images[i]}>
                    </div>`
                );
            }
        }

        function hideArrows(next, prev) {
            if (counter > 1 && counter < prop_images.length - 2) return;

            next.style.display = 'block';
            prev.style.display = 'block';

            if (counter === 0) prev.style.display = 'none';

            if (counter + 1 === prop_images.length) next.style.display = 'none';
        }

        async function createCarousel() {
            await createPropImageSlideshow();

            const carousel_slide = document.querySelector('.carousel-slide');
            const previous_btn = document.querySelector('#previousBtn');
            const next_btn = document.querySelector('#nextBtn');
            hideArrows(next_btn, previous_btn);

            next_btn.addEventListener('click', () => {
                carousel_images = document.querySelectorAll('.carousel-slide img');
                if (counter === carousel_images.length - 1) return;
                counter += 1;
                hideArrows(next_btn, previous_btn);
                const size = carousel_images[counter].clientWidth;
                carousel_slide.style.transform = `translateX(-${size * counter}px)`;
                if (counter === carousel_images.length - 2) {
                    populateImages();
                }
            });

            previous_btn.addEventListener('click', () => {
                if (counter <= 0) return;
                counter -= 1;
                hideArrows(next_btn, previous_btn);
                const size = carousel_images[counter].clientWidth;
                carousel_slide.style.transform = `translateX(-${size * counter}px)`;
            });
        }

        createCarousel();
    }

    addSocialMetaTags(event_name, event_id) {
        if (this.site_config.site_type === 'cug' || this.page_name !== 'confirmation' || !this.site_config.has_social_sharing) return;

        document.head.insertAdjacentHTML(
            'beforeend',
            `<meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html">
            <meta property="og:type" content="website" >
            <meta property="og:title" content="${event_name}" >
            <meta property="og:description" content="I just booked my room for ${event_name} through Hotels4Hope and donated to charity!" >
            <meta property="og:image" content="https://events.hotelsforhope.com/group-event?id=${event_id}">`
        );
    }

    addSocialMediaShareButtons(event_name, event_id) {
        if (this.site_config.site_type === 'cug' || this.page_name !== 'confirmation' || !this.site_config.has_social_sharing) return;
        const confirmation_container = document.querySelector('#theReservationFormContainer tbody');

        const twitter_script = document.createElement('script');
        twitter_script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        twitter_script.setAttribute('async', true);
        document.head.appendChild(twitter_script);

        confirmation_container.insertAdjacentHTML(
            'afterbegin',
            `<div class="social-share-buttons-container">
                <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fevents.hotelsforhope.com%2Fgroup-event%3Fid%3D${event_id}&layout=button&size=large&width=77&height=28&appId" width="77" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just booked my room for ${event_name} through Hotels4Hope and donated to charity!" data-url="https://events.hotelsforhope.com/group-event?id=${event_id}" data-via="Hotels4Hope" data-show-count="false">Tweet</a>
                </div>`
        );
    }

    style_validation_fields(element) {
        const el_val = document.querySelector(element);
        if (el_val.value === '') {
            el_val.classList.add('invalidated');
        }
    }
}
