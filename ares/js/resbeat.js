import BasePortal from './build';
import Utilities from './utilities';
import Path from './path';

const env_path = new Path();

const utilities = new Utilities();

export default class Resbeat extends BasePortal {
    constructor(config) {
        super(config);
        super.init();
        this.site_config = config;
    }

    init() {
        this.applyResbeatStyles();
        this.applyResbeatConfigColors();
        this.updateLogin();
        this.styleRegisterContainer();
        this.displayCheckoutRewardPoints();
        this.displayRewardPoints('table.ArnRateList');
        this.confirmationPointsEarned();
        this.updateHeaderLinks();
        this.rerunFunctionsOnMoreRoomsClick();
        this.moveConfigContainer();
        this.removeAnchorTag();

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

        this.replaceHTMLWithFile('https://static.hotelsforhope.com/ares/html/booking-guide.html', '#booking-guide').then(async () => {
            if (document.querySelector('#booking-guide')) {
                await utilities.waitForSelectorInDOM('#faq-link');

                utilities.updateAttribute('#faq-link', utilities.getAttribute('.faqLink', 'href'), 'href');
                utilities.updateAttribute('#customer-support-link', utilities.getAttribute('.supportLink', 'href'), 'href');
            }
        });

        this.replaceHTMLWithFile('https://static.hotelsforhope.com/ares/html/resbeat-faq.html', '.ArnSubPage.WBFaq');

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

        utilities.addAttributeToInput('#theFirstNameAjax input', 'First Name', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theLastNameAjax input', 'Last Name', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theEditablePasswordAjax input', 'Create a Password', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('#theEditableConfirmPasswordAjax input', 'Confirm Password', 'placeholder', '.WBValidatedRegistrationForm');
        utilities.addAttributeToInput('.WBForgotPasswordFormFields #theUserNameAjax input', 'Email', 'placeholder', '.WBForgotPasswordForm');
        utilities.addAttributeToInput('.WBForgotPasswordFormFields #theUserNameAjax input', true, 'required', '.WBForgotPasswordForm');
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
        if (!document.querySelector('.CheckOutForm')) return;

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
        if (!document.querySelector('.SinglePropDetail')) return;

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

        let points_earned = document.querySelector('.discountRow td').textContent;
        // eslint-disable-next-line radix
        points_earned = parseInt(points_earned.replace(/[^0-9.]/g, ''));
        document.querySelector('.GuestForms').insertAdjacentHTML(
            'beforeEnd',
            `
                <p class="awarded-after-checkout">Your RES<b>BEAT</b> Rewards will be added to your Rewards account 48 hours after checkout.</p>
                <div class="points-earned">
                    <span>RES<b>BEAT</b> Rewards Earned</span>
                    <span>${points_earned}</span>
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
        if (this.site_config.is_resbeat_client === false) return;
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

        const name = document.querySelector('meta[name="firstName"]').content;
        const el = document.querySelector('.RootBody .ArnSearchHotelsImg');
        el.innerHTML = `
            <span class="search-messaging">
                    <h1 id="user-name">${name.toUpperCase()}, ${this.site_config.root_page_header_text}</h1>
                    <h4>${this.site_config.root_page_subheader_text}</h4>
            </span>
            `;
    }

    applyResbeatStyles() {
        document.body.insertAdjacentHTML('beforeend', `<link href="${env_path.path}/styles/resbeat.css" rel="stylesheet">`);
    }

    async removeAnchorTag() {
        if (!document.querySelector('.ConfirmationForm')) return;
        await utilities.waitForSelectorInDOM('.confirmation-messaging a');
        const strong = document.querySelector('.confirmation-messaging a strong');
        const anchor = document.querySelector('.confirmation-messaging a');

        anchor.insertAdjacentElement('afterend', strong);
        anchor.remove();
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

    applyResbeatConfigColors() {
        const style_element = document.querySelector('#h4h-styles');

        if (!this.site_config || !style_element) return;

        style_element.insertAdjacentHTML(
            'beforeEnd',
            `
            <style>
            .ArnPages a,
            .ArnPages, .WBValidatedRegistrationForm #theUserNameAjax input,
            .WBValidatedRegistrationForm #theFirstNameAjax input,
            .WBValidatedRegistrationForm #theLastNameAjax input,
            .WBValidatedRegistrationForm #theEditablePasswordAjax input,
            .WBValidatedRegistrationForm #theEditableConfirmPasswordAjax input,
            input[type='email'].email-mask,
            .WBLoginFormFields input, .WBValidatedRegistrationForm .WBValidatedRegistrationFormActions input, .RootBody .search-messaging #user-name strong, .RootBody .search-messaging #user-name, .RootBody .search-messaging h4, .CheckOutForm .total-points-earned td, .MemberNotAuthenticated #theUserNameAjax input,
            .MemberNotAuthenticated #thePasswordAjax input,
            .MemberNotAuthenticated #new-user-text,
            .MemberNotAuthenticated #theWBLoginFormBody h1,
            .MemberNotAuthenticated .ForgotPasswordAction, .ArnSupportLinks, .MemberNotAuthenticated #new-user-text strong,
            .MemberNotAuthenticated #theWBLoginFormBody strong, .MemberNotAuthenticated .LoginAction,
            .SendMeNewPasswordAction.submit,
            .ArnShowRatesLink,
            .bookRoom,
            .holdRoom,
            #moreRatesLink,
            .GuestForms legend,
            .WBSupportFormActions .SendRequestAction, .ArnSearchHeader, .SinglePropDetail .ArnLeftListContainer > span.translateMe, .SearchHotels .lblAmenities,
            .SearchHotels .lblRating,
            .SearchHotels .sort-wrapper h4, #theRateTotals > tbody > .discountRow td {
                font-family: '${this.site_config.google_font_name}', 'Helvetica';
            }
            
            .SearchHotels .arnPrice, .roomCount, .SinglePropDetail .ArnNightlyRate strong  {
                color: ${this.site_config.secondary_color};
            }
            
            .support-details a, #theSubmitButton:hover,
            #theOtherSubmitButton:hover,
            .CheckRates .submit:hover,
            .CheckOutForm #theConfirmationButton:hover, .ArnRateButton a,
            .bookRoom,
            .holdRoom, .LoginAction.submit:hover,
            #register-btn a:hover,
            .RegisterAction.submit:hover,
            .SendMeNewPasswordAction.submit:hover,
            .WBSupportForm .SendRequestAction:hover, #lightbox .dialog-button-ok input, .SinglePropDetail .CheckRates .submit:hover  {
                color: ${this.site_config.primary_color} !important;
            }
            
            #theSubmitButton,
            #theOtherSubmitButton, .RootBody #theOtherSubmitButton
            .SinglePropDetail .CheckRates .submit,
            .CheckOutForm #theConfirmationButton, .SinglePropDetail .beat-em, .SearchHotels .beat-em, .LoginAction.submit,
            #register-btn a,
            .RegisterAction.submit,
            .SendMeNewPasswordAction.submit,
            #moreRatesLink,
            .WBSupportForm .SendRequestAction, .ArnRateButton a:hover,
            .bookRoom:hover,
            .holdRoom:hover, .SinglePropDetail .points-earned, .SearchHotels .sort-wrapper a.active, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, #lightbox .dialog-button-ok input:hover, .ConfirmationForm .points-earned, .SinglePropDetail .SimpleSearch input.submit  {
                color: ${this.site_config.primary_text_color} !important;
            }
        
            .WBValidatedRegistrationForm #theUserNameAjax input,
            .WBValidatedRegistrationForm #theFirstNameAjax input,
            .WBValidatedRegistrationForm #theLastNameAjax input,
            .WBValidatedRegistrationForm #theEditablePasswordAjax input,
            .WBValidatedRegistrationForm #theEditableConfirmPasswordAjax input,
            input[type='email'].email-mask,
            .WBLoginFormFields input, .SearchHotels #theSearchBox input,
            .SearchHotels #theSearchBox select, #lightbox .WBChangePasswordFormFields input[type='password'], .MemberNotAuthenticated #theUserNameAjax input,
            .MemberNotAuthenticated #thePasswordAjax input, .SearchHotels .ArnContainer, .WBSupportForm input,
            .WBSupportForm select,
            .WBSupportForm textarea, .RootBody .ArnPrimarySearchContainer, .ArnSupportLinks, .SinglePropDetail .SimpleSearch input,
            .SinglePropDetail .SimpleSearch select, .totalsTable tr th,
            .totalsTable tr td, #theBookingPage .PaymentPolicies, .support-details, .SearchHotels .currencies-container {
                background: ${this.site_config.secondary_background_color} !important;
            }
            
            
            .SinglePropDetail .SimpleSearch, .config-container, #theSubmitButton:hover,
            #theOtherSubmitButton:hover,
            .CheckRates .submit:hover,
            .CheckOutForm #theConfirmationButton:hover, .LoginAction.submit:hover,
            #register-btn a:hover,
            .RegisterAction.submit:hover,
            .SendMeNewPasswordAction.submit:hover,
            .WBSupportForm .SendRequestAction:hover, .SearchHotels .ArnPrimarySearchContainer, #lightbox .window, #lightbox, .SinglePropDetail .CheckRates .submit:hover  {
                background: ${this.site_config.background_color} !important;
            }
            
            #theSubmitButton,
            #theOtherSubmitButton,
            .SinglePropDetail .CheckRates .submit,
            .CheckOutForm #theConfirmationButton, .LoginAction.submit,
            #register-btn a,
            .RegisterAction.submit,
            .SendMeNewPasswordAction.submit,
            #moreRatesLink,
            .WBSupportForm .SendRequestAction, .ArnRateButton a:hover,
            .bookRoom:hover,
            .holdRoom:hover, .SinglePropDetail .points-earned, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, #lightbox .dialog-button-ok input:hover, .ConfirmationForm .points-earned   {
                background: ${this.site_config.primary_color} !important;
            }
            
            .WBLoginFormActions input,
            #register-btn a,
            .WBValidatedRegistrationFormActions input,
            #theOtherSubmitButton,
            #theSubmitButton,
            .ArnShowRatesLink,
            .SinglePropDetail .CheckRates .submit,
            .SinglePropDetail .bookRoom,
            .SinglePropDetail #moreRatesLink,
            .CheckOutForm #theConfirmationButton,
            .WBSupportFormActions input,
            .WBForgotPasswordFormActions input, .WBLoginFormActions input:hover,
            #register-btn a:hover,
            .WBValidatedRegistrationFormActions input:hover,
            #theOtherSubmitButton:hover,
            #theSubmitButton:hover,
            .ArnShowRatesLink:hover,
            .SinglePropDetail .CheckRates .submit:hover,
            .SinglePropDetail .bookRoom:hover,
            .SinglePropDetail #moreRatesLink:hover,
            .CheckOutForm #theConfirmationButton:hover,
            .WBSupportFormActions input:hover,
            .WBForgotPasswordFormActions input:hover, #theSubmitButton,
            #theOtherSubmitButton,
            .SinglePropDetail .CheckRates .submit,
            .CheckOutForm #theConfirmationButton, .ArnRateButton a:hover,
            .bookRoom:hover,
            .holdRoom:hover, .ArnRateButton a,
            .bookRoom,
            .holdRoom, .LoginAction.submit:hover,
            #register-btn a:hover,
            .RegisterAction.submit:hover,
            .SendMeNewPasswordAction.submit:hover,
            .WBSupportForm .SendRequestAction:hover, .LoginAction.submit,
            #register-btn a,
            .RegisterAction.submit,
            .SendMeNewPasswordAction.submit,
            #moreRatesLink,
            .WBSupportForm .SendRequestAction, #lightbox .WBChangePasswordFormActions .ChangePasswordAction, #lightbox .dialog-button-ok input  {
                border: 3px solid ${this.site_config.primary_color} !important;
            }

            .SearchHotels .beat-em, .SinglePropDetail .beat-em {
                background-color: ${this.site_config.secondary_color};
            }

            header {
                border-bottom: 1px solid ${this.site_config.secondary_background_color};
            }

            @media screen and (max-width: 800px) {
                .currencies-container {
                    background: ${this.site_config.background_color};
                }
            }
            </style>
            `
        );
    }
}
