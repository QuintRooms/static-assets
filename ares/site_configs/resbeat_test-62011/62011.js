import BasePortal from '../../js/build';
import SiteConfig from './62011-config';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}
function styleResbeatFonts(element, word1, word2) {
    if (!document.querySelector(element)) return;
    const el = document.querySelector(element);
    el.innerHTML = `${word1}<strong>${word2}</strong>`;
}

styleResbeatFonts();
styleResbeatFonts();

function updateSearchTitle() {
    if (!document.querySelector('.RootBody')) return;

    const name = document.querySelector('meta[name="firstName"]').content;
    const el = document.querySelector('.RootBody .ArnSearchHotelsImg');
    el.innerHTML = `
        <span class="search-messaging">
                <h1>${name.toUpperCase()}, START YOUR <strong>SEARCH</strong></h1>
                <h4>RESERVATIONS AT 600K+ HOTELS AT UNBEATABLE RATES</h4>
        </span>
        `;
}

updateSearchTitle();

function insertBeatEmBy() {
    const rate_cells = document.querySelectorAll('.ArnRateCell');
    rate_cells.forEach((el) => {
        const percent = el.querySelector('.originalPrice').getAttribute('percent');
        el.insertAdjacentHTML(
            'afterbegin',
            `<div id="beat-em">
            Beat 'em by ${percent}%`
        );
    });
}

jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        insertBeatEmBy();
    }, 1);
});
new ChildPortal();
