export default class BasePortal {
    constructor(site_id, site_config_json, page_name) {
        this.site_id = site_id;
        this.site_config_json = site_config_json;
        this.page_name = page_name;
        this.svg_arrow = '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#9c6aad" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
    }

    init() {
        this.ieForEachPolyfill();
        this.getSiteID().then(() => {
            this.getSiteConfigJSON().then(() => {
                this.getPageName();
                console.log('page_name:', this.page_name);

                // all pages
                this.buildMobileMenu();
                this.moveElementIntoExistingWrapper('.logo', '#AdminControlsContainer', 'afterBegin');
                this.createHTML(`<link id="favicon" rel="shortcut icon" href="${this.site_config_json['fav_icon_url']}">`, 'head', 'beforeEnd');
                this.updateAttribute('.ArnSupportLinks .lowRateLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .faqLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .termsLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .privacyLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .supportLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .cancelLink', '_blank', 'target');
                this.updateHTML('.ArnLeftListContainer > span.translateMe', 'Search');

                // single prop detail methods
                // if (this.page_name == 'property-detail') {
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
                // }

                // checkout page methods
                if (this.page_name == 'checkout') {
                    this.createModal([document.querySelector('#theConfirmationPoliciesAjax'), document.querySelector('#theStayPolicies')], 'Policies & Fees', 'checkout', '#theConfirmationContainer', 'afterBegin');
                    this.updateHTML('.WBGuestFormFields > legend', 'Billing Info');
                    this.setupReservationSummaryContainer();
                    // Checkout form input validation
                    this.updateAttribute('#theEmailAddressAjax input', 'email', 'type');
                    this.updateHTML('#theBookingPage .paymentMethods', '<span class="creditcards"><svg id="amex-light" class="creditcard" viewBox="0 16.8 100.1 66.4"> <g> <path fill="#eeeeee" d="M99.7,76.6c0,3.7-3,6.6-6.6,6.6H6.6c-3.7,0-6.6-3-6.6-6.6V23.4c0-3.7,3-6.6,6.6-6.6H93c3.7,0,6.6,3,6.6,6.6L99.7,76.6L99.7,76.6z"></path> <g> <g> <path fill="#4570B7" d="M0.3,47.9h4.8l1.1-2.6h2.4l1.1,2.6h9.4v-2l0.8,2h4.9l0.8-2v2H49v-4.3h0.5c0.3,0,0.4,0,0.4,0.6v3.7H62v-1c1,0.5,2.5,1,4.5,1h5.1l1.1-2.6h2.4l1.1,2.6H86v-2.5l1.5,2.5h7.9V31.5h-7.8v1.9l-1.1-1.9h-8v1.9l-1-1.9H66.7c-1.8,0-3.4,0.3-4.7,1v-1h-7.4v1c-0.8-0.7-1.9-1-3.2-1H24.2l-1.8,4.2l-1.9-4.2h-8.6v1.9L11,31.5H3.7l-3.4,7.8L0.3,47.9L0.3,47.9z M30.5,45.6h-2.9v-9.2l-4.1,9.2H21l-4-9.2v9.2h-5.7l-1-2.6H4.4l-1.1,2.6h-3l5-11.7h4.2L14.3,45V33.9h4.6l3.7,8l3.4-8h4.7L30.5,45.6L30.5,45.6z M42,45.6h-9.4V33.9H42v2.4h-6.6v2.1h6.4v2.4h-6.4v2.3H42V45.6z M55.2,37c0,1.9-1.2,2.8-2,3.1c0.6,0.2,1.1,0.6,1.4,1c0.4,0.6,0.5,1.1,0.5,2.2v2.3h-2.8v-1.5c0-0.7,0.1-1.7-0.4-2.3c-0.4-0.4-1-0.5-2-0.5h-3v4.3h-2.8V33.9h6.4c1.4,0,2.5,0,3.4,0.6C54.7,34.9,55.2,35.7,55.2,37z M59.7,45.6h-2.9V33.9h2.9V45.6z M92.9,45.6h-4l-5.3-8.8v8.8h-5.7L76.8,43H71l-1.1,2.6h-3.3c-1.4,0-3.1-0.3-4.1-1.3S61,42,61,39.8c0-1.7,0.3-3.3,1.5-4.6c0.9-0.9,2.3-1.4,4.3-1.4h2.7v2.5h-2.7c-1,0-1.6,0.2-2.2,0.7c-0.5,0.5-0.8,1.4-0.8,2.7s0.2,2.2,0.8,2.8c0.4,0.5,1.2,0.6,2,0.6h1.3l4-9.2H76L80.7,45V33.9H85l5,8.1v-8.2h2.9V45.6L92.9,45.6z M51.5,38.7c-0.4,0.2-0.8,0.2-1.4,0.2h-3.4v-2.6h3.5c0.5,0,1,0,1.3,0.2c0.4,0.2,0.6,0.5,0.6,1C52.1,38.1,51.9,38.5,51.5,38.7z M75.8,40.5l-1.9-4.7L72,40.5H75.8z M9.3,40.5l-1.9-4.7l-1.9,4.7"></path> <path fill="#4570B7" d="M100,56.5h-5.1c-0.5,0-0.8,0-1.1,0.2c-0.3,0.2-0.4,0.5-0.4,0.8c0,0.4,0.2,0.7,0.6,0.9c0.3,0.1,0.6,0.1,1.1,0.1h1.5c1.5,0,2.6,0.3,3.2,0.9c0.1,0.1,0.2,0.2,0.3,0.3 M100,64.3c-0.7,1-2,1.5-3.8,1.5h-5.4v-2.5h5.4c0.5,0,0.9-0.1,1.1-0.3s0.3-0.4,0.3-0.8c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-1-0.3c-2.6-0.1-5.9,0.1-5.9-3.6c0-1.7,1.1-3.5,4-3.5h5.6v-2.3h-5.2c-1.6,0-2.7,0.4-3.5,1v-1h-7.7c-1.2,0-2.7,0.3-3.3,1v-1H66.6v1c-1.1-0.8-2.9-1-3.8-1h-9v1c-0.9-0.8-2.8-1-4-1H39.7l-2.3,2.5l-2.2-2.5H20.1v16.4h14.8l2.4-2.5l2.2,2.5h9.1v-3.9h0.9c1.2,0,2.6,0,3.9-0.6V68H61v-4.3h0.4c0.5,0,0.5,0,0.5,0.5V68h22.9c1.5,0,3-0.4,3.8-1v1h7.3c1.5,0,3-0.2,4.1-0.8L100,64.3L100,64.3z M88.8,59.6c0.5,0.6,0.8,1.3,0.8,2.5c0,2.5-1.6,3.7-4.4,3.7h-5.5v-2.5h5.4c0.5,0,0.9-0.1,1.1-0.3s0.3-0.4,0.3-0.8c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-1-0.3c-2.6-0.1-5.9,0.1-5.9-3.6c0-1.7,1.1-3.5,4-3.5h5.6v2.5h-5.1c-0.5,0-0.8,0-1.1,0.2c-0.3,0.2-0.4,0.5-0.4,0.8c0,0.4,0.3,0.7,0.6,0.9c0.3,0.1,0.6,0.1,1.1,0.1h1.5C87.1,58.7,88.2,58.9,88.8,59.6z M65.2,60.3c0.6,0.2,1.1,0.6,1.4,1c0.4,0.6,0.5,1.1,0.5,2.1v2.3h-2.8v-1.5c0-0.7,0.1-1.8-0.5-2.3c-0.4-0.4-1-0.5-2.1-0.5h-3v4.3h-2.8V54h6.5c1.4,0,2.5,0.1,3.4,0.6s1.4,1.3,1.4,2.6C67.2,59.1,66,60,65.2,60.3z M68.8,54h9.4v2.4h-6.6v2.1H78V61h-6.4v2.3h6.6v2.4h-9.4C68.8,65.7,68.8,54,68.8,54z M54.6,57.9c0,3.3-2.4,3.9-4.9,3.9h-3.5v3.9h-5.4l-3.5-3.9l-3.6,3.9H22.6V54h11.3l3.4,3.8l3.6-3.8h9C52.1,54,54.6,54.7,54.6,57.9z M49.8,59.5h-3.6v-3h3.7c1,0,1.7,0.4,1.7,1.4C51.6,58.9,50.9,59.5,49.8,59.5z M43.4,64.7l-4.3-4.8l4.3-4.6V64.7z M32.3,63.3h-6.9V61h6.2v-2.4h-6.2v-2.1h7l3.1,3.4L32.3,63.3z M63.5,58.9c-0.4,0.2-0.8,0.2-1.4,0.2h-3.4v-2.6h3.5c0.5,0,1,0,1.3,0.2c0.4,0.2,0.6,0.6,0.6,1.1S63.9,58.6,63.5,58.9z"></path> </g> </g> </g></svg><svg id="discover-light" class="creditcard" viewBox="0 16.6 100 66.8"> <g> <path fill="#EBEDED" d="M99.9,76.6c0,3.7-3,6.7-6.7,6.7H6.7c-3.7,0-6.7-3-6.7-6.7V23.3c0-3.7,3-6.7,6.7-6.7h86.6c3.7,0,6.7,3,6.7,6.7L99.9,76.6L99.9,76.6z"></path> <path fill="#E57E25" d="M93.4,83.2c3.7,0,6.5-2.6,6.5-6.3V57.2c0,0-25.6,18.1-72.8,26H93.4z"></path> <path opacity="0.1" fill="#231F20" enable-background="new " d="M100,57.2c0,0-25.7,18.3-72.9,26.2C83.4,83.4,100,57.2,100,57.2z"></path> <g> <path fill="#231F20" d="M10.7,36.7h-4v13.9h4c2.1,0,3.6-0.5,5-1.6c1.6-1.3,2.5-3.3,2.5-5.4C18.1,39.5,15.1,36.7,10.7,36.7zM13.8,47.1c-0.9,0.8-2,1.1-3.7,1.1H9.4V39h0.7c1.8,0,2.8,0.3,3.7,1.1s1.5,2.1,1.5,3.5C15.3,45,14.8,46.3,13.8,47.1z"></path> <rect x="19.4" y="36.7" fill="#231F20" width="2.7" height="13.9"></rect> <path fill="#231F20" d="M28.8,42c-1.6-0.6-2.1-1-2.1-1.8c0-0.9,0.9-1.5,2-1.5c0.8,0,1.5,0.3,2.2,1.1l1.4-1.9c-1.2-1-2.6-1.5-4.1-1.5c-2.5,0-4.3,1.7-4.3,4c0,1.9,0.9,2.9,3.4,3.8c1.1,0.4,1.6,0.6,1.9,0.8c0.5,0.4,0.8,0.9,0.8,1.4c0,1.1-0.9,2-2.1,2c-1.3,0-2.3-0.6-3-1.9l-1.8,1.7c1.3,1.8,2.8,2.7,4.8,2.7c2.8,0,4.8-1.9,4.8-4.6C32.8,44.2,31.9,43.1,28.8,42z"></path> <path fill="#231F20" d="M33.6,43.6c0,4.1,3.2,7.3,7.4,7.3c1.2,0,2.2-0.2,3.4-0.8v-3.2c-1.1,1.1-2.1,1.5-3.3,1.5c-2.7,0-4.7-2-4.7-4.8c0-2.7,2-4.8,4.6-4.8c1.3,0,2.3,0.5,3.4,1.6v-3.2c-1.2-0.6-2.2-0.9-3.3-0.9C36.9,36.3,33.6,39.6,33.6,43.6z"></path> <polygon fill="#231F20" points="66,46 62.3,36.7 59.3,36.7 65.2,51 66.7,51 72.7,36.7 69.8,36.7"></polygon> <polygon fill="#231F20" points="73.9,50.6 81.6,50.6 81.6,48.2 76.6,48.2 76.6,44.5 81.5,44.5 81.5,42.1 76.6,42.1 76.6,39 81.6,39 81.6,36.7 73.9,36.7"></polygon> <path fill="#231F20" d="M92.4,40.8c0-2.6-1.8-4.1-4.9-4.1h-4v13.9h2.7V45h0.4l3.8,5.6h3.3l-4.4-5.9C91.3,44.3,92.4,42.9,92.4,40.8z M87,43.1h-0.8v-4.2H87c1.7,0,2.6,0.7,2.6,2.1C89.6,42.3,88.7,43.1,87,43.1z"></path> <circle fill="#E57E25" cx="52.7" cy="43.7" r="7.4"></circle> </g> </g></svg><svg id="mc-light" class="creditcard" viewBox="0 16.6 100.1 66.8"> <g> <path fill="#719ABF" d="M100,76.7c0,3.7-3,6.7-6.7,6.7H6.7c-3.7,0-6.7-3-6.7-6.7V23.3c0-3.7,3-6.7,6.7-6.7h86.7c3.7,0,6.7,3,6.7,6.7L100,76.7L100,76.7z"></path> <g> <circle fill="#E64C3C" cx="37.2" cy="49.9" r="19.5"></circle> <circle fill="#F0C419" cx="63.5" cy="49.9" r="19.5"></circle> <path fill="#F29C1F" d="M44,49.9c0,5.7,2.5,10.9,6.4,14.5c3.9-3.6,6.4-8.7,6.4-14.5S54.3,39,50.4,35.4C46.4,39,44,44.2,44,49.9z"></path> </g> <g> <path fill="#FFFFFF" d="M42.1,56.5l0.3-2.4c-0.2,0-0.5,0.1-0.7,0.1c-1,0-1.1-0.5-1-0.9l0.8-4.8H43l0.4-2.6H42l0.3-1.6h-2.8c-0.1,0.1-1.6,9.2-1.6,10.3c0,1.6,0.9,2.4,2.2,2.4C41.1,56.9,41.8,56.6,42.1,56.5z"></path> <path fill="#FFFFFF" d="M43,52c0,3.9,2.6,4.9,4.8,4.9c2,0,2.9-0.5,2.9-0.5l0.5-2.7c0,0-1.6,0.7-3,0.7c-3,0-2.5-2.2-2.5-2.2h5.7c0,0,0.4-1.8,0.4-2.5c0-1.8-0.9-4.1-4-4.1C45.1,45.6,43,48.6,43,52z M47.9,48.1c1.6,0,1.3,1.8,1.3,1.9h-3.1C46.1,49.8,46.4,48.1,47.9,48.1z"></path> <path fill="#FFFFFF" d="M65.5,56.5l0.5-3c0,0-1.4,0.7-2.3,0.7c-2,0-2.8-1.5-2.8-3.1c0-3.3,1.7-5.1,3.6-5.1c1.4,0,2.6,0.8,2.6,0.8l0.5-2.9c0,0-1.7-0.7-3.1-0.7c-3.2,0-6.3,2.8-6.3,8c0,3.5,1.7,5.8,5,5.8C64,56.9,65.5,56.5,65.5,56.5z"></path> <path fill="#FFFFFF" d="M26.8,45.6c-1.9,0-3.4,0.6-3.4,0.6L23,48.6c0,0,1.2-0.5,3-0.5c1,0,1.8,0.1,1.8,1c0,0.5-0.1,0.7-0.1,0.7s-0.8-0.1-1.2-0.1c-2.4,0-4.9,1-4.9,4.1c0,2.4,1.7,3,2.7,3c2,0,2.8-1.3,2.9-1.3l-0.1,1.1h2.5l1.1-7.7C30.6,45.7,27.8,45.6,26.8,45.6z M27.4,51.9c0.1,0.5-0.3,2.7-2,2.7c-0.9,0-1.1-0.7-1.1-1.1c0-0.8,0.4-1.7,2.5-1.7C27.3,51.8,27.3,51.9,27.4,51.9z"></path> <path fill="#FFFFFF" d="M33.2,56.8c0.6,0,4.2,0.2,4.2-3.5c0-3.5-3.3-2.8-3.3-4.2c0-0.7,0.5-0.9,1.5-0.9c0.4,0,1.9,0.1,1.9,0.1l0.4-2.5c0,0-1-0.2-2.6-0.2c-2.1,0-4.1,0.8-4.1,3.6c0,3.2,3.5,2.9,3.5,4.2c0,0.9-1,1-1.7,1c-1.3,0-2.5-0.4-2.5-0.4l-0.4,2.4C30.2,56.5,30.9,56.8,33.2,56.8z"></path> <path fill="#FFFFFF" d="M88.6,43.4L88,47.1c0,0-1-1.4-2.7-1.4c-2.5,0-4.7,3.1-4.7,6.6c0,2.3,1.1,4.5,3.5,4.5c1.7,0,2.6-1.2,2.6-1.2l-0.1,1h2.7l2.1-13.2L88.6,43.4z M87.3,50.7c0,1.5-0.7,3.4-2.2,3.4c-1,0-1.5-0.8-1.5-2.2c0-2.2,1-3.6,2.2-3.6C86.8,48.4,87.3,49.1,87.3,50.7z"></path> <path fill="#FFFFFF" d="M11.8,56.7l1.7-10l0.2,10h1.9l3.6-10l-1.6,10h2.8l2.2-13.3h-4.4l-2.7,8.1l-0.1-8.1h-4.1L9.1,56.7H11.8z"></path> <path fill="#FFFFFF" d="M54.6,56.7c0.8-4.6,1-8.3,2.9-7.7c0.3-1.8,0.7-2.5,1-3.2c0,0-0.2,0-0.5,0c-1.2,0-2.2,1.7-2.2,1.7l0.2-1.6h-2.6l-1.7,10.8H54.6z"></path> <g transform="translate(847.0062,0)"> <path fill="#FFFFFF" d="M-775.1,45.6c-1.9,0-3.4,0.6-3.4,0.6l-0.4,2.4c0,0,1.2-0.5,3-0.5c1,0,1.8,0.1,1.8,1c0,0.5-0.1,0.7-0.1,0.7s-0.8-0.1-1.2-0.1c-2.4,0-4.9,1-4.9,4.1c0,2.4,1.7,3,2.7,3c2,0,2.8-1.3,2.9-1.3l-0.1,1.1c0,0,2.4,0,2.5,0l1.1-7.7C-771.3,45.7-774.1,45.6-775.1,45.6z M-774.5,51.9c0.1,0.5-0.3,2.7-2,2.7c-0.9,0-1.1-0.7-1.1-1.1c0-0.8,0.4-1.7,2.5-1.7C-774.6,51.8-774.6,51.9-774.5,51.9z"></path> </g> <g transform="translate(442.2857,0)"> <path fill="#FFFFFF" d="M-364.3,56.7c0.8-4.6,1-8.3,2.9-7.7c0.3-1.8,0.7-2.5,1-3.2c0,0-0.2,0-0.5,0c-1.2,0-2.2,1.7-2.2,1.7l0.2-1.6h-2.6l-1.7,10.8H-364.3z"></path> </g> </g> </g></svg><svg id="visa-light" class="creditcard" viewBox="0 16.6 100.1 66.8"> <g> <path fill="#EBEDED" d="M100,76.7c0,3.7-3,6.7-6.7,6.7H6.7c-3.7,0-6.7-3-6.7-6.7V23.3c0-3.7,3-6.7,6.7-6.7h86.7c3.7,0,6.7,3,6.7,6.7L100,76.7L100,76.7z"></path> <path fill="#0556A3" d="M93.3,16.7H6.6c-3.7,0-6.6,3-6.6,6.7v4.7h100v-4.7C100,19.7,97,16.7,93.3,16.7z"></path> <path fill="#F29C1F" d="M93.3,83.3H6.6c-3.7,0-6.6-3-6.6-6.7v-4.7h100v4.7C100,80.4,97,83.3,93.3,83.3z"></path> <g> <polyline fill="#2756A6" points="39.8,60.6 43.3,39 48.9,39 45.4,60.6 39.8,60.6 "></polyline> <path fill="#2756A6" d="M65.6,39.6c-1.1-0.4-2.8-0.9-5-0.9c-5.5,0-9.4,2.9-9.4,7.1c0,3.1,2.8,4.8,4.9,5.9c2.2,1.1,2.9,1.7,2.9,2.7c0,1.4-1.7,2.1-3.3,2.1c-2.2,0-3.4-0.3-5.2-1.1l-0.7-0.3L49,59.9c1.3,0.6,3.7,1.1,6.2,1.1c5.8,0,9.6-2.9,9.7-7.4c0-2.5-1.5-4.3-4.7-5.9c-1.9-1-3.1-1.7-3.1-2.7c0-0.9,1-1.9,3.2-1.9c1.8,0,3.1,0.4,4.2,0.8l0.5,0.2L65.6,39.6"></path> <path fill="#2756A6" d="M79.8,39.1h-4.3c-1.3,0-2.3,0.4-2.9,1.8l-8.3,19.7h5.8c0,0,1-2.7,1.2-3.2c0.6,0,6.3,0,7.1,0c0.2,0.8,0.7,3.2,0.7,3.2h5.2L79.8,39.1 M73,52.9c0.5-1.2,2.2-6,2.2-6c0,0.1,0.5-1.2,0.7-2.1l0.4,1.9c0,0,1.1,5.1,1.3,6.2C76.7,52.9,74.1,52.9,73,52.9z"></path> <path fill="#2756A6" d="M35.2,39.1l-5.4,14.7l-0.6-3c-1-3.4-4.2-7.2-7.7-9l5,18.8h5.9l8.8-21.5H35.2"></path> <path fill="#F29C1F" d="M24.7,39h-9l-0.1,0.4c7,1.8,11.6,6.1,13.5,11.3l-1.9-9.9C26.8,39.5,25.9,39.1,24.7,39"></path> </g> </g></svg>');
                    this.moveElementIntoExistingWrapper('#theBookingPage #theRateDescription', '#theHotel', 'beforeEnd');

                    // Shows numpad on ios
                    this.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
                    this.updateAttribute('.CheckOutForm #theAreaCode', 'inputmode');
                    this.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
                    this.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
                    this.updateHTML('#theCreditCardBillingNameAjax1 label', 'Cardholder\'s Name');
                    this.updateHTML('#theBillingAddressAjax1 label', 'Billing Address');
                    this.updateHTML('#theCharges legend', 'Rate Info');
                    this.updateHTML('.taxFeeRow th', '<span>Taxes:</span>');
                    this.updateHTML('#theHotel legend', 'Reservation Summary');
                    this.createHTML('<legend>Credit Card Info</legend>', '#theBookingPage .paymentMethods', 'beforeBegin');
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
                this.addDistanceScaleToMap();

                this.pollingFinished().then(() => {
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

                    this.moveOrphanedElementsIntoNewWrapper([document.querySelector('.ArnGoCitySearch'), document.querySelector('.ArnGoLandmarkSearch'), document.querySelector('.ArnGoAirportSearch')], 'search-wrapper', '.ArnSearchHeader', 'afterEnd');

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
        if (!document.querySelector('.SinglePropDetail') || !room_description_el || !this.site_config_json['site_type'] == "lodging") {
            return;
        }

        room_description_el.forEach(function(element) {
            element.innerHTML = element.innerHTML.replace('Special Event Rate', `<span id="exclusive-event-rate" style="font-weight:bold; color:#111; font-size: 17px;">
                ${this.site_config_json['lodging']['event_name']}</span>`);
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

    async pollingFinished() {
        return await new Promise(resolve => {
            console.log('pollingFinished() fired.');
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
        this.updateHTML('.sort', '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter');

        this.createHTML('<div class="sort-filter-overlay"><div class="sort-filter-container"><div class="sort-filter-header"><h3>Sort &amp; Filter</h3><span class="sort-filter-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#9c6aad" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#9c6aad" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="mobile-sort-container"><h4>Sort By</h4></div><div class="mobile-filter-container"><h4>Filter By</h4></div></div></div>', 'body', 'beforeEnd');

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

    addDistanceScaleToMap() {
        jQuery('#theBody').on('arnMapLoadedEvent', () => {
            L.control.scale().addTo(window.ArnMap);
            this.toggleMap();
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
        if (!document.querySelector('.SearchHotels')) {
            return;
        }

        let prop_containers = document.querySelectorAll('.ArnContainer');
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

    createModal(array_of_elements_for_modal, modal_title, page_name, open_button_parent_selector, open_button_location) {
        if (!page_name) {
            return;
        }

        document.querySelector(open_button_parent_selector).insertAdjacentHTML(open_button_location, `<span class="open-modal">Show ${modal_title}</span>`);

        document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>${modal_title}</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#9c6aad" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#9c6aad" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>`);

        array_of_elements_for_modal.forEach((element) => {
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
        // if(!this.page_name == 'checkout') return;
        let room_reservations = document.querySelectorAll('.WBGuestFormFields');
        let reservation_count = 1;
        room_reservations.forEach((reservation) => {
            reservation_count++;

            moveElementIntoExistingWrapper(`#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardBillingNameAjax${reservation_count - 1}`, `#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardNumberAjax`, 'afterEnd');

            this.moveOrphanedElementsIntoNewWrapper([document.querySelector(`#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCityZipAjax1 > table > tbody > tr > td:nth-child(1) > div`), document.querySelector(`#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCityZipAjax1 > table > tbody > tr > td:nth-child(2) > div`), document.querySelector(`#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theStateAjax1`), document.querySelector(`#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCountryAjax1`)], `billing-details-container${reservation_count}`, `#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theBillingAddressAjax`, 'afterEnd');


            // this.moveOrphanedElementsIntoNewWrapper([document.querySelector(`#theBookingPage #theCardVerificationAjax`), document.querySelector(`#theCardExpirationFieldsAjax`)], 'security-code-exp-container', '#theCreditCardBillingNameAjax1', 'afterEnd');

        });
    }
}