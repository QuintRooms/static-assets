/* eslint-disable lines-between-class-members */
/* eslint-disable no-underscore-dangle */
import Utilities from '../../utilities';

const dayjs = require('dayjs');

const utilities = new Utilities();
export default class Autocomplete {
    event_params = {
        properties: null,
        utm_source: null,
        locationlabel: null,
        radius: null,
        groupid: null,
        cid: null,
        points: null,
    };
    lat = null;
    lng = null;
    rooms = null;
    adults = null;
    check_in_date = null;
    amenities = null;
    property_classes = null;
    property_types = null;
    destination = null;

    constructor(site_config, page_name) {
        this.site_config = site_config;
        this.page_name = page_name;
        this.original_params = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
        this.url = new URL(`${window.location}/v6/?type=geo&siteid=${document.querySelector('meta[name="siteId"]').content}&pagesize=10&${this.site_config.distance_unit}&`);
        this.params = new URLSearchParams(this.url.search.slice(1));

        this.sumbitListener();
        this.hideArnSearchInput('input#city');
        this.insertNewSearchInput(
            'landing-page',
            'div#CitySearchContainer span',
            'beforeEnd',
            '<input type="search" id="address-input" placeholder="Destination" required="true" />'
        );

        this.insertNewSearchInput(
            'search-results',
            'div#theSearchBox',
            'afterBegin',
            '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />'
        );

        this.googleMapsScript();
        this.setAttribute('input#theSubmitButton', 'onClick', '');
        if (this.page_name === 'search-results' && this.site_config.site_type.toLowerCase() === 'lodging') {
            this.getEventOriginalParams(this.event_params);
        }
    }

    /**
     *@description Moves ARN's search input off of the page.
     *@param string dom selector for ARN's seach input.
     */
    hideArnSearchInput(selector) {
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
        if (this.page_name !== page) return;
        document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
    }

    /**
     *@description resets ARN's onClick attribute to and empty string to stop their submit button having any functionality.
     */
    setAttribute(selector, attribute_name, attribute) {
        const arn_submit_btn = document.querySelector(selector);
        arn_submit_btn.setAttribute(attribute_name, attribute);
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

    /**
     *@description Fills the destination input with the first autocomplete suggestion from Google on press of the enter key.
     *@param string selector of the input to put the event listener on.
     */
    getFirstSuggestionOnPressOfEnter(input) {
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

    googleMapsScript() {
        const options = {
            types: ['(cities)'],
        };
        const input = document.querySelector('input#address-input');
        // eslint-disable-next-line no-undef
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        this.getFirstSuggestionOnPressOfEnter(input);
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
     *@description loops through checkboxes in the filter passed in and adds the textContent to a variable.
     *@param string dom selector for which filter to loop over.
     *@param string first div of filter child to be ignored due to ARN's interesting markup.
     *@return string comma seperated strings. The slice method is removing the last comma.
     */
    applyFilters(checkboxSelector, lblFilter) {
        let filter_values = '';
        document.querySelectorAll(checkboxSelector).forEach((el) => {
            if (el.classList.contains(lblFilter)) return;
            if (el.querySelector('input').checked) {
                const label = el.querySelector('span').textContent;
                // eslint-disable-next-line no-param-reassign
                filter_values += `${label},`;
            }
            return filter_values;
        });
        filter_values.length ? (filter_values = filter_values.slice(0, -1)) : (filter_values = null);
        return filter_values;
    }

    /**
     *@description if on the search-results page, checks for a value in the "optional hotel" input.
     *@return string - the value of the "optional hotel" input if not an empty string.
     */
    getOptionalHotelName(selector) {
        if (this.page_name !== 'search-results') return;
        if (document.querySelector(selector).value === '') return;
        return document.querySelector(selector).value;
    }

    /**
     *@description populates the destination search input on the search-results page with the destination and clears the input field on click.
     *@params - String - DOM selector, input to prepopulate destination string value
     */
    prepopulateDestinationInput(input) {
        if (this.page_name !== 'search-results') return;

        const params = new URL(window.location.href);
        const search_params = new URLSearchParams(params.search);
        let destination;

        if (search_params.has('destination')) {
            destination = search_params.get('destination');
        } else if (this.original_params.has('destination')) {
            destination = this.original_params.get('destination');
        } else {
            destination = `${document.querySelector('span[itemprop="addressLocality"]').textContent}, ${document.querySelector('span[itemprop="addressRegion"]').textContent}`;
        }
        const input_to_fill = document.querySelector(input); // 'input#address-input'
        input_to_fill.value = destination;

        input_to_fill.addEventListener('click', () => {
            input_to_fill.value = '';
        });
        return destination;
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
        for (const obj in paramObject) {
            if (paramObject[obj].value !== '' && paramObject[obj].value !== null && paramObject[obj].value !== undefined && paramObject[obj].key !== undefined) {
                this.params.append(paramObject[obj].key, paramObject[obj].value);
            }
        }
    }

    sumbitListener() {
        document.querySelector('#theOtherSubmitButton').addEventListener('click', (e) => {
            // document.querySelector('form#searchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.rooms = this.getDropdownValue('#rooms');
            this.adults = this.getDropdownValue('#adults');
            this.amenities = this.applyFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities');
            this.property_classes = this.applyFilters('#PropertyClassesContainer .ArnSearchField div', 'lblRating');
            this.property_types = this.applyFilters('#PropertyTypesContainer .ArnSearchField div', 'lblPropertyType');
            this.appendParamsToURL({
                longitude: {
                    key: 'lognitude',
                    value: this.lng,
                },
                latitude: {
                    key: 'latitude',
                    value: this.lat,
                },
                destination: {
                    key: 'destination',
                    value: this.destination,
                },
                checkin: {
                    key: 'checkin',
                    value: (this.check_in_date = dayjs(document.querySelector('input#theCheckIn').value, 'M/D/YYYY').format('M/D/YYYY')),
                },
                nights: {
                    key: 'nights',
                    value: dayjs(dayjs(document.querySelector('input#theCheckOut').value, 'M/D/YYYY').format('M/D/YYYY')).diff(dayjs(this.check_in_date), 'days'),
                },
                rooms: {
                    key: 'rooms',
                    value: this.rooms,
                },
                adults: {
                    key: 'adults',
                    value: this.adults,
                },
                currency: {
                    key: 'currency',
                    value: utilities.getMetaTagContent('currency') ? utilities.getMetaTagContent('currency') : 'USD',
                },
                amenities: {
                    key: 'amenities',
                    value: this.amenities,
                },
                propertyClasses: {
                    key: 'propteryclasses',
                    value: this.property_classes,
                },
                propertyTypes: {
                    key: 'propertytypes',
                    value: this.property_types,
                },
                optionalHotel: {
                    key: 'hotelname',
                    value: this.getOptionalHotelName('input#hotelName'),
                },
                memberToken: {
                    key: 'memberToken',
                    value: utilities.getMetaTagContent('memberToken'),
                },
            });
            if (this.page_name === 'search-results' && this.site_config.site_type.toLowerCase() === 'lodging') {
                this.appendParamsToURL({
                    properties: {
                        key: 'properties',
                        value: this.properties,
                    },
                    utm_source: {
                        key: 'utm_source',
                        value: this.utm_source,
                    },
                    locationLabel: {
                        key: 'locationlabel',
                        value: this.locationlabel,
                    },
                    radius: {
                        key: 'radius',
                        value: this.radius,
                    },
                    groupId: {
                        key: 'groupid',
                        value: this.groupid,
                    },
                    cid: {
                        key: 'cid',
                        value: this.cid,
                    },
                    points: {
                        key: 'points',
                        value: this.points,
                    },
                });
            }

            // console.log(decodeURIComponent(`${this.url.toString()}${this.params.toString()}`));
            // console.log(`${this.url.toString()}${this.params.toString()}`);
            // window.alert(`${this.url.toString()}${this.params.toString()}`);
            // window.location.href = decodeURIComponent(`${this.url.toString()}${this.params.toString()}`);
        });

        /* Values to have on submit:
            - F̶i̶l̶t̶e̶r̶s̶:̶ ̶A̶m̶e̶n̶i̶t̶i̶t̶e̶s̶,̶ ̶S̶t̶a̶r̶s̶,̶ ̶P̶r̶o̶p̶e̶r̶t̶y̶t̶y̶p̶e̶s̶
            - D̶e̶s̶t̶i̶n̶a̶t̶i̶o̶n̶ ̶(̶s̶e̶t̶ ̶o̶n̶ ̶p̶l̶a̶c̶e̶ ̶c̶h̶a̶n̶g̶e̶d̶)̶ 
            - C̶h̶e̶c̶k̶ ̶i̶n̶
            - N̶i̶g̶h̶t̶s̶ (nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');)
            - R̶o̶o̶m̶s̶
            - A̶d̶u̶l̶t̶s̶
            - L̶a̶t̶/̶l̶n̶g̶ ̶(̶s̶e̶t̶ ̶o̶n̶ ̶p̶l̶a̶c̶e̶ c̶h̶a̶n̶g̶e̶d̶)̶
            - C̶u̶r̶r̶e̶n̶c̶y̶ ̶(̶u̶t̶i̶l̶i̶t̶i̶e̶s̶.̶g̶e̶t̶M̶e̶t̶a̶T̶a̶g̶C̶o̶n̶t̶e̶n̶t̶(̶'̶c̶u̶r̶r̶e̶n̶c̶y̶'̶)̶ ̶?̶ ̶u̶t̶i̶l̶i̶t̶i̶e̶s̶.̶g̶e̶t̶M̶e̶t̶a̶T̶a̶g̶C̶o̶n̶t̶e̶n̶t̶(̶'̶c̶u̶r̶r̶e̶n̶c̶y̶'̶)̶ ̶:̶ ̶'̶U̶S̶D̶'̶)̶
            - O̶p̶t̶i̶o̶n̶a̶l̶ ̶H̶o̶t̶e̶l̶ ̶N̶a̶m̶e̶:̶ ̶S̶e̶a̶r̶c̶h̶ ̶r̶e̶s̶u̶l̶t̶s̶ ̶o̶n̶l̶y̶
            - E̶v̶e̶n̶t̶ ̶P̶a̶r̶a̶m̶s̶ ̶(̶s̶e̶e̶ ̶o̶b̶j̶e̶c̶t̶ ̶i̶n̶ ̶c̶o̶n̶s̶t̶r̶u̶c̶t̶o̶r̶)̶
            - M̶e̶m̶b̶e̶r̶ ̶T̶o̶k̶e̶n̶ ̶(̶C̶U̶G̶ ̶o̶n̶l̶y̶)̶ */
    }
}
