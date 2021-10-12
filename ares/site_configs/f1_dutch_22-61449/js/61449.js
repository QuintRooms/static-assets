import BasePortal from '../../../js/build';
import SiteConfig from './61449-config';
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

f1Styles(site_config.site_id);
utilities.replacePropThumbImage(site_config.prop_image_replacement);

new ChildPortal();
new Distance();
