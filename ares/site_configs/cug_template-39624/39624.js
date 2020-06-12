import BasePortal from '../../js/build';
import Utilities from '../../js/utilities';
// import RoomSteals from '../../../js/roomsteals-api';
import SiteConfig from './39624-config';

const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

utilities.updateHTML(
    '#theMarketingOptInAjax label',
    'I want to receive the latest information by email from Room Steals including event reminders, relevant news, surveys, offers, and promotions.'
);

utilities.createHTML(
    `<footer>
        <span>
            <a href="https://roomsteals.com/terms" target="_blank">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="https://hotels.roomsteals.com/v6/privacy-policy" target="_blank">Privacy Policy</a>
            <span>|</span>
            <a href="https://roomsteals.getrewardful.com/signup" target="_blank">Affiliate Program</a>
        </span>
        <span>
            &copy; 2020. All Rights Reserved. <br>
            RoomSteals.com
        </span>
    </footer>`,
    '.ArnSupportBottom',
    'beforeBegin'
);

function showFullStayToggle(page_class) {
    if (!document.querySelector(page_class)) return;

    let toggle;
    const theme_meta = document.querySelector('meta[name="theme"]');
    const container = document.querySelector('.config-container');

    if (!theme_meta) return;
    const theme = theme_meta.getAttribute('content');

    container.insertAdjacentHTML(
        'beforeend',
        `<span class="rs-label" id="rs-tax-inclusive">
            <label for="rs-toggle">Show Full Stay Price</label>
            <div class="rs-toggle">
                <input type="checkbox" name="rs-toggle" class="rs-toggle-checkbox" id="rs-toggle">
                <label class="rs-toggle-label" for="rs-toggle">
                    <span class="rs-toggle-inner"></span>
                    <span class="rs-toggle-switch"></span>
                </label>
            </div>
        </span>`
    );

    if (theme.toLowerCase() === 'international') {
        toggle = document.querySelector('#rs-toggle');
        toggle.checked = true;
    }

    document.querySelector('#rs-tax-inclusive').addEventListener('click', (e) => {
        // eslint-disable-next-line no-undef
        theme.toLowerCase() === 'standard' ? arnChangeTheme('international') : arnChangeTheme('standard');
    });
}

showFullStayToggle('.SearchHotels');
showFullStayToggle('.SinglePropDetail');

new ChildPortal();
