import Path from '../../../js/build_tools/path';

const env_path = new Path();

const site_id = 107621;
const directory_name = `cfp_first_round_game_two_24-${site_id}`;

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
        exclusive_rate_text: 'Exclusive Rate',
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
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/FIRST_ROUND_HEADER_LOGO_LINE_2.png`,
            email_logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/email-logo.png`,
            logo_outbound_url: 'https://collegefootballplayoffhotels.com/',
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
        root_page_header_text: 'BOOK YOUR COLLEGE HOTEL PLAYOFF ROOMS NOW!',
        root_page_subheader_text: 'RESERVATIONS AT 600K+ HOTELS AT UNBEATABLE RATES',
        is_resbeat_client: false,
        confirmation_email_from: 'College Football Playoff Hotels',
        has_landing_page: true,
        hide_search_on_landing_page: false,
        landing_page_events: [
            {
                name: '2025 College Football Playoff National Championship',
                display_date: 'January 17 - 20, 2025',
                display_location: 'Atlanta, GA',
                end_date: '01/20/2025', // M/D/YYYY
                portal_url: 'https://collegefootballplayoffhotels.com/group-event?id=78359',
                type_class: 'championship'
            },
            {
                name: '2026 College Football Playoff National Championship',
                display_date: 'January 16 - 19, 2026',
                display_location: 'Miami, FL',
                end_date: '01/19/2026', // M/D/YYYY
                portal_url: 'https://form.jotform.com/222285562425153',
                type_class: 'championship'
            },
            {
                name: 'Playoff Quarterfinal at the Vrbo Fiesta Bowl',
                display_date: 'December 31, 2024',
                display_location: 'Glendale, AZ',
                end_date: '01/1/2025', // M/D/YYYY
                portal_url: 'https://events.quintrooms.com/v6/?currency=USD&type=geo&siteid=104135&longitude=-112.2651342&latitude=33.5276247&radius=100&checkin=10/31/2024&nights=2&map&locationlabel=State+Farm+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&propertytypes=motel,resort,hotel',
                type_class: 'quarterfinal'
            },
            {
                name: 'Playoff Quarterfinal at the Chick-fil-A Peach Bowl',
                display_date: 'January 1, 2025',
                display_location: 'Atlanta, GA',
                end_date: '01/02/2025', // M/D/YYYY
                portal_url: 'https://events.quintrooms.com/v6/?currency=USD&type=geo&siteid=104135&longitude=-84.4031654&latitude=33.7553232&radius=100&checkin=1/1/2025&nights=2&map&locationlabel=Mercedes-Benz+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&propertytypes=motel,resort,hotel',
                type_class: 'quarterfinal'
            },
            {
                name: 'Playoff Quarterfinal at the Rose Bowl Game presented by Prudential',
                display_date: 'January 1, 2025',
                display_location: 'Pasadena, CA',
                end_date: '01/02/2025', // M/D/YYYY
                portal_url: 'https://events.quintrooms.com/v6/?currency=USD&type=geo&siteid=104135&longitude=-118.1702211&latitude=34.1613284&radius=100&checkin=1/1/2025&nights=2&map&locationlabel=Rose+Bowl+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&propertytypes=motel,resort,hotel',
                type_class: 'quarterfinal'
            },
            {
                name: 'Playoff Quarterfinal at the Allstate Sugar Bowl',
                display_date: 'January 1, 2025',
                display_location: 'New Orleans, LA',
                end_date: '01/02/2025', // M/D/YYYY
                portal_url: 'https://events.quintrooms.com/v6/?currency=USD&type=geo&siteid=104135&longitude=-90.0838191&latitude=29.951061&radius=100&checkin=1/1/2025&nights=2&map&locationlabel=Caesars+Superdome&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&propertytypes=motel,resort,hotel',
                type_class: 'quarterfinal'
            },
            {
                name: 'Playoff Semifinal at the Capital One Orange Bowl',
                display_date: 'January 9, 2025',
                display_location: 'Miami, FL',
                end_date: '01/10/2025', // M/D/YYYY
                portal_url: 'https://events.quintrooms.com/v6/?currency=USD&type=geo&siteid=104135&longitude=-80.2421728&latitude=25.958326&radius=100&checkin=1/9/2025&nights=2&map&locationlabel=Hard+Rock+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&propertytypes=motel,resort,hotel',
                type_class: 'semifinal'
            },
            {
                name: 'Playoff Semifinal at the Goodyear Cotton Bowl Classic',
                display_date: 'January 10, 2025',
                display_location: 'Dallas, TX',
                end_date: '01/11/2025', // M/D/YYYY
                portal_url: 'https://events.quintrooms.com/v6/?currency=USD&type=geo&siteid=104135&longitude=-97.0959914&latitude=32.7479966&radius=100&checkin=1/10/2025&nights=2&map&locationlabel=Cotton+Bowl+Stadium&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&propertytypes=motel,resort,hotel',
                type_class: 'semifinal'
            },
            {
                name: 'TBD Playoff First Round',
                display_date: 'December 20, 2024',
                display_location: 'TBD',
                end_date: '12/21/2024', // M/D/YYYY
                portal_url: 'https://collegefootballplayoff.com/news/2024/6/5/2425-schedule.aspx',
                type_class: 'tbd'
            },
            {
                name: 'TBD Playoff First Round',
                display_date: 'December 21, 2024',
                display_location: 'TBD',
                end_date: '12/22/2024', // M/D/YYYY
                portal_url: 'https://collegefootballplayoff.com/news/2024/6/5/2425-schedule.aspx',
                type_class: 'tbd'
            },
            {
                name: 'TBD Playoff First Round',
                display_date: 'December 21, 2024',
                display_location: 'TBD',
                end_date: '12/22/2024', // M/D/YYYY
                portal_url: 'https://collegefootballplayoff.com/news/2024/6/5/2425-schedule.aspx',
                type_class: 'tbd'
            },
            {
                name: 'TBD Playoff First Round',
                display_date: 'December 21, 2024',
                display_location: 'TBD',
                end_date: '12/22/2024', // M/D/YYYY
                portal_url: 'https://collegefootballplayoff.com/news/2024/6/5/2425-schedule.aspx',
                type_class: 'tbd'
            },
        ],
    };
}
