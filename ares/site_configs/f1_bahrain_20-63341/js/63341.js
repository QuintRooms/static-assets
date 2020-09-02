import BasePortal from '../../../js/build';
import SiteConfig from './63341-config';
import f1Styles from '../../../js/f1';
import Distance from '../../../js/calculate-distance';
import popUp from '../../../js/components/event-popup/multiple-event-weekends';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id);
popUp(site_config);

new ChildPortal();
new Distance();
