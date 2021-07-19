import dayjs from 'dayjs';
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
        await this.getTrip();
        this.insertTripDetailsIntoHtml();
        this.restyleCarousel();
        this.hideArnElements();
        this.updateCheckoutInterface();
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
        // console.log(document.querySelector('#property-html'));
        // url below is an example of how you could use this method
        const promise = utilities.fetchHTMLFromFile(`https://dev-static.hotelsforhope.com/ares/site_configs/club_seacret_template-70905/html/seacret.html`);

        promise.then((html) => {
            // document.querySelector('#property-html').innerHTML = html;
            document.querySelector('header').insertAdjacentHTML(
                'afterEnd',
                `   <div class='seacret-header'>
                            <div class='language-select'></div>
                        </div>
                        <div class='hero-container'></div>
                    </div>

                    <article class='body-article'>

                        <section class='itinerary-section'>
                            <h3 class='section-title' id='itinerary-section-title'>ITINERARY</h3>
                            <div class='itinerary-list'></div>
                        </section>

                        <section class='trips-section'>
                        <h3 class='section-title' id='trips-section-title'>TRIPS</h3>
                        <div class='trips-list'>
                        </div>
                        </section>

                    </article>

                    <article class='bottom-carousel-article'>

                    </article>
                `
            );
        });
    }

    async getTrip() {
        const trip_id = utilities.getUrlParameter('tripId');

        this.trip = this.trips.results.find((obj) => {
            return obj.id === trip_id;
        });

        return this.trip;
    }

    hideArnElements() {
        utilities.waitForSelectorInDOM('.ArnRightListContainer');
        const arn_right_container = document.querySelector('.ArnRightListContainer');
        const arn_left_container = document.querySelector('.ArnLeftListContainer');
        arn_right_container.classList.add('hide');
        arn_left_container.classList.add('hide');
    }

    async insertTripDetailsIntoHtml() {
        await utilities.waitForSelectorInDOM('#itinerary-section-title');
        const start_date = dayjs(this.trip.data.start_date).format('MM/DD/YYYY');
        const end_date = dayjs(this.trip.data.end_date).format('MM/DD/YYYY');

        document.querySelector('.hero-container').insertAdjacentHTML(
            'afterBegin',
            `
            <div class='hero-text-container'>
                <h1 class='trip-title'>${this.trip.data.trip_name[0].text}</h1>
                <div class='location-date-container'>
                    <h2 class='trip-location'>${this.trip.data.property_name[0].text}</h2> 
                    <h2 class='event-text-separators'> | </h2>
                    <h2 class='trip-location'>${this.trip.data.trip_location[0].text}</h2>
                    <h2 class='event-text-separators'> | </h2>
                    <h2 class='trip-date'>${start_date} - ${end_date}</h2>
                </div>
            </div>
        `
        );

        // if (!document.querySelector('#trip-name') || !document.querySelector('#trip-date') || !document.querySelector('#itinerary-section-title')) return;

        this.trip.data.itinerary.forEach((i) => {
            document.querySelector('.itinerary-list').insertAdjacentHTML(
                'beforeEnd',
                `
                    <div class='itinerary-item'>
                        <div class='itinerary-text'>
                            <span class="itinerary-day">${i.day[0].text}</span>
                            <span class="itinerary-description">${i.description[0].text}</span>
                        </div>
                        <hr class='itinerary-separator'>
                    </div>
                `
            );
        });

        const room_array = document.querySelectorAll('#standardAvail .rateRow');
        // console.log('room_array', room_array);

        room_array.forEach((i) => {
            const text_string = i.innerText;
            console.log(text_string);
            const text_array = i.innerText.split(':');
            const room_title = text_array[0].slice(21);
            console.log('room text_array', text_array);
            const room_description = text_array[1];
            const full_rate_string = i.querySelector('.full-stay').innerText;
            const trip_rate = Number(full_rate_string.split(' ')[0]).toLocaleString();
            // const trip_link = i.querySelector('.bookRoom').getAttribute('href');

            document.querySelector('.trips-list').insertAdjacentHTML(
                'afterBegin',
                `
                <div class='trip-item'>
                    <div class='trip-text-container'>
                        <div class='trip-item-name'>${room_title}</div>
                        <div class="trip-price-mobile">$${trip_rate}</div>
                        <p class='trip-item-description'>${room_description}</p>
                    </div>
                    <div class='trip-price-cta-container'>
                        <div class='trip-price-desktop'>$${trip_rate}</div>
                        <div class='trip-ctas'>
                        </div>
                    </div>
                </div>
                `
            );

            const cta_container = document.querySelector('.trip-ctas');
            const original_book_cta = i.querySelector('.bookRoom');
            original_book_cta.classList.remove('bookRoom');
            original_book_cta.classList.add('book-button');
            original_book_cta.classList.add('new-cta');
            original_book_cta.innerText = 'BOOK TRIP';
            cta_container.appendChild(original_book_cta);

            const original_hold_cta = i.querySelector('.holdRoom');

            if (original_hold_cta) {
                original_hold_cta.classList.remove('holdRoom');
                original_hold_cta.classList.add('hold-button');
                original_hold_cta.classList.add('new-cta');
                original_hold_cta.innerText = 'HOLD TRIP';
                cta_container.appendChild(original_hold_cta);
            }

            const price_cta_container = document.querySelector('.trip-price-cta-container');
            const cancellation_policy_container = i.querySelector('.ArnRateCancelPolicyContainer');
            // console.log(cancellation_policy_container);
            const cancellation_policy_link = i.querySelector('.ArnRateCancelAnchor');
            cancellation_policy_link.classList.add('cancellation-policy');
            price_cta_container.appendChild(cancellation_policy_link);
            price_cta_container.appendChild(cancellation_policy_container);
        });
    }

    async restyleCarousel() {
        await utilities.waitForSelectorInDOM('.carousel-container');

        const carousel = document.querySelector('.carousel-container');
        const bottom_carousel = document.querySelector('.bottom-carousel-article');

        if (!carousel || !bottom_carousel) return;

        bottom_carousel.insertAdjacentElement('afterBegin', carousel);
    }

    async updateCheckoutInterface() {
        await utilities.waitForSelectorInDOM('.resConfirmationButton');
        const submit_button = document.querySelectorAll('input#theConfirmationButton, .WBConfirmedBooking .submit');
        console.log('submit button in updateCheckoutInterface', submit_button);
        submit_button[0].value = 'CONFIRM RESERVATIONS';
    }
}

new ChildPortal();
