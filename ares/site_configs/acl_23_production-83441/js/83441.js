import BasePortal from '../../../js/build';
import Utilities from '../../../js/utilities';
import SiteConfig from './83441-config';

const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        // this.addWeekendButtons();
        // this.addUtmTrackingToUrls(window.location.href);
    }

    async addWeekendButtons() {
        if (document.querySelector('meta[name="siteId"]').content !== '71762') return;

        await utilities.waitForSelectorInDOM('header');
        document.querySelector('header').insertAdjacentHTML(
            'beforeend',
            `<div class="event-week pull-right">
            <a id="week-one" target="_blank" href="https://aclfestival.quintrooms.com/group-event?id=52462">Book Weekend One</a>
            <a id="week-two" target="_blank" href="https://aclfestival.quintrooms.com/group-event?id=52462">Book Weekend Two</a>
        </div>`
        );
    }

    async addUtmTrackingToUrls(url) {
        if (!url) return new Error('URL is null');

        await utilities.waitForSelectorInDOM('#week-one');
        await utilities.waitForSelectorInDOM('#week-two');
        const weekend_btns = document.querySelectorAll('#week-one, #week-two');

        if (!document.querySelector('#week-one') || !document.querySelector('#week-two')) return;

        const params = new URL(url);
        const search_params = new URLSearchParams(params.search);

        const source = search_params.get('utm_source');
        const medium = search_params.get('utm_medium');
        const campaign = search_params.get('utm_campaign');

        const check_in = search_params.get('checkin');

        if (check_in === '10/6/2022') weekend_btns[0].style.display = 'none';
        if (check_in === '10/13/2022') weekend_btns[1].style.display = 'none';

        if (source === null || medium === null || campaign === null) return;

        weekend_btns.forEach((e) => {
            const href = e.getAttribute('href');
            e.href = `${href}&utm_campaign=${campaign}&utm_source=${source}&utm_medium=${medium}`;
        });

        // returning a value for testing purposes only
        return [source, medium];
    }
}

new ChildPortal();
