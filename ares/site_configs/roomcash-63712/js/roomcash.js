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
        this.buildFooterMenu('.ArnSearchContainerMainDiv', 'afterend');
        this.buildHeaderLinks();
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
            {
                element: '.ArnSupportLinks.ArnSupportBottom',
                position: 'afterbegin',
                html: `
                    <div id="footer">
                        <div id="footer-title"><hr><span>RoomCash is Part of QuintEvents</span><hr></div>
                        <div id="brand-logos">
                            <a href=""><img src="https://via.placeholder.com/200x100"></a>
                            <a href=""><img src="https://via.placeholder.com/200x100"></a>
                            <a href=""><img src="https://via.placeholder.com/200x100"></a>
                        </div>
                    </div>`,
            },
        ]);
        this.updatePropertyContainer();
        this.buildSortSelectMenu();
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

    async buildHeaderLinks(balance) {
        await utilities.waitForSelectorInDOM('header');
        await utilities.waitForSelectorInDOM('#commands');
        const header = document.querySelector('header');

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

    updatePropertyContainer() {
        const props = document.querySelectorAll('.ArnProperty');

        props.forEach((prop) => {
            prop.querySelector('.ArnPropDescription').insertAdjacentHTML(
                'afterend',
                `
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
            );

            // Moves Book button
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
}
