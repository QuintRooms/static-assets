import Utilities from '../../utilities';
// const dayjs = require('dayjs');
const utilities = new Utilities();
export default class Autocomplete {
    constructor(site_config, page_name) {
        this.site_config = site_config;
        this.page_name = page_name;
    }

    init() {
        this.remove_arn_search_bar('input#city');
        this.insertNewSearchBox('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
        this.insertAutocompleteToBody();
    }

    /**
     *@description removes ARN's search bar element from the dom.
     *@param string dom selector for ARN's seach input.
     */
    async remove_arn_search_bar(selector) {
        if (!document.querySelector(selector)) return;

        document.querySelector(selector).style.position = 'absolute';
        document.querySelector(selector).style.left = '-10000px';

        await utilities.waitForSelectorInDOM('#city');

        document.querySelector(selector).removeAttribute('required');
    }

    /**
     *@description inserts a new search input.
     *@param string page - the selector/class of the page.
     *@param string selector - selector of dom element to insert html on.
     *@param string adjacent_location - position for html to be inserted on the specified element.
     *@param string html - markup for new element.
     */
    insertNewSearchBox(page, selector, adjacent_location, html) {
        if (!document.querySelector(page)) return;
        document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
    }

    insertAutocompleteToBody() {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<script>
        function init() {
            const options = {
                types: ['(cities)']
            };
            const input = document.querySelector('input#address-input');
            const autocomplete = new google.maps.places.Autocomplete(input);
        }
        google.maps.event.addDomListener(window, 'load', init);
    </script>`
        );
    }
}
