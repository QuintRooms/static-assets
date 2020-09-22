import SiteConfig from './63710-config';
import Resbeat from '../../../js/resbeat';

const site_config = new SiteConfig();
class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();
