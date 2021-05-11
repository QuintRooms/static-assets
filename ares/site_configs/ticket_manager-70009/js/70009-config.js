import Path from '../../../js/build_tools/path';

const env_path = new Path();
const site_id = 70009;
const directory_name = `ticket_manager-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 16827,
        master_id: 2143,
        site_type: 'cug',
        algolia_app_id: 'pl58QCMXHS4C',
        algolia_api_key: '1514caaca583b1ed25dad3b0c6addf0a',
        use_google_autocomplete: true,
        distance_unit: 'useMiles',
        lodging: {
            event_id: '',
            event_name: '',
            event_dates: '',
            redirect_date: '',
            redirect_url: '',
            is_lrg: false,
        },
        cug: {
            is_cug: true,
            show_points: false,
            allow_registration: false,
            percent_off_text: 'Savings',
            show_percent_savings: true,
        },
        exclusive_rate_text: '',
        host_hotel_text: '',
        partner_hotel_text: '',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: true,
        show_property_type: true,
        show_language_select: false,
        show_currency_select: true,
        show_date_prompt: false,
        has_social_sharing: true,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'http://www.ticketmanager.com/',
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
        root_page_header_text: 'Start Your Search',
        root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
        is_resbeat_client: true,
        confirmation_email_from: 'RESBEAT',
        has_group_booking_banner: false,
        group_booking_form_url: '',
        has_landing_page: false,
        has_custom_emails: false,
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
