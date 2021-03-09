import Path from '../../../js/build_tools/path';

const env_path = new Path();
const site_id = 63712;
const directory_name = `roomcash-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 16827,
        master_id: 2143,
        site_type: 'cug',
        algolia_app_id: 'pl58QCMXHS4C',
        algolia_api_key: '1514caaca583b1ed25dad3b0c6addf0a',
        distance_unit: 'useMiles',
        lodging: {
            event_id: '',
            event_name: 'RoomCash ',
            event_dates: '',
            redirect_date: '',
            redirect_url: '',
            is_lrg: false,
        },
        cug: {
            is_cug: true,
            show_points: false,
            allow_registration: false,
            percent_off_text: '',
            show_percent_savings: false,
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
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo-main.png`,
            logo_outbound_url: 'https://roomcash.com/dashboard',
        },
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:300,500,700',
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
        root_page_header_text: `${document.querySelector('meta[name="firstName"]')}, WHERE WILL YOUR ROOMCASH TAKE YOU?`,
        root_page_subheader_text: 'START SEARCHING AND CHOOSE FROM 600,000+ GLOBAL HOTELS',
        is_resbeat_client: true,
        confirmation_email_from: '',
        has_group_booking_banner: false,
        group_booking_form_url: '',
        has_custom_emails: true,
        email_portal_link: `https://roomcash.com/redirect/booking-portal?redirect=`,
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
