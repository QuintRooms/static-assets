import BasePortal from '../../../js/build';
import SiteConfig from './83333-config';
import Utilities from '../../../js/utilities';

const {domain} = process.env;
const utilities = new Utilities();
const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

utilities.addMultipleHeaderLogos({
    image1: {
        insertPosition: 'beforeend',
        className: 'logo-bottom',
        imageUrl: `https://static.${domain}/ares/site_configs/miami_esap_23-83061/img/logo_bottom.png
        `,
    },
});

new ChildPortal();
