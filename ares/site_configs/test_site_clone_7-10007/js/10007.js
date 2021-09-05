import BasePortal from '../../../js/build';
import Utilities from '../../../js/utilities';
import SiteConfig from './10007-config';

const {domain} = process.env;
const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

utilities.prepopulateDatePopupWithTodaysDate();
utilities.addMultipleHeaderLogos({
    image1: {
        insertPosition: 'afterbegin',
        className: 'logo-left',
        imageUrl: `https://static.${domain}/ares/site_configs/shaky_knees_20-60303/img/left.svg`,
    },
    image2: {
        insertPosition: 'beforeend',
        className: 'logo-right',
        imageUrl: `https://static.${domain}/ares/site_configs/shaky_knees_20-60303/img/right.svg`,
    },
});
