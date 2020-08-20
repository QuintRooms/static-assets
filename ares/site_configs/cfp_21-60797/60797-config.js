import Path from '../../js/path';

const env_path = new Path();

const site_id = 60797;
const directory_name = `cfp_21-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        affiliate_id: 17489,
        master_id: 920,
        site_type: 'lodging',
        algolia_app_id: 'pl58QCMXHS4C',
        algolia_api_key: '1514caaca583b1ed25dad3b0c6addf0a',
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '50',
        lodging: {
            event_id: '41942',
            event_name: 'College Football Playoffs',
            event_dates: '',
            is_lrg: '',
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: false,
            percent_off_text: '',
            show_percent_savings: false,
        },
        exclusive_rate_text: 'EXCLUSIVE RATES',
        host_hotel_text: '',
        partner_hotel_text: '',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_property_type: false,
        show_language_select: false,
        show_currency_select: false,
        show_date_prompt: false,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png?v2`,
        has_custom_styles: true,
        custom_styles_url: `${env_path.path}/site_configs/${directory_name}/${site_id}.css`,
        has_social_sharing: true,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://collegefootballplayoff.com/',
            background: `#000`,
            logo_flex_position: 'flex-start',
            logo_max_width: '330px',
        },
        banner_image_url: `url(${env_path.path}/site_configs/${directory_name}/img/banner.png) no-repeat`,
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        background_color: '#fff',
        secondary_background_color: '#f0f0f0',
        primary_color: '#c9920e',
        secondary_color: '#000',
        primary_text_color: '#fff',
        secondary_text_color: '#000',
        border_color: '#c9920e',
        button_hover_background_color: '#fff',
        button_hover_text_color: '#c9920e',
        button_hover_border_color: '#c9920e',
        google_font_url: '',
        google_font_name: 'Graphik-Regular',
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
        root_page_header_text: 'START YOUR <b>SEARCH</b>',
        root_page_subheader_text: 'RESERVATIONS AT 600K+ HOTELS AT UNBEATABLE RATES',
        is_resbeat_client: true,
        confirmation_email_from: 'RESBEAT',
    };
}
