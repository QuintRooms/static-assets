import BasePortal from './build';
import Utilities from './utilities';
import Path from './build_tools/path';

const env_path = new Path();
const {domain} = process.env;
const utilities = new Utilities();

export default class Resbeat extends BasePortal {
    constructor(config) {
        super(config);
        super.init();
        this.site_config = config;
    }

    init() {
        this.addLinkToRewardsPlatform();
        this.applyResbeatStyles();
        // this.applyResbeatConfigColors();
        this.updateLogin();
        this.styleRegisterContainer();
        this.displayCheckoutRewardPoints();
        this.displayRewardPoints('table.ArnRateList');
        this.confirmationPointsEarned();
        this.updateHeaderLinks();
        this.rerunFunctionsOnMoreRoomsClick();
        this.moveConfigContainer();
        this.removeAnchorTag();
        this.confPageSavings();

        if (document.querySelector('.RootBody')) {
            this.updateSearchTitle();
        }

        if (document.querySelector('.WBLoginForm')) {
            utilities.selectCheckboxOnLabelClick('#theRememberMeAjax');
        }

        if (document.querySelector('.SearchHotels')) {
            utilities.waitForSelectorInDOM('.sort-wrapper').then(() => {
                this.insertHR('.sort-wrapper', 'beforebegin');
            });
            this.insertHR('#AmentitiesContainer', 'beforebegin');
            this.insertHR('#PropertyClassesContainer', 'beforebegin');
            this.insertHR('#PropertyTypesContainer', 'beforebegin');
            jQuery(document).on('ratesReadyEvent', () => {
                setTimeout(() => {
                    this.insertPercentageOffText('.SearchHotels .ArnContainer');
                }, 1);
            });
        }

        if (document.querySelector('.SinglePropDetail')) {
            this.insertPercentageOffText('.SinglePropDetail .rateRow');
        }

        if (document.querySelector('.WBValidatedRegistrationForm')) {
            this.createInputMaskToBypassArnValidation('#theUserNameAjax', 'email-mask', 'email', 'Email', '#theUserNameAjax input');
            utilities.removeMaskedElementFromTabIndex('#theUserNameAjax input');
            this.addRegistrationInfoForRetailReferal();
        }
        if (document.querySelector('.WBSupportFormContainer')) {
            this.createInputMaskToBypassArnValidation(
                '#theReservationConfirmationNumberAjax',
                'booking-number-mask',
                'text',
                'Booking Number',
                '#theReservationConfirmationNumberAjax input'
            );
            utilities.removeMaskedElementFromTabIndex('#theReservationConfirmationNumberAjax input');
        }

        this.replaceHTMLWithFile(`https://static.${domain}/ares/html/booking-guide.html`, '#booking-guide').then(async () => {
            if (document.querySelector('#booking-guide')) {
                await utilities.waitForSelectorInDOM('#faq-link');

                utilities.updateAttribute('#faq-link', utilities.getAttribute('.faqLink', 'href'), 'href');
                utilities.updateAttribute('#customer-support-link', utilities.getAttribute('.supportLink', 'href'), 'href');
            }
        });

        this.replaceHTMLWithFile(`https://static.${domain}/ares/html/resbeat-faq.html`, '.ArnSubPage.WBFaq');

        utilities.updateHTML(
            '.ArnSupportChatTable',
            `
            <div class="support-details">
                <h3>Customer Support</h3>
                <p>Hours: M-F 8:00am - 5:30pm CST</p>
                <p>Call Us: <a href="tel:1.866.584.0204">1.866.584.0204</a></p>
                <p>Email Us: <a href="mailto:reservations@resbeat.com">reservations@resbeat.com</a></p>
                <p>If you require assistance outside our standard hours, please leave us a voicemail and a member of the team will respond promptly.</p>
            </div>`
        );

        utilities.addAttributeToInput('#thePassCodeAjax input', 'Promocode', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theFirstNameAjax input', 'First Name', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theLastNameAjax input', 'Last Name', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theEditablePasswordAjax input', 'Create a Password', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theEditableConfirmPasswordAjax input', 'Confirm Password', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('.WBForgotPasswordFormFields #theUserNameAjax input', 'Email', 'placeholder', '.WBForgotPasswordForm');
        utilities.addAttributeToInput('.WBForgotPasswordFormFields #theUserNameAjax input', true, 'required', '.WBForgotPasswordForm');
        utilities.addAttributeToInput('#thePassCodeAjax input', true, 'required', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theFirstNameAjax input', true, 'required', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theLastNameAjax input', true, 'required', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theEditablePasswordAjax input', true, 'required', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theEditableConfirmPasswordAjax input', true, 'required', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#commands .supportLink', '_blank', 'target', '.MemberAuthenticated');
        utilities.addAttributeToInput('#commands .profileCommand', '_blank', 'target', '.MemberAuthenticated');

        utilities.addAttributeToInput('#theNameAjax input', 'Name', 'placeholder', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theDaytimePhoneNumberAjax input', 'Phone Number', 'placeholder', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theEmailAjax input', 'Email', 'placeholder', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theNameAjax input', true, 'required', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theDaytimePhoneNumberAjax input', true, 'required', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theEmailAjax input', true, 'required', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theEmailAjax input', 'email', 'type', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theReservationConfirmationNumberAjax input', 'Booking Number', 'placeholder', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theDateOfArrivalAjax input', 'Check In Date', 'placeholder', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theHotelNameAjax input', 'Hotel', 'placeholder', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theCommentsAjax textarea', 'Comments', 'placeholder', '.WBSupportFormContainer');
        utilities.addAttributeToInput('#theEmailAddressAjax input', 'Email Address', 'placeholder', '.WBResendOrCancelForm');
        utilities.addAttributeToInput('#theConfirmationNumberAjax input', 'Confirmation or Reference Number', 'placeholder', '.WBResendOrCancelForm');

        utilities.updateHTML('#theReasonForInquiryAjax select > option:first-child', 'Reason for Inquiry');

        utilities.updateHTML('.static-bookingLink', 'Booking Guide');
        utilities.updateHTML('.static-rewardsLink', 'Rewards Guide');
    }

    async updateLogin() {
        if (!document.querySelector('.MemberNotAuthenticated')) return;
        await utilities.waitForSelectorInDOM('#theWBLoginFormBody h1');

        const login_text = document.querySelector('#theWBLoginFormBody h1');
        login_text.innerHTML = 'LOG<strong>IN</strong>';
    }

    styleRegisterContainer() {
        if (!document.querySelector('#theWBLoginFormBody')) return;

        document.querySelector('#theUserNameAjax input').setAttribute('placeholder', 'Email');
        document.querySelector('#thePasswordAjax input').setAttribute('placeholder', 'Password');
        document.querySelector('#theUserNameAjax input').setAttribute('required', true);
        document.querySelector('#thePasswordAjax input').setAttribute('required', true);

        document.querySelector('#theWBLoginFormBody').insertAdjacentHTML(
            'beforeend',
            `
            <div id="register-container">
                <h2 id="new-user-text">NEW <strong>USER</strong>?</h2>
                <div id="register-btn">
                </div>
            </div>
        `
        );

        const register_link = document.querySelector('.CreateAnAccountAction');
        document.querySelector('#register-btn').insertAdjacentElement('afterbegin', register_link);
        register_link.textContent = 'REGISTER';
    }

    displayCheckoutRewardPoints() {
        if (!document.querySelector('.CheckOutForm') || utilities.getMetaTagContent('siteId') === '62725' || utilities.getMetaTagContent('siteId') === '63711') return;

        let total_el = document.querySelector('.dueNowRow td');
        const taxes_el = document.querySelector('.taxFeeRow td');

        if (!total_el) {
            total_el = document.querySelector('.balanceDueRow td');

            document.querySelector('#theRateTotals > tbody > .discountRow').style.display = 'table-row';

            if (!total_el) return;
        }

        let total = total_el.textContent;
        let taxes = taxes_el.textContent;

        // eslint-disable-next-line radix
        total = parseFloat(total.replace(/[^\d.-]/g, ''));
        // eslint-disable-next-line radix
        taxes = parseFloat(taxes.replace(/[^\d.-]/g, ''));

        const points_float = total - taxes;
        const points = Math.floor(points_float);

        document.querySelector('.totalsTable tbody').insertAdjacentHTML(
            'beforeend',
            `
            <tr class="total-points-earned">
                <th>Rewards Earned:</th>
                <td>${points}</td>
            </tr>
            `
        );

        let discount_row = document.querySelector('tr .discount th');
        if (!discount_row) {
            discount_row = document.querySelector('tr .discountRow th');
            if (!discount_row) return;
        }

        discount_row.textContent = "BEAT 'EM BY:";
    }

    async displayRewardPoints(rooms_element) {
        if (!document.querySelector('.SinglePropDetail') || utilities.getMetaTagContent('siteId') === '62725' || utilities.getMetaTagContent('siteId') === '63711') return;

        await utilities.waitForSelectorInDOM('.ArnNightlyRate');
        const rooms = document.querySelectorAll(rooms_element);
        const mq = window.matchMedia('(max-width: 800px)');
        const style = `
            <style>
                .points{
                    color: ${this.site_config.secondary_color};
                }

                div.points-earned span {
                    font-family: 'Avenir';
                    letter-spacing: 1px;
                }
            </style>
            `;

        rooms.forEach((el, i) => {
            if (el.querySelector('.points-earned')) return;

            const original_price_el = el.querySelector('.originalPrice');

            if (!original_price_el) return;

            const savings = original_price_el.getAttribute('amount');
            const original_price_text = original_price_el.textContent;
            const original_price_float = original_price_text.replace(/[^0-9.]/g, '');
            const savings_float = savings.replace(/[^0-9.]/g, '');
            const nights = utilities.calculateNights();

            const total = nights * (original_price_float - savings_float);

            // eslint-disable-next-line radix
            const reward_points = parseInt(total);

            if (i === 0) {
                document.body.insertAdjacentHTML('beforeend', style);
            }
            mq.matches
                ? el.querySelector('tbody .bookRoomCell').insertAdjacentHTML(
                      'afterbegin',
                      `
                <div class="points-earned">
                <span>RE<b>WARDS</b>: ${reward_points}</span>
                </div>
                `
                  )
                : el.querySelector('tbody tr').insertAdjacentHTML(
                      'afterend',
                      `
                <div class="points-earned">
                Earn <b class="points">${reward_points}</b> <span>RES<b>BEAT</b> Rewards</span>
                </div>
                `
                  );
        });
    }

    confirmationPointsEarned() {
        if (!document.querySelector('.ConfirmationForm')) return;
        if (!document.querySelector('.discountRow')) return;

        let points_earned = document.querySelector('.discountRow td').textContent;
        // eslint-disable-next-line radix
        points_earned = parseInt(points_earned.replace(/[^0-9.]/g, ''));
        document.querySelector('.confirmNum').textContent = 'Booking Number:';
        document.querySelector('.GuestForms').insertAdjacentHTML(
            'beforeEnd',
            `
            <div class="points-earned">
                <div class="rewards-span">
                    <span>RES<b>BEAT</b> Rewards Earned</span>
                    <span>${points_earned}</span>
                </div>
                <p class="awarded-after-checkout">Your RES<b>BEAT</b> Rewards will be redeemable 48 hours after hotel checkout.
                We'll send you an email once they have been added to your Rewards account.</p>
            </div>
            `
        );
    }

    updateHeaderLinks() {
        if (!document.querySelector('#commands')) return;
        const support_link = document.querySelector('.supportLink');
        const commands = document.querySelector('#commands');
        commands.insertAdjacentElement('afterbegin', support_link);

        const booking_link_el = document.querySelector('.static-bookingLink');
        const rewards_link_el = document.querySelector('.static-rewardsLink');

        if (!booking_link_el || !rewards_link_el) return;

        commands.insertAdjacentHTML(
            'afterbegin',
            `
        <a class="rewards" target="_blank" href="${rewards_link_el.href}">Rewards Guide</a>
        <a class="booking-guide" target="_blank" href="${booking_link_el.href}">Booking Guide</a>
        `
        );
    }

    rerunFunctionsOnMoreRoomsClick() {
        if (!document.querySelector('.SinglePropDetail')) return;

        const more_rooms_btn = document.querySelector('#moreRatesLink');

        if (!more_rooms_btn) return;

        more_rooms_btn.addEventListener('click', async () => {
            await utilities.waitForSelectorInDOM('#moreRates');
            super.insertPercentageOffText('.SinglePropDetail .rateRow');
            this.displayRewardPoints('table.ArnRateList');
        });
    }

    createInputMaskToBypassArnValidation(selector, input_mask_class, input_mask_type, input_mask_placeholder_value, original_input_selector) {
        const arn_input_container = document.querySelector(selector);

        if (!arn_input_container) return;

        let arn_input = arn_input_container.querySelector('input');

        arn_input_container.insertAdjacentHTML(
            'beforeBegin',
            `<input type="${input_mask_type}" placeholder="${input_mask_placeholder_value}" class="${input_mask_class}" required><style>${selector} input, ${selector} label {position:absolute;left:-100000px;}</style>`
        );

        const new_input = document.querySelector(`.${input_mask_class}`);

        new_input.addEventListener('blur', () => {
            arn_input.value = new_input.value;

            const interval = setInterval(() => {
                if (!document.querySelector(`#${arn_input.id}`)) {
                    arn_input = document.querySelector(original_input_selector);
                    utilities.removeMaskedElementFromTabIndex(original_input_selector);

                    clearInterval(interval);
                }
            }, 500);

            arn_input.focus();
            arn_input.blur();
        });
    }

    moveConfigContainer() {
        if (!document.querySelector('.config-container')) return;

        const mq = window.matchMedia('(max-width: 800px)');
        const currencies_container = document.querySelector('.currencies-container');

        if (mq.matches && document.querySelector('.SearchHotels')) {
            document.querySelector('#theSearchBox').insertAdjacentElement('afterend', currencies_container);
            currencies_container.insertAdjacentHTML(
                'beforebegin',
                `
                <span class="currency-label">Currency:</span>
                `
            );
        }
        if (mq.matches && document.querySelector('.RootBody')) {
            document.querySelector('.ArnAdults').insertAdjacentHTML(
                'afterend',
                `
                <td class="currency">
                    <span class="currency-label">Currency:</span>
                </td>
                `
            );
            document.querySelector('.currency').insertAdjacentElement('beforeend', currencies_container);
        }
    }

    insertHR(element, position) {
        if (!document.querySelector(element)) return;
        document.querySelector(element).insertAdjacentHTML(position, `<hr class="hr">`);
    }

    insertPercentageOffText(element) {
        if (this.site_config.is_resbeat_client === false || utilities.getMetaTagContent('siteId') === '62725' || utilities.getMetaTagContent('siteId') === '63711') return;
        if (document.querySelector('.beat-em') && utilities.page_name === 'search-results') return;
        if (document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail')) {
            const mq = window.matchMedia('(max-width: 600px)');

            if (!document.querySelector(element)) return;
            const rate_cells = document.querySelectorAll(element);
            rate_cells.forEach((el) => {
                if (el.querySelector('.beat-em')) return;
                if (el.querySelector('.originalPrice')) {
                    const percent = el.querySelector('.originalPrice').getAttribute('percent');

                    let insert_pos = '.ArnRateCell';

                    if (mq.matches && document.querySelector('.SearchHotels')) {
                        insert_pos = '.ArnPropThumb';
                    } else if (document.querySelector('.SinglePropDetail')) {
                        insert_pos = '.bookRoomCell';
                    }

                    if (this.site_id === '62011' || this.site_id === '60831') {
                        el.querySelector(insert_pos).insertAdjacentHTML(
                            'afterbegin',
                            `<div class="beat-em">
                            ${this.site_config.cug.percent_off_text} ${percent}%
                            </div>`
                        );
                    } else {
                        el.querySelector(insert_pos).insertAdjacentHTML(
                            'afterbegin',
                            `<div class="beat-em">
                            ${percent}% ${this.site_config.cug.percent_off_text}
                            </div>`
                        );
                    }
                }
            });
        }
    }

    updateSearchTitle() {
        if (!document.querySelector('.RootBody')) return;
        if (!document.querySelector('meta[name="firstName"]') && utilities.getMetaTagContent('siteId') !== '51474') return;
        let name;
        let html;
        if (document.querySelector('meta[name="firstName"]')) {
            name = document.querySelector('meta[name="firstName"]').content;
        }

        const el = document.querySelector('.RootBody .ArnSearchHotelsImg');
        name
            ? (html = `
        <span class="search-messaging">
                <h1 id="user-name">${name.toUpperCase()}, ${this.site_config.root_page_header_text}</h1>
                <h4>${this.site_config.root_page_subheader_text}</h4>
        </span>
        `)
            : (html = `
            <span class="search-messaging">
                    <h1>${this.site_config.root_page_header_text}</h1>
                    <h4>${this.site_config.root_page_subheader_text}</h4>
            </span>
            `);

        el.innerHTML = html;
    }

    applyResbeatStyles() {
        const style_element = document.querySelector('#h4h-styles');

        if (!style_element) return;

        style_element.insertAdjacentHTML('beforeend', `<link href="${env_path.path}/styles/resbeat.css" rel="stylesheet">`);
    }

    async removeAnchorTag() {
        if (!document.querySelector('.ConfirmationForm')) return;
        await utilities.waitForSelectorInDOM('.confirmation-messaging a');
        const strong = document.querySelector('.confirmation-messaging a strong');
        const anchor = document.querySelector('.confirmation-messaging a');

        anchor.insertAdjacentElement('afterend', strong);
        anchor.remove();
    }

    confPageSavings() {
        if (!document.querySelector('.ConfirmationForm')) return;
        if (!document.querySelector('#theRateTotals .discount')) return;

        const beat_em_value = document.querySelector('#theRateTotals .discount td').textContent;

        const conf_form = document.querySelector('.ConfirmationForm .GuestForms');
        conf_form.insertAdjacentHTML(
            'beforeend',
            `
            <div class="beat-em-value">
                <span>WE BEAT 'EM BY</span>
                <span>${beat_em_value}</span>
            </div>
        `
        );
    }

    // showRoomCount() {
    //     if (!document.querySelector('.SinglePropDetail')) return;
    //     const rooms = document.querySelectorAll('table.ArnRateList');
    //     rooms.forEach((el) => {
    //         if (!el.querySelector('.roomCount')) return;
    //         const rooms_remaining = parseFloat(el.querySelector('.roomCount strong').textContent);
    //         if (rooms_remaining < 6) {
    //             document.querySelector('.roomCount').style.display = 'block';
    //         }
    //     });
    // }

    getMemberUsername() {
        const member_metatag_content = utilities.getMetaTagContent('memberMetaTag');
        let member_json = '';

        if (!member_metatag_content) return;

        member_json = JSON.parse(member_metatag_content);

        if (!member_json.MemberUsername) return;

        return member_json.MemberUsername;
    }

    setLoginRedirectUrl() {
        const domain_window = window.location.host;

        if (domain_window.includes('events.hotelsforhope')) return `https://${domain_window}/v6/login?siteId=${this.site_config.site_id}`;

        return `https://${domain_window}/v6/login`;
    }

    getLoginRedirectUrl() {
        return this.setLoginRedirectUrl();
    }

    async addLinkToRewardsPlatform() {
        await utilities.waitForSelectorInDOM('header #commands');

        const redirect_url = this.getLoginRedirectUrl();
        const encoded_redirect_url = encodeURIComponent(redirect_url);

        const member_token = utilities.getMetaTagContent('memberToken');
        const member_username = this.getMemberUsername();
        const encoded_query_string = btoa(
            `member_token=${member_token}&member_username=${member_username}&site_id=${this.site_config.site_id}&redirect_url=${encoded_redirect_url}`
        );

        const header_links = document.querySelector('header #commands');

        if (!document.querySelector('.MemberAuthenticated') || !header_links) return;
        if (document.referrer.includes('register')) {
            setTimeout(() => {
                header_links.insertAdjacentHTML(
                    'afterBegin',
                    `<a id="rewards-link" href="https://rb-redirect.hotelsforhope.com/users/redirect/${encoded_query_string}" target="_blank">RES<b>BEAT</b> Rewards</a>`
                );
            }, 10000);

            return;
        }

        await header_links.insertAdjacentHTML(
            'afterBegin',
            `<a id="rewards-link" href="https://rb-redirect.hotelsforhope.com/users/redirect/${encoded_query_string}" target="_blank">RES<b>BEAT</b> Rewards</a>`
        );
    }

    async addRegistrationInfoForRetailReferal() {
        if (!document.querySelector('.WBValidatedRegistrationForm')) return;
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        if (params.has('cta_referral')) {
            await utilities.waitForSelectorInDOM('.WBValidatedRegistrationFormContainer');
            document.querySelector('.WBValidatedRegistrationFormContainer').insertAdjacentHTML(
                'afterbegin',
                `
                <div id="referral-info">
                    <h1>Want to pay less for hotel rooms?</h1>
                    <p class="referral-content">RES<b>BEAT</b>'s exclusive technology allows members free access to unbeatable rates otherwise unavailable to the public.</p>
                    <p class="referral-content">Every time you make a reservation, you'll also earn RES<b>BEAT</b> Rewards, which you can redeem using your virtual Visa® card.</p>
                    <h3>Sign up for free and start saving today!</h3>
                </div>
                `
            );

            document.querySelector('input.RegisterAction.submit').classList.add('referral');
        }
    }
}
