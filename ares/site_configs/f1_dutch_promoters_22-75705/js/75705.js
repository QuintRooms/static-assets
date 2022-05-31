import BasePortal from '../../../js/build';
import SiteConfig from './75705-config';
import f1Styles from '../../../clients/formula_1/js/f1';
import Distance from '../../../js/calculate-distance';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }

    init() {
        this.prepopulateSearchDate();
    }

    async prepopulateSearchDate() {

        await utilities.waitForSelectorInDOM('#theQuickCheckIn');

        const date_prompt_image=document.querySelectorAll('#theDatePrompt #datePromptContainer img');
        date_prompt_image[0].src = `${env_path.path}/site_configs/f1_dutch_promoters_22-75705/img/general-email-logo.jpg`; 
    }
}

f1Styles(site_config.site_id, site_config.lodging.event_name, 'Circuit Zandvoort', '#333');
utilities.replacePropThumbImage(site_config.prop_image_replacement);

new ChildPortal();
new Distance();
