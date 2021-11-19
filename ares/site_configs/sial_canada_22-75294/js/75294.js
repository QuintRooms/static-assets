import BasePortal from '../../../js/build';
import SiteConfig from './75294-config';
import Utilities from '../../../js/utilities';

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

const utilities = new Utilities();

new ChildPortal();

async function setListenerForPolicyModal() {
    await utilities.waitForSelectorInDOM('.span.open-modal');

    const policies_lower = document.querySelector('#policies-fees');
    policies_lower.addEventListener('click', (e) => {
        document.querySelector('span.open-modal').click();
    });
}

setListenerForPolicyModal();
