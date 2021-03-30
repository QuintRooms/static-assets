import Path from '../../../js/build_tools/path';

const env_path = new Path();
const site_id = 58196;
const directory_name = `bj_landing_page-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 16659,
        master_id: 920,
        site_type: 'event-landing-page',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '50',
        lodging: {
            event_id: 42991,
            event_name: 'Barrett Jackson Event Landing Page',
            event_dates: '',
            is_lrg: false,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: true,
            percent_off_text: 'off',
            show_percent_savings: false,
        },
        exclusive_rate_text: 'Exclusive Rates',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_property_type: false,
        show_language_select: false,
        show_currency_select: false,
        show_date_prompt: false,
        has_social_sharing: true,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://www.barrett-jackson.com/',
        },

        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700',
        ads: {
            sidebar_ad: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
            between_property_ad: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
            confirmation_page_bottom: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
        },
        root_page_header_text: 'Start Your Search',
        root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
        is_resbeat_client: false,
        confirmation_email_from: 'Hotels for Hope',
        has_landing_page: true,
        hide_search_on_landing_page: true,
        landing_page_events: [
            // {
            //     name: 'Fall Auction 2020 Scottsdale',
            //     display_date: 'October 22 - 24, 2020',
            //     end_date: '10/25/2020', // M/D/YYYY
            //     portal_url: 'https://events.hotelsforhope.com/group-event?id=43435',
            // },
            {
                name: '2021 Scottsdale Auction',
                display_date: 'March 20 - 27, 2021',
                end_date: '3/28/2021', // M/D/YYYY
                portal_url: 'https://events.hotelsforhope.com/group-event?id=46530&utm_campaign=Barrett-Jackson%20Scottsdale%202021%20Rescheduled',
            },
            // {
            //     name: '2021 West Palm Beach Auction',
            //     display_date: 'April 08 - 10, 2021',
            //     end_date: '04/12/2021', // M/D/YYYY
            //     portal_url: 'http://events.hotelsforhope.com/group-event?id=44704&utm_campaign=Barrett-Jackson%20West%20Palm%20Beach%202021',
            // },
            {
                name: '2021 Las Vegas Auction',
                display_date: 'June 17 - 19, 2021',
                end_date: '06/22/2021', // M/D/YYYY
                portal_url: 'https://events.hotelsforhope.com/group-event?id=47795&utm_campaign=Barrett-Jackson%20Las%20Vegas%202021',
            },
            {
                name: '2021 Houston Auction',
                display_date: 'September 16 - 18, 2021',
                end_date: '09/19/2021', // M/D/YYYY
                portal_url: 'http://events.hotelsforhope.com/group-event?id=48634&utm_campaign=Barrett-Jackson%20Houston%202021',
            },
        ],
    };
}
