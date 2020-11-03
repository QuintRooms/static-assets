import Utilities from '../../utilities';

const utilities = new Utilities();

/**
 *@description Adds a banner with a CTA to the Lucid Travel form for group bookings of more than 10 rooms.
 */
export default async function lucidBanner() {
    if (document.querySelector('.RootBody') || document.querySelector('.SearchHotels')) {
        await utilities.waitForSelectorInDOM('header');

        document.querySelector('header').insertAdjacentHTML(
            'afterend',
            `
            <div class="lucid-banner">
                <div class="lucid-content">
                    <span>Booking 10+ Rooms?</span>     
                </div>
                <div class="lucid-button">
                    <a id="lucid-link" target="_blank" href="">Contact Us</a>
                </div>
            </div>
            <style>
            header {
                border-bottom: unset !important;
            }
            </style>
            `
        );
    }
}
