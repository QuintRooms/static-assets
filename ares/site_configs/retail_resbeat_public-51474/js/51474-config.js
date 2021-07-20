import Path from '../../../js/build_tools/path';

const env_path = new Path();
const site_id = 51474;
const directory_name = `retail_resbeat_public-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: '14808',
        master_id: 920,
        site_type: 'retail',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        distance_unit: 'useMiles',
        lodging: {
            event_id: '',
            event_name: '',
            event_dates: '',
            is_lrg: false,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: false,
            percent_off_text: 'off',
            show_percent_savings: false,
        },
        exclusive_rate_text: 'Exclusive Rate',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: true,
        show_property_type: true,
        show_language_select: false,
        show_currency_select: false,
        show_date_prompt: false,
        has_social_sharing: true,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.svg`,
            logo_outbound_url: 'https://hotels.resbeat.com/v6/register?siteid=60831&cta_referral=true&utm_source=Header&utm_medium=Website&utm_campaign=RESBEAT%20Retail',
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
        root_page_header_text: 'WELCOME TO RES<b>BEAT</b>',
        root_page_subheader_text: 'START YOUR SEARCH OF 600K+ HOTELS WORLDWIDE',
        is_resbeat_client: false,
        confirmation_email_from: 'Quint Rooms',
        has_landing_page: false,
        hide_search_on_landing_page: true,
        landing_page_events: [
            {
                name: '',
                display_date: '', // August 5-8, 2021
                end_date: '', // M/D/YYYY
                portal_url: '',
            },
        ],
    };
}
