import Path from '../../../js/build_tools/path';

const env_path = new Path();
const site_id = 70958;
const directory_name = `van_gogh_landing_page-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 17560,
        master_id: 920,
        site_type: 'event-landing-page',
        use_google_autocomplete: true,
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '100',
        lodging: {
            event_id: '',
            event_name: 'Immersive Van Gogh Exhibition Landing Page',
            event_dates: '',
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
            logo_outbound_url: 'https://www.immersivevangogh.com/',
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
        root_page_header_text: 'Start Your Search',
        root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
        is_resbeat_client: false,
        confirmation_email_from: 'Hotels for Hope',
        has_landing_page: true,
        hide_search_on_landing_page: true,
        landing_page_events: [
            {
                name: 'Van Gogh Immersive Exhibit Dallas',
                display_date: '08/07/21 - 10/03/21',
                end_date: '10/04/2021', // M/D/YYYY
                portal_url: `https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=71011&longitude=-96.7927&latitude=32.7784&map&locationlabel=Immersive+Van+Gogh+Exhibition&propertytypes=Hotel,Motel,Resort,Hostel,Ext.%20Stay,Boutique`,
            },
            {
                name: 'Van Gogh Immersive Exhibit Phoenix',
                display_date: '08/26/21 - 11/28/21',
                end_date: '11/29/2021', // M/D/YYYY
                portal_url: `https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=71012&longitude=-111.9257&latitude=33.4987&map&locationlabel=Immersive+Van+Gogh+Exhibition&propertytypes=Hotel,Motel,Resort,Hostel,Ext.%20Stay,Boutique`,
            },
            {
                name: 'Van Gogh Immersive Exhibit Los Angeles',
                display_date: '07/31/21 - 01/02/22',
                end_date: '01/03/2022', // M/D/YYYY
                portal_url: `https://events.quintrooms.com/v6?currency=USD&type=geo&siteid=71013&longitude=-118.3291&latitude=34.0979&map&locationlabel=Immersive+Van+Gogh+Exhibition&propertytypes=Hotel,Motel,Resort,Hostel,Ext.%20Stay,Boutique`,
            },
        ],
    };
}