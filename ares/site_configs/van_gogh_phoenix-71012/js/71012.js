import BasePortal from '../../../js/build';
import SiteConfig from './71012-config';
import Utilities from '../../../js/utilities';
import Path from '../../../js/build_tools/path';

const env_path = new Path();

const dayjs = require('dayjs');

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        this.prepopulateSearchDate();
    }

    async prepopulateSearchDate() {
        if (!document.querySelector('.SearchHotels')) return;

        await utilities.waitForSelectorInDOM('#theQuickCheckIn');

        const check_in_input = document.querySelector('#theDatePrompt #theQuickCheckIn');
        const check_out_input = document.querySelector('#theDatePrompt #theQuickCheckOut');
        const current_day = dayjs().format('MM/DD/YYYY');

        if (!check_in_input || !check_out_input) return;

        if (check_in_input < current_day) {
            check_in_input.setAttribute('value', current_day);
            check_out_input.setAttribute('value', dayjs().add(3, 'day').format('MM/DD/YYYY'));
        }

        const date_prompt_image = document.querySelectorAll('#theDatePrompt #datePromptContainer img');
        date_prompt_image[0].src = `${env_path.path}/site_configs/van_gogh_phoenix-71012/img/logo_b.png`;
    }
}

new ChildPortal();
