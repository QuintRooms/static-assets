import Utilities from '../utilities';
import Path from '../build_tools/path';

const env_path = new Path();
const utilities = new Utilities();

/**
 *@description Adds a banner with a link to stay 22 airbnb's beneath the header on the search-results and landing-page with the stay 22 href as a parameter.
 *@param string link - the outbound href.
 *@example addStay22Banner('https://stay22.com/embed/republic-of-texas-motorcycle-rally?hidebrandlogo=true');
 */
export default async function addStay22Banner(link) {
    if (document.querySelector('.RootBody') || document.querySelector('.SearchHotels')) {
        await utilities.waitForSelectorInDOM('header');
        let destination = utilities.getMetaTagContent('SearchLocation');

        if (destination === null || destination === '') {
            destination = document.querySelector('span[itemprop="addressLocality"]').textContent;
        }

        document.querySelector('header').insertAdjacentHTML(
            'afterend',
            `
            <div class="stay-22-banner">
                <div class="banner-content">
                    <a class="airbnb-logo" href="${link}" target="_blank">
                        <img src="${env_path.path}/images/vrbo_logo.png" alt="VRBO logo">
                    </a>
                    <span>Looking for a rental? Check out the options near ${destination}!</span>
                </div>
                <div class="custom-button">
                    <a id="custom-link" target="_blank" href="${link}">Book Vrbo</a>
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
