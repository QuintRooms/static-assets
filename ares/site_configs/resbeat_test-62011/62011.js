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

// function styleResbeatFonts(element, word1, word2) {
//     if (!document.querySelector(element)) return;
//     const el = document.querySelector(element);
//     el.innerHTML = `${word1}<strong>${word2}</strong>`;
// }

// styleResbeatFonts();
// styleResbeatFonts();

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

function styleRegisterForm(element, value) {
    if (!document.querySelector('.WBValidatedRegistrationForm')) return;

    document.querySelector(element).setAttribute('placeholder', value);
}

styleRegisterForm('#theUserNameAjax input', 'Email');
styleRegisterForm('#theFirstNameAjax input', 'First Name');
styleRegisterForm('#theLastNameAjax input', 'Last Name');
styleRegisterForm('#theEditablePasswordAjax input', 'Create a Password');
styleRegisterForm('#theEditableConfirmPasswordAjax input', 'Confirm Password');

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
        if (!document.querySelector(element)) return;
        const rate_cells = document.querySelectorAll(element);
        rate_cells.forEach((el) => {
            if (el.querySelector('.originalPrice')) {
                const percent = el.querySelector('.originalPrice').getAttribute('percent');
                el.insertAdjacentHTML(
                    'afterbegin',
                    `<div class="beat-em">
                    BEAT 'EM BY ${percent}%
                    </div>`
                );
            }
        });
    }
}

insertBeatEmBy('.SinglePropDetail .bookRoomCell');
jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        insertBeatEmBy('.SearchHotels .ArnRateCell');
    }, 1);
});

async function displayRewardPoints() {
    if (!document.querySelector('.SinglePropDetail')) return;

    await utilities.waitForSelectorInDOM('.ArnNightlyRate');
    const rooms = document.querySelectorAll('table.ArnRateList');
    rooms.forEach((el) => {
        let full_stay = el.querySelector('.full-stay').textContent;
        full_stay = full_stay.replace(/[^0-9.]/g, '');
        // eslint-disable-next-line radix
        const reward_points = parseInt(full_stay);
        el.querySelector('tbody tr td').insertAdjacentHTML(
            'beforeend',
            `
            <style>
            .points{
                color: ${site_config.secondary_color};
            }

            div.points-earned span {
                font-family: 'Avenir';
                letter-spacing: 1px;
            }
        </style>

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
    console.log('checkout page');
    setTimeout(() => {
        boldLastWord(['#theConfirmationContainer legend', '#theHotel legend']);
    }, 1);
}

utilities.updateHTML(
    '.ArnSupportChatTable',
    `
    <div class="support-details">
        <h3>Customer Support</h3>
        <p>Hours: 8:00am - 5:30pm CST</p>
        <p>Call Us: <a href="tel:1.866.584.0204">1.866.584.0204</a></p>
        <p>Email Us: <a href="mailto:reservations@resbeat.com">reservations@resbeat.com</a></p>
    </div>

`
);

new ChildPortal();
