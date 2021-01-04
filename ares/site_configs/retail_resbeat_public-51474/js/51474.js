import SiteConfig from './51474-config';
import Utilities from '../../../js/utilities';
import Resbeat from '../../../js/resbeat';

const utilities = new Utilities();

const site_config = new SiteConfig();
class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        if (document.querySelector('.SearchHotels')) {
            utilities.waitForTextInDOM('.ArnSearchHeader', 'Update Search').then(() => {
                this.boldLastWord(['.ArnPrimarySearchOuterContainer div.ArnSearchHeader']);
            });
        }

        if (document.querySelector('.SinglePropDetail')) {
            this.boldLastWord(['#standardAvail legend', '#thePropertyReviews legend', '#theGeneralInfo legend']);
            utilities.waitForTextInDOM('.ArnLeftListContainer .translateMe', 'Update Search').then(() => {
                this.boldLastWord(['.ArnLeftListContainer .translateMe']);
            });
            this.addSaveMoreCta();
        }

        if (document.querySelector('.CheckOutForm')) {
            setTimeout(() => {
                this.boldLastWord(['#theConfirmationContainer legend', '#theHotel legend']);
            }, 1);
        }
        this.addSupportLinkToHeader();
        if (document.querySelector('.SearchHotels')) {
            jQuery(document).on('ratesReadyEvent', () => {
                setTimeout(() => {
                    this.addAsearchResultsCallToAction();
                }, 1);
            });
        }
        this.appendConfirmationCallToAction();
    }

    boldLastWord(arrayOfSelectors) {
        const strings = document.querySelectorAll(arrayOfSelectors);
        strings.forEach((string) => {
            if (!string) return;

            const text = string.textContent;
            const last_word_length = text.lastIndexOf(' ');
            const last_word = text.split(' ').pop();

            string.innerHTML = `${text.substring(0, last_word_length)} <b>${last_word}</b>`;
        });
    }

    async addSupportLinkToHeader() {
        if (document.querySelector('.RootBody')) return;
        await utilities.waitForSelectorInDOM('header');
        const support_link = document.querySelector('.supportLink');
        document.querySelector('header').insertAdjacentElement('beforeend', support_link);
    }

    async addAsearchResultsCallToAction() {
        if (document.querySelector('.SearchHotels')) {
            // const mq = window.matchMedia('(max-width: 600px)');

            if (!document.querySelector('.ArnContainer')) return;
            const rate_cells = document.querySelectorAll('.ArnContainer');
            rate_cells.forEach((el) => {
                if (el.querySelector('.beat-em')) return;
                el.querySelector('.ArnRateCell').insertAdjacentHTML(
                    'afterbegin',
                    `<div class="beat-em">
                        <a target="_blank" href="https://hotels.resbeat.com/v6/register?cta_redirect=search-results">Sign up & save more!</a>
                    </div>`
                );
            });
        }
    }

    async addSaveMoreCta() {
        if (!document.querySelector('.SinglePropDetail'));

        await utilities.waitForSelectorInDOM('.ArnNightlyRate');
        const rooms = document.querySelectorAll('table.ArnRateList');
        const mq = window.matchMedia('(max-width: 800px)');

        rooms.forEach((el) => {
            if (!el.querySelector('.full-stay')) return;

            const price = el.querySelector('.full-stay').textContent.split('.');

            // eslint-disable-next-line radix
            const reward_points = price[0];

            mq.matches
                ? el.querySelector('tbody .bookRoomCell').insertAdjacentHTML(
                      'afterbegin',
                      `
                <div class="earn-points-cta">
                <span>Earn RE<b>WARDS</b>: ${reward_points}</span>
                <a target="_blank" href="https://hotels.resbeat.com/v6/register?cta_redirect=property">Sign up for free!</a>
                </div>
                `
                  )
                : el.querySelector('tbody tr').insertAdjacentHTML(
                      'afterend',
                      `
                <div class="save-more">
                    <span>
                        Save more and earn <span class="points">${reward_points}</span> RES<b>BEAT</b> Rewards when you <a target="_blank" href="https://hotels.resbeat.com/v6/register?cta_redirect=property">sign up for free!</a>
                    </span>
                </div>
                `
                  );
        });
    }

    appendConfirmationCallToAction() {
        if (!document.querySelector('.ConfirmationForm')) return;
        document.querySelector('.GuestForms').insertAdjacentHTML(
            'beforeEnd',
            `
            <div class="confirmation-sign-up">
                <p>Don’t forget to become a RES<b>BEAT</b> member and receive exclusive access to unbeatable hotel rates at no cost to you. You’ll also earn RES<b>BEAT</b> Rewards with every booking that you can spend at any online retailer of your choice.</p>
                <span><a target="_blank" href="https://hotels.resbeat.com/v6/register?cta_redirect=confirmation">Sign up for free</a> and start saving even more today!</span>
            </div>
            `
        );
    }
}

new ChildPortal();
