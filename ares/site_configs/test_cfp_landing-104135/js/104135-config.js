import Path from '../../../js/build_tools/path';

const env_path = new Path();

const site_id = 104135;
const directory_name = `test_cfp_landing-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 17489,
        master_id: 920,
        site_type: 'lodging',
        algolia_app_id: 'pl58QCMXHS4C',
        algolia_api_key: '1514caaca583b1ed25dad3b0c6addf0a',
        use_google_autocomplete: true,
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
        hide_search_on_landing_page: false,
        landing_page_events: [
            // Normal with Retail
            // {
            //     name: 'CFP NATIONAL CHAMPIONSHIP ATLANTA 2025',
            //     display_date: 'January 17 - 20, 2025',
            //     end_date: '01/20/2025', // M/D/YYYY
            //     portal_url: 'https://collegefootballplayoffhotels.com/group-event?id=78359',
            // },
            // {
            //     name: 'CFP BOWL GAMES 2025 - HOTEL SEARCH',
            //     display_date: 'VARIOUS DATES',
            //     end_date: '01/20/2025', // M/D/YYYY
            //     portal_url: 'https://collegefootballplayoffhotels.com/group-event?id=80509',
            // },
            // {
            //     name: 'CFP NATIONAL CHAMPIONSHIP MIAMI 2026',
            //     display_date: 'January 16 - 19, 2026',
            //     end_date: '01/19/2026', // M/D/YYYY
            //     portal_url: 'https://form.jotform.com/222285562425153',
            // }
            //Normal with all Bowl Games
            {
                name: 'CFP NATIONAL CHAMPIONSHIP ATLANTA 2025',
                display_date: 'January 17 - 20, 2025',
                display_location: 'Atlanta, GA',
                end_date: '01/20/2025', // M/D/YYYY
                portal_url: 'https://collegefootballplayoffhotels.com/group-event?id=78359',
            },
            {
                name: 'CFP NATIONAL CHAMPIONSHIP MIAMI 2026',
                display_date: 'January 16 - 19, 2026',
                display_location: 'Atlanta, GA',
                end_date: '01/19/2026', // M/D/YYYY
                portal_url: 'https://form.jotform.com/222285562425153',
            },
            {
                name: 'VRBO FIESTA BOWL',
                display_date: 'December 31, 2024',
                display_location: 'Glendale, AZ',
                end_date: '01/1/2025', // M/D/YYYY
                portal_url: 'https://events.quintrooms.com/v6/?currency=USD&type=geo&siteid=104135&longitude=-112.2651342&latitude=33.5276247&radius=100&checkin=10/31/2024&nights=2&map&locationlabel=Mercedes-Benz+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles',
            },
            {
                name: 'CHIK-FIL-A PEACH BOWL',
                display_date: 'January 1, 2025',
                display_location: 'Atlanta, GA',
                end_date: '01/02/2025', // M/D/YYYY
                portal_url: 'https://events.quintrooms.com/v6/?currency=USD&type=geo&siteid=104135&longitude=-84.4031654&latitude=33.7553232&radius=100&checkin=1/1/2025&nights=2&map&locationlabel=Mercedes-Benz+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles',
            },
            {
                name: 'PRUDENTIAL ROSE BOWL',
                display_date: 'January 1, 2025',
                display_location: 'Pasadena, CA',
                end_date: '01/02/2025', // M/D/YYYY
                portal_url: 'https://form.jotform.com/222285562425153',
            },
            {
                name: 'ALLSTATE SUGAR BOWL',
                display_date: 'January 1, 2025',
                display_location: 'New Orleans, LA',
                end_date: '01/02/2025', // M/D/YYYY
                portal_url: 'https://form.jotform.com/222285562425153',
            },
            {
                name: 'CAPITAL ONE ORANGE BOWL',
                display_date: 'January 9, 2025',
                display_location: 'Miami, FL',
                end_date: '01/10/2025', // M/D/YYYY
                portal_url: 'https://form.jotform.com/222285562425153',
            },
            {
                name: 'GOOD YEAR COTTON BOWL',
                display_date: 'January 10, 2025',
                display_location: 'Dallas, TX',
                end_date: '01/11/2025', // M/D/YYYY
                portal_url: 'https://form.jotform.com/222285562425153',
            },
        ],
    };
}
