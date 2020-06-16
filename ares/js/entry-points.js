require('dotenv').config({path: '.env'});

module.exports = () => {
    let entry_points = {};

    // production environment
    if (process.env.environment === 'production') {
        entry_points = {
            'acl_20-53336': './src/53336.js', // acl 2020
            'lolla_21-60828': './src/60828.js', // lollapalooza 2021
            'voodoo_21-60792': './src/60792.js', // Voodoo
            'lolla_20-52975': './src/52975.js', // lollapalooza 2020
            'shaky_knees_20-60303': './src/60303.js', // Shaky Knees
            'tortuga_20-60336': './src/60336.js', // Tortuga
            'housing_template-60265': './src/60265.js', // Housing Template
            'bj_west_palm_beach_20-60292': './src/60292.js', // BJ W Palm Beach 2020
            'hof_marathon_21-60871': './src/60871.js', // HOF Marathon 2021
            'hof_retail-60037': './src/60037.js', // HOF Retail
            'bj_las_vegas_20-60089': './src/60089.js', // BJ Las Vegas 2020
            'bj_northeast_20-60086': './src/60086.js', // BJ Northeast 2020
            'bj_scottsdale_21-58513': './src/58513.js', // BJ scottsdale 2021
            'transportation_short_course_20-56735': './src/56735.js', // TSC 2020
            'breeders_cup_20-59788': './src/59788.js', // Breeder's Cup 2020
            'austin_food_and_wine_20-60290': './src/60290.js', // AFW 2020
            'akon_21-60284': './src/60284.js', // A-Kon 2021
            'innings_21-60093': './src/60093.js', // Innings Fest 2021
            'austin_marathon_21-59243': './src/59243.js', // Austin Marathon 2021
        };

        // develop environment
    } else if (process.env.environment === 'develop') {
        entry_points = {
            // 'ares_child-60278': './src/60278.js', // Ares Child Test
            'cug_template-39624': './src/39624.js', // CUG Template
            // 'room_steals-52342': './src/52342.js', // Room Steals
        };

        // local environment
    } else if (process.env.environment === 'local') {
        entry_points = {
            'ares_child-60279': './src/60279.js', // Ares Child Test
            'arizona_bike_week_20-60509': './src/60509.js', // Arizona Bike Week 2020
        };
    }

    return entry_points;
};
