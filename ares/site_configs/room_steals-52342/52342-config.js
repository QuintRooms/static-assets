import Path from '../../js/path';

const env_path = new Path();

const site_id = 52342;
const directory_name = `room_steals-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        affiliate_id: 16827,
        master_id: 2143,
        site_type: 'cug',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
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
            show_percent_savings: true,
        },
        exclusive_rate_text: 'Exclusive Rates',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: true,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: true,
        show_language_select: false,
        show_currency_select: true,
        show_date_prompt: false,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        has_custom_styles: true,
        custom_styles_url: `${env_path.path}/site_configs/${directory_name}/52342.css`,
        has_social_sharing: true,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://roomsteals.com/',
            background: '#fff',
            logo_flex_position: 'space-between',
            logo_max_width: '88px',
        },
        banner_image_url: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)), url(${env_path.path}/site_configs/${directory_name}/img/banner.jpg) no-repeat center center /cover`,
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        background_color: '#fff',
        primary_color: '#23305a',
        secondary_color: '#f7af1a',
        primary_text_color: '#fff',
        secondary_text_color: '#23305a',
        border_color: '#23305a',
        button_hover_background_color: '#465996 radial-gradient(circle,transparent 1%,#465996 0) 50%/15000%',
        button_hover_text_color: '#fff',
        button_hover_border_color: '#2589c6',
        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:500,700',
        google_font_name: 'Montserrat',
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
        is_resbeat_client: false,
        confirmation_email_from: 'Room Steals',
    };
}
