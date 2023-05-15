import SiteConfig from './83302-config';
import Resbeat from '../../../js/resbeat';
import Utilities from '../../../js/utilities';

const site_config = new SiteConfig();
const utilities = new Utilities();
class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }
    init() {
        utilities.updateHTML(
            '.ArnSupportChatTable',
            `
            <div class="support-details">
                <h3>Customer Support</h3>
                <p>Hours: M-F 8:30 AM - 5:30 PM AEST</p>
                <p>Call Us:</p>
                <span><b>International:</b><a style="color:inherit; text-decoration: none;" href="tel:+ 61 3 9482 9411"> +61.3.9482.9411</a></span>
                <span><b>Australia:</b><a style="color:inherit; text-decoration: none;" href="tel:1300 888 858"> 1300.888.858</a></span>
                <span><b>New Zealand:</b><a style="color:inherit; text-decoration: none;" href="tel:0800 658 745"> 0800.658.745</a></span>
                <p>Email Us: <a href="mailto:travel@sportsnetholidays.com">travel@sportsnetholidays.com</a></p>
                <p>If you require assistance outside our standard hours, please leave us a voicemail and a member of the team will respond promptly:</p>
 
            </div>`
        );
    }

}

new ChildPortal();
