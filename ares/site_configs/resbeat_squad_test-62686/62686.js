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

    async showGatewaySupplier() {
        const gateway_json = await fetch(`${env_path.path}/site_configs/resbeat_squad_test-62686/gateways.json`);
        const gateways = await gateway_json.json();
        console.log(gateways);
    }
}

new ChildPortal();
