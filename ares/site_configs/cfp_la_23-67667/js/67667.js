import BasePortal from '../../../js/build';
import Utilities from '../../../js/utilities';
import SiteConfig from './67667-config';

const utilities = new Utilities();
const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        this.addLocationButtons();
        this.addUtmTrackingToUrls(window.location.href);
    }

    async addLocationButtons() {
        if (document.querySelector('meta[name="siteId"]').content !== '67667') return;

        await utilities.waitForSelectorInDOM('header');
        document.querySelector('header').insertAdjacentHTML(
            'beforeend',
            `<div class="event-location pull-right">
            <a id="stadium-location" target="_blank" href="https://collegefootballplayoffhotels.com/group-event?id=57102">Book Near Stadium</a>
            <a id="downtown-location" target="_blank" href="https://collegefootballplayoffhotels.com/group-event?id=60377">Book Near Downtown</a>
        </div>`
        );
    }

    async addUtmTrackingToUrls(url) {
        if (!url) return new Error('URL is null');

        await utilities.waitForSelectorInDOM('#stadium-location');
        await utilities.waitForSelectorInDOM('#downtown-location');
        const location_btns = document.querySelectorAll('#stadium-location, #downtown-location');

        if (!document.querySelector('#stadium-location') || !document.querySelector('#downtown-location')) return;

        const params = new URL(url);
        const search_params = new URLSearchParams(params.search);

        const source = search_params.get('utm_source');
        const medium = search_params.get('utm_medium');
        const campaign = search_params.get('utm_campaign');

        // const check_in = search_params.get('checkin');

        // if (check_in === '10/6/2022') location_btns[0].style.display = 'none';
        // if (check_in === '10/13/2022') location_btns[1].style.display = 'none';

        if (source === null || medium === null || campaign === null) return;

        location_btns.forEach((e) => {
            const href = e.getAttribute('href');
            e.href = `${href}&utm_campaign=${campaign}&utm_source=${source}&utm_medium=${medium}`;
        });

        // returning a value for testing purposes only
        return [source, medium];
    }
}

new ChildPortal();
