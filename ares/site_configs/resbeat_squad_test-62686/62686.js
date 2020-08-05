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
        this.showGDSRatesButton();

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
        if (!document.querySelector('.SinglePropDetail')) return;

        async function fetchGatewayJson() {
            const gateway_json = await fetch(`${env_path.path}/site_configs/resbeat_squad_test-62686/gateways.json`);
            const gateways = await gateway_json.json();
            return gateways;
        }

        async function findMatchInGatewayJson(gateway_string) {
            let supplier_name;
            let gateway_match;
            const gateway_obj = await fetchGatewayJson();
            Object.entries(gateway_obj).forEach((el) => {
                if (el[0] === gateway_string) {
                    // eslint-disable-next-line prefer-destructuring
                    supplier_name = el[1];
                    // eslint-disable-next-line prefer-destructuring
                    gateway_match = el[0];
                }
            });
            return [gateway_match, supplier_name];
        }

        function appendGatewayNameToPage(element, name, gateway) {
            element.querySelector('.RoomDescription').insertAdjacentHTML(
                'beforeend',
                `
                <div id="gatewayData">
                    <div class="supplierName">Supplier Name: ${name}</div>
                    <div class="gateway">Gateway: ${gateway}</div>
                </div>
            <style>
                #gatewayData {
                    padding: 20px 0;
                    font-weight: 800;
                }
            </style>
            `
            );
        }

        async function getGatewayName() {
            const rates = document.querySelectorAll('table .ArnRateList');
            rates.forEach((e) => {
                for (let i = 0; i < e.classList.length; i += 1) {
                    if (/\S[B][1-9]|[1-9][0-9]$/.test(e.classList[i])) {
                        const str = e.classList[i];
                        // eslint-disable-next-line no-loop-func
                        findMatchInGatewayJson(str.replace(/\D/g, '')).then((res) => {
                            appendGatewayNameToPage(e, res[1], res[0]);
                        });
                    }
                }
            });
        }
        getGatewayName();
    }

    showGDSRatesButton() {
        if (!document.querySelector('.SinglePropDetail')) return;
        // let gds_url;
        const orig_params = document.querySelector('meta[name="originalParams"]').content;
        let url = new URL(`https://events.hotelsforhope.com/v6/?${orig_params}`);
        const params = new URLSearchParams(url.search.slice(1));
        url = params.delete('type');
        params.delete('siteid');
        const prop_id = document.querySelector('meta[name="aPropertyId"]').content;
        document.querySelector('#standardAvail').insertAdjacentHTML(
            'beforeend',
            `
            <span id="check-gds-rates">
                <a href="${url}siteId=39560&type=property&property=${prop_id}" target="_blank">Check GDS Rates</a>
            </span>
        `
        );
    }
}
// URL= https://events.hotelsforhope.com/v6/?siteid=39560nights=1&type=property&property=20498&useMiles=&latitude=30.2711&checkin=8/21/2020&s&destination=Austin,%20Texas,%20United%20States%20of%20America&pagesize=10&adults=2&currency=USD&rooms=1&longitude=-97.7437

new ChildPortal();
