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

function addAttributeToInput(element, value, attribute) {
    if (!document.querySelector(element)) return;

    document.querySelector(element).setAttribute(attribute, value);
}

addAttributeToInput('#theFirstNameAjax input', 'First Name', 'placeholder');
addAttributeToInput('#theLastNameAjax input', 'Last Name', 'placeholder');
addAttributeToInput('#theEditablePasswordAjax input', 'Create a Password', 'placeholder');
addAttributeToInput('#theEditableConfirmPasswordAjax input', 'Confirm Password', 'placeholder');
addAttributeToInput('.WBForgotPasswordFormFields #theUserNameAjax input', 'Email', 'placeholder');
addAttributeToInput('#theFirstNameAjax input', true, 'required');
addAttributeToInput('#theLastNameAjax input', true, 'required');
addAttributeToInput('#theEditablePasswordAjax input', true, 'required');
addAttributeToInput('#theEditableConfirmPasswordAjax input', true, 'required');

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
    if (document.querySelector('.beat-em')) return;
    if (document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail')) {
        const mq = window.matchMedia('(max-width: 600px)');

        if (!document.querySelector(element)) return;
        const rate_cells = document.querySelectorAll(element);
        rate_cells.forEach((el) => {
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

async function displayRewardPoints() {
    if (!document.querySelector('.SinglePropDetail')) return;

    await utilities.waitForSelectorInDOM('.ArnNightlyRate');
    const rooms = document.querySelectorAll('table.ArnRateList');
    const mq = window.matchMedia('(max-width: 500px)');
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
    rooms.forEach((el) => {
        let full_stay = el.querySelector('.full-stay').textContent;
        full_stay = full_stay.replace(/[^0-9.]/g, '');
        // eslint-disable-next-line radix
        const reward_points = parseInt(full_stay);
        mq.matches
            ? el.querySelector('tbody .bookRoomCell').insertAdjacentHTML(
                  'afterbegin',
                  `
             ${style}
            <div class="points-earned">
            <span>RE<b>WARDS</b>: ${reward_points}</span> 
            </div>
            `
              )
            : el.querySelector('tbody tr td').insertAdjacentHTML(
                  'beforeend',
                  `
                  ${style}
            <div class="points-earned">
            Earn <b class="points">${reward_points}</b> <span>RES<b>BEAT</b> Rewards</span> 
            </div>
            `
              );
    });
}

displayRewardPoints();

function totalStayPoints() {
    if (!document.querySelector('.CheckOutForm')) return;

    let total = document.querySelector('.dueNowRow td').textContent;
    let taxes = document.querySelector('.taxFeeRow td').textContent;
    // eslint-disable-next-line radix
    total = parseInt(total.replace(/[^0-9.]/g, ''));
    // eslint-disable-next-line radix
    taxes = parseInt(taxes.replace(/[^0-9.]/g, ''));

    const points = total - taxes;

    document.querySelector('.totalsTable tbody').insertAdjacentHTML(
        'beforeend',
        `
        <tr class="total-points-earned">
            <th>Rewards Earned:</th>
            <td>${points}</td>
        </tr>
        `
    );

    document.querySelector('tr .discount th').textContent = "BEAT 'EM BY:";
}

totalStayPoints();

function headerLinks() {
    if (!document.querySelector('#commands')) return;
    const support_link = document.querySelector('.supportLink');
    const commands = document.querySelector('#commands');
    commands.insertAdjacentElement('afterbegin', support_link);
    const booking_href = document.querySelector('.static-booking-guideLink').href;
    const rewards_href = document.querySelector('.static-rewards-guideLink').href;
    commands.insertAdjacentHTML(
        'afterbegin',
        `
        <a class="rewards" target="_blank" href="${rewards_href}">Rewards</a>
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
if (document.querySelector('.WBSupportFormContainer')) {
    addAttributeToInput('#theNameAjax input', 'Name', 'placeholder');
    addAttributeToInput('#theDaytimePhoneNumberAjax input', 'Phone Number', 'placeholder');
    addAttributeToInput('#theEmailAjax input', 'Email', 'placeholder');
    addAttributeToInput('#theEmailAjax input', 'email', 'type');
    addAttributeToInput('#theReservationConfirmationNumberAjax input', 'Booking Number', 'placeholder');
    addAttributeToInput('#theDateOfArrivalAjax input', 'Check In Date', 'placeholder');
    addAttributeToInput('#theHotelNameAjax input', 'Hotel', 'placeholder');
    addAttributeToInput('#theCommentsAjax textarea', 'Comments', 'placeholder');

    document.querySelector('#theReasonForInquiryAjax select > option').textContent = 'Reason for Inquiry';
}

function styleMapPins() {
    if (!document.querySelector('.SearchHotels')) return;
    document.body.insertAdjacentHTML(
        'beforeend',
        `
    <style>
        .SearchHotels .arnMapMarker {
            background: ${site_config.secondary_color};
            border-color:  ${site_config.primary_text_color};
            color: ${site_config.primary_text_color};
        }
        
        .SearchHotels .arnMapMarkerTriangle {
            border-top-color: ${site_config.secondary_color};
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
        }

        .yui3-skin-sam .yui3-calendar-day:hover{
            background-color: ${site_config.primary_color} !important;
        }
        <style>
        `
    );
}

colorCalendardays();

new ChildPortal();
