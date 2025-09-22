import BasePortal from '../../../js/build';
import SiteConfig from './112025-config';
import Utilities from '../../../js/utilities';

const site_config = new SiteConfig();

const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

function addHiltonTags() {
    const hilton_prop_ids = [
        44621,
        3846047,
        208368,
        236618,
        16,
        31,
        21,
        12937,
        267891,
        257288,
        1220075,
        1268837,
        175722,
        65,
        188905,
        16460,
        16343,
        12715,
        71,
        16797,
        16417,
        277232,
        16454,
        16470,
        165275,
        182101,
        659056,
        3349002,
        50725,
        282039,
        16523,
        1269346,
        1367176,
        1239970,
        272052,
        188634,
        3469078,
        378245,
        3309155,
        277416,
        2302525,
        3167140,
        16837,
        859570,
        215220,
        2048227,
        13770,
        13499,
        67,
        20050,
        20252,
        415537,
        6,
        619759,
        24,
        446580,
        25,
        3349688,
        2048225,
        1243044,
        1758007,
        851719,
        20132,
        180778,
        244634,
        20130,
        277730,
        277731,
        187648,
        20133,
        20164,
        262395,
        19706,
        3011273,
        16452,
        220004,
        2048226,
        3468713,
    ];

    hilton_prop_ids.forEach((prop) => {
        if (document.querySelector(`#theArnProperty${prop}`)) {
            document.querySelector(`#theArnProperty${prop} .ArnContainer`).style.background =
                'url("https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/hilton-logo.svg") no-repeat 100% 25px / 65%';

            if (window.matchMedia('(max-width: 500px)').matches) {
                document.querySelector(`#theArnProperty${prop} .ArnContainer`).style.background =
                    'url("https://static.hotelsforhope.com/ares/bj_scottsdale_21-58513/img/hilton-logo.svg") 0 85% / 100% no-repeat';
            }

            utilities.addPropThumbTag('<div style="border-bottom: 1px solid rgba(255, 255, 255, .4);">Hilton Hotel</div>', prop);
        }
    });
}

addHiltonTags();
