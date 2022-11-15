import BasePortal from '../../../js/build';
import SiteConfig from './67668-config';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();
const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
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
