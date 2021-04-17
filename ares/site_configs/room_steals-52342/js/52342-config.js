import Path from '../../../js/build_tools/path';

const env_path = new Path();

const site_id = 52342;
const directory_name = `room_steals-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 16827,
        master_id: 2143,
        site_type: 'cug',
        algolia_app_id: 'plWGD1F03898',
        algolia_api_key: '42284062316b4a4d8c672fbf5d6b5cf0',
        use_google_autocomplete: true,
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '50',
        lodging: {
            event_id: '',
            event_name: '',
            event_dates: '',
            is_lrg: '',
        },
        cug: {
            is_cug: true,
            show_points: false,
            allow_registration: false,
            percent_off_text: 'off',
            show_percent_savings: true,
        },
        exclusive_rate_text: 'Exclusive Rates',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: true,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: true,
        show_property_type: false,
        show_language_select: false,
        show_currency_select: true,
        show_date_prompt: false,
        has_social_sharing: true,
        // fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        fav_icon_url: `https://develop.roomsteals.com/favicon-32x32.png`,
        header: {
            logo_file_location: `https://develop.roomsteals.com/images/logo/Logo_Dark.svg`,
            logo_outbound_url: 'https://roomsteals.com/home/',
        },
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:500,700',
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
            confirmation_page_top: {
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
        // new options
        root_page_header_text: 'Start Your Search',
        root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
        is_resbeat_client: false,
        confirmation_email_from: 'Room Steals',
    };
}
