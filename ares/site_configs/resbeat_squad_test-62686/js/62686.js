import SiteConfig from './62686-config';
import Resbeat from '../../../js/resbeat';
import Utilities from '../../../js/utilities';
import Path from '../../../js/path';

const dayjs = require('dayjs');

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
            const gateway_json = await fetch(`${env_path.path}/site_configs/resbeat_squad_test-62686/js/gateways.json`);
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

        async function appendGatewayNameToPage(element, name, gateway) {
            element.querySelector('td').insertAdjacentHTML(
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

        function buildUrl() {
            const prop_id = document.querySelector('meta[name="aPropertyId"]').content;
            const check_in = dayjs(document.querySelector('meta[name="checkIn"]').content).format('M/D/YYYY');
            const check_out = dayjs(document.querySelector('meta[name="checkOut"]').content).format('M/D/YYYY');
            const nights = dayjs(check_out).diff(dayjs(check_in), 'days');

            return `https://events.hotelsforhope.com/v6/?&type=property&property=${prop_id}&checkIn=${check_in}&nights=${nights}&siteid=39560`;
        }

        document.querySelector('#standardAvail legend').insertAdjacentHTML(
            'afterend',
            `
            <span id="check-gds-rates">
                <a href="${buildUrl()}" target="_blank">Check GDS Rates</a>
            </span>
            <style>
                #check-gds-rates {
                    float: right;
                    border: 1px solid #ccc;
                    margin: 10px 33px 10px 10px;
                }

                #check-gds-rates a {
                    padding: 10px;
                    color: #666;
                    text-decoration: none;
                }

                #check-gds-rates:hover {
                    background: #ccc;
                }

                #check-gds-rates:hover a {
                    color:#fff;
                }
            </style>
        `
        );
    }
}

new ChildPortal();
