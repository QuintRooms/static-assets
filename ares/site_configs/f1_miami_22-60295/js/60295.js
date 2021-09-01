import BasePortal from '../../../js/build';
import SiteConfig from './60295-config';
import f1Styles from '../../../clients/formula_1/js/f1';
import Distance from '../../../js/calculate-distance';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id);

new ChildPortal();
new Distance();

const footer_logo = document.querySelectorAll('.f1-h4h-logo img')[0];
footer_logo.insertAdjacentHTML(
    'afterend',
    `
    <p class="f1-partner-text">Authorized Hotel Booking Partner of F1 Miami Grand Prix</p>
    `
);
