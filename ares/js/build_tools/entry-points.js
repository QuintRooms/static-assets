module.exports = () => {
    let entry_points = {};

    // production environment
    if (process.env.NODE_ENV === 'production') {
        entry_points = {
            // 'acl_21-60311': './src/60311.js', // Austin City Limits Festival (ACL) 2021
            // 'arizona_bike_week_21-64812': './src/64812.js', // Arizona Bike week 2021
            // 'arizona_bike_week_22-66931': './src/66931.js', // Arizona Bike Week 2022
            // 'arizona_bike_week_23-81186': './src/81186.js', // arizona bike_week_23
            // 'austin_food_and_wine_21-60305': './src/60305.js', // Austin Food And Wine 2021
            // 'austin_food_and_wine_22-71764': './src/71764.js', // austin food_and_wine_22
            // 'austin_marathon_22-68711': './src/68711.js', // Austin Marathon 2022
            // 'austin_marathon_23-68712': './src/68712.js', // austin marathon_23
            // 'acl_21_production-60310': './src/60310.js', // acl 21_production
            // 'besame_22-71776': './src/71776.js', // besame 22
            // 'bj_houston_21-64191': './src/64191.js', // Barrett-Jackson Houston 2021
            // 'bj_houston_22-73526': './src/73526.js', // bj houston_22
            // 'bj_landing_page-58196': './src/58196.js', // Barrett-Jackson Landing Page
            // 'bj_las_vegas_22-73525': './src/73525.js', // bj las_vegas_22
            // 'bj_scottsdale_22-68720': './src/68720.js', // bj scottsdale_22
            // 'bj_template_21-68719': './src/68719.js', // Barrett-Jackson Template 2021
            // 'bj_west_palm_beach_21-64187': './src/64187.js', // Barrett-Jackson West Palm Beach 2021
            // 'bj_west_palm_beach_22-68721': './src/68721.js', // bj west_palm_beach_22
            // 'bonnaroo_22-70019': './src/70019.js', // Bonnaroo 22
            // 'bonnaroo_23-78102': './src/78102.js', // bonnaroo 23
            // 'breeders_cup_21-70372': './src/70372.js', // Breeders Cup 2021
            // 'breeders_cup_22-77470': './src/77470.js', // breeders cup_22
            // 'buku_22-66047': './src/66047.js', // buku 22
            // 'cfp_21-60797': './src/60797.js', // College football Playoff Championship 2021
            // 'cfp_indianapolis_22-62632': './src/62632.js', // College football Playoff Championship Indianapolis 2022
            // 'cfp_indianapolis_internal_22-67666': './src/67666.js', // cfp indianapolis_internal_22
            // 'cfp_la_23-67667': './src/67667.js', // College football Playoff Championship LA 2023
            // 'cfp_landing_page_22-62631': './src/62631.js', // College football Playoff Championship Landing Page
            // 'confidential_template-60276': './src/60276.js', // confidential template
            // 'ares_derek-70011': './src/70011.js', // ares derek
            // 'farm_aid_21-70422': './src/70422.js', // Farm Aid 21
            // 'farm_aid_22-78568': './src/78568.js', // farm aid_22
            // 'farm_aid_internal_22-78569': './src/78569.js', // farm aid_internal_22
            // 'f1_canada_gp_23-81399': './src/81399.js', // f1 canada_gp_23
            // 'f1_dutch_21-65003': './src/65003.js', // Formula 1 Dutch 2021
            // 'f1_dutch_22-60301': './src/60301.js', // f1 dutch_22
            // 'f1_dutch_promoters_22-75705': './src/75705.js', // f1 dutch_promoters_22
            // f1_landing_page: './src/f1_landing_page.js', // Formula 1 landing page (F1 Rooms)
            // 'f1_miami_22-60295': './src/60295.js', // Formula 1 Miami Grand Prix 2022
            // 'f1_miami_gp_23-46977': './src/46977.js', // f1 miami_gp_23
            // 'f1_montreal_22-60296': './src/60296.js', // Formula 1 Montreal Grand Prix 2022
            // 'f1_us_21-65006': './src/65006.js', // Formula 1 United States Grand Prix 2021
            // 'f1_template-46972': './src/46972.js', // Formula 1 Template
            // 'f1_turkey_21-70474': './src/70474.js', // Formula 1 Turkish Grand Prix 2021
            // 'f1_us_22-75703': './src/75703.js', // f1 us_22
            // 'f1e_cug-57182': './src/57182.js', // f1e cug
            // 'f1e_rewards_cug-40598': './src/40598.js', // f1e rewards_cug
            // 'fes_cug-48167': './src/48167.js', // fes cug
            // 'firefly_21-64866': './src/64866.js', // firefly 21
            // 'forecastle_22-70018': './src/70018.js', // forecastle 22
            // 'format_festival_22-68383': './src/68383.js', // format festival_22
            // 'format_festival__prod_22-68384': './src/68384.js', // format festival__prod_22
            // 'fourleaf_versa_22-73546': './src/73546.js', // fourleaf versa_22
            // 'governors_ball_21-70366': './src/70366.js', // governors ball_21
            // 'governors_ball_22-77491': './src/77491.js', // governors ball_22
            // 'hof_canton-62681': './src/62681.js', // Hall Of Fame Canton
            // 'hof_hbcu_classic_21-62682': './src/62682.js', // Hall Of Fame HBCU Classic
            // 'hof_cug-63710': './src/63710.js', // Hall Of Fame cug
            // 'hof_landing_page-62678': './src/62678.js', // Hall Of Fame landing page
            // 'hof_marathon_21-60871': './src/60871.js', // Hall Of Fame Marathon 2021
            // 'hof_points_cug-63711': './src/63711.js', // Hall Of Fame points_cug
            // 'hof_retail-60037': './src/60037.js', // Hall Of Fame retail
            // 'hof_enshrinement_attendees_22-74241': './src/74241.js', // hof enshrinement_attendees_22
            // 'hof_enshrinement_friends_fam_22-74242': './src/74242.js', // hof enshrinement_friends_fam_22
            // 'hof_enshrinement_internal_22-74240': './src/74240.js', // hof enshrinement_internal_22
            // 'hook_em_cug-47495': './src/47495.js', // hook em_cug
            // 'hook_em_retail-47496': './src/47496.js', // hook em_retail
            // 'high_water_22-71767': './src/71767.js', // high water_22
            // 'innings_tempe_22-70017': './src/70017.js', // innings tempe_22
            // 'innings_tampa_22-70015': './src/70015.js', // innings tampa_22
            // 'isle_tt_22-78066': './src/78066.js', // isle tt_22
            // 'lib_21-63504': './src/63504.js', // Life Is Beautiful Festival 2021
            // 'liv_golf_pumpkin_ridge_22-78856': './src/78856.js', // liv golf_pumpkin_ridge_22
            // 'lolla_21-60828': './src/60828.js', // Lollapalooza 2021
            // 'lolla_22-62635': './src/62635.js', // lolla 22
            // 'lolla_22_prod-62636': './src/62636.js', // lolla 22_prod
            // 'lolla_23-71770': './src/71770.js', // lolla 23
            // 'lolla_prod_23-71771': './src/71771.js', // lolla prod_23
            // 'miami_cosmetic_surgery_22-78429': './src/78429.js', // miami cosmetic_surgery_22
            'miami_cosmetic_surgery_23-82896': './src/82896.js', // miami cosmetic_surgery_23
            // 'miami_esap_23-83061': './src/83061.js', // miami esap_23
            // 'moon_river_festival_21-68381': './src/68381.js', // moon river_festival_21
            // 'moon_river_22-70021': './src/70021.js', // moon river_22
            // 'music_midtown_21-70012': './src/70012.js', // Music Midtown Production 2021
            // 'music_midtown_21-70013': './src/70013.js', // Music Midtown Attendees 2021
            // 'music_midtown_22-71768': './src/71768.js', // music midtown_22
            // 'music_midtown_prod_22-71769': './src/71769.js', // music midtown_prod_22
            // 'oceans_calling_22-78095': './src/78095.js', // oceans calling_22
            // 'ohana_festival_22-77149': './src/77149.js', // ohana festival_22
            // 'packers_experiences_retail-70421': './src/70421.js', // packers experiences_retail
            // 'railbird_22-70020': './src/70020.js', // railbird 22
            // 'railbird_23-71772': './src/71772.js', // railbird 23
            // 'railbird_production_23-71773': './src/71773.js', // railbird production_23
            // 'resbeat-60831': './src/60831.js', // Resbeat
            // 'retail_resbeat_public-51474': './src/51474.js', // Retail Resbeat Public
            // 'resbeat_squad_test-62686': './src/62686.js', // Resbeat Service Squad Test
            // 'roomcash-63712': './src/63712.js', // RoomCash
            // 'room_steals-52342': './src/52342.js', // Room Steals
            // 'project_glow_22-76307': './src/76307.js', // project glow_22
            // 'sea_hear_now_21-70014': './src/70014.js', // Sea Hear Now 21
            // 'sea_hear_now_22-71759': './src/71759.js', // sea hear_now_22
            // 'shaky_knees_21-68379': './src/68379.js', // Shaky Knees 2021
            // 'shaky_knees_22-70057': './src/70057.js', // Shaky Knees 2022
            // 'shaky_knees_23-78097': './src/78097.js', // shaky knees_23
            // 'sial_canada_22-75294': './src/75294.js', // sea hear_now_22
            // 'socal_bike_fest_21-70903': './src/70903.js', // Socal Bike Fest 2021
            // 'sotx_equestrain_22-79448': './src/79448.js', // sotx equestrain_22
            // 'sotx_fall_classic_22-79449': './src/79449.js', // sotx fall_classic_22
            // 'sotx_summer_games_san_antonio_22-68890': './src/68890.js', // sotx summer_games_san_antonio_22
            // 'sueno_22-71766': './src/71766.js', // sueno 22
            // 'tejas_trails_retail-45007': './src/45007.js', // tejas trails_retail
            // 'texas_book_festival_21-69571': './src/69571.js', // texas book_festival 2021
            // 'texas_book_festival_22-69574': './src/69574.js', // texas book_festival_22
            // 'ticket_manager-70009': './src/70009.js', // ticket manager
            // 'tidal_wave_22-74016': './src/74016.js', // tidal wave_22
            // 'tidal_wave_public_22-76306': './src/76306.js', // tidal wave_public_22
            // 'tortuga_21-62309': './src/62309.js', // Tortuga 2021
            // 'tortuga_22-74015': './src/74015.js', // tortuga 22
            // 'tortuga_23-77405': './src/77405.js', // tortuga 23
            // 'tortuga_23_public-77406': './src/77406.js', // tortuga 23_public
            // 'transportation_short_course_20-56735': './src/56735.js', // Transportation Short Course 2020
            // 'van_gogh_dallas-71011': './src/71011.js', // Van Gogh Dallas
            // 'van_gogh_phoenix-71012': './src/71012.js', // Van Gogh Phoenix
            // 'van_gogh_los_angeles-71013': './src/71013.js', // Van Gogh Los Angeles
            // 'van_gogh_landing_page-70958': './src/70958.js', // Van Gogh Los Angeles
            // 'voodoo_22-70452': './src/70452.js', // Voodoo Festival Attendees 2022
            // 'voodoo_22-70453': './src/70453.js', // Voodoo Festival Production 2022
        };

        // develop environment
    } else if (process.env.NODE_ENV === 'develop') {
        entry_points = {
            // 'ares_child-60278': './src/60278.js', // Ares Child Test
            // 'ares_child-60279': './src/60279.js', // Ares Child Test
            // 'cug_template-39624': './src/39624.js', // CUG Template
            // 'resbeat_points_demo-62725': './src/62725.js', // Resbeat Points Demo
            // 'resbeat_test-62011': './src/62011.js', // Resbeat Test
            // 'roomcash_develop-63713': './src/63713.js', // RoomCash Develop
            // 'ohana_festival_22-77149': './src/77149.js', // ohana festival_22
            'miami_cosmetic_surgery_23-82896': './src/82896.js', // miami cosmetic_surgery_23
            // 'miami_esap_23-83061': './src/83061.js', // miami esap_23
        };

        // local environment
    } else if (process.env.NODE_ENV === 'local') {
        entry_points = {
            // new sites populate below
            // 'miami_esap_23-83061': './src/83061.js', // miami esap_23
            'miami_cosmetic_surgery_23-82896': './src/82896.js', // miami cosmetic_surgery_23
            // 'f1_miami_gp_23-46977': './src/46977.js', // f1 miami_gp_23
            // 'f1_canada_gp_23-81399': './src/81399.js', // f1 canada_gp_23
            // 'ares_derek-70011': './src/70011.js', // ares derek
        };
    }

    return entry_points;
};

// OLD PORTALS
// 'acl_20-53336': './src/53336.js', // Austin City Limits Festival (ACL) 2020
// 'akon_21-60284': './src/60284.js', // A-Kon 2021
// 'arizona_bike_week_20-60509': './src/60509.js', // Arizona Bike Week 2020
// 'austin_food_and_wine_20-60290': './src/60290.js', // Austin Food And Wine 2020
// 'austin_marathon_21-59243': './src/59243.js', // Austin Marathon 2021
// 'bj_las_vegas_20-60089': './src/60089.js', // Barrett-Jackson Las Vegas 2020
// 'bj_las_vegas_21-64190': './src/64190.js', // Barrett-Jackson Las Vegas 2021
// 'bj_northeast_20-60086': './src/60086.js', // Barrett-Jackson Northeast 2020
// 'bj_scottsdale_21-58513': './src/58513.js', // Barrett-Jackson Scottsdale 2021
// 'bj_west_palm_beach_20-60292': './src/60292.js', // Barrett-Jackson West Palm Beach 2020
// 'breeders_cup_20-59788': './src/59788.js', // Breeders Cup 2020
// 'bonnaroo_21-64868': './src/64868.js', // Bonnaroo 21
// 'buku_21-56297': './src/56297.js', // Buku 2021
// 'club_seacret_template-70905': './src/70905.js', // Club Seacret Template
// 'f1_bahrain_20-60302': './src/60302.js', // Formula 1 Bahrain 2020 (Gulf Air & Rolex Sakhir)
// 'f1_portugal_20-54494': './src/54494.js', // Formula 1 Portugal 2020
// 'hof_enshrinement_21-60041': './src/60041.js', // Hall Of Fame Enshrinement 2021
// 'hof_enshrinement_friends_fam_21-66018': './src/66018.js', // hof enshrinement_friends_fam_21
// 'housing_template-60265': './src/60265.js', // Housing Template
// 'innings_21-60093': './src/60093.js', // Innings Fest 2021
// 'lolla_20-52975': './src/52975.js', // Lollapalooza 2020
// 'moto_gp_portugal-67854': './src/67854.js', // moto gp_portugal
// 'railbird_21-68382': './src/68382.js', // railbird 21
// 'rot_rally_21-60512': './src/60512.js', // Republic of Texas Rally 2021
// 'shaky_knees_20-60303': './src/60303.js', // Shaky Knees 2020
// 'sotx_summer_games_san_antonio_21-54034': './src/54034.js', // Special Olympics Of Texas Summer Games San Antonio 2021
// 'sotx_fall_classic_bocce_softball_21-68888': './src/68888.js', // sotx fall_classic_bocce_softball_21
// 'sotx_fall_classic_golf_swimming_21-68887': './src/68887.js', // sotx fall_classic_golf_swimming_21
// 'tortuga_20-60336': './src/60336.js', // Tortuga 2020
// 'voodoo_21-60792': './src/60792.js', // Voodoo Festival 2021
