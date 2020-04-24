import BasePortal from '../../build';
import Utilities from '../../utilities';

class ChildPortal extends BasePortal {
    constructor() {
        super();
        super.init();
    }
}

new ChildPortal();
const utilities = new Utilities();

/**
*@description adds extra logos to the header
@param string fileUrl1 - file path/url for left logo
@param string fileUrl2 - file path/url for right logo
*/
async function addMultipleHeaderLogos(fileUrl1, fileUrl2) {
    await utilities.waitForSelectorInDOM('header');

    const header = document.querySelector('header');
    try {
        header.insertAdjacentHTML('afterbegin', `<img class="logo-left" src="${fileUrl1}" alt="logo-left">`);
        header.insertAdjacentHTML('beforeend', `<img class="logo-right" src="${fileUrl2}" alt="logo-right">`);
    } catch (error) {
        console.log(error);
    }
}

addMultipleHeaderLogos('../../js/site_configs/49553/img/left-header-bg.png', '../../js/site_configs/49553/img/right-header-bg.png');
