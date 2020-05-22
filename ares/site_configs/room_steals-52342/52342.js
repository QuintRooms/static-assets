import BasePortal from '../../js/build';
import Utilities from '../../js/utilities';
// import RoomSteals from '../../../js/roomsteals-api';

const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super();
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

new ChildPortal();
