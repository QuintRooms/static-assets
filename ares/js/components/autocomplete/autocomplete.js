/* eslint-disable no-underscore-dangle */
import Utilities from '../../utilities';
// const dayjs = require('dayjs');
const utilities = new Utilities();
export default class Autocomplete {
    constructor(site_config, page_name) {
        this.site_config = site_config;
        this.page_name = page_name;
        this.lat = null;
        this.lng = null;
        this.original_params = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
        this.event_params = {
            properties: null,
            utm_source: null,
            locationlabel: null,
            radius: null,
            groupid: null,
            cid: null,
            points: null,
        };
        this.rooms = null;
        this.adults = null;
        this.check_in_date = null;
        this.check_out_date = null;
        this.currency = utilities.getMetaTagContent('currency') ? utilities.getMetaTagContent('currency') : 'USD';
        this.destination = null;
        this.url = new URL(`${window.location}/v6/?type=geo&siteid=${document.querySelector('meta[name="siteId"]').content}&pagesize=10&${this.site_config.distance_unit}`);
    }

    init() {
        this.sumbitListener();
        this.hideArnSearchInput('input#city');
        this.insertNewSearchInput('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
        this.googleMapsScript();
        this.setAttribute('input#theSubmitButton', 'onClick', '');
        if (this.page_name === 'search-hotels') {
            this.getEventOriginalParams(this.event_params);
        }
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

    /**
     *@description gets and returns the destination input string for CUG's or retail sites only.
     *@param string selector of the input to get the value from.
     *@return string - the destination or input value.
     */
    getDestination(inputSelector) {
        if (document.querySelector(inputSelector).getAttribute('value') !== '') {
            return document.querySelector(inputSelector).value;
        }
        if (this.original_params.has('destination')) {
            return this.original_params.get('destination');
        }
        return new Error('No destination available');
    }

    googleMapsScript() {
        const options = {
            types: ['(cities)'],
        };
        const input = document.querySelector('input#address-input');
        // eslint-disable-next-line no-undef
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        this.enableEnterKey(input);
        // eslint-disable-next-line no-undef
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            console.log(place);
            console.log('lat: ', place.geometry.location.lat(), 'lng: ', place.geometry.location.lng());
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            this.destination = this.getDestination('input#address-input');
        });
    }

    /**
     *@description resets ARN's onClick attribute to and empty string to stop their submit button having any functionality.
     */
    setAttribute(selector, attribute_name, attribute) {
        const arn_submit_btn = document.querySelector(selector);
        arn_submit_btn.setAttribute(attribute_name, attribute);
    }

    /**
     *@description Sets the values for all keys in this.event_params object.
     *@param object the constructor property this.event_params
     */
    getEventOriginalParams(paramObj) {
        for (const param in paramObj) {
            paramObj[param] = this.original_params.get(param);
        }
    }

    /**
     *@description sets and gets the value for a option element.
     *@param string selector for the option element.
     *@return string - the current value for the option input (rooms/adults).
     */
    getDropdownValue(dropdown_selector) {
        const dropdown = document.querySelector(dropdown_selector);
        return document.querySelector(`option[value="${dropdown.value}"]`).textContent;
    }

    /**
     * @description loops over each object within the object passed in, checks for empty strings, null or undefined values then appends the key and value to the URL.
     * @param object paramObject - an object containing one or more parameters to append to a url.
     * @property string - paramObject[i].key - url parameter key.
     * @property string - paramObject[i].value - the value for the parameter key.
     * @example appendParamsToURL({
                    longitude: {
                        key: 'longitude',
                        value: lng,
                    },
                    rooms: {
                        key: 'rooms',
                        value: getDropdownValue('select#rooms'),
                    },
                })
    */
    appendParamsToURL(paramObject) {
        Object.keys(paramObject).forEach((obj) => {
            if (paramObject[obj].value !== '' && paramObject[obj].value !== null && paramObject[obj].value !== undefined && paramObject[obj].key !== undefined) {
                this.url.searchParams.append(paramObject[obj].key, paramObject[obj].value);
            }
        });
    }

    sumbitListener() {
        document.querySelector('#theOtherSubmitButton').addEventListener('click', (e) => {
            // document.querySelector('form#searchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.rooms = this.getDropdownValue('#rooms');
            this.adults = this.getDropdownValue('#adults');
            console.log('rooms : ', this.rooms, 'adults: ', this.adults);
            window.alert('pause');
        });

        /* Values to have on submit:
            - Filters: Amenitites, Stars, Propertytypes
            - D̶e̶s̶t̶i̶n̶a̶t̶i̶o̶n̶ ̶(̶s̶e̶t̶ ̶o̶n̶ ̶p̶l̶a̶c̶e̶ ̶c̶h̶a̶n̶g̶e̶d̶)̶ 
            - Check in
            - Check out
            - Nights (nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');)
            - R̶o̶o̶m̶s̶
            - A̶d̶u̶l̶t̶s̶
            - L̶a̶t̶/̶l̶n̶g̶ ̶(̶s̶e̶t̶ ̶o̶n̶ ̶p̶l̶a̶c̶e̶ c̶h̶a̶n̶g̶e̶d̶)̶
            - C̶u̶r̶r̶e̶n̶c̶y̶ ̶(̶u̶t̶i̶l̶i̶t̶i̶e̶s̶.̶g̶e̶t̶M̶e̶t̶a̶T̶a̶g̶C̶o̶n̶t̶e̶n̶t̶(̶'̶c̶u̶r̶r̶e̶n̶c̶y̶'̶)̶ ̶?̶ ̶u̶t̶i̶l̶i̶t̶i̶e̶s̶.̶g̶e̶t̶M̶e̶t̶a̶T̶a̶g̶C̶o̶n̶t̶e̶n̶t̶(̶'̶c̶u̶r̶r̶e̶n̶c̶y̶'̶)̶ ̶:̶ ̶'̶U̶S̶D̶'̶)̶
            - Optional Hotel Name: Search results only
            - E̶v̶e̶n̶t̶ ̶P̶a̶r̶a̶m̶s̶ ̶(̶s̶e̶e̶ ̶o̶b̶j̶e̶c̶t̶ ̶i̶n̶ ̶c̶o̶n̶s̶t̶r̶u̶c̶t̶o̶r̶)̶
            - Member Token (CUG only) */
    }

    enableEnterKey(input) {
        /* Store original event listener */
        const add_event_listener = input.addEventListener;

        const add_event_listener_wrapper = (type, listener) => {
            if (type === 'keydown') {
                /* Store existing listener function */
                const listener_func = listener;
                // eslint-disable-next-line no-param-reassign
                listener = (event) => {
                    /* Simulate a 'down arrow' keypress if no address has been selected */
                    const suggestion_selected = document.getElementsByClassName('pac-item-selected').length;
                    if (event.key === 'Enter' && !suggestion_selected) {
                        const e = new KeyboardEvent('keydown', {
                            key: 'ArrowDown',
                            code: 'ArrowDown',
                            keyCode: 40,
                        });
                        listener_func.apply(input, [e]);
                    }
                    listener_func.apply(input, [event]);
                };
            }
            add_event_listener.apply(input, [type, listener]);
        };

        input.addEventListener = add_event_listener_wrapper;
    }
}
