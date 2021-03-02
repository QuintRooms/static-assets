import Utilities from '../../../js/utilities';
import Path from '../../../js/build_tools/path';

const env_path = new Path();

const utilities = new Utilities();

export default class Roomcash {
    constructor(config) {
        this.config = config;
        this.user_points = null;
        this.sub_header_container = `
        <span id="sub-header-container">
                <a id="how-it-works" target="_blank" href="https://roomcash.com/how-it-works">How It Works</a>
                <a id="faq" target="_blank" href="https://roomcash.com/faqs">FAQ</a>
                <a id="daily-deals" target="_blank" href="https://roomcash.com/daily-deals">Daily Deals</a>
                <a id="partners" target="_blank" href="https://roomcash.com/partnerships">Partnerships</a>
        </span>`;
        this.init();
    }

    init() {
        if (document.querySelector('.MemberAuthenticated')) {
            this.user_points = document.querySelector('meta[name="userPoints"]').getAttribute('content');
        }
        // All pages
        this.wrapHeader();
        this.insertContent([
            {
                element: '.ArnSupportLinks.ArnSupportBottom',
                position: 'afterbegin',
                html: `
                    <div id="footer">
                        <div id="footer-title"><hr><span>RoomCash is a QuintRooms company</span><hr></div>
                        <div id="brand-logos">
                            <a target="_blank" href="https://quintevents.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/quint.png"></a>
                            <a target="_blank" href="https://resbeat.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/resbeat.png"></a>
                            <a target="_blank" href="https://www.hotelsforhope.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/h4h.png"></a>
                        </div>
                    </div>`,
            },
        ]);
        if (document.querySelector('.MemberAuthenticated')) {
            this.buildHeaderLinks();
        }

        // Root Page
        if (document.querySelector('.RootBody')) {
            this.updateText('.ArnPrimarySearchOuterContainer h1:first-of-type', `${document.querySelector('meta[name="firstName"]').content}, WHERE WILL YOUR ROOMCASH TAKE YOU?`);
            this.updateText('.ArnPrimarySearchOuterContainer h3:first-of-type', 'START YOUR SEARCH AND CHOOSE FROM 600,000+ GLOBAL HOTELS');
            this.buildFooterMenu('.ArnSearchContainerMainDiv', 'afterend');
            this.insertContent([
                {
                    element: '.RootBody .ArnSearchContainerMainDiv',
                    position: 'beforebegin',
                    html: this.sub_header_container,
                },
            ]);
        }
        // Search Results
        if (document.querySelector('.SearchHotels')) {
            this.buildFooterMenu('.ArnSearchContainerMainDiv', 'afterend');
            this.moveCurrency();
            this.insertContent([
                {
                    element: '.SearchHotels .ArnQuadSearchContainer.ArnPrimarySearchContainer',
                    position: 'beforeend',
                    html: `<hr>`,
                },
                {
                    element: '.SearchHotels .sort-wrapper',
                    position: 'afterend',
                    html: `<hr>`,
                },
                {
                    element: '.SearchHotels .ArnSearchContainerMainDiv',
                    position: 'afterbegin',
                    html: this.sub_header_container,
                },
                {
                    element: '.SearchHotels #AmentitiesContainer',
                    position: 'beforeBegin',
                    html: `<div id="filter-by">FILTER BY</div>`,
                },
            ]);
            this.addRoomCashBar('.ArnProperty', '.ArnPropDescription', 'afterend');
            this.buildSortSelectMenu();

            this.resizeMap();
        }

        // Property Detail
        if (document.querySelector('.SinglePropDetail')) {
            this.buildFooterMenu('.PropDetailView', 'afterend');
            this.insertContent([
                {
                    element: '.ArnRightListContainer',
                    position: 'afterbegin',
                    html: this.sub_header_container,
                },
            ]);
            if (utilities.matchMediaQuery('max-width: 560px')) {
                this.addRoomCashBar('.rateRow', 'tbody tr td.bookRoomCell', 'beforebegin');
            } else {
                this.addRoomCashBar('.rateRow', 'tbody tr', 'afterend');
            }
            document.querySelector('#moreRatesLink').addEventListener('click', () => {
                this.moveElements('#moreRates .rateRow', '.ArnRateCancelAnchor', 'afterend', '.RateCalendarPopupAnchor');
            });
        }

        // Checkout Page
        if (document.querySelector('.CheckOutForm')) {
            this.buildFooterMenu('#theReservationFormContainer', 'afterend');
            this.updateText('.discount th', 'RoomCash:');
            this.updateText('.dueNowRow th', 'Your Cash:');
            this.updateText('#theRateSummaryInfo div', 'Per room nightly rates:');
            this.roundUpValue('.discount td');
        }

        // Confirmation Page
        if (document.querySelector('.ConfirmationForm')) {
            this.buildFooterMenu('#theBookingPage', 'afterend');
            this.updateText('.discount th', 'RoomCash');
            this.updateText('.balanceDueRow th', 'Your Cash');
            this.insertContent([
                {
                    element: '.GuestForms',
                    position: 'beforeend',
                    html: `
                    <div class="roomcash-earned">
                        <div class="rc-earned-entries" id="congratulations">Congrats, ${
                            document.querySelector('meta[name="firstName"]').content
                        }! This reservation has earned you <strong>$50 RoomCash.</strong></div>
                        <div class="rc-earned-entries" id="exclusive-savings">Want to see what exclusive savings you can make on your next trip?</div>
                        <a id="book-another" href="https://hotels.roomcash.com" target="_blank">BOOK ANOTHER ROOM</a>
                        <div class="rc-earned-entries" id="dont-forget">Don't forget to check out some other ways you can <strong><a href="https://roomcash.com/how-it-works" target="_blank">earn RoomCash</a></strong> so you never miss out on savings again!</div>
                    </div>
                    `,
                },
            ]);
        }

        // Support Page
        if (document.querySelector('.WBSupportForm')) {
            this.buildFooterMenu('.ArnSubPage', 'afterend');
            this.buildSupportPage();
        }

        // Cancel Modify Page
        if (document.querySelector('.WBResendOrCancelForm')) {
            this.buildFooterMenu('.ArnSubPage', 'afterend');
            this.insertContent([
                {
                    element: '.ArnSubPage.WBResendOrCancelForm',
                    position: 'beforebegin',
                    html: this.sub_header_container,
                },
            ]);
            this.updateText('.ArnSubPage.WBResendOrCancelForm h1:first-of-type', 'Cancellations and Modifications');
        }
    }

    async resizeMap() {
        if (utilities.matchMediaQuery('max-width: 1100px')) return;
        await utilities.waitForSelectorInDOM('.pollingFinished');
        const original_params = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
        const lat = original_params.get('latitude');
        const lng = original_params.get('longitude');

        // eslint-disable-next-line no-undef
        ArnMap.invalidateSize();
        // eslint-disable-next-line no-undef
        ArnMap.setZoom(15);
        // eslint-disable-next-line no-undef
        ArnMap.panTo(new L.LatLng(lat, lng));
    }

    buildFooterMenu(insertElement, position) {
        const footer_menu = `
        <div id="footer-menu-container">
            <div id="links-container">
                <div class="links learn-more">
                        <li class="links-header">Learn More</li>
                        <li><a target="_blank" href="https://roomcash.com/how-it-works">How it Works</a></li>
                        <li><a target="_blank" href="https://roomcash.com/faqs">FAQ</a></li>
                </div>
                <div class="links support">
                        <li class="links-header">Support</li>
                        <li><a target="_blank" href="${document.querySelector('.ARN_ServiceLinks.supportLink').href}">Contact Us</a></li>
                        <li><a target="_blank" href="${document.querySelector('.ARN_ServiceLinks.cancelLink').href}">Cancel/Modify</a></li>
                </div>
                <div class="links partner">
                        <li class="links-header">Partner with RoomCash</li>
                        <li><a target="_blank" href="https://roomcash.com/add-hotel">Add Your Hotel</a></li>
                    <li><a target="_blank" href="https://roomcash.com/partnerships">Partnerships</a></li>
                </div>
            </div>
            <div id="policy-social">
                <div id="social-container">
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/facebook.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/instagram.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/google-play.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/apple-store.png">
                        </a>
                    </div>
                </div>
                <hr>
                <div id="copyright">
                    <p>Copyright &copy; ${new Date().getFullYear()}. All rights reserved</p>
                    <div>
                        <a target="_blank" href="https://www.iubenda.com/privacy-policy/14257085">Privacy Policy</a>
                        <span id="pipe"> | </span>
                        <a target="_blank" href="https://www.iubenda.com/privacy-policy/14257085/cookie-policy">Cookie Policy</a>
                        <span id="pipe"> | </span>
                        <a target="_blank" href="https://roomcash.com/terms">Terms & Conditions</a>
                        <span id="pipe"> | </span>
                        <a target="_blank" href="https://roomcash.com/remove-my-data">Remove My Data</a>
                    </div>
                </div>
            </div>
        </div>
        `;
        const container = document.querySelector(insertElement);

        container.insertAdjacentHTML(position, footer_menu);
    }

    async buildHeaderLinks() {
        await utilities.waitForSelectorInDOM('header');
        await utilities.waitForSelectorInDOM('#commands');
        const header = document.querySelector('header');
        const commands = document.querySelector('#commands');
        const hamburger = document.querySelector('#AdminControlsContainer');

        hamburger.insertAdjacentHTML(
            'afterbegin',
            `
            <div id="mobile-balance-container">
                <div>
                    <img src="${env_path.path}/site_configs/${this.config.directory_name}/img/points-icon.png">
                    <span id="mobile-balance">$${this.user_points}</span>
                </div>
            </div>
        `
        );

        commands.insertAdjacentHTML(
            'afterbegin',
            `
            <a id="mobile-account-link" href="https://roomcash.com/dashboard">My Account</a>
            <a target="_blank" href="https://roomcash.com/how-it-works">How It Works</a>
            <a target="_blank" href="https://roomcash.com/faqs">FAQ</a>
            <a target="_blank" href="https://roomcash.com/daily-deals">Daily Deals</a>
            <a target="_blank" href="https://roomcash.com/partnerships">Partnerships</a>
            `
        );

        header.insertAdjacentHTML(
            'beforeend',
            `
            <div id="admin-container">
                <div id="balance-container" class="header-link">
                    <img src="${env_path.path}/site_configs/${this.config.directory_name}/img/points-icon.png">
                    <span id="balance">$${this.user_points}</span>
                </div>
                <div id="search-container" class="header-link">
                    <span><a href="https://hotels.roomcash.com">SEARCH HOTELS</a></span>
                </div>
                <div id="account-container" class="header-link">
                    <span><a id="account-link" href="https://roomcash.com/dashboard">MY ACCOUNT</a></span>
                </div>
            </div>
        `
        );
    }

    insertContent(elementsArray) {
        elementsArray.forEach(async (obj) => {
            await utilities.waitForSelectorInDOM(obj.element);

            document.querySelector(obj.element).insertAdjacentHTML(obj.position, obj.html);
        });
    }

    removeCurrency(value, element) {
        let currency;
        if (document.querySelector('.SearchHotels')) {
            currency = element.querySelector('.arnCurrency').textContent;
        } else {
            currency = element.querySelector('.ArnNightlyRate').getAttribute('total');
            currency = currency.substring(currency.length - 3);
        }

        if (currency === '$' || currency === 'USD') {
            return value.substring(1);
        }
        return value.substring(0, value.length - 3);
    }

    addCurrency(value, element) {
        let currency;
        if (document.querySelector('.SearchHotels')) {
            currency = element.querySelector('.arnCurrency').textContent;
        } else {
            currency = element.querySelector('.ArnNightlyRate').getAttribute('total');
            currency = currency.substring(currency.length - 3);
        }

        if (currency === '$' || currency === 'USD') {
            return `$${value}`;
        }
        return `${value} ${currency}`;
    }

    getValues(property) {
        let your_cash;
        if (!property.querySelector('.originalPrice')) return undefined;

        if (document.querySelector('.SearchHotels')) {
            your_cash = property.querySelector('.arnUnit').innerHTML;
        } else if (document.querySelector('.SinglePropDetail')) {
            your_cash = property.querySelector('.ArnNightlyRate strong').innerHTML;
        }

        your_cash = your_cash.substring(0, your_cash.indexOf('<span>'));
        let room_cash = property.querySelector('.originalPrice').getAttribute('amount');
        const width = property.querySelector('.originalPrice').getAttribute('percent');

        room_cash = this.removeCurrency(room_cash, property);
        your_cash = this.addCurrency(your_cash, property);
        return {yc: your_cash, rc: Math.ceil(Number(room_cash)).toFixed(2), rc_width: width};
    }

    // TODO refactor
    async addRoomCashBar(containerName, insertElement, insertPosition) {
        if (document.querySelector('.SearchHotels')) {
            await utilities.waitForSelectorInDOM('.ratesLoaded');
        }
        await utilities.waitForSelectorInDOM(insertElement);
        const props = document.querySelectorAll(containerName);

        props.forEach((prop, idx) => {
            const values = this.getValues(prop);
            let html;
            let n_nights;

            if (prop.querySelector('.ArnLimitedAvail')) {
                prop.querySelector('.ArnRateCell').style.display = 'unset';
                prop.querySelector('.ArnRateButton').style.display = 'none';
                return;
            }

            if (!values) {
                prop.classList.add('no-roomCash-deal');
                if (!prop.querySelector('.RateCalendarPopupAnchor')) return;

                const daily_rates = prop.querySelector('.RateCalendarPopupAnchor');
                prop.querySelector('.ArnRateCancelAnchor').insertAdjacentElement('afterend', daily_rates);
                return;
            }

            if (!values.yc || !values.rc || !values.rc_width) return;
            if (document.querySelector('.SearchHotels')) {
                n_nights = prop.querySelector('.arnUnit span').textContent.trim();
                if (n_nights === 'for 1 nights') {
                    n_nights = n_nights.substring(0, n_nights.length - 1);
                }
                html = `
                <div class="roomcash-scale-container" id="rc-${idx}">
                    <div id="roomcash-bar-container">
                        <span class="bar"></span>
                    </div>
                <div class="container-lower">
                    <div class="roomcash-amount">     
                        <div class="cash-text">
                            <span class="rc-value">$${values.rc}</span>
                            <p>RoomCash</p>
                            <p class="nights">(${n_nights})</p>
                        </div>
                    </div>
                    <div class="your-cash-amount">      
                        <div class="cash-text">
                            <span class="yc-value">${values.yc}</span>
                            <p>Your Cash</p>
                            <p class="nights">(${n_nights})</p>
                        </div>
                    </div>
                    </div>
                </div>`;
            } else if (document.querySelector('.SinglePropDetail')) {
                n_nights = document.querySelector('.ArnNightlyRate strong span').textContent.trim();
                if (n_nights === 'for 1 nights') {
                    n_nights = n_nights.substring(0, n_nights.length - 1);
                }
                html = `
                <tr colspan="2">
                    <td colspan="2">
                        <div class="prop-detail-lower">
                            <div class="roomcash-scale-container" id="rc-${idx}">
                                <div class="container-lower">
                                    <div class="roomcash-amount">     
                                        <div class="cash-text">
                                            <span class="rc-value">$${values.rc}</span>
                                            <p>RoomCash</p>
                                            <p class="nights">(${n_nights})</p>
                                        </div>
                                    </div>
                                    <div class="your-cash-amount">      
                                        <div class="cash-text">
                                            <span class="yc-value">${values.yc}</span>
                                            <p>Your Cash</p>
                                            <p class="nights">(${n_nights})</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="roomcash-bar-container">
                                    <span class="bar"></span>
                                </div>
                            </div>
                            <div class="book"></div>
                        </div>
                    </td>
                </tr>`;
            }

            const selector = document.querySelector('.SearchHotels') ? `${prop.id}` : `rc-${idx}`;
            prop.querySelector(insertElement).insertAdjacentHTML(insertPosition, html);

            // add tooltip
            utilities.addToolTip(`#${selector} .roomcash-amount p`, 'beforeend', 'Maximum amount of your RoomCash we can apply.', '?', '#fff', '#000');
            utilities.addToolTip(`#${selector} .your-cash-amount p`, 'beforeend', `How much you'll pay when you book today.`, '?', '#fff', '#000');

            if (document.querySelector('.SinglePropDetail')) {
                const book_room = prop.querySelector('.bookRoom');
                const cancel = prop.querySelector('.ArnRateCancelAnchor');
                prop.querySelector('.book').insertAdjacentElement('afterbegin', book_room);
                prop.querySelector('.book').insertAdjacentElement('beforeend', cancel);
                this.moveElements('.rateRow', '.book', 'beforeend', '.RateCalendarPopupAnchor');
            }

            // Moves Book button
            if (!document.querySelector('.SearchHotels')) return;
            const button = prop.querySelector('.ArnRateButton');
            prop.querySelector('.ArnPropName').insertAdjacentElement('beforeend', button);

            // insert average nightly
            prop.querySelector('.ArnRateButton').insertAdjacentHTML(
                'afterend',
                `
                <div id="rc-avg-nightly">Avg/Night: <span>${prop.querySelector('.averageNightly').textContent}</span></div>
                `
            );
        });
    }

    handleEvent(sortOption) {
        localStorage.setItem('sortType', sortOption.id);
        window.location.href = sortOption.querySelector('a').href;
    }

    async setUpListener(sortTypeId, element) {
        const select_element = document.querySelector(element);
        document.querySelector(`#${sortTypeId}`).setAttribute('selected', 'selected');
        select_element.addEventListener('change', (e) => {
            this.handleEvent(document.querySelectorAll('#sort-select option')[select_element.selectedIndex]);
        });
    }

    async buildSortSelectMenu() {
        if (!document.querySelector('.SearchHotels')) return;
        await utilities.waitForSelectorInDOM('.sort-wrapper');
        let sort_type;

        const html = `
        <select id="sort-select">
            <option id="DealAmount"></option>
            <option id="BestValue"></option>
        </select>`;

        const price = document.querySelector('.ArnSortByPrice');
        const deal = document.querySelector('.ArnSortByDealAmount');

        document.querySelector('.sort-wrapper h4').insertAdjacentHTML('afterend', html);

        document.querySelector('#DealAmount').insertAdjacentElement('afterbegin', deal);
        document.querySelector('#BestValue').insertAdjacentElement('afterbegin', price);
        deal.textContent = 'RoomCash Savings';

        if (localStorage.getItem('sortType')) {
            sort_type = localStorage.getItem('sortType');
        } else {
            sort_type = document.querySelector('meta[name="SortType"]').content;
        }
        this.setUpListener(sort_type, '#sort-select');
    }

    async moveCurrency() {
        await utilities.waitForSelectorInDOM('.ArnQuadSearchContainer input');
        const currency = document.querySelector('.currencies-container');

        document.querySelector('.ArnQuadSearchContainer #theSubmitButton').insertAdjacentElement('afterend', currency);
    }

    async updateText(element, newText) {
        await utilities.waitForSelectorInDOM(element);

        document.querySelector(element).textContent = newText;
    }

    async updateAttribute(element, name, newAttr) {
        await utilities.waitForSelectorInDOM(element);

        document.querySelector(element).setAttribute(name, newAttr);
    }

    async buildSupportPage() {
        const support_form = document.querySelector('.WBSupportFormContainer');

        this.insertContent([
            {
                element: '.ArnSubPage.WBSupportForm',
                position: 'afterbegin',
                html: `
                    <div id="support-page">
                        <div id="support-lower">
                            <div id="contact-details">
                                <div id="support" class="contact-item">
                                    <h2>CUSTOMER SUPPORT</h2>
                                    <h4>Call Us: <a href="tel:1.866.584.0204">1.512.767.1360</a></h4>
                                    <h4>Email Us: <a href="mailto:reservations@hotelsforhope.com">reservations@roomcash.com</a></h4>
                                    <h4>Hours: M-F 8:00 AM - 5:30 PM CST</h4>
                                </div>
                                <div id="partner" class="contact-item">
                                    <h2>PARTNER INQUIRIES</h2>
                                    <h4>Call Us: <a href="tel:1.866.584.0204">1.512.767.1360</a></h4>
                                    <h4>Email Us: <a href="mailto:partners@hotelsforhope.com">partners@roomcash.com</a></h4>
                                </div>
                                <div id="marketing" class="contact-item">
                                    <h2>MARKETING INQUIRIES</h2>
                                    <h4>Call Us: <a href="tel:1.866.584.0204">1.512.767.1360</a></h4>
                                    <h4>Email Us: <a href="mailto:marketing@hotelsforhope.com">marketing@roomcash.com</a></h4>
                                </div>
                            </div>
                            <div id="contact-form">
                            </div>
                        </div>
                    </div>
                    `,
            },
            {
                element: '.ArnSubPage.WBSupportForm',
                position: 'beforebegin',
                html: this.sub_header_container,
            },
            {
                element: '.ArnSubPage.WBSupportForm',
                position: 'beforebegin',
                html: `
                    <div id="hero-image">
                        <div id="hero-header-containter">
                            <h1>GET IN TOUCH</h1>
                            <span>Have a question about your reservation? Want to chat about becoming a partner? We're here to help!</span>
                        </div>
                    </div>`,
            },
        ]);

        await utilities.waitForSelectorInDOM('#contact-form');
        document.querySelector('#contact-form').insertAdjacentElement('afterbegin', support_form);

        this.updateText('.WBSupportFormActions input', 'GET IN TOUCH');
        utilities.addAttributeToInput('.WBSupportFormActions input', 'GET IN TOUCH', 'value', '.WBSupportForm');

        utilities.addAttributeToInput('#theNameAjax input', 'Name', 'placeholder', '.WBSupportForm');
        utilities.addAttributeToInput('#theDaytimePhoneNumberAjax input', 'Phone', 'placeholder', '.WBSupportForm');
        utilities.addAttributeToInput('#theEmailAjax input', 'Email Address', 'placeholder', '.WBSupportForm');
        this.updateText('#theReasonForInquiryAjax select option', 'Reason for inquiry');
        utilities.addAttributeToInput('#theCommentsAjax textarea', '6', 'rows', '.WBSupportForm');
        utilities.addAttributeToInput('#theCommentsAjax textarea', 'Message', 'placeholder', '.WBSupportForm');
        utilities.addAttributeToInput('#theReservationConfirmationNumberAjax input', 'Confirmation Number', 'placeholder', '.WBSupportForm');
        utilities.addAttributeToInput('#theDateOfArrivalAjax input', 'Check In Date', 'placeholder', '.WBSupportForm');
        utilities.addAttributeToInput('#theHotelNameAjax input', 'Hotel Name', 'placeholder', '.WBSupportForm');
    }

    async moveElements(nodeList, destination, insertPosition, element_to_move_selector) {
        if (!document.querySelector(element_to_move_selector)) return;
        await utilities.waitForSelectorInDOM(element_to_move_selector);
        const elements = document.querySelectorAll(nodeList);
        elements.forEach((el) => {
            el.querySelector(destination).insertAdjacentElement(insertPosition, el.querySelector(element_to_move_selector));
        });
    }

    async wrapHeader() {
        await utilities.waitForSelectorInDOM('header');
        const header = document.querySelector('header');
        const wrapper = document.createElement('div');

        wrapper.classList.add('header-container');
        header.parentNode.insertBefore(wrapper, header);
        wrapper.appendChild(header);
    }

    roundUpValue(element) {
        if (!document.querySelector(element)) return;

        const roomcash_value = document.querySelector(element);
        const split = roomcash_value.textContent.split(' ');
        const val = Math.ceil(Number(split[0])).toFixed(2);
        const currency = split[1];

        roomcash_value.textContent = `${val} ${currency}`;
    }
}
