import BasePortal from '../../js/build';
import SiteConfig from './60512-config';
// import Utilities from '../../js/utilities';

const site_config = new SiteConfig();
// const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

// utilities.addHeaderButtonLink('https://stay22.com/embed/republic-of-texas-motorcycle-rally?hidebrandlogo=true', 'Find Your Airbnb Rental');
