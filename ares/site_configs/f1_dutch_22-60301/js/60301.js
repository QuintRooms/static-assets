import BasePortal from '../../../js/build';
import SiteConfig from './60301-config';
import f1Styles from '../../../clients/formula_1/js/f1';
import Distance from '../../../js/calculate-distance';
import Utilites from '../../../js/utilities';

const utilities = new Utilites();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id, site_config.lodging.event_name, 'Circuit Zandvoort', '#333');
utilities.replacePropThumbImage(site_config.prop_image_replacement);

new ChildPortal();
new Distance();
