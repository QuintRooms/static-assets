import SiteConfig from './62011-config';
import Resbeat from '../../js/resbeat';
import Utilities from '../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();

class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        // setTimeout(() => {
        this.addLinkToRewardsPlatform();
        // }, 2500);

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
        }

        if (document.querySelector('.CheckOutForm')) {
            setTimeout(() => {
                this.boldLastWord(['#theConfirmationContainer legend', '#theHotel legend']);
            }, 1);
        }
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

    getMemberToken() {
        const member_token_meta = document.querySelector('meta[name="memberToken"]');

        if (!member_token_meta) return;

        const member_token = member_token_meta.content;

        return member_token;
    }

    async addLinkToRewardsPlatform() {
        await utilities.waitForSelectorInDOM('header #commands');

        const member_token = this.getMemberToken();
        const login_url = 'https://hotels.resbeat.com/v6/login';

        const query_string = `member_token=${member_token}&login_url=${login_url}`;

        const encoded_query_string = btoa(query_string);

        const header_links = document.querySelector('header #commands');

        if (!document.querySelector('.MemberAuthenticated') || !header_links) return;

        header_links.insertAdjacentHTML('afterBegin', `<a href="http://e2e-redirect.localhost/users/redirect/${encoded_query_string}" target="_blank">RES<b>BEAT</b> Rewards</a>`);
    }
}

new ChildPortal();
