import BasePortal from '../../../js/build';
import SiteConfig from './60302-config';
import f1Styles from '../../../clients/formula-1/js/f1';
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
popUp(
    site_config,
    'Sakhir Grand Prix',
    'https://bookrooms.formula1.com/group-event?id=44125&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Bahrain%202020',
    'https://bookrooms.formula1.com/group-event?id=44126&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Sakhir%202020'
);

new ChildPortal();
new Distance();
