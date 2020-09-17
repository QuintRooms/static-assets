import BasePortal from '../../../js/build';
import SiteConfig from './60278-config';
import Distance from '../../../js/calculate-distance';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();
new Distance();
