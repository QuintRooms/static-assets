import BasePortal from '../../../js/build';
import Utilities from '../../../js/utilities';
import SiteConfig from './83432-config';

const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    async init() {
        if (document.querySelector('.SearchHotels')) {
            await this.changeDistanceLocationToEventName();
        }
    }

    async changeDistanceLocationToEventName() {
        await utilities.waitForSelectorInDOM('.distanceLabel');
        const hotels = document.querySelectorAll('.ArnProperty');
        for (const hotel of hotels) {
            let distanceLabel = hotel.querySelector('.distanceLabel');
            const finalText = distanceLabel.innerHTML.replace('Bentonville', 'Format');
            distanceLabel.innerHTML = finalText
        }
    }
}

new ChildPortal();