import BasePortal from '../../../js/build';
import SiteConfig from './64187-config';
import renderLucidBanner from '../../../js/components/lucid_banner/lucid-banner';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();
renderLucidBanner(site_config.lodging.event_name, 'https://form.jotform.com/203066540331141?bookingPortal=BJAC%20West%20Palm%20Beach');
