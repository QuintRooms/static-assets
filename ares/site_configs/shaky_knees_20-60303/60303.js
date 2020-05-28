import BasePortal from '../../js/build';
import Utilities from '../../js/utilities';

const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super();
        super.init();
    }
}

new ChildPortal();

utilities.addMultipleHeaderLogos({
    image1: {
        insertPosition: 'afterbegin',
        className: 'logo-left',
        imageUrl: 'https://dev-static.hotelsforhope.com/ares/site_configs/shaky_knees_20-60303/img/left.svg',
    },
    image2: {
        insertPosition: 'beforeend',
        className: 'logo-right',
        imageUrl: 'https://dev-static.hotelsforhope.com/ares/site_configs/shaky_knees_20-60303/img/right.svg',
    },
});
