import BasePortal from '../../../js/build';
import Utilities from '../../../js/utilities';
import SiteConfig from './90833-config';

const utilities = new Utilities();
const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        this.deselectPropertyTypes();
        this.addLocationButtons();
        this.addUtmTrackingToUrls(window.location.href);
    }

    async deselectPropertyTypes() {
        await utilities.waitForSelectorInDOM('.ExtStayBox');
        // const extStayBox = document.querySelector('.ExtStayBox .checkbox');
        const extStayBox = document.getElementsByName('234');
        const motelBox = document.getElementsByName('238');
        extStayBox[0].checked = false;
        motelBox[0].checked = false;
    }

    async addLocationButtons() {
        if (document.querySelector('meta[name="siteId"]').content !== '88767') return;

        await utilities.waitForSelectorInDOM('header');
        document.querySelector('header').insertAdjacentHTML(
            'beforeend',
            `<div class="event-location pull-right">
                <a id="stadium-location" target="_blank" href="https://collegefootballplayoffhotels.com/group-event?id=66665">Book Stadium Location</a>
                <a id="downtown-location" target="_blank" href="https://collegefootballplayoffhotels.com/group-event?id=66674">Book Downtown Location</a>
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

async function removeHoldRoomsText() {
    console.log('inside removeHoldRoomsText');
    await utilities.waitForSelectorInDOM('.GroupHoldForm');
    console.log('passed waitForSelectorInDOM');
    if (!document.querySelector('.GroupHoldForm')) return;
    console.log('passed GroupHoldForm in DOM');
    // const prop_id = document.querySelector('.propId').innerHTML;
    const available_rooms_array = document.querySelectorAll('.ArnNightlyRateCal');
    // if (prop_id === '339955' || prop_id === '281084') {
    console.log(`available_rooms_array: ${available_rooms_array}`);
    available_rooms_array.forEach((text_element) => {
        console.log('inside available_rooms_array FOREACH');
        const inner_room_text = text_element.innerText;
        console.log(`inner_room_text: ${inner_room_text}`);
        const room_text_array = inner_room_text.split(' ');
        room_text_array.splice(1, 2);
        const new_room_string = room_text_array.join(' ');
        console.log(`new_room_string: ${new_room_string}`);
        text_element.innerHTML = new_room_string;
        // const remove_val_from_index = [1, 2];
        // for (let i = remove_val_from_index.length - 1; i >= 0; i--) room_text_array.splice(remove_val_from_index[i], 1);
    });
    // }
}

removeHoldRoomsText();