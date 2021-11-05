import BasePortal from '../../../js/build';
import Utilities from '../../../js/utilities';
import SiteConfig from './70016-config';

const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

const props = [
    33602,
    24968,
    20578,
    3339,
    20420,
    345484,
    30128,
    35521,
    182581,
    39143,
    1285879,
    21014,
    723662,
    1286319,
    656189,
    607674,
    177947,
    642874,
    8863,
    21010,
    35949,
    626122,
    35487,
    3391313,
    3327060,
    34049,
    14860,
    208598,
    3388,
    614462,
];

utilities.ratesComingSoon(props);
