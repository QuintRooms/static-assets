import Utilities from '../../utilities';

const utilities = new Utilities();

/**
 *@description Adds a banner with a CTA to the Lucid Travel form for group bookings of more than 10 rooms.
 *@param string - Event name. Either site_config.event_name or 'Event Name'
 *@param string - Link to jotForm.
 */
export default async function renderLucidBanner(event, link) {
    if (document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail')) {
        const selected_language = utilities.getMetaTagContent('theme');
        await utilities.waitForSelectorInDOM('header');

        if (selected_language === 'french') {
            document.querySelector('header').insertAdjacentHTML(
                'afterend',
                `
            <div class="lucid-banner">
                <div class="lucid-content">
                    <span id="desktop">Besoin de 10+ chambres pour ${event} ou un autre événement? Nous sommes là pour vous aider à obtenir des tarifs avantageux.</span>     
                    <span id="tablet">Besoin de 10+ chambres pour ${event}?</span>     
                    <span id="mobile">Besoin de 10+ chambres?</span>     
                </div>
                <div class="lucid-button">
                    <a id="lucid-link" target="_blank" href="${link}">Réservez 10+ chambres</a>
                </div>
            </div>
            <style>
            header {
                border-bottom: unset !important;
            }
            </style>
            `
            );
        } else {
            document.querySelector('header').insertAdjacentHTML(
                'afterend',
                `
            <div class="lucid-banner">
                <div class="lucid-content">
                    <span id="desktop">Need 10+ rooms for ${event} or another event? We're here to help you secure great rates.</span>     
                    <span id="tablet">Need 10+ rooms for ${event}?</span>     
                    <span id="mobile">Need 10+ rooms?</span>     
                </div>
                <div class="lucid-button">
                    <a id="lucid-link" target="_blank" href="${link}">Book 10+ Rooms</a>
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
}
