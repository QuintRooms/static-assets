import Path from '../../../js/build_tools/path';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();
const {domain} = process.env;
const env_path = new Path();

export default async function f1Styles(siteId) {
    await utilities.waitForSelectorInDOM('header');
    const header = document.querySelector('header');
    const language_el = document.querySelector('#language');
    const currency_el = document.querySelector('.currencies-container');

    async function addHeader(id) {
        const html = await utilities.fetchHTMLFromFile(`${env_path.path}/clients/formula_1/html/f1-header.html`);
        const races_contact =
            siteId === '46451' || siteId === '45246'
                ? `
        <ul id="races-contact">
            <li>
                <a href="#races-container" id="races">Races</a>
            </li>
            <li>
                <a href="https://events.${domain}/v6/support?siteId=46972" id="contactUs">Contact Us</a>
            </li>
        </ul>
        <div class="navbar-hamburger">
            <span class="toggle-bar top-bar"></span>
            <span class="toggle-bar middle-bar"></span>
            <span class="toggle-bar bottom-bar"></span>
        </div>
    `
                : `
    <ul id="races-contact">
        <li>
            <a href="https://bookrooms.formula1.com/" id="races" target="_blank">Races</a>
        </li>
        <li>
            <a href="https://events.${domain}/v6/support?siteId=${id}" id="contactUs">Contact Us</a>
        </li>
    </ul>
    <div class="navbar-hamburger">
        <span class="toggle-bar top-bar"></span>
        <span class="toggle-bar middle-bar"></span>
        <span class="toggle-bar bottom-bar"></span>
    </div>
`;
        header.insertAdjacentHTML('beforebegin', html);
        header.insertAdjacentHTML('beforeend', races_contact);
        if (language_el === null || currency_el === null) return;
        document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', language_el);
        document.querySelector('.currency').insertAdjacentElement('afterBegin', currency_el);
    }

    async function addHamburgerMenu(id) {
        const burger_html = await utilities.fetchHTMLFromFile(`${env_path.path}/clients/formula_1/html/mobile-hamburger-menu.html`);
        header.insertAdjacentHTML('beforeend', burger_html);

        const mobile_contact_url = document.querySelector('.mobile-nav-upper-ul #contactUs');
        id === '46451' || id === '45246'
            ? (mobile_contact_url.href = `href="https://events.${domain}/v6/support?siteId=46973"`)
            : (mobile_contact_url.href = `href="https://events.${domain}/v6/support?siteId=${id}"`);

        await utilities.waitForSelectorInDOM('.navbar-hamburger');

        document.querySelector('.navbar-hamburger').addEventListener('click', () => {
            document.querySelector('.mobile-nav-container').classList.toggle('show-mobile-nav');
        });

        function widthChange(mq) {
            if (language_el === null) return;
            if (mq.matches) {
                document.querySelector('.mobile-nav-lower-ul .language-mobile-li').insertAdjacentElement('afterbegin', language_el);
                document.querySelector('.mobile-nav-lower-ul .currency-mobile-li').insertAdjacentElement('afterBegin', currency_el);
            } else {
                document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', language_el);
                document.querySelector('.currency').insertAdjacentElement('afterBegin', currency_el);
            }
        }

        const mq = window.matchMedia('(max-width: 1100px)');
        widthChange(mq);
        mq.addListener(widthChange);
    }

    async function addFooter() {
        if (document.querySelector('meta[name="landing-page"]') !== null) return;
        const footer_html = await utilities.fetchHTMLFromFile(`${env_path.path}/clients/formula_1/html/footer.html`);

        document.querySelector('.pb-container').insertAdjacentHTML('afterend', footer_html);
    }

    addHeader(siteId);
    addHamburgerMenu(siteId);
    addFooter();
}
