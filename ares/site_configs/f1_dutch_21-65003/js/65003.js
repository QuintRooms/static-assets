import BasePortal from '../../../js/build';
import SiteConfig from './65003-config';
import f1Styles from '../../../clients/formula-1/js/f1';
import Distance from '../../../js/calculate-distance';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id);

new ChildPortal();
new Distance();
