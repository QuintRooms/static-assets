import SiteConfig from './62686-config';
import Resbeat from '../../js/resbeat';
import Utilities from '../../js/utilities';
import Path from '../../js/path';

const env_path = new Path();

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
        this.showGatewaySupplier();

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
        await utilities.waitForSelectorInDOM('header');

        const header = document.querySelector('header');

        if (!header) return;

        header.insertAdjacentHTML('afterEnd', `<h1 id="demo-messaging">DEMO</h1>`);
    }

    showGatewaySupplier() {
        // if (!document.querySelector('.SinglePropDetail')) return;

        // fetch the gateway json
        // eslint-disable-next-line no-unused-vars
        async function fetchGatewayJson() {
            const gateway_json = await fetch(`${env_path.path}/site_configs/resbeat_squad_test-62686/gateways.json`);
            const gateways = await gateway_json.json();
            return gateways;
        }

        // get node list of rates on single prop page
        async function getPropRates() {
            const rates = document.querySelectorAll('table .ArnRateList');
            console.log(rates);
            rates.forEach((e) => {
                for (let i = 0, l = e.classList.length; i < l; i += 1) {
                    if (/^(S|SB)([1-9]|[1-9][0-9]){0,4}$/) {
                        console.log('after regex: ', e.className);
                    }
                }
                // console.log(e.classList);
                // if (e.classList.contains(/^(S|SB)([1-9]|[1-9][0-9]){0,4}$/)) {
                //     console.log('after regex: ', e.classList);
                // }
            });

            // const gateways = await fetchGatewayJson();
            // Object.entries(gateways).forEach((el) => {

            // })
        }

        getPropRates();

        // For each node list entry, loop through gateway json and check for matches in gateway numbers.

        // if there's a match, save the value asscociated with the key to later display on room rate container
    }
}

new ChildPortal();
