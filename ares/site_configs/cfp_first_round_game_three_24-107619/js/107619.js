import BasePortal from '../../../js/build';
import SiteConfig from './107619-config';
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

async function insertFooterText() {
    await utilities.waitForSelectorInDOM('.pb-container');
    const footer_logo_container = document.querySelector('.pb-container');

    footer_logo_container.insertAdjacentHTML(
        'afterend',
        `
        <p class="official-partner-footer-text">Official College Football Playoff Hotel Booking Partner</p>
        `
    );
}
insertFooterText();

const insert_team_names_title = async () => {
    await utilities.waitForSelectorInDOM('header');
    document.querySelector('header').insertAdjacentHTML(
        'beforeend',
        `
    <div class="team-names-container">
        <div class='team-names-text'>
            INDIANA AT NOTRE DAME
        </div>          
    </div>
    `
    );
};

insert_team_names_title();

// const replace_cancellation_popup_content = async () => {
//     await utilities.waitForSelectorInDOM('body');
//     page_name = utilities.getPageName();
//     if (page_name !== 'property-detail') return;

//     const cancel_policy_popup = document.querySelectorAll('.ArnRateCancelPolicyContainer');

//     cancel_policy_popup.forEach((popup) => {
//         popup.innerText = 'This room is non-cancellable.'
//     });

    // document.querySelector('ArnRateCancelPolicyContainer').insertAdjacentHTML(
    //     'beforeend',
    //     `
    // <div class="cancellation-policy-popup">
    //     This room is non-cancellable.      
    // </div>
    // `
    // );
// };

// replace_cancellation_popup_content();