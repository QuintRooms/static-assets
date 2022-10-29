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
        confirmation_email_from: 'Quint Rooms',
        has_landing_page: true,
        hide_search_on_landing_page: true,
        landing_page_events: [
            {
                name: '2022 Houston Auction',
                display_date: 'October 20 - October 22, 2022',
                end_date: '10/23/2022', // M/D/YYYY
                portal_url: `http://events.${process.env.domain}/group-event?id=59081&utm_campaign=Barrett-Jackson%20Houston%202022`,
            },
            {
                name: '2023 Scottsdale Auction',
                display_date: 'January 21 - January 29, 2023',
                end_date: '1/30/2023', // M/D/YYYY
                portal_url: `http://events.${process.env.domain}/group-event?id=61383&utm_campaign=Barrett-Jackson%20Scottsdale%202023`,
            }
        ],
    };
}
