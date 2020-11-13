import BasePortal from '../../../js/build';
import SiteConfig from './60512-config';
import addStay22Banner from '../../../js/components/stay-22-banner';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

addStay22Banner('https://stay22.com/embed/republic-of-texas-motorcycle-rally?hidebrandlogo=true');
