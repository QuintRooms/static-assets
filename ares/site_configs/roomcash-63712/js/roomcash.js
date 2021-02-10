import Utilities from '../../../js/utilities';
import Path from '../../../js/build_tools/path';

const env_path = new Path();

const utilities = new Utilities();

export default class Roomcash {
    constructor(config) {
        this.config = config;
        this.init();
    }

    init() {
        // All pages
        this.buildHeaderLinks();
        this.insertContent([
            {
                element: '.ArnSupportLinks.ArnSupportBottom',
                position: 'afterbegin',
                html: `
                    <div id="footer">
                        <div id="footer-title"><hr><span>RoomCash is Part of QuintEvents</span><hr></div>
                        <div id="brand-logos">
                            <a href="https://quintevents.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/quint-logo.png"></a>
                            <a href="https://resbeat.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/resbeat-logo.png"></a>
                            <a href="https://www.hotelsforhope.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/h4h-logo.png"></a>
                        </div>
                    </div>`,
            },
        ]);

        // Root Page
        if (document.querySelector('.RootBody')) {
            this.buildFooterMenu('.ArnSearchContainerMainDiv', 'afterend');
            this.insertContent([
                {
                    element: '.SearchHotels .ArnSearchContainerMainDiv',
                    position: 'afterbegin',
                    html: `
                    <span id="sub-header-container">
                        <a href="">How It Works</a>
                        <a href="">FAQs</a>
                        <a href="">Daily Deals</a>
                        <a href="">Partnerships</a>
                    </span>`,
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
                    html: `
                    <span id="sub-header-container">
                        <a href="">How It Works</a>
                        <a href="">FAQs</a>
                        <a href="">Daily Deals</a>
                        <a href="">Partnerships</a>
                    </span>`,
                },
                {
                    element: '.SearchHotels .lblAmenities',
                    position: 'beforeBegin',
                    html: `<div id="filter-by">FILTER BY</div>`,
                },
            ]);
            this.updatePropertyContainer('.ArnProperty', '.ArnPropDescription', 'afterend');
            this.buildSortSelectMenu();
        }

        // Property Detail
        if (document.querySelector('.SinglePropDetail')) {
            this.buildFooterMenu('.PropDetailView', 'afterend');
            this.insertContent([
                {
                    element: '.PropDetailView',
                    position: 'beforebegin',
                    html: `
                    <span id="sub-header-container">
                        <a href="">How It Works</a>
                        <a href="">FAQs</a>
                        <a href="">Daily Deals</a>
                        <a href="">Partnerships</a>
                    </span>`,
                },
            ]);
            this.updatePropertyContainer('.rateRow', '.RoomDescription', 'beforeend');
        }

        // Checkout Page
        if (document.querySelector('.CheckOutForm')) {
            this.buildFooterMenu('#theReservationFormContainer', 'afterend');
        }

        // Confirmation Page
        if (document.querySelector('.ConfirmationForm')) {
            this.buildFooterMenu('#theBookingPage', 'afterend');
        }
    }

    buildFooterMenu(insertElement, position) {
        const footer_menu = `
        <div id="footer-menu-container">
            <div id="links-container">
                <div class="links">
                        <li class="links-header">Learn More</li>
                        <li><a href="">How it Works</a></li>
                        <li><a href="">FAQs</a></li>
                </div>
                <div class="links">
                        <li class="links-header">About RoomCash</li>
                        <li><a href="">Our Mission</a></li>
                        <li><a href="">Contact Us</a></li>
                </div>
                <div class="links">
                        <li class="links-header">Partner with RoomCash</li>
                        <li><a href="">Add Your Hotel</a></li>
                    <li><a href="">Corporate Partners</a></li>
                </div>
            </div>
            <div id="policy-social">
                <div id="social-container">
                    <div class="social-icon">
                        <a href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/facebook.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/instagram.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a href="">
                            <img src="">m
                        </a>
                    </div>
                    <div class="social-icon">
                        <a href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/app-store.png">
                        </a>
                    </div>
                </div>
                <hr>
                <div id="copyright">
                    <p>Copyright &copy; 2020. All rights reserved</p>
                    <div><a href="">Privacy Policy</a><span id="pipe">|</span><a href="">Terms & Conditions</a></div>
                </div>
            </div>
        </div>
        `;
        const container = document.querySelector(insertElement);

        container.insertAdjacentHTML(position, footer_menu);
    }

    async moveAccountLink() {
        await utilities.waitForSelectorInDOM('#account-container');
        const profile = document.querySelector('.profileCommand');
        profile.textContent = 'MY ACCOUNT';
        document.querySelector('#account-container span').insertAdjacentElement('afterbegin', profile);
    }

    async buildHeaderLinks() {
        await utilities.waitForSelectorInDOM('header');
        await utilities.waitForSelectorInDOM('#commands');
        const header = document.querySelector('header');
        const commands = document.querySelector('#commands');
        const hamburger = document.querySelector('#AdminControlsContainer');
        const account_link = document.querySelector('.profileCommand').href;

        hamburger.insertAdjacentHTML(
            'afterbegin',
            `
            <div id="mobile-balance-container">
                <span id="mobile-balance">$50</span>
            </div>
        `
        );

        commands.insertAdjacentHTML(
            'afterbegin',
            `
            <a id="mobile-account-link "href="${account_link}">My Account</a>
            <a href="">How It Works</a>
            <a href="">FAQs</a>
            <a href="">Daily Deals</a>
            <a href="">Partnerships</a>
            `
        );

        header.insertAdjacentHTML(
            'beforeend',
            `
            <div id="admin-container">
                <div id="balance-container" class="header-link">
                    <img src="https://via.placeholder.com/50x50">
                    <span id="balance">$50</span>
                </div>
                <div id="account-container" class="header-link">
                    <span></span>
                </div>
                <div id="search-container" class="header-link">
                    <span><a href="">SEARCH HOTELS</a></span>
                </div>
            </div>
        `
        );

        this.moveAccountLink();
    }

    insertContent(elementsArray) {
        elementsArray.forEach(async (obj) => {
            await utilities.waitForSelectorInDOM(obj.element);

            document.querySelector(obj.element).insertAdjacentHTML(obj.position, obj.html);
        });
    }

    async updatePropertyContainer(containerName, insertElement, insertPosition) {
        const props = document.querySelectorAll(containerName);

        const html = document.querySelector('.SearchHotels')
            ? `
        <div class="roomcash-scale-container">
            <div class="roomcash-amount">
                <div class="bar roomcash"></div>
                <div class="cash-text">
                    <span class="rc-value">$25</span>
                    <p>RoomCash</p>
                    <p>(per night)</p>
                </div>
            </div>
            <div class="your-cash-amount">
                <div class="bar your-cash"></div>
                <div class="cash-text">
                    <span class="yc-value">$125</span>
                    <p>Your Cash</p>
                    <p>(per night)</p>
                </div>
            </div>
        </div>
    `
            : `
    <div class="roomcash-scale-container">
        <div class="roomcash-amount">
            <div class="cash-text">
                <span class="rc-value">$25</span>
                <p>RoomCash</p>
                <p>(per night)</p>
            </div>
            <div class="bar roomcash"></div>
        </div>
        <div class="your-cash-amount">
            <div class="cash-text">
                <span class="yc-value">$125</span>
                <p>Your Cash</p>
                <p>(per night)</p>
            </div>
            <div class="bar your-cash"></div>
        </div>
    </div>
`;

        props.forEach((prop) => {
            prop.querySelector(insertElement).insertAdjacentHTML(insertPosition, html);

            // Moves Book button
            if (!document.querySelector('.SearchHotels')) return;
            const button = prop.querySelector('.ArnRateButton');
            prop.querySelector('.ArnPropName').insertAdjacentElement('beforeend', button);
        });
    }

    async buildSortSelectMenu() {
        if (!document.querySelector('.SearchHotels')) return;
        await utilities.waitForSelectorInDOM('.sort-wrapper');
        const html = `
        <select id="sort-select">
            <option id="sort-price"></option>
            <option id="sort-rating"></option>
        </select>`;

        const price = document.querySelector('.ArnSortByPrice');
        const rating = document.querySelector('.ArnSortByClass');

        document.querySelector('.sort-wrapper h4').insertAdjacentHTML('afterend', html);

        document.querySelector('#sort-price').insertAdjacentElement('afterbegin', price);
        document.querySelector('#sort-rating').insertAdjacentElement('afterbegin', rating);
    }

    async moveCurrency() {
        await utilities.waitForSelectorInDOM('.ArnQuadSearchContainer input');
        const currency = document.querySelector('.currencies-container');

        document.querySelector('.ArnQuadSearchContainer #theSubmitButton').insertAdjacentElement('afterend', currency);
    }
}
