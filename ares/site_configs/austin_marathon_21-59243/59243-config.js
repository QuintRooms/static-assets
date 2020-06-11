import Path from '../../js/path';

const env_path = new Path();

const site_id = 59243;
const directory_name = `austin_marathon_21-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        affiliate_id: 17431,
        master_id: 920,
        site_type: 'lodging',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        lodging: {
            event_id: 40435,
            event_name: 'Austin Marathon 2021',
            event_dates: '2/12/2021 - 2/14/2021',
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
        has_custom_styles: true,
        custom_styles_url: `${env_path.path}/site_configs/${directory_name}/${site_id}.css`,
        has_social_sharing: true,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://youraustinmarathon.com/',
            background: '#fff',
            logo_flex_position: 'flex-start',
            logo_max_width: '300px',
        },
        banner_image_url: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)), url(${env_path.path}/site_configs/${directory_name}/img/banner.jpg) no-repeat center center /cover`,
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        background_color: '#fff',
        primary_color: '#4C9C2E',
        secondary_color: '#1c4699',
        primary_text_color: '#fff',
        secondary_text_color: '#4C9C2E',
        border_color: '#4C9C2E',
        button_hover_background_color: '#fff',
        button_hover_text_color: '#4C9C2E',
        button_hover_border_color: '#4C9C2E',
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
