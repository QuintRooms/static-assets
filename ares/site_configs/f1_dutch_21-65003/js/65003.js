import BasePortal from '../../../js/build';
import SiteConfig from './65003-config';
import f1Styles from '../../../js/f1';
import Distance from '../../../js/calculate-distance';
import exclusiveRatesComingPopup from '../../../js/components/exclusive-rates-coming/rates-coming';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id);
exclusiveRatesComingPopup('Dutch GP', '6th November');

new ChildPortal();
new Distance();
