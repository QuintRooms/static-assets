module.exports = () => {
    let entry_points = {};

    // production environment
    if (process.env.NODE_ENV === 'production') {
        entry_points = {
            // 'ares_derek-70011': './src/70011.js', // ares derek
            // 'bj_landing_page-58196': './src/58196.js', // Barrett-Jackson Landing Page
            // 'bj_template_21-68719': './src/68719.js', // Barrett-Jackson Template 2021
            // 'bj_scottsdale_26-113563': './src/113563.js', // bj scottsdale_26
            // 'bj_scottsdale_jan_public_26-114220': './src/114220.js', // bj scottsdale_jan_public_26
            // 'bj_west_palm_beach_public_26-114319': './src/114319.js', // bj west_palm_beach_public_26
            // 'cfp_landing_page_22-62631': './src/62631.js', // College football Playoff Championship Landing Page
            // 'cfp_miami_26-113545': './src/113545.js', // cfp miami_26
            // 'cfp_miami_media_26-113720': './src/113720.js', // cfp miami_media_26
            // 'cfp_miami_internal_26-113718': './src/113718.js', // cfp miami_internal_26
            // 'cfp_retail_22-67665': './src/67665.js', // cfp retail_22
            // 'cfp_retail_24-103769': './src/103769.js', // cfp retail_24
            // 'cfp_test_conn_3-112938': './src/112938.js', // cfp test_conn_3
            // 'confidential_template-60276': './src/60276.js', // confidential template
            // 'ares_derek-70011': './src/70011.js', // ares derek
            // 'derby_rooms_cug_26-112374': './src/112374.js', // derby rooms_cug_26
            // 'derek_test_2-101088': './src/101088.js', // derek test_2
            // 'derby_rooms_test_2_25-108392': './src/108392.js', // derby rooms_test_2_25
            // 'derby_rooms_final_25-109284': './src/109284.js', // derby rooms_final_25
            // 'derby_rooms_test_26-113709': './src/113709.js', // derby rooms_test_26
            // 'farm_aid_25-109464': './src/109464.js', // farm aid_25
            // 'f1_canada_gp_26-111888': './src/111888.js', // f1 canada_gp_26
            // f1_landing_page: './src/f1_landing_page.js', // Formula 1 landing page (F1 Rooms)
            // 'f1_lvgp_marshal_program_25-110825': './src/110825.js', // f1 lvgp_marshal_program_25
            // 'f1_miami_gp_25-101993': './src/101993.js', // f1 miami gp_25
            // 'f1_miami_gp_26-111830': './src/111830.js', // f1 miami_gp_26
            // 'f1_lvgp_retail-100609': './src/100609.js', // f1 lvgp_retail
            // // 'f1_template-46972': './src/46972.js', // Formula 1 Template
            // 'f1e_cug-57182': './src/57182.js', // f1e cug
            // 'f1e_rewards_cug-40598': './src/40598.js', // f1e rewards_cug
            // 'fes_cug-48167': './src/48167.js', // fes cug
            // 'hook_em_cug-47495': './src/47495.js', // hook em_cug
            // 'hook_em_retail-47496': './src/47496.js', // hook em_retail
            // 'packers_experiences_retail-70421': './src/70421.js', // packers experiences_retail
            // 'resbeat-60831': './src/60831.js', // Resbeat
            // 'retail_resbeat_public-51474': './src/51474.js', // Retail Resbeat Public
            // 'resbeat_squad_test-62686': './src/62686.js', // Resbeat Service Squad Test
            // 'roomcash-63712': './src/63712.js', // RoomCash
            // 'room_steals-52342': './src/52342.js', // Room Steals
            // 'sotx_winter_games_25-101018': './src/101018.js', // sotx winter_games_25
            // 'sotx_winter_games_26-109271': './src/109271.js', // sotx winter_games_26
            // 'sotx_summer_games_25-105438': './src/105438.js', // sotx summer_games_25
            // 'sportsnet_holidays_cug-00001': './src/00001.js', // sportsnet holidays_cug
            // 'tejas_trails_retail-45007': './src/45007.js', // tejas trails_retail
            // 'ticket_manager-70009': './src/70009.js', // ticket manager
            // 'tortuga_25-101623': './src/101623.js', // tortuga 25
            // 'tortuga_26-110264': './src/110264.js', // tortuga 26
            // 'test_cfp_landing-104135': './src/104135.js', // test cfp_landing
            // 'test_cfp_landing_3-113624': './src/113624.js', // test cfp_landing_3
            // 'test_new_conf_emails_25-111173': './src/111173.js', // test new_conf_emails_25
            // 'test_email_control_25-111177': './src/111177.js', // test email_control_25
            // 'test_gcp2-112025': './src/112025.js', // test gcp2
            'test_gcp3-114187': './src/114187.js', // test gcp3
            // 'transportation_short_course_20-56735': './src/56735.js', // Transportation Short Course 2020
            // 'veronica_test_site-102126': './src/102126.js', // veronica test_site
        };

        // develop environment
    } else if (process.env.NODE_ENV === 'develop') {
        entry_points = {
            // 'derby_rooms_test_2_25-108392': './src/108392.js', // derby rooms_test_2_25
            // 'derby_rooms_final_25-109284': './src/109284.js', // derby rooms_final_25
            // 'sotx_winter_games_26-109271': './src/109271.js', // sotx winter_games_26
            // 'farm_aid_25-109464': './src/109464.js', // farm aid_25
            // 'farm_aid_internal_25-111117': './src/111117.js', // farm aid_internal_25
            // 'tortuga_26-110264': './src/110264.js', // tortuga 26
            // 'f1_lvgp_marshal_program_25-110825': './src/110825.js', // f1 lvgp_marshal_program_25
            // 'farm_aid_internal_25-111117': './src/111117.js', // farm aid_internal_25
            // 'test_new_conf_emails_25-111173': './src/111173.js', // test new_conf_emails_25
            // 'test_email_control_25-111177': './src/111177.js', // test email_control_25
            // 'f1_miami_gp_26-111830': './src/111830.js', // f1 miami_gp_26
            // 'f1_canada_gp_26-111888': './src/111888.js', // f1 canada_gp_26
            // 'test_gcp2-112025': './src/112025.js', // test gcp2
            // 'derby_rooms_cug_26-112374': './src/112374.js', // derby rooms_cug_26
            // 'cfp_test_conn_3-112938': './src/112938.js', // cfp test_conn_3
            // 'cfp_miami_26-113545': './src/113545.js', // cfp miami_26
            // 'test_cfp_landing_3-113624': './src/113624.js', // test cfp_landing_3
            // 'test_cfp_landing-104135': './src/104135.js', // test cfp_landing
            // 'derby_rooms_test_26-113709': './src/113709.js', // derby rooms_test_26
            // 'cfp_miami_media_26-113720': './src/113720.js', // cfp miami_media_26
            // 'cfp_miami_internal_26-113718': './src/113718.js', // cfp miami_internal_26
            // 'bj_scottsdale_26-113563': './src/113563.js', // bj scottsdale_26
            // 'bj_scottsdale_jan_public_26-114220': './src/114220.js', // bj scottsdale_jan_public_26
            // 'bj_west_palm_beach_public_26-114319': './src/114319.js', // bj west_palm_beach_public_26
            'test_gcp3-114187': './src/114187.js', // test gcp3
        };

        // local environment
    } else if (process.env.NODE_ENV === 'local') {
        entry_points = {
            // new sites populate below
            'test_gcp3-114187': './src/114187.js', // test gcp3
            'bj_west_palm_beach_public_26-114319': './src/114319.js', // bj west_palm_beach_public_26
            'bj_scottsdale_jan_public_26-114220': './src/114220.js', // bj scottsdale_jan_public_26
            'bj_scottsdale_26-113563': './src/113563.js', // bj scottsdale_26
            'cfp_miami_media_26-113720': './src/113720.js', // cfp miami_media_26
            'cfp_miami_internal_26-113718': './src/113718.js', // cfp miami_internal_26
            'derby_rooms_test_26-113709': './src/113709.js', // derby rooms_test_26
            'test_cfp_landing_3-113624': './src/113624.js', // test cfp_landing_3
            'cfp_miami_26-113545': './src/113545.js', // cfp miami_26
            'cfp_test_conn_3-112938': './src/112938.js', // cfp test_conn_3
            'derby_rooms_cug_26-112374': './src/112374.js', // derby rooms_cug_26
            'test_gcp2-112025': './src/112025.js', // test gcp2
            'f1_canada_gp_26-111888': './src/111888.js', // f1 canada_gp_26
            'f1_miami_gp_26-111830': './src/111830.js', // f1 miami_gp_26
        };
    }

    return entry_points;
};

// OLD PORTALS

// 'acl_production_24-94608': './src/94608.js', // acl production_24
// 'acl_attendees_24-94605': './src/94605.js', // acl attendees_24
// 'arizona_bike_week_24-90541': './src/90541.js', // arizona bike_week_24
// 'atx_tv_festival_24-95455': './src/95455.js', // atx tv_festival_24
// 'beach_it_24-91129': './src/91129.js', // beach it_24
// 'bonnaroo_24-90957': './src/90957.js', // bonnaroo 24
// 'breeders_24-88325': './src/88325.js', // breeders 24
// 'cfp_atlanta_internal_25-103193': './src/103193.js', // cfp atlanta_internal_25
// 'cfp_atlanta_media2_25-105604': './src/105604.js', // cfp atlanta_media2_25
// 'cfp_atlanta_public_25-101560': './src/101560.js', // cfp
// 'cfp_BACKUP_landing_page-106417': './src/106417.js', // cfp BACKUP_landing_page
// 'cfp_cotton_bowl_25-106138': './src/106138.js', // cfp cotton_bowl_25
// 'cfp_fiesta_bowl_25-106128': './src/106128.js', // cfp fiesta_bowl_25
// 'cfp_orange_bowl_25-106139': './src/106139.js', // cfp orange_bowl_25
// 'cfp_peach_bowl_25-106129': './src/106129.js', // cfp peach_bowl_25
// 'cfp_rose_bowl_25-106131': './src/106131.js', // cfp rose_bowl_25
// 'cfp_sugar_bowl_25-106136': './src/106136.js', // cfp sugar_bowl_25
// 'cfp_houston_24-88767': './src/88767.js', // cfp houston_24
// 'cfp_houston_internal_24-92253': './src/92253.js', // cfp houston_internal_24
// 'cfp_first_round_one_24-107616': './src/107616.js', // cfp first_round_one_24
// 'cfp_first_round_game_four_24-107617': './src/107617.js', // cfp first_round_game_four_24
// 'cfp_first_round_game_three_24-107619': './src/107619.js', // cfp first_round_game_three_24
// 'cfp_first_round_game_two_24-107621': './src/107621.js', // cfp first_round_game_two_24
// 'cfp_houston_media_24-97359': './src/97359.js', // cfp houston_media_24
// 'cfp_atlanta_25-90833': './src/90833.js', // cfp atlanta_25
// 'fairwell_festival_24-93554': './src/93554.js', // fairwell festival_24
// 'farm_aid_24-98897': './src/98897.js', // farm aid_24
// 'farm_aid_public_24-102806': './src/102806.js', // farm aid_public_24
// 'farm_aid_25-109464': './src/109464.js', // farm aid_25
// 'farm_aid_internal_25-111117': './src/111117.js', // farm aid_internal_25
// 'farm_aid_prevclone_internal_24-102483': './src/102483.js', // farm aid_prevclone_internal_24
// 'f1_canada_gp_24-91620': './src/91620.js', // f1 canada_gp_24
// 'f1_lvgp_24-91626': './src/91626.js', // f1 lvgp_24
// 'f1_lvgp_public_24-102817': './src/102817.js', // f1 lvgp_public_24
// 'f1_lvgp_public_updated_24-102894': './src/102894.js', // f1 lvgp_public_updated_24
// 'f1_lvgp_marshal_program_24-103622': './src/103622.js', // f1 lvgp_marshal_program_24
// 'f1_miami_gp_24-90482': './src/90482.js', // f1 miami_gp_24
// 'hof_canton-62681': './src/62681.js', // Hall Of Fame Canton
// 'hof_cug-63710': './src/63710.js', // Hall Of Fame cug
// 'hof_landing_page-62678': './src/62678.js', // Hall Of Fame landing page
// 'hof_points_cug-63711': './src/63711.js', // Hall Of Fame points_cug
// 'hof_retail-60037': './src/60037.js', // Hall Of Fame retail
// 'high_water_24-89860': './src/89860.js', // high water_24
// 'innings_tempe_24-88139': './src/88139.js', // innings tempe_24
// 'innings_tempe_new_id_24-88821': './src/88821.js', // innings tempe_new_id_24
// 'lolla_24-90306': './src/90306.js', // lolla 24
// 'lolla_prod_24-90312': './src/90312.js', // lolla prod_24
// 'oceans_calling_24-96197': './src/96197.js', // oceans calling_24
// 'ohana_festival_c3_24-94904': './src/94904.js', // ohana festival_c3_24
// 'railbird_production_24-90538': './src/90538.js', // railbird production_24
// 'railbird_24-90535': './src/90535.js', // railbird 24
// 'sea_hear_now_24-94600': './src/94600.js', // sea hear_now_24
// 'shaky_knees_attendees_24-90249': './src/90249.js', // shaky knees_attendees_24
// 'sotx_winter_games_24-92088': './src/92088.js', // sotx winter_games_24
// 'sotx_summer_games_24-94660': './src/94660.js', // sotx summer_games_24
// 'sotx_fall_classic_24-102820': './src/102820.js', // sotx fall_classic_24
// 'suenos_24-90956': './src/90956.js', // suenos 24
// 'suenos_new_dates_24-93376': './src/93376.js', // suenos new_dates_24
// 'texas_book_festival_24-98724': './src/98724.js', // texas book_festival_24
// 'tortuga_24_public-88778': './src/88778.js', // tortuga 24_public
// 'two_step_inn_festival_24-90132': './src/90132.js', // two step_inn_festival_24
// 'van_gogh_dallas-71011': './src/71011.js', // Van Gogh Dallas
// 'van_gogh_phoenix-71012': './src/71012.js', // Van Gogh Phoenix
// 'van_gogh_los_angeles-71013': './src/71013.js', // Van Gogh Los Angeles
// 'van_gogh_landing_page-70958': './src/70958.js', // Van Gogh Los Angeles
