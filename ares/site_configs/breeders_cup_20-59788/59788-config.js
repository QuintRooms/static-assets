import Path from '../../js/path';

const env_path = new Path();

const site_id = 59788;
const directory_name = `breeders_cup_20-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        affiliate_id: 17481,
        master_id: 920,
        site_type: 'lodging',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        lodging: {
            event_id: 40940,
            event_name: "Breeder's Cup",
            event_dates: '11/06/2020 - 11/07/2020',
            is_lrg: false,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: true,
            show_percent_savings: false,
        },
        exclusive_rate_text: 'Exclusive Rate',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_language_select: false,
        show_currency_select: false,
        show_date_prompt: false,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        has_custom_styles: false,
        custom_styles_url: '',
        has_social_sharing: true,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://www.breederscup.com/',
            background: '#fff',
            logo_flex_position: 'flex-start',
            logo_max_width: '400px',
        },
        banner_image_url: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)), url(${env_path.path}/site_configs/${directory_name}/img/banner.png) no-repeat center center /cover`,
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        background_color: '#fff',
        primary_color: '#512b6d',
        secondary_color: '#cba052',
        primary_text_color: '#fff',
        secondary_text_color: '#512b6d',
        border_color: '#512b6d',
        button_hover_background_color: '#fff',
        button_hover_text_color: '#cba052',
        button_hover_border_color: '#cba052',
        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700',
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
            confirmation_page_bottom: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
        },
        // new options
    };
}
