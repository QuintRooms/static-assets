import Path from '../../../js/build_tools/path';

const env_path = new Path();

const site_id = 60303;
const directory_name = `shaky_knees_20-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 16067,
        master_id: 1816,
        site_type: 'lodging',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        lodging: {
            event_id: 41304,
            event_name: 'Shaky Knees Music Festival',
            event_dates: '',
            redirect_date: '',
            redirect_url: '',
            is_lrg: true,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: true,
            percent_off_text: 'off',
            show_percent_savings: false,
        },
        exclusive_rate_text: 'Exclusive Rates',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_property_type: false,
        show_language_select: false,
        show_currency_select: false,
        show_date_prompt: false,
        has_social_sharing: true,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://www.shakykneesfestival.com/',
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
        is_resbeat_client: false,
        confirmation_email_from: 'Hotels for Hope',
    };
}
