import dayjs from 'dayjs';
import BasePortal from '../../../js/build';
import SiteConfig from './70905-config';
import Utilities from '../../../js/utilities';

const Honeybadger = require('@honeybadger-io/js');

Honeybadger.configure({
    apiKey: process.env.HONEYBADGER_API_KEY,
    environment: 'development',
});

const site_config = new SiteConfig();
const utilities = new Utilities();

Honeybadger.setContext({
    user_email: utilities.getMetaTagContent('email'),
});

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
        if (document.querySelector('.SinglePropDetail')) {
            await this.getReferenceId();
            await this.fetchTrips();
            await this.fetchPropertyHtml();
            await this.getTrip();
            this.insertTripDetailsIntoHtml();
            this.restyleCarousel();
        }

        if (document.querySelector('#theReservationForm')) {
            this.updateCheckoutInterface();
        }
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

                        <section class='left-section'>
                            <div class='itinerary-container'>
                                <h3 class='section-title' id='itinerary-container-title'>ITINERARY</h3>
                                <div class='itinerary-list'></div>
                            </div>
                            <div class='inclusions-container'>
                                <h3 class='section-title' id='inclusions-container-title'>EXCLUSIVE</h3>
                                <div id='inclusions-intro'>This trip includes:</div>
                                <div class='inclusions-list'></div>
                            </div>
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

        try {
            this.trip = this.trips.results.find((obj) => {
                return obj.id === trip_id;
            });
            return this.trip;
        } catch (error) {
            console.error('Error in getTrip(): ', error);

            Honeybadger.notify('Could not get trip from the Prismic API.', {
                params: {
                    trip_id,
                    trip: this.trip,
                },
            });
        }
    }

    async insertTripDetailsIntoHtml() {
        // Await load and format dates
        await utilities.waitForSelectorInDOM('.bottom-carousel-article');

        if (
            !this.trip?.data?.trip_name?.[0]?.text ||
            !this.trip.data.property_name?.[0]?.text ||
            !this.trip.data.trip_location?.[0]?.text ||
            !this.trip.data.start_date ||
            !this.trip.data.end_date
        ) {
            window.alert('Sorry, but we cannot find this trip. Please contact support.');

            return Honeybadger.notify('Trip object, trip data, trip name, property name, trip date, or trip location not found.', {
                params: {
                    trip: this.trip,
                },
            });
        }

        const start_date = dayjs(this.trip.data.start_date).format('MM/DD/YYYY');
        const end_date = dayjs(this.trip.data.end_date).format('MM/DD/YYYY');

        // Create hero container with title, location, dates
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
            <style>
                .hero-container{
                    background: linear-gradient(rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0.9)), linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${this.trip.data.trip_image.url}) no-repeat center center /cover
                }
            </style>
        `
        );

        // Create and populate itinerary container from CMS object
        if (!this.trip.data.itinerary?.[0].day?.[0]?.text || !this.trip.data.itinerary[0].description?.[0]?.text) {
            window.alert('Sorry, but we cannot find these trip details. Please contact support.');

            return Honeybadger.notify('Itinerary object, itinerary day, or itinerary description not found.', {
                params: {
                    trip: this.trip,
                },
            });
        }
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

        // Create and populate Inclusions container from CMS object
        this.trip.data.inclusions.forEach((i) => {
            document.querySelector('.inclusions-list').insertAdjacentHTML(
                'beforeEnd',
                `   <div class=inclusion-item>
                            <div class='inclusion-bullet'></div>
                            <div class='inclusion-text'>${i.text}</div>
                    </div>
                `
            );
        });

        // Pull existing property rooms from DOM and use them to create new room containers
        if (!document.querySelectorAll('#standardAvail .rateRow')) {
            window.alert('Sorry, but we cannot find rooms for this trip. Please contact support.');

            return Honeybadger.notify('ARN property rooms array from DOM is not found.');
        }
        const room_array = document.querySelectorAll('#standardAvail .rateRow');

        room_array.forEach((i) => {
            // Insert new rooms container skeleton
            document.querySelector('.trips-list').insertAdjacentHTML(
                'afterBegin',
                `
                <div class='trip-item'>
                    <div class='trip-text-container'>
                        <div class='trip-item-name'></div>
                        <div class="trip-price-mobile">$</div>
                        <p class='trip-item-description'></p>
                    </div>
                    <div class='trip-price-cta-container'>
                        <div class='trip-price-desktop'>$</div>
                        <div class='trip-ctas'>
                        </div>
                    </div>
                </div>
                `
            );

            // Insert price into new containers before removing unwanted divs from DOM
            if (!i.querySelector('.full-stay')?.innerText) {
                window.alert('Sorry, but we cannot find prices for this trip. Please contact support.');

                return Honeybadger.notify('ARN Full-stay price for trip is not found.');
            }

            const full_rate_string = i.querySelector('.full-stay').innerText;
            const trip_rate = Number(full_rate_string.split(' ')[0]).toLocaleString();
            const mobile_price_container = document.querySelector('.trip-price-mobile');
            const desktop_price_container = document.querySelector('.trip-price-desktop');

            mobile_price_container.innerText = `$${trip_rate}`;
            desktop_price_container.innerText = `$${trip_rate}`;

            // Move CTAs to new rooms container and format
            if (!i.querySelector('.bookRoom')?.innerText) {
                window.alert('Sorry, there was an error. Please contact support.');
                return Honeybadger.notify('ARN book cta is not found.');
            }

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

            // Move Cancellation policy and alert contianer to new rooms containers
            if (!i.querySelector('.ArnRateCancelPolicyContainer') || !i.querySelector('.ArnRateCancelAnchor')) {
                Honeybadger.notify('ARN cancel policy container or anchor are not found.');
            }

            const price_cta_container = document.querySelector('.trip-price-cta-container');
            const cancellation_policy_container = i.querySelector('.ArnRateCancelPolicyContainer');
            const cancellation_policy_link = i.querySelector('.ArnRateCancelAnchor');

            cancellation_policy_link.classList.add('cancellation-policy');
            price_cta_container.appendChild(cancellation_policy_link);
            price_cta_container.appendChild(cancellation_policy_container);

            // Remove Unwanted original DOM elements from being included in room descriptions
            const per_date_rates = i.querySelector('.ArnRateFromTo');
            const per_night_rates = i.querySelector('.ArnNightlyRate');
            const per_day_rates = i.querySelector('.RateCalendarPopupAnchor');
            const calendar_popup = i.querySelector('.RateCalendarPopupContainer');

            per_date_rates.remove();
            per_night_rates.remove();
            per_day_rates.remove();
            calendar_popup.remove();

            // Grab trip item title and description divs and content to fill them with
            if (!i.innerText?.split(':')[0] || !i.innerText.split(':')[1]) {
                // window.alert('Sorry, there was an error with the trip description. If you need further information, please contact support.');
                Honeybadger.notify('Room description, Room description colon, room description name, or Room description text is not found');
            }

            const text_string = i.innerText;
            const text_array = i.innerText.split(':');
            const room_title_container = document.querySelector('.trip-item-name');
            const room_title = text_array[0].trim();
            const room_description_container = document.querySelector('.trip-item-description');
            const room_description_splitter = i.innerText.indexOf(':') + 1;
            const room_description = i.innerText.slice(room_description_splitter).trim();

            // Check that room description contains correct elements to format
            // if not include entire original string
            try {
                if (!text_string.includes(':') || !room_title || !room_description) {
                    room_description_container.innerText = text_string.trim();
                    return;
                }
            } catch (error) {
                Honeybadger.notify(`Room description colon is not found in room index ${i}`);
                console.error('Error inside room_title and room_description verification: ', error);
            }

            room_description_container.innerText = room_description;
            room_title_container.innerText = room_title;
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
        console.log('before await in updatecheckoutinterface');
        await utilities.waitForSelectorInDOM('.discountRow');

        const subtotal = document.querySelectorAll('.discountRow .discount')[0].innerText;
        const tbody_ref = document.getElementById('theRateTotals').getElementsByTagName('tbody')[0];

        console.log('tbody_ref: ', tbody_ref);

        const subtotal_row = document.createElement('tr');

        subtotal_row.className = '';
        subtotal_row.style = '';

        subtotal_row.innerHTML = `
                <th nowrap="nowrap"><span>Subtotal:</span></th>
                <td>${subtotal}</td>
            `;

        tbody_ref.insertAdjacentElement('afterbegin', subtotal_row);

        // tbody_ref.insertAdjacentElement(
        //     'afterBegin',
        //     `
        //     <tr class="taxFeeRow">
        //         <th nowrap="nowrap"><span>Subtotal:</span></th>
        //         <td>${subtotal}</td>
        //     </tr>
        //     `
        // );
    }
}

new ChildPortal();
