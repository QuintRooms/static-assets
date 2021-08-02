import BasePortal from '../../../js/build';
import SiteConfig from './70366-config';
import addStay22Banner from '../../../js/components/stay-22-banner';

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();
addStay22Banner('https://www.stay22.com/embed/60d0b8e0b6d36700179f32ba?hidebrandlogo=true');
