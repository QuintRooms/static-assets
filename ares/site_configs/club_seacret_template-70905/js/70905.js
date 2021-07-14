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
        this.trip = {};
    }

    async init() {
        if (!document.querySelector('.SinglePropDetail')) return;

        await this.getReferenceId();
        await this.fetchTrips();
        await this.fetchPropertyHtml();
        this.getTrip();
        this.insertTripDetailsIntoHtml();
    }

    async getReferenceId() {
        return fetch(
            'https://club-seacret.cdn.prismic.io/api/v2?access_token=MC5ZT2NaZlJFQUFDOEFMNzU4.Yu-_ve-_ve-_ve-_vSpTKk7vv73vv71RFj15NyMgCu-_ve-_vRPvv73vv73vv71ZVO-_ve-_vUpf77-9#format=json',
            {
                method: 'GET',
                redirect: 'follow',
            }
        )
            .then((response) => response.json())
            .then((result) => {
                this.ref = result.refs[0].ref;
            })
            .catch((error) => console.log('error', error));
    }

    async fetchTrips() {
        return fetch(
            `https://club-seacret.cdn.prismic.io/api/v2/documents/search?ref=${this.ref}&access_token=MC5ZT2NaZlJFQUFDOEFMNzU4.Yu-_ve-_ve-_ve-_vSpTKk7vv73vv71RFj15NyMgCu-_ve-_vRPvv73vv73vv71ZVO-_ve-_vUpf77-9#format=json`,
            {
                method: 'GET',
                redirect: 'follow',
            }
        )
            .then((response) => response.json())
            .then((result) => {
                this.trips = result;
                console.log(this.trips);
            })
            .catch((error) => console.log('error', error));
    }

    async fetchPropertyHtml() {
        document.body.insertAdjacentHTML('afterBegin', '<div id="property-html"></div>');

        // url below is an example of how you could use this method
        const promise = utilities.fetchHTMLFromFile(`https://dev-static.hotelsforhope.com/ares/site_configs/club_seacret_template-70905/html/seacret.html`);

        promise.then((html) => {
            document.querySelector('#property-html').innerHTML = html;
        });
    }

    getTrip() {
        const trip_id = utilities.getUrlParameter('tripId');

        this.trip = this.trips.results.find((obj) => {
            return obj.id === trip_id;
        });

        return this.trip;
    }

    async insertTripDetailsIntoHtml() {
        //document. returns 'null'
        utilities.waitForSelectorInDOM('#itinerary-section-title');
        const itinerary_title = document.getElementById('#itinerary-section-title');
        console.log(itinerary_title);

        //document.bpdy also returns 'undefined'
        const trips_section = document.body.querySelector('.trips-section');
        console.log(trips_section);

        //this.document. gives 'undefined'
        // const trip_item = this.document.querySelector('.trip-item');
        // console.log(trip_item);

        //document.body works...
        document.body.insertAdjacentHTML(
            'afterBegin',
            `
        <div class="trips">
            <div class="trip">
                <div id="trip-name"></div>
                <div id="trip-date"></div>
                <div id="itinerary"></div>
            </div>
        </div>
        `
        );

        if (!document.querySelector('#trip-name') || !document.querySelector('#trip-date') || !document.querySelector('#itinerary')) return;

        document.querySelector('#trip-name').innerHTML = this.trip.data.trip_name[0].text;
        document.querySelector('#trip-date').innerHTML = `${this.trip.data.start_date} - ${this.trip.data.end_date}`;

        this.trip.data.itinerary.forEach((i) => {
            document.querySelector('#itinerary').insertAdjacentHTML(
                'beforeEnd',
                `
                <div>
                    <span class="day">${i.day[0].text}</span>
                    <span class="description">${i.description[0].text}</span>
                </div>
            `
            );
        });
    }
}

new ChildPortal();
