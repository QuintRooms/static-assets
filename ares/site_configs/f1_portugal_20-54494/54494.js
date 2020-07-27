import BasePortal from '../../js/build';
import SiteConfig from './54494-config';
import Utilities from '../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

utilities.addF1Styles(site_config.site_id);

new ChildPortal();
