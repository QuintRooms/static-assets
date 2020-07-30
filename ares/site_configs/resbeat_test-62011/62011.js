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
        this.addLinkToRewardsPlatform();

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

    getMemberUsername() {
        const member_metatag_content = utilities.getMetaTagContent('memberMetaTag');
        let member_json = '';

        if (!member_metatag_content) return;

        member_json = JSON.parse(member_metatag_content);

        if (!member_json.MemberUsername) return;

        return member_json.MemberUsername;
    }

    async addLinkToRewardsPlatform() {
        await utilities.waitForSelectorInDOM('header #commands');

        const member_username = this.getMemberUsername();
        const encoded_query_string = btoa(`member_username=${member_username}`);
        const header_links = document.querySelector('header #commands');

        if (!document.querySelector('.MemberAuthenticated') || !header_links) return;

        header_links.insertAdjacentHTML(
            'afterBegin',
            `<a href="https://rb-redirect.hotelsforhope.com/users/redirect/${encoded_query_string}" target="_blank">RES<b>BEAT</b> Rewards</a>`
        );
    }
}

new ChildPortal();
