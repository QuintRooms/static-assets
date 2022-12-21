import BasePortal from '../../../js/build';
import SiteConfig from './71772-config';

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();




const redirect_to_new_site = ()=> {

    const initial_url = window.location.href;
    if (!initial_url.toString().includes('281087')) {
        window.location.href = 'https://events.quintrooms.com/group-event?id=57442';
        return
    }
};

redirect_to_new_site();