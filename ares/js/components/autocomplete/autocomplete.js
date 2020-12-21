/* eslint-disable lines-between-class-members */
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
    destination = null;

    constructor(site_config, page_name) {
        this.site_config = site_config;
        this.page_name = page_name;
        this.original_params = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
        this.sumbitListener('form#searchForm', 'submit');
        this.removeAttribute('input#city', 'required');
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
        this.setAttribute('input#theCheckIn', 'required', true);
        this.setAttribute('input#theSubmitButton', 'onClick', '');
        this.retreiveDestinationValueToPrePopulateInput('input#address-input');

        if (this.page_name === 'search-results' && this.site_config.site_type.toLowerCase() === 'lodging') {
            this.getEventOriginalParams(this.event_params);
            this.removeCitySarchForEvent();
        }
    }

    /**
     *@description removes the search input for event sites thus keeping the user in the city of the event.
     */
    removeCitySarchForEvent() {
        if (this.page_name !== 'search-results') return;
        if (this.site_config.site_type.toLowerCase() === 'cug' || this.site_config.site_type.toLowerCase() === 'retail') return;

        document.querySelector('input#address-input').style.display = 'none';
        document.querySelector('#theSearchBox').firstChild.style.display = 'none';
    }

    /**
     *@description Moves ARN's search input off of the page.
     *@param string dom selector for ARN's seach input.
     */
    async removeAttribute(selector, attr) {
        await utilities.waitForSelectorInDOM(selector);
        document.querySelector(selector).removeAttribute(attr);
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
        if (!document.querySelector(selector)) return;
        const element = document.querySelector(selector);
        element.setAttribute(attribute_name, attribute);
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

    /**
     *@description Instantiates the Google Places autocomplete restricted to cities. latitude, longitude and destination properties are also set when the place_changed event occurs.
     */
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
     *@return comma seperated strings. The slice method is removing the last comma.
     */
    getFilters(checkboxSelector, lblFilter) {
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
     *@description Finds the destination value and calls the setAndClear method with that value as a parameter.
     *@params - String - DOM selector, input to prepopulate destination string value
     *@return - String - Destination value.
     */
    retreiveDestinationValueToPrePopulateInput(input) {
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
        this.setAndClearInput(input, destination);
        return destination;
    }

    /**
     *@description populates the search input on the search-results page with the destination value and clears the input field on click.
     *@params - String - DOM selector, input to prepopulate destination string value.
     *@params - String - Destination, the value that the input is populated with.
     */
    setAndClearInput(input, destinationValue) {
        const input_to_fill = document.querySelector(input);
        input_to_fill.value = destinationValue;

        input_to_fill.addEventListener('click', () => {
            input_to_fill.value = '';
        });
    }

    /**
     * @description loops over each object within the object passed in, checks for empty strings, null or undefined values then appends the key and value to the URL.
     * @param object - url object which searchParams will append url parameters to.
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
    appendParamsToURL(url, paramObject) {
        for (const obj in paramObject) {
            if (
                paramObject[obj].value !== '' &&
                paramObject[obj].value !== null &&
                paramObject[obj].value !== undefined &&
                paramObject[obj].key !== undefined &&
                paramObject[obj].key !== ''
            ) {
                url.searchParams.append(paramObject[obj].key, paramObject[obj].value);
            }
        }
    }

    /**
     *@description constructs the URL with necessary parameters.
     *@params - Object - The event.
     */
    constructUrl(event) {
        event.preventDefault();

        const url = `${window.location.origin}/v6/?type=geo&siteid=${document.querySelector('meta[name="siteId"]').content}&pagesize=10&${this.site_config.distance_unit}`;
        const built_url = new URL(url);
        const nights = dayjs(dayjs(document.querySelector('input#theCheckOut').value, 'M/D/YYYY').format('M/D/YYYY')).diff(
            dayjs(document.querySelector('input#theCheckIn').value),
            'days'
        );

        this.appendParamsToURL(built_url, {
            longitude: {
                key: 'longitude',
                value: this.lng ? this.lng : this.original_params.get('longitude'),
            },
            latitude: {
                key: 'latitude',
                value: this.lat ? this.lat : this.original_params.get('latitude'),
            },
            destination: {
                key: 'destination',
                value: this.destination ? this.destination : this.original_params.get('destination'),
            },
            checkin: {
                key: 'checkin',
                value: dayjs(document.querySelector('input#theCheckIn').value, 'M/D/YYYY').format('M/D/YYYY'),
            },
            nights: {
                key: 'nights',
                value: nights,
            },
            rooms: {
                key: 'rooms',
                value: this.getDropdownValue('#rooms'),
            },
            adults: {
                key: 'adults',
                value: this.getDropdownValue('#adults'),
            },
            currency: {
                key: 'currency',
                value: utilities.getMetaTagContent('currency') ? utilities.getMetaTagContent('currency') : 'USD',
            },
            amenities: {
                key: 'amenities',
                value: this.getFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities'),
            },
            propertyClasses: {
                key: 'propertyclasses',
                value: this.getFilters('#PropertyClassesContainer .ArnSearchField div', 'lblRating'),
            },
            propertyTypes: {
                key: 'propertytypes',
                value: this.getFilters('#PropertyTypesContainer .ArnSearchField div', 'lblPropertyType'),
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
            this.appendParamsToURL(built_url, {
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
        // console.log('decodeURIComponent: ', decodeURIComponent(built_url));
        // window.alert(built_url);
        window.location.href = decodeURIComponent(built_url);
    }

    /**
     *@description Sets up an event listener on the given elements with the given event and calls the constructUrl method.
     *@params - String - DOM selector for the event listener to be added to.
     *@params - String - Event to listen for.
     */
    sumbitListener(selector, event) {
        document.querySelector(selector).addEventListener(event, (e) => {
            this.constructUrl(e);
        });
    }
}
