import BasePortal from '../../../js/build';
import SiteConfig from './69574-config';

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();
