import BasePortal from '../../js/build';
import SiteConfig from './62011-config';
import Utilities from '../../js/utilities';

const site_config = new SiteConfig();
const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

async function updateLogin() {
    if (!document.querySelector('.MemberNotAuthenticated')) return;
    await utilities.waitForSelectorInDOM('#theWBLoginFormBody h1');

    const login_text = document.querySelector('#theWBLoginFormBody h1');
    login_text.innerHTML = 'LOG<strong>IN</strong>';
}

updateLogin();

function styleRegisterContainer() {
    if (!document.querySelector('#theWBLoginFormBody')) return;

    document.querySelector('#theUserNameAjax input').setAttribute('placeholder', 'Email');
    document.querySelector('#thePasswordAjax input').setAttribute('placeholder', 'Password');

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

styleRegisterContainer();

async function addAttributeToInput(element, value, attribute, page_name) {
    if (!document.querySelector(page_name)) return;
    try {
        await utilities.waitForSelectorInDOM(element);
        document.querySelector(element).setAttribute(attribute, value);
    } catch (error) {
        console.error(error);
    }
}

addAttributeToInput('#theFirstNameAjax input', 'First Name', 'placeholder', '.WBValidatedRegistrationForm');
addAttributeToInput('#theLastNameAjax input', 'Last Name', 'placeholder', '.WBValidatedRegistrationForm');
addAttributeToInput('#theEditablePasswordAjax input', 'Create a Password', 'placeholder', '.WBValidatedRegistrationForm');
addAttributeToInput('#theEditableConfirmPasswordAjax input', 'Confirm Password', 'placeholder', '.WBValidatedRegistrationForm');
addAttributeToInput('.WBForgotPasswordFormFields #theUserNameAjax input', 'Email', 'placeholder', '.WBForgotPasswordForm');
addAttributeToInput('#theFirstNameAjax input', true, 'required', '.WBValidatedRegistrationForm');
addAttributeToInput('#theLastNameAjax input', true, 'required', '.WBValidatedRegistrationForm');
addAttributeToInput('#theEditablePasswordAjax input', true, 'required', '.WBValidatedRegistrationForm');
addAttributeToInput('#theEditableConfirmPasswordAjax input', true, 'required', '.WBValidatedRegistrationForm');
addAttributeToInput('#commands .supportLink', '_blank', 'target', '.MemberAuthenticated');
addAttributeToInput('#commands .profileCommand', '_blank', 'target', '.MemberAuthenticated');

function createInputMaskToBypassArnValidation(selector) {
    const arn_input_container = document.querySelector(selector);

    if (!arn_input_container) return;

    let arn_input = arn_input_container.querySelector('input');

    arn_input_container.insertAdjacentHTML(
        'beforeBegin',
        `<input type="email" placeholder="Email" class="email-mask" required><style>${selector} input, ${selector} label {position:absolute;left:-100000px;}</style>`
    );

    const new_input = document.querySelector('.email-mask');

    new_input.addEventListener('blur', () => {
        arn_input.value = new_input.value;

        const interval = setInterval(() => {
            if (!document.querySelector(`#${arn_input.id}`)) {
                arn_input = document.querySelector('#theUserNameAjax input');
                utilities.removeMaskedElementFromTabIndex('#theUserNameAjax input');

                clearInterval(interval);
            }
        }, 500);

        arn_input.focus();
        arn_input.blur();
    });
}

if (document.querySelector('.WBValidatedRegistrationForm')) {
    createInputMaskToBypassArnValidation('#theUserNameAjax');
    utilities.removeMaskedElementFromTabIndex('#theUserNameAjax input');
}

function updateSearchTitle() {
    if (!document.querySelector('.RootBody')) return;

    const name = document.querySelector('meta[name="firstName"]').content;
    const el = document.querySelector('.RootBody .ArnSearchHotelsImg');
    el.innerHTML = `
        <span class="search-messaging">
                <h1 id="user-name">${name.toUpperCase()}, START YOUR <strong>SEARCH</strong></h1>
                <h4>RESERVATIONS AT 600K+ HOTELS AT UNBEATABLE RATES</h4>
        </span>
        `;
}

updateSearchTitle();

function insertBeatEmBy(element) {
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
                el.querySelector(insert_pos).insertAdjacentHTML(
                    'afterbegin',
                    `<div class="beat-em">
                    BEAT 'EM BY ${percent}%
                    </div>`
                );
            }
        });
    }
}

insertBeatEmBy('.SinglePropDetail .rateRow');
jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        insertBeatEmBy('.SearchHotels .ArnContainer');
    }, 1);
});

async function displayRewardPoints(rooms_element) {
    if (!document.querySelector('.SinglePropDetail')) return;

    await utilities.waitForSelectorInDOM('.ArnNightlyRate');
    const rooms = document.querySelectorAll(rooms_element);
    const mq = window.matchMedia('(max-width: 800px)');
    const style = `  
        <style>
            .points{
                color: ${site_config.secondary_color};
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

displayRewardPoints('table.ArnRateList');

function totalStayPoints() {
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

totalStayPoints();

function headerLinks() {
    if (!document.querySelector('#commands')) return;
    const support_link = document.querySelector('.supportLink');
    const commands = document.querySelector('#commands');
    commands.insertAdjacentElement('afterbegin', support_link);
    const booking_href = document.querySelector('.static-bookingLink').href;
    const rewards_href = document.querySelector('.static-rewardsLink').href;
    commands.insertAdjacentHTML(
        'afterbegin',
        `
        <a class="rewards" target="_blank" href="${rewards_href}">Rewards Guide</a>
        <a class="booking-guide" target="_blank" href="${booking_href}">Booking Guide</a>
        `
    );
}

headerLinks();

function confirmationPointsEarned() {
    if (!document.querySelector('.ConfirmationForm')) return;

    let points_earned = document.querySelector('.discountRow td').textContent;
    // eslint-disable-next-line radix
    points_earned = parseInt(points_earned.replace(/[^0-9.]/g, ''));
    document.querySelector('.GuestForms').insertAdjacentHTML(
        'beforeEnd',
        `
        <style>
            .points-earned{
                background: ${site_config.primary_color};
                color: ${site_config.primary_text_color};
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-content: center;
                padding: 18px;
                margin-top: 48px;
            }
        </style>
        <p class="awarded-after-checkout">Your RES<b>BEAT</b> Rewards will be added to your Rewards account 48 hours after checkout.</p>
        <div class="points-earned">
            <span>RES<b>BEAT</b> Rewards Earned</span>
            <span>${points_earned}</span>
        </div>
    `
    );
}

confirmationPointsEarned();

// function showRoomCount() {
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

// showRoomCount();

function boldLastWord(arrayOfSelectors) {
    const strings = document.querySelectorAll(arrayOfSelectors);

    strings.forEach((string) => {
        if (!string) return;

        const text = string.textContent;
        const last_word_length = text.lastIndexOf(' ');
        const last_word = text.split(' ').pop();

        string.innerHTML = `${text.substring(0, last_word_length)} <b>${last_word}</b>`;
    });
}

if (document.querySelector('.SinglePropDetail')) boldLastWord(['#standardAvail legend', '#thePropertyReviews legend', '#theGeneralInfo legend']);
if (document.querySelector('.CheckOutForm')) {
    setTimeout(() => {
        boldLastWord(['#theConfirmationContainer legend', '#theHotel legend']);
    }, 1);
}

utilities.updateHTML(
    '.ArnSupportChatTable',
    `
    <div class="support-details">
        <h3>Customer Support</h3>
        <p>Hours: M-F 8:00am - 5:30pm CST</p>
        <p>Call Us: <a href="tel:1.866.584.0204">1.866.584.0204</a></p>
        <p>Email Us: <a href="mailto:reservations@resbeat.com">reservations@resbeat.com</a></p>
        <p>If you require assistance outside our standard hours, please leave us a voicemail and a member of the team will respond promptly.</p>
    </div>

`
);

// This is entirely repeated code... it's late and I don't care right now
function createInputMaskToBypassArnValidationForSupportPage(selector) {
    const arn_input_container = document.querySelector(selector);

    if (!arn_input_container) return;

    let arn_input = arn_input_container.querySelector('input');

    arn_input_container.insertAdjacentHTML(
        'beforeBegin',
        `<input type="text" placeholder="Booking Number" class="booking-number-mask" required><style>${selector} input, ${selector} label {position:absolute;left:-100000px;}</style>`
    );

    const new_input = document.querySelector('.booking-number-mask');

    new_input.addEventListener('blur', () => {
        arn_input.value = new_input.value;

        const interval = setInterval(() => {
            if (!document.querySelector(`#${arn_input.id}`)) {
                arn_input = document.querySelector('#theReservationConfirmationNumberAjax input');
                utilities.removeMaskedElementFromTabIndex('#theReservationConfirmationNumberAjax input');

                clearInterval(interval);
            }
        }, 500);

        arn_input.focus();
        arn_input.blur();
    });
}

if (document.querySelector('.WBSupportFormContainer')) {
    addAttributeToInput('#theNameAjax input', 'Name', 'placeholder', '.WBSupportFormContainer');
    addAttributeToInput('#theDaytimePhoneNumberAjax input', 'Phone Number', 'placeholder', '.WBSupportFormContainer');
    addAttributeToInput('#theEmailAjax input', 'Email', 'placeholder', '.WBSupportFormContainer');
    addAttributeToInput('#theNameAjax input', true, 'required', '.WBSupportFormContainer');
    addAttributeToInput('#theDaytimePhoneNumberAjax input', true, 'required', '.WBSupportFormContainer');
    addAttributeToInput('#theEmailAjax input', true, 'required', '.WBSupportFormContainer');
    addAttributeToInput('#theEmailAjax input', 'email', 'type', '.WBSupportFormContainer');
    addAttributeToInput('#theReservationConfirmationNumberAjax input', 'Booking Number', 'placeholder', '.WBSupportFormContainer');
    addAttributeToInput('#theDateOfArrivalAjax input', 'Check In Date', 'placeholder', '.WBSupportFormContainer');
    addAttributeToInput('#theHotelNameAjax input', 'Hotel', 'placeholder', '.WBSupportFormContainer');
    addAttributeToInput('#theCommentsAjax textarea', 'Comments', 'placeholder', '.WBSupportFormContainer');

    document.querySelector('#theReasonForInquiryAjax select > option').textContent = 'Reason for Inquiry';

    createInputMaskToBypassArnValidationForSupportPage('#theReservationConfirmationNumberAjax');
    utilities.removeMaskedElementFromTabIndex('#theReservationConfirmationNumberAjax input');
}

function styleMapPins() {
    if (!document.querySelector('.SearchHotels')) return;
    document.body.insertAdjacentHTML(
        'beforeend',
        `
    <style>
        .SearchHotels .arnMapMarker {
            background: ${site_config.primary_color};
            border-color:  ${site_config.primary_text_color};
            color: ${site_config.primary_text_color};
        }
        
        .SearchHotels .arnMapMarkerTriangle {
            border-top-color: ${site_config.primary_color};
        }

        .arnMapMarker:hover .arnMapMarkerTriangle {
            border-top-color: ${site_config.primary_color};
        }
    `
    );
}

styleMapPins();

function colorCalendardays() {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
        <style>
        .yui3-skin-sam .yui3-calendar-day-selected {
            background-color: ${site_config.primary_color} !important;
            color: ${site_config.primary_text_color} !important;
        }

        .yui3-skin-sam .yui3-calendar-day:hover{
            background-color: ${site_config.primary_color} !important;
        }

        .yui3-skin-sam .yui3-calendar-content{
            border-color: ${site_config.border_color} !important;
        }
        <style>
        `
    );
}

colorCalendardays();

utilities.updateHTML('.static-bookingLink', 'Booking Guide');
utilities.updateHTML('.static-rewardsLink', 'Rewards Guide');

function moveConfigContainer() {
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

moveConfigContainer();

function insertHR(element, position) {
    if (!document.querySelector(element)) return;
    document.querySelector(element).insertAdjacentHTML(position, `<hr class="hr">`);
}
if (document.querySelector('.SearchHotels')) {
    utilities.waitForSelectorInDOM('.sort-wrapper').then(() => {
        insertHR('.sort-wrapper', 'beforebegin');
    });
    insertHR('#AmentitiesContainer', 'beforebegin');
    insertHR('#PropertyClassesContainer', 'beforebegin');
}

function rerunFunctionsOnMoreRoomsClick() {
    if (!document.querySelector('.SinglePropDetail')) return;

    const more_rooms_btn = document.querySelector('#moreRatesLink');

    if (!more_rooms_btn) return;

    more_rooms_btn.addEventListener('click', async () => {
        await utilities.waitForSelectorInDOM('#moreRates');
        insertBeatEmBy('.SinglePropDetail .rateRow');
        displayRewardPoints('table.ArnRateList');
    });
}

rerunFunctionsOnMoreRoomsClick();

new ChildPortal();
