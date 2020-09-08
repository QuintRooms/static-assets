/******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {},
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function (key) {
                        return value[key];
                    }.bind(null, key)
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default'];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './src/60278.js'));
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ './js/build.js':
            /*!*********************!*\
  !*** ./js/build.js ***!
  \*********************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
                    return BasePortal;
                });
                /* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! core-js/modules/es6.promise */ './node_modules/core-js/modules/es6.promise.js'
                );
                /* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__
                );
                /* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! core-js/modules/es6.regexp.to-string */ './node_modules/core-js/modules/es6.regexp.to-string.js'
                );
                /* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__
                );
                /* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! core-js/modules/es6.function.name */ './node_modules/core-js/modules/es6.function.name.js'
                );
                /* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__
                );
                /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
                );
                /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__
                );
                /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! core-js/modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
                );
                /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__
                );
                /* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! core-js/modules/es6.object.to-string */ './node_modules/core-js/modules/es6.object.to-string.js'
                );
                /* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__
                );
                /* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! core-js/modules/es7.object.entries */ './node_modules/core-js/modules/es7.object.entries.js'
                );
                /* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6__
                );
                /* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! core-js/modules/es6.regexp.search */ './node_modules/core-js/modules/es6.regexp.search.js'
                );
                /* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_7__
                );
                /* harmony import */ var core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! core-js/modules/es6.string.repeat */ './node_modules/core-js/modules/es6.string.repeat.js'
                );
                /* harmony import */ var core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_8__
                );
                /* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! core-js/modules/es6.regexp.replace */ './node_modules/core-js/modules/es6.regexp.replace.js'
                );
                /* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_9__
                );
                /* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                    /*! core-js/modules/es7.array.includes */ './node_modules/core-js/modules/es7.array.includes.js'
                );
                /* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_10__
                );
                /* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
                    /*! core-js/modules/es6.string.includes */ './node_modules/core-js/modules/es6.string.includes.js'
                );
                /* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_11__
                );
                /* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
                    /*! core-js/modules/es6.regexp.split */ './node_modules/core-js/modules/es6.regexp.split.js'
                );
                /* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12__
                );
                /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
                    /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
                );
                /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
                    regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__
                );
                /* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! whatwg-fetch */ './node_modules/whatwg-fetch/fetch.js');
                /* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! url-polyfill */ './node_modules/url-polyfill/url-polyfill.js');
                /* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_15__);
                /* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utilities */ './js/utilities.js');
                /* harmony import */ var _components_algolia__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/algolia */ './js/components/algolia.js');
                /* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./path */ './js/path.js');
                /* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_path__WEBPACK_IMPORTED_MODULE_18__);

                function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }
                    if (info.done) {
                        resolve(value);
                    } else {
                        Promise.resolve(value).then(_next, _throw);
                    }
                }

                function _asyncToGenerator(fn) {
                    return function () {
                        var self = this,
                            args = arguments;
                        return new Promise(function (resolve, reject) {
                            var gen = fn.apply(self, args);
                            function _next(value) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                            }
                            function _throw(err) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                            }
                            _next(undefined);
                        });
                    };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError('Cannot call a class as a function');
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ('value' in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                var env_path = new _path__WEBPACK_IMPORTED_MODULE_18___default.a();

                var dayjs = __webpack_require__(/*! dayjs */ './node_modules/dayjs/dayjs.min.js');

                var utilities = new _utilities__WEBPACK_IMPORTED_MODULE_16__['default']();
                var algolia = new _components_algolia__WEBPACK_IMPORTED_MODULE_17__['default']();

                var BasePortal = /*#__PURE__*/ (function () {
                    function BasePortal(config) {
                        _classCallCheck(this, BasePortal);

                        console.log('Output: BasePortal -> constructor -> config', config);
                        this.site_id = '';
                        this.page_name = utilities.getPageName();
                        this.site_config = config;
                        this.currency = '';
                        this.svg_arrow =
                            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
                        this.map_loaded = false;
                        this.selected_currency = 'USD';
                    }

                    _createClass(BasePortal, [
                        {
                            key: 'init',
                            value: function init() {
                                var _this = this;

                                if (!this.site_config) console.error('No site config found.');
                                this.initializeARNRatesReadyEvent();
                                utilities.ieForEachPolyfill();
                                this.getSiteID().then(
                                    /*#__PURE__*/ (function () {
                                        var _ref = _asyncToGenerator(
                                            /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(site_id) {
                                                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                                    while (1) {
                                                        switch ((_context5.prev = _context5.next)) {
                                                            case 0:
                                                                utilities.getPageName();

                                                                _this.applyConfigStyles();

                                                                _this.setupDatePrompt();

                                                                _this.showLanguageFromCongif();

                                                                _this.showFilters(); // all pages
                                                                // this.addSocialMetaTags(this.site_config.lodging.event_name, this.site_config.lodging.event_id);

                                                                _this.buildMobileMenu();

                                                                utilities.createHTML(
                                                                    '<link id="favicon" rel="shortcut icon" href="'.concat(_this.site_config.fav_icon_url, '">'),
                                                                    'head',
                                                                    'beforeEnd'
                                                                );
                                                                _context5.next = 9;
                                                                return utilities.createHTML(
                                                                    '<header><a class="logo" href="'
                                                                        .concat(_this.site_config.header.logo_outbound_url, '" target="_blank"><img src="')
                                                                        .concat(_this.site_config.header.logo_file_location, '" alt="Logo"></a></header>'),
                                                                    '.config-container',
                                                                    'afterEnd'
                                                                );

                                                            case 9:
                                                                if (_this.site_config.site_type === 'cug') {
                                                                    utilities.waitForSelectorInDOM('#AdminControlsContainer').then(
                                                                        /*#__PURE__*/ _asyncToGenerator(
                                                                            /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                                                                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                                                                    while (1) {
                                                                                        switch ((_context.prev = _context.next)) {
                                                                                            case 0:
                                                                                                utilities.appendToParent('#commands', 'header');

                                                                                            case 1:
                                                                                            case 'end':
                                                                                                return _context.stop();
                                                                                        }
                                                                                    }
                                                                                }, _callee);
                                                                            })
                                                                        )
                                                                    );
                                                                }

                                                                utilities.updateAttribute('.ArnSupportLinks a', '_blank', 'target'); // single prop detail methods

                                                                if (_this.page_name === 'property-detail') {
                                                                    _this.addImageSlideshow();

                                                                    _this.updateAmenitiesLegendTag();

                                                                    utilities.updateHTML('.SinglePropDetail .Map a', 'Map');
                                                                    utilities.updateHTML('.SinglePropDetail .Reviews a', 'Reviews');
                                                                    utilities.updateHTML('.SinglePropDetail .OptionsPricing a', 'Rooms');
                                                                    utilities.updateHTML('.SinglePropDetail .Details a', 'General Info');

                                                                    _this.isPropByGateway(
                                                                        _this.site_config.exclusive_rate_text,
                                                                        _this.site_config.host_hotel_text,
                                                                        _this.site_config.partner_hotel_text,
                                                                        _this.site_config.lodging.event_name
                                                                    );

                                                                    _this.updatePropReviewsURLToUseAnchor();

                                                                    _this.getTotalNights().then(function (nights) {
                                                                        _this.getCurrency().then(function (currency) {
                                                                            _this.showFullStayAndNightlyRates(nights, currency);
                                                                        });
                                                                    }); // this.accordion('#thePropertyAmenities', '.ArnAmenityContainer', 'legend');

                                                                    utilities.moveElementIntoExistingWrapper(
                                                                        '.SinglePropDetail .ArnTripAdvisorDetails.HasReviews',
                                                                        '.SinglePropDetail .ArnPropAddress',
                                                                        'afterEnd'
                                                                    );
                                                                    utilities.moveElementIntoExistingWrapper(
                                                                        'div.subHeaderContainer > div > a > span.translateMe',
                                                                        '.SinglePropDetail .ArnLeftListContainer',
                                                                        'afterBegin'
                                                                    );
                                                                } // checkout page methods

                                                                if (_this.page_name === 'checkout') {
                                                                    utilities.createModal(
                                                                        [document.querySelector('#theStayPolicies')],
                                                                        'Policies & Fees',
                                                                        'checkout',
                                                                        '#theConfirmationContainer',
                                                                        'afterBegin'
                                                                    );
                                                                    utilities.updateAttribute('#theEmailAddressAjax input', 'email', 'type'); // Shows numpad on ios

                                                                    utilities.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
                                                                    utilities.updateAttribute('.CheckOutForm #theAreaCode', 'numeric', 'inputmode');
                                                                    utilities.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
                                                                    utilities.updateAttribute('.CheckOutForm #theCreditCardNumber', 'numeric', 'inputmode');
                                                                    utilities.updateAttribute('.CheckOutForm #theCvvCode', 'numeric', 'inputmode');
                                                                    utilities.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
                                                                    utilities.updateHTML('#theCharges legend', 'Rate Info');
                                                                    utilities.updateHTML('.taxFeeRow th', '<span>Taxes:</span>');
                                                                    utilities.updateHTML('#theHotel legend', 'Reservation Summary');

                                                                    _this.formatCheckoutForm();

                                                                    _this.setupReservationSummaryContainer();

                                                                    utilities.moveElementIntoExistingWrapper('#theBookingPage #theRateDescription', '#theHotel', 'beforeEnd');
                                                                    utilities.emailVerificationSetup();

                                                                    _this.fixCheckoutInputTabOrder();

                                                                    utilities.selectCheckboxOnLabelClick('.confirmationWarning, .confirmationAgreement, #theMarketingOptInAjax');
                                                                }

                                                                if (_this.page_name === 'confirmation') {
                                                                    _this.implementAds();

                                                                    _this.addMessagingToConfirmationPage();
                                                                } // root page methods

                                                                if (document.querySelector('.RootBody')) {
                                                                    algolia.init(_this.site_config, _this.page_name, utilities);

                                                                    _this.buildCurrencyDropdown();

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
                                                                    utilities.moveElementIntoExistingWrapper(
                                                                        '.ArnSecondarySearchOuterContainer',
                                                                        '.ArnPrimarySearchContainer',
                                                                        'beforeEnd'
                                                                    );
                                                                    utilities.selectCheckboxOnLabelClick('.ArnSearchField div');
                                                                }

                                                                utilities.updateHTML('#thePassCodeAjax label', 'Promocode');
                                                                utilities.updateHTML('#theUserNameAjax label', 'Username/Email');
                                                                utilities.createHTML('<h1>Login</h1>', '#theWBLoginFormBody form', 'beforeBegin');
                                                                utilities.createHTML('<h1>Register</h1>', '#theWBValidatedRegistrationFormBody form', 'beforeBegin');
                                                                utilities.createHTML('<h1>Forgot Password?</h1>', '#theWBForgotPasswordFormBody form', 'beforeBegin');
                                                                utilities.createHTML(
                                                                    '<div class="redeem-promocode-container"><h2>Have a promocode?</h2></div>',
                                                                    '#theWBLoginFormBody .ForgotPasswordAction',
                                                                    'afterEnd'
                                                                );

                                                                if (_this.page_name === 'lrg-page') {
                                                                    _this.replaceLRGForm();
                                                                }

                                                                if (_this.page_name === 'search-results') {
                                                                    algolia.init(_this.site_config, _this.page_name, utilities);
                                                                }

                                                                jQuery('#theBody').on(
                                                                    'arnMapLoadedEvent',
                                                                    /*#__PURE__*/ _asyncToGenerator(
                                                                        /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
                                                                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                                                while (1) {
                                                                                    switch ((_context2.prev = _context2.next)) {
                                                                                        case 0:
                                                                                            _this.map_loaded = true;
                                                                                            _context2.next = 3;
                                                                                            return utilities.waitForSelectorInDOM('.pollingFinished');

                                                                                        case 3:
                                                                                            if (!document.querySelector('.leaflet-control-scale-line'))
                                                                                                L.control.scale().addTo(window.ArnMap);

                                                                                            _this.useLogoForVenueMapMarker();

                                                                                            _this.highlightMapMarkersOnPropertyHover();

                                                                                            _this.changeContractedPropertyPinColor();

                                                                                        case 7:
                                                                                        case 'end':
                                                                                            return _context2.stop();
                                                                                    }
                                                                                }
                                                                            }, _callee2);
                                                                        })
                                                                    )
                                                                );
                                                                jQuery(document).on(
                                                                    'ratesReadyEvent',
                                                                    /*#__PURE__*/ _asyncToGenerator(
                                                                        /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
                                                                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                                                                while (1) {
                                                                                    switch ((_context3.prev = _context3.next)) {
                                                                                        case 0:
                                                                                            setTimeout(function () {
                                                                                                _this.isPropByGateway(
                                                                                                    _this.site_config.exclusive_rate_text,
                                                                                                    _this.site_config.host_hotel_text,
                                                                                                    _this.site_config.partner_hotel_text,
                                                                                                    _this.site_config.lodging.event_name
                                                                                                );

                                                                                                if (
                                                                                                    _this.page_name === 'property-detail' &&
                                                                                                    _this.site_config.site_type.toLowerCase() === 'cug'
                                                                                                ) {
                                                                                                    _this.cugConfigs();
                                                                                                }
                                                                                            }, 1);

                                                                                        case 1:
                                                                                        case 'end':
                                                                                            return _context3.stop();
                                                                                    }
                                                                                }
                                                                            }, _callee3);
                                                                        })
                                                                    )
                                                                );
                                                                utilities.waitForSelectorInDOM('.pollingFinished').then(
                                                                    /*#__PURE__*/ (function () {
                                                                        var _ref5 = _asyncToGenerator(
                                                                            /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(selector) {
                                                                                var mq;
                                                                                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                                                                    while (1) {
                                                                                        switch ((_context4.prev = _context4.next)) {
                                                                                            case 0:
                                                                                                if (_this.page_name === 'hold-rooms') {
                                                                                                    _this.moveReviewsIntoPropNameContainer();

                                                                                                    utilities.addClass('ArnSearchContainerMainDiv', 'ArnSubPage');
                                                                                                }

                                                                                                if (!(_this.page_name !== 'search-results' || _this.page_name === 'hold-rooms')) {
                                                                                                    _context4.next = 3;
                                                                                                    break;
                                                                                                }

                                                                                                return _context4.abrupt('return');

                                                                                            case 3:
                                                                                                _this.buildCurrencyDropdown();

                                                                                                _this.cugConfigs();

                                                                                                _this.implementAds();

                                                                                                _this.toggleMap();

                                                                                                _this.addLRGDetails();

                                                                                                _this.getTotalNights().then(function (nights) {
                                                                                                    _this.getCurrency().then(function (currency) {
                                                                                                        _this.showFullStayAndNightlyRates(nights, currency);
                                                                                                    });
                                                                                                });

                                                                                                _this.createStarIcons();

                                                                                                _this.addHRToProperties();

                                                                                                _this.showLoaderOnResultsUpdate();

                                                                                                _this.showSearchContainerOnMobile();

                                                                                                _this.moveFooterOutOfSearchContainer();

                                                                                                _this.moveReviewsIntoPropNameContainer();

                                                                                                utilities.updateAttribute('.ArnShowRatesLink', '_blank', 'target');

                                                                                                _this.movePropClassBelowPropName();

                                                                                                utilities.selectCheckboxOnLabelClick('.ArnSearchField div');
                                                                                                utilities.updateHTML('#ShowHotelOnMap', 'Open Map');
                                                                                                utilities.updateHTML('.ArnShowRatesLink', 'Book Rooms');
                                                                                                utilities.updateHTML('.lblRating', 'Stars');
                                                                                                utilities.updateHTML('.lblCurrency', 'Currency');
                                                                                                utilities.updateHTML('.lblAmenities', 'Amenities');
                                                                                                utilities.updateHTML('.lblNearbyCities', 'Nearby Cities');
                                                                                                utilities.updateHTML('.lblPropertyType', 'Property Type');
                                                                                                utilities.updateHTML('.ArnSortBy', '<div class="sort">Sort</div>');
                                                                                                utilities.updateHTML('.ArnSearchHeader', 'Update Search');
                                                                                                utilities.moveElementIntoExistingWrapper(
                                                                                                    '.ArnPropClass',
                                                                                                    '.ArnPropName',
                                                                                                    'beforeEnd'
                                                                                                );
                                                                                                utilities.moveElementIntoExistingWrapper(
                                                                                                    '#theOtherSubmitButton',
                                                                                                    '.ArnSecondarySearchOuterContainer',
                                                                                                    'beforeEnd'
                                                                                                );
                                                                                                _context4.next = 31;
                                                                                                return utilities.waitForSelectorInDOM('#pagerBottomAjax').then(function () {
                                                                                                    utilities.appendToParent('#pagerBottomAjax', '#currentPropertyPage');
                                                                                                });

                                                                                            case 31:
                                                                                                _context4.next = 33;
                                                                                                return utilities.waitForSelectorInDOM('.ArnSortContainer').then(function () {
                                                                                                    utilities
                                                                                                        .createWrapper(
                                                                                                            '.ArnSortByDealPercent, .ArnSortByDistance, .ArnSortByDealAmount, .ArnSortByAvailability, .ArnSortByPrice, .ArnSortByClass, .ArnSortByType',
                                                                                                            '.ArnSecondarySearchOuterContainer',
                                                                                                            'sort-wrapper',
                                                                                                            'afterBegin'
                                                                                                        )
                                                                                                        .then(function () {
                                                                                                            _this.createMobileSortAndFilter();

                                                                                                            utilities.createHTML('<h4>Sort</h4>', '.sort-wrapper', 'afterBegin');
                                                                                                        });
                                                                                                });

                                                                                            case 33:
                                                                                                mq = window.matchMedia('(min-width: 1105px)');

                                                                                                if (!mq) {
                                                                                                    _context4.next = 41;
                                                                                                    break;
                                                                                                }

                                                                                                _context4.next = 37;
                                                                                                return utilities.waitForSelectorInDOM('#ArnPropertyMap');

                                                                                            case 37:
                                                                                                if (!document.querySelector('.leaflet-control-scale-line'))
                                                                                                    L.control.scale().addTo(window.ArnMap);

                                                                                                _this.useLogoForVenueMapMarker();

                                                                                                _this.highlightMapMarkersOnPropertyHover();

                                                                                                _this.changeContractedPropertyPinColor();

                                                                                            case 41:
                                                                                            case 'end':
                                                                                                return _context4.stop();
                                                                                        }
                                                                                    }
                                                                                }, _callee4);
                                                                            })
                                                                        );

                                                                        return function (_x2) {
                                                                            return _ref5.apply(this, arguments);
                                                                        };
                                                                    })()
                                                                );

                                                                _this.applyDarkTheme(); // this.applyCustomStyles();
                                                                // this.addSocialMediaShareButtons(this.site_config.lodging.event_name, this.site_config.lodging.event_id);
                                                                // this.forceClickOnCitySearch();

                                                                _this.setInputToRequired('input#city');

                                                                _this.setInputToRequired('input#theCheckIn');

                                                                _this.resizeViewportForMapMobile();

                                                                _this.showCoronavirusInfoBanner();

                                                                _this.showCurrencySelect();

                                                                _this.positionPropReviews();

                                                                _this.insertPoweredByFooterLogo();

                                                                _this.updateConfirmationCheckBoxes();

                                                                _this.showMoreAmenities();

                                                                _this.appendMemberTokenForCug();

                                                                _this.hideRemainingRooms();

                                                                _this.replaceHTMLWithFile(
                                                                    'https://static.hotelsforhope.com/ares/html/terms.html',
                                                                    '.ArnSubPage.ArnTermsConditions'
                                                                );

                                                                _this.addLinkToLoginFromRegisterPage();

                                                                _this.setCheckDatesToReadOnlyOnMobile();

                                                                if (document.querySelector('.WBConfirmedBooking')) {
                                                                    _this.cancelConfirmUpdate();
                                                                }

                                                            case 42:
                                                            case 'end':
                                                                return _context5.stop();
                                                        }
                                                    }
                                                }, _callee5);
                                            })
                                        );

                                        return function (_x) {
                                            return _ref.apply(this, arguments);
                                        };
                                    })()
                                );
                            },
                        },
                        {
                            key: 'initializeARNRatesReadyEvent',
                            value: function initializeARNRatesReadyEvent() {
                                function globalAjax() {
                                    try {
                                        setTimeout(function () {
                                            jQuery(document).trigger('ratesReadyEvent');
                                        }, 1); // eslint-disable-next-line no-empty
                                    } catch (e) {
                                        console.log(e);
                                    }
                                } // eslint-disable-next-line no-undef

                                Ajax.Responders.register({
                                    onComplete: globalAjax,
                                });
                                globalAjax();
                            },
                            /**
                             *@description gets site id from siteId meta tag
                             *@return {string}
                             */
                        },
                        {
                            key: 'getSiteID',
                            value: (function () {
                                var _getSiteID = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee6() {
                                        return regeneratorRuntime.wrap(
                                            function _callee6$(_context6) {
                                                while (1) {
                                                    switch ((_context6.prev = _context6.next)) {
                                                        case 0:
                                                            this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');

                                                            if (this.site_id) {
                                                                _context6.next = 3;
                                                                break;
                                                            }

                                                            return _context6.abrupt('return');

                                                        case 3:
                                                            return _context6.abrupt('return', this.site_id);

                                                        case 4:
                                                        case 'end':
                                                            return _context6.stop();
                                                    }
                                                }
                                            },
                                            _callee6,
                                            this
                                        );
                                    })
                                );

                                function getSiteID() {
                                    return _getSiteID.apply(this, arguments);
                                }

                                return getSiteID;
                            })(),
                        },
                        {
                            key: 'getCurrency',
                            value: (function () {
                                var _getCurrency = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee7() {
                                        var currency_el;
                                        return regeneratorRuntime.wrap(
                                            function _callee7$(_context7) {
                                                while (1) {
                                                    switch ((_context7.prev = _context7.next)) {
                                                        case 0:
                                                            currency_el = document.querySelector('meta[name="currency"]');

                                                            if (currency_el) {
                                                                _context7.next = 3;
                                                                break;
                                                            }

                                                            return _context7.abrupt('return');

                                                        case 3:
                                                            this.currency = currency_el.getAttribute('content');
                                                            return _context7.abrupt('return', this.currency);

                                                        case 5:
                                                        case 'end':
                                                            return _context7.stop();
                                                    }
                                                }
                                            },
                                            _callee7,
                                            this
                                        );
                                    })
                                );

                                function getCurrency() {
                                    return _getCurrency.apply(this, arguments);
                                }

                                return getCurrency;
                            })(),
                            /**
                             *@description shows how much a user donated to charity on checkout page - should refactor to allow selector and text as arguments
                             */
                        },
                        {
                            key: 'donationAmount',
                            value: function donationAmount() {
                                if (document.querySelector('.ConfirmationForm')) {
                                    var nights = document.querySelector('.numberOfNights th').textContent.split(' ')[0];

                                    if (document.querySelector('.topRoomFunding') && nights !== null) {
                                        document.querySelector('.topRoomFunding').innerHTML = '<p>Your reservation just generated an <span>$ '.concat(
                                            nights * 2,
                                            ' donation</span> to <span>RoomFunding</span>.  And s at no cost to you.</p>'
                                        );
                                    }
                                }
                            },
                        },
                        {
                            key: 'addPerNightToPrice',
                            value: function addPerNightToPrice(page, selector) {
                                var page_element = document.querySelector(page);

                                if (page_element) {
                                    var price = document.querySelectorAll(selector);
                                    price.forEach(function (element) {
                                        var parent = element.parentNode;
                                        if (!parent.querySelector('.perNight')) element.insertAdjacentHTML('afterEnd', '<span class="perNight translateMe">per night</span>');
                                    });
                                }
                            },
                        },
                        {
                            key: 'updateBookingFeeLanguage',
                            value: function updateBookingFeeLanguage() {
                                if (document.querySelector('.CheckOutForm')) {
                                    var due_now = document.querySelector('p.confirmedDueNowCharge span.confirmationAgreement');

                                    if (due_now) {
                                        if ((due_now.textContent.includes('4.95') || due_now.textContent.includes('5.00')) && due_now.textContent.includes('Hotels For Hope')) {
                                            due_now.insertAdjacentHTML(
                                                'beforeEnd',
                                                ' <i>This fee is in addition to any immediate charges for prepayment as required in the above deposit and booking terms.</i>'
                                            );
                                        }
                                    }
                                }
                            },
                        },
                        {
                            key: 'hidePropertyThumbnailArrowIfNoPropertyThumbnails',
                            value: function hidePropertyThumbnailArrowIfNoPropertyThumbnails() {
                                if (!this.page_name === 'search-results') {
                                    return;
                                }

                                var thumbnails = document.querySelectorAll('.ArnImageLink img');
                                thumbnails.forEach(function (thumbnail) {
                                    if (thumbnail) {
                                        var url = thumbnail.getAttribute('src');

                                        if (url.includes('no_image_300.gif')) {
                                            var thumbnail_parent = thumbnail.parentNode;

                                            if (thumbnail_parent) {
                                                thumbnail_parent.classList.add('no-images');
                                                var arrows = thumbnail_parent.previousSibling;

                                                if (arrows && arrows.classList.contains('ArnPropImageButtons')) {
                                                    arrows.style.display = 'none';
                                                }
                                            }
                                        }
                                    }
                                });
                            },
                        },
                        {
                            key: 'createStarIcons',
                            value: function createStarIcons() {
                                var star_elements = document.querySelectorAll('.ArnPropClass');
                                star_elements.forEach(function (star) {
                                    var number_of_stars = star.textContent;
                                    var num = number_of_stars.replace(/\D/g, '');
                                    var star_svg =
                                        '<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';
                                    if (num === '1') star.innerHTML = star_svg;
                                    if (num === '2') star.innerHTML = star_svg.repeat(2);
                                    if (num === '3') star.innerHTML = star_svg.repeat(3);
                                    if (num === '4') star.innerHTML = star_svg.repeat(4);
                                    if (num === '5') star.innerHTML = star_svg.repeat(5);
                                });
                            }, // refactor meeeeee
                        },
                        {
                            key: 'createMobileSortAndFilter',
                            value: function createMobileSortAndFilter() {
                                if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('.SearchHotels')) return;
                                utilities.updateHTML(
                                    '.sort',
                                    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter'
                                );
                                utilities.createHTML(
                                    '<div class="sort-filter-overlay"><div class="sort-filter-container"><div class="sort-filter-header"><h3>Sort &amp; Filter</h3><span class="sort-filter-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="mobile-sort-container"></div><div class="mobile-filter-container"><h4>Filter</h4></div></div></div>',
                                    '#searchForm',
                                    'beforeEnd'
                                );
                                var sort_button = document.querySelector('.ArnSortBy');
                                var sort_container = document.querySelector('.sort-wrapper');
                                var filter_container = document.querySelector('.ArnSecondarySearchOuterContainer');
                                var sort_filter_container = document.querySelector('.sort-filter-overlay');
                                sort_button.removeEventListener('click', function () {});
                                sort_button.addEventListener('click', function () {
                                    sort_filter_container.classList.toggle('show-sort-filter');
                                    document.querySelector('.mobile-sort-container').insertAdjacentElement('beforeEnd', sort_container);
                                    document.querySelector('.mobile-filter-container').insertAdjacentElement('beforeEnd', filter_container);
                                    filter_container.style.display = 'block';
                                    sort_container.style.display = 'block';
                                    document.body.classList.toggle('fixed');
                                });
                                document.querySelector('.sort-filter-close').addEventListener('click', function () {
                                    sort_filter_container.classList.toggle('show-sort-filter');
                                    document.body.classList.toggle('fixed');
                                });
                                document.querySelector('.sort-wrapper a').addEventListener('click', function (target) {
                                    target.toElement.classList.toggle('active-filter');
                                });
                                var filters = filter_container.querySelectorAll('.ArnSearchField');
                                filters.forEach(function (filter) {
                                    filter.classList.add('panel');
                                });
                            },
                        },
                        {
                            key: 'showSearchContainerOnMobile',
                            value: function showSearchContainerOnMobile() {
                                var params = new URL(window.location.href);
                                var search_params = new URLSearchParams(params.search);
                                var adults_text = '';
                                var location_text = '';
                                var check_in_text = '';
                                var check_in_date = '';
                                var check_out_text = '';
                                var check_out_date = '';
                                var check_in_el = document.querySelector('meta[name="checkIn"]');
                                var check_out_el = document.querySelector('meta[name="checkOut"]');
                                var adults_el = document.querySelector('meta[name="numberOfAdults"]');
                                var location_el = document.querySelector('meta[name="SearchLocation"]');
                                var content_el = document.querySelector('.SearchHotels .ArnPrimarySearchContainer');
                                if (!check_in_el || !check_out_el || !location_el || !adults_el) return;
                                adults_text = adults_el.getAttribute('content');
                                location_text = location_el.getAttribute('content');
                                check_in_text = check_in_el.getAttribute('content');
                                check_out_text = check_out_el.getAttribute('content');
                                check_in_date = dayjs(check_in_text);
                                check_out_date = dayjs(check_out_text);

                                if (
                                    this.site_config.site_type.toLowerCase() === 'cug' ||
                                    (this.site_config.site_type.toLowerCase() === 'retail' && search_params.get('destination') !== null)
                                ) {
                                    location_text = search_params.get('destination');
                                }

                                utilities.createHTML(
                                    '\n            <div class="show-search-container">\n                <span class="search-close">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">\n                        <polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"></polyline>\n                        <polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"></polyline>\n                    </svg>\n                </span>\n                <svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n                </svg>\n                <div class="search-info">\n                    <h3>'
                                        .concat(location_text, '</h3>\n                    <span>\n                        <span class="search-dates">')
                                        .concat(check_in_date.format('MMMM D'), ' - ')
                                        .concat(check_out_date.format('MMMM D'), '</span>\n                        <span class="adults-count">')
                                        .concat(adults_text, ' guests</span>\n                    </span>\n                </div>\n            </div>'),
                                    '.SearchHotels .ArnPrimarySearchOuterContainer',
                                    'beforeBegin'
                                );
                                document.querySelector('.show-search-container').addEventListener('click', function () {
                                    content_el.classList.toggle('show-search');
                                    document.querySelector('.search-close').classList.toggle('show-search-close');
                                });
                            },
                        },
                        {
                            key: 'buildMobileMenu',
                            value: (function () {
                                var _buildMobileMenu = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee8() {
                                        var menu_el, header_el, menu_button_el;
                                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                            while (1) {
                                                switch ((_context8.prev = _context8.next)) {
                                                    case 0:
                                                        menu_el = document.querySelector('#commands');
                                                        header_el = document.querySelector('#AdminControlsContainer');

                                                        if (!(!menu_el && !header_el)) {
                                                            _context8.next = 4;
                                                            break;
                                                        }

                                                        return _context8.abrupt('return');

                                                    case 4:
                                                        header_el.insertAdjacentHTML(
                                                            'beforeEnd',
                                                            '<div class="hamburger" id="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>'
                                                        );
                                                        menu_button_el = document.querySelector('#hamburger');

                                                        if (menu_button_el) {
                                                            _context8.next = 8;
                                                            break;
                                                        }

                                                        return _context8.abrupt('return');

                                                    case 8:
                                                        menu_button_el.addEventListener('click', function () {
                                                            menu_button_el.classList.toggle('is-active');
                                                            menu_el.classList.toggle('active');
                                                        });
                                                        _context8.next = 11;
                                                        return utilities.waitForSelectorInDOM('header');

                                                    case 11:
                                                        document.querySelector('header').insertAdjacentElement('beforeend', header_el);

                                                    case 12:
                                                    case 'end':
                                                        return _context8.stop();
                                                }
                                            }
                                        }, _callee8);
                                    })
                                );

                                function buildMobileMenu() {
                                    return _buildMobileMenu.apply(this, arguments);
                                }

                                return buildMobileMenu;
                            })(),
                        },
                        {
                            key: 'showAdditionalPolicies',
                            value: function showAdditionalPolicies() {
                                var additional_policies = document.querySelector('#theStayPolicies');
                                var additional_policies_legend = additional_policies.querySelector('legend');
                                var additional_policies_height = additional_policies.offsetHeight;
                                var policies = document.querySelector('#theConfirmationPoliciesAjax');
                                if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('#theBookingPage')) return;
                                policies.insertAdjacentElement('afterEnd', additional_policies);
                                utilities.moveOrphanedElementsIntoNewWrapper(
                                    document.querySelectorAll('#theStayPolicies *'),
                                    'policies-container',
                                    '#theStayPolicies',
                                    'beforeEnd'
                                );
                                additional_policies.insertAdjacentElement('beforeBegin', additional_policies_legend);
                                additional_policies.insertAdjacentHTML(
                                    'beforeEnd',
                                    '\n        <style>\n            #theStayPolicies {\n                height: 0;\n                display: none;\n            }\n            .show-policies{\n                height: '.concat(
                                        additional_policies_height,
                                        'px !important;\n                display: block !important;\n            }\n        </style>\n    '
                                    )
                                );
                                additional_policies_legend.addEventListener('click', function () {
                                    additional_policies.classList.toggle('show-policies');
                                });
                            },
                        },
                        {
                            key: 'updatePropReviewsURLToUseAnchor',
                            value: function updatePropReviewsURLToUseAnchor() {
                                var review_link = document.querySelector('.reviewCount a');
                                if (this.page_name !== 'property-detail' || !review_link) return;
                                review_link.setAttribute('href', '#thePropertyReviews');
                            },
                        },
                        {
                            key: 'moveFooterOutOfSearchContainer',
                            value: function moveFooterOutOfSearchContainer() {
                                if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnSupportBottom')) return;
                                document.body.insertAdjacentElement('beforeEnd', document.querySelector('.ArnSupportBottom'));
                            },
                        },
                        {
                            key: 'moveReviewsIntoPropNameContainer',
                            value: function moveReviewsIntoPropNameContainer() {
                                var prop_names = document.querySelectorAll('.SearchHotels .ArnPropName');
                                if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnContainer')) return;
                                prop_names.forEach(function (prop_name) {
                                    prop_name.insertAdjacentElement('beforeEnd', prop_name.parentElement.querySelector('.ArnTripAdvisorDetails'));
                                });
                            },
                        },
                        {
                            key: 'toggleMap',
                            value: function toggleMap() {
                                var map = document.querySelector('#ArnPropertyMap');
                                var map_btn = document.querySelector('#arnCloseAnchorId');
                                var header = document.querySelector('header');
                                var currency = document.querySelector('.config-container');
                                var dumb_extra_toggle_btn = document.querySelector('.ArnToggleMap + .ArnToggleMap');

                                if (dumb_extra_toggle_btn) {
                                    dumb_extra_toggle_btn.click();
                                }

                                if (!map_btn || !map) return;
                                map_btn.innerHTML =
                                    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-map fa-w-18 fa-2x"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg><span> Open Map</span>';
                                map_btn.addEventListener('click', function () {
                                    map_btn.classList.toggle('closeMap');
                                    map.classList.toggle('showMap');
                                    document.body.classList.toggle('fixed');
                                    header.classList.toggle('hideElement');
                                    currency.classList.toggle('hideElement');

                                    if (map_btn.classList.contains('closeMap')) {
                                        map_btn.querySelector('span').textContent = ' Close Map';
                                        var right_controls = document.querySelector('.leaflet-control-container .leaflet-top.leaflet-right');
                                        if (!right_controls) return;
                                        right_controls.appendChild(map_btn);
                                    } else {
                                        var toggle_map_container = document.querySelector('#arnToggleMapDiv');
                                        if (!toggle_map_container) return;
                                        toggle_map_container.appendChild(map_btn);
                                        map_btn.querySelector('span').innerHTML = ' Open Map';
                                    }
                                });
                            },
                        },
                        {
                            key: 'accordion',
                            value: function accordion(main_container, content_container, open_button) {
                                if (!document.querySelector(main_container)) {
                                    return;
                                }

                                var main_container_el = document.querySelector(main_container);
                                var open_el = main_container_el.querySelector(open_button);
                                var content_el = main_container_el.querySelector(content_container);
                                var svg_arrow =
                                    '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
                                var height = content_el.offsetHeight;
                                document
                                    .querySelector(main_container)
                                    .insertAdjacentHTML(
                                        'beforeEnd',
                                        '<style>\n            '
                                            .concat(content_container, '{\n                transform: translateY(-')
                                            .concat(
                                                height,
                                                'px);\n                pointer-events: none;\n                transition: all .75s ease;\n                height: 0;\n                position: relative;\n            }\n            .show-content{\n                transform: translateY(0) !important;\n                opacity: 1 !important;\n                pointer-events: initial !important;\n                height: '
                                            )
                                            .concat(height, 'px !important;\n            }\n        </style>\n        ')
                                    );
                                open_el.insertAdjacentHTML('beforeEnd', svg_arrow);
                                open_el.addEventListener('click', function () {
                                    content_el.classList.toggle('show-content');
                                    open_el.querySelector('svg').classList.toggle('flip-svg');
                                });
                            },
                        },
                        {
                            key: 'movePropClassBelowPropName',
                            value: function movePropClassBelowPropName() {
                                var prop_containers = document.querySelectorAll('.ArnContainer');

                                if (!document.querySelector('.SearchHotels')) {
                                    return;
                                }

                                prop_containers.forEach(function (container) {
                                    var prop_class = container.querySelector('.ArnPropClass');
                                    var prop_name = container.querySelector('.ArnPropName');

                                    if (container && prop_class && prop_name) {
                                        prop_name.insertAdjacentElement('beforeEnd', prop_class);
                                    }
                                });
                            },
                        },
                        {
                            key: 'setupReservationSummaryContainer',
                            value: function setupReservationSummaryContainer() {
                                var check_in_date = '';
                                var check_in_text = '';
                                var check_out_date = '';
                                var check_out_text = '';
                                var check_in_element = document.querySelector('.checkInRow td');
                                var check_out_element = document.querySelector('.checkOutRow td');
                                var currency_element = document.querySelector('meta[name="currency"]');
                                if (!check_in_element || !check_out_element || !currency_element) return;
                                check_in_text = check_in_element.textContent;
                                check_out_text = check_out_element.textContent;
                                check_in_date = dayjs(check_in_text).format(this.site_config.dayjs_date_format);
                                check_out_date = dayjs(check_out_text).format(this.site_config.dayjs_date_format);
                                utilities.createHTML('<span class="date-container">'.concat(check_in_date, ' - ').concat(check_out_date), '#theHotelAddress', 'beforeBegin');
                                utilities.moveElementIntoExistingWrapper('.totalRow .discount', '.theHotelName', 'afterEnd');
                            },
                        },
                        {
                            key: 'formatCheckoutForm',
                            value: function formatCheckoutForm() {
                                var room_reservations = document.querySelectorAll('.WBGuestFormFields');
                                var reservation_count = 0;
                                room_reservations.forEach(function (reservation) {
                                    reservation_count += 1;
                                    utilities.moveElementIntoExistingWrapper(
                                        '#theBookingPage td.GuestForms > fieldset:nth-child('
                                            .concat(reservation_count, ') #theCreditCardBillingNameAjax')
                                            .concat(reservation_count - 1),
                                        '#theBookingPage td.GuestForms > fieldset:nth-child('.concat(reservation_count, ') #theCreditCardNumberAjax'),
                                        'afterEnd'
                                    );
                                    utilities.createWrapper(
                                        '.RoomNumber-'
                                            .concat(reservation_count, ' .guestCityZip > table > tbody > tr > td > div, .RoomNumber-')
                                            .concat(reservation_count, ' .guestCityZip > table > tbody > tr >td:nth-child(2) > div, #theStateAjax')
                                            .concat(reservation_count, ', #theCountryAjax')
                                            .concat(reservation_count),
                                        '#theBillingAddressAjax'.concat(reservation_count),
                                        'billing-details-container',
                                        'afterEnd'
                                    );
                                    utilities.createWrapper(
                                        '.RoomNumber-'
                                            .concat(reservation_count, ' #theCreditCardBillingNameAjax')
                                            .concat(reservation_count, ', \n                .RoomNumber-')
                                            .concat(reservation_count, ' #theCardExpirationFieldsAjax, \n                .RoomNumber-')
                                            .concat(reservation_count, ' #theCardVerificationAjax'),
                                        '.RoomNumber-'.concat(reservation_count, ' #theCreditCardNumberAjax'),
                                        'credit-card-details',
                                        'afterEnd'
                                    );
                                    utilities.updateHTML('#theCreditCardBillingNameAjax'.concat(reservation_count - 1, ' label'), "Cardholder's Name");
                                    utilities.updateHTML('#theBillingAddressAjax'.concat(reservation_count - 1, ' label'), 'Billing Address');
                                    utilities.updateHTML('.RoomNumber-'.concat(reservation_count, ' > legend'), 'Billing Info');

                                    if (reservation_count > 1) {
                                        utilities.updateHTML('.RoomNumber-'.concat(reservation_count, ' > legend'), 'Billing Info - Room '.concat(reservation_count));
                                    }

                                    utilities.createHTML('<legend>Credit Card Info</legend>', '.RoomNumber-'.concat(reservation_count, ' .guestBillingAddress'), 'beforeBegin');
                                    utilities.updateHTML(
                                        '.cardNumber label',
                                        '<div class="creditcards"><img src="https://static.hotelsforhope.com/ares/images/credit_cards/credit_cards.png" alt="Credit Cards"></div><label>Credit Card Number</label>'
                                    );
                                });
                                this.keepHeaderConsistentWhenSameAsLastGuestClicked(reservation_count);
                            },
                        },
                        {
                            key: 'keepHeaderConsistentWhenSameAsLastGuestClicked',
                            value: function keepHeaderConsistentWhenSameAsLastGuestClicked(reservation_count) {
                                if (!document.querySelector('#theCopyInfoAjax input')) return;
                                document.querySelector('#theCopyInfoAjax input').addEventListener('click', function () {
                                    setTimeout(function () {
                                        utilities.updateHTML('.RoomNumber-'.concat(reservation_count, ' > legend'), 'Billing Info');

                                        if (reservation_count > 1) {
                                            utilities.updateHTML('.RoomNumber-'.concat(reservation_count, ' > legend'), 'Billing Info - Room '.concat(reservation_count));
                                        }
                                    }, 750);
                                });
                            },
                        },
                        {
                            key: 'applyConfigStyles',
                            value: function applyConfigStyles() {
                                var style_element = document.querySelector('#h4h-styles');
                                if (!this.site_config || !style_element) return;
                                utilities.createHTML('<link href="'.concat(this.site_config.google_font_url, '" rel="stylesheet">'), 'head', 'beforeEnd');
                                style_element.insertAdjacentHTML(
                                    'beforeend',
                                    '<link href="'
                                        .concat(env_path.path, '/site_configs/')
                                        .concat(this.site_config.directory_name, '/styles/')
                                        .concat(this.site_config.site_id, '.css" rel="stylesheet">')
                                );
                            },
                        },
                        {
                            key: 'applyDarkTheme',
                            value: function applyDarkTheme() {
                                if (this.site_config.theme.toLowerCase() === 'light') return;
                                document.querySelector('#h4h-styles').insertAdjacentHTML('beforeend', '<link href="'.concat(env_path.path, '/styles/dark.css" rel="stylesheet">'));
                            }, // refactor me, please!
                        },
                        {
                            key: 'showLanguageFromCongif',
                            value: function showLanguageFromCongif() {
                                var language_label = '';
                                var active_language = '';
                                var language_container_el = document.querySelector('#language');
                                var config_container = document.querySelector('.config-container');
                                var active_language_el = document.querySelector('meta[name="theme"]');
                                if (!this.site_config || !config_container || !active_language_el || !language_container_el) return;

                                if (!this.site_config.show_language_select) {
                                    language_container_el.style.display = 'none';
                                    return;
                                }

                                document.querySelector('div#language-label').classList.add('config-label');
                                active_language = active_language_el.getAttribute('content');
                                document.querySelector(".language-container div[value='".concat(active_language, "']")).classList.add('active-language');
                                document.body.insertAdjacentElement('afterBegin', config_container);
                                config_container.insertAdjacentElement('afterBegin', language_container_el);
                                language_label = language_container_el.querySelector('#language-label');
                                language_label.querySelector('span').innerHTML = document.querySelector('.active-language').innerHTML;
                                language_label.addEventListener('click', function () {
                                    language_container_el.querySelector('.language-container').classList.toggle('show-language-container'); // return if ie - ie can't toggle svgs

                                    if (window.document.documentMode) return;
                                    language_label.querySelector('svg').classList.toggle('flip-svg');
                                });
                                window.addEventListener('click', function (e) {
                                    if (document.querySelector('.show-language-container')) {
                                        if (e.target === document.querySelector('#language-label') || e.target.parentNode === document.querySelector('.language-container')) return;
                                        document.querySelector('.language-container').classList.toggle('show-language-container'); // return if ie - ie can't toggle svgs

                                        if (window.document.documentMode) return;
                                        language_label.querySelector('svg').classList.toggle('flip-svg');
                                    }
                                });
                            },
                        },
                        {
                            key: 'buildCurrencyDropdown',
                            value: (function () {
                                var _buildCurrencyDropdown = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee9() {
                                        var _this2 = this;

                                        var get_currency_j_s_o_n, setup_content_for_dropdown, update_param_on_currency_click, style_active_currency;
                                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                            while (1) {
                                                switch ((_context9.prev = _context9.next)) {
                                                    case 0:
                                                        get_currency_j_s_o_n = function get_currency_j_s_o_n() {
                                                            fetch(''.concat(env_path.path, '/js/json/currencies.json'))
                                                                .then(function (response) {
                                                                    if (!response.ok) {
                                                                        throw response;
                                                                    }

                                                                    return response.json();
                                                                })
                                                                .then(function (currencies_json) {
                                                                    setup_content_for_dropdown(currencies_json);
                                                                    update_param_on_currency_click();
                                                                    style_active_currency();
                                                                })
                                                                .catch(function (err) {
                                                                    err.text().then(function (error) {
                                                                        console.error('Could not fetch currencies.json', error);
                                                                    });
                                                                });
                                                        };

                                                        setup_content_for_dropdown = function setup_content_for_dropdown(currencies_json) {
                                                            // eslint-disable-next-line no-unused-vars
                                                            var currencies = Object.entries(currencies_json);
                                                            var menu_container = document.createElement('div');
                                                            var all_currencies_container = document.createElement('div');
                                                            var top_currencies = '\n            <h4>Top Currencies</h4>\n            <div class="top-currencies">\n                <span id="AUD"><strong>'
                                                                .concat(currencies_json.AUD.code, '</strong> - ')
                                                                .concat(currencies_json.AUD.name, '</span>\n                <span id="CAD"><strong>')
                                                                .concat(currencies_json.CAD.code, '</strong> - ')
                                                                .concat(currencies_json.CAD.name, '</span>\n                <span id="EUR"><strong>')
                                                                .concat(currencies_json.EUR.code, '</strong> - ')
                                                                .concat(currencies_json.EUR.name, '</span>\n                <span id="MXN"><strong>')
                                                                .concat(currencies_json.MXN.code, '</strong> - ')
                                                                .concat(currencies_json.MXN.name, '</span>\n                <span id="GBP"><strong>')
                                                                .concat(currencies_json.GBP.code, '</strong> - ')
                                                                .concat(currencies_json.GBP.name, '</span>\n                <span id="USD"><strong>')
                                                                .concat(currencies_json.USD.code, '</strong> - ')
                                                                .concat(currencies_json.USD.name, '</span>\n            </div>\n            <h4>All Currencies</h4>\n            ');
                                                            menu_container.insertAdjacentHTML('afterBegin', top_currencies);
                                                            menu_container.classList.add('currency-content');
                                                            all_currencies_container.classList.add('all-currencies');

                                                            for (var currency in currencies_json) {
                                                                all_currencies_container.insertAdjacentHTML(
                                                                    'beforeEnd',
                                                                    '<span id="'
                                                                        .concat(currency, '"><strong>')
                                                                        .concat(currency, '</strong> - ')
                                                                        .concat(currencies_json[currency].name, '</span>')
                                                                );
                                                            }

                                                            menu_container.insertAdjacentElement('beforeEnd', all_currencies_container);
                                                            utilities.createDropdownMenu('#currency-label', menu_container, '.currency-content', '.dropdown');
                                                        };

                                                        update_param_on_currency_click = function update_param_on_currency_click() {
                                                            var params = new URLSearchParams(window.location.search);
                                                            var dropdown = document.querySelector('.dropdown');
                                                            if (!dropdown) return;
                                                            dropdown.addEventListener('click', function (e) {
                                                                _this2.selected_currency = e.target.id;
                                                                if (!_this2.selected_currency) return;
                                                                document.querySelector('.active-currency').classList.remove('active-currency');
                                                                document.querySelector('#'.concat(e.target.id)).classList.add('active-currency');
                                                                document.querySelector('#currency-label span').textContent = document.querySelector('.active-currency').textContent;
                                                                if (_this2.page_name !== 'search-results') return;
                                                                params.set('currency', _this2.selected_currency);
                                                                window.location.search = params.toString();
                                                            });
                                                        };

                                                        style_active_currency = function style_active_currency() {
                                                            var active_currency_meta = document.querySelector('meta[name="currency"]');
                                                            if (!active_currency_meta) return;
                                                            var active_currency = active_currency_meta.content;
                                                            _this2.selected_currency = active_currency;
                                                            document.querySelector('#'.concat(active_currency)).classList.add('active-currency');
                                                            document.querySelector('#currency-label span').textContent = document.querySelector('.active-currency').textContent;
                                                        };

                                                        _context9.next = 6;
                                                        return get_currency_j_s_o_n();

                                                    case 6:
                                                    case 'end':
                                                        return _context9.stop();
                                                }
                                            }
                                        }, _callee9);
                                    })
                                );

                                function buildCurrencyDropdown() {
                                    return _buildCurrencyDropdown.apply(this, arguments);
                                }

                                return buildCurrencyDropdown;
                            })(),
                        },
                        {
                            key: 'setupDatePrompt',
                            value: function setupDatePrompt() {
                                var date_prompt = document.querySelector('#theDatePrompt');
                                if (!date_prompt) return;
                                date_prompt
                                    .querySelector('#datePromptContainer')
                                    .insertAdjacentHTML('afterBegin', '<img src="'.concat(this.site_config.header.logo_file_location, '" alt="Logo">'));
                            },
                        },
                        {
                            key: 'highlightMapMarkersOnPropertyHover',
                            value: function highlightMapMarkersOnPropertyHover() {
                                var prop_id;
                                var prop_id_el;
                                var properties = document.querySelectorAll('.ArnContainer');
                                var prop_container = document.querySelector('#currentPropertyPage');
                                if (!prop_container) return;
                                properties.forEach(function (property) {
                                    property.addEventListener('mouseenter', function (e) {
                                        prop_id_el = property.parentElement.querySelector('.propId');
                                        if (!prop_id_el) return;
                                        prop_id = prop_id_el.textContent;
                                        if (window.ArnMapDispatcher) ArnMapDispatcher.eventPropertyHighlightOn(prop_id);
                                    });
                                    property.addEventListener('mouseleave', function (e) {
                                        if (window.ArnMapDispatcher) ArnMapDispatcher.eventPropertyHighlightOff(prop_id);
                                    });
                                });
                            }, // refactor me, please!
                        },
                        {
                            key: 'showFullStayAndNightlyRates',
                            value: function showFullStayAndNightlyRates(nights, currency) {
                                var rate;
                                var properties;
                                var average_rate;
                                var full_stay_rate;
                                var fixed_full_stay; // if (this.site_config.show_tax_inclusive_rates) {
                                //     if (document.querySelector('.SearchHotels')) {
                                //         properties = document.querySelectorAll('.ArnContainer');
                                //         properties.forEach((property) => {
                                //             average_rate = property.querySelector('.ArnRateCell .ArnPriceCell .averageNightly');
                                //             full_stay_rate = property.querySelector('.arnPrice .arnUnit');
                                //             if (!average_rate || !full_stay_rate) return;
                                //             average_rate.insertAdjacentHTML('afterEnd', `<div>per night</div>`);
                                //             full_stay_rate.insertAdjacentHTML('beforeEnd', `<span> for ${nights} nights </span>`);
                                //             if (nights === 1) property.querySelector('.arnPrice').style.display = 'none';
                                //         });
                                //     }
                                //     if (document.querySelector('.SinglePropDetail')) {
                                //         properties = document.querySelectorAll('.ArnNightlyRate');
                                //         properties.forEach((property) => {
                                //             average_rate = property.querySelector('.averageNightly');
                                //             full_stay_rate = property.querySelector('strong');
                                //             if (!average_rate || !full_stay_rate) return;
                                //             average_rate.insertAdjacentHTML('afterEnd', `<div>per night</div>`);
                                //             full_stay_rate.insertAdjacentHTML('beforeEnd', `<span> for ${nights} nights </span>`);
                                //             if (nights === 1) property.querySelector('.averageNightly').style.display = 'none';
                                //         });
                                //     }
                                // }

                                if (!this.site_config.show_tax_inclusive_rates) {
                                    if (document.querySelector('.SearchHotels')) {
                                        properties = document.querySelectorAll('.ArnContainer');
                                        properties.forEach(function (property) {
                                            rate = property.querySelector('.arnPrice');
                                            average_rate = property.querySelector('.arnPrice .arnUnit');
                                            if (!average_rate || !rate) return;
                                            full_stay_rate = parseFloat(average_rate.textContent) * nights;
                                            fixed_full_stay = full_stay_rate.toFixed(2);
                                            if (!average_rate) return;
                                            currency === 'USD'
                                                ? rate.insertAdjacentHTML(
                                                      'beforeEnd',
                                                      '<div>per night</div><div class="full-stay">$'.concat(fixed_full_stay, ' for ').concat(nights, ' nights </div>')
                                                  )
                                                : rate.insertAdjacentHTML(
                                                      'beforeEnd',
                                                      '<div>per night</div><div class="full-stay">'
                                                          .concat(fixed_full_stay, ' ')
                                                          .concat(currency, ' for ')
                                                          .concat(nights, ' nights </div>')
                                                  );
                                            if (nights === 1) property.querySelector('.full-stay').style.display = 'none';
                                        });
                                        document.body.insertAdjacentHTML('beforeEnd', '<style>.arnCurrency,.arnUnit{font-size: 17px;}.arnCurrency + div{font-weight:500;}</style>');
                                    }

                                    if (document.querySelector('.SinglePropDetail')) {
                                        properties = document.querySelectorAll('.ArnNightlyRate');
                                        properties.forEach(function (property) {
                                            average_rate = property.querySelector('strong');
                                            full_stay_rate = parseFloat(average_rate.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '')) * nights;
                                            if (!average_rate || !full_stay_rate) return;
                                            fixed_full_stay = full_stay_rate.toFixed(2);
                                            if (!fixed_full_stay) return;
                                            currency === 'USD'
                                                ? average_rate.insertAdjacentHTML(
                                                      'beforeEnd',
                                                      '<div>per night</div><div class="full-stay">$'.concat(fixed_full_stay, ' for ').concat(nights, ' nights </div>')
                                                  )
                                                : average_rate.insertAdjacentHTML(
                                                      'beforeEnd',
                                                      '<div>per night</div><div class="full-stay">'
                                                          .concat(fixed_full_stay, ' ')
                                                          .concat(currency, ' for ')
                                                          .concat(nights, ' nights </div>')
                                                  );
                                            if (nights === 1) property.querySelector('.full-stay').style.display = 'none';
                                        });
                                        document.body.insertAdjacentHTML(
                                            'beforeEnd',
                                            '<style>.ArnNightlyRate strong{font-size: 17px !important;}.ArnNightlyRate strong div:first-child{font-weight:500;margin-bottom:4px;}.ArnNightlyRate strong div{font-size:13px;}</style>'
                                        );
                                    }
                                }
                            },
                        },
                        {
                            key: 'getTotalNights',
                            value: (function () {
                                var _getTotalNights = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee10() {
                                        var check_in_el, check_out_el, check_in, check_out, nights;
                                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                            while (1) {
                                                switch ((_context10.prev = _context10.next)) {
                                                    case 0:
                                                        check_in_el = document.querySelector('meta[name="checkIn"]');
                                                        check_out_el = document.querySelector('meta[name="checkOut"]');

                                                        if (!(!check_in_el || !check_out_el)) {
                                                            _context10.next = 4;
                                                            break;
                                                        }

                                                        return _context10.abrupt('return');

                                                    case 4:
                                                        check_in = new Date(check_in_el.getAttribute('content'));
                                                        check_out = new Date(check_out_el.getAttribute('content'));
                                                        nights = (check_out.getTime() - check_in.getTime()) / (1000 * 3600 * 24);
                                                        return _context10.abrupt('return', nights);

                                                    case 8:
                                                    case 'end':
                                                        return _context10.stop();
                                                }
                                            }
                                        }, _callee10);
                                    })
                                );

                                function getTotalNights() {
                                    return _getTotalNights.apply(this, arguments);
                                }

                                return getTotalNights;
                            })(),
                        },
                        {
                            key: 'getNightlyRateForMapMarkers',
                            value: function getNightlyRateForMapMarkers(nights, currency) {
                                var average_rate;
                                var full_stay_rate;
                                var fixed_average_rate;
                                var map_markers = document.querySelectorAll('.arnMapMarkerSpan');
                                map_markers.forEach(function (marker) {
                                    full_stay_rate = marker.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '');
                                    average_rate = full_stay_rate / nights;
                                    fixed_average_rate = parseFloat(average_rate).toFixed(0);
                                    currency === 'USD'
                                        ? (marker.textContent = '$'.concat(fixed_average_rate))
                                        : (marker.textContent = ''.concat(fixed_average_rate, ' ').concat(currency));
                                });
                            },
                        },
                        {
                            key: 'addTitleToProperties',
                            value: function addTitleToProperties() {
                                var property_name;
                                var property_name_el;
                                var properties = document.querySelectorAll('.ArnContainer');
                                if (!document.querySelector('.SearchHotels')) return;
                                properties.forEach(function (property) {
                                    property_name_el = property.querySelector('.ArnPropNameLink');
                                    property_name = property_name_el.querySelector('span').textContent;
                                    property_name_el.setAttribute('title', property_name);
                                });
                            },
                        },
                        {
                            key: 'showLoaderOnResultsUpdate',
                            value: function showLoaderOnResultsUpdate() {
                                var _this3 = this;

                                var loader = document.querySelector('#searching');
                                var update_buttons = document.querySelectorAll('#theSubmitButton', '#theOtherSubmitButton');
                                if (!document.querySelector('.SearchHotels')) return;
                                update_buttons.forEach(function (button) {
                                    button.addEventListener('click', function () {
                                        if (_this3.site_config.site_type.toLowerCase() === 'cug' && document.querySelector('input#address-input').value === '') {
                                            _this3.style_validation_fields('input#address-input');

                                            return;
                                        }

                                        if (document.querySelector('input#theCheckIn').value === '') {
                                            _this3.style_validation_fields('input#theCheckIn');

                                            return;
                                        }

                                        loader.style.display = 'block';
                                    });
                                });
                            },
                        },
                        {
                            key: 'changeContractedPropertyPinColor',
                            value: function changeContractedPropertyPinColor() {
                                var property_elements = document.querySelectorAll('.ArnProperty');
                                var map_pins_list = document.querySelectorAll('.arnMapMarker');
                                if (!property_elements) return;
                                var properties_array = [];
                                var contracted_properties_index = [];
                                property_elements.forEach(function (property) {
                                    if (property.classList.contains('S16') || property.classList.contains('S20')) {
                                        properties_array.push(true);
                                    } else {
                                        properties_array.push(false);
                                    }
                                });
                                properties_array.forEach(function (property, i) {
                                    if (!property) return;
                                    contracted_properties_index.push(i);
                                });
                                contracted_properties_index.forEach(function (contracted_property_index) {
                                    map_pins_list[contracted_property_index].classList.add('contracted-pin');
                                });
                            }, // map will need a redraw for this to work - will come back to this
                        },
                        {
                            key: 'setMapMarkerSize',
                            value: function setMapMarkerSize() {
                                var currency = '';
                                var currency_el = document.querySelector('meta[name="currency"]');
                                var map_markers = document.querySelectorAll('.arnMapMarker');
                                if (!currency_el || !map_markers) return;
                                currency = currency_el.getAttribute('content');
                                if (currency === 'USD') return;
                                map_markers.forEach(function (marker) {
                                    marker.style.width = '85px';
                                });
                            },
                        },
                        {
                            key: 'useLogoForVenueMapMarker',
                            value: function useLogoForVenueMapMarker() {
                                var _this4 = this;

                                var map_markers = document.querySelectorAll('.arn-green-marker-icon');
                                if (!this.site_config) return;
                                map_markers.forEach(function (marker) {
                                    marker.setAttribute('src', ''.concat(_this4.site_config.map_marker_image_url));
                                });
                            },
                        },
                        {
                            key: 'addHRToProperties',
                            value: function addHRToProperties() {
                                var props = document.querySelectorAll('.ArnProperty');
                                if (!props) return;
                                props.forEach(function (prop) {
                                    prop.insertAdjacentHTML('afterEnd', '<hr class="prop-hr">');
                                });
                            },
                            /**
     *@description Looks at the prop id and checks if it should have a custom tag or sash
     @param string takes the text for the exclusive rate sash
     @param string takes the text for the host hotel custom tag text
     @param string takes the text for the partner hotel custom tag text
     */
                        },
                        {
                            key: 'isPropByGateway',
                            value: function isPropByGateway(exclusiveRateText, hostHotelText, partnerHotelText, eventName) {
                                var _this5 = this;

                                if (document.querySelector('.exclusive-rate')) return;
                                /**
      *@description adds a sash to a property
      @param string DOM selector 
      @param string Event name from site_config 
      @param string Exclusive rate text
      */

                                function updateRoomDescription(selector, name, text) {
                                    if (!document.querySelector('.SinglePropDetail')) return;
                                    var original = selector.querySelector('.RoomDescription');
                                    original.innerHTML = original.innerHTML.replace(
                                        'Special Event Rate',
                                        '<span id="exclusive-event-rate">'.concat(name, ' ').concat(text, '</span>')
                                    );
                                }
                                /**
      *@description adds a sash to a property
      @param string takes the text for the exclusive rate sash
      @param string is the parent element for the current iteration 
      */

                                var add_exclusive_rates_sash = function add_exclusive_rates_sash(text, selector) {
                                    if (_this5.site_config.exclusive_rate_text === '') return;
                                    selector.querySelector('div.ArnPropThumb').insertAdjacentHTML('afterbegin', '<span class="exclusive-rate">'.concat(text, '</span>'));
                                };
                                /**
      *@description adds a custom tag to a property thumbnail image
      @param string takes the text for custom tag
      @param string is the parent element for the current iteration 
      @param string will be either 'x' or 'y'. Determines if Host or Partner hotel. 
      */

                                function addCustomTag(text, selector) {
                                    selector.querySelector('div.ArnPropThumb').insertAdjacentHTML('beforeend', '<div class="custom-tag">'.concat(text, ' </div>'));
                                }

                                if (this.page_name === 'search-results') {
                                    var props = document.querySelectorAll('div.ArnProperty');
                                    props.forEach(function (el) {
                                        if (el.classList.contains('ArnPropertyTierTwo') && partnerHotelText !== '') {
                                            addCustomTag(partnerHotelText, el);
                                        }

                                        if (el.classList.contains('ArnPropertyTierThree') && hostHotelText !== '') {
                                            addCustomTag(hostHotelText, el);
                                        }

                                        if (el.classList.contains('S16') || (el.classList.contains('S20') && exclusiveRateText !== '')) {
                                            add_exclusive_rates_sash(exclusiveRateText, el);
                                        }
                                    });
                                }

                                if (this.page_name === 'property-detail') {
                                    var rates = document.querySelectorAll('div.rateRow');
                                    rates.forEach(function (el) {
                                        if (el.querySelector('table.SB16') || (el.querySelector('table.SB20') && _this5.site_config.exclusive_rate_text !== '')) {
                                            updateRoomDescription(el, eventName, exclusiveRateText);
                                        }
                                    });
                                }
                            },
                        },
                        {
                            key: 'addLRGDetails',
                            value: function addLRGDetails() {
                                var _this6 = this;

                                if (this.site_config.site_type !== 'lodging' || !this.site_config.lodging.is_lrg) return;
                                var properties = document.querySelectorAll('.S16, .S20');
                                if (!properties) return;
                                properties.forEach(function (property) {
                                    if (!property.querySelector('.arnPrice')) return;
                                    property
                                        .querySelector('.arnPrice')
                                        .insertAdjacentHTML(
                                            'afterEnd',
                                            '\n                <a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid='.concat(
                                                _this6.site_id,
                                                '&amp;theme=standard" target="_blank" class="lowest-rate-link">Lowest Rate. <span>Guaranteed.</span></a>\n            '
                                            )
                                        );
                                });
                            },
                        },
                        {
                            key: 'replaceLRGForm',
                            value: (function () {
                                var _replaceLRGForm = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee11() {
                                        var html;
                                        return regeneratorRuntime.wrap(
                                            function _callee11$(_context11) {
                                                while (1) {
                                                    switch ((_context11.prev = _context11.next)) {
                                                        case 0:
                                                            if (!(this.site_config.site_type !== 'lodging' && !this.site_config.is_lrg)) {
                                                                _context11.next = 2;
                                                                break;
                                                            }

                                                            return _context11.abrupt('return');

                                                        case 2:
                                                            _context11.prev = 2;
                                                            _context11.next = 5;
                                                            return fetch('https://static.hotelsforhope.com/components/lrg-form/lrg-form.html').then(function (response) {
                                                                return response.text();
                                                            });

                                                        case 5:
                                                            html = _context11.sent;
                                                            document.querySelector('#theWBRateGuaranteeForm2Body').innerHTML = html;
                                                            _context11.next = 12;
                                                            break;

                                                        case 9:
                                                            _context11.prev = 9;
                                                            _context11.t0 = _context11['catch'](2);
                                                            console.error(_context11.t0);

                                                        case 12:
                                                        case 'end':
                                                            return _context11.stop();
                                                    }
                                                }
                                            },
                                            _callee11,
                                            this,
                                            [[2, 9]]
                                        );
                                    })
                                );

                                function replaceLRGForm() {
                                    return _replaceLRGForm.apply(this, arguments);
                                }

                                return replaceLRGForm;
                            })(),
                        },
                        {
                            key: 'addImageSlideshow',
                            value: function addImageSlideshow() {
                                document.querySelector('#thePropertyImages').style.display = 'none';
                                var prop_id = document.querySelector('meta[name="aPropertyId"]').content;
                                var counter = 0;
                                var prop_images;
                                var carousel_images;

                                function getPropImages() {
                                    return _getPropImages.apply(this, arguments);
                                }

                                function _getPropImages() {
                                    _getPropImages = _asyncToGenerator(
                                        /*#__PURE__*/ regeneratorRuntime.mark(function _callee12() {
                                            var data;
                                            return regeneratorRuntime.wrap(
                                                function _callee12$(_context12) {
                                                    while (1) {
                                                        switch ((_context12.prev = _context12.next)) {
                                                            case 0:
                                                                _context12.prev = 0;
                                                                _context12.next = 3;
                                                                return fetch('https://api.hotelsforhope.com/arn/properties/'.concat(prop_id), {
                                                                    method: 'GET',
                                                                }).then(function (response) {
                                                                    return response.json();
                                                                });

                                                            case 3:
                                                                data = _context12.sent;
                                                                return _context12.abrupt(
                                                                    'return',
                                                                    data.Images.map(function (e) {
                                                                        return e.ImagePath.replace(/_300/, '_804480');
                                                                    })
                                                                );

                                                            case 7:
                                                                _context12.prev = 7;
                                                                _context12.t0 = _context12['catch'](0);
                                                                console.log(_context12.t0);

                                                            case 10:
                                                            case 'end':
                                                                return _context12.stop();
                                                        }
                                                    }
                                                },
                                                _callee12,
                                                null,
                                                [[0, 7]]
                                            );
                                        })
                                    );
                                    return _getPropImages.apply(this, arguments);
                                }

                                function populateImages() {
                                    carousel_images = document.querySelectorAll('.carousel-slide img');

                                    for (var i = counter === 0 ? counter : counter + 2; i < counter + 5; i += 1) {
                                        if (i === prop_images.length) return;
                                        document.querySelector('.carousel-slide').insertAdjacentHTML(
                                            'beforeend',
                                            '<div class="image-wrapper">\n                        <div class ="image-number">'
                                                .concat(i + 1, '/')
                                                .concat(prop_images.length, '</div>\n                        <img src=')
                                                .concat(prop_images[i], '>\n                    </div>')
                                        );
                                    }
                                }

                                function createPropImageSlideshow() {
                                    return _createPropImageSlideshow.apply(this, arguments);
                                }

                                function _createPropImageSlideshow() {
                                    _createPropImageSlideshow = _asyncToGenerator(
                                        /*#__PURE__*/ regeneratorRuntime.mark(function _callee13() {
                                            return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                                while (1) {
                                                    switch ((_context13.prev = _context13.next)) {
                                                        case 0:
                                                            _context13.next = 2;
                                                            return getPropImages();

                                                        case 2:
                                                            prop_images = _context13.sent;
                                                            document
                                                                .querySelector('.ArnPropName')
                                                                .insertAdjacentHTML(
                                                                    'afterend',
                                                                    '<div class="carousel-container">\n                    <div class="carousel-slide">\n                    </div>\n                    <a id="previousBtn">&#10094;</a>\n                    <a id="nextBtn">&#10095;</a>\n                </div>'
                                                                );
                                                            populateImages();

                                                        case 5:
                                                        case 'end':
                                                            return _context13.stop();
                                                    }
                                                }
                                            }, _callee13);
                                        })
                                    );
                                    return _createPropImageSlideshow.apply(this, arguments);
                                }

                                function hideArrows(next, prev) {
                                    if (counter > 1 && counter < prop_images.length - 2) return;
                                    next.style.display = 'block';
                                    prev.style.display = 'block';
                                    if (counter === 0) prev.style.display = 'none';
                                    if (counter + 1 === prop_images.length) next.style.display = 'none';
                                }

                                function createCarousel() {
                                    return _createCarousel.apply(this, arguments);
                                }

                                function _createCarousel() {
                                    _createCarousel = _asyncToGenerator(
                                        /*#__PURE__*/ regeneratorRuntime.mark(function _callee14() {
                                            var carousel_slide, previous_btn, next_btn;
                                            return regeneratorRuntime.wrap(function _callee14$(_context14) {
                                                while (1) {
                                                    switch ((_context14.prev = _context14.next)) {
                                                        case 0:
                                                            _context14.next = 2;
                                                            return createPropImageSlideshow();

                                                        case 2:
                                                            carousel_slide = document.querySelector('.carousel-slide');
                                                            previous_btn = document.querySelector('#previousBtn');
                                                            next_btn = document.querySelector('#nextBtn');
                                                            hideArrows(next_btn, previous_btn);
                                                            next_btn.addEventListener('click', function () {
                                                                carousel_images = document.querySelectorAll('.carousel-slide img');
                                                                if (counter === carousel_images.length - 1) return;
                                                                counter += 1;
                                                                hideArrows(next_btn, previous_btn);
                                                                var size = carousel_images[counter].clientWidth;
                                                                carousel_slide.style.transform = 'translateX(-'.concat(size * counter, 'px)');

                                                                if (counter === carousel_images.length - 2) {
                                                                    populateImages();
                                                                }
                                                            });
                                                            previous_btn.addEventListener('click', function () {
                                                                if (counter <= 0) return;
                                                                counter -= 1;
                                                                hideArrows(next_btn, previous_btn);
                                                                var size = carousel_images[counter].clientWidth;
                                                                carousel_slide.style.transform = 'translateX(-'.concat(size * counter, 'px)');
                                                            });

                                                        case 8:
                                                        case 'end':
                                                            return _context14.stop();
                                                    }
                                                }
                                            }, _callee14);
                                        })
                                    );
                                    return _createCarousel.apply(this, arguments);
                                }

                                createCarousel();
                            },
                        },
                        {
                            key: 'addSocialMetaTags',
                            value: function addSocialMetaTags(event_name, event_id) {
                                if (this.site_config.site_type === 'cug' || this.page_name !== 'confirmation' || !this.site_config.has_social_sharing) return;
                                document.head.insertAdjacentHTML(
                                    'beforeend',
                                    '<meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html">\n            <meta property="og:type" content="website" >\n            <meta property="og:title" content="'
                                        .concat(event_name, '" >\n            <meta property="og:description" content="I just booked my room for ')
                                        .concat(
                                            event_name,
                                            ' through Hotels4Hope and donated to charity!" >\n            <meta property="og:image" content="https://events.hotelsforhope.com/group-event?id='
                                        )
                                        .concat(event_id, '">')
                                );
                            },
                        },
                        {
                            key: 'addSocialMediaShareButtons',
                            value: function addSocialMediaShareButtons(event_name, event_id) {
                                if (this.site_config.site_type === 'cug' || this.page_name !== 'confirmation' || !this.site_config.has_social_sharing) return;
                                var confirmation_container = document.querySelector('#theReservationFormContainer tbody');
                                var twitter_script = document.createElement('script');
                                twitter_script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
                                twitter_script.setAttribute('async', true);
                                document.head.appendChild(twitter_script);
                                confirmation_container.insertAdjacentHTML(
                                    'afterbegin',
                                    '<div class="social-share-buttons-container">\n                <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fevents.hotelsforhope.com%2Fgroup-event%3Fid%3D'
                                        .concat(
                                            event_id,
                                            '&layout=button&size=large&width=77&height=28&appId" width="77" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>\n                \n                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just booked my room for '
                                        )
                                        .concat(event_name, ' through Hotels4Hope and donated to charity!" data-url="https://events.hotelsforhope.com/group-event?id=')
                                        .concat(event_id, '" data-via="Hotels4Hope" data-show-count="false">Tweet</a>\n                </div>')
                                );
                            },
                        },
                        {
                            key: 'style_validation_fields',
                            value: function style_validation_fields(element) {
                                var el_val = document.querySelector(element);

                                if (el_val.value === '') {
                                    el_val.classList.add('invalidated');
                                }
                            }, // forceClickOnCitySearch() {
                            //     if (this.page_name === 'search-results' && document.querySelector('meta[name="SearchType"]').content === 'City' && this.site_config.site_type.toLowerCase() === 'cug') {
                            //         document.querySelector('.ArnGoCitySearch').click();
                            //     }
                            // }
                        },
                        {
                            key: 'setInputToRequired',
                            value: function setInputToRequired(selector) {
                                if (!document.querySelector(selector)) return;
                                document.querySelector(selector).required = true;
                            },
                        },
                        {
                            key: 'resizeViewportForMapMobile',
                            value: function resizeViewportForMapMobile() {
                                if (this.page_name !== 'search-results' && !window.matchMedia('(max-width:800px)').matches) return;
                                var vh = window.innerHeight * 0.01;
                                document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
                                window.addEventListener('resize', function () {
                                    vh = window.innerHeight * 0.01;
                                    document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
                                });
                            },
                        },
                        {
                            key: 'implementAds',
                            value: function implementAds() {
                                if (!this.site_config.ads || window.matchMedia('(max-width:800px)').matches) return;
                                var ads = this.site_config.ads;

                                if (this.page_name === 'search-results') {
                                    if (!document.querySelector('.ArnSecondarySearchOuterContainer') || !ads.sidebar_ad.is_active) return;
                                    document
                                        .querySelector('.ArnSecondarySearchOuterContainer')
                                        .insertAdjacentHTML(
                                            'afterEnd',
                                            '\n                <a class="sidebar-ad" href="'
                                                .concat(ads.sidebar_ad.outbound_url, '" target="_blank">\n                    <img src="')
                                                .concat(ads.sidebar_ad.image_url, '" alt="Advertisement">\n                </a>\n            ')
                                        );
                                    if (!document.querySelector('#currentPropertyPage .ArnProperty:nth-child(2)') || !ads.between_property_ad.is_active) return;
                                    document
                                        .querySelector('#currentPropertyPage .ArnProperty:nth-child(2)')
                                        .insertAdjacentHTML(
                                            'afterEnd',
                                            '\n                <a class="between-property-ad" href="'
                                                .concat(ads.between_property_ad.outbound_url, '" target="_blank">\n                    <img src="')
                                                .concat(
                                                    ads.between_property_ad.image_url,
                                                    '" alt="Advertisement">\n                </a>\n                <hr class="prop-hr">\n            '
                                                )
                                        );
                                }

                                if (this.page_name === 'confirmation') {
                                    if (!document.querySelector('.GuestForms') || !ads.confirmation_page_bottom.is_active) return;
                                    document
                                        .querySelector('.GuestForms')
                                        .insertAdjacentHTML(
                                            'beforeEnd',
                                            '\n                <a class="confirmation-bottom-ad" href="'
                                                .concat(ads.confirmation_page_bottom.outbound_url, '" target="_blank">\n                    <img src="')
                                                .concat(ads.confirmation_page_bottom.image_url, '" alt="Advertisement">\n                </a>\n            ')
                                        );
                                }
                            },
                        },
                        {
                            key: 'cugConfigs',
                            value: function cugConfigs() {
                                var site_config = this.site_config;
                                if (site_config.site_type.toLowerCase() !== 'cug') return;

                                function showPercentSavingsFilter() {
                                    if (!site_config.cug.show_percent_savings) return;
                                    var percent_savings_filter = document.querySelector('.ArnSortByDealPercent');
                                    if (!percent_savings_filter) return;
                                    percent_savings_filter.style.display = 'block';
                                }

                                function updatePercentSavingsText() {
                                    var percents = document.querySelectorAll('.percentSavings');
                                    if (!percents || site_config.cug.show_percent_savings) return;
                                    percents.forEach(function (percent) {
                                        percent.insertAdjacentHTML('beforeEnd', ' Today');
                                    });
                                }

                                function showPercentSavingsOnProperties() {
                                    if (site_config.cug.show_percent_savings) return;
                                    var properties = '';
                                    if (document.querySelector('.SearchHotels')) properties = document.querySelectorAll('.ArnProperty');
                                    if (document.querySelector('.SinglePropDetail')) properties = document.querySelectorAll('.ArnNightlyRate');
                                    if (!properties) return;
                                    properties.forEach(function (property) {
                                        var percent = property.querySelector('div.percentSavings');
                                        if (!percent) return;
                                        percent.style.display = 'block';
                                        if (!document.querySelector('.SearchHotels')) return;
                                        var rate_container = property.querySelector('.ArnRateCell');
                                        var rate_button = property.querySelector('.ArnRateButton');
                                        window.matchMedia('(min-width: 600px)').matches
                                            ? rate_container.insertAdjacentElement('afterBegin', percent)
                                            : rate_button.insertAdjacentElement('afterBegin', percent);
                                    });
                                }

                                updatePercentSavingsText();
                                showPercentSavingsFilter();
                                showPercentSavingsOnProperties();
                            },
                        },
                        {
                            key: 'showFilters',
                            value: function showFilters() {
                                if (this.site_config.show_stars) {
                                    document.body.insertAdjacentHTML('beforeEnd', '<style>.ArnPropClass, #PropertyClassesContainer{display:block !important;}</style>');
                                }

                                if (this.site_config.show_property_type) {
                                    document.body.insertAdjacentHTML('beforeEnd', '<style> #PropertyTypesContainer{display:block !important;}</style>');
                                }
                            },
                        },
                        {
                            key: 'showCoronavirusInfoBanner',
                            value: function showCoronavirusInfoBanner() {
                                if (this.site_id === '52342') return;
                                if (localStorage.getItem('covidAlertBanner') === 'closed') return;
                                document.body.insertAdjacentHTML(
                                    'afterBegin',
                                    '\n            <div class="info-banner">\n                <div class="message-content">\n                    <h1>Book with Confidence:</h1>\n                    <a class="details-link" href="https://www.hotelsforhope.com/covid19/" target="_blank">\n                        <h1>COVID-19 Update</h1> \n                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" width="18px">\n                            <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class="">\n                            </path>\n                        </svg>\n                    </a>\n                    <a style="margin-left: 12px;" class="details-link" href="https://www.hotelsforhope.com/covid-19-hotel-cleaning-policies/" target="_blank">\n                        <h1>Cleaning Policies</h1>                    \n                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" width="18px">\n                            <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class="">\n                            </path>\n                        </svg>\n                    </a>\n                </div>\n                <button class="close-banner-button close-alert">X</button>\n            </div>\n        '
                                );
                                document.querySelector('.close-banner-button').addEventListener('click', function (evt) {
                                    document.querySelector('.info-banner').style.display = 'none';
                                    window.localStorage.setItem('covidAlertBanner', 'closed');
                                });
                            },
                        },
                        {
                            key: 'showCurrencySelect',
                            value: function showCurrencySelect() {
                                if (this.site_config.show_currency_select) return;
                                var config_container = document.querySelector('.config-container');
                                var currency_element = document.querySelector('.currencies-container');

                                if (!this.site_config.show_currency_select && !this.site_config.show_language_select) {
                                    config_container.style.display = 'none';
                                    return;
                                }

                                if (!this.site_config.show_currency_select) {
                                    currency_element.style.display = 'none';
                                }
                            },
                        },
                        {
                            key: 'positionPropReviews',
                            value: function positionPropReviews() {
                                if (this.page_name !== 'property-detail' || !this.site_config.reviews_before_info || document.querySelector('.PropertyReviews') === null) return;
                                var reviews = document.querySelector('.PropertyReviews');
                                document.querySelector('.GeneralInfo').insertAdjacentElement('beforebegin', reviews);
                            },
                        },
                        {
                            key: 'insertPoweredByFooterLogo',
                            value: function insertPoweredByFooterLogo() {
                                document
                                    .querySelector('.ArnSupportBottom')
                                    .insertAdjacentHTML(
                                        'beforeend',
                                        '<div class="pb-container">\n            <a href="https://www.hotelsforhope.com/" target="_blank"><img src="https://static.hotelsforhope.com/ares/images/h4h/pb-h4h.png" alt="Powered by Hotels for Hope logo"></a>\n            </div>'
                                    );
                            },
                        },
                        {
                            key: 'updateConfirmationCheckBoxes',
                            value: function updateConfirmationCheckBoxes() {
                                if (this.page_name !== 'checkout') return;
                                document.querySelector('.open-modal').textContent = 'Policies & Fees';
                                document.querySelector(
                                    'span.confirmationAgreement'
                                ).innerHTML = 'By checking this box I agree to the <span id="policies-fees">Policies & Fees</span> above and the <a id="t-and-cs" target="_blank" href="https://events.hotelsforhope.com/v6/terms-and-conditions?&siteId='.concat(
                                    this.site_id,
                                    '&theme=standard">Terms & Conditions</a> found on this website.'
                                );
                                utilities.replaceSpecificText('.confirmedDueNowCharge .confirmationAgreement', /(^|)You(?=\s|$)/gi, 'I');
                                utilities.replaceSpecificText('.confirmedDueNowCharge .confirmationAgreement', /(^|)your(?=|$)/gi, 'my');
                                var policies_lower = document.querySelector('#policies-fees');
                                policies_lower.addEventListener('click', function () {
                                    document.querySelector('div.modal-overlay').classList.toggle('show-modal');
                                    document.body.classList.toggle('hide');
                                });
                                var policies_header = document.querySelector('span.open-modal');
                                policies_header.addEventListener('click', function () {
                                    document.body.classList.toggle('hide');
                                });
                                var close_modal = document.querySelector('span.close-modal');
                                close_modal.addEventListener('click', function () {
                                    document.body.classList.toggle('hide');
                                });
                            },
                        },
                        {
                            key: 'addMessagingToConfirmationPage',
                            value: function addMessagingToConfirmationPage() {
                                if (this.page_name !== 'confirmation' || this.site_config.confirmation_email_from === null || this.site_config.confirmation_email_from === '')
                                    return;
                                var user_email = window.arnCustomerEmailAddress;
                                var email_from = this.site_config.confirmation_email_from;
                                if (email_from === undefined || email_from === null || email_from === '') email_from = 'reservations@hotelsforhope.com';
                                var support_info = document.querySelector('.supportInfo');
                                if (!user_email || !support_info) return;
                                support_info.insertAdjacentHTML(
                                    'afterEnd',
                                    '<div class="confirmation-messaging">\n                <p>You will receive a confirmation email from <a href="mailto:reservations@hotelsforhope.com"><strong>'
                                        .concat(email_from, '</strong></a> at <strong>')
                                        .concat(user_email, '</strong> shortly.</p>\n            </div>\n            ')
                                );
                            },
                        },
                        {
                            key: 'fixCheckoutInputTabOrder',
                            value: function fixCheckoutInputTabOrder() {
                                var form = document.querySelector('#theReservationForm');
                                var room_count_el = document.querySelector('meta[name="numberOfRooms"]');
                                if (!form || !room_count_el) return;
                                var room_count = room_count_el.content;
                                var elements = form.querySelectorAll('input, select, textarea');
                                elements.forEach(function (element, i) {
                                    if (!element) return;

                                    if (i === 0) {
                                        element.setAttribute('tabindex', 1);
                                    } else {
                                        element.setAttribute('tabIndex', i);
                                    }
                                });

                                for (var i = 1; i <= room_count; i += 1) {
                                    var city = document.querySelector('#theCity'.concat(i));
                                    var postal = document.querySelector('#theZipCode'.concat(i));
                                    var state = document.querySelector('#theStateAjax'.concat(i, ' select'));
                                    var country = document.querySelector('#theCountryAjax'.concat(i, ' select'));
                                    var card_name = document.querySelector('#theCreditCardBillingNameAjax'.concat(i, ' input'));
                                    var cvv_code = document.querySelector('.RoomNumber-'.concat(i, ' #theCvvCode'));
                                    var month = document.querySelector('.RoomNumber-'.concat(i, ' .cardMonth'));
                                    var year = document.querySelector('.RoomNumber-'.concat(i, ' .cardYear'));
                                    if (!city || !postal || !state || !country || !card_name || !cvv_code || !month || !year) return;
                                    var city_tab_index = city.tabIndex;
                                    var state_tab_index = state.tabIndex;
                                    var postal_tab_index = postal.tabIndex;
                                    var country_tab_index = country.tabIndex;
                                    var card_name_tab_index = card_name.tabIndex;
                                    var cvv_code_tab_index = cvv_code.tabIndex;
                                    var month_tab_index = month.tabIndex;
                                    var year_tab_index = year.tabIndex;
                                    city.setAttribute('tabIndex', postal_tab_index);
                                    state.setAttribute('tabIndex', city_tab_index);
                                    postal.setAttribute('tabIndex', country_tab_index);
                                    country.setAttribute('tabIndex', state_tab_index);
                                    card_name.setAttribute('tabIndex', cvv_code_tab_index);
                                    cvv_code.setAttribute('tabIndex', month_tab_index);
                                    month.setAttribute('tabIndex', year_tab_index);
                                    year.setAttribute('tabIndex', card_name_tab_index);
                                }
                            },
                        },
                        {
                            key: 'showMoreAmenities',
                            value: function showMoreAmenities() {
                                if (this.page_name !== 'property-detail') return;
                                var show_more;
                                var amenity_container = document.querySelector('.ArnAmenityContainer');

                                function showMore() {
                                    show_more.addEventListener('click', function () {
                                        if (document.querySelector('span.show-more')) {
                                            var amenities = document.querySelectorAll('.ArnAmenityContainer td:not(.show-amenities)');
                                            amenities.forEach(function (el) {
                                                el.classList.toggle('show-amenities');
                                            });
                                            show_more.textContent = 'Show Less Amenities';
                                            show_more.classList.toggle('show-more');
                                            show_more.classList.toggle('show-less');
                                        } else if (document.querySelector('span.show-less')) {
                                            var _amenities = document.querySelectorAll('.ArnAmenityContainer td:not(:first-child)');

                                            _amenities.forEach(function (el) {
                                                el.classList.toggle('show-amenities');
                                            });

                                            show_more.textContent = 'Show More Amenities';
                                            show_more.classList.toggle('show-less');
                                            show_more.classList.toggle('show-more');
                                        }
                                    });
                                }

                                if (document.querySelector('#show-more-or-less') || !document.querySelector('.PropertyAmenities li')) return;
                                amenity_container.insertAdjacentHTML('beforeend', '<span id="show-more-or-less" class="show-more">Show More Amenities</span>');
                                show_more = document.querySelector('span#show-more-or-less');
                                document.querySelector('.ArnAmenityContainer td').classList.add('show-amenities');
                                showMore();
                            },
                        },
                        {
                            key: 'hideRemainingRooms',
                            value: function hideRemainingRooms() {
                                if (this.page_name !== 'property-detail' || !document.querySelector('div.roomCount')) return;
                                var rooms = document.querySelectorAll('table.ArnRateList');
                                var mq = window.matchMedia('(max-width: 560px)');
                                rooms.forEach(function (el) {
                                    if (!el.querySelector('.roomCount strong') && !el.classList.contains('SB16') && !el.classList.contains('SB20')) return;
                                    var rooms_remaining = parseFloat(el.querySelector('.roomCount strong').textContent);

                                    if (rooms_remaining < 6) {
                                        el.querySelector('.roomCount').style.display = 'block';
                                    }

                                    if (!el.classList.contains('SB16') || (!el.classList.contains('SB20') && !mq.matches)) return;

                                    if ((rooms_remaining < 6 && el.classList.contains('SB16')) || el.classList.contains('SB20')) {
                                        el.querySelector('.bookRoomCell').style.gridTemplateRows = '3fr .5fr .25fr';
                                    }
                                });
                            },
                        },
                        {
                            key: 'replaceHTMLWithFile',
                            value: (function () {
                                var _replaceHTMLWithFile = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee15(html_url, page_body_selector) {
                                        var parent_container, html;
                                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                                            while (1) {
                                                switch ((_context15.prev = _context15.next)) {
                                                    case 0:
                                                        if (document.querySelector(page_body_selector)) {
                                                            _context15.next = 2;
                                                            break;
                                                        }

                                                        return _context15.abrupt('return');

                                                    case 2:
                                                        parent_container = document.querySelector(page_body_selector);
                                                        _context15.next = 5;
                                                        return utilities.fetchHTMLFromFile(html_url);

                                                    case 5:
                                                        html = _context15.sent;
                                                        parent_container.innerHTML = html;

                                                    case 7:
                                                    case 'end':
                                                        return _context15.stop();
                                                }
                                            }
                                        }, _callee15);
                                    })
                                );

                                function replaceHTMLWithFile(_x3, _x4) {
                                    return _replaceHTMLWithFile.apply(this, arguments);
                                }

                                return replaceHTMLWithFile;
                            })(),
                        },
                        {
                            key: 'appendMemberTokenForCug',
                            value: (function () {
                                var _appendMemberTokenForCug = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee16() {
                                        var outbound_url, member_token, logo, new_href;
                                        return regeneratorRuntime.wrap(
                                            function _callee16$(_context16) {
                                                while (1) {
                                                    switch ((_context16.prev = _context16.next)) {
                                                        case 0:
                                                            if (!(this.site_config.site_type.toLowerCase() !== 'cug' || this.site_id === '52342')) {
                                                                _context16.next = 2;
                                                                break;
                                                            }

                                                            return _context16.abrupt('return');

                                                        case 2:
                                                            outbound_url = this.site_config.header.logo_outbound_url;
                                                            _context16.next = 5;
                                                            return utilities.waitForSelectorInDOM('.logo');

                                                        case 5:
                                                            if (document.querySelector('meta[name="memberToken"]')) {
                                                                _context16.next = 7;
                                                                break;
                                                            }

                                                            return _context16.abrupt('return');

                                                        case 7:
                                                            member_token = document.querySelector('meta[name="memberToken"]').content;
                                                            logo = document.querySelector('.logo');
                                                            new_href = '';

                                                            if (outbound_url.slice(-1) === '/') {
                                                                new_href = ''.concat(outbound_url, 'v6?siteId=').concat(this.site_id, '&_s=').concat(member_token);
                                                            } else if (outbound_url.slice(-4) === '.com') {
                                                                new_href = ''.concat(outbound_url, '/v6?siteId=').concat(this.site_id, '&_s=').concat(member_token);
                                                            } else {
                                                                new_href = ''.concat(outbound_url, '&_s=').concat(member_token);
                                                            }

                                                            logo.setAttribute('href', new_href);

                                                        case 12:
                                                        case 'end':
                                                            return _context16.stop();
                                                    }
                                                }
                                            },
                                            _callee16,
                                            this
                                        );
                                    })
                                );

                                function appendMemberTokenForCug() {
                                    return _appendMemberTokenForCug.apply(this, arguments);
                                }

                                return appendMemberTokenForCug;
                            })(),
                        },
                        {
                            key: 'addLinkToLoginFromRegisterPage',
                            value: function addLinkToLoginFromRegisterPage() {
                                if (this.site_config.site_type.toLowerCase() !== 'cug' || this.page_name !== 'cug-registration') return;
                                var register_btn = document.querySelector('.WBValidatedRegistrationFormActions');
                                var current_url = window.location.href;
                                var login_url = current_url.replace('register', 'login');
                                if (!register_btn) return;
                                register_btn.insertAdjacentHTML('afterEnd', '\n            <a class="return-to-login" href="'.concat(login_url, '">Return to Login</a>\n        '));
                            },
                        },
                        {
                            key: 'setCheckDatesToReadOnlyOnMobile',
                            value: (function () {
                                var _setCheckDatesToReadOnlyOnMobile = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee17() {
                                        var check_in, check_out;
                                        return regeneratorRuntime.wrap(
                                            function _callee17$(_context17) {
                                                while (1) {
                                                    switch ((_context17.prev = _context17.next)) {
                                                        case 0:
                                                            if (utilities.matchMediaQuery('max-width: 800px')) {
                                                                _context17.next = 2;
                                                                break;
                                                            }

                                                            return _context17.abrupt('return');

                                                        case 2:
                                                            _context17.next = 4;
                                                            return utilities.waitForSelectorInDOM('#theCheckIn');

                                                        case 4:
                                                            if (!(this.page_name === 'search-results' || this.page_name === 'landing-page')) {
                                                                _context17.next = 11;
                                                                break;
                                                            }

                                                            check_in = document.querySelector('#theCheckIn');
                                                            check_out = document.querySelector('#theCheckOut');

                                                            if (!(!check_in || !check_out)) {
                                                                _context17.next = 9;
                                                                break;
                                                            }

                                                            return _context17.abrupt('return');

                                                        case 9:
                                                            check_in.setAttribute('readonly', true);
                                                            check_out.setAttribute('readonly', true);

                                                        case 11:
                                                        case 'end':
                                                            return _context17.stop();
                                                    }
                                                }
                                            },
                                            _callee17,
                                            this
                                        );
                                    })
                                );

                                function setCheckDatesToReadOnlyOnMobile() {
                                    return _setCheckDatesToReadOnlyOnMobile.apply(this, arguments);
                                }

                                return setCheckDatesToReadOnlyOnMobile;
                            })(),
                        },
                        {
                            key: 'updateAmenitiesLegendTag',
                            value: function updateAmenitiesLegendTag() {
                                if (this.page_name !== 'property-detail') return;
                                var amenities_legend = document.querySelector('#thePropertyAmenities legend');
                                amenities_legend.outerHTML = '<span>Property Amenities</span>';
                            },
                        },
                        {
                            key: 'cancelConfirmUpdate',
                            value: function cancelConfirmUpdate() {
                                if (!document.querySelector('.WBConfirmedBooking')) return;
                                var do_nothing = document.querySelector('.dialog-button-cancel a');
                                do_nothing.textContent = 'Go Back';
                            }, // TODO check which percentage to use (the below calc or arn "percent")
                        },
                        {
                            key: 'moveOriginalPrice',
                            value: function moveOriginalPrice(nodeList, element) {
                                if (this.site_type === 'cug') return;

                                function percentDiff(num1, num2) {
                                    var percent_value = ((num1 - num2) / num2) * 100;

                                    if (Math.floor(percent_value) >= 5) {
                                        return false;
                                    }

                                    return true;
                                }

                                document.querySelectorAll(nodeList).forEach(function (e) {
                                    if (!e.querySelector('div.originalPrice')) return;
                                    e.querySelector(element).insertAdjacentElement('afterbegin', e.querySelector('div.originalPrice'));
                                    var original_price = parseFloat(e.querySelector('.originalPrice').textContent);
                                    var lower_price = parseFloat(
                                        document.querySelector('.SearchHotels') ? e.querySelector('.arnUnit').textContent : e.querySelector('.ArnNightlyRate strong').textContent
                                    );

                                    if (percentDiff(original_price, lower_price)) {
                                        e.querySelector('.originalPrice').style.display = 'none';
                                    }
                                });
                            },
                        },
                    ]);

                    return BasePortal;
                })();

                /***/
            },

        /***/ './js/components/algolia.js':
            /*!**********************************!*\
  !*** ./js/components/algolia.js ***!
  \**********************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
                    return Algolia;
                });
                /* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! core-js/modules/es6.promise */ './node_modules/core-js/modules/es6.promise.js'
                );
                /* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__
                );
                /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
                );
                /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
                );
                /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
                );
                /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__
                );
                /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! core-js/modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
                );
                /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__
                );
                /* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! core-js/modules/es6.object.to-string */ './node_modules/core-js/modules/es6.object.to-string.js'
                );
                /* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__
                );
                /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! core-js/modules/es6.object.keys */ './node_modules/core-js/modules/es6.object.keys.js'
                );
                /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__
                );
                /* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! core-js/modules/es6.regexp.search */ './node_modules/core-js/modules/es6.regexp.search.js'
                );
                /* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_6__
                );

                function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }
                    if (info.done) {
                        resolve(value);
                    } else {
                        Promise.resolve(value).then(_next, _throw);
                    }
                }

                function _asyncToGenerator(fn) {
                    return function () {
                        var self = this,
                            args = arguments;
                        return new Promise(function (resolve, reject) {
                            var gen = fn.apply(self, args);
                            function _next(value) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                            }
                            function _throw(err) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                            }
                            _next(undefined);
                        });
                    };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError('Cannot call a class as a function');
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ('value' in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                var dayjs = __webpack_require__(/*! dayjs */ './node_modules/dayjs/dayjs.min.js');

                var custom_parse_format = __webpack_require__(/*! dayjs/plugin/customParseFormat */ './node_modules/dayjs/plugin/customParseFormat.js');

                dayjs.extend(custom_parse_format);

                var Algolia = /*#__PURE__*/ (function () {
                    function Algolia() {
                        _classCallCheck(this, Algolia);
                    }

                    _createClass(Algolia, [
                        {
                            key: 'init',
                            value: function init(site_config, page_name, utilities) {
                                var _this = this;

                                var lat_lng;
                                var default_lat_lng;
                                var params = new URL(window.location.href);
                                var search_params = new URLSearchParams(params.search);
                                var original_params_url = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
                                /**
                                 *@description adds the attribute "required" to an element.
                                 *@param string the selector for the element that you wish to add "required" to.
                                 */

                                function setInputToRequired(selector) {
                                    if (!document.querySelector(selector)) return;
                                    document.querySelector(selector).required = true;
                                }
                                /**
                                 *@description creates a node list of elements passed in as a string and sets their display to none.
                                 *@param string comma seperated selectors.
                                 */

                                function hideArnSearchElements(selectors) {
                                    if (!document.querySelector('.SearchHotels')) return;
                                    var elements = document.querySelectorAll(selectors);
                                    elements.forEach(function (element) {
                                        element.style.display = 'none';
                                    });
                                }
                                /**
                                 *@description removes ARN's search bar element from the dom.
                                 *@param string dom selector for ARN's seach input.
                                 */

                                function remove_arn_search_bar(_x) {
                                    return _remove_arn_search_bar.apply(this, arguments);
                                }
                                /**
                                 *@description inserts a new search input.
                                 *@param string page - the selector/class of the page.
                                 *@param string selector - selector of dom element to insert html on.
                                 *@param string adjacent_location - position for html to be inserted on the specified element.
                                 *@param string html - markup for new element.
                                 */

                                function _remove_arn_search_bar() {
                                    _remove_arn_search_bar = _asyncToGenerator(
                                        /*#__PURE__*/ regeneratorRuntime.mark(function _callee(selector) {
                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                                while (1) {
                                                    switch ((_context.prev = _context.next)) {
                                                        case 0:
                                                            if (document.querySelector(selector)) {
                                                                _context.next = 2;
                                                                break;
                                                            }

                                                            return _context.abrupt('return');

                                                        case 2:
                                                            document.querySelector(selector).style.position = 'absolute';
                                                            document.querySelector(selector).style.left = '-10000px';
                                                            _context.next = 6;
                                                            return utilities.waitForSelectorInDOM('#city');

                                                        case 6:
                                                            document.querySelector(selector).removeAttribute('required');

                                                        case 7:
                                                        case 'end':
                                                            return _context.stop();
                                                    }
                                                }
                                            }, _callee);
                                        })
                                    );
                                    return _remove_arn_search_bar.apply(this, arguments);
                                }

                                function insert_algolia_search(page, selector, adjacent_location, html) {
                                    if (!document.querySelector(page)) return;
                                    document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
                                }
                                /**
                                 *@description populates the destination search input on the search-results page with the destination and clears the input field on click.
                                 */

                                function prepopulate_inputs_on_search_hotels() {
                                    if (!document.querySelector('.SearchHotels')) return;
                                    var destination;

                                    if (search_params.get('destination') !== null) {
                                        destination = search_params.get('destination');
                                    }

                                    if (original_params_url.get('destination') !== null) {
                                        destination = original_params_url.get('destination');
                                    } else {
                                        destination = ''
                                            .concat(document.querySelector('span[itemprop="addressLocality"]').textContent, ', ')
                                            .concat(document.querySelector('span[itemprop="addressRegion"]').textContent);
                                    }

                                    var algolia_input = document.querySelector('input#address-input');
                                    algolia_input.value = destination;
                                    algolia_input.addEventListener('click', function () {
                                        algolia_input.value = '';
                                    });
                                }
                                /**
                                 *@description sets and gets the value for a option element.
                                 *@param string selector for the option element.
                                 *@return string - the current value for the option input (rooms/adults).
                                 */

                                function setDropdownIndex(dropdown_selector) {
                                    var dropdown = document.querySelector(dropdown_selector);
                                    var value = dropdown.querySelector('option[value="'.concat(dropdown.value, '"]')).textContent;
                                    dropdown.addEventListener('change', function () {
                                        for (var i = 0; i < dropdown.length; i += 1) {
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
                                /**
                                 *@description removes the search input for event sites thus keeping the user in the city of the event.
                                 */

                                function remove_city_search_for_event() {
                                    if (page_name !== 'search-results') return;
                                    if (site_config.site_type.toLowerCase() === 'cug' || site_config.site_type.toLowerCase() === 'retail') return;
                                    utilities.waitForSelectorInDOM('.algolia-places').then(function () {
                                        document.querySelector('.algolia-places').style.display = 'none';
                                        document.querySelector('#theSearchBox').firstChild.style.display = 'none';
                                    });
                                }
                                /**
                                 *@description if on the search-results page, checks for a value in the "optional hotel" input.
                                 *@return string - the value of the "optional hotel" input if not an empty string.
                                 */

                                function get_optional_hotel_name() {
                                    if (page_name !== 'search-results') return;
                                    if (document.querySelector('input#hotelName').value === '') return;
                                    var hotel_name = document.querySelector('input#hotelName').value;
                                    return hotel_name;
                                }
                                /**
                                 *@description loops through checkboxes in the filter passed in and adds the textContent to a variable.
                                 *@param string dom selector for which filter to loop over.
                                 *@param string first div of filter child to be ignored due to ARN's interesting markup.
                                 *@return string comma seperated strings. The slice method is removing the last comma.
                                 */

                                function applyFilters(checkboxSelector, lblFilter) {
                                    var filter_values = '';
                                    document.querySelectorAll(checkboxSelector).forEach(function (el) {
                                        if (el.classList.contains(lblFilter)) return;

                                        if (el.querySelector('input').checked) {
                                            var label = el.querySelector('span').textContent; // eslint-disable-next-line no-param-reassign

                                            filter_values += ''.concat(label, ',');
                                        }

                                        return filter_values;
                                    });
                                    return filter_values.slice(0, -1);
                                }
                                /**
                                 *@description gets and returns the destination input string for CUG's or retail sites only.
                                 *@param string selector of the input to get the value from.
                                 *@return string - the destination or input value.
                                 */

                                function getDestination(inputSelector) {
                                    var destination_value;

                                    if (document.querySelector(inputSelector).value !== null) {
                                        destination_value = document.querySelector(inputSelector).value;
                                        return destination_value;
                                    }

                                    if (original_params_url.has('destination')) {
                                        var param = original_params_url.get('destination');
                                        return param;
                                    }
                                }
                                /**
                                 *@description gets the value of an originalParam key.
                                 *@param string the key for the originalParam you want the content for.
                                 *@return string - the value of the param.
                                 */

                                function getEventOrginalParams(paramString) {
                                    if (!original_params_url.has(paramString)) return;
                                    var param = original_params_url.get(paramString);
                                    return param;
                                }
                                /**
                                 *@description resets ARN's onClick attribute to and empty string to stop their submit button having any functionality.
                                 */

                                function removeArnSubmitAttribute() {
                                    var arn_submit_btn = document.querySelector('input#theSubmitButton');
                                    arn_submit_btn.setAttribute('onClick', '');
                                }
                                /* - - - - - Submit click function - - - - - */

                                document.querySelector('form#searchForm').addEventListener('submit', function (e) {
                                    e.preventDefault();
                                    var origin = window.location.origin;
                                    var url = ''
                                        .concat(origin, '/v6/?type=geo&siteid=')
                                        .concat(document.querySelector('meta[name="siteId"]').content, '&pagesize=10&')
                                        .concat(site_config.distance_unit);
                                    var built_url = new URL(url);
                                    var lat;
                                    var lng;
                                    var check_in_value;
                                    var check_out_value;
                                    var nights;

                                    if (utilities.getMetaTagContent('theme') === 'standard') {
                                        check_in_value = dayjs(document.querySelector('input#theCheckIn').value, site_config.dayjs_date_format).format(
                                            site_config.dayjs_date_format
                                        );
                                        check_out_value = dayjs(document.querySelector('input#theCheckOut').value, site_config.dayjs_date_format).format(
                                            site_config.dayjs_date_format
                                        );
                                        nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');
                                    } else if (utilities.getMetaTagContent('theme') === 'mandarin' || utilities.getMetaTagContent('theme') === 'tw_mandarin') {
                                        check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'YYYY/M/D').format(site_config.dayjs_date_format);
                                        check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'YYYY/M/D').format(site_config.dayjs_date_format);
                                        nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');
                                        check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'YYYY/M/D').format('YYYY/M/D');
                                        check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'YYYY/M/D').format('YYYY/M/D');
                                    } else {
                                        check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format(site_config.dayjs_date_format);
                                        check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format(site_config.dayjs_date_format);
                                        nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');
                                        check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('D/M/YYYY');
                                        check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('D/M/YYYY');
                                    }

                                    if (utilities.getMetaTagContent('theme') !== 'standard') {
                                        _this.check_in_value = document.querySelector('input#theCheckIn').value;
                                        _this.check_out_value = document.querySelector('input#theCheckOut').value;
                                    }

                                    if (lat_lng) {
                                        lat = lat_lng.lat;
                                        lng = lat_lng.lng;
                                    } else if (default_lat_lng) {
                                        lat = default_lat_lng.lat;
                                        lng = default_lat_lng.lng;
                                    } else if (!lat_lng && !default_lat_lng && page_name === 'search-results') {
                                        lat = original_params_url.get('latitude');
                                        lng = original_params_url.get('longitude');
                                    }
                                    /**
         * @description loops over each object within the object passed in, checks for empty strings, null or undefined values then appends the key and value to the URL.
         * @param object paramObject - an object containing one or more parameters to append to a url.
         * @property string - paramObject[i].key - url parameter key.
         * @property string - paramObject[i].value - the value for the parameter key.
         * @example appendParamsToURL({
                        longitude: {
                            key: 'longitude',
                            value: lng,
                        },
                        rooms: {
                            key: 'rooms',
                            value: setDropdownIndex('select#rooms'),
                        },
                    })    
        */

                                    function appendParamsToURL(paramObject) {
                                        Object.keys(paramObject).forEach(function (obj) {
                                            if (
                                                paramObject[obj].value !== '' &&
                                                paramObject[obj].value !== null &&
                                                paramObject[obj].value !== undefined &&
                                                paramObject[obj].key !== undefined
                                            ) {
                                                built_url.searchParams.append(paramObject[obj].key, paramObject[obj].value);
                                            }
                                        });
                                    }

                                    appendParamsToURL({
                                        longitude: {
                                            key: 'longitude',
                                            value: lng,
                                        },
                                        latitude: {
                                            key: 'latitude',
                                            value: lat,
                                        },
                                        destination: {
                                            key: 'destination',
                                            value: getDestination('input#address-input'),
                                        },
                                        checkin: {
                                            key: 'checkin',
                                            value: check_in_value,
                                        },
                                        nights: {
                                            key: 'nights',
                                            value: nights,
                                        },
                                        rooms: {
                                            key: 'rooms',
                                            value: setDropdownIndex('select#rooms'),
                                        },
                                        adults: {
                                            key: 'adults',
                                            value: setDropdownIndex('select#adults'),
                                        },
                                        currency: {
                                            key: 'currency',
                                            value: site_config.currency,
                                        },
                                        amenities: {
                                            key: 'amenities',
                                            value: applyFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities'),
                                        },
                                        stars: {
                                            key: 'propertyclasses',
                                            value: applyFilters('#PropertyClassesContainer .ArnSearchField div', 'lblRating'),
                                        },
                                        propertyType: {
                                            key: 'propertytypes',
                                            value: applyFilters('#PropertyTypesContainer .ArnSearchField div', 'lblPropertyType'),
                                        },
                                        optionalHotel: {
                                            key: 'hotelname',
                                            value: get_optional_hotel_name(),
                                        },
                                    });

                                    if (page_name === 'search-results' && site_config.site_type.toLowerCase() === 'lodging') {
                                        appendParamsToURL({
                                            properties: {
                                                key: 'properties',
                                                value: getEventOrginalParams('properties'),
                                            },
                                            utm_source: {
                                                key: 'utm_source',
                                                value: getEventOrginalParams('utm_source'),
                                            },
                                            locationLabel: {
                                                key: 'locationlabel',
                                                value: getEventOrginalParams('locationlabel'),
                                            },
                                            radius: {
                                                key: 'radius',
                                                value: getEventOrginalParams('radius'),
                                            },
                                            groupId: {
                                                key: 'groupid',
                                                value: getEventOrginalParams('groupid'),
                                            },
                                            cid: {
                                                key: 'cid',
                                                value: getEventOrginalParams('cid'),
                                            },
                                            points: {
                                                key: 'points',
                                                value: getEventOrginalParams('points'),
                                            },
                                        });
                                    }

                                    if (site_config.site_type.toLowerCase() === 'cug') {
                                        appendParamsToURL({
                                            memberToken: {
                                                key: 'memberToken',
                                                value: utilities.getMetaTagContent('memberToken'),
                                            },
                                        });
                                    }

                                    window.location.href = decodeURIComponent(built_url);
                                });
                                remove_arn_search_bar('input#city');

                                if (page_name === 'landing-page') {
                                    insert_algolia_search(
                                        '.RootBody',
                                        'div#CitySearchContainer span',
                                        'beforeEnd',
                                        '<input type="search" id="address-input" placeholder="Destination" required="true" />'
                                    );
                                }

                                if (page_name === 'search-results') {
                                    insert_algolia_search(
                                        '.SearchHotels',
                                        'div#theSearchBox',
                                        'afterBegin',
                                        '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />'
                                    );
                                    prepopulate_inputs_on_search_hotels();
                                }

                                removeArnSubmitAttribute();
                                hideArnSearchElements('.ArnGoCitySearch, div.ArnSearchHotelsImg+br, .ArnGoLandmarkSearch, .ArnGoAirportSearch');
                                remove_city_search_for_event();
                                setDropdownIndex('select#rooms');
                                setDropdownIndex('select#adults');
                                setInputToRequired('input#theCheckIn');
                                jQuery('#theBody').on('arnMapLoadedEvent', function () {
                                    if (search_params.has('locationlabel') || search_params.has('points')) return;
                                    hideArnSearchElements('img.arn-green-marker-icon');
                                });
                                /**
                                 *@description Algolia recurring autocomplete function, two methods run on this function. 1 - the 'change' method listens for the user making a selection from the suggestion and updates the variable "lat_lng" with the lat/lng object for that suggestion. 2 - the 'suggestions' method will save the first suggestions' lat/lng to "default_lat_lng" if the user enters an invalid/ improperly formatted string into the destination search and use that lat/lng for the geo search.
                                 */

                                (function () {
                                    var places_autocomplete = places({
                                        appId: site_config.algolia_app_id,
                                        apiKey: site_config.algolia_api_key,
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
                            },
                        },
                    ]);

                    return Algolia;
                })();

                /***/
            },

        /***/ './js/path.js':
            /*!********************!*\
  !*** ./js/path.js ***!
  \********************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                module.exports = function () {
                    var path = '';

                    if (false) {
                    } else if (true) {
                        path = 'https://dev-static.hotelsforhope.com/ares';
                    } else {
                    }

                    return {
                        path: path,
                    };
                };

                /***/
            },

        /***/ './js/utilities.js':
            /*!*************************!*\
  !*** ./js/utilities.js ***!
  \*************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
                    return Utilities;
                });
                /* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! core-js/modules/es6.regexp.replace */ './node_modules/core-js/modules/es6.regexp.replace.js'
                );
                /* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__
                );
                /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
                );
                /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__
                );
                /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! core-js/modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
                );
                /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__
                );
                /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! core-js/modules/es6.object.keys */ './node_modules/core-js/modules/es6.object.keys.js'
                );
                /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__
                );
                /* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! core-js/modules/es6.promise */ './node_modules/core-js/modules/es6.promise.js'
                );
                /* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4__
                );
                /* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! core-js/modules/es6.object.to-string */ './node_modules/core-js/modules/es6.object.to-string.js'
                );
                /* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__
                );
                /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
                );
                /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__
                );

                function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }
                    if (info.done) {
                        resolve(value);
                    } else {
                        Promise.resolve(value).then(_next, _throw);
                    }
                }

                function _asyncToGenerator(fn) {
                    return function () {
                        var self = this,
                            args = arguments;
                        return new Promise(function (resolve, reject) {
                            var gen = fn.apply(self, args);
                            function _next(value) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                            }
                            function _throw(err) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                            }
                            _next(undefined);
                        });
                    };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError('Cannot call a class as a function');
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ('value' in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                var dayjs = __webpack_require__(/*! dayjs */ './node_modules/dayjs/dayjs.min.js');

                var Utilities = /*#__PURE__*/ (function () {
                    function Utilities() {
                        _classCallCheck(this, Utilities);
                    }

                    _createClass(Utilities, [
                        {
                            key: 'ieForEachPolyfill',

                            /**
                             *@description forEach polyfill for internet explorer
                             *@return {void}
                             */
                            value: function ieForEachPolyfill() {
                                if (window.NodeList && !NodeList.prototype.forEach) {
                                    NodeList.prototype.forEach = Array.prototype.forEach;
                                }
                            },
                            /**
                             *@description creates html and inserts into specified location
                             *@param string parent_to_append_to - selector to put new html
                             *@param string html - html to add to parent
                             *@param string location - where to add in relation to parent using JS method insertAdjacentHTML - arguments include beforeBegin, beforeEnd, afterBegin, afterEnd
                             */
                        },
                        {
                            key: 'createHTML',
                            value: (function () {
                                var _createHTML = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(html, parent_to_append_to, location) {
                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch ((_context.prev = _context.next)) {
                                                    case 0:
                                                        return _context.abrupt(
                                                            'return',
                                                            new Promise(function (resolve) {
                                                                var parent = document.querySelector(parent_to_append_to);
                                                                if (!parent || parent == null) return;
                                                                parent.insertAdjacentHTML(location, html);
                                                                resolve();
                                                            })
                                                        );

                                                    case 1:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee);
                                    })
                                );

                                function createHTML(_x, _x2, _x3) {
                                    return _createHTML.apply(this, arguments);
                                }

                                return createHTML;
                            })(),
                            /**
                             *@description updates an attribute tag of a specified selector
                             *@param string selector - selector to update
                             *@param string argument - value to update
                             *@param string attribute - which attribute to update
                             */
                        },
                        {
                            key: 'updateAttribute',
                            value: function updateAttribute(selector, argument, attribute) {
                                var node_list = document.querySelectorAll(selector);
                                if (!node_list) return;
                                node_list.forEach(function (node, index) {
                                    node.setAttribute(attribute, argument);
                                });
                            },
                            /**
                             *@description gets an attribute of a specified selector
                             *@param string selector - selector to get
                             *@param string attribute - attribute to get
                             */
                        },
                        {
                            key: 'getAttribute',
                            value: function getAttribute(selector, attribute) {
                                if (!document.querySelector(selector)) return;
                                return document.querySelector(selector).getAttribute(attribute);
                            },
                            /**
                             *@description updates innerHTML of a node list
                             *@param string selector - selector to update
                             *@param string html - html to add
                             */
                        },
                        {
                            key: 'updateHTML',
                            value: function updateHTML(selector, html) {
                                var node_list = document.querySelectorAll(selector);
                                if (!node_list) return;
                                node_list.forEach(function (node, index) {
                                    node.innerHTML = html;
                                });
                            },
                            /**
                             *@description moves a child element into a parent element
                             *@param string child_selector - selector to move into parent
                             *@param string parentSelector - selector to move child element into
                             */
                        },
                        {
                            key: 'appendToParent',
                            value: function appendToParent(child_selector, parent_selector) {
                                var child_element = document.querySelector(child_selector);
                                var parent_element = document.querySelector(parent_selector);
                                if (!child_element || !parent_element) return;
                                parent_element.appendChild(child_element);
                            }, // should do this using mutationObserver
                        },
                        {
                            key: 'waitForSelectorInDOM',
                            value: (function () {
                                var _waitForSelectorInDOM = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(selector) {
                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                                switch ((_context2.prev = _context2.next)) {
                                                    case 0:
                                                        return _context2.abrupt(
                                                            'return',
                                                            new Promise(function (resolve) {
                                                                var interval = setInterval(function () {
                                                                    var element = document.querySelector(selector);

                                                                    if (element) {
                                                                        resolve(element);
                                                                        clearInterval(interval);
                                                                        return element;
                                                                    }
                                                                }, 500);
                                                            })
                                                        );

                                                    case 1:
                                                    case 'end':
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _callee2);
                                    })
                                );

                                function waitForSelectorInDOM(_x4) {
                                    return _waitForSelectorInDOM.apply(this, arguments);
                                }

                                return waitForSelectorInDOM;
                            })(),
                            /**
                             * @description checks every 500 miliseconds for the textContent of the element passed in to equeal the text in the dom after the page loads. This method is used for when an element's textContent is updated multiple times before the page finishes loading and you want to update it again.
                             * @param element - the element you are waiting on to load the expected textContent
                             * @param string - The string that the element's textContent will equal when the page has loaded.
                             */
                        },
                        {
                            key: 'waitForTextInDOM',
                            value: (function () {
                                var _waitForTextInDOM = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(selector, text) {
                                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                            while (1) {
                                                switch ((_context3.prev = _context3.next)) {
                                                    case 0:
                                                        return _context3.abrupt(
                                                            'return',
                                                            new Promise(function (resolve) {
                                                                var interval = setInterval(function () {
                                                                    var dom_text = document.querySelector(selector).textContent;

                                                                    if (dom_text === text) {
                                                                        resolve(dom_text);
                                                                        clearInterval(interval);
                                                                        return dom_text;
                                                                    }
                                                                }, 500);
                                                            })
                                                        );

                                                    case 1:
                                                    case 'end':
                                                        return _context3.stop();
                                                }
                                            }
                                        }, _callee3);
                                    })
                                );

                                function waitForTextInDOM(_x5, _x6) {
                                    return _waitForTextInDOM.apply(this, arguments);
                                }

                                return waitForTextInDOM;
                            })(),
                        },
                        {
                            key: 'moveElementIntoExistingWrapper',
                            value: function moveElementIntoExistingWrapper(element_to_move, wrapper, adjacent_position) {
                                if (!document.querySelector(wrapper) || !document.querySelector(element_to_move)) return;
                                document.querySelector(wrapper).insertAdjacentElement(adjacent_position, document.querySelector(element_to_move));
                            }, // duplicate of createWrapper(), use createWrapper and move any existing use of this method to createWrapper()
                        },
                        {
                            key: 'moveOrphanedElementsIntoNewWrapper',
                            value: (function () {
                                var _moveOrphanedElementsIntoNewWrapper = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(elements_array, wrapper_id, adjacent_element_class, adjacent_position) {
                                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                            while (1) {
                                                switch ((_context4.prev = _context4.next)) {
                                                    case 0:
                                                        return _context4.abrupt(
                                                            'return',
                                                            new Promise(function (resolve) {
                                                                if (document.querySelector(adjacent_element_class)) {
                                                                    document
                                                                        .querySelector(adjacent_element_class)
                                                                        .insertAdjacentHTML(adjacent_position, '<div class id="'.concat(wrapper_id, '"></div>'));
                                                                    elements_array.forEach(function (element) {
                                                                        document.getElementById(wrapper_id).insertAdjacentElement('beforeEnd', element);
                                                                        resolve();
                                                                    });
                                                                }
                                                            })
                                                        );

                                                    case 1:
                                                    case 'end':
                                                        return _context4.stop();
                                                }
                                            }
                                        }, _callee4);
                                    })
                                );

                                function moveOrphanedElementsIntoNewWrapper(_x7, _x8, _x9, _x10) {
                                    return _moveOrphanedElementsIntoNewWrapper.apply(this, arguments);
                                }

                                return moveOrphanedElementsIntoNewWrapper;
                            })(),
                        },
                        {
                            key: 'createWrapper',
                            value: (function () {
                                var _createWrapper = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(query_selectors, wrapper_parent, new_wrapper_class, adjacent_location) {
                                        var wrapper;
                                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                            while (1) {
                                                switch ((_context5.prev = _context5.next)) {
                                                    case 0:
                                                        wrapper = document.createElement('div');

                                                        if (wrapper) {
                                                            _context5.next = 3;
                                                            break;
                                                        }

                                                        return _context5.abrupt('return');

                                                    case 3:
                                                        wrapper.setAttribute('class', new_wrapper_class);
                                                        Array.prototype.forEach.call(document.querySelectorAll(query_selectors), function (children) {
                                                            wrapper.appendChild(children);
                                                        });
                                                        document.querySelector(wrapper_parent).insertAdjacentElement(adjacent_location, wrapper);

                                                    case 6:
                                                    case 'end':
                                                        return _context5.stop();
                                                }
                                            }
                                        }, _callee5);
                                    })
                                );

                                function createWrapper(_x11, _x12, _x13, _x14) {
                                    return _createWrapper.apply(this, arguments);
                                }

                                return createWrapper;
                            })(),
                        },
                        {
                            key: 'createModal',
                            value: function createModal(array_of_elements_to_put_in_modal_body, modal_title, page_name, open_button_parent_selector, open_button_location) {
                                if (!page_name) return;
                                document
                                    .querySelector(open_button_parent_selector)
                                    .insertAdjacentHTML(open_button_location, '<span class="open-modal">Show '.concat(modal_title, '</span>'));
                                document.body.insertAdjacentHTML(
                                    'beforeEnd',
                                    '<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>'.concat(
                                        modal_title,
                                        '</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>'
                                    )
                                );
                                array_of_elements_to_put_in_modal_body.forEach(function (element) {
                                    document.querySelector('.modal-content').insertAdjacentElement('beforeEnd', element);
                                });
                                document.querySelector('.open-modal').addEventListener('click', function () {
                                    document.querySelector('.modal-overlay').classList.toggle('show-modal');
                                });
                                document.querySelector('.close-modal').addEventListener('click', function () {
                                    document.querySelector('.modal-overlay').classList.toggle('show-modal');
                                });
                            },
                            /**
     * @description adds extra logos to the header, will only insert if window size is greater that 1200px
     * @param object images - an object with one or more images, their class names and insertAdjacentHtml position
     * @property string - images[].insertPosition - position for insertAdjacentHTML to insert element into header
     * @property string - images[].className - name of class tag for each element being insterted
     * @property string - images[].imageUrl - url for image src
     * @example addMultipleHeaderLogos({
                    image1: {
                        insertPosition: 'afterbegin',
                        className: 'logo-left',
                        imageUrl: 'https://...',
                    },
                })
     */
                        },
                        {
                            key: 'addMultipleHeaderLogos',
                            value: (function () {
                                var _addMultipleHeaderLogos = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee6(images) {
                                        var header, logos_loaded, widthChange, mq;
                                        return regeneratorRuntime.wrap(
                                            function _callee6$(_context6) {
                                                while (1) {
                                                    switch ((_context6.prev = _context6.next)) {
                                                        case 0:
                                                            widthChange = function _ref(mq) {
                                                                if (!mq.matches || logos_loaded) return;

                                                                try {
                                                                    Object.keys(images).forEach(function (e) {
                                                                        header.insertAdjacentHTML(
                                                                            images[e].insertPosition,
                                                                            '<img class="'.concat(images[e].className, '" src="').concat(images[e].imageUrl, '">')
                                                                        );
                                                                        logos_loaded = true;
                                                                    });
                                                                } catch (error) {
                                                                    console.error(error);
                                                                }
                                                            };

                                                            _context6.next = 3;
                                                            return this.waitForSelectorInDOM('header');

                                                        case 3:
                                                            header = document.querySelector('header');
                                                            mq = window.matchMedia('(min-width: 1200px)');
                                                            widthChange(mq);
                                                            mq.addListener(widthChange);

                                                        case 7:
                                                        case 'end':
                                                            return _context6.stop();
                                                    }
                                                }
                                            },
                                            _callee6,
                                            this
                                        );
                                    })
                                );

                                function addMultipleHeaderLogos(_x15) {
                                    return _addMultipleHeaderLogos.apply(this, arguments);
                                }

                                return addMultipleHeaderLogos;
                            })(),
                        },
                        {
                            key: 'emailVerificationSetup',
                            value: function emailVerificationSetup() {
                                var script = document.createElement('script');
                                script.text =
                                    "\n            const DeBounce_APIKEY = 'public_T0tSVklSNEZRTEtkc1c5MFZoUWhKZz09';\n            const DeBounce_BlockFreeEmails = 'false';\n        ";
                                document.body.appendChild(script);
                                var debounce_script = document.createElement('script');
                                debounce_script.setAttribute('src', 'https://cdn.debounce.io/widget/DeBounce.js');
                                debounce_script.setAttribute('async', true);
                                document.body.appendChild(debounce_script);
                            },
                            /**
                             *@description creates dropdown menu container
                             *@param string label_selector - selector of the label that will open the dropdown on click
                             *@param string dropdown_html - html that will display in the dropdown
                             *@param string content_selector_to_show - selector for the container containing content to show on click
                             *@param string content_parent - selector of parent content will be appended to
                             */
                        },
                        {
                            key: 'createDropdownMenu',
                            value: function createDropdownMenu(label_selector, dropdown_html, content_selector_to_show, content_parent) {
                                var label = document.querySelector(label_selector);
                                var parent = document.querySelector(content_parent);
                                if (!label || !parent) return;
                                parent.insertAdjacentHTML(
                                    'beforeEnd',
                                    '<style>'
                                        .concat(content_selector_to_show, '{display: none;}')
                                        .concat(content_parent, '{position: relative;}</style>')
                                        .concat(dropdown_html.outerHTML)
                                );
                                var content_to_show = document.querySelector(content_selector_to_show);
                                document.addEventListener('click', function (e) {
                                    var target_el = e.target;

                                    if (target_el === label) {
                                        content_to_show.classList.toggle('show-dropdown');
                                    }

                                    if (document.querySelector(''.concat(content_selector_to_show, '.show-dropdown')) && target_el !== label) {
                                        content_to_show.classList.toggle('show-dropdown');
                                    }
                                });
                            },
                            /**
                             *@description creates custom tag in a properties image
                             *@param string text - text of tag
                             *@param int propId - property id to add the tag to
                             */
                        },
                        {
                            key: 'addPropThumbTag',
                            value: function addPropThumbTag(text, propId) {
                                if (
                                    !document.querySelector('#theArnProperty'.concat(propId, ' .ArnPropThumb > .propThumbTag')) &&
                                    document.querySelector('#theArnProperty'.concat(propId))
                                ) {
                                    var property_thumbnail = document.querySelector('#theArnProperty'.concat(propId, ' .ArnPropThumb'));
                                    property_thumbnail.insertAdjacentHTML('afterbegin', '<div class="propThumbTag">'.concat(text, '</div>'));
                                }
                            },
                            /**
                             *@description Replaces the "No Vacancy" text with "Rates Coming Soon" for all prop ids passed in.
                             *@param Array Numbers - property id
                             */
                        },
                        {
                            key: 'ratesComingSoon',
                            value: (function () {
                                var _ratesComingSoon = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee7(propsArray) {
                                        return regeneratorRuntime.wrap(
                                            function _callee7$(_context7) {
                                                while (1) {
                                                    switch ((_context7.prev = _context7.next)) {
                                                        case 0:
                                                            if (document.querySelector('.SearchHotels')) {
                                                                _context7.next = 2;
                                                                break;
                                                            }

                                                            return _context7.abrupt('return');

                                                        case 2:
                                                            _context7.next = 4;
                                                            return this.waitForSelectorInDOM('.pollingFinished');

                                                        case 4:
                                                            propsArray.forEach(function (prop) {
                                                                if (document.querySelector('#theArnProperty'.concat(prop, ' .ArnLimitedAvail'))) {
                                                                    document.querySelector('#theArnProperty'.concat(prop, ' .ArnLimitedAvail')).textContent = 'Rates Coming Soon';
                                                                }
                                                            });

                                                        case 5:
                                                        case 'end':
                                                            return _context7.stop();
                                                    }
                                                }
                                            },
                                            _callee7,
                                            this
                                        );
                                    })
                                );

                                function ratesComingSoon(_x16) {
                                    return _ratesComingSoon.apply(this, arguments);
                                }

                                return ratesComingSoon;
                            })(),
                            /**
                             *@description Adds a class to the selector passed in.
                             *@param selector grabs the element using query selector.
                             *@param class gives the method the class you wish to add to the classList of that element.
                             */
                        },
                        {
                            key: 'addClass',
                            value: function addClass(selector, className) {
                                document.querySelector('.'.concat(selector)).classList.add(className);
                            },
                        },
                        {
                            key: 'getMetaTagContent',
                            value: function getMetaTagContent(meta_tag_name) {
                                if (!document.querySelector('meta[name="'.concat(meta_tag_name, '"]'))) return;
                                return document.querySelector('meta[name="'.concat(meta_tag_name, '"]')).content;
                            },
                        },
                        {
                            key: 'parseJSON',
                            value: function parseJSON(json) {
                                if (!json) return;
                                return JSON.parse(json);
                            },
                            /**
                             *@description gets page name using css classes from body tag
                             */
                        },
                        {
                            key: 'getPageName',
                            value: function getPageName() {
                                var body_classes = document.body;
                                var page_name;
                                if (body_classes.classList.contains('SearchHotels') && !body_classes.classList.contains('HoldRoomsForm')) page_name = 'search-results';
                                if (body_classes.classList.contains('SinglePropDetail')) page_name = 'property-detail';
                                if (body_classes.classList.contains('CheckOutForm')) page_name = 'checkout';
                                if (body_classes.classList.contains('ConfirmationForm')) page_name = 'confirmation';
                                if (body_classes.classList.contains('RootBody')) page_name = 'landing-page';
                                if (body_classes.classList.contains('WBFaq')) page_name = 'faq';
                                if (body_classes.classList.contains('WBTermsAndConditions')) page_name = 'terms-conditions';
                                if (body_classes.classList.contains('WBPrivacyPolicy')) page_name = 'privacy-policy';
                                if (body_classes.classList.contains('WBRateGuaranteeForm2')) page_name = 'lrg-page';
                                if (body_classes.classList.contains('WBValidatedRegistrationForm')) page_name = 'cug-registration';
                                if (body_classes.classList.contains('HoldRoomsForm') && body_classes.classList.contains('SearchHotels')) page_name = 'hold-rooms';
                                return page_name;
                            },
                        },
                        {
                            key: 'getElementTextContent',
                            value: function getElementTextContent(selector) {
                                if (!document.querySelector(selector)) return;
                                return document.querySelector(selector).textContent;
                            },
                            /**
                             *@description Fetches json from URL
                             *@param url url of resource
                             */
                        },
                        {
                            key: 'fetchJSON',
                            value: function fetchJSON(url) {
                                var json = function json() {
                                    fetch(url)
                                        .then(function (response) {
                                            if (!response.ok) {
                                                throw response;
                                            }

                                            return response.json();
                                        })
                                        .catch(function (err) {
                                            err.text().then(function (error) {
                                                console.error('Could not fetch json from '.concat(url), error);
                                            });
                                        });
                                };

                                return json;
                            },
                            /**
                             *@description Fetches text from URL
                             *@param url url of resource
                             */
                        },
                        {
                            key: 'fetchHTMLFromFile',
                            value: (function () {
                                var _fetchHTMLFromFile = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee8(url) {
                                        var html;
                                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                            while (1) {
                                                switch ((_context8.prev = _context8.next)) {
                                                    case 0:
                                                        html = '';
                                                        _context8.next = 3;
                                                        return fetch(url)
                                                            .then(function (response) {
                                                                if (!response.ok) {
                                                                    throw response;
                                                                }

                                                                return response.text();
                                                            })
                                                            .then(function (text) {
                                                                html = text;
                                                            })
                                                            .catch(function (err) {
                                                                err.text().then(function (error) {
                                                                    console.error('Could not fetch text from '.concat(url), error);
                                                                });
                                                            });

                                                    case 3:
                                                        return _context8.abrupt('return', html);

                                                    case 4:
                                                    case 'end':
                                                        return _context8.stop();
                                                }
                                            }
                                        }, _callee8);
                                    })
                                );

                                function fetchHTMLFromFile(_x17) {
                                    return _fetchHTMLFromFile.apply(this, arguments);
                                }

                                return fetchHTMLFromFile;
                            })(),
                        },
                        {
                            key: 'removeMaskedElementFromTabIndex',
                            value: function removeMaskedElementFromTabIndex(selector) {
                                var element = document.querySelector(selector);
                                if (!element) return;
                                element.setAttribute('tabindex', -1);
                            },
                        },
                        {
                            key: 'calculateNights',
                            value: function calculateNights() {
                                var check_in_value = dayjs(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY');
                                var check_out_value = dayjs(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY');
                                var nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');
                                return nights;
                            },
                            /**
                             * Checks the browser width and compares against what is passed in
                             * @param string media_query The width to check, for example 'max-width: 800px'
                             * @return bool
                             */
                        },
                        {
                            key: 'matchMediaQuery',
                            value: function matchMediaQuery(media_query) {
                                var mq = window.matchMedia('('.concat(media_query, ')'));
                                return mq.matches;
                            },
                        },
                        {
                            key: 'selectCheckboxOnLabelClick',
                            value: function selectCheckboxOnLabelClick(node_list) {
                                var checkbox_wrappers = document.querySelectorAll(node_list);
                                checkbox_wrappers.forEach(function (wrapper) {
                                    if (!wrapper.querySelector('input[type="checkbox"]') || !wrapper) return;
                                    var label = wrapper.querySelector('span');
                                    if (!label) label = wrapper.querySelector('label');
                                    label.addEventListener('click', function (e) {
                                        wrapper.querySelector('input[type="checkbox"]').click();
                                    });
                                });
                            },
                        },
                        {
                            key: 'addAttributeToInput',
                            value: (function () {
                                var _addAttributeToInput = _asyncToGenerator(
                                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee9(element, value, attribute, page_name) {
                                        return regeneratorRuntime.wrap(
                                            function _callee9$(_context9) {
                                                while (1) {
                                                    switch ((_context9.prev = _context9.next)) {
                                                        case 0:
                                                            if (document.querySelector(page_name)) {
                                                                _context9.next = 2;
                                                                break;
                                                            }

                                                            return _context9.abrupt('return');

                                                        case 2:
                                                            _context9.prev = 2;
                                                            _context9.next = 5;
                                                            return this.waitForSelectorInDOM(element);

                                                        case 5:
                                                            document.querySelector(element).setAttribute(attribute, value);
                                                            _context9.next = 11;
                                                            break;

                                                        case 8:
                                                            _context9.prev = 8;
                                                            _context9.t0 = _context9['catch'](2);
                                                            console.error(_context9.t0);

                                                        case 11:
                                                        case 'end':
                                                            return _context9.stop();
                                                    }
                                                }
                                            },
                                            _callee9,
                                            this,
                                            [[2, 8]]
                                        );
                                    })
                                );

                                function addAttributeToInput(_x18, _x19, _x20, _x21) {
                                    return _addAttributeToInput.apply(this, arguments);
                                }

                                return addAttributeToInput;
                            })(),
                        },
                        {
                            key: 'replaceSpecificText',
                            value: function replaceSpecificText(selector, regex, new_text) {
                                if (!document.querySelector(selector)) return;
                                var string = document.querySelector(selector).textContent;
                                var test = string.replace(regex, new_text);
                                document.querySelector(selector).textContent = test;
                            },
                            /**
                             *@description Checks whether the date passed in is in the past
                             *@param string date - date to check
                             *@return bool
                             */
                        },
                        {
                            key: 'checkForPastDate',
                            value: function checkForPastDate(date) {
                                if (!date) console.error('No date passed into checkForPastDate()');
                                var now = dayjs();
                                var date_to_check = dayjs(date);
                                var diff = date_to_check.diff(now, 'milliseconds');
                                return diff < 0;
                            },
                        },
                    ]);

                    return Utilities;
                })();

                /***/
            },

        /***/ './node_modules/core-js/modules/_a-function.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = function (it) {
                    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                    return it;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_add-to-unscopables.js':
            /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 22.1.3.31 Array.prototype[@@unscopables]
                var UNSCOPABLES = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('unscopables');
                var ArrayProto = Array.prototype;
                if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js')(ArrayProto, UNSCOPABLES, {});
                module.exports = function (key) {
                    ArrayProto[UNSCOPABLES][key] = true;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_advance-string-index.js':
            /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var at = __webpack_require__(/*! ./_string-at */ './node_modules/core-js/modules/_string-at.js')(true);

                // `AdvanceStringIndex` abstract operation
                // https://tc39.github.io/ecma262/#sec-advancestringindex
                module.exports = function (S, index, unicode) {
                    return index + (unicode ? at(S, index).length : 1);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_an-instance.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = function (it, Constructor, name, forbiddenField) {
                    if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
                        throw TypeError(name + ': incorrect invocation!');
                    }
                    return it;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_an-object.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                module.exports = function (it) {
                    if (!isObject(it)) throw TypeError(it + ' is not an object!');
                    return it;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_array-includes.js':
            /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // false -> Array#indexOf
                // true  -> Array#includes
                var toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
                var toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
                var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js');
                module.exports = function (IS_INCLUDES) {
                    return function ($this, el, fromIndex) {
                        var O = toIObject($this);
                        var length = toLength(O.length);
                        var index = toAbsoluteIndex(fromIndex, length);
                        var value;
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare
                        if (IS_INCLUDES && el != el)
                            while (length > index) {
                                value = O[index++];
                                // eslint-disable-next-line no-self-compare
                                if (value != value) return true;
                                // Array#indexOf ignores holes, Array#includes - not
                            }
                        else
                            for (; length > index; index++)
                                if (IS_INCLUDES || index in O) {
                                    if (O[index] === el) return IS_INCLUDES || index || 0;
                                }
                        return !IS_INCLUDES && -1;
                    };
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_classof.js':
            /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // getting tag from 19.1.3.6 Object.prototype.toString()
                var cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
                var TAG = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('toStringTag');
                // ES3 wrong here
                var ARG =
                    cof(
                        (function () {
                            return arguments;
                        })()
                    ) == 'Arguments';

                // fallback for IE11 Script Access Denied error
                var tryGet = function (it, key) {
                    try {
                        return it[key];
                    } catch (e) {
                        /* empty */
                    }
                };

                module.exports = function (it) {
                    var O, T, B;
                    return it === undefined
                        ? 'Undefined'
                        : it === null
                        ? 'Null'
                        : // @@toStringTag case
                        typeof (T = tryGet((O = Object(it)), TAG)) == 'string'
                        ? T
                        : // builtinTag case
                        ARG
                        ? cof(O)
                        : // ES3 arguments fallback
                        (B = cof(O)) == 'Object' && typeof O.callee == 'function'
                        ? 'Arguments'
                        : B;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_cof.js':
            /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                var toString = {}.toString;

                module.exports = function (it) {
                    return toString.call(it).slice(8, -1);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_core.js':
            /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                var core = (module.exports = {version: '2.6.11'});
                if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

                /***/
            },

        /***/ './node_modules/core-js/modules/_ctx.js':
            /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // optional / simple context binding
                var aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
                module.exports = function (fn, that, length) {
                    aFunction(fn);
                    if (that === undefined) return fn;
                    switch (length) {
                        case 1:
                            return function (a) {
                                return fn.call(that, a);
                            };
                        case 2:
                            return function (a, b) {
                                return fn.call(that, a, b);
                            };
                        case 3:
                            return function (a, b, c) {
                                return fn.call(that, a, b, c);
                            };
                    }
                    return function (/* ...args */) {
                        return fn.apply(that, arguments);
                    };
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_defined.js':
            /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                // 7.2.1 RequireObjectCoercible(argument)
                module.exports = function (it) {
                    if (it == undefined) throw TypeError("Can't call method on  " + it);
                    return it;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_descriptors.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // Thank's IE8 for his funny defineProperty
                module.exports = !__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(function () {
                    return (
                        Object.defineProperty({}, 'a', {
                            get: function () {
                                return 7;
                            },
                        }).a != 7
                    );
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/_dom-create.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                var document = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js').document;
                // typeof document.createElement is 'object' in old IE
                var is = isObject(document) && isObject(document.createElement);
                module.exports = function (it) {
                    return is ? document.createElement(it) : {};
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_enum-bug-keys.js':
            /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                // IE 8- don't enum bug keys
                module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

                /***/
            },

        /***/ './node_modules/core-js/modules/_enum-keys.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // all enumerable object keys, includes symbols
                var getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
                var gOPS = __webpack_require__(/*! ./_object-gops */ './node_modules/core-js/modules/_object-gops.js');
                var pIE = __webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js');
                module.exports = function (it) {
                    var result = getKeys(it);
                    var getSymbols = gOPS.f;
                    if (getSymbols) {
                        var symbols = getSymbols(it);
                        var isEnum = pIE.f;
                        var i = 0;
                        var key;
                        while (symbols.length > i) if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
                    }
                    return result;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_export.js':
            /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
                var hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
                var redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
                var ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
                var PROTOTYPE = 'prototype';

                var $export = function (type, name, source) {
                    var IS_FORCED = type & $export.F;
                    var IS_GLOBAL = type & $export.G;
                    var IS_STATIC = type & $export.S;
                    var IS_PROTO = type & $export.P;
                    var IS_BIND = type & $export.B;
                    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
                    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                    var key, own, out, exp;
                    if (IS_GLOBAL) source = name;
                    for (key in source) {
                        // contains in native
                        own = !IS_FORCED && target && target[key] !== undefined;
                        // export native or passed
                        out = (own ? target : source)[key];
                        // bind timers to global for call from export context
                        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                        // extend global
                        if (target) redefine(target, key, out, type & $export.U);
                        // export
                        if (exports[key] != out) hide(exports, key, exp);
                        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
                    }
                };
                global.core = core;
                // type bitmap
                $export.F = 1; // forced
                $export.G = 2; // global
                $export.S = 4; // static
                $export.P = 8; // proto
                $export.B = 16; // bind
                $export.W = 32; // wrap
                $export.U = 64; // safe
                $export.R = 128; // real proto method for `library`
                module.exports = $export;

                /***/
            },

        /***/ './node_modules/core-js/modules/_fails-is-regexp.js':
            /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var MATCH = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('match');
                module.exports = function (KEY) {
                    var re = /./;
                    try {
                        '/./'[KEY](re);
                    } catch (e) {
                        try {
                            re[MATCH] = false;
                            return !'/./'[KEY](re);
                        } catch (f) {
                            /* empty */
                        }
                    }
                    return true;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_fails.js':
            /*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = function (exec) {
                    try {
                        return !!exec();
                    } catch (e) {
                        return true;
                    }
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_fix-re-wks.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                __webpack_require__(/*! ./es6.regexp.exec */ './node_modules/core-js/modules/es6.regexp.exec.js');
                var redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
                var hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
                var fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
                var defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
                var wks = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');
                var regexpExec = __webpack_require__(/*! ./_regexp-exec */ './node_modules/core-js/modules/_regexp-exec.js');

                var SPECIES = wks('species');

                var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
                    // #replace needs built-in support for named groups.
                    // #match works fine because it just return the exec results, even if it has
                    // a "grops" property.
                    var re = /./;
                    re.exec = function () {
                        var result = [];
                        result.groups = {a: '7'};
                        return result;
                    };
                    return ''.replace(re, '$<a>') !== '7';
                });

                var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
                    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
                    var re = /(?:)/;
                    var originalExec = re.exec;
                    re.exec = function () {
                        return originalExec.apply(this, arguments);
                    };
                    var result = 'ab'.split(re);
                    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
                })();

                module.exports = function (KEY, length, exec) {
                    var SYMBOL = wks(KEY);

                    var DELEGATES_TO_SYMBOL = !fails(function () {
                        // String methods call symbol-named RegEp methods
                        var O = {};
                        O[SYMBOL] = function () {
                            return 7;
                        };
                        return ''[KEY](O) != 7;
                    });

                    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL
                        ? !fails(function () {
                              // Symbol-named RegExp methods call .exec
                              var execCalled = false;
                              var re = /a/;
                              re.exec = function () {
                                  execCalled = true;
                                  return null;
                              };
                              if (KEY === 'split') {
                                  // RegExp[@@split] doesn't call the regex's exec method, but first creates
                                  // a new one. We need to return the patched regex when creating the new one.
                                  re.constructor = {};
                                  re.constructor[SPECIES] = function () {
                                      return re;
                                  };
                              }
                              re[SYMBOL]('');
                              return !execCalled;
                          })
                        : undefined;

                    if (
                        !DELEGATES_TO_SYMBOL ||
                        !DELEGATES_TO_EXEC ||
                        (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
                        (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
                    ) {
                        var nativeRegExpMethod = /./[SYMBOL];
                        var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                            if (regexp.exec === regexpExec) {
                                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                                    // The native String method already delegates to @@method (this
                                    // polyfilled function), leasing to infinite recursion.
                                    // We avoid it by directly calling the native @@method method.
                                    return {done: true, value: nativeRegExpMethod.call(regexp, str, arg2)};
                                }
                                return {done: true, value: nativeMethod.call(str, regexp, arg2)};
                            }
                            return {done: false};
                        });
                        var strfn = fns[0];
                        var rxfn = fns[1];

                        redefine(String.prototype, KEY, strfn);
                        hide(
                            RegExp.prototype,
                            SYMBOL,
                            length == 2
                                ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                                  // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                                  function (string, arg) {
                                      return rxfn.call(string, this, arg);
                                  }
                                : // 21.2.5.6 RegExp.prototype[@@match](string)
                                  // 21.2.5.9 RegExp.prototype[@@search](string)
                                  function (string) {
                                      return rxfn.call(string, this);
                                  }
                        );
                    }
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_flags.js':
            /*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                // 21.2.5.3 get RegExp.prototype.flags
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                module.exports = function () {
                    var that = anObject(this);
                    var result = '';
                    if (that.global) result += 'g';
                    if (that.ignoreCase) result += 'i';
                    if (that.multiline) result += 'm';
                    if (that.unicode) result += 'u';
                    if (that.sticky) result += 'y';
                    return result;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_for-of.js':
            /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
                var call = __webpack_require__(/*! ./_iter-call */ './node_modules/core-js/modules/_iter-call.js');
                var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ './node_modules/core-js/modules/_is-array-iter.js');
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
                var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ './node_modules/core-js/modules/core.get-iterator-method.js');
                var BREAK = {};
                var RETURN = {};
                var exports = (module.exports = function (iterable, entries, fn, that, ITERATOR) {
                    var iterFn = ITERATOR
                        ? function () {
                              return iterable;
                          }
                        : getIterFn(iterable);
                    var f = ctx(fn, that, entries ? 2 : 1);
                    var index = 0;
                    var length, step, iterator, result;
                    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
                    // fast case for arrays with default iterator
                    if (isArrayIter(iterFn))
                        for (length = toLength(iterable.length); length > index; index++) {
                            result = entries ? f(anObject((step = iterable[index]))[0], step[1]) : f(iterable[index]);
                            if (result === BREAK || result === RETURN) return result;
                        }
                    else
                        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
                            result = call(iterator, f, step.value, entries);
                            if (result === BREAK || result === RETURN) return result;
                        }
                });
                exports.BREAK = BREAK;
                exports.RETURN = RETURN;

                /***/
            },

        /***/ './node_modules/core-js/modules/_function-to-string.js':
            /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                module.exports = __webpack_require__(/*! ./_shared */ './node_modules/core-js/modules/_shared.js')('native-function-to-string', Function.toString);

                /***/
            },

        /***/ './node_modules/core-js/modules/_global.js':
            /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                var global = (module.exports =
                    typeof window != 'undefined' && window.Math == Math
                        ? window
                        : typeof self != 'undefined' && self.Math == Math
                        ? self
                        : // eslint-disable-next-line no-new-func
                          Function('return this')());
                if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

                /***/
            },

        /***/ './node_modules/core-js/modules/_has.js':
            /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                var hasOwnProperty = {}.hasOwnProperty;
                module.exports = function (it, key) {
                    return hasOwnProperty.call(it, key);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_hide.js':
            /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
                var createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
                module.exports = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js')
                    ? function (object, key, value) {
                          return dP.f(object, key, createDesc(1, value));
                      }
                    : function (object, key, value) {
                          object[key] = value;
                          return object;
                      };

                /***/
            },

        /***/ './node_modules/core-js/modules/_html.js':
            /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var document = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js').document;
                module.exports = document && document.documentElement;

                /***/
            },

        /***/ './node_modules/core-js/modules/_ie8-dom-define.js':
            /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                module.exports =
                    !__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') &&
                    !__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(function () {
                        return (
                            Object.defineProperty(__webpack_require__(/*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js')('div'), 'a', {
                                get: function () {
                                    return 7;
                                },
                            }).a != 7
                        );
                    });

                /***/
            },

        /***/ './node_modules/core-js/modules/_invoke.js':
            /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                // fast apply, http://jsperf.lnkit.com/fast-apply/5
                module.exports = function (fn, args, that) {
                    var un = that === undefined;
                    switch (args.length) {
                        case 0:
                            return un ? fn() : fn.call(that);
                        case 1:
                            return un ? fn(args[0]) : fn.call(that, args[0]);
                        case 2:
                            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                        case 3:
                            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                        case 4:
                            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                    }
                    return fn.apply(that, args);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_iobject.js':
            /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                var cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
                // eslint-disable-next-line no-prototype-builtins
                module.exports = Object('z').propertyIsEnumerable(0)
                    ? Object
                    : function (it) {
                          return cof(it) == 'String' ? it.split('') : Object(it);
                      };

                /***/
            },

        /***/ './node_modules/core-js/modules/_is-array-iter.js':
            /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // check on default Array iterator
                var Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
                var ITERATOR = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator');
                var ArrayProto = Array.prototype;

                module.exports = function (it) {
                    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_is-array.js':
            /*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 7.2.2 IsArray(argument)
                var cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
                module.exports =
                    Array.isArray ||
                    function isArray(arg) {
                        return cof(arg) == 'Array';
                    };

                /***/
            },

        /***/ './node_modules/core-js/modules/_is-object.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = function (it) {
                    return typeof it === 'object' ? it !== null : typeof it === 'function';
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_is-regexp.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 7.2.8 IsRegExp(argument)
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                var cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
                var MATCH = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('match');
                module.exports = function (it) {
                    var isRegExp;
                    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_iter-call.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // call something on iterator step with safe closing on error
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                module.exports = function (iterator, fn, value, entries) {
                    try {
                        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                        // 7.4.6 IteratorClose(iterator, completion)
                    } catch (e) {
                        var ret = iterator['return'];
                        if (ret !== undefined) anObject(ret.call(iterator));
                        throw e;
                    }
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_iter-create.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var create = __webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js');
                var descriptor = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
                var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js');
                var IteratorPrototype = {};

                // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js')(
                    IteratorPrototype,
                    __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator'),
                    function () {
                        return this;
                    }
                );

                module.exports = function (Constructor, NAME, next) {
                    Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
                    setToStringTag(Constructor, NAME + ' Iterator');
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_iter-define.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var LIBRARY = __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js');
                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
                var redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
                var hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
                var Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
                var $iterCreate = __webpack_require__(/*! ./_iter-create */ './node_modules/core-js/modules/_iter-create.js');
                var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js');
                var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');
                var ITERATOR = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator');
                var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                var FF_ITERATOR = '@@iterator';
                var KEYS = 'keys';
                var VALUES = 'values';

                var returnThis = function () {
                    return this;
                };

                module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                    $iterCreate(Constructor, NAME, next);
                    var getMethod = function (kind) {
                        if (!BUGGY && kind in proto) return proto[kind];
                        switch (kind) {
                            case KEYS:
                                return function keys() {
                                    return new Constructor(this, kind);
                                };
                            case VALUES:
                                return function values() {
                                    return new Constructor(this, kind);
                                };
                        }
                        return function entries() {
                            return new Constructor(this, kind);
                        };
                    };
                    var TAG = NAME + ' Iterator';
                    var DEF_VALUES = DEFAULT == VALUES;
                    var VALUES_BUG = false;
                    var proto = Base.prototype;
                    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
                    var $default = $native || getMethod(DEFAULT);
                    var $entries = DEFAULT ? (!DEF_VALUES ? $default : getMethod('entries')) : undefined;
                    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                    var methods, key, IteratorPrototype;
                    // Fix native
                    if ($anyNative) {
                        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                            // Set @@toStringTag to native iterators
                            setToStringTag(IteratorPrototype, TAG, true);
                            // fix for some old engines
                            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
                        }
                    }
                    // fix Array#{values, @@iterator}.name in V8 / FF
                    if (DEF_VALUES && $native && $native.name !== VALUES) {
                        VALUES_BUG = true;
                        $default = function values() {
                            return $native.call(this);
                        };
                    }
                    // Define iterator
                    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                        hide(proto, ITERATOR, $default);
                    }
                    // Plug for library
                    Iterators[NAME] = $default;
                    Iterators[TAG] = returnThis;
                    if (DEFAULT) {
                        methods = {
                            values: DEF_VALUES ? $default : getMethod(VALUES),
                            keys: IS_SET ? $default : getMethod(KEYS),
                            entries: $entries,
                        };
                        if (FORCED)
                            for (key in methods) {
                                if (!(key in proto)) redefine(proto, key, methods[key]);
                            }
                        else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                    }
                    return methods;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_iter-detect.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var ITERATOR = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator');
                var SAFE_CLOSING = false;

                try {
                    var riter = [7][ITERATOR]();
                    riter['return'] = function () {
                        SAFE_CLOSING = true;
                    };
                    // eslint-disable-next-line no-throw-literal
                    Array.from(riter, function () {
                        throw 2;
                    });
                } catch (e) {
                    /* empty */
                }

                module.exports = function (exec, skipClosing) {
                    if (!skipClosing && !SAFE_CLOSING) return false;
                    var safe = false;
                    try {
                        var arr = [7];
                        var iter = arr[ITERATOR]();
                        iter.next = function () {
                            return {done: (safe = true)};
                        };
                        arr[ITERATOR] = function () {
                            return iter;
                        };
                        exec(arr);
                    } catch (e) {
                        /* empty */
                    }
                    return safe;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_iter-step.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = function (done, value) {
                    return {value: value, done: !!done};
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_iterators.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = {};

                /***/
            },

        /***/ './node_modules/core-js/modules/_library.js':
            /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = false;

                /***/
            },

        /***/ './node_modules/core-js/modules/_meta.js':
            /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var META = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js')('meta');
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                var has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
                var setDesc = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f;
                var id = 0;
                var isExtensible =
                    Object.isExtensible ||
                    function () {
                        return true;
                    };
                var FREEZE = !__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(function () {
                    return isExtensible(Object.preventExtensions({}));
                });
                var setMeta = function (it) {
                    setDesc(it, META, {
                        value: {
                            i: 'O' + ++id, // object ID
                            w: {}, // weak collections IDs
                        },
                    });
                };
                var fastKey = function (it, create) {
                    // return primitive with prefix
                    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                    if (!has(it, META)) {
                        // can't set metadata to uncaught frozen object
                        if (!isExtensible(it)) return 'F';
                        // not necessary to add metadata
                        if (!create) return 'E';
                        // add missing metadata
                        setMeta(it);
                        // return object ID
                    }
                    return it[META].i;
                };
                var getWeak = function (it, create) {
                    if (!has(it, META)) {
                        // can't set metadata to uncaught frozen object
                        if (!isExtensible(it)) return true;
                        // not necessary to add metadata
                        if (!create) return false;
                        // add missing metadata
                        setMeta(it);
                        // return hash weak collections IDs
                    }
                    return it[META].w;
                };
                // add metadata on freeze-family methods calling
                var onFreeze = function (it) {
                    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
                    return it;
                };
                var meta = (module.exports = {
                    KEY: META,
                    NEED: false,
                    fastKey: fastKey,
                    getWeak: getWeak,
                    onFreeze: onFreeze,
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/_microtask.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var macrotask = __webpack_require__(/*! ./_task */ './node_modules/core-js/modules/_task.js').set;
                var Observer = global.MutationObserver || global.WebKitMutationObserver;
                var process = global.process;
                var Promise = global.Promise;
                var isNode = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js')(process) == 'process';

                module.exports = function () {
                    var head, last, notify;

                    var flush = function () {
                        var parent, fn;
                        if (isNode && (parent = process.domain)) parent.exit();
                        while (head) {
                            fn = head.fn;
                            head = head.next;
                            try {
                                fn();
                            } catch (e) {
                                if (head) notify();
                                else last = undefined;
                                throw e;
                            }
                        }
                        last = undefined;
                        if (parent) parent.enter();
                    };

                    // Node.js
                    if (isNode) {
                        notify = function () {
                            process.nextTick(flush);
                        };
                        // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
                    } else if (Observer && !(global.navigator && global.navigator.standalone)) {
                        var toggle = true;
                        var node = document.createTextNode('');
                        new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
                        notify = function () {
                            node.data = toggle = !toggle;
                        };
                        // environments with maybe non-completely correct, but existent Promise
                    } else if (Promise && Promise.resolve) {
                        // Promise.resolve without an argument throws an error in LG WebOS 2
                        var promise = Promise.resolve(undefined);
                        notify = function () {
                            promise.then(flush);
                        };
                        // for other environments - macrotask based on:
                        // - setImmediate
                        // - MessageChannel
                        // - window.postMessag
                        // - onreadystatechange
                        // - setTimeout
                    } else {
                        notify = function () {
                            // strange IE + webpack dev server bug - use .call(global)
                            macrotask.call(global, flush);
                        };
                    }

                    return function (fn) {
                        var task = {fn: fn, next: undefined};
                        if (last) last.next = task;
                        if (!head) {
                            head = task;
                            notify();
                        }
                        last = task;
                    };
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_new-promise-capability.js':
            /*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                // 25.4.1.5 NewPromiseCapability(C)
                var aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');

                function PromiseCapability(C) {
                    var resolve, reject;
                    this.promise = new C(function ($$resolve, $$reject) {
                        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                        resolve = $$resolve;
                        reject = $$reject;
                    });
                    this.resolve = aFunction(resolve);
                    this.reject = aFunction(reject);
                }

                module.exports.f = function (C) {
                    return new PromiseCapability(C);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-create.js':
            /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var dPs = __webpack_require__(/*! ./_object-dps */ './node_modules/core-js/modules/_object-dps.js');
                var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js');
                var IE_PROTO = __webpack_require__(/*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js')('IE_PROTO');
                var Empty = function () {
                    /* empty */
                };
                var PROTOTYPE = 'prototype';

                // Create object with fake `null` prototype: use iframe Object with cleared prototype
                var createDict = function () {
                    // Thrash, waste and sodomy: IE GC bug
                    var iframe = __webpack_require__(/*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js')('iframe');
                    var i = enumBugKeys.length;
                    var lt = '<';
                    var gt = '>';
                    var iframeDocument;
                    iframe.style.display = 'none';
                    __webpack_require__(/*! ./_html */ './node_modules/core-js/modules/_html.js').appendChild(iframe);
                    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                    // createDict = iframe.contentWindow.Object;
                    // html.removeChild(iframe);
                    iframeDocument = iframe.contentWindow.document;
                    iframeDocument.open();
                    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                    iframeDocument.close();
                    createDict = iframeDocument.F;
                    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
                    return createDict();
                };

                module.exports =
                    Object.create ||
                    function create(O, Properties) {
                        var result;
                        if (O !== null) {
                            Empty[PROTOTYPE] = anObject(O);
                            result = new Empty();
                            Empty[PROTOTYPE] = null;
                            // add "__proto__" for Object.getPrototypeOf polyfill
                            result[IE_PROTO] = O;
                        } else result = createDict();
                        return Properties === undefined ? result : dPs(result, Properties);
                    };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-dp.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ './node_modules/core-js/modules/_ie8-dom-define.js');
                var toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
                var dP = Object.defineProperty;

                exports.f = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js')
                    ? Object.defineProperty
                    : function defineProperty(O, P, Attributes) {
                          anObject(O);
                          P = toPrimitive(P, true);
                          anObject(Attributes);
                          if (IE8_DOM_DEFINE)
                              try {
                                  return dP(O, P, Attributes);
                              } catch (e) {
                                  /* empty */
                              }
                          if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                          if ('value' in Attributes) O[P] = Attributes.value;
                          return O;
                      };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-dps.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');

                module.exports = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js')
                    ? Object.defineProperties
                    : function defineProperties(O, Properties) {
                          anObject(O);
                          var keys = getKeys(Properties);
                          var length = keys.length;
                          var i = 0;
                          var P;
                          while (length > i) dP.f(O, (P = keys[i++]), Properties[P]);
                          return O;
                      };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-gopd.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var pIE = __webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js');
                var createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
                var toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
                var toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
                var has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
                var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ './node_modules/core-js/modules/_ie8-dom-define.js');
                var gOPD = Object.getOwnPropertyDescriptor;

                exports.f = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js')
                    ? gOPD
                    : function getOwnPropertyDescriptor(O, P) {
                          O = toIObject(O);
                          P = toPrimitive(P, true);
                          if (IE8_DOM_DEFINE)
                              try {
                                  return gOPD(O, P);
                              } catch (e) {
                                  /* empty */
                              }
                          if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
                      };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-gopn-ext.js':
            /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                var toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
                var gOPN = __webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js').f;
                var toString = {}.toString;

                var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

                var getWindowNames = function (it) {
                    try {
                        return gOPN(it);
                    } catch (e) {
                        return windowNames.slice();
                    }
                };

                module.exports.f = function getOwnPropertyNames(it) {
                    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-gopn.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
                var $keys = __webpack_require__(/*! ./_object-keys-internal */ './node_modules/core-js/modules/_object-keys-internal.js');
                var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js').concat('length', 'prototype');

                exports.f =
                    Object.getOwnPropertyNames ||
                    function getOwnPropertyNames(O) {
                        return $keys(O, hiddenKeys);
                    };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-gops.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                exports.f = Object.getOwnPropertySymbols;

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-gpo.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                var has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
                var toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
                var IE_PROTO = __webpack_require__(/*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js')('IE_PROTO');
                var ObjectProto = Object.prototype;

                module.exports =
                    Object.getPrototypeOf ||
                    function (O) {
                        O = toObject(O);
                        if (has(O, IE_PROTO)) return O[IE_PROTO];
                        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                            return O.constructor.prototype;
                        }
                        return O instanceof Object ? ObjectProto : null;
                    };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-keys-internal.js':
            /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
                var toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
                var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js')(false);
                var IE_PROTO = __webpack_require__(/*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js')('IE_PROTO');

                module.exports = function (object, names) {
                    var O = toIObject(object);
                    var i = 0;
                    var result = [];
                    var key;
                    for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
                    // Don't enum bug & hidden keys
                    while (names.length > i)
                        if (has(O, (key = names[i++]))) {
                            ~arrayIndexOf(result, key) || result.push(key);
                        }
                    return result;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-keys.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                var $keys = __webpack_require__(/*! ./_object-keys-internal */ './node_modules/core-js/modules/_object-keys-internal.js');
                var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js');

                module.exports =
                    Object.keys ||
                    function keys(O) {
                        return $keys(O, enumBugKeys);
                    };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-pie.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                exports.f = {}.propertyIsEnumerable;

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-sap.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // most Object methods by ES6 should accept primitives
                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
                var core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
                var fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
                module.exports = function (KEY, exec) {
                    var fn = (core.Object || {})[KEY] || Object[KEY];
                    var exp = {};
                    exp[KEY] = exec(fn);
                    $export(
                        $export.S +
                            $export.F *
                                fails(function () {
                                    fn(1);
                                }),
                        'Object',
                        exp
                    );
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_object-to-array.js':
            /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
                var getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
                var toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
                var isEnum = __webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js').f;
                module.exports = function (isEntries) {
                    return function (it) {
                        var O = toIObject(it);
                        var keys = getKeys(O);
                        var length = keys.length;
                        var i = 0;
                        var result = [];
                        var key;
                        while (length > i) {
                            key = keys[i++];
                            if (!DESCRIPTORS || isEnum.call(O, key)) {
                                result.push(isEntries ? [key, O[key]] : O[key]);
                            }
                        }
                        return result;
                    };
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_perform.js':
            /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = function (exec) {
                    try {
                        return {e: false, v: exec()};
                    } catch (e) {
                        return {e: true, v: e};
                    }
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_promise-resolve.js':
            /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ './node_modules/core-js/modules/_new-promise-capability.js');

                module.exports = function (C, x) {
                    anObject(C);
                    if (isObject(x) && x.constructor === C) return x;
                    var promiseCapability = newPromiseCapability.f(C);
                    var resolve = promiseCapability.resolve;
                    resolve(x);
                    return promiseCapability.promise;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_property-desc.js':
            /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = function (bitmap, value) {
                    return {
                        enumerable: !(bitmap & 1),
                        configurable: !(bitmap & 2),
                        writable: !(bitmap & 4),
                        value: value,
                    };
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_redefine-all.js':
            /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
                module.exports = function (target, src, safe) {
                    for (var key in src) redefine(target, key, src[key], safe);
                    return target;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_redefine.js':
            /*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
                var has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
                var SRC = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js')('src');
                var $toString = __webpack_require__(/*! ./_function-to-string */ './node_modules/core-js/modules/_function-to-string.js');
                var TO_STRING = 'toString';
                var TPL = ('' + $toString).split(TO_STRING);

                __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js').inspectSource = function (it) {
                    return $toString.call(it);
                };

                (module.exports = function (O, key, val, safe) {
                    var isFunction = typeof val == 'function';
                    if (isFunction) has(val, 'name') || hide(val, 'name', key);
                    if (O[key] === val) return;
                    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
                    if (O === global) {
                        O[key] = val;
                    } else if (!safe) {
                        delete O[key];
                        hide(O, key, val);
                    } else if (O[key]) {
                        O[key] = val;
                    } else {
                        hide(O, key, val);
                    }
                    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
                })(Function.prototype, TO_STRING, function toString() {
                    return (typeof this == 'function' && this[SRC]) || $toString.call(this);
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/_regexp-exec-abstract.js':
            /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
                var builtinExec = RegExp.prototype.exec;

                // `RegExpExec` abstract operation
                // https://tc39.github.io/ecma262/#sec-regexpexec
                module.exports = function (R, S) {
                    var exec = R.exec;
                    if (typeof exec === 'function') {
                        var result = exec.call(R, S);
                        if (typeof result !== 'object') {
                            throw new TypeError('RegExp exec method returned something other than an Object or null');
                        }
                        return result;
                    }
                    if (classof(R) !== 'RegExp') {
                        throw new TypeError('RegExp#exec called on incompatible receiver');
                    }
                    return builtinExec.call(R, S);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_regexp-exec.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var regexpFlags = __webpack_require__(/*! ./_flags */ './node_modules/core-js/modules/_flags.js');

                var nativeExec = RegExp.prototype.exec;
                // This always refers to the native implementation, because the
                // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
                // which loads this file before patching the method.
                var nativeReplace = String.prototype.replace;

                var patchedExec = nativeExec;

                var LAST_INDEX = 'lastIndex';

                var UPDATES_LAST_INDEX_WRONG = (function () {
                    var re1 = /a/,
                        re2 = /b*/g;
                    nativeExec.call(re1, 'a');
                    nativeExec.call(re2, 'a');
                    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
                })();

                // nonparticipating capturing group, copied from es5-shim's String#split patch.
                var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

                var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

                if (PATCH) {
                    patchedExec = function exec(str) {
                        var re = this;
                        var lastIndex, reCopy, match, i;

                        if (NPCG_INCLUDED) {
                            reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
                        }
                        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

                        match = nativeExec.call(re, str);

                        if (UPDATES_LAST_INDEX_WRONG && match) {
                            re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                        }
                        if (NPCG_INCLUDED && match && match.length > 1) {
                            // Fix browsers whose `exec` methods don't consistently return `undefined`
                            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                            // eslint-disable-next-line no-loop-func
                            nativeReplace.call(match[0], reCopy, function () {
                                for (i = 1; i < arguments.length - 2; i++) {
                                    if (arguments[i] === undefined) match[i] = undefined;
                                }
                            });
                        }

                        return match;
                    };
                }

                module.exports = patchedExec;

                /***/
            },

        /***/ './node_modules/core-js/modules/_same-value.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                // 7.2.9 SameValue(x, y)
                module.exports =
                    Object.is ||
                    function is(x, y) {
                        // eslint-disable-next-line no-self-compare
                        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
                    };

                /***/
            },

        /***/ './node_modules/core-js/modules/_set-species.js':
            /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
                var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
                var SPECIES = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('species');

                module.exports = function (KEY) {
                    var C = global[KEY];
                    if (DESCRIPTORS && C && !C[SPECIES])
                        dP.f(C, SPECIES, {
                            configurable: true,
                            get: function () {
                                return this;
                            },
                        });
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_set-to-string-tag.js':
            /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var def = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f;
                var has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
                var TAG = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('toStringTag');

                module.exports = function (it, tag, stat) {
                    if (it && !has((it = stat ? it : it.prototype), TAG)) def(it, TAG, {configurable: true, value: tag});
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_shared-key.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var shared = __webpack_require__(/*! ./_shared */ './node_modules/core-js/modules/_shared.js')('keys');
                var uid = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js');
                module.exports = function (key) {
                    return shared[key] || (shared[key] = uid(key));
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_shared.js':
            /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var SHARED = '__core-js_shared__';
                var store = global[SHARED] || (global[SHARED] = {});

                (module.exports = function (key, value) {
                    return store[key] || (store[key] = value !== undefined ? value : {});
                })('versions', []).push({
                    version: core.version,
                    mode: __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js') ? 'pure' : 'global',
                    copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/_species-constructor.js':
            /*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 7.3.20 SpeciesConstructor(O, defaultConstructor)
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
                var SPECIES = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('species');
                module.exports = function (O, D) {
                    var C = anObject(O).constructor;
                    var S;
                    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_string-at.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
                var defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
                // true  -> String#at
                // false -> String#codePointAt
                module.exports = function (TO_STRING) {
                    return function (that, pos) {
                        var s = String(defined(that));
                        var i = toInteger(pos);
                        var l = s.length;
                        var a, b;
                        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                        a = s.charCodeAt(i);
                        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
                            ? TO_STRING
                                ? s.charAt(i)
                                : a
                            : TO_STRING
                            ? s.slice(i, i + 2)
                            : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
                    };
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_string-context.js':
            /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // helper for String#{startsWith, endsWith, includes}
                var isRegExp = __webpack_require__(/*! ./_is-regexp */ './node_modules/core-js/modules/_is-regexp.js');
                var defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');

                module.exports = function (that, searchString, NAME) {
                    if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
                    return String(defined(that));
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_string-repeat.js':
            /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
                var defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');

                module.exports = function repeat(count) {
                    var str = String(defined(this));
                    var res = '';
                    var n = toInteger(count);
                    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
                    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
                    return res;
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_task.js':
            /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
                var invoke = __webpack_require__(/*! ./_invoke */ './node_modules/core-js/modules/_invoke.js');
                var html = __webpack_require__(/*! ./_html */ './node_modules/core-js/modules/_html.js');
                var cel = __webpack_require__(/*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js');
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var process = global.process;
                var setTask = global.setImmediate;
                var clearTask = global.clearImmediate;
                var MessageChannel = global.MessageChannel;
                var Dispatch = global.Dispatch;
                var counter = 0;
                var queue = {};
                var ONREADYSTATECHANGE = 'onreadystatechange';
                var defer, channel, port;
                var run = function () {
                    var id = +this;
                    // eslint-disable-next-line no-prototype-builtins
                    if (queue.hasOwnProperty(id)) {
                        var fn = queue[id];
                        delete queue[id];
                        fn();
                    }
                };
                var listener = function (event) {
                    run.call(event.data);
                };
                // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
                if (!setTask || !clearTask) {
                    setTask = function setImmediate(fn) {
                        var args = [];
                        var i = 1;
                        while (arguments.length > i) args.push(arguments[i++]);
                        queue[++counter] = function () {
                            // eslint-disable-next-line no-new-func
                            invoke(typeof fn == 'function' ? fn : Function(fn), args);
                        };
                        defer(counter);
                        return counter;
                    };
                    clearTask = function clearImmediate(id) {
                        delete queue[id];
                    };
                    // Node.js 0.8-
                    if (__webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js')(process) == 'process') {
                        defer = function (id) {
                            process.nextTick(ctx(run, id, 1));
                        };
                        // Sphere (JS game engine) Dispatch API
                    } else if (Dispatch && Dispatch.now) {
                        defer = function (id) {
                            Dispatch.now(ctx(run, id, 1));
                        };
                        // Browsers with MessageChannel, includes WebWorkers
                    } else if (MessageChannel) {
                        channel = new MessageChannel();
                        port = channel.port2;
                        channel.port1.onmessage = listener;
                        defer = ctx(port.postMessage, port, 1);
                        // Browsers with postMessage, skip WebWorkers
                        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
                    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                        defer = function (id) {
                            global.postMessage(id + '', '*');
                        };
                        global.addEventListener('message', listener, false);
                        // IE8-
                    } else if (ONREADYSTATECHANGE in cel('script')) {
                        defer = function (id) {
                            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                                html.removeChild(this);
                                run.call(id);
                            };
                        };
                        // Rest old browsers
                    } else {
                        defer = function (id) {
                            setTimeout(ctx(run, id, 1), 0);
                        };
                    }
                }
                module.exports = {
                    set: setTask,
                    clear: clearTask,
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_to-absolute-index.js':
            /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
                var max = Math.max;
                var min = Math.min;
                module.exports = function (index, length) {
                    index = toInteger(index);
                    return index < 0 ? max(index + length, 0) : min(index, length);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_to-integer.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                // 7.1.4 ToInteger
                var ceil = Math.ceil;
                var floor = Math.floor;
                module.exports = function (it) {
                    return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_to-iobject.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // to indexed object, toObject with fallback for non-array-like ES3 strings
                var IObject = __webpack_require__(/*! ./_iobject */ './node_modules/core-js/modules/_iobject.js');
                var defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
                module.exports = function (it) {
                    return IObject(defined(it));
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_to-length.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 7.1.15 ToLength
                var toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
                var min = Math.min;
                module.exports = function (it) {
                    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_to-object.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 7.1.13 ToObject(argument)
                var defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
                module.exports = function (it) {
                    return Object(defined(it));
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_to-primitive.js':
            /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 7.1.1 ToPrimitive(input [, PreferredType])
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                // and the second argument - flag - preferred type is a string
                module.exports = function (it, S) {
                    if (!isObject(it)) return it;
                    var fn, val;
                    if (S && typeof (fn = it.toString) == 'function' && !isObject((val = fn.call(it)))) return val;
                    if (typeof (fn = it.valueOf) == 'function' && !isObject((val = fn.call(it)))) return val;
                    if (!S && typeof (fn = it.toString) == 'function' && !isObject((val = fn.call(it)))) return val;
                    throw TypeError("Can't convert object to primitive value");
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_uid.js':
            /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                var id = 0;
                var px = Math.random();
                module.exports = function (key) {
                    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_user-agent.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var navigator = global.navigator;

                module.exports = (navigator && navigator.userAgent) || '';

                /***/
            },

        /***/ './node_modules/core-js/modules/_wks-define.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
                var LIBRARY = __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js');
                var wksExt = __webpack_require__(/*! ./_wks-ext */ './node_modules/core-js/modules/_wks-ext.js');
                var defineProperty = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f;
                module.exports = function (name) {
                    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {value: wksExt.f(name)});
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/_wks-ext.js':
            /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                exports.f = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');

                /***/
            },

        /***/ './node_modules/core-js/modules/_wks.js':
            /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var store = __webpack_require__(/*! ./_shared */ './node_modules/core-js/modules/_shared.js')('wks');
                var uid = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js');
                var Symbol = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js').Symbol;
                var USE_SYMBOL = typeof Symbol == 'function';

                var $exports = (module.exports = function (name) {
                    return store[name] || (store[name] = (USE_SYMBOL && Symbol[name]) || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
                });

                $exports.store = store;

                /***/
            },

        /***/ './node_modules/core-js/modules/core.get-iterator-method.js':
            /*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
                var ITERATOR = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator');
                var Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
                module.exports = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js').getIteratorMethod = function (it) {
                    if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
                };

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.array.iterator.js':
            /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js');
                var step = __webpack_require__(/*! ./_iter-step */ './node_modules/core-js/modules/_iter-step.js');
                var Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
                var toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');

                // 22.1.3.4 Array.prototype.entries()
                // 22.1.3.13 Array.prototype.keys()
                // 22.1.3.29 Array.prototype.values()
                // 22.1.3.30 Array.prototype[@@iterator]()
                module.exports = __webpack_require__(/*! ./_iter-define */ './node_modules/core-js/modules/_iter-define.js')(
                    Array,
                    'Array',
                    function (iterated, kind) {
                        this._t = toIObject(iterated); // target
                        this._i = 0; // next index
                        this._k = kind; // kind
                        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                    },
                    function () {
                        var O = this._t;
                        var kind = this._k;
                        var index = this._i++;
                        if (!O || index >= O.length) {
                            this._t = undefined;
                            return step(1);
                        }
                        if (kind == 'keys') return step(0, index);
                        if (kind == 'values') return step(0, O[index]);
                        return step(0, [index, O[index]]);
                    },
                    'values'
                );

                // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                Iterators.Arguments = Iterators.Array;

                addToUnscopables('keys');
                addToUnscopables('values');
                addToUnscopables('entries');

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.function.name.js':
            /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f;
                var FProto = Function.prototype;
                var nameRE = /^\s*function ([^ (]*)/;
                var NAME = 'name';

                // 19.2.4.2 name
                NAME in FProto ||
                    (__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') &&
                        dP(FProto, NAME, {
                            configurable: true,
                            get: function () {
                                try {
                                    return ('' + this).match(nameRE)[1];
                                } catch (e) {
                                    return '';
                                }
                            },
                        }));

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.object.keys.js':
            /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 19.1.2.14 Object.keys(O)
                var toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
                var $keys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');

                __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('keys', function () {
                    return function keys(it) {
                        return $keys(toObject(it));
                    };
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.object.to-string.js':
            /*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                // 19.1.3.6 Object.prototype.toString()
                var classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
                var test = {};
                test[__webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('toStringTag')] = 'z';
                if (test + '' != '[object z]') {
                    __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js')(
                        Object.prototype,
                        'toString',
                        function toString() {
                            return '[object ' + classof(this) + ']';
                        },
                        true
                    );
                }

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.promise.js':
            /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var LIBRARY = __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js');
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
                var classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                var aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
                var anInstance = __webpack_require__(/*! ./_an-instance */ './node_modules/core-js/modules/_an-instance.js');
                var forOf = __webpack_require__(/*! ./_for-of */ './node_modules/core-js/modules/_for-of.js');
                var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ './node_modules/core-js/modules/_species-constructor.js');
                var task = __webpack_require__(/*! ./_task */ './node_modules/core-js/modules/_task.js').set;
                var microtask = __webpack_require__(/*! ./_microtask */ './node_modules/core-js/modules/_microtask.js')();
                var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ './node_modules/core-js/modules/_new-promise-capability.js');
                var perform = __webpack_require__(/*! ./_perform */ './node_modules/core-js/modules/_perform.js');
                var userAgent = __webpack_require__(/*! ./_user-agent */ './node_modules/core-js/modules/_user-agent.js');
                var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ './node_modules/core-js/modules/_promise-resolve.js');
                var PROMISE = 'Promise';
                var TypeError = global.TypeError;
                var process = global.process;
                var versions = process && process.versions;
                var v8 = (versions && versions.v8) || '';
                var $Promise = global[PROMISE];
                var isNode = classof(process) == 'process';
                var empty = function () {
                    /* empty */
                };
                var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
                var newPromiseCapability = (newGenericPromiseCapability = newPromiseCapabilityModule.f);

                var USE_NATIVE = !!(function () {
                    try {
                        // correct subclassing with @@species support
                        var promise = $Promise.resolve(1);
                        var FakePromise = ((promise.constructor = {})[__webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('species')] = function (exec) {
                            exec(empty, empty);
                        });
                        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                        return (
                            (isNode || typeof PromiseRejectionEvent == 'function') &&
                            promise.then(empty) instanceof FakePromise &&
                            // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
                            // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
                            // we can't detect it synchronously, so just check versions
                            v8.indexOf('6.6') !== 0 &&
                            userAgent.indexOf('Chrome/66') === -1
                        );
                    } catch (e) {
                        /* empty */
                    }
                })();

                // helpers
                var isThenable = function (it) {
                    var then;
                    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
                };
                var notify = function (promise, isReject) {
                    if (promise._n) return;
                    promise._n = true;
                    var chain = promise._c;
                    microtask(function () {
                        var value = promise._v;
                        var ok = promise._s == 1;
                        var i = 0;
                        var run = function (reaction) {
                            var handler = ok ? reaction.ok : reaction.fail;
                            var resolve = reaction.resolve;
                            var reject = reaction.reject;
                            var domain = reaction.domain;
                            var result, then, exited;
                            try {
                                if (handler) {
                                    if (!ok) {
                                        if (promise._h == 2) onHandleUnhandled(promise);
                                        promise._h = 1;
                                    }
                                    if (handler === true) result = value;
                                    else {
                                        if (domain) domain.enter();
                                        result = handler(value); // may throw
                                        if (domain) {
                                            domain.exit();
                                            exited = true;
                                        }
                                    }
                                    if (result === reaction.promise) {
                                        reject(TypeError('Promise-chain cycle'));
                                    } else if ((then = isThenable(result))) {
                                        then.call(result, resolve, reject);
                                    } else resolve(result);
                                } else reject(value);
                            } catch (e) {
                                if (domain && !exited) domain.exit();
                                reject(e);
                            }
                        };
                        while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
                        promise._c = [];
                        promise._n = false;
                        if (isReject && !promise._h) onUnhandled(promise);
                    });
                };
                var onUnhandled = function (promise) {
                    task.call(global, function () {
                        var value = promise._v;
                        var unhandled = isUnhandled(promise);
                        var result, handler, console;
                        if (unhandled) {
                            result = perform(function () {
                                if (isNode) {
                                    process.emit('unhandledRejection', value, promise);
                                } else if ((handler = global.onunhandledrejection)) {
                                    handler({promise: promise, reason: value});
                                } else if ((console = global.console) && console.error) {
                                    console.error('Unhandled promise rejection', value);
                                }
                            });
                            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                        }
                        promise._a = undefined;
                        if (unhandled && result.e) throw result.v;
                    });
                };
                var isUnhandled = function (promise) {
                    return promise._h !== 1 && (promise._a || promise._c).length === 0;
                };
                var onHandleUnhandled = function (promise) {
                    task.call(global, function () {
                        var handler;
                        if (isNode) {
                            process.emit('rejectionHandled', promise);
                        } else if ((handler = global.onrejectionhandled)) {
                            handler({promise: promise, reason: promise._v});
                        }
                    });
                };
                var $reject = function (value) {
                    var promise = this;
                    if (promise._d) return;
                    promise._d = true;
                    promise = promise._w || promise; // unwrap
                    promise._v = value;
                    promise._s = 2;
                    if (!promise._a) promise._a = promise._c.slice();
                    notify(promise, true);
                };
                var $resolve = function (value) {
                    var promise = this;
                    var then;
                    if (promise._d) return;
                    promise._d = true;
                    promise = promise._w || promise; // unwrap
                    try {
                        if (promise === value) throw TypeError("Promise can't be resolved itself");
                        if ((then = isThenable(value))) {
                            microtask(function () {
                                var wrapper = {_w: promise, _d: false}; // wrap
                                try {
                                    then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                                } catch (e) {
                                    $reject.call(wrapper, e);
                                }
                            });
                        } else {
                            promise._v = value;
                            promise._s = 1;
                            notify(promise, false);
                        }
                    } catch (e) {
                        $reject.call({_w: promise, _d: false}, e); // wrap
                    }
                };

                // constructor polyfill
                if (!USE_NATIVE) {
                    // 25.4.3.1 Promise(executor)
                    $Promise = function Promise(executor) {
                        anInstance(this, $Promise, PROMISE, '_h');
                        aFunction(executor);
                        Internal.call(this);
                        try {
                            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                        } catch (err) {
                            $reject.call(this, err);
                        }
                    };
                    // eslint-disable-next-line no-unused-vars
                    Internal = function Promise(executor) {
                        this._c = []; // <- awaiting reactions
                        this._a = undefined; // <- checked in isUnhandled reactions
                        this._s = 0; // <- state
                        this._d = false; // <- done
                        this._v = undefined; // <- value
                        this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                        this._n = false; // <- notify
                    };
                    Internal.prototype = __webpack_require__(/*! ./_redefine-all */ './node_modules/core-js/modules/_redefine-all.js')($Promise.prototype, {
                        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                        then: function then(onFulfilled, onRejected) {
                            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                            reaction.fail = typeof onRejected == 'function' && onRejected;
                            reaction.domain = isNode ? process.domain : undefined;
                            this._c.push(reaction);
                            if (this._a) this._a.push(reaction);
                            if (this._s) notify(this, false);
                            return reaction.promise;
                        },
                        // 25.4.5.1 Promise.prototype.catch(onRejected)
                        catch: function (onRejected) {
                            return this.then(undefined, onRejected);
                        },
                    });
                    OwnPromiseCapability = function () {
                        var promise = new Internal();
                        this.promise = promise;
                        this.resolve = ctx($resolve, promise, 1);
                        this.reject = ctx($reject, promise, 1);
                    };
                    newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
                        return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
                    };
                }

                $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
                __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js')($Promise, PROMISE);
                __webpack_require__(/*! ./_set-species */ './node_modules/core-js/modules/_set-species.js')(PROMISE);
                Wrapper = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js')[PROMISE];

                // statics
                $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
                    // 25.4.4.5 Promise.reject(r)
                    reject: function reject(r) {
                        var capability = newPromiseCapability(this);
                        var $$reject = capability.reject;
                        $$reject(r);
                        return capability.promise;
                    },
                });
                $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
                    // 25.4.4.6 Promise.resolve(x)
                    resolve: function resolve(x) {
                        return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
                    },
                });
                $export(
                    $export.S +
                        $export.F *
                            !(
                                USE_NATIVE &&
                                __webpack_require__(/*! ./_iter-detect */ './node_modules/core-js/modules/_iter-detect.js')(function (iter) {
                                    $Promise.all(iter)['catch'](empty);
                                })
                            ),
                    PROMISE,
                    {
                        // 25.4.4.1 Promise.all(iterable)
                        all: function all(iterable) {
                            var C = this;
                            var capability = newPromiseCapability(C);
                            var resolve = capability.resolve;
                            var reject = capability.reject;
                            var result = perform(function () {
                                var values = [];
                                var index = 0;
                                var remaining = 1;
                                forOf(iterable, false, function (promise) {
                                    var $index = index++;
                                    var alreadyCalled = false;
                                    values.push(undefined);
                                    remaining++;
                                    C.resolve(promise).then(function (value) {
                                        if (alreadyCalled) return;
                                        alreadyCalled = true;
                                        values[$index] = value;
                                        --remaining || resolve(values);
                                    }, reject);
                                });
                                --remaining || resolve(values);
                            });
                            if (result.e) reject(result.v);
                            return capability.promise;
                        },
                        // 25.4.4.4 Promise.race(iterable)
                        race: function race(iterable) {
                            var C = this;
                            var capability = newPromiseCapability(C);
                            var reject = capability.reject;
                            var result = perform(function () {
                                forOf(iterable, false, function (promise) {
                                    C.resolve(promise).then(capability.resolve, reject);
                                });
                            });
                            if (result.e) reject(result.v);
                            return capability.promise;
                        },
                    }
                );

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.reflect.get.js':
            /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 26.1.6 Reflect.get(target, propertyKey [, receiver])
                var gOPD = __webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js');
                var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');
                var has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');

                function get(target, propertyKey /* , receiver */) {
                    var receiver = arguments.length < 3 ? target : arguments[2];
                    var desc, proto;
                    if (anObject(target) === receiver) return target[propertyKey];
                    if ((desc = gOPD.f(target, propertyKey))) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
                    if (isObject((proto = getPrototypeOf(target)))) return get(proto, propertyKey, receiver);
                }

                $export($export.S, 'Reflect', {get: get});

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.regexp.exec.js':
            /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var regexpExec = __webpack_require__(/*! ./_regexp-exec */ './node_modules/core-js/modules/_regexp-exec.js');
                __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js')(
                    {
                        target: 'RegExp',
                        proto: true,
                        forced: regexpExec !== /./.exec,
                    },
                    {
                        exec: regexpExec,
                    }
                );

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.regexp.flags.js':
            /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // 21.2.5.3 get RegExp.prototype.flags()
                if (__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') && /./g.flags != 'g')
                    __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f(RegExp.prototype, 'flags', {
                        configurable: true,
                        get: __webpack_require__(/*! ./_flags */ './node_modules/core-js/modules/_flags.js'),
                    });

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.regexp.replace.js':
            /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
                var toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
                var toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
                var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ './node_modules/core-js/modules/_advance-string-index.js');
                var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ './node_modules/core-js/modules/_regexp-exec-abstract.js');
                var max = Math.max;
                var min = Math.min;
                var floor = Math.floor;
                var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
                var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

                var maybeToString = function (it) {
                    return it === undefined ? it : String(it);
                };

                // @@replace logic
                __webpack_require__(/*! ./_fix-re-wks */ './node_modules/core-js/modules/_fix-re-wks.js')('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
                    return [
                        // `String.prototype.replace` method
                        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                        function replace(searchValue, replaceValue) {
                            var O = defined(this);
                            var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                            return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
                        },
                        // `RegExp.prototype[@@replace]` method
                        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                        function (regexp, replaceValue) {
                            var res = maybeCallNative($replace, regexp, this, replaceValue);
                            if (res.done) return res.value;

                            var rx = anObject(regexp);
                            var S = String(this);
                            var functionalReplace = typeof replaceValue === 'function';
                            if (!functionalReplace) replaceValue = String(replaceValue);
                            var global = rx.global;
                            if (global) {
                                var fullUnicode = rx.unicode;
                                rx.lastIndex = 0;
                            }
                            var results = [];
                            while (true) {
                                var result = regExpExec(rx, S);
                                if (result === null) break;
                                results.push(result);
                                if (!global) break;
                                var matchStr = String(result[0]);
                                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                            }
                            var accumulatedResult = '';
                            var nextSourcePosition = 0;
                            for (var i = 0; i < results.length; i++) {
                                result = results[i];
                                var matched = String(result[0]);
                                var position = max(min(toInteger(result.index), S.length), 0);
                                var captures = [];
                                // NOTE: This is equivalent to
                                //   captures = result.slice(1).map(maybeToString)
                                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                                for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
                                var namedCaptures = result.groups;
                                if (functionalReplace) {
                                    var replacerArgs = [matched].concat(captures, position, S);
                                    if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                                    var replacement = String(replaceValue.apply(undefined, replacerArgs));
                                } else {
                                    replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                                }
                                if (position >= nextSourcePosition) {
                                    accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                                    nextSourcePosition = position + matched.length;
                                }
                            }
                            return accumulatedResult + S.slice(nextSourcePosition);
                        },
                    ];

                    // https://tc39.github.io/ecma262/#sec-getsubstitution
                    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
                        var tailPos = position + matched.length;
                        var m = captures.length;
                        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                        if (namedCaptures !== undefined) {
                            namedCaptures = toObject(namedCaptures);
                            symbols = SUBSTITUTION_SYMBOLS;
                        }
                        return $replace.call(replacement, symbols, function (match, ch) {
                            var capture;
                            switch (ch.charAt(0)) {
                                case '$':
                                    return '$';
                                case '&':
                                    return matched;
                                case '`':
                                    return str.slice(0, position);
                                case "'":
                                    return str.slice(tailPos);
                                case '<':
                                    capture = namedCaptures[ch.slice(1, -1)];
                                    break;
                                default:
                                    // \d\d?
                                    var n = +ch;
                                    if (n === 0) return match;
                                    if (n > m) {
                                        var f = floor(n / 10);
                                        if (f === 0) return match;
                                        if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                        return match;
                                    }
                                    capture = captures[n - 1];
                            }
                            return capture === undefined ? '' : capture;
                        });
                    }
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.regexp.search.js':
            /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var sameValue = __webpack_require__(/*! ./_same-value */ './node_modules/core-js/modules/_same-value.js');
                var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ './node_modules/core-js/modules/_regexp-exec-abstract.js');

                // @@search logic
                __webpack_require__(/*! ./_fix-re-wks */ './node_modules/core-js/modules/_fix-re-wks.js')('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
                    return [
                        // `String.prototype.search` method
                        // https://tc39.github.io/ecma262/#sec-string.prototype.search
                        function search(regexp) {
                            var O = defined(this);
                            var fn = regexp == undefined ? undefined : regexp[SEARCH];
                            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
                        },
                        // `RegExp.prototype[@@search]` method
                        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
                        function (regexp) {
                            var res = maybeCallNative($search, regexp, this);
                            if (res.done) return res.value;
                            var rx = anObject(regexp);
                            var S = String(this);
                            var previousLastIndex = rx.lastIndex;
                            if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
                            var result = regExpExec(rx, S);
                            if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
                            return result === null ? -1 : result.index;
                        },
                    ];
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.regexp.split.js':
            /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var isRegExp = __webpack_require__(/*! ./_is-regexp */ './node_modules/core-js/modules/_is-regexp.js');
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ './node_modules/core-js/modules/_species-constructor.js');
                var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ './node_modules/core-js/modules/_advance-string-index.js');
                var toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
                var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ './node_modules/core-js/modules/_regexp-exec-abstract.js');
                var regexpExec = __webpack_require__(/*! ./_regexp-exec */ './node_modules/core-js/modules/_regexp-exec.js');
                var fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
                var $min = Math.min;
                var $push = [].push;
                var $SPLIT = 'split';
                var LENGTH = 'length';
                var LAST_INDEX = 'lastIndex';
                var MAX_UINT32 = 0xffffffff;

                // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
                var SUPPORTS_Y = !fails(function () {
                    RegExp(MAX_UINT32, 'y');
                });

                // @@split logic
                __webpack_require__(/*! ./_fix-re-wks */ './node_modules/core-js/modules/_fix-re-wks.js')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
                    var internalSplit;
                    if (
                        'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
                        'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
                        'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
                        '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
                        '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
                        ''[$SPLIT](/.?/)[LENGTH]
                    ) {
                        // based on es5-shim implementation, need to rework it
                        internalSplit = function (separator, limit) {
                            var string = String(this);
                            if (separator === undefined && limit === 0) return [];
                            // If `separator` is not a regex, use native split
                            if (!isRegExp(separator)) return $split.call(string, separator, limit);
                            var output = [];
                            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
                            var lastLastIndex = 0;
                            var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
                            // Make `global` and avoid `lastIndex` issues by working with a copy
                            var separatorCopy = new RegExp(separator.source, flags + 'g');
                            var match, lastIndex, lastLength;
                            while ((match = regexpExec.call(separatorCopy, string))) {
                                lastIndex = separatorCopy[LAST_INDEX];
                                if (lastIndex > lastLastIndex) {
                                    output.push(string.slice(lastLastIndex, match.index));
                                    if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                                    lastLength = match[0][LENGTH];
                                    lastLastIndex = lastIndex;
                                    if (output[LENGTH] >= splitLimit) break;
                                }
                                if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                            }
                            if (lastLastIndex === string[LENGTH]) {
                                if (lastLength || !separatorCopy.test('')) output.push('');
                            } else output.push(string.slice(lastLastIndex));
                            return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                        };
                        // Chakra, V8
                    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
                        internalSplit = function (separator, limit) {
                            return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
                        };
                    } else {
                        internalSplit = $split;
                    }

                    return [
                        // `String.prototype.split` method
                        // https://tc39.github.io/ecma262/#sec-string.prototype.split
                        function split(separator, limit) {
                            var O = defined(this);
                            var splitter = separator == undefined ? undefined : separator[SPLIT];
                            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
                        },
                        // `RegExp.prototype[@@split]` method
                        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                        //
                        // NOTE: This cannot be properly polyfilled in engines that don't support
                        // the 'y' flag.
                        function (regexp, limit) {
                            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
                            if (res.done) return res.value;

                            var rx = anObject(regexp);
                            var S = String(this);
                            var C = speciesConstructor(rx, RegExp);

                            var unicodeMatching = rx.unicode;
                            var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');

                            // ^(? + rx + ) is needed, in combination with some S slicing, to
                            // simulate the 'y' flag.
                            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                            if (lim === 0) return [];
                            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                            var p = 0;
                            var q = 0;
                            var A = [];
                            while (q < S.length) {
                                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                                var e;
                                if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                                    q = advanceStringIndex(S, q, unicodeMatching);
                                } else {
                                    A.push(S.slice(p, q));
                                    if (A.length === lim) return A;
                                    for (var i = 1; i <= z.length - 1; i++) {
                                        A.push(z[i]);
                                        if (A.length === lim) return A;
                                    }
                                    q = p = e;
                                }
                            }
                            A.push(S.slice(p));
                            return A;
                        },
                    ];
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.regexp.to-string.js':
            /*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                __webpack_require__(/*! ./es6.regexp.flags */ './node_modules/core-js/modules/es6.regexp.flags.js');
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var $flags = __webpack_require__(/*! ./_flags */ './node_modules/core-js/modules/_flags.js');
                var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
                var TO_STRING = 'toString';
                var $toString = /./[TO_STRING];

                var define = function (fn) {
                    __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js')(RegExp.prototype, TO_STRING, fn, true);
                };

                // 21.2.5.14 RegExp.prototype.toString()
                if (
                    __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(function () {
                        return $toString.call({source: 'a', flags: 'b'}) != '/a/b';
                    })
                ) {
                    define(function toString() {
                        var R = anObject(this);
                        return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
                    });
                    // FF44- RegExp#toString has a wrong name
                } else if ($toString.name != TO_STRING) {
                    define(function toString() {
                        return $toString.call(this);
                    });
                }

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.string.includes.js':
            /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';
                // 21.1.3.7 String.prototype.includes(searchString, position = 0)

                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
                var context = __webpack_require__(/*! ./_string-context */ './node_modules/core-js/modules/_string-context.js');
                var INCLUDES = 'includes';

                $export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ './node_modules/core-js/modules/_fails-is-regexp.js')(INCLUDES), 'String', {
                    includes: function includes(searchString /* , position = 0 */) {
                        return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
                    },
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.string.repeat.js':
            /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

                $export($export.P, 'String', {
                    // 21.1.3.13 String.prototype.repeat(count)
                    repeat: __webpack_require__(/*! ./_string-repeat */ './node_modules/core-js/modules/_string-repeat.js'),
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/es6.symbol.js':
            /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                // ECMAScript 6 symbols shim
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
                var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
                var redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
                var META = __webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js').KEY;
                var $fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
                var shared = __webpack_require__(/*! ./_shared */ './node_modules/core-js/modules/_shared.js');
                var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js');
                var uid = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js');
                var wks = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');
                var wksExt = __webpack_require__(/*! ./_wks-ext */ './node_modules/core-js/modules/_wks-ext.js');
                var wksDefine = __webpack_require__(/*! ./_wks-define */ './node_modules/core-js/modules/_wks-define.js');
                var enumKeys = __webpack_require__(/*! ./_enum-keys */ './node_modules/core-js/modules/_enum-keys.js');
                var isArray = __webpack_require__(/*! ./_is-array */ './node_modules/core-js/modules/_is-array.js');
                var anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
                var isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
                var toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
                var toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
                var toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
                var createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
                var _create = __webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js');
                var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ './node_modules/core-js/modules/_object-gopn-ext.js');
                var $GOPD = __webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js');
                var $GOPS = __webpack_require__(/*! ./_object-gops */ './node_modules/core-js/modules/_object-gops.js');
                var $DP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
                var $keys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
                var gOPD = $GOPD.f;
                var dP = $DP.f;
                var gOPN = gOPNExt.f;
                var $Symbol = global.Symbol;
                var $JSON = global.JSON;
                var _stringify = $JSON && $JSON.stringify;
                var PROTOTYPE = 'prototype';
                var HIDDEN = wks('_hidden');
                var TO_PRIMITIVE = wks('toPrimitive');
                var isEnum = {}.propertyIsEnumerable;
                var SymbolRegistry = shared('symbol-registry');
                var AllSymbols = shared('symbols');
                var OPSymbols = shared('op-symbols');
                var ObjectProto = Object[PROTOTYPE];
                var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
                var QObject = global.QObject;
                // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
                var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

                // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
                var setSymbolDesc =
                    DESCRIPTORS &&
                    $fails(function () {
                        return (
                            _create(
                                dP({}, 'a', {
                                    get: function () {
                                        return dP(this, 'a', {value: 7}).a;
                                    },
                                })
                            ).a != 7
                        );
                    })
                        ? function (it, key, D) {
                              var protoDesc = gOPD(ObjectProto, key);
                              if (protoDesc) delete ObjectProto[key];
                              dP(it, key, D);
                              if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
                          }
                        : dP;

                var wrap = function (tag) {
                    var sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]));
                    sym._k = tag;
                    return sym;
                };

                var isSymbol =
                    USE_NATIVE && typeof $Symbol.iterator == 'symbol'
                        ? function (it) {
                              return typeof it == 'symbol';
                          }
                        : function (it) {
                              return it instanceof $Symbol;
                          };

                var $defineProperty = function defineProperty(it, key, D) {
                    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
                    anObject(it);
                    key = toPrimitive(key, true);
                    anObject(D);
                    if (has(AllSymbols, key)) {
                        if (!D.enumerable) {
                            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                            it[HIDDEN][key] = true;
                        } else {
                            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                            D = _create(D, {enumerable: createDesc(0, false)});
                        }
                        return setSymbolDesc(it, key, D);
                    }
                    return dP(it, key, D);
                };
                var $defineProperties = function defineProperties(it, P) {
                    anObject(it);
                    var keys = enumKeys((P = toIObject(P)));
                    var i = 0;
                    var l = keys.length;
                    var key;
                    while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
                    return it;
                };
                var $create = function create(it, P) {
                    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
                };
                var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                    var E = isEnum.call(this, (key = toPrimitive(key, true)));
                    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
                    return E || !has(this, key) || !has(AllSymbols, key) || (has(this, HIDDEN) && this[HIDDEN][key]) ? E : true;
                };
                var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                    it = toIObject(it);
                    key = toPrimitive(key, true);
                    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
                    var D = gOPD(it, key);
                    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                    return D;
                };
                var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                    var names = gOPN(toIObject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (!has(AllSymbols, (key = names[i++])) && key != HIDDEN && key != META) result.push(key);
                    }
                    return result;
                };
                var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                    var IS_OP = it === ObjectProto;
                    var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (has(AllSymbols, (key = names[i++])) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
                    }
                    return result;
                };

                // 19.4.1.1 Symbol([description])
                if (!USE_NATIVE) {
                    $Symbol = function Symbol() {
                        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                        var $set = function (value) {
                            if (this === ObjectProto) $set.call(OPSymbols, value);
                            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                            setSymbolDesc(this, tag, createDesc(1, value));
                        };
                        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
                        return wrap(tag);
                    };
                    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                        return this._k;
                    });

                    $GOPD.f = $getOwnPropertyDescriptor;
                    $DP.f = $defineProperty;
                    __webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js').f = gOPNExt.f = $getOwnPropertyNames;
                    __webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js').f = $propertyIsEnumerable;
                    $GOPS.f = $getOwnPropertySymbols;

                    if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js')) {
                        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                    }

                    wksExt.f = function (name) {
                        return wrap(wks(name));
                    };
                }

                $export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

                for (
                    var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                        'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','),
                        j = 0;
                    es6Symbols.length > j;

                )
                    wks(es6Symbols[j++]);

                for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) wksDefine(wellKnownSymbols[k++]);

                $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
                    // 19.4.2.1 Symbol.for(key)
                    for: function (key) {
                        return has(SymbolRegistry, (key += '')) ? SymbolRegistry[key] : (SymbolRegistry[key] = $Symbol(key));
                    },
                    // 19.4.2.5 Symbol.keyFor(sym)
                    keyFor: function keyFor(sym) {
                        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                        for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
                    },
                    useSetter: function () {
                        setter = true;
                    },
                    useSimple: function () {
                        setter = false;
                    },
                });

                $export($export.S + $export.F * !USE_NATIVE, 'Object', {
                    // 19.1.2.2 Object.create(O [, Properties])
                    create: $create,
                    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                    defineProperty: $defineProperty,
                    // 19.1.2.3 Object.defineProperties(O, Properties)
                    defineProperties: $defineProperties,
                    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                    // 19.1.2.7 Object.getOwnPropertyNames(O)
                    getOwnPropertyNames: $getOwnPropertyNames,
                    // 19.1.2.8 Object.getOwnPropertySymbols(O)
                    getOwnPropertySymbols: $getOwnPropertySymbols,
                });

                // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
                // https://bugs.chromium.org/p/v8/issues/detail?id=3443
                var FAILS_ON_PRIMITIVES = $fails(function () {
                    $GOPS.f(1);
                });

                $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
                    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
                        return $GOPS.f(toObject(it));
                    },
                });

                // 24.3.2 JSON.stringify(value [, replacer [, space]])
                $JSON &&
                    $export(
                        $export.S +
                            $export.F *
                                (!USE_NATIVE ||
                                    $fails(function () {
                                        var S = $Symbol();
                                        // MS Edge converts symbol values to JSON as {}
                                        // WebKit converts symbol values to JSON as null
                                        // V8 throws on boxed symbols
                                        return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
                                    })),
                        'JSON',
                        {
                            stringify: function stringify(it) {
                                var args = [it];
                                var i = 1;
                                var replacer, $replacer;
                                while (arguments.length > i) args.push(arguments[i++]);
                                $replacer = replacer = args[1];
                                if ((!isObject(replacer) && it === undefined) || isSymbol(it)) return; // IE8 returns string on undefined
                                if (!isArray(replacer))
                                    replacer = function (key, value) {
                                        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                                        if (!isSymbol(value)) return value;
                                    };
                                args[1] = replacer;
                                return _stringify.apply($JSON, args);
                            },
                        }
                    );

                // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
                $Symbol[PROTOTYPE][TO_PRIMITIVE] ||
                    __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
                // 19.4.3.5 Symbol.prototype[@@toStringTag]
                setToStringTag($Symbol, 'Symbol');
                // 20.2.1.9 Math[@@toStringTag]
                setToStringTag(Math, 'Math', true);
                // 24.3.3 JSON[@@toStringTag]
                setToStringTag(global.JSON, 'JSON', true);

                /***/
            },

        /***/ './node_modules/core-js/modules/es7.array.includes.js':
            /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                // https://github.com/tc39/Array.prototype.includes
                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
                var $includes = __webpack_require__(/*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js')(true);

                $export($export.P, 'Array', {
                    includes: function includes(el /* , fromIndex = 0 */) {
                        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
                    },
                });

                __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js')('includes');

                /***/
            },

        /***/ './node_modules/core-js/modules/es7.object.entries.js':
            /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // https://github.com/tc39/proposal-object-values-entries
                var $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
                var $entries = __webpack_require__(/*! ./_object-to-array */ './node_modules/core-js/modules/_object-to-array.js')(true);

                $export($export.S, 'Object', {
                    entries: function entries(it) {
                        return $entries(it);
                    },
                });

                /***/
            },

        /***/ './node_modules/core-js/modules/es7.symbol.async-iterator.js':
            /*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                __webpack_require__(/*! ./_wks-define */ './node_modules/core-js/modules/_wks-define.js')('asyncIterator');

                /***/
            },

        /***/ './node_modules/core-js/modules/web.dom.iterable.js':
            /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var $iterators = __webpack_require__(/*! ./es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js');
                var getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
                var redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
                var global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
                var hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
                var Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
                var wks = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');
                var ITERATOR = wks('iterator');
                var TO_STRING_TAG = wks('toStringTag');
                var ArrayValues = Iterators.Array;

                var DOMIterables = {
                    CSSRuleList: true, // TODO: Not spec compliant, should be false.
                    CSSStyleDeclaration: false,
                    CSSValueList: false,
                    ClientRectList: false,
                    DOMRectList: false,
                    DOMStringList: false,
                    DOMTokenList: true,
                    DataTransferItemList: false,
                    FileList: false,
                    HTMLAllCollection: false,
                    HTMLCollection: false,
                    HTMLFormElement: false,
                    HTMLSelectElement: false,
                    MediaList: true, // TODO: Not spec compliant, should be false.
                    MimeTypeArray: false,
                    NamedNodeMap: false,
                    NodeList: true,
                    PaintRequestList: false,
                    Plugin: false,
                    PluginArray: false,
                    SVGLengthList: false,
                    SVGNumberList: false,
                    SVGPathSegList: false,
                    SVGPointList: false,
                    SVGStringList: false,
                    SVGTransformList: false,
                    SourceBufferList: false,
                    StyleSheetList: true, // TODO: Not spec compliant, should be false.
                    TextTrackCueList: false,
                    TextTrackList: false,
                    TouchList: false,
                };

                for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
                    var NAME = collections[i];
                    var explicit = DOMIterables[NAME];
                    var Collection = global[NAME];
                    var proto = Collection && Collection.prototype;
                    var key;
                    if (proto) {
                        if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                        if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                        Iterators[NAME] = ArrayValues;
                        if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
                    }
                }

                /***/
            },

        /***/ './node_modules/dayjs/dayjs.min.js':
            /*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                !(function (t, n) {
                    true ? (module.exports = n()) : undefined;
                })(this, function () {
                    'use strict';
                    var t = 'millisecond',
                        n = 'second',
                        e = 'minute',
                        r = 'hour',
                        i = 'day',
                        s = 'week',
                        u = 'month',
                        o = 'quarter',
                        a = 'year',
                        h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
                        f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        c = function (t, n, e) {
                            var r = String(t);
                            return !r || r.length >= n ? t : '' + Array(n + 1 - r.length).join(e) + t;
                        },
                        d = {
                            s: c,
                            z: function (t) {
                                var n = -t.utcOffset(),
                                    e = Math.abs(n),
                                    r = Math.floor(e / 60),
                                    i = e % 60;
                                return (n <= 0 ? '+' : '-') + c(r, 2, '0') + ':' + c(i, 2, '0');
                            },
                            m: function (t, n) {
                                var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                    r = t.clone().add(e, u),
                                    i = n - r < 0,
                                    s = t.clone().add(e + (i ? -1 : 1), u);
                                return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);
                            },
                            a: function (t) {
                                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                            },
                            p: function (h) {
                                return (
                                    {M: u, y: a, w: s, d: i, D: 'date', h: r, m: e, s: n, ms: t, Q: o}[h] ||
                                    String(h || '')
                                        .toLowerCase()
                                        .replace(/s$/, '')
                                );
                            },
                            u: function (t) {
                                return void 0 === t;
                            },
                        },
                        $ = {
                            name: 'en',
                            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                        },
                        l = 'en',
                        m = {};
                    m[l] = $;
                    var y = function (t) {
                            return t instanceof v;
                        },
                        M = function (t, n, e) {
                            var r;
                            if (!t) return l;
                            if ('string' == typeof t) m[t] && (r = t), n && ((m[t] = n), (r = t));
                            else {
                                var i = t.name;
                                (m[i] = t), (r = i);
                            }
                            return !e && r && (l = r), r || (!e && l);
                        },
                        g = function (t, n, e) {
                            if (y(t)) return t.clone();
                            var r = n ? ('string' == typeof n ? {format: n, pl: e} : n) : {};
                            return (r.date = t), new v(r);
                        },
                        D = d;
                    (D.l = M),
                        (D.i = y),
                        (D.w = function (t, n) {
                            return g(t, {locale: n.$L, utc: n.$u, $offset: n.$offset});
                        });
                    var v = (function () {
                        function c(t) {
                            (this.$L = this.$L || M(t.locale, null, !0)), this.parse(t);
                        }
                        var d = c.prototype;
                        return (
                            (d.parse = function (t) {
                                (this.$d = (function (t) {
                                    var n = t.date,
                                        e = t.utc;
                                    if (null === n) return new Date(NaN);
                                    if (D.u(n)) return new Date();
                                    if (n instanceof Date) return new Date(n);
                                    if ('string' == typeof n && !/Z$/i.test(n)) {
                                        var r = n.match(h);
                                        if (r)
                                            return e
                                                ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0))
                                                : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
                                    }
                                    return new Date(n);
                                })(t)),
                                    this.init();
                            }),
                            (d.init = function () {
                                var t = this.$d;
                                (this.$y = t.getFullYear()),
                                    (this.$M = t.getMonth()),
                                    (this.$D = t.getDate()),
                                    (this.$W = t.getDay()),
                                    (this.$H = t.getHours()),
                                    (this.$m = t.getMinutes()),
                                    (this.$s = t.getSeconds()),
                                    (this.$ms = t.getMilliseconds());
                            }),
                            (d.$utils = function () {
                                return D;
                            }),
                            (d.isValid = function () {
                                return !('Invalid Date' === this.$d.toString());
                            }),
                            (d.isSame = function (t, n) {
                                var e = g(t);
                                return this.startOf(n) <= e && e <= this.endOf(n);
                            }),
                            (d.isAfter = function (t, n) {
                                return g(t) < this.startOf(n);
                            }),
                            (d.isBefore = function (t, n) {
                                return this.endOf(n) < g(t);
                            }),
                            (d.$g = function (t, n, e) {
                                return D.u(t) ? this[n] : this.set(e, t);
                            }),
                            (d.year = function (t) {
                                return this.$g(t, '$y', a);
                            }),
                            (d.month = function (t) {
                                return this.$g(t, '$M', u);
                            }),
                            (d.day = function (t) {
                                return this.$g(t, '$W', i);
                            }),
                            (d.date = function (t) {
                                return this.$g(t, '$D', 'date');
                            }),
                            (d.hour = function (t) {
                                return this.$g(t, '$H', r);
                            }),
                            (d.minute = function (t) {
                                return this.$g(t, '$m', e);
                            }),
                            (d.second = function (t) {
                                return this.$g(t, '$s', n);
                            }),
                            (d.millisecond = function (n) {
                                return this.$g(n, '$ms', t);
                            }),
                            (d.unix = function () {
                                return Math.floor(this.valueOf() / 1e3);
                            }),
                            (d.valueOf = function () {
                                return this.$d.getTime();
                            }),
                            (d.startOf = function (t, o) {
                                var h = this,
                                    f = !!D.u(o) || o,
                                    c = D.p(t),
                                    d = function (t, n) {
                                        var e = D.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h);
                                        return f ? e : e.endOf(i);
                                    },
                                    $ = function (t, n) {
                                        return D.w(h.toDate()[t].apply(h.toDate('s'), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h);
                                    },
                                    l = this.$W,
                                    m = this.$M,
                                    y = this.$D,
                                    M = 'set' + (this.$u ? 'UTC' : '');
                                switch (c) {
                                    case a:
                                        return f ? d(1, 0) : d(31, 11);
                                    case u:
                                        return f ? d(1, m) : d(0, m + 1);
                                    case s:
                                        var g = this.$locale().weekStart || 0,
                                            v = (l < g ? l + 7 : l) - g;
                                        return d(f ? y - v : y + (6 - v), m);
                                    case i:
                                    case 'date':
                                        return $(M + 'Hours', 0);
                                    case r:
                                        return $(M + 'Minutes', 1);
                                    case e:
                                        return $(M + 'Seconds', 2);
                                    case n:
                                        return $(M + 'Milliseconds', 3);
                                    default:
                                        return this.clone();
                                }
                            }),
                            (d.endOf = function (t) {
                                return this.startOf(t, !1);
                            }),
                            (d.$set = function (s, o) {
                                var h,
                                    f = D.p(s),
                                    c = 'set' + (this.$u ? 'UTC' : ''),
                                    d = ((h = {}),
                                    (h[i] = c + 'Date'),
                                    (h.date = c + 'Date'),
                                    (h[u] = c + 'Month'),
                                    (h[a] = c + 'FullYear'),
                                    (h[r] = c + 'Hours'),
                                    (h[e] = c + 'Minutes'),
                                    (h[n] = c + 'Seconds'),
                                    (h[t] = c + 'Milliseconds'),
                                    h)[f],
                                    $ = f === i ? this.$D + (o - this.$W) : o;
                                if (f === u || f === a) {
                                    var l = this.clone().set('date', 1);
                                    l.$d[d]($), l.init(), (this.$d = l.set('date', Math.min(this.$D, l.daysInMonth())).toDate());
                                } else d && this.$d[d]($);
                                return this.init(), this;
                            }),
                            (d.set = function (t, n) {
                                return this.clone().$set(t, n);
                            }),
                            (d.get = function (t) {
                                return this[D.p(t)]();
                            }),
                            (d.add = function (t, o) {
                                var h,
                                    f = this;
                                t = Number(t);
                                var c = D.p(o),
                                    d = function (n) {
                                        var e = g(f);
                                        return D.w(e.date(e.date() + Math.round(n * t)), f);
                                    };
                                if (c === u) return this.set(u, this.$M + t);
                                if (c === a) return this.set(a, this.$y + t);
                                if (c === i) return d(1);
                                if (c === s) return d(7);
                                var $ = ((h = {}), (h[e] = 6e4), (h[r] = 36e5), (h[n] = 1e3), h)[c] || 1,
                                    l = this.$d.getTime() + t * $;
                                return D.w(l, this);
                            }),
                            (d.subtract = function (t, n) {
                                return this.add(-1 * t, n);
                            }),
                            (d.format = function (t) {
                                var n = this;
                                if (!this.isValid()) return 'Invalid Date';
                                var e = t || 'YYYY-MM-DDTHH:mm:ssZ',
                                    r = D.z(this),
                                    i = this.$locale(),
                                    s = this.$H,
                                    u = this.$m,
                                    o = this.$M,
                                    a = i.weekdays,
                                    h = i.months,
                                    c = function (t, r, i, s) {
                                        return (t && (t[r] || t(n, e))) || i[r].substr(0, s);
                                    },
                                    d = function (t) {
                                        return D.s(s % 12 || 12, t, '0');
                                    },
                                    $ =
                                        i.meridiem ||
                                        function (t, n, e) {
                                            var r = t < 12 ? 'AM' : 'PM';
                                            return e ? r.toLowerCase() : r;
                                        },
                                    l = {
                                        YY: String(this.$y).slice(-2),
                                        YYYY: this.$y,
                                        M: o + 1,
                                        MM: D.s(o + 1, 2, '0'),
                                        MMM: c(i.monthsShort, o, h, 3),
                                        MMMM: h[o] || h(this, e),
                                        D: this.$D,
                                        DD: D.s(this.$D, 2, '0'),
                                        d: String(this.$W),
                                        dd: c(i.weekdaysMin, this.$W, a, 2),
                                        ddd: c(i.weekdaysShort, this.$W, a, 3),
                                        dddd: a[this.$W],
                                        H: String(s),
                                        HH: D.s(s, 2, '0'),
                                        h: d(1),
                                        hh: d(2),
                                        a: $(s, u, !0),
                                        A: $(s, u, !1),
                                        m: String(u),
                                        mm: D.s(u, 2, '0'),
                                        s: String(this.$s),
                                        ss: D.s(this.$s, 2, '0'),
                                        SSS: D.s(this.$ms, 3, '0'),
                                        Z: r,
                                    };
                                return e.replace(f, function (t, n) {
                                    return n || l[t] || r.replace(':', '');
                                });
                            }),
                            (d.utcOffset = function () {
                                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                            }),
                            (d.diff = function (t, h, f) {
                                var c,
                                    d = D.p(h),
                                    $ = g(t),
                                    l = 6e4 * ($.utcOffset() - this.utcOffset()),
                                    m = this - $,
                                    y = D.m(this, $);
                                return (
                                    (y =
                                        ((c = {}),
                                        (c[a] = y / 12),
                                        (c[u] = y),
                                        (c[o] = y / 3),
                                        (c[s] = (m - l) / 6048e5),
                                        (c[i] = (m - l) / 864e5),
                                        (c[r] = m / 36e5),
                                        (c[e] = m / 6e4),
                                        (c[n] = m / 1e3),
                                        c)[d] || m),
                                    f ? y : D.a(y)
                                );
                            }),
                            (d.daysInMonth = function () {
                                return this.endOf(u).$D;
                            }),
                            (d.$locale = function () {
                                return m[this.$L];
                            }),
                            (d.locale = function (t, n) {
                                if (!t) return this.$L;
                                var e = this.clone(),
                                    r = M(t, n, !0);
                                return r && (e.$L = r), e;
                            }),
                            (d.clone = function () {
                                return D.w(this.$d, this);
                            }),
                            (d.toDate = function () {
                                return new Date(this.valueOf());
                            }),
                            (d.toJSON = function () {
                                return this.isValid() ? this.toISOString() : null;
                            }),
                            (d.toISOString = function () {
                                return this.$d.toISOString();
                            }),
                            (d.toString = function () {
                                return this.$d.toUTCString();
                            }),
                            c
                        );
                    })();
                    return (
                        (g.prototype = v.prototype),
                        (g.extend = function (t, n) {
                            return t(n, v, g), g;
                        }),
                        (g.locale = M),
                        (g.isDayjs = y),
                        (g.unix = function (t) {
                            return g(1e3 * t);
                        }),
                        (g.en = m[l]),
                        (g.Ls = m),
                        g
                    );
                });

                /***/
            },

        /***/ './node_modules/dayjs/plugin/customParseFormat.js':
            /*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                !(function (t, n) {
                    true ? (module.exports = n()) : undefined;
                })(this, function () {
                    'use strict';
                    var t,
                        n = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                        e = /\d\d/,
                        o = /\d\d?/,
                        r = /\d*[^\s\d-:/.()]+/;
                    var s = function (t) {
                            return function (n) {
                                this[t] = +n;
                            };
                        },
                        i = [
                            /[+-]\d\d:?\d\d/,
                            function (t) {
                                var n, e;
                                (this.zone || (this.zone = {})).offset = ((n = t.match(/([+-]|\d\d)/g)), 0 === (e = 60 * n[1] + +n[2]) ? 0 : '+' === n[0] ? -e : e);
                            },
                        ],
                        a = {
                            A: [
                                /[AP]M/,
                                function (t) {
                                    this.afternoon = 'PM' === t;
                                },
                            ],
                            a: [
                                /[ap]m/,
                                function (t) {
                                    this.afternoon = 'pm' === t;
                                },
                            ],
                            S: [
                                /\d/,
                                function (t) {
                                    this.milliseconds = 100 * +t;
                                },
                            ],
                            SS: [
                                e,
                                function (t) {
                                    this.milliseconds = 10 * +t;
                                },
                            ],
                            SSS: [
                                /\d{3}/,
                                function (t) {
                                    this.milliseconds = +t;
                                },
                            ],
                            s: [o, s('seconds')],
                            ss: [o, s('seconds')],
                            m: [o, s('minutes')],
                            mm: [o, s('minutes')],
                            H: [o, s('hours')],
                            h: [o, s('hours')],
                            HH: [o, s('hours')],
                            hh: [o, s('hours')],
                            D: [o, s('day')],
                            DD: [e, s('day')],
                            Do: [
                                r,
                                function (n) {
                                    var e = t.ordinal,
                                        o = n.match(/\d+/);
                                    if (((this.day = o[0]), e)) for (var r = 1; r <= 31; r += 1) e(r).replace(/\[|\]/g, '') === n && (this.day = r);
                                },
                            ],
                            M: [o, s('month')],
                            MM: [e, s('month')],
                            MMM: [
                                r,
                                function (n) {
                                    var e = t,
                                        o = e.months,
                                        r = e.monthsShort,
                                        s = r
                                            ? r.findIndex(function (t) {
                                                  return t === n;
                                              })
                                            : o.findIndex(function (t) {
                                                  return t.substr(0, 3) === n;
                                              });
                                    if (s < 0) throw new Error();
                                    this.month = s + 1;
                                },
                            ],
                            MMMM: [
                                r,
                                function (n) {
                                    var e = t.months.indexOf(n);
                                    if (e < 0) throw new Error();
                                    this.month = e + 1;
                                },
                            ],
                            Y: [/[+-]?\d+/, s('year')],
                            YY: [
                                e,
                                function (t) {
                                    (t = +t), (this.year = t + (t > 68 ? 1900 : 2e3));
                                },
                            ],
                            YYYY: [/\d{4}/, s('year')],
                            Z: i,
                            ZZ: i,
                        };
                    var u = function (t, e, o) {
                        try {
                            var r = (function (t) {
                                    for (var e = t.match(n), o = e.length, r = 0; r < o; r += 1) {
                                        var s = e[r],
                                            i = a[s],
                                            u = i && i[0],
                                            f = i && i[1];
                                        e[r] = f ? {regex: u, parser: f} : s.replace(/^\[|\]$/g, '');
                                    }
                                    return function (t) {
                                        for (var n = {}, r = 0, s = 0; r < o; r += 1) {
                                            var i = e[r];
                                            if ('string' == typeof i) s += i.length;
                                            else {
                                                var a = i.regex,
                                                    u = i.parser,
                                                    f = t.substr(s),
                                                    h = a.exec(f)[0];
                                                u.call(n, h), (t = t.replace(h, ''));
                                            }
                                        }
                                        return (
                                            (function (t) {
                                                var n = t.afternoon;
                                                if (void 0 !== n) {
                                                    var e = t.hours;
                                                    n ? e < 12 && (t.hours += 12) : 12 === e && (t.hours = 0), delete t.afternoon;
                                                }
                                            })(n),
                                            n
                                        );
                                    };
                                })(e)(t),
                                s = r.year,
                                i = r.month,
                                u = r.day,
                                f = r.hours,
                                h = r.minutes,
                                d = r.seconds,
                                c = r.milliseconds,
                                m = r.zone,
                                l = new Date(),
                                v = u || (s || i ? 1 : l.getDate()),
                                p = s || l.getFullYear(),
                                M = 0;
                            (s && !i) || (M = i > 0 ? i - 1 : l.getMonth());
                            var y = f || 0,
                                D = h || 0,
                                Y = d || 0,
                                g = c || 0;
                            return m ? new Date(Date.UTC(p, M, v, y, D, Y, g + 60 * m.offset * 1e3)) : o ? new Date(Date.UTC(p, M, v, y, D, Y, g)) : new Date(p, M, v, y, D, Y, g);
                        } catch (t) {
                            return new Date('');
                        }
                    };
                    return function (n, e, o) {
                        var r = e.prototype,
                            s = r.parse;
                        r.parse = function (n) {
                            var e = n.date,
                                r = n.format,
                                i = n.pl,
                                a = n.utc;
                            (this.$u = a), r ? ((t = i ? o.Ls[i] : this.$locale()), (this.$d = u(e, r, a)), this.init(n), i && (this.$L = i)) : s.call(this, n);
                        };
                    };
                });

                /***/
            },

        /***/ './node_modules/regenerator-runtime/runtime.js':
            /*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                /**
                 * Copyright (c) 2014-present, Facebook, Inc.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */

                var runtime = (function (exports) {
                    'use strict';

                    var Op = Object.prototype;
                    var hasOwn = Op.hasOwnProperty;
                    var undefined; // More compressible than void 0.
                    var $Symbol = typeof Symbol === 'function' ? Symbol : {};
                    var iteratorSymbol = $Symbol.iterator || '@@iterator';
                    var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
                    var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

                    function wrap(innerFn, outerFn, self, tryLocsList) {
                        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                        var generator = Object.create(protoGenerator.prototype);
                        var context = new Context(tryLocsList || []);

                        // The ._invoke method unifies the implementations of the .next,
                        // .throw, and .return methods.
                        generator._invoke = makeInvokeMethod(innerFn, self, context);

                        return generator;
                    }
                    exports.wrap = wrap;

                    // Try/catch helper to minimize deoptimizations. Returns a completion
                    // record like context.tryEntries[i].completion. This interface could
                    // have been (and was previously) designed to take a closure to be
                    // invoked without arguments, but in all the cases we care about we
                    // already have an existing method we want to call, so there's no need
                    // to create a new function object. We can even get away with assuming
                    // the method takes exactly one argument, since that happens to be true
                    // in every case, so we don't have to touch the arguments object. The
                    // only additional allocation required is the completion record, which
                    // has a stable shape and so hopefully should be cheap to allocate.
                    function tryCatch(fn, obj, arg) {
                        try {
                            return {type: 'normal', arg: fn.call(obj, arg)};
                        } catch (err) {
                            return {type: 'throw', arg: err};
                        }
                    }

                    var GenStateSuspendedStart = 'suspendedStart';
                    var GenStateSuspendedYield = 'suspendedYield';
                    var GenStateExecuting = 'executing';
                    var GenStateCompleted = 'completed';

                    // Returning this object from the innerFn has the same effect as
                    // breaking out of the dispatch switch statement.
                    var ContinueSentinel = {};

                    // Dummy constructor functions that we use as the .constructor and
                    // .constructor.prototype properties for functions that return Generator
                    // objects. For full spec compliance, you may wish to configure your
                    // minifier not to mangle the names of these two functions.
                    function Generator() {}
                    function GeneratorFunction() {}
                    function GeneratorFunctionPrototype() {}

                    // This is a polyfill for %IteratorPrototype% for environments that
                    // don't natively support it.
                    var IteratorPrototype = {};
                    IteratorPrototype[iteratorSymbol] = function () {
                        return this;
                    };

                    var getProto = Object.getPrototypeOf;
                    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
                    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                        // This environment has a native %IteratorPrototype%; use it instead
                        // of the polyfill.
                        IteratorPrototype = NativeIteratorPrototype;
                    }

                    var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype));
                    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
                    GeneratorFunctionPrototype.constructor = GeneratorFunction;
                    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = 'GeneratorFunction';

                    // Helper for defining the .next, .throw, and .return methods of the
                    // Iterator interface in terms of a single ._invoke method.
                    function defineIteratorMethods(prototype) {
                        ['next', 'throw', 'return'].forEach(function (method) {
                            prototype[method] = function (arg) {
                                return this._invoke(method, arg);
                            };
                        });
                    }

                    exports.isGeneratorFunction = function (genFun) {
                        var ctor = typeof genFun === 'function' && genFun.constructor;
                        return ctor
                            ? ctor === GeneratorFunction ||
                                  // For the native GeneratorFunction constructor, the best we can
                                  // do is to check its .name property.
                                  (ctor.displayName || ctor.name) === 'GeneratorFunction'
                            : false;
                    };

                    exports.mark = function (genFun) {
                        if (Object.setPrototypeOf) {
                            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                        } else {
                            genFun.__proto__ = GeneratorFunctionPrototype;
                            if (!(toStringTagSymbol in genFun)) {
                                genFun[toStringTagSymbol] = 'GeneratorFunction';
                            }
                        }
                        genFun.prototype = Object.create(Gp);
                        return genFun;
                    };

                    // Within the body of any async function, `await x` is transformed to
                    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
                    // `hasOwn.call(value, "__await")` to determine if the yielded value is
                    // meant to be awaited.
                    exports.awrap = function (arg) {
                        return {__await: arg};
                    };

                    function AsyncIterator(generator, PromiseImpl) {
                        function invoke(method, arg, resolve, reject) {
                            var record = tryCatch(generator[method], generator, arg);
                            if (record.type === 'throw') {
                                reject(record.arg);
                            } else {
                                var result = record.arg;
                                var value = result.value;
                                if (value && typeof value === 'object' && hasOwn.call(value, '__await')) {
                                    return PromiseImpl.resolve(value.__await).then(
                                        function (value) {
                                            invoke('next', value, resolve, reject);
                                        },
                                        function (err) {
                                            invoke('throw', err, resolve, reject);
                                        }
                                    );
                                }

                                return PromiseImpl.resolve(value).then(
                                    function (unwrapped) {
                                        // When a yielded Promise is resolved, its final value becomes
                                        // the .value of the Promise<{value,done}> result for the
                                        // current iteration.
                                        result.value = unwrapped;
                                        resolve(result);
                                    },
                                    function (error) {
                                        // If a rejected Promise was yielded, throw the rejection back
                                        // into the async generator function so it can be handled there.
                                        return invoke('throw', error, resolve, reject);
                                    }
                                );
                            }
                        }

                        var previousPromise;

                        function enqueue(method, arg) {
                            function callInvokeWithMethodAndArg() {
                                return new PromiseImpl(function (resolve, reject) {
                                    invoke(method, arg, resolve, reject);
                                });
                            }

                            return (previousPromise =
                                // If enqueue has been called before, then we want to wait until
                                // all previous Promises have been resolved before calling invoke,
                                // so that results are always delivered in the correct order. If
                                // enqueue has not been called before, then it is important to
                                // call invoke immediately, without waiting on a callback to fire,
                                // so that the async generator function has the opportunity to do
                                // any necessary setup in a predictable way. This predictability
                                // is why the Promise constructor synchronously invokes its
                                // executor callback, and why async functions synchronously
                                // execute code before the first await. Since we implement simple
                                // async functions in terms of async generators, it is especially
                                // important to get this right, even though it requires care.
                                previousPromise
                                    ? previousPromise.then(
                                          callInvokeWithMethodAndArg,
                                          // Avoid propagating failures to Promises returned by later
                                          // invocations of the iterator.
                                          callInvokeWithMethodAndArg
                                      )
                                    : callInvokeWithMethodAndArg());
                        }

                        // Define the unified helper method that is used to implement .next,
                        // .throw, and .return (see defineIteratorMethods).
                        this._invoke = enqueue;
                    }

                    defineIteratorMethods(AsyncIterator.prototype);
                    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
                        return this;
                    };
                    exports.AsyncIterator = AsyncIterator;

                    // Note that simple async functions are implemented on top of
                    // AsyncIterator objects; they just return a Promise for the value of
                    // the final result produced by the iterator.
                    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
                        if (PromiseImpl === void 0) PromiseImpl = Promise;

                        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);

                        return exports.isGeneratorFunction(outerFn)
                            ? iter // If outerFn is a generator, return the full iterator.
                            : iter.next().then(function (result) {
                                  return result.done ? result.value : iter.next();
                              });
                    };

                    function makeInvokeMethod(innerFn, self, context) {
                        var state = GenStateSuspendedStart;

                        return function invoke(method, arg) {
                            if (state === GenStateExecuting) {
                                throw new Error('Generator is already running');
                            }

                            if (state === GenStateCompleted) {
                                if (method === 'throw') {
                                    throw arg;
                                }

                                // Be forgiving, per 25.3.3.3.3 of the spec:
                                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                                return doneResult();
                            }

                            context.method = method;
                            context.arg = arg;

                            while (true) {
                                var delegate = context.delegate;
                                if (delegate) {
                                    var delegateResult = maybeInvokeDelegate(delegate, context);
                                    if (delegateResult) {
                                        if (delegateResult === ContinueSentinel) continue;
                                        return delegateResult;
                                    }
                                }

                                if (context.method === 'next') {
                                    // Setting context._sent for legacy support of Babel's
                                    // function.sent implementation.
                                    context.sent = context._sent = context.arg;
                                } else if (context.method === 'throw') {
                                    if (state === GenStateSuspendedStart) {
                                        state = GenStateCompleted;
                                        throw context.arg;
                                    }

                                    context.dispatchException(context.arg);
                                } else if (context.method === 'return') {
                                    context.abrupt('return', context.arg);
                                }

                                state = GenStateExecuting;

                                var record = tryCatch(innerFn, self, context);
                                if (record.type === 'normal') {
                                    // If an exception is thrown from innerFn, we leave state ===
                                    // GenStateExecuting and loop back for another invocation.
                                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                                    if (record.arg === ContinueSentinel) {
                                        continue;
                                    }

                                    return {
                                        value: record.arg,
                                        done: context.done,
                                    };
                                } else if (record.type === 'throw') {
                                    state = GenStateCompleted;
                                    // Dispatch the exception by looping back around to the
                                    // context.dispatchException(context.arg) call above.
                                    context.method = 'throw';
                                    context.arg = record.arg;
                                }
                            }
                        };
                    }

                    // Call delegate.iterator[context.method](context.arg) and handle the
                    // result, either by returning a { value, done } result from the
                    // delegate iterator, or by modifying context.method and context.arg,
                    // setting context.delegate to null, and returning the ContinueSentinel.
                    function maybeInvokeDelegate(delegate, context) {
                        var method = delegate.iterator[context.method];
                        if (method === undefined) {
                            // A .throw or .return when the delegate iterator has no .throw
                            // method always terminates the yield* loop.
                            context.delegate = null;

                            if (context.method === 'throw') {
                                // Note: ["return"] must be used for ES3 parsing compatibility.
                                if (delegate.iterator['return']) {
                                    // If the delegate iterator has a return method, give it a
                                    // chance to clean up.
                                    context.method = 'return';
                                    context.arg = undefined;
                                    maybeInvokeDelegate(delegate, context);

                                    if (context.method === 'throw') {
                                        // If maybeInvokeDelegate(context) changed context.method from
                                        // "return" to "throw", let that override the TypeError below.
                                        return ContinueSentinel;
                                    }
                                }

                                context.method = 'throw';
                                context.arg = new TypeError("The iterator does not provide a 'throw' method");
                            }

                            return ContinueSentinel;
                        }

                        var record = tryCatch(method, delegate.iterator, context.arg);

                        if (record.type === 'throw') {
                            context.method = 'throw';
                            context.arg = record.arg;
                            context.delegate = null;
                            return ContinueSentinel;
                        }

                        var info = record.arg;

                        if (!info) {
                            context.method = 'throw';
                            context.arg = new TypeError('iterator result is not an object');
                            context.delegate = null;
                            return ContinueSentinel;
                        }

                        if (info.done) {
                            // Assign the result of the finished delegate to the temporary
                            // variable specified by delegate.resultName (see delegateYield).
                            context[delegate.resultName] = info.value;

                            // Resume execution at the desired location (see delegateYield).
                            context.next = delegate.nextLoc;

                            // If context.method was "throw" but the delegate handled the
                            // exception, let the outer generator proceed normally. If
                            // context.method was "next", forget context.arg since it has been
                            // "consumed" by the delegate iterator. If context.method was
                            // "return", allow the original .return call to continue in the
                            // outer generator.
                            if (context.method !== 'return') {
                                context.method = 'next';
                                context.arg = undefined;
                            }
                        } else {
                            // Re-yield the result returned by the delegate method.
                            return info;
                        }

                        // The delegate iterator is finished, so forget it and continue with
                        // the outer generator.
                        context.delegate = null;
                        return ContinueSentinel;
                    }

                    // Define Generator.prototype.{next,throw,return} in terms of the
                    // unified ._invoke helper method.
                    defineIteratorMethods(Gp);

                    Gp[toStringTagSymbol] = 'Generator';

                    // A Generator should always return itself as the iterator object when the
                    // @@iterator function is called on it. Some browsers' implementations of the
                    // iterator prototype chain incorrectly implement this, causing the Generator
                    // object to not be returned from this call. This ensures that doesn't happen.
                    // See https://github.com/facebook/regenerator/issues/274 for more details.
                    Gp[iteratorSymbol] = function () {
                        return this;
                    };

                    Gp.toString = function () {
                        return '[object Generator]';
                    };

                    function pushTryEntry(locs) {
                        var entry = {tryLoc: locs[0]};

                        if (1 in locs) {
                            entry.catchLoc = locs[1];
                        }

                        if (2 in locs) {
                            entry.finallyLoc = locs[2];
                            entry.afterLoc = locs[3];
                        }

                        this.tryEntries.push(entry);
                    }

                    function resetTryEntry(entry) {
                        var record = entry.completion || {};
                        record.type = 'normal';
                        delete record.arg;
                        entry.completion = record;
                    }

                    function Context(tryLocsList) {
                        // The root entry object (effectively a try statement without a catch
                        // or a finally block) gives us a place to store values thrown from
                        // locations where there is no enclosing try statement.
                        this.tryEntries = [{tryLoc: 'root'}];
                        tryLocsList.forEach(pushTryEntry, this);
                        this.reset(true);
                    }

                    exports.keys = function (object) {
                        var keys = [];
                        for (var key in object) {
                            keys.push(key);
                        }
                        keys.reverse();

                        // Rather than returning an object with a next method, we keep
                        // things simple and return the next function itself.
                        return function next() {
                            while (keys.length) {
                                var key = keys.pop();
                                if (key in object) {
                                    next.value = key;
                                    next.done = false;
                                    return next;
                                }
                            }

                            // To avoid creating an additional object, we just hang the .value
                            // and .done properties off the next function object itself. This
                            // also ensures that the minifier will not anonymize the function.
                            next.done = true;
                            return next;
                        };
                    };

                    function values(iterable) {
                        if (iterable) {
                            var iteratorMethod = iterable[iteratorSymbol];
                            if (iteratorMethod) {
                                return iteratorMethod.call(iterable);
                            }

                            if (typeof iterable.next === 'function') {
                                return iterable;
                            }

                            if (!isNaN(iterable.length)) {
                                var i = -1,
                                    next = function next() {
                                        while (++i < iterable.length) {
                                            if (hasOwn.call(iterable, i)) {
                                                next.value = iterable[i];
                                                next.done = false;
                                                return next;
                                            }
                                        }

                                        next.value = undefined;
                                        next.done = true;

                                        return next;
                                    };

                                return (next.next = next);
                            }
                        }

                        // Return an iterator with no values.
                        return {next: doneResult};
                    }
                    exports.values = values;

                    function doneResult() {
                        return {value: undefined, done: true};
                    }

                    Context.prototype = {
                        constructor: Context,

                        reset: function (skipTempReset) {
                            this.prev = 0;
                            this.next = 0;
                            // Resetting context._sent for legacy support of Babel's
                            // function.sent implementation.
                            this.sent = this._sent = undefined;
                            this.done = false;
                            this.delegate = null;

                            this.method = 'next';
                            this.arg = undefined;

                            this.tryEntries.forEach(resetTryEntry);

                            if (!skipTempReset) {
                                for (var name in this) {
                                    // Not sure about the optimal order of these conditions:
                                    if (name.charAt(0) === 't' && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                                        this[name] = undefined;
                                    }
                                }
                            }
                        },

                        stop: function () {
                            this.done = true;

                            var rootEntry = this.tryEntries[0];
                            var rootRecord = rootEntry.completion;
                            if (rootRecord.type === 'throw') {
                                throw rootRecord.arg;
                            }

                            return this.rval;
                        },

                        dispatchException: function (exception) {
                            if (this.done) {
                                throw exception;
                            }

                            var context = this;
                            function handle(loc, caught) {
                                record.type = 'throw';
                                record.arg = exception;
                                context.next = loc;

                                if (caught) {
                                    // If the dispatched exception was caught by a catch block,
                                    // then let that catch block handle the exception normally.
                                    context.method = 'next';
                                    context.arg = undefined;
                                }

                                return !!caught;
                            }

                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var entry = this.tryEntries[i];
                                var record = entry.completion;

                                if (entry.tryLoc === 'root') {
                                    // Exception thrown outside of any try block that could handle
                                    // it, so set the completion value of the entire function to
                                    // throw the exception.
                                    return handle('end');
                                }

                                if (entry.tryLoc <= this.prev) {
                                    var hasCatch = hasOwn.call(entry, 'catchLoc');
                                    var hasFinally = hasOwn.call(entry, 'finallyLoc');

                                    if (hasCatch && hasFinally) {
                                        if (this.prev < entry.catchLoc) {
                                            return handle(entry.catchLoc, true);
                                        } else if (this.prev < entry.finallyLoc) {
                                            return handle(entry.finallyLoc);
                                        }
                                    } else if (hasCatch) {
                                        if (this.prev < entry.catchLoc) {
                                            return handle(entry.catchLoc, true);
                                        }
                                    } else if (hasFinally) {
                                        if (this.prev < entry.finallyLoc) {
                                            return handle(entry.finallyLoc);
                                        }
                                    } else {
                                        throw new Error('try statement without catch or finally');
                                    }
                                }
                            }
                        },

                        abrupt: function (type, arg) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var entry = this.tryEntries[i];
                                if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
                                    var finallyEntry = entry;
                                    break;
                                }
                            }

                            if (finallyEntry && (type === 'break' || type === 'continue') && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                                // Ignore the finally entry if control is not jumping to a
                                // location outside the try/catch block.
                                finallyEntry = null;
                            }

                            var record = finallyEntry ? finallyEntry.completion : {};
                            record.type = type;
                            record.arg = arg;

                            if (finallyEntry) {
                                this.method = 'next';
                                this.next = finallyEntry.finallyLoc;
                                return ContinueSentinel;
                            }

                            return this.complete(record);
                        },

                        complete: function (record, afterLoc) {
                            if (record.type === 'throw') {
                                throw record.arg;
                            }

                            if (record.type === 'break' || record.type === 'continue') {
                                this.next = record.arg;
                            } else if (record.type === 'return') {
                                this.rval = this.arg = record.arg;
                                this.method = 'return';
                                this.next = 'end';
                            } else if (record.type === 'normal' && afterLoc) {
                                this.next = afterLoc;
                            }

                            return ContinueSentinel;
                        },

                        finish: function (finallyLoc) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var entry = this.tryEntries[i];
                                if (entry.finallyLoc === finallyLoc) {
                                    this.complete(entry.completion, entry.afterLoc);
                                    resetTryEntry(entry);
                                    return ContinueSentinel;
                                }
                            }
                        },

                        catch: function (tryLoc) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var entry = this.tryEntries[i];
                                if (entry.tryLoc === tryLoc) {
                                    var record = entry.completion;
                                    if (record.type === 'throw') {
                                        var thrown = record.arg;
                                        resetTryEntry(entry);
                                    }
                                    return thrown;
                                }
                            }

                            // The context.catch method must only be called with a location
                            // argument that corresponds to a known catch block.
                            throw new Error('illegal catch attempt');
                        },

                        delegateYield: function (iterable, resultName, nextLoc) {
                            this.delegate = {
                                iterator: values(iterable),
                                resultName: resultName,
                                nextLoc: nextLoc,
                            };

                            if (this.method === 'next') {
                                // Deliberately forget the last sent value so that we don't
                                // accidentally pass it on to the delegate.
                                this.arg = undefined;
                            }

                            return ContinueSentinel;
                        },
                    };

                    // Regardless of whether this script is executing as a CommonJS module
                    // or not, return the runtime object so that we can declare the variable
                    // regeneratorRuntime in the outer scope, which allows this module to be
                    // injected easily by `bin/regenerator --include-runtime script.js`.
                    return exports;
                })(
                    // If this script is executing as a CommonJS module, use module.exports
                    // as the regeneratorRuntime namespace. Otherwise create a new empty
                    // object. Either way, the resulting object will be used to initialize
                    // the regeneratorRuntime variable at the top of this file.
                    true ? module.exports : undefined
                );

                try {
                    regeneratorRuntime = runtime;
                } catch (accidentalStrictMode) {
                    // This module should not be running in strict mode, so the above
                    // assignment should always work unless something is misconfigured. Just
                    // in case runtime.js accidentally runs in strict mode, we can escape
                    // strict mode using a global Function call. This could conceivably fail
                    // if a Content Security Policy forbids using Function, but in that case
                    // the proper solution is to fix the accidental strict mode problem. If
                    // you've misconfigured your bundler to force strict mode and applied a
                    // CSP to forbid Function, and you're not willing to fix either of those
                    // problems, please detail your unique predicament in a GitHub issue.
                    Function('r', 'regeneratorRuntime = r')(runtime);
                }

                /***/
            },

        /***/ './node_modules/url-polyfill/url-polyfill.js':
            /*!***************************************************!*\
  !*** ./node_modules/url-polyfill/url-polyfill.js ***!
  \***************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                /* WEBPACK VAR INJECTION */ (function (global) {
                    (function (global) {
                        /**
                         * Polyfill URLSearchParams
                         *
                         * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
                         */

                        var checkIfIteratorIsSupported = function () {
                            try {
                                return !!Symbol.iterator;
                            } catch (error) {
                                return false;
                            }
                        };

                        var iteratorSupported = checkIfIteratorIsSupported();

                        var createIterator = function (items) {
                            var iterator = {
                                next: function () {
                                    var value = items.shift();
                                    return {done: value === void 0, value: value};
                                },
                            };

                            if (iteratorSupported) {
                                iterator[Symbol.iterator] = function () {
                                    return iterator;
                                };
                            }

                            return iterator;
                        };

                        /**
                         * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
                         * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
                         */
                        var serializeParam = function (value) {
                            return encodeURIComponent(value).replace(/%20/g, '+');
                        };

                        var deserializeParam = function (value) {
                            return decodeURIComponent(String(value).replace(/\+/g, ' '));
                        };

                        var polyfillURLSearchParams = function () {
                            var URLSearchParams = function (searchString) {
                                Object.defineProperty(this, '_entries', {writable: true, value: {}});
                                var typeofSearchString = typeof searchString;

                                if (typeofSearchString === 'undefined') {
                                    // do nothing
                                } else if (typeofSearchString === 'string') {
                                    if (searchString !== '') {
                                        this._fromString(searchString);
                                    }
                                } else if (searchString instanceof URLSearchParams) {
                                    var _this = this;
                                    searchString.forEach(function (value, name) {
                                        _this.append(name, value);
                                    });
                                } else if (searchString !== null && typeofSearchString === 'object') {
                                    if (Object.prototype.toString.call(searchString) === '[object Array]') {
                                        for (var i = 0; i < searchString.length; i++) {
                                            var entry = searchString[i];
                                            if (Object.prototype.toString.call(entry) === '[object Array]' || entry.length !== 2) {
                                                this.append(entry[0], entry[1]);
                                            } else {
                                                throw new TypeError('Expected [string, any] as entry at index ' + i + " of URLSearchParams's input");
                                            }
                                        }
                                    } else {
                                        for (var key in searchString) {
                                            if (searchString.hasOwnProperty(key)) {
                                                this.append(key, searchString[key]);
                                            }
                                        }
                                    }
                                } else {
                                    throw new TypeError("Unsupported input's type for URLSearchParams");
                                }
                            };

                            var proto = URLSearchParams.prototype;

                            proto.append = function (name, value) {
                                if (name in this._entries) {
                                    this._entries[name].push(String(value));
                                } else {
                                    this._entries[name] = [String(value)];
                                }
                            };

                            proto.delete = function (name) {
                                delete this._entries[name];
                            };

                            proto.get = function (name) {
                                return name in this._entries ? this._entries[name][0] : null;
                            };

                            proto.getAll = function (name) {
                                return name in this._entries ? this._entries[name].slice(0) : [];
                            };

                            proto.has = function (name) {
                                return name in this._entries;
                            };

                            proto.set = function (name, value) {
                                this._entries[name] = [String(value)];
                            };

                            proto.forEach = function (callback, thisArg) {
                                var entries;
                                for (var name in this._entries) {
                                    if (this._entries.hasOwnProperty(name)) {
                                        entries = this._entries[name];
                                        for (var i = 0; i < entries.length; i++) {
                                            callback.call(thisArg, entries[i], name, this);
                                        }
                                    }
                                }
                            };

                            proto.keys = function () {
                                var items = [];
                                this.forEach(function (value, name) {
                                    items.push(name);
                                });
                                return createIterator(items);
                            };

                            proto.values = function () {
                                var items = [];
                                this.forEach(function (value) {
                                    items.push(value);
                                });
                                return createIterator(items);
                            };

                            proto.entries = function () {
                                var items = [];
                                this.forEach(function (value, name) {
                                    items.push([name, value]);
                                });
                                return createIterator(items);
                            };

                            if (iteratorSupported) {
                                proto[Symbol.iterator] = proto.entries;
                            }

                            proto.toString = function () {
                                var searchArray = [];
                                this.forEach(function (value, name) {
                                    searchArray.push(serializeParam(name) + '=' + serializeParam(value));
                                });
                                return searchArray.join('&');
                            };

                            global.URLSearchParams = URLSearchParams;
                        };

                        var checkIfURLSearchParamsSupported = function () {
                            try {
                                var URLSearchParams = global.URLSearchParams;

                                return new URLSearchParams('?a=1').toString() === 'a=1' && typeof URLSearchParams.prototype.set === 'function';
                            } catch (e) {
                                return false;
                            }
                        };

                        if (!checkIfURLSearchParamsSupported()) {
                            polyfillURLSearchParams();
                        }

                        var proto = global.URLSearchParams.prototype;

                        if (typeof proto.sort !== 'function') {
                            proto.sort = function () {
                                var _this = this;
                                var items = [];
                                this.forEach(function (value, name) {
                                    items.push([name, value]);
                                    if (!_this._entries) {
                                        _this.delete(name);
                                    }
                                });
                                items.sort(function (a, b) {
                                    if (a[0] < b[0]) {
                                        return -1;
                                    } else if (a[0] > b[0]) {
                                        return +1;
                                    } else {
                                        return 0;
                                    }
                                });
                                if (_this._entries) {
                                    // force reset because IE keeps keys index
                                    _this._entries = {};
                                }
                                for (var i = 0; i < items.length; i++) {
                                    this.append(items[i][0], items[i][1]);
                                }
                            };
                        }

                        if (typeof proto._fromString !== 'function') {
                            Object.defineProperty(proto, '_fromString', {
                                enumerable: false,
                                configurable: false,
                                writable: false,
                                value: function (searchString) {
                                    if (this._entries) {
                                        this._entries = {};
                                    } else {
                                        var keys = [];
                                        this.forEach(function (value, name) {
                                            keys.push(name);
                                        });
                                        for (var i = 0; i < keys.length; i++) {
                                            this.delete(keys[i]);
                                        }
                                    }

                                    searchString = searchString.replace(/^\?/, '');
                                    var attributes = searchString.split('&');
                                    var attribute;
                                    for (var i = 0; i < attributes.length; i++) {
                                        attribute = attributes[i].split('=');
                                        this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
                                    }
                                },
                            });
                        }

                        // HTMLAnchorElement
                    })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

                    (function (global) {
                        /**
                         * Polyfill URL
                         *
                         * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
                         */

                        var checkIfURLIsSupported = function () {
                            try {
                                var u = new global.URL('b', 'http://a');
                                u.pathname = 'c d';
                                return u.href === 'http://a/c%20d' && u.searchParams;
                            } catch (e) {
                                return false;
                            }
                        };

                        var polyfillURL = function () {
                            var _URL = global.URL;

                            var URL = function (url, base) {
                                if (typeof url !== 'string') url = String(url);

                                // Only create another document if the base is different from current location.
                                var doc = document,
                                    baseElement;
                                if (base && (global.location === void 0 || base !== global.location.href)) {
                                    doc = document.implementation.createHTMLDocument('');
                                    baseElement = doc.createElement('base');
                                    baseElement.href = base;
                                    doc.head.appendChild(baseElement);
                                    try {
                                        if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
                                    } catch (err) {
                                        throw new Error('URL unable to set base ' + base + ' due to ' + err);
                                    }
                                }

                                var anchorElement = doc.createElement('a');
                                anchorElement.href = url;
                                if (baseElement) {
                                    doc.body.appendChild(anchorElement);
                                    anchorElement.href = anchorElement.href; // force href to refresh
                                }

                                if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
                                    throw new TypeError('Invalid URL');
                                }

                                Object.defineProperty(this, '_anchorElement', {
                                    value: anchorElement,
                                });

                                // create a linked searchParams which reflect its changes on URL
                                var searchParams = new global.URLSearchParams(this.search);
                                var enableSearchUpdate = true;
                                var enableSearchParamsUpdate = true;
                                var _this = this;
                                ['append', 'delete', 'set'].forEach(function (methodName) {
                                    var method = searchParams[methodName];
                                    searchParams[methodName] = function () {
                                        method.apply(searchParams, arguments);
                                        if (enableSearchUpdate) {
                                            enableSearchParamsUpdate = false;
                                            _this.search = searchParams.toString();
                                            enableSearchParamsUpdate = true;
                                        }
                                    };
                                });

                                Object.defineProperty(this, 'searchParams', {
                                    value: searchParams,
                                    enumerable: true,
                                });

                                var search = void 0;
                                Object.defineProperty(this, '_updateSearchParams', {
                                    enumerable: false,
                                    configurable: false,
                                    writable: false,
                                    value: function () {
                                        if (this.search !== search) {
                                            search = this.search;
                                            if (enableSearchParamsUpdate) {
                                                enableSearchUpdate = false;
                                                this.searchParams._fromString(this.search);
                                                enableSearchUpdate = true;
                                            }
                                        }
                                    },
                                });
                            };

                            var proto = URL.prototype;

                            var linkURLWithAnchorAttribute = function (attributeName) {
                                Object.defineProperty(proto, attributeName, {
                                    get: function () {
                                        return this._anchorElement[attributeName];
                                    },
                                    set: function (value) {
                                        this._anchorElement[attributeName] = value;
                                    },
                                    enumerable: true,
                                });
                            };

                            ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (attributeName) {
                                linkURLWithAnchorAttribute(attributeName);
                            });

                            Object.defineProperty(proto, 'search', {
                                get: function () {
                                    return this._anchorElement['search'];
                                },
                                set: function (value) {
                                    this._anchorElement['search'] = value;
                                    this._updateSearchParams();
                                },
                                enumerable: true,
                            });

                            Object.defineProperties(proto, {
                                toString: {
                                    get: function () {
                                        var _this = this;
                                        return function () {
                                            return _this.href;
                                        };
                                    },
                                },

                                href: {
                                    get: function () {
                                        return this._anchorElement.href.replace(/\?$/, '');
                                    },
                                    set: function (value) {
                                        this._anchorElement.href = value;
                                        this._updateSearchParams();
                                    },
                                    enumerable: true,
                                },

                                pathname: {
                                    get: function () {
                                        return this._anchorElement.pathname.replace(/(^\/?)/, '/');
                                    },
                                    set: function (value) {
                                        this._anchorElement.pathname = value;
                                    },
                                    enumerable: true,
                                },

                                origin: {
                                    get: function () {
                                        // get expected port from protocol
                                        var expectedPort = {'http:': 80, 'https:': 443, 'ftp:': 21}[this._anchorElement.protocol];
                                        // add port to origin if, expected port is different than actual port
                                        // and it is not empty f.e http://foo:8080
                                        // 8080 != 80 && 8080 != ''
                                        var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';

                                        return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
                                    },
                                    enumerable: true,
                                },

                                password: {
                                    // TODO
                                    get: function () {
                                        return '';
                                    },
                                    set: function (value) {},
                                    enumerable: true,
                                },

                                username: {
                                    // TODO
                                    get: function () {
                                        return '';
                                    },
                                    set: function (value) {},
                                    enumerable: true,
                                },
                            });

                            URL.createObjectURL = function (blob) {
                                return _URL.createObjectURL.apply(_URL, arguments);
                            };

                            URL.revokeObjectURL = function (url) {
                                return _URL.revokeObjectURL.apply(_URL, arguments);
                            };

                            global.URL = URL;
                        };

                        if (!checkIfURLIsSupported()) {
                            polyfillURL();
                        }

                        if (global.location !== void 0 && !('origin' in global.location)) {
                            var getOrigin = function () {
                                return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
                            };

                            try {
                                Object.defineProperty(global.location, 'origin', {
                                    get: getOrigin,
                                    enumerable: true,
                                });
                            } catch (e) {
                                setInterval(function () {
                                    global.location.origin = getOrigin();
                                }, 100);
                            }
                        }
                    })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

                    /* WEBPACK VAR INJECTION */
                }.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js')));

                /***/
            },

        /***/ './node_modules/webpack/buildin/global.js':
            /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                var g;

                // This works in non-strict mode
                g = (function () {
                    return this;
                })();

                try {
                    // This works if eval is allowed (see CSP)
                    g = g || new Function('return this')();
                } catch (e) {
                    // This works if the window reference is available
                    if (typeof window === 'object') g = window;
                }

                // g can still be undefined, but nothing to do about it...
                // We return undefined, instead of nothing here, so it's
                // easier to handle this case. if(!global) { ...}

                module.exports = g;

                /***/
            },

        /***/ './node_modules/whatwg-fetch/fetch.js':
            /*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
            /*! exports provided: Headers, Request, Response, DOMException, fetch */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Headers', function () {
                    return Headers;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Request', function () {
                    return Request;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Response', function () {
                    return Response;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DOMException', function () {
                    return DOMException;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'fetch', function () {
                    return fetch;
                });
                var support = {
                    searchParams: 'URLSearchParams' in self,
                    iterable: 'Symbol' in self && 'iterator' in Symbol,
                    blob:
                        'FileReader' in self &&
                        'Blob' in self &&
                        (function () {
                            try {
                                new Blob();
                                return true;
                            } catch (e) {
                                return false;
                            }
                        })(),
                    formData: 'FormData' in self,
                    arrayBuffer: 'ArrayBuffer' in self,
                };

                function isDataView(obj) {
                    return obj && DataView.prototype.isPrototypeOf(obj);
                }

                if (support.arrayBuffer) {
                    var viewClasses = [
                        '[object Int8Array]',
                        '[object Uint8Array]',
                        '[object Uint8ClampedArray]',
                        '[object Int16Array]',
                        '[object Uint16Array]',
                        '[object Int32Array]',
                        '[object Uint32Array]',
                        '[object Float32Array]',
                        '[object Float64Array]',
                    ];

                    var isArrayBufferView =
                        ArrayBuffer.isView ||
                        function (obj) {
                            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
                        };
                }

                function normalizeName(name) {
                    if (typeof name !== 'string') {
                        name = String(name);
                    }
                    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
                        throw new TypeError('Invalid character in header field name');
                    }
                    return name.toLowerCase();
                }

                function normalizeValue(value) {
                    if (typeof value !== 'string') {
                        value = String(value);
                    }
                    return value;
                }

                // Build a destructive iterator for the value list
                function iteratorFor(items) {
                    var iterator = {
                        next: function () {
                            var value = items.shift();
                            return {done: value === undefined, value: value};
                        },
                    };

                    if (support.iterable) {
                        iterator[Symbol.iterator] = function () {
                            return iterator;
                        };
                    }

                    return iterator;
                }

                function Headers(headers) {
                    this.map = {};

                    if (headers instanceof Headers) {
                        headers.forEach(function (value, name) {
                            this.append(name, value);
                        }, this);
                    } else if (Array.isArray(headers)) {
                        headers.forEach(function (header) {
                            this.append(header[0], header[1]);
                        }, this);
                    } else if (headers) {
                        Object.getOwnPropertyNames(headers).forEach(function (name) {
                            this.append(name, headers[name]);
                        }, this);
                    }
                }

                Headers.prototype.append = function (name, value) {
                    name = normalizeName(name);
                    value = normalizeValue(value);
                    var oldValue = this.map[name];
                    this.map[name] = oldValue ? oldValue + ', ' + value : value;
                };

                Headers.prototype['delete'] = function (name) {
                    delete this.map[normalizeName(name)];
                };

                Headers.prototype.get = function (name) {
                    name = normalizeName(name);
                    return this.has(name) ? this.map[name] : null;
                };

                Headers.prototype.has = function (name) {
                    return this.map.hasOwnProperty(normalizeName(name));
                };

                Headers.prototype.set = function (name, value) {
                    this.map[normalizeName(name)] = normalizeValue(value);
                };

                Headers.prototype.forEach = function (callback, thisArg) {
                    for (var name in this.map) {
                        if (this.map.hasOwnProperty(name)) {
                            callback.call(thisArg, this.map[name], name, this);
                        }
                    }
                };

                Headers.prototype.keys = function () {
                    var items = [];
                    this.forEach(function (value, name) {
                        items.push(name);
                    });
                    return iteratorFor(items);
                };

                Headers.prototype.values = function () {
                    var items = [];
                    this.forEach(function (value) {
                        items.push(value);
                    });
                    return iteratorFor(items);
                };

                Headers.prototype.entries = function () {
                    var items = [];
                    this.forEach(function (value, name) {
                        items.push([name, value]);
                    });
                    return iteratorFor(items);
                };

                if (support.iterable) {
                    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
                }

                function consumed(body) {
                    if (body.bodyUsed) {
                        return Promise.reject(new TypeError('Already read'));
                    }
                    body.bodyUsed = true;
                }

                function fileReaderReady(reader) {
                    return new Promise(function (resolve, reject) {
                        reader.onload = function () {
                            resolve(reader.result);
                        };
                        reader.onerror = function () {
                            reject(reader.error);
                        };
                    });
                }

                function readBlobAsArrayBuffer(blob) {
                    var reader = new FileReader();
                    var promise = fileReaderReady(reader);
                    reader.readAsArrayBuffer(blob);
                    return promise;
                }

                function readBlobAsText(blob) {
                    var reader = new FileReader();
                    var promise = fileReaderReady(reader);
                    reader.readAsText(blob);
                    return promise;
                }

                function readArrayBufferAsText(buf) {
                    var view = new Uint8Array(buf);
                    var chars = new Array(view.length);

                    for (var i = 0; i < view.length; i++) {
                        chars[i] = String.fromCharCode(view[i]);
                    }
                    return chars.join('');
                }

                function bufferClone(buf) {
                    if (buf.slice) {
                        return buf.slice(0);
                    } else {
                        var view = new Uint8Array(buf.byteLength);
                        view.set(new Uint8Array(buf));
                        return view.buffer;
                    }
                }

                function Body() {
                    this.bodyUsed = false;

                    this._initBody = function (body) {
                        this._bodyInit = body;
                        if (!body) {
                            this._bodyText = '';
                        } else if (typeof body === 'string') {
                            this._bodyText = body;
                        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                            this._bodyBlob = body;
                        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                            this._bodyFormData = body;
                        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                            this._bodyText = body.toString();
                        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                            this._bodyArrayBuffer = bufferClone(body.buffer);
                            // IE 10-11 can't handle a DataView body.
                            this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                            this._bodyArrayBuffer = bufferClone(body);
                        } else {
                            this._bodyText = body = Object.prototype.toString.call(body);
                        }

                        if (!this.headers.get('content-type')) {
                            if (typeof body === 'string') {
                                this.headers.set('content-type', 'text/plain;charset=UTF-8');
                            } else if (this._bodyBlob && this._bodyBlob.type) {
                                this.headers.set('content-type', this._bodyBlob.type);
                            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                            }
                        }
                    };

                    if (support.blob) {
                        this.blob = function () {
                            var rejected = consumed(this);
                            if (rejected) {
                                return rejected;
                            }

                            if (this._bodyBlob) {
                                return Promise.resolve(this._bodyBlob);
                            } else if (this._bodyArrayBuffer) {
                                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            } else if (this._bodyFormData) {
                                throw new Error('could not read FormData body as blob');
                            } else {
                                return Promise.resolve(new Blob([this._bodyText]));
                            }
                        };

                        this.arrayBuffer = function () {
                            if (this._bodyArrayBuffer) {
                                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                            } else {
                                return this.blob().then(readBlobAsArrayBuffer);
                            }
                        };
                    }

                    this.text = function () {
                        var rejected = consumed(this);
                        if (rejected) {
                            return rejected;
                        }

                        if (this._bodyBlob) {
                            return readBlobAsText(this._bodyBlob);
                        } else if (this._bodyArrayBuffer) {
                            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                        } else if (this._bodyFormData) {
                            throw new Error('could not read FormData body as text');
                        } else {
                            return Promise.resolve(this._bodyText);
                        }
                    };

                    if (support.formData) {
                        this.formData = function () {
                            return this.text().then(decode);
                        };
                    }

                    this.json = function () {
                        return this.text().then(JSON.parse);
                    };

                    return this;
                }

                // HTTP methods whose capitalization should be normalized
                var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

                function normalizeMethod(method) {
                    var upcased = method.toUpperCase();
                    return methods.indexOf(upcased) > -1 ? upcased : method;
                }

                function Request(input, options) {
                    options = options || {};
                    var body = options.body;

                    if (input instanceof Request) {
                        if (input.bodyUsed) {
                            throw new TypeError('Already read');
                        }
                        this.url = input.url;
                        this.credentials = input.credentials;
                        if (!options.headers) {
                            this.headers = new Headers(input.headers);
                        }
                        this.method = input.method;
                        this.mode = input.mode;
                        this.signal = input.signal;
                        if (!body && input._bodyInit != null) {
                            body = input._bodyInit;
                            input.bodyUsed = true;
                        }
                    } else {
                        this.url = String(input);
                    }

                    this.credentials = options.credentials || this.credentials || 'same-origin';
                    if (options.headers || !this.headers) {
                        this.headers = new Headers(options.headers);
                    }
                    this.method = normalizeMethod(options.method || this.method || 'GET');
                    this.mode = options.mode || this.mode || null;
                    this.signal = options.signal || this.signal;
                    this.referrer = null;

                    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                        throw new TypeError('Body not allowed for GET or HEAD requests');
                    }
                    this._initBody(body);
                }

                Request.prototype.clone = function () {
                    return new Request(this, {body: this._bodyInit});
                };

                function decode(body) {
                    var form = new FormData();
                    body.trim()
                        .split('&')
                        .forEach(function (bytes) {
                            if (bytes) {
                                var split = bytes.split('=');
                                var name = split.shift().replace(/\+/g, ' ');
                                var value = split.join('=').replace(/\+/g, ' ');
                                form.append(decodeURIComponent(name), decodeURIComponent(value));
                            }
                        });
                    return form;
                }

                function parseHeaders(rawHeaders) {
                    var headers = new Headers();
                    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
                    // https://tools.ietf.org/html/rfc7230#section-3.2
                    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
                    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
                        var parts = line.split(':');
                        var key = parts.shift().trim();
                        if (key) {
                            var value = parts.join(':').trim();
                            headers.append(key, value);
                        }
                    });
                    return headers;
                }

                Body.call(Request.prototype);

                function Response(bodyInit, options) {
                    if (!options) {
                        options = {};
                    }

                    this.type = 'default';
                    this.status = options.status === undefined ? 200 : options.status;
                    this.ok = this.status >= 200 && this.status < 300;
                    this.statusText = 'statusText' in options ? options.statusText : 'OK';
                    this.headers = new Headers(options.headers);
                    this.url = options.url || '';
                    this._initBody(bodyInit);
                }

                Body.call(Response.prototype);

                Response.prototype.clone = function () {
                    return new Response(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new Headers(this.headers),
                        url: this.url,
                    });
                };

                Response.error = function () {
                    var response = new Response(null, {status: 0, statusText: ''});
                    response.type = 'error';
                    return response;
                };

                var redirectStatuses = [301, 302, 303, 307, 308];

                Response.redirect = function (url, status) {
                    if (redirectStatuses.indexOf(status) === -1) {
                        throw new RangeError('Invalid status code');
                    }

                    return new Response(null, {status: status, headers: {location: url}});
                };

                var DOMException = self.DOMException;
                try {
                    new DOMException();
                } catch (err) {
                    DOMException = function (message, name) {
                        this.message = message;
                        this.name = name;
                        var error = Error(message);
                        this.stack = error.stack;
                    };
                    DOMException.prototype = Object.create(Error.prototype);
                    DOMException.prototype.constructor = DOMException;
                }

                function fetch(input, init) {
                    return new Promise(function (resolve, reject) {
                        var request = new Request(input, init);

                        if (request.signal && request.signal.aborted) {
                            return reject(new DOMException('Aborted', 'AbortError'));
                        }

                        var xhr = new XMLHttpRequest();

                        function abortXhr() {
                            xhr.abort();
                        }

                        xhr.onload = function () {
                            var options = {
                                status: xhr.status,
                                statusText: xhr.statusText,
                                headers: parseHeaders(xhr.getAllResponseHeaders() || ''),
                            };
                            options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                            var body = 'response' in xhr ? xhr.response : xhr.responseText;
                            resolve(new Response(body, options));
                        };

                        xhr.onerror = function () {
                            reject(new TypeError('Network request failed'));
                        };

                        xhr.ontimeout = function () {
                            reject(new TypeError('Network request failed'));
                        };

                        xhr.onabort = function () {
                            reject(new DOMException('Aborted', 'AbortError'));
                        };

                        xhr.open(request.method, request.url, true);

                        if (request.credentials === 'include') {
                            xhr.withCredentials = true;
                        } else if (request.credentials === 'omit') {
                            xhr.withCredentials = false;
                        }

                        if ('responseType' in xhr && support.blob) {
                            xhr.responseType = 'blob';
                        }

                        request.headers.forEach(function (value, name) {
                            xhr.setRequestHeader(name, value);
                        });

                        if (request.signal) {
                            request.signal.addEventListener('abort', abortXhr);

                            xhr.onreadystatechange = function () {
                                // DONE (success or failure)
                                if (xhr.readyState === 4) {
                                    request.signal.removeEventListener('abort', abortXhr);
                                }
                            };
                        }

                        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
                    });
                }

                fetch.polyfill = true;

                if (!self.fetch) {
                    self.fetch = fetch;
                    self.Headers = Headers;
                    self.Request = Request;
                    self.Response = Response;
                }

                /***/
            },

        /***/ './site_configs/ares_child-60278/js/60278-config.js':
            /*!**********************************************************!*\
  !*** ./site_configs/ares_child-60278/js/60278-config.js ***!
  \**********************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function () {
                    return siteConfig;
                });
                /* harmony import */ var _js_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/path */ './js/path.js');
                /* harmony import */ var _js_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_js_path__WEBPACK_IMPORTED_MODULE_0__);

                var env_path = new _js_path__WEBPACK_IMPORTED_MODULE_0___default.a();
                var site_id = 60278;
                var directory_name = 'ares_child-'.concat(site_id);
                function siteConfig() {
                    return {
                        site_id: site_id,
                        directory_name: directory_name,
                        affiliate_id: 14808,
                        master_id: 920,
                        site_type: 'lodging',
                        algolia_app_id: 'plCZXR0GZ7J1',
                        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
                        currency: 'USD',
                        distance_unit: 'useMiles',
                        map_size: '12',
                        radius: '50',
                        lodging: {
                            event_id: 42099,
                            event_name: 'Ares Child',
                            event_dates: '',
                            is_lrg: true,
                        },
                        cug: {
                            is_cug: false,
                            show_points: false,
                            allow_registration: false,
                            percent_off_text: 'off',
                            show_percent_savings: false,
                        },
                        exclusive_rate_text: 'Exclusive Rates',
                        host_hotel_text: 'Host Hotel',
                        partner_hotel_text: 'Partner Hotel',
                        show_tax_inclusive_rates: false,
                        dayjs_date_format: 'M/D/YYYY',
                        reviews_before_info: true,
                        show_stars: false,
                        show_property_type: false,
                        show_language_select: true,
                        show_currency_select: true,
                        show_date_prompt: false,
                        showStarRatings: false,
                        has_social_sharing: true,
                        fav_icon_url: ''.concat(env_path.path, '/site_configs/').concat(directory_name, '/img/favicon.png'),
                        header: {
                            logo_file_location: ''.concat(env_path.path, '/site_configs/').concat(directory_name, '/img/logo.png'),
                            logo_outbound_url: 'https://www.voodoofestival.com/',
                        },
                        map_marker_image_url: ''.concat(env_path.path, '/site_configs/').concat(directory_name, '/img/favicon.png'),
                        theme: 'light',
                        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700',
                        ads: {
                            sidebar_ad: {
                                is_active: false,
                                image_url: '',
                                outbound_url: '',
                            },
                            between_property_ad: {
                                is_active: false,
                                image_url: '',
                                outbound_url: '',
                            },
                            confirmation_page_bottom: {
                                is_active: false,
                                image_url: '',
                                outbound_url: '',
                            },
                        },
                        // new options
                        root_page_header_text: 'Start Your Search',
                        root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
                        is_resbeat_client: false,
                        confirmation_email_from: 'Hotels for Hope',
                    };
                }

                /***/
            },

        /***/ './site_configs/ares_child-60278/js/60278.js':
            /*!***************************************************!*\
  !*** ./site_configs/ares_child-60278/js/60278.js ***!
  \***************************************************/
            /*! no exports provided */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! core-js/modules/es7.symbol.async-iterator */ './node_modules/core-js/modules/es7.symbol.async-iterator.js'
                );
                /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__
                );
                /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! core-js/modules/es6.symbol */ './node_modules/core-js/modules/es6.symbol.js'
                );
                /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__
                );
                /* harmony import */ var core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! core-js/modules/es6.reflect.get */ './node_modules/core-js/modules/es6.reflect.get.js'
                );
                /* harmony import */ var core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_2__
                );
                /* harmony import */ var _js_build__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/build */ './js/build.js');
                /* harmony import */ var _60278_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./60278-config */ './site_configs/ares_child-60278/js/60278-config.js'
                );

                function _typeof(obj) {
                    '@babel/helpers - typeof';
                    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                        };
                    }
                    return _typeof(obj);
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError('Cannot call a class as a function');
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
                        return call;
                    }
                    return _assertThisInitialized(self);
                }

                function _assertThisInitialized(self) {
                    if (self === void 0) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== 'function' && superClass !== null) {
                        throw new TypeError('Super expression must either be null or a function');
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }

                function _setPrototypeOf(o, p) {
                    _setPrototypeOf =
                        Object.setPrototypeOf ||
                        function _setPrototypeOf(o, p) {
                            o.__proto__ = p;
                            return o;
                        };
                    return _setPrototypeOf(o, p);
                }

                function _get(target, property, receiver) {
                    if (typeof Reflect !== 'undefined' && Reflect.get) {
                        _get = Reflect.get;
                    } else {
                        _get = function _get(target, property, receiver) {
                            var base = _superPropBase(target, property);
                            if (!base) return;
                            var desc = Object.getOwnPropertyDescriptor(base, property);
                            if (desc.get) {
                                return desc.get.call(receiver);
                            }
                            return desc.value;
                        };
                    }
                    return _get(target, property, receiver || target);
                }

                function _superPropBase(object, property) {
                    while (!Object.prototype.hasOwnProperty.call(object, property)) {
                        object = _getPrototypeOf(object);
                        if (object === null) break;
                    }
                    return object;
                }

                function _getPrototypeOf(o) {
                    _getPrototypeOf = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function _getPrototypeOf(o) {
                              return o.__proto__ || Object.getPrototypeOf(o);
                          };
                    return _getPrototypeOf(o);
                }

                var site_config = new _60278_config__WEBPACK_IMPORTED_MODULE_4__['default']();

                var ChildPortal = /*#__PURE__*/ (function (_BasePortal) {
                    _inherits(ChildPortal, _BasePortal);

                    function ChildPortal() {
                        var _this;

                        _classCallCheck(this, ChildPortal);

                        _this = _possibleConstructorReturn(this, _getPrototypeOf(ChildPortal).call(this, site_config));

                        _get(_getPrototypeOf(ChildPortal.prototype), 'init', _assertThisInitialized(_this)).call(_assertThisInitialized(_this));

                        return _this;
                    }

                    return ChildPortal;
                })(_js_build__WEBPACK_IMPORTED_MODULE_3__['default']);

                new ChildPortal();

                /***/
            },

        /***/ './site_configs/ares_child-60278/styles/60278.scss':
            /*!*********************************************************!*\
  !*** ./site_configs/ares_child-60278/styles/60278.scss ***!
  \*********************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // extracted by mini-css-extract-plugin
                /***/
            },

        /***/ './src/60278.js':
            /*!**********************!*\
  !*** ./src/60278.js ***!
  \**********************/
            /*! no exports provided */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _site_configs_ares_child_60278_js_60278__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../site_configs/ares_child-60278/js/60278 */ './site_configs/ares_child-60278/js/60278.js'
                );
                /* harmony import */ var _site_configs_ares_child_60278_styles_60278_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../site_configs/ares_child-60278/styles/60278.scss */ './site_configs/ares_child-60278/styles/60278.scss'
                );
                /* harmony import */ var _site_configs_ares_child_60278_styles_60278_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    _site_configs_ares_child_60278_styles_60278_scss__WEBPACK_IMPORTED_MODULE_1__
                );

                /***/
            },

        /******/
    }
);
//# sourceMappingURL=ares_child-60278.js.map
