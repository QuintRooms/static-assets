import BasePortal from '../../../js/build';
import SiteConfig from './63712-config';
import Roomcash from './roomcash';

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        new Roomcash(site_config);
    }
}

new ChildPortal();
