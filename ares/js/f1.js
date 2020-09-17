import Path from './path';
import Utilities from './utilities';

const utilities = new Utilities();

const env_path = new Path();

export default async function f1Styles(siteId) {
    await utilities.waitForSelectorInDOM('header');
    const header = document.querySelector('header');
    const language_el = document.querySelector('#language');

    async function addHeader(id) {
        const html = await utilities.fetchHTMLFromFile(`${env_path.path}/html/f1/f1-header.html`);
        const races_contact =
            // TODO update below site id when moved to new site id
            siteId === '46451' || siteId === '45246'
                ? `
        <ul id="races-contact">
            <li>
                <a href="#races-container" id="races">Races</a>
            </li>
            <li>
                <a href="https://events.hotelsforhope.com/v6/support?siteId=46973" id="contactUs">Contact Us</a>
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
            <a href="https://events.hotelsforhope.com/v6/support?siteId=${id}" id="contactUs">Contact Us</a>
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
        if (language_el === null) return;
        document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', language_el);
    }

    async function addHamburgerMenu(id) {
        const burger_html = await utilities.fetchHTMLFromFile(`${env_path.path}/html/f1/mobile-hamburger-menu.html`);
        header.insertAdjacentHTML('beforeend', burger_html);

        const mobile_contact_url = document.querySelector('.mobile-nav-upper-ul #contactUs');
        id === '46451' || id === '45246'
            ? (mobile_contact_url.href = 'href="https://events.hotelsforhope.com/v6/support?siteId=46973"')
            : (mobile_contact_url.href = `href="https://events.hotelsforhope.com/v6/support?siteId=${id}"`);

        await utilities.waitForSelectorInDOM('.navbar-hamburger');

        document.querySelector('.navbar-hamburger').addEventListener('click', () => {
            document.querySelector('.mobile-nav-container').classList.toggle('show-mobile-nav');
        });

        function widthChange(mq) {
            if (language_el === null) return;
            if (mq.matches) {
                document.querySelector('.mobile-nav-lower-ul .language-mobile-li').insertAdjacentElement('afterbegin', language_el);
            } else {
                document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', language_el);
            }
        }

        const mq = window.matchMedia('(max-width: 1100px)');
        widthChange(mq);
        mq.addListener(widthChange);
    }

    async function addFooter() {
        if (document.querySelector('meta[name="landing-page"]') !== null) return;
        const footer_html = await utilities.fetchHTMLFromFile(`${env_path.path}/html/f1/footer.html`);

        document.querySelector('.pb-container').insertAdjacentHTML('afterend', footer_html);
    }

    addHeader(siteId);
    addHamburgerMenu(siteId);
    addFooter();
}
