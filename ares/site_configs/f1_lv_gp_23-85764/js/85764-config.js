import Path from '../../../js/build_tools/path';

const env_path = new Path();

const site_id = 85764;
const directory_name = `f1_lv_gp_23-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 16980,
        master_id: 920,
        site_type: 'lodging',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        currency: 'USD',
        distance_unit: 'useMiles',
        lodging: {
            event_id: '',
            event_name: 'F1 Las Vegas Grand Prix',
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
        exclusive_rate_text: 'Exclusive Rate',
        host_hotel_text: 'Breakfast Included',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: true,
        dayjs_date_format: 'D/M/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_property_type: false,
        show_language_select: true,
        show_currency_select: true,
        show_date_prompt: false,
        has_social_sharing: true,
        fav_icon_url: `${env_path.path}/clients/formula_1/images/favicon.png`,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            email_logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/email-logo.png`,
            logo_outbound_url: 'https://www.f1lasvegasgp.com/',
        },
        map_marker_image_url: `${env_path.path}/clients/formula_1/images/favicon.png`,
        theme: 'light',
        google_font_url: 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap',
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
        root_page_header_text: 'Start Your Search',
        root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
        is_resbeat_client: false,
        has_custom_emails: false,
        has_group_booking_banner: true,
        group_booking_form_url: 'https://form.jotform.com/203066540331141?bookingPortal=F1%20Las%20Vegas%20Grand%20Prix',
        uses_hybrid_compensation_model: true,
    };
}
