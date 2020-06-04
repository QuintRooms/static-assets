import Path from '../../js/path';

const env_path = new Path();
const site_id = 60086;
const directory_name = `bj_northeast_20-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        affiliate_id: 16659,
        master_id: 920,
        site_type: 'lodging',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '50',
        lodging: {
            event_id: 40481,
            event_name: 'Barrett-Jackson Northeast 2020',
            event_dates: '6/24/2020 - 6/27/2020',
            is_lrg: false,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: true,
            show_percent_savings: false,
        },
        exclusive_rate_text: 'Exclusive Rates',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_language_select: false,
        show_currency_select: false,
        show_date_prompt: false,
        fav_icon_url: `${env_path.path}/${directory_name}/img/favicon.png`,
        has_custom_styles: false,
        custom_styles_url: '',
        has_social_sharing: true,
        header: {
            logo_file_location: `${env_path.path}/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://www.barrett-jackson.com/',
            background: '#fff',
            logo_flex_position: 'center',
            logo_max_width: '400px',
        },
        banner_image_url: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)), url(${env_path.path}/${directory_name}/img/banner.jpg) no-repeat center center /cover`,
        map_marker_image_url: `${env_path.path}/${directory_name}/img/favicon.png`,
        theme: 'light',
        primary_color: '#c8102e',
        secondary_color: '#c8102e',
        primary_text_color: '#fff',
        secondary_text_color: '#c8102e',
        border_color: '#222',
        button_hover_background_color: '#fff',
        button_hover_text_color: '#c8102e',
        button_hover_border_color: '#c8102e',
        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700',
        google_font_name: 'Montserrat',
        ads: {
            sidebar_ad: {
                is_active: true,
                image_url: `${env_path.path}/${directory_name}/img/leftbanner.jpg`,
                outbound_url: 'https://www.grandcanyon.org/',
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
    };
}
