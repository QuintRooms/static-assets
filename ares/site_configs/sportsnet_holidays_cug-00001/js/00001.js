import Resbeat from '../../../js/resbeat';
import SiteConfig from './00001-config';

const site_config = new SiteConfig();
class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();
