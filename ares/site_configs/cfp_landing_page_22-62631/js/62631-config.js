import Path from '../../../js/build_tools/path';

const env_path = new Path();

const site_id = 62631;
const directory_name = `cfp_landing_page_22-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
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
            event_id: '',
            event_name: 'College Football Playoff Hotels',
            event_dates: '',
            redirect_date: '',
            redirect_url: '',
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
        has_social_sharing: true,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'https://collegefootballplayoff.com/',
        },
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        google_font_url: '',
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
        is_resbeat_client: false,
        confirmation_email_from: 'College Football Playoff Hotels',
        has_landing_page: true,
        hide_search_on_landing_page: true,
        landing_page_events: [
            {
                name: 'SEARCH CFP NATIONAL CHAMPIONSHIP INDIANAPOLIS 2022',
                display_date: 'January 8 - 12, 2022',
                end_date: '01/12/2022', // M/D/YYYY
                portal_url: 'http://collegefootballplayoffhotels.com/group-event?id=46199&utm_campaign=CFP%20Indianapolis%202022',
            },
            // {
            //     name: 'SEARCH ANYWHERE',
            //     display_date: '2/10/2023',
            //     end_date: '3/28/2025', // M/D/YYYY
            //     portal_url: 'https://collegefootballplayoffhotels.com/v6/?siteid=67665&utm_campaign=CFP%20Retail%202022',
            // },
            {
                name: 'CFP NATIONAL CHAMPIONSHIP LOS ANGELES 2023',
                display_date: 'January 6 - 10, 2023',
                end_date: '01/10/2023', // M/D/YYYY
                portal_url: 'https://collegefootballplayoffhotels.com/group-event?id=57102',
            },
            {
                name: 'CFP NATIONAL CHAMPIONSHIP HOUSTON 2024',
                display_date: 'January 5 - 9, 2024',
                end_date: '01/09/2024', // M/D/YYYY
                portal_url: 'https://form.jotform.com/212986027619161',
            },
            {
                name: 'CFP NATIONAL CHAMPIONSHIP ATLANTA 2025',
                display_date: 'TBD',
                end_date: '01/09/2025', // M/D/YYYY
                portal_url: 'https://form.jotform.com/222285410763150',
            },
        ],
    };
}
