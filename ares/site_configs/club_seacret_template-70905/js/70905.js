import BasePortal from '../../../js/build';
import SiteConfig from './70905-config';
import Utilities from '../../../js/utilities';

const site_config = new SiteConfig();
const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();

        this.init();

        this.ref = '';
        this.trips = {};
    }

    async init() {
        if (!document.querySelector('.SinglePropDetail')) return;

        await this.getReferenceId();
        await this.fetchTrips();
        this.fetchPropertyHtml();
    }

    async getReferenceId() {
        const options = {
            method: 'GET',
            redirect: 'follow',
        };

        return fetch('https://club-seacret.cdn.prismic.io/api/v2', options)
            .then((response) => response.json())
            .then((result) => {
                this.ref = result.refs[0].ref;
                console.log(this.ref);
            })
            .catch((error) => console.log('error', error));
    }

    async fetchTrips() {
        const options = {
            method: 'GET',
            redirect: 'follow',
        };

        return fetch(
            `https://club-seacret.cdn.prismic.io/api/v2/documents/search?ref=${this.ref}&access_token=MC5ZT2NaZlJFQUFDOEFMNzU4.Yu-_ve-_ve-_ve-_vSpTKk7vv73vv71RFj15NyMgCu-_ve-_vRPvv73vv73vv71ZVO-_ve-_vUpf77-9#format=json\n\n\n`,
            options
        )
            .then((response) => response.json())
            .then((result) => {
                this.trips = result;
                console.log(this.trips);
            })
            .catch((error) => console.log('error', error));
    }

    fetchPropertyHtml() {
        document.body.insertAdjacentHTML('afterBegin', '<div id="property-html"></div>');

        // url below is an example of how you could use this method
        const promise = utilities.fetchHTMLFromFile(`https://static.hotelsforhope.com/ares/html/css-grid.html`);

        // Get prop id and trip id from URL to conditionalize which dataset to use

        promise.then((html) => {
            document.querySelector('#property-html').innerHTML = html;
        });
    }
}

new ChildPortal();
