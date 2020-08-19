import SiteConfig from './62725-config';
import Resbeat from '../../js/resbeat';
import Utilities from '../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        this.addDemoSiteTextToHeader();
        this.showUsersCugPoints();

        if (document.querySelector('.SearchHotels')) {
            utilities.waitForTextInDOM('.ArnSearchHeader', 'Update Search').then(() => {
                this.boldLastWord(['.ArnPrimarySearchOuterContainer div.ArnSearchHeader']);
            });
        }

        if (document.querySelector('.SinglePropDetail')) {
            this.boldLastWord(['#standardAvail legend', '#thePropertyReviews legend', '#theGeneralInfo legend']);
            utilities.waitForTextInDOM('.ArnLeftListContainer .translateMe', 'Update Search').then(() => {
                this.boldLastWord(['.ArnLeftListContainer .translateMe']);
            });
        }

        if (document.querySelector('.CheckOutForm')) {
            setTimeout(() => {
                this.boldLastWord(['#theConfirmationContainer legend', '#theHotel legend']);
            }, 1);
        }
    }

    boldLastWord(arrayOfSelectors) {
        const strings = document.querySelectorAll(arrayOfSelectors);
        strings.forEach((string) => {
            if (!string) return;

            const text = string.textContent;
            const last_word_length = text.lastIndexOf(' ');
            const last_word = text.split(' ').pop();

            string.innerHTML = `${text.substring(0, last_word_length)} <b>${last_word}</b>`;
        });
    }

    async addDemoSiteTextToHeader() {
        await utilities.waitForSelectorInDOM('.subHeaderContainer');

        const subheader = document.querySelector('.subHeaderContainer');

        if (!subheader) return;

        subheader.insertAdjacentHTML('beforeBegin', `<h1 id="demo-messaging">DEMO</h1>`);
    }

    async showUsersCugPoints() {
        if (!this.site_config.cug.show_points || !this.site_config.cug.is_cug) return;

        await utilities.waitForSelectorInDOM('header');

        function showBelowHeader() {
            const member_data_meta = utilities.getMetaTagContent('memberMetaTag');
            const currency = utilities.getMetaTagContent('currency');
            let currency_text = '';

            if (!member_data_meta) return;

            const points = JSON.parse(member_data_meta).Points;
            if (currency === 'USD') {
                currency_text = `$${points}`;
            } else {
                currency_text = `${points} ${currency}`;
            }

            document.querySelector('header').insertAdjacentHTML(
                'afterEnd',
                `
                <div class="arn-points-container">Points: <span class="arn-points">${currency_text}</span></div>
                <style>
                    .arn-points-container{
                        text-align: right;
                        margin: 12px 12px 12px 0;
                        text-transform: uppercase;
                        font-size: 19px;
                        color: #666;
                    }

                    .arn-points{
                        font-weight: 700;
                    }
                </style>
                `
            );
        }

        function showPointsAppliedToOnRate() {
            // if (!document.querySelector('.SearchHotels')) return;

            let rate_containers = '';

            if (document.querySelector('.SearchHotels')) rate_containers = document.querySelectorAll('.ArnProperty');
            if (document.querySelector('.SinglePropDetail')) rate_containers = document.querySelectorAll('.ArnNightlyRate');

            rate_containers.forEach((container) => {
                const savings_element = container.querySelector('.originalPrice');
                if (!savings_element) return;
                const savings = savings_element.getAttribute('amount');
                console.log(savings);

                savings_element.insertAdjacentHTML(
                    'afterEnd',
                    `
                <div class="points-applied">Points Applied: <span>${savings} </span></div>
                <style>
                    .points-applied{
                        font-weight: 500;
                        padding: 4px 0;
                        font-size: 15px;
                        color: #666;
                    }

                    .points-applied span{
                        font-weight: 700;
                    }

                    .SearchHotels .originalPrice{
                        margin-top: 10px;
                    }
                </style>
            `
                );
            });
        }

        // I'm being lazy with this. Will fix if the points site ends up being used...
        if (document.querySelector('.CheckOutForm')) document.querySelector('.discount th').textContent = 'Points Applied:';

        showBelowHeader();
        showPointsAppliedToOnRate();
    }
}

new ChildPortal();
