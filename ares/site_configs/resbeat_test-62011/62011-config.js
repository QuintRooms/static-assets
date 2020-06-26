import Path from '../../js/path';

const env_path = new Path();

const site_id = 62011;
const directory_name = `resbeat_test-${site_id}`;

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
        exclusive_rate_text: '',
        host_hotel_text: '',
        partner_hotel_text: '',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: true,
        show_language_select: true,
        show_currency_select: true,
        show_date_prompt: false,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        has_custom_styles: true,
        custom_styles_url: `${env_path.path}/site_configs/${directory_name}/${site_id}.css`,
        has_social_sharing: true,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://resbeat.com/',
            background: '#fff',
            logo_flex_position: 'space-between',
            logo_max_width: '230px',
        },
        banner_image_url: '#fff',
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        background_color: '#fff',
        primary_color: '#215853',
        secondary_color: '#e2ad37',
        primary_text_color: '#fff',
        secondary_text_color: '#215853',
        border_color: '#215853',
        button_hover_background_color: '#fff',
        button_hover_text_color: '#215853',
        button_hover_border_color: '#215853',
        google_font_url: '',
        google_font_name: 'Avenir',
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
        is_resbeat_client: true,
        confirmation_email_from: 'RESBEAT',
    };
}
