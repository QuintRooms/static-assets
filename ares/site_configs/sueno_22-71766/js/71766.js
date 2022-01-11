import BasePortal from '../../../js/build';
import Utilities from '../../../js/utilities';
import SiteConfig from './71766-config';

const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();
