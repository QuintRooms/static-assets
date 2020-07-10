import Utilities from '../utilities';

const dayjs = require('dayjs');

const utilities = new Utilities();

export default class Algolia {
    addAlgoliaSearch(site_config, page_name) {
        let lat_lng;
        let default_lat_lng;
        const {origin} = window.location;
        const url = `${origin}/v6/?type=geo&siteid=${site_config.site_id}&pagesize=10&${site_config.distance_unit}`;
        const built_url = new URL(url);
        let member_token = '';
        const params = new URL(window.location.href);
        const search_params = new URLSearchParams(params.search);
        const original_params = document.querySelector('meta[name="originalParams"]').content;
        const original_params_url = new URLSearchParams(original_params);

        const grab_member_token = () => {
            if (site_config.site_type.toLowerCase() !== 'cug') return;
            if (page_name === 'landing-page' || page_name === 'search-results') {
                member_token = document.querySelector('meta[name="memberToken"]').content;
            }
        };

        function setInputToRequired(selector) {
            if (!document.querySelector(selector)) return;
            document.querySelector(selector).required = true;
        }

        function hideArnSearchElements(selectors) {
            if (!document.querySelector('.SearchHotels')) return;
            const elements = document.querySelectorAll(selectors);

            elements.forEach((element) => {
                element.style.display = 'none';
            });
        }

        const remove_arn_search_bar = (selector) => {
            if (!document.querySelector(selector)) return;
            document.querySelector(selector).remove();
        };

        const insert_algolia_search = (page, selector, adjacent_location, html) => {
            if (!document.querySelector(page)) return;
            document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
        };

        const prepopulate_inputs_on_search_hotels = () => {
            if (!document.querySelector('.SearchHotels')) return;
            if (site_config.site_type.toLowerCase() !== 'cug' && site_config.site_type.toLowerCase() !== 'retail') return;

            const destination = search_params.get('destination');
            const algolia_input = document.querySelector('input#address-input');
            algolia_input.value = destination;

            algolia_input.addEventListener('click', () => {
                algolia_input.value = '';
            });
        };

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

        const remove_city_search_for_event = () => {
            if (page_name !== 'search-results') return;
            if (site_config.site_type.toLowerCase() === 'cug' || site_config.site_type.toLowerCase() === 'retail') return;
            utilities.waitForSelectorInDOM('.algolia-places').then(() => {
                document.querySelector('.algolia-places').style.display = 'none';
                document.querySelector('#theSearchBox').firstChild.style.display = 'none';
            });
        };

        const get_optional_hotel_name = () => {
            if (page_name !== 'search-results') return;
            if (document.querySelector('input#hotelName').value === '') return;
            const hotel_name = `&hotelname=${document.querySelector('input#hotelName').value}`;
            return hotel_name;
        };

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
            return filter_values;
        }

        function getDestinationForCUG(inputSelector) {
            if (site_config.cug.is_cug || site_config.site_type.toLowerCase() === 'retail') {
                const destination_value = document.querySelector(inputSelector).value;
                return destination_value;
            }
        }

        function getEventOrginalParams(paramString) {
            const param = original_params_url.get(paramString);
            return param;
        }

        function removeArnSubmitAttribute() {
            const arn_submit_btn = document.querySelector('input#theSubmitButton');
            arn_submit_btn.setAttribute('onClick', '');
        }

        /* - - - - - Submit click function - - - - - */

        document.querySelector('form#searchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            let lat;
            let lng;
            const check_in_value = dayjs(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY');
            const check_out_value = dayjs(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY');
            const nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');

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

            function appendParamsToURL(filterFuncObject) {
                Object.keys(filterFuncObject).forEach((obj) => {
                    if (filterFuncObject[obj].value !== '' && filterFuncObject[obj].value !== null && filterFuncObject[obj].value !== undefined) {
                        built_url.searchParams.append(filterFuncObject[obj].string, filterFuncObject[obj].value);
                    }
                });
            }

            appendParamsToURL({
                longitude: {
                    string: 'longitude',
                    value: lng,
                },
                latitude: {
                    string: 'latitude',
                    value: lat,
                },
                checkin: {
                    string: 'checkin',
                    value: check_in_value,
                },
                nights: {
                    string: 'nights',
                    value: nights,
                },
                rooms: {
                    string: 'rooms',
                    value: setDropdownIndex('select#rooms'),
                },
                adults: {
                    string: 'adults',
                    value: setDropdownIndex('select#adults'),
                },
                currency: {
                    string: 'currency',
                    value: site_config.currency,
                },
                amenities: {
                    string: 'amenities',
                    value: applyFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities').slice(0, -1),
                },
                stars: {
                    string: 'propertyclasses',
                    value: applyFilters('#PropertyClassesContainer .ArnSearchField div', 'lblRating').slice(0, -1),
                },
                propertyType: {
                    string: 'propertytypes',
                    value: applyFilters('#PropertyTypesContainer .ArnSearchField div', 'lblPropertyType').slice(0, -1),
                },
                destination: {
                    string: 'destination',
                    value: getDestinationForCUG('input#address-input'),
                },
                optionalHotel: {
                    string: 'hotelname',
                    value: get_optional_hotel_name(),
                },
            });

            if (page_name === 'search-results') {
                appendParamsToURL({
                    properties: {
                        string: 'properties',
                        value: getEventOrginalParams('properties'),
                    },
                    utm_sorce: {
                        string: 'utm_sorce',
                        value: getEventOrginalParams('utm_sorce'),
                    },
                    locationLabel: {
                        string: 'locationlabel',
                        value: getEventOrginalParams('locationlabel'),
                    },
                    radius: {
                        string: 'radius',
                        value: getEventOrginalParams('radius'),
                    },
                    groupId: {
                        string: 'groupid',
                        value: getEventOrginalParams('groupid'),
                    },
                    cid: {
                        string: 'cid',
                        value: getEventOrginalParams('cid'),
                    },
                });
            }

            if (site_config.site_type.toLowerCase() === 'cug' && member_token !== '') {
                appendParamsToURL({
                    memberToken: {
                        string: 'memberToken',
                        value: member_token,
                    },
                });
            }
            window.location.href = decodeURIComponent(built_url);
        });

        /* - - - - - - - - - - - - - - Function Calls - - - - - - - - - - - - - - - - */
        removeArnSubmitAttribute();
        remove_arn_search_bar('input#city');
        hideArnSearchElements('.ArnGoCitySearch, div.ArnSearchHotelsImg+br, .ArnGoLandmarkSearch, .ArnGoAirportSearch');
        insert_algolia_search('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
        insert_algolia_search(
            '.SearchHotels',
            'div#theSearchBox',
            'afterBegin',
            '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />'
        );
        grab_member_token();
        remove_city_search_for_event();
        prepopulate_inputs_on_search_hotels();
        setDropdownIndex('select#rooms');
        setDropdownIndex('select#adults');
        setInputToRequired('input#theCheckIn');
        jQuery('#theBody').on('arnMapLoadedEvent', () => {
            if (search_params.has('locationlabel') || search_params.has('points')) return;
            hideArnSearchElements('img.arn-green-marker-icon');
        });

        /* - -- - - - - - - - - Algolia recurring function - - - - - - */

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
