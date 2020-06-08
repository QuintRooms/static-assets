import Path from '../../js/path';

const env_path = new Path();

const site_id = 60303;
const directory_name = `shaky_knees_20-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        affiliate_id: 16067,
        master_id: 1816,
        site_type: 'noLRG',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        lodging: {
            event_id: 41304,
            event_name: 'Shaky Knees Music Festival',
            event_dates: '',
            is_lrg: true,
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
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        has_custom_styles: true,
        custom_styles_url: `${env_path.path}/site_configs/${directory_name}/60303.css`,
        has_social_sharing: true,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://www.shakykneesfestival.com/',
            background: '#de4344',
            logo_flex_position: 'center',
            logo_max_width: '600px',
        },
        banner_image_url: `center/cover no-repeat url(${env_path.path}/site_configs/${directory_name}/img/banner.jpg)`,
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        background_color: '#fff',
        primary_color: '#bf2a2b',
        secondary_color: '#5c5c5c',
        primary_text_color: '#fff',
        secondary_text_color: '',
        border_color: '#5c5c5c',
        button_hover_background_color: '#fff',
        button_hover_text_color: '#bf2a2b',
        button_hover_border_color: '#bf2a2b',
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
        confirmation_email_from: 'Hotels for Hope',
    };
}
