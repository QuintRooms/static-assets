import BasePortal from '../../../js/build';
import Utilities from '../../../js/utilities';
import RoomSteals from './roomsteals';
import SiteConfig from './52342-config';

const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        this.showFullStayToggle('.SearchHotels');
        this.showFullStayToggle('.SinglePropDetail');

        // buildObjectsForRoomstealsPost();

        if (document.querySelector('.WBLoginForm') || document.querySelector('.WBForgotPasswordForm')) {
            window.location.href = 'https://roomsteals.com/login';
            document.querySelector('body').style.display = 'none';
        }

        if (document.querySelector('.CheckOutForm')) {
            utilities.updateAttribute('#theConfirmationButton', 'Reserve My Room', 'value');
        }

        utilities.updateAttribute('.profileCommand', 'https://roomsteals.com/settings', 'href');

        utilities.updateHTML(
            '#theMarketingOptInAjax label',
            'I want to receive the latest information by email from Room Steals including event reminders, relevant news, surveys, offers, and promotions.'
        );

        utilities.createHTML(
            `<footer>
        <span>
            <a href="https://roomsteals.com/terms" target="_blank">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="https://hotels.roomsteals.com/v6/privacy-policy" target="_blank">Privacy Policy</a>
        </span>
        <span>
            &copy; 2021. All Rights Reserved. <br>
            RoomSteals.com
        </span>
    </footer>`,
            '.ArnSupportBottom',
            'beforeBegin'
        );
    }

    showFullStayToggle(page_class) {
        if (!document.querySelector(page_class)) return;

        let toggle;
        const theme_meta = document.querySelector('meta[name="theme"]');
        const container = document.querySelector('.config-container');

        if (!theme_meta) return;
        const theme = theme_meta.getAttribute('content');

        container.insertAdjacentHTML(
            'beforeend',
            `<span class="rs-label" id="rs-tax-inclusive">
            <label for="rs-toggle">Show Full Stay Price</label>
            <div class="rs-toggle">
                <input type="checkbox" name="rs-toggle" class="rs-toggle-checkbox" id="rs-toggle">
                <label class="rs-toggle-label" for="rs-toggle">
                    <span class="rs-toggle-inner"></span>
                    <span class="rs-toggle-switch"></span>
                </label>
            </div>
        </span>`
        );

        if (theme.toLowerCase() === 'international') {
            toggle = document.querySelector('#rs-toggle');
            toggle.checked = true;
        }

        document.querySelector('#rs-tax-inclusive').addEventListener('click', (e) => {
            const url = new URL(window.location.href);
            const params = url.searchParams;
            if (theme === 'standard') {
                params.set('theme', 'international');
                url.search = params.toString();

                window.location.href = url;

                return;
            }

            params.set('theme', 'standard');
            url.search = params.toString();

            window.location.href = url;
        });
    }

    //  buildObjectsForRoomstealsPost() {
    //     /**
    //      *@todo
    //      * get object properties for each page
    //      * conditionalize properties that don't exist on certain pages
    //      * hit ARN API to get lat/lng where they don't exist in the DOM
    //      * send user details if they hit the root page
    //      */

    //     const member_details = utilities.parseJSON(utilities.getMetaTagContent('memberMetaTag'));
    //     const member_details_additional_info = utilities.parseJSON(member_details.AdditionalInfo);

    //     const location = utilities.getMetaTagContent('SearchLocation');
    //     const location_id = utilities.getMetaTagContent('aLocationId');
    //     const check_in = utilities.getMetaTagContent('checkIn');
    //     const check_out = utilities.getMetaTagContent('checkOut');
    //     const guests = utilities.getMetaTagContent('numberOfAdults');
    //     const rooms = utilities.getMetaTagContent('numberOfRooms');
    //     const currency = utilities.getMetaTagContent('currency');
    //     const theme = utilities.getMetaTagContent('theme');
    //     const page = utilities.getPageName();
    //     let property_details = {};

    //     let is_full_stay_rate = false;

    //     if (
    //         !member_details ||
    //         !member_details_additional_info ||
    //         !member_details_additional_info.email ||
    //         !member_details_additional_info.name ||
    //         !member_details_additional_info.id ||
    //         !member_details_additional_info.partner ||
    //         !check_in ||
    //         !check_out ||
    //         !guests ||
    //         !rooms ||
    //         !currency ||
    //         !theme
    //     )
    //         return;
    //     if (theme === 'international') is_full_stay_rate = true;

    //     const {email} = member_details_additional_info;
    //     const {name} = member_details_additional_info;
    //     const {id} = member_details_additional_info;
    //     const {partner} = member_details_additional_info;

    //     if (partner !== 'roomsteals.com') return;

    //     let search_details = {
    //         location_details: {
    //             location,
    //             location_id,
    // ------------- need to add these ------------
    // //          lat,
    // //          lng
    //         },
    //         check_in,
    //         check_out,
    //         guests,
    //         rooms,
    //         currency,
    //         is_full_stay_rate,
    //         property_details,
    //     };

    //     if (page === 'property-detail') {
    //         const city = utilities.getElementTextContent('span[itemprop="addressLocality"]');
    //         const region = utilities.getElementTextContent('span[itemprop="addressRegion"]');
    //         const book_room_btn = document.querySelector('.rateRow .bookRoom');

    //         search_details.location_details.location = `${city}, ${region}`;
    //         property_details.property_id = utilities.getMetaTagContent('aPropertyId');
    //         property_details.property_name = utilities.getElementTextContent('.ArnPropNameLink > span');
    //         property_details.lowest_average_nightly_rate = utilities.getElementTextContent('.rateRow .ArnNightlyRate strong');

    //         if (book_room_btn) {
    //             property_details.lowest_rate_gateway = book_room_btn.getAttribute('gateway');
    //         }
    //     }

    //     if (page === 'checkout' || page === 'confirmation') {
    //         property_details.property_name = utilities.getElementTextContent('.theHotelName');
    //         property_details.property_id = utilities.getMetaTagContent('propertyId');
    //         property_details.lowest_average_nightly_rate = utilities.getElementTextContent('.ArnNightlyRateCal');
    //         property_details.lowest_rate_gateway = utilities.getMetaTagContent('gateway');
    //     }

    //     if (page === 'confirmation') {
    //         property_details.confirmation_number = window.arnConfirmations;

    //         if (window.arnCity && window.arnState) property_details.location = `${window.arnCity}, ${window.arnState}`;
    //     }

    //     const user_data = {
    //         email,
    //         name,
    //         id,
    //         page,
    //         search_details,
    //     };

    //     return user_data;
    // }

    // waiting for the url to post this data - it can go live without this
}
new ChildPortal();
new RoomSteals();
