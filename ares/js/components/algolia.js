const dayjs = require('dayjs');

const custom_parse_format = require('dayjs/plugin/customParseFormat');

dayjs.extend(custom_parse_format);

export default class Algolia {
    init(site_config, page_name, utilities) {
        let lat_lng;
        let default_lat_lng;
        const params = new URL(window.location.href);
        const search_params = new URLSearchParams(params.search);
        const original_params_url = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);

        /**
         *@description adds the attribute "required" to an element.
         *@param string the selector for the element that you wish to add "required" to.
         */
        function setInputToRequired(selector) {
            if (!document.querySelector(selector)) return;
            document.querySelector(selector).required = true;
        }

        /**
         *@description creates a node list of elements passed in as a string and sets their display to none.
         *@param string comma seperated selectors.
         */
        function hideArnSearchElements(selectors) {
            if (!document.querySelector('.SearchHotels')) return;
            const elements = document.querySelectorAll(selectors);

            elements.forEach((element) => {
                element.style.display = 'none';
            });
        }

        /**
         *@description removes ARN's search bar element from the dom.
         *@param string dom selector for ARN's seach input.
         */
        async function remove_arn_search_bar(selector) {
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
        function insert_algolia_search(page, selector, adjacent_location, html) {
            if (!document.querySelector(page)) return;
            document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
        }

        /**
         *@description populates the destination search input on the search-results page with the destination and clears the input field on click.
         */
        function prepopulate_inputs_on_search_hotels() {
            if (!document.querySelector('.SearchHotels')) return;

            let destination;
            if (search_params.get('destination') !== null) {
                destination = search_params.get('destination');
            }
            if (original_params_url.get('destination') !== null) {
                destination = original_params_url.get('destination');
            } else {
                destination = `${document.querySelector('span[itemprop="addressLocality"]').textContent}, ${document.querySelector('span[itemprop="addressRegion"]').textContent}`;
            }
            const algolia_input = document.querySelector('input#address-input');
            algolia_input.value = destination;

            algolia_input.addEventListener('click', () => {
                algolia_input.value = '';
            });
        }

        /**
         *@description sets and gets the value for a option element.
         *@param string selector for the option element.
         *@return string - the current value for the option input (rooms/adults).
         */
        function setDropdownIndex(dropdown_selector) {
            const dropdown = document.querySelector(dropdown_selector);
            let value = dropdown.querySelector(`option[value="${dropdown.value}"]`).textContent;

            dropdown.addEventListener('change', () => {
                for (let i = 0; i < dropdown.length; i += 1) {
                    if (dropdown[i].selected) {
                        dropdown.selectedIndex = i;
                        value = dropdown[i].textContent;
                        break;
                    }
                }
                return value;
            });
            return value;
        }

        /**
         *@description removes the search input for event sites thus keeping the user in the city of the event.
         */
        function remove_city_search_for_event() {
            if (page_name !== 'search-results') return;
            if (site_config.site_type.toLowerCase() === 'cug' || site_config.site_type.toLowerCase() === 'retail') return;
            utilities.waitForSelectorInDOM('.algolia-places').then(() => {
                document.querySelector('.algolia-places').style.display = 'none';
                document.querySelector('#theSearchBox').firstChild.style.display = 'none';
            });
        }

        /**
         *@description if on the search-results page, checks for a value in the "optional hotel" input.
         *@return string - the value of the "optional hotel" input if not an empty string.
         */
        function get_optional_hotel_name() {
            if (page_name !== 'search-results') return;
            if (document.querySelector('input#hotelName').value === '') return;
            const hotel_name = document.querySelector('input#hotelName').value;
            return hotel_name;
        }

        /**
         *@description loops through checkboxes in the filter passed in and adds the textContent to a variable.
         *@param string dom selector for which filter to loop over.
         *@param string first div of filter child to be ignored due to ARN's interesting markup.
         *@return string comma seperated strings. The slice method is removing the last comma.
         */
        function applyFilters(checkboxSelector, lblFilter) {
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
            return filter_values.slice(0, -1);
        }

        /**
         *@description gets and returns the destination input string for CUG's or retail sites only.
         *@param string selector of the input to get the value from.
         *@return string - the destination or input value.
         */
        function getDestination(inputSelector) {
            let destination_value;
            if (document.querySelector(inputSelector).value !== null) {
                destination_value = document.querySelector(inputSelector).value;
                return destination_value;
            }
            if (original_params_url.has('destination')) {
                const param = original_params_url.get('destination');
                return param;
            }
        }

        /**
         *@description gets the value of an originalParam key.
         *@param string the key for the originalParam you want the content for.
         *@return string - the value of the param.
         */
        function getEventOrginalParams(paramString) {
            if (!original_params_url.has(paramString)) return;
            const param = original_params_url.get(paramString);
            return param;
        }

        /**
         *@description resets ARN's onClick attribute to and empty string to stop their submit button having any functionality.
         */
        function removeArnSubmitAttribute() {
            const arn_submit_btn = document.querySelector('input#theSubmitButton');
            arn_submit_btn.setAttribute('onClick', '');
        }
        /* - - - - - Submit click function - - - - - */
        document.querySelector('form#searchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const {origin} = window.location;
            const url = `${origin}/v6/?type=geo&siteid=${document.querySelector('meta[name="siteId"]').content}&pagesize=10&${site_config.distance_unit}`;
            const built_url = new URL(url);
            let lat;
            let lng;
            let check_in_value;
            let check_out_value;
            let nights;

            if (site_config.site_id === 52342 || (utilities.getMetaTagContent('theme') === 'standard' && site_config.affiliate_id !== 16980)) {
                check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'M/D/YYYY').format('M/D/YYYY');
                check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'M/D/YYYY').format('M/D/YYYY');

                nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');
            } else if (utilities.getMetaTagContent('theme') === 'mandarin' || utilities.getMetaTagContent('theme') === 'tw_mandarin') {
                check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'YYYY/M/D').format('M/D/YYYY');
                check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'YYYY/M/D').format('M/D/YYYY');

                nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');

                check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'YYYY/M/D').format('YYYY/M/D');
                check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'YYYY/M/D').format('YYYY/M/D');
            } else if (site_config.affiliate_id === 16980 || site_config.site_id === 60278) {
                check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('M/D/YYYY');
                check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('M/D/YYYY');
                nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');

                check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('D/M/YYYY');
                check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('D/M/YYYY');
            } else {
                check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('M/D/YYYY');
                check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('M/D/YYYY');

                nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');

                check_in_value = dayjs(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('D/M/YYYY');
                check_out_value = dayjs(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('D/M/YYYY');
            }

            if (utilities.getMetaTagContent('theme') !== 'standard') {
                this.check_in_value = document.querySelector('input#theCheckIn').value;
                this.check_out_value = document.querySelector('input#theCheckOut').value;
            }

            if (lat_lng) {
                lat = lat_lng.lat;
                lng = lat_lng.lng;
            } else if (default_lat_lng) {
                lat = default_lat_lng.lat;
                lng = default_lat_lng.lng;
            } else if (!lat_lng && !default_lat_lng && page_name === 'search-results') {
                lat = original_params_url.get('latitude');
                lng = original_params_url.get('longitude');
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
                                value: setDropdownIndex('select#rooms'),
                            },
                        })
            */
            function appendParamsToURL(paramObject) {
                Object.keys(paramObject).forEach((obj) => {
                    if (paramObject[obj].value !== '' && paramObject[obj].value !== null && paramObject[obj].value !== undefined && paramObject[obj].key !== undefined) {
                        built_url.searchParams.append(paramObject[obj].key, paramObject[obj].value);
                    }
                });
            }

            appendParamsToURL({
                longitude: {
                    key: 'longitude',
                    value: lng,
                },
                latitude: {
                    key: 'latitude',
                    value: lat,
                },
                destination: {
                    key: 'destination',
                    value: getDestination('input#address-input'),
                },
                checkin: {
                    key: 'checkin',
                    value: check_in_value,
                },
                nights: {
                    key: 'nights',
                    value: nights,
                },
                rooms: {
                    key: 'rooms',
                    value: setDropdownIndex('select#rooms'),
                },
                adults: {
                    key: 'adults',
                    value: setDropdownIndex('select#adults'),
                },
                kids: {
                    key: 'children',
                    value: setDropdownIndex('select#kids'),
                },
                currency: {
                    key: 'currency',
                    value: utilities.getMetaTagContent('currency') ? utilities.getMetaTagContent('currency') : 'USD',
                },
                amenities: {
                    key: 'amenities',
                    value: applyFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities'),
                },
                stars: {
                    key: 'propertyclasses',
                    value: applyFilters('#PropertyClassesContainer .ArnSearchField div', 'lblRating'),
                },
                propertyType: {
                    key: 'propertytypes',
                    value: applyFilters('#PropertyTypesContainer .ArnSearchField div', 'lblPropertyType'),
                },
                optionalHotel: {
                    key: 'hotelname',
                    value: get_optional_hotel_name(),
                },
            });

            if (page_name === 'search-results' && site_config.site_type.toLowerCase() === 'lodging') {
                appendParamsToURL({
                    properties: {
                        key: 'properties',
                        value: getEventOrginalParams('properties'),
                    },
                    utm_source: {
                        key: 'utm_source',
                        value: getEventOrginalParams('utm_source'),
                    },
                    utm_campaign: {
                        key: 'utm_campaign',
                        value: getEventOrginalParams('utm_campaign'),
                    },
                    utm_medium: {
                        key: 'utm_medium',
                        value: getEventOrginalParams('utm_medium'),
                    },
                    locationLabel: {
                        key: 'locationlabel',
                        value: getEventOrginalParams('locationlabel'),
                    },
                    radius: {
                        key: 'radius',
                        value: getEventOrginalParams('radius'),
                    },
                    groupId: {
                        key: 'groupid',
                        value: getEventOrginalParams('groupid'),
                    },
                    cid: {
                        key: 'cid',
                        value: getEventOrginalParams('cid'),
                    },
                    points: {
                        key: 'points',
                        value: getEventOrginalParams('points'),
                    },
                });
            }

            if (site_config.site_type.toLowerCase() === 'cug') {
                appendParamsToURL({
                    memberToken: {
                        key: 'memberToken',
                        value: utilities.getMetaTagContent('memberToken'),
                    },
                });
            }

            window.location.href = decodeURIComponent(built_url);
        });

        remove_arn_search_bar('input#city');
        if (page_name === 'landing-page') {
            insert_algolia_search('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
        }

        if (page_name === 'search-results') {
            insert_algolia_search(
                '.SearchHotels',
                'div#theSearchBox',
                'afterBegin',
                '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />'
            );
            prepopulate_inputs_on_search_hotels();
        }
        removeArnSubmitAttribute();
        hideArnSearchElements('.ArnGoCitySearch, div.ArnSearchHotelsImg+br, .ArnGoLandmarkSearch, .ArnGoAirportSearch');
        remove_city_search_for_event();
        setDropdownIndex('select#rooms');
        setDropdownIndex('select#adults');
        setDropdownIndex('select#kids');
        setInputToRequired('input#theCheckIn');

        jQuery('#theBody').on('arnMapLoadedEvent', () => {
            if (search_params.has('locationlabel') || search_params.has('points')) return;
            hideArnSearchElements('img.arn-green-marker-icon');
        });

        /**
         *@description Algolia recurring autocomplete function, two methods run on this function. 1 - the 'change' method listens for the user making a selection from the suggestion and updates the variable "lat_lng" with the lat/lng object for that suggestion. 2 - the 'suggestions' method will save the first suggestions' lat/lng to "default_lat_lng" if the user enters an invalid/ improperly formatted string into the destination search and use that lat/lng for the geo search.
         */
        (() => {
            const places_autocomplete = places({
                appId: site_config.algolia_app_id,
                apiKey: site_config.algolia_api_key,
                container: document.querySelector('input#address-input'),
            }).configure({
                aroundLatLngViaIP: 'false',
                type: 'city',
            });
            places_autocomplete.on('change', function resultSelected(e) {
                document.querySelector('input#address-input').value = e.suggestion.value || '';
                lat_lng = e.suggestion.latlng;
            });
            places_autocomplete.on('suggestions', function saveDefaultGeo(e) {
                // eslint-disable-next-line no-underscore-dangle
                default_lat_lng = e.rawAnswer.hits[0]._geoloc;
            });
        })();
    }
}
