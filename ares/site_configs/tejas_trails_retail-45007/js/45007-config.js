import Path from '../../../js/build_tools/path';

const env_path = new Path();
const site_id = 45007;
const directory_name = `tejas_trails_retail-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 17560,
        master_id: 920,
        site_type: 'retail',
        use_google_autocomplete: true,
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '100',
        lodging: {
            event_id: '',
            event_name: 'The Immersive Van Gogh Exhibit',
            event_dates: '',
            redirect_date: '',
            redirect_url: '',
            is_lrg: false,
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
            logo_outbound_url: 'https://events.quintrooms.com/v6/?siteid=70958',
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
            confirmation_page_bottom: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
        },
        // new options
        is_resbeat_client: false,
        has_group_booking_banner: true,
        group_booking_form_url: 'https://form.jotform.com/203066540331141?bookingPortal=Van%20Gogh%20Dallas',
        email_logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo_b.png`,
    };
}
