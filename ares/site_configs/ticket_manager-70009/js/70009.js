import Resbeat from '../../../js/resbeat';
import SiteConfig from './70009-config';
import Utilities from '../../../js/utilities';

const utitlies = new Utilities();

const site_config = new SiteConfig();
class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

async function updateRewardsText(updatedText) {
    if (document.querySelector('.MemberNotAuthenticated')) return;
    await utitlies.waitForTextInDOM('#rewards-link', 'RESBEAT Rewards');
    const rewards_text = document.querySelector('#rewards-link');
    rewards_text.textContent = updatedText;
}

updateRewardsText('TM Rewards');
