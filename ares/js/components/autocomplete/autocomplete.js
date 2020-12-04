// import Utilities from '../../utilities';
// const dayjs = require('dayjs');
// const utilities = new Utilities();
export default class Autocomplete {
    constructor(site_config, page_name) {
        this.site_config = site_config;
        this.page_name = page_name;
        this.lat = null;
        this.lng = null;
    }

    init() {
        this.hideArnSearchInput('input#city');
        this.insertNewSearchInput('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
        this.googleMapsScript();
    }

    /**
     *@description removes ARN's search bar element from the dom.
     *@param string dom selector for ARN's seach input.
     */
    async hideArnSearchInput(selector) {
        if (!document.querySelector(selector)) return;

        document.querySelector(selector).style.position = 'absolute';
        document.querySelector(selector).style.left = '-10000px';

        // await utilities.waitForSelectorInDOM('#city');

        document.querySelector(selector).removeAttribute('required');
    }

    /**
     *@description inserts a new search input.
     *@param string page - the selector/class of the page.
     *@param string selector - selector of dom element to insert html on.
     *@param string adjacent_location - position for html to be inserted on the specified element.
     *@param string html - markup for new element.
     */
    insertNewSearchInput(page, selector, adjacent_location, html) {
        if (!document.querySelector(page)) return;
        document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
    }

    googleMapsScript() {
        const options = {
            types: ['(cities)'],
        };
        const input = document.querySelector('input#address-input');
        // eslint-disable-next-line no-undef
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        // eslint-disable-next-line no-undef
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            const place = autocomplete.getPlace();
            console.log(place.geometry.location.lat(), '-', place.geometry.location.lng());
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
        });
    }
}
