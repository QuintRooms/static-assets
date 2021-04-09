import Path from '../../../js/build_tools/path';

const env_path = new Path();
const site_id = 62678;
const directory_name = `hof_landing_page-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 17464,
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
            event_name: 'Pro Football Hall of Fame',
            event_dates: '08/05/2021 - 08/08/2021',
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
            logo_outbound_url: 'https://www.profootballhof.com/',
        },

        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'dark',
        google_font_url: '//fonts.googleapis.com/css?family=Oswald:100,500,700',
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
        landing_page_events: [
            {
                is_city_search_header_link: false,
                name: 'Hall of Fame Enshrinement Week',
                display_date: 'August 5-8, 2021', // August 5-8, 2021
                end_date: '8/8/2021', // M/D/YYYY
                portal_url: 'https://book.hofhotels.com/group-event?id=42991&utm_campaign=Pro%20Football%20HOF%20Enshrinement%202021',
            },
            {
                is_city_search_header_link: false,
                name: '',
                display_date: 'September 5th, 2021', // August 5-8, 2021
                end_date: '9/5/2021', // M/D/YYYY
                portal_url: 'https://events.hotelsforhope.com/group-event?id=49131&utm_campaign=Pro%20Football%20HOF%HBCU&20classic%202021',
            },
            {
                is_city_search_header_link: true,
                name: 'Search Canton, OH',
                display_date: '', // August 5-8, 2021
                end_date: '', // M/D/YYYY
                portal_url: 'https://book.hofhotels.com/group-event?id=44347&utm_campaign=Pro%20Football%20HOF%20Canton%202021',
            },
        ],
    };
}
