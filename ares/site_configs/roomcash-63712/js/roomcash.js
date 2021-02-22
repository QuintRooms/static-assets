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
            <a id="faq" target="_blank" href="https://roomcash.com/faqs">FAQs</a>
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
        this.insertContent([
            {
                element: '.ArnSupportLinks.ArnSupportBottom',
                position: 'afterbegin',
                html: `
                    <div id="footer">
                        <div id="footer-title"><hr><span>RoomCash is Part of QuintEvents</span><hr></div>
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
            this.updateText('.ArnPrimarySearchOuterContainer h3:first-of-type', 'START SEARCHING AND CHOOSE FROM 600,000+ GLOBAL HOTELS');
            this.buildFooterMenu('.ArnSearchContainerMainDiv', 'afterend');
            this.insertContent([
                {
                    element: '.SearchHotels .ArnSearchContainerMainDiv',
                    position: 'afterbegin',
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
        }

        // Checkout Page
        if (document.querySelector('.CheckOutForm')) {
            this.buildFooterMenu('#theReservationFormContainer', 'afterend');
            this.updateText('.discount th', 'RoomCash');
            this.updateText('.dueNowRow th', 'Your Cash');
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
        }
    }

    buildFooterMenu(insertElement, position) {
        const footer_menu = `
        <div id="footer-menu-container">
            <div id="links-container">
                <div class="links">
                        <li class="links-header">Learn More</li>
                        <li><a target="_blank" href="https://roomcash.com/how-it-works">How it Works</a></li>
                        <li><a target="_blank" href="https://roomcash.com/faqs">FAQs</a></li>
                </div>
                <div class="links">
                        <li class="links-header">Support</li>
                        <li><a target="_blank" href="${document.querySelector('.ARN_ServiceLinks.supportLink').href}">Contact Us</a></li>
                        <li><a target="_blank" href="${document.querySelector('.ARN_ServiceLinks.cancelLink').href}">Cancel/Modify</a></li>
                </div>
                <div class="links">
                        <li class="links-header">Partner with RoomCash</li>
                        <li><a target="_blank" href="https://roomcash.com/add-hotel">Add Your Hotel</a></li>
                    <li><a target="_blank" href="https://roomcash.com/partnerships">Corporate Partners</a></li>
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
                            <img src="">m
                        </a>
                    </div>
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/app-store.png">
                        </a>
                    </div>
                </div>
                <hr>
                <div id="copyright">
                    <p>Copyright &copy; 2020. All rights reserved</p>
                    <div><a target="_blank" href="https://roomcash.com/privacy-policy">Privacy Policy</a><span id="pipe">|</span><a target="_blank" href="https://roomcash.com/terms">Terms & Conditions</a></div>
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
                <span id="mobile-balance">${this.user_points}</span>
            </div>
        `
        );

        commands.insertAdjacentHTML(
            'afterbegin',
            `
            <a id="mobile-account-link" href="https://roomcash.com/dashboard">My Account</a>
            <a target="_blank" href="https://roomcash.com/how-it-works">How It Works</a>
            <a target="_blank" href="https://roomcash.com/faqs">FAQs</a>
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
                    <span id="balance">${this.user_points}</span>
                </div>
                <div id="account-container" class="header-link">
                    <span><a id="account-link" href="https://roomcash.com/dashboard">MY ACCOUNT</a></span>
                </div>
                <div id="search-container" class="header-link">
                    <span><a href="https://hotels.roomcash.com">SEARCH HOTELS</a></span>
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
        return {yc: your_cash, rc: room_cash, rc_width: width};
    }

    // TODO refactor
    async addRoomCashBar(containerName, insertElement, insertPosition) {
        if (document.querySelector('.SearchHotels')) {
            await utilities.waitForSelectorInDOM('.pollingFinished');
        }
        await utilities.waitForSelectorInDOM(insertElement);
        const props = document.querySelectorAll(containerName);

        props.forEach((prop, idx) => {
            const values = this.getValues(prop);

            if (prop.querySelector('.ArnLimitedAvail') || !values) {
                prop.querySelector('.ArnRateCell').style.display = 'unset';
                prop.querySelector('.ArnRateButton').style.display = 'none';
                return;
            }

            if (!values.yc || !values.rc || !values.rc_width) return;
            const original_params = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
            const n_nights = original_params.get('nights');
            const stay = n_nights === '1' ? 'night' : 'nights';
            const html = document.querySelector('.SearchHotels')
                ? `
                <div class="roomcash-scale-container" id="rc-${idx}">
                    <div id="roomcash-bar-container">
                        <span class="bar"></span>
                    </div>
                <div class="container-lower">
                    <div class="roomcash-amount">     
                        <div class="cash-text">
                            <span class="rc-value">${values.rc}</span>
                            <p>RoomCash</p>
                            <p>(for ${n_nights} ${stay})</p>
                        </div>
                    </div>
                    <div class="your-cash-amount">      
                        <div class="cash-text">
                            <span class="yc-value">${values.yc}</span>
                            <p>Your Cash</p>
                            <p>(for ${n_nights} ${stay})</p>
                        </div>
                    </div>
                    </div>
                </div>
    `
                : `
                <tr colspan="2">
                    <td colspan="2">
                        <div class="prop-detail-lower">
                            <div class="roomcash-scale-container" id="rc-${idx}">
                                <div class="container-lower">
                                    <div class="roomcash-amount">     
                                        <div class="cash-text">
                                            <span class="rc-value">${values.rc}</span>
                                            <p>RoomCash</p>
                                            <p>(for ${n_nights} ${stay})</p>
                                        </div>
                                    </div>
                                    <div class="your-cash-amount">      
                                        <div class="cash-text">
                                            <span class="yc-value">${values.yc}</span>
                                            <p>Your Cash</p>
                                            <p>(for ${n_nights} ${stay})</p>
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
                </tr>
`;

            const selector = document.querySelector('.SearchHotels') ? `${prop.id}` : `rc-${idx}`;
            prop.querySelector(insertElement).insertAdjacentHTML(insertPosition, html);

            // add tooltip
            utilities.addToolTip(`#${selector} .roomcash-amount p`, 'beforeend', 'Maximum amount of your RoomCash we can apply', '?', '#fff', '#000');
            utilities.addToolTip(`#${selector} .your-cash-amount p`, 'beforeend', 'How much of your cash is needed', '?', '#fff', '#000');

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

    async buildSortSelectMenu() {
        if (!document.querySelector('.SearchHotels')) return;
        await utilities.waitForSelectorInDOM('.sort-wrapper');
        const html = `
        <select id="sort-select">
            <option id="sort-deal"></option>
            <option id="sort-price"></option>
        </select>`;

        const price = document.querySelector('.ArnSortByPrice');
        const deal = document.querySelector('.ArnSortByDealAmount');

        document.querySelector('.sort-wrapper h4').insertAdjacentHTML('afterend', html);

        document.querySelector('#sort-deal').insertAdjacentElement('afterbegin', deal);
        document.querySelector('#sort-price').insertAdjacentElement('afterbegin', price);
        deal.textContent = 'RoomCash Savings';
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
                        <div id="hero-image">
                            <h1>GET IN TOUCH</h1>
                            <span>We're here to help! Contact us and we'll help you anyway we can</span>
                        </div>
                        <div id="support-lower">
                            <div id="contact-details">
                                <div id="support" class="contact-item">
                                    <h3>Customer Support</h3>
                                    <h5>Call Us: <a href="tel:1.866.584.0204">1.512.767.1360</a></h5>
                                    <h5>Email Us: <a href="mailto:reservations@hotelsforhope.com">reservations@roomcash.com</a></h5>
                                </div>
                                <div id="partner" class="contact-item">
                                    <h3>PARTNER INQUIRIES</h3>
                                    <h5>Call Us: <a href="tel:1.866.584.0204">1.512.767.1360</a></h5>
                                    <h5>Email Us: <a href="mailto:reservations@hotelsforhope.com">reservations@roomcash.com</a></h5>
                                </div>
                                <div id="marketing" class="contact-item">
                                    <h3>MARKETING INQUIRIES</h3>
                                    <h5>Call Us: <a href="tel:1.866.584.0204">1.512.767.1360</a></h5>
                                    <h5>Email Us: <a href="mailto:reservations@hotelsforhope.com">reservations@roomcash.com</a></h5>
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
                position: 'afterbegin',
                html: this.sub_header_container,
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
        utilities.addAttributeToInput('#theCommentsAjax textarea', 'Message', 'placeholder', '.WBSupportForm');
        utilities.addAttributeToInput('#theCommentsAjax textarea', '6', 'rows', '.WBSupportForm');
    }

    async moveElements(nodeList, destination, insertPosition, element_to_move_selector) {
        if (!document.querySelector(element_to_move_selector)) return;
        await utilities.waitForSelectorInDOM(element_to_move_selector);
        const elements = document.querySelectorAll(nodeList);
        elements.forEach((el) => {
            el.querySelector(destination).insertAdjacentElement(insertPosition, el.querySelector(element_to_move_selector));
        });
    }
}
