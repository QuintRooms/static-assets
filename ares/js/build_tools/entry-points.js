module.exports = () => {
    let entry_points = {};

    // production environment
    if (process.env.NODE_ENV === 'production') {
        entry_points = {
            'acl_20-53336': './src/53336.js', // acl 2020
            'acl_21-60311': './src/60311.js', // ACL 2021
            'akon_21-60284': './src/60284.js', // A-Kon 2021
            'arizona_bike_week_20-60509': './src/60509.js', // Arizona Bike Week 2020
            'arizona_bike_week_21-64812': './src/64812.js', // arizona bike_week_21
            'austin_food_and_wine_20-60290': './src/60290.js', // AFW 2020
            'austin_marathon_21-59243': './src/59243.js', // Austin Marathon 2021
            'bj_landing_page-58196': './src/58196.js', // BJ landing page
            'bj_las_vegas_20-60089': './src/60089.js', // BJ Las Vegas 2020
            'bj_northeast_20-60086': './src/60086.js', // BJ Northeast 2020
            'bj_scottsdale_21-58513': './src/58513.js', // BJ scottsdale 2021
            'bj_west_palm_beach_20-60292': './src/60292.js', // BJ W Palm Beach 2020
            'bj_west_palm_beach_21-64187': './src/64187.js', // BJ W Palm Beach 2021
            'breeders_cup_20-59788': './src/59788.js', // Breeders Cup 2020
            'buku_21-56297': './src/56297.js', // Buku 2021
            'cfp_21-60797': './src/60797.js', // CFP 2021
            'f1_bahrain_20-60302': './src/60302.js', // F1 Bahrain 2020 (Gulf Air & Rolex Sakhir)
            'f1_dutch_21-65003': './src/65003.js', // F1 Dutch 2021
            f1_landing_page: './src/f1_landing_page.js',
            'f1_portugal_20-54494': './src/54494.js', // F1 Portugal 2020
            'f1_template-46972': './src/46972.js', // F1 Template
            'hof_enshrinement_21-60041': './src/60041.js', // HOF Enshrinement 2021
            'hof_landing_page-62678': './src/62678.js', // HOF landing page
            'hof_marathon_21-60871': './src/60871.js', // HOF Marathon 2021
            'hof_retail-60037': './src/60037.js', // HOF retail
            'housing_template-60265': './src/60265.js', // Housing Template
            'innings_21-60093': './src/60093.js', // Innings Fest 2021
            'lib_21-63504': './src/63504.js', // lib 21
            'lolla_20-52975': './src/52975.js', // lollapalooza 2020
            'lolla_21-60828': './src/60828.js', // lollapalooza 2021
            'resbeat-60831': './src/60831.js', // Resbeat
            'resbeat_squad_test-62686': './src/62686.js', // Resbeat Service Squad Test
            'room_steals-52342': './src/52342.js', // Room Steals
            'rot_rally_21-60512': './src/60512.js', // Republic of Texas Rally 2021
            'shaky_knees_20-60303': './src/60303.js', // Shaky Knees
            'sotx_summer_games_san_antonio_21-54034': './src/54034.js', // sotx summer_games_san_antonio_21
            'tortuga_20-60336': './src/60336.js', // Tortuga
            'tortuga_21-62309': './src/62309.js', // Tortuga 2021
            'transportation_short_course_20-56735': './src/56735.js', // TSC 2020
            'voodoo_21-60792': './src/60792.js', // Voodoo
        };

        // develop environment
    } else if (process.env.NODE_ENV === 'develop') {
        entry_points = {
            'ares_child-60278': './src/60278.js', // Ares Child Test
            'ares_child-60279': './src/60279.js', // Ares Child Test
            'cug_template-39624': './src/39624.js', // CUG Template
            'hof_canton-62681': './src/62681.js', // Hall Of Fame Canton
            'hof_cug-63710': './src/63710.js', // hof cug
            'hof_points_cug-63711': './src/63711.js', // hof points_cug
            'resbeat_points_demo-62725': './src/62725.js', // Resbeat Points Demo
            'resbeat_test-62011': './src/62011.js', // Resbeat test
        };

        // local environment
    } else if (process.env.NODE_ENV === 'local') {
        entry_points = {
            // new sites populate below
        };
    }

    return entry_points;
};
