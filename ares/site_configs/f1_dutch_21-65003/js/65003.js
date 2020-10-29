import BasePortal from '../../../js/build';
import SiteConfig from './65003-config';
import f1Styles from '../../../js/f1';
import Distance from '../../../js/calculate-distance';
import popup from '../../../js/components/on-load-popup/popup';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id);
popup('Check back on 6th November for additional and exclusive Dutch GP hotel rates.');

new ChildPortal();
new Distance();
