/* eslint-disable max-classes-per-file */
import Autocomplete from './autocomplete';
import Utilities from '../../utilities';

jest.spyOn(Autocomplete.prototype, 'sumbitListener').mockImplementation(() => true);
jest.spyOn(Autocomplete.prototype, 'removeAttribute').mockImplementation(() => true);
jest.spyOn(Autocomplete.prototype, 'insertNewSearchInput').mockImplementation(() => true);
jest.spyOn(Autocomplete.prototype, 'googleMapsScript').mockImplementation(() => true);
jest.spyOn(Autocomplete.prototype, 'getEventOriginalParams').mockImplementation(() => true);
jest.spyOn(Autocomplete.prototype, 'resetArnElementAttribute').mockImplementation(() => true);
jest.spyOn(Autocomplete.prototype, 'retreiveDestinationValueToPrePopulateInput').mockImplementation(() => 'Austin, TX');

document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><div id="theSearchBox"><span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

const autocomplete = new Autocomplete(
    {
        site_id: '60279',
        directory_name: 'ares_child',
        distance_unit: 'useMiles',
    },
    'landing-page'
);

/* - - - - - - Constructor - - - - - -*/

describe('Constructor', () => {
    afterAll(() => {
        jest.restoreAllMocks();
        document.body.innerHTML = '';
    });

    it('Sets the value of site_config', () => {
        expect(autocomplete.site_config).toEqual(expect.objectContaining({site_id: '60279', directory_name: 'ares_child', distance_unit: 'useMiles'}));
    });

    it('Sets the value of page_name to landing-page', () => {
        expect(autocomplete.page_name).toEqual('landing-page');
    });

    it('Sets the value of original_params', () => {
        expect(decodeURIComponent(autocomplete.original_params.toString())).toEqual(
            'siteid=62309&currency=USD&points=-80.104529|26.114917|Tortuga-Sunset+Stage,-80.119458|26.100938|Water+Taxi+Stop+(Tickets+Extra$),-80.106137|26.110877|Water+Taxi+Stop+(Tickets+Extra$)&cid=ROCK&useMiles=&checkin=11/12/21&pageSize=15&mapSize=13&groupid=43285&radius=5&locationlabel=Tortuga-Main+Stage&utm_source=internal&nights=3&propertytypes=Hotel,Motel,Resort,Hostel,Ext.+Stay,Boutique,Weekly+Rentals&latitude=26.10879170000000&map=&longitude=-80.10643370000000&type=geo&properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947'
        );
    });

    it('Calls methods', () => {
        expect(autocomplete.sumbitListener).toBeCalledTimes(1);
        expect(autocomplete.sumbitListener).toReturnWith(true);
        expect(autocomplete.removeAttribute).toBeCalledTimes(1);
        expect(autocomplete.insertNewSearchInput).toBeCalledTimes(2);
        expect(autocomplete.googleMapsScript).toBeCalledTimes(1);
        expect(autocomplete.resetArnElementAttribute).toBeCalledTimes(2);
        expect(autocomplete.getEventOriginalParams).toBeCalledTimes(0);
    });
});

/* - - - - - - removeCitySearchForEvent - - - - - -*/

describe('removeCitySearchForEvent', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    it('Sets the input and surrounding span display to none', () => {
        jest.spyOn(Autocomplete.prototype, 'sumbitListener').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'removeAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'insertNewSearchInput').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'googleMapsScript').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'getEventOriginalParams').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'resetArnElementAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'retreiveDestinationValueToPrePopulateInput').mockImplementation(() => 'Austin, TX');

        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><div id="theSearchBox"><span style=>City Search:</span><input type="search" id="address-input" placeholder="Destination" style= required="true" value=""></div>`;

        // eslint-disable-next-line no-unused-vars
        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
                site_type: 'lodging',
            },
            'search-results'
        );

        expect(document.querySelector('input#address-input').getAttribute('style')).toEqual('display: none;');
        expect(document.querySelector('#theSearchBox span').style.display).toEqual('none');
    });
});

/* - - - - - - removeAttribute - - - - - -*/

describe('removeAttribute', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    afterAll(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    it('Removes the required attribute', async () => {
        document.body.innerHTML = `
        <h1 class="RootBody">This is a test</h1>
        <input id="city" required>`;

        const new_html = `
        <h1 class="RootBody">This is a test</h1>
        <input id="city">`;

        const util_mock = jest.spyOn(Utilities.prototype, 'waitForSelectorInDOM');

        autocomplete.removeAttribute('input#city', 'required');
        expect(util_mock).toHaveBeenCalled();
        await util_mock.mock.results[0].value;
        expect(document.body.innerHTML).toEqual(new_html);
    });
});

/* - - - - - - insertNewSearchInput - - - - - -*/

describe('insertNewSearchInput', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    it('Inserts a new search input', () => {
        document.body.innerHTML = `
        <h1 class="RootBody">This is a test</h1>
        <div id="CitySearchContainer">
            <span>
            </span>
        </div>`;

        const new_html = `
        <h1 class="RootBody">This is a test</h1>
        <div id="CitySearchContainer">
            <span>
            <input type="search" id="address-input" placeholder="Destination" required="true"></span>
        </div>`;

        autocomplete.insertNewSearchInput(
            'landing-page',
            'div#CitySearchContainer span',
            'beforeEnd',
            '<input type="search" id="address-input" placeholder="Destination" required="true">'
        );
        expect(document.body.innerHTML).toEqual(new_html);
    });
});

/* - - - - - - resetArnElementAttribute - - - - - -*/

describe('resetArnElementAttribute', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    it('Sets an onClick attribute to and empty string', () => {
        document.body.innerHTML = `<input id="theSubmitButton" onclick="$('theBody').addClassName('searchingForResults');doPushPagePrep();$('theArnPushPage').show();$('theArnPushPageContent').show()">`;

        autocomplete.resetArnElementAttribute('input#theSubmitButton', 'onClick', '');
        expect(document.body.innerHTML).toEqual(`<input id="theSubmitButton" onclick="">`);
    });
});

/* - - - - - - getDestination - - - - - -*/

describe('getDestination', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        jest.restoreAllMocks();
        document.body.innerHTML = '';
    });

    it('Returns the destination string from the input if available', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="Austin, TX, USA">
        `;
        expect(autocomplete.getDestination('input#address-input')).toEqual('Austin, TX, USA');
    });

    it('If destination string is unavailable on from the input, returns it from Original Params', () => {
        jest.spyOn(Autocomplete.prototype, 'sumbitListener').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'removeAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'insertNewSearchInput').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'googleMapsScript').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'getEventOriginalParams').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'resetArnElementAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'retreiveDestinationValueToPrePopulateInput').mockImplementation(() => 'Austin, TX');
        jest.spyOn(Autocomplete.prototype, 'removeCitySearchForEvent').mockImplementation(() => true);

        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
            },
            'landing-page'
        );

        expect(new_autocomplete.getDestination('input#address-input')).toEqual('Austin, TX, USA');
    });

    it('Returns an error if the destination is not available', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
            },
            'landing-page'
        );

        expect(new_autocomplete.getDestination('input#address-input')).toEqual(new Error('No destination available'));
    });
});

/* - - - - - - getFirstSuggestionOnPressOfEnter - - - - - -*/

// TODO Add more indepth testing for this method
describe('getFirstSuggestionOnPressOfEnter', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    it('is called', () => {
        document.body.innerHTML = `<div class="pac-container pac-logo" style="width: 241px; position: absolute; left: 600px; top: 379px;"><div class="pac-item"><span class="pac-icon pac-icon-marker"></span><span class="pac-item-query"><span class="pac-matched">Austin</span></span><span><span class="pac-matched">TX</span>, USA</span></div></div><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;
        expect(autocomplete.getFirstSuggestionOnPressOfEnter(document.querySelector('input#address-input'))).toBeUndefined();
    });
});

/* - - - - - - googleMapsScript - - - - - -*/

describe('googleMapsScript', () => {
    const setup_google_mock = () => {
        const google = {
            maps: {
                places: {
                    Autocomplete: class {},
                },
                event: {
                    addListener: jest.fn(() => autocomplete.onPlaceChanged()),
                    addDomListener: jest.fn(() => true),
                },
            },
        };
        global.window.google = google;
    };

    beforeAll(() => {
        document.body.innerHTML = '';
        setup_google_mock();
    });

    afterAll(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    it('Calls the getFirstSuggestionOnPressOfEnter method once', () => {
        jest.spyOn(Autocomplete.prototype, 'getFirstSuggestionOnPressOfEnter').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'onPlaceChanged').mockImplementation(() => true);

        autocomplete.googleMapsScript();
        expect(autocomplete.onPlaceChanged).toBeCalledTimes(1);
        expect(autocomplete.onPlaceChanged).toHaveReturnedWith(true);
        expect(autocomplete.getFirstSuggestionOnPressOfEnter).toBeCalledTimes(1);
        expect(autocomplete.getFirstSuggestionOnPressOfEnter).not.toBeCalledTimes(2);
    });
});

/* - - - - - - getEventOriginalParams - - - - - -*/

describe('getEventOriginalParams', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    it('Sets the key/values in the constructor property event_params', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279">`;

        autocomplete.getEventOriginalParams(autocomplete.event_params);
        expect(autocomplete.event_params).toBeTruthy();
        expect(autocomplete.event_params).toEqual(
            expect.not.objectContaining({
                properties: null,
                utm_source: null,
                locationlabel: null,
                radius: null,
                groupid: null,
                cid: null,
                points: null,
            })
        );
        expect(autocomplete.event_params).toEqual(
            expect.objectContaining({
                properties: 'x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947',
                utm_source: 'internal',
                locationlabel: 'Tortuga-Main Stage',
                radius: '5',
                groupid: '43285',
                cid: 'ROCK',
                points: '-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)',
            })
        );
    });
});

/* - - - - - - getDropdownValue - - - - - -*/

describe('getDropdownValue', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    it('Returns the selected options text content', () => {
        document.body.innerHTML = `<select id="rooms" name="31">
        <option value="32">1</option>
        <option value="33" selected="selected">2</option>
        <option value="34">3</option>
        <option value="35">4</option>
    </select>`;

        expect(autocomplete.getDropdownValue('#rooms')).toBe('2');
    });
});

/* - - - - - - getFilters - - - - - -*/

describe('getFilters', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    it('Returns a comma seperated list of amenities', () => {
        document.body.innerHTML = `
        <div id="AmentitiesContainer" class="ArnIndividualSearchContainer ArnAmentitiesContainer">
            <div class="ArnSearchField">
                <div class="lblAmenities">Amenities:</div>
                    <div class="AirportShuttleBox">
                        <input name="191" type="checkbox" class="checkbox" checked>
                        <input name="192" type="hidden" class="hidden">
                        <span class="lblAirportShuttle">Airport Shuttle</span>
                    </div>
                    <div class="ComplimentaryBreakfastBox">
                        <input name="193" type="checkbox" class="checkbox" checked>
                        <input name="194" type="hidden" class="hidden">
                        <span class="lblComplimentaryBreakfast">Complimentary Breakfast</span>
                    </div>
                    <div class="FitnessCenterBox">
                        <input name="195" type="checkbox" class="checkbox" checked>
                        <input name="196" type="hidden" class="hidden">
                        <span class="lblFitnessCenter">Fitness Center</span>
                    </div>
                </div>
        </div>`;

        expect(autocomplete.getFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities')).toEqual('Airport Shuttle,Complimentary Breakfast,Fitness Center');
    });

    it('Returns null if no filter boxes are checked', () => {
        document.body.innerHTML = `
        <div id="AmentitiesContainer" class="ArnIndividualSearchContainer ArnAmentitiesContainer">
            <div class="ArnSearchField">
                <div class="lblAmenities">Amenities:</div>
                    <div class="AirportShuttleBox">
                        <input name="191" type="checkbox" class="checkbox">
                        <input name="192" type="hidden" class="hidden">
                        <span class="lblAirportShuttle">Airport Shuttle</span>
                    </div>
        </div>`;

        expect(autocomplete.getFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities')).toBeNull();
    });
});

/* - - - - - - getOptionalHotelName - - - - - -*/

describe('getOptionalHotelName', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('Returns when not search-results page', () => {
        expect(autocomplete.getOptionalHotelName()).toBeUndefined();
    });

    it('Returns when the value of #hotelName is an empty string on search-hotels page', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><input type="search" id="hotelName" placeholder="Destination" required="true" value="">`;

        jest.spyOn(Autocomplete.prototype, 'sumbitListener').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'removeAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'insertNewSearchInput').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'googleMapsScript').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'getEventOriginalParams').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'resetArnElementAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'retreiveDestinationValueToPrePopulateInput').mockImplementation(() => 'Austin, TX');
        jest.spyOn(Autocomplete.prototype, 'removeCitySearchForEvent').mockImplementation(() => true);

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
                site_type: 'lodging',
            },
            'search-results'
        );
        expect(new_autocomplete.getOptionalHotelName('input#hotelName')).toBeUndefined();
    });

    it('Returns the value of the optional hotel entered', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><input type="search" id="hotelName" value="Hilton">`;

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
                site_type: 'lodging',
            },
            'search-results'
        );
        expect(new_autocomplete.getOptionalHotelName('#hotelName')).toEqual('Hilton');
    });
});

/* - - - - - - retreiveDestinationValueToPrePopulateInput - - - - - -*/

describe('retreiveDestinationValueToPrePopulateInput', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    afterAll(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    it('Calls the setAndClearInput method once', () => {
        jest.spyOn(Autocomplete.prototype, 'sumbitListener').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'removeAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'insertNewSearchInput').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'googleMapsScript').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'getEventOriginalParams').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'resetArnElementAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'setAndClearInput').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'removeCitySearchForEvent').mockImplementation(() => true);

        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value=""><span itemprop="addressLocality">Austin</span><span itemprop="addressRegion">TX</span>`;

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
                site_type: 'lodging',
            },
            'search-results'
        );

        delete window.location;
        window.location = new URL(
            `https://events.hotelsforhope.com/v6/?type=geo&siteid=62686&pagesize=10&useMiles=&longitude=-97.7437&latitude=30.2711&checkin=11/19/2021&nights=1&rooms=1&adults=2&currency=USD`
        );
        expect(new_autocomplete.getEventOriginalParams).toBeCalledTimes(1);
        expect(new_autocomplete.setAndClearInput).toBeCalledTimes(1);
    });

    it('Returns the destination string from url params', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        delete window.location;
        window.location = new URL(
            `https://events.hotelsforhope.com/v6/?type=geo&siteid=62686&pagesize=10&useMiles=&longitude=-97.7437&latitude=30.2711&destination=Austin,+Texas&checkin=11/19/2021&nights=1&rooms=1&adults=2&currency=USD`
        );

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
                site_type: 'lodging',
            },
            'search-results'
        );

        expect(new_autocomplete.retreiveDestinationValueToPrePopulateInput('input#address-input')).toEqual('Austin, Texas');
    });

    it('Returns the destination string from original params', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;destination=Austin, TX&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
                site_type: 'lodging',
            },
            'search-results'
        );

        delete window.location;
        window.location = new URL(
            `https://events.hotelsforhope.com/v6/?type=geo&siteid=62686&pagesize=10&useMiles=&longitude=-97.7437&latitude=30.2711&checkin=11/19/2021&nights=1&rooms=1&adults=2&currency=USD`
        );

        expect(new_autocomplete.retreiveDestinationValueToPrePopulateInput('input#address-input')).toEqual('Austin, TX');
        expect(new_autocomplete.retreiveDestinationValueToPrePopulateInput('input#address-input')).not.toEqual('Austin, Texas');
    });

    it('Returns the destination string from the first property address span tag', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value=""><span itemprop="addressLocality">Austin</span><span itemprop="addressRegion">TX</span>`;

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
                site_type: 'lodging',
            },
            'search-results'
        );

        delete window.location;
        window.location = new URL(
            `https://events.hotelsforhope.com/v6/?type=geo&siteid=62686&pagesize=10&useMiles=&longitude=-97.7437&latitude=30.2711&checkin=11/19/2021&nights=1&rooms=1&adults=2&currency=USD`
        );
        expect(new_autocomplete.retreiveDestinationValueToPrePopulateInput('input#address-input')).toEqual('Austin, TX');
    });
});

/* - - - - - - setAndClearInput - - - - - -*/

describe('setAndClearInput', () => {
    beforeAll(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

    it('Sets the value of the input with the destination', () => {
        document.body.innerHTML = `<input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        autocomplete.setAndClearInput('input#address-input', 'Austin, TX');

        expect(document.querySelector('input#address-input').value).toEqual('Austin, TX');
    });

    it('On click of the input, the value is cleared', () => {
        document.body.innerHTML = `<input type="search" id="address-input" placeholder="Destination" required="true" value="Austin, TX">`;

        autocomplete.setAndClearInput('input#address-input', 'Austin, TX');
        document.querySelector('input#address-input').click();
        expect(document.querySelector('input#address-input').value).toEqual('');
    });
});

/* - - - - - - appendParamsToUrl - - - - - -*/

describe('appendParamsToUrl', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('Builds the URL with valid params', () => {
        const url = `https://events.hotelsforhope.com/v6/?type=geo&siteid=12345&pagesize=10&useMiles=`;
        const built_url = new URL(url);

        autocomplete.appendParamsToURL(built_url, {
            longitude: {
                key: 'longitude',
                value: '3',
            },
            rooms: {
                key: 'rooms',
                value: '2',
            },
        });

        expect(built_url.toString()).toEqual(`${url}&longitude=3&rooms=2`);
    });

    it("Doesn't append any values or keys that are null, undefined or an empty string", () => {
        const url = `https://events.hotelsforhope.com/v6/?type=geo&siteid=12345&pagesize=10&useMiles`;
        const built_url = new URL(url);

        autocomplete.appendParamsToURL(built_url, {
            longitude: {
                key: 'latitude',
                value: '3',
            },
            properties: {
                key: 'properties',
                value: null,
            },
            adults: {
                key: '',
                value: '1',
            },
            checkin: {
                key: 'checkin',
                value: undefined,
            },
        });

        expect(built_url.toString()).toEqual('https://events.hotelsforhope.com/v6/?type=geo&siteid=12345&pagesize=10&useMiles=&latitude=3');
    });
});

/* - - - - - - setDateFormat - - - - - -*/

describe('setDateFormat', () => {
    beforeAll(() => {
        document.body.innerHTML = ``;
    });

    afterAll(() => {
        document.body.innerHTML = ``;
    });

    it('Returns the correctly formatted date and correct amount of nights for M/D/YYYY', () => {
        document.body.innerHTML = `
        <input id="theCheckIn" value="1/6/2021">
        <input id="theCheckOut" value="1/8/2021">
        <span itemprop="addressLocality">Austin</span>
        `;
        expect(autocomplete.setDateFormat('spanish', 12345, 52342)).toEqual({
            check_in_value: '1/6/2021',
            nights: 2,
        });
        expect(autocomplete.setDateFormat('standard', 12345, 60279)).toEqual({
            check_in_value: '1/6/2021',
            nights: 2,
        });
        expect(autocomplete.setDateFormat('standard', 16980, 12345)).toEqual({
            check_in_value: '1/6/2021',
            nights: 2,
        });
    });

    it('Returns formatted date and nights for YYYY/M/D', () => {
        document.body.innerHTML = `
        <input id="theCheckIn" value="2021/1/6">
        <input id="theCheckOut" value="2021/1/8">
        <span itemprop="addressLocality">Austin</span>
        `;

        expect(autocomplete.setDateFormat('mandarin', 12345, 60279)).toEqual({
            check_in_value: '2021/1/6',
            nights: 2,
        });
    });

    it('Returns formatted date and nights for D/M/YYYY', () => {
        document.body.innerHTML = `
        <input id="theCheckIn" value="6/1/2021">
        <input id="theCheckOut" value="8/1/2021">
        <span itemprop="addressLocality">London</span>
        `;

        expect(autocomplete.setDateFormat('standard', 16980, 60279)).toEqual({
            check_in_value: '6/1/2021',
            nights: 2,
        });
    });
});

/* - - - - - - constructUrl - - - - - -*/

describe('constructUrl', () => {
    beforeAll(() => {
        document.body.innerHTML = ``;
    });

    afterAll(() => {
        jest.restoreAllMocks();
        document.body.innerHTML = ``;
    });

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it("Calls it's methods correct amount of times when submit event occurs ", () => {
        jest.spyOn(Autocomplete.prototype, 'getDropdownValue').mockImplementation(() => '1');
        jest.spyOn(Autocomplete.prototype, 'getFilters').mockImplementation(() => 'Airport Shuttle');
        jest.spyOn(Autocomplete.prototype, 'appendParamsToURL').mockImplementation(() => undefined);

        const event = {preventDefault: jest.fn()};
        const stay_data = {
            check_in_value: '6/1/2021',
            nights: '2',
        };

        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><form id="searchForm"><input type="search" id="address-input" placeholder="Destination" required="true" value=""><input id="theOtherSubmitButton" style="cursor:hand;cursor:pointer;" value="Search" type="submit" class="submit"><input type="search" id="theCheckIn" value="2/3/2020"><input type="search" id="theCheckOut" value="2/4/2020"></form>`;

        // autocomplete.sumbitListener('form#searchForm', 'submit');
        // document.getElementById('searchForm').submit();
        autocomplete.constructUrl(event, stay_data);
        expect(autocomplete.appendParamsToURL).toBeCalledTimes(1);
        expect(autocomplete.getDropdownValue).toBeCalledTimes(2);
        expect(autocomplete.getDropdownValue).toReturnWith('1');
        expect(autocomplete.getFilters).toBeCalledTimes(3);
        expect(autocomplete.getFilters).toReturnWith('Airport Shuttle');
    });

    it('Calls appendParamsToURL twice when page is search-results', () => {
        // Manual mock of submit event
        const event2 = {preventDefault: jest.fn()};
        const stay_data = {
            check_in_value: '6/1/2021',
            nights: '2',
        };

        // Constructor mocks
        jest.spyOn(Autocomplete.prototype, 'removeAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'insertNewSearchInput').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'googleMapsScript').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'getEventOriginalParams').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'resetArnElementAttribute').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'retreiveDestinationValueToPrePopulateInput').mockImplementation(() => 'Austin, TX');
        jest.spyOn(Autocomplete.prototype, 'removeCitySearchForEvent').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'sumbitListener').mockImplementation(() => true);

        // Submit mocks
        jest.spyOn(Autocomplete.prototype, 'appendParamsToURL').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'getDropdownValue').mockImplementation(() => '1');
        jest.spyOn(Autocomplete.prototype, 'getFilters').mockImplementation(() => 'Airport Shuttle');
        jest.spyOn(Autocomplete.prototype, 'getOptionalHotelName').mockImplementation(() => 'Hilton');

        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279"><form id="searchForm"><input type="search" id="address-input" placeholder="Destination" required="true" value=""><input id="theOtherSubmitButton" style="cursor:hand;cursor:pointer;" value="Search" type="submit" class="submit"><input type="search" id="theCheckIn" value="2/3/2020"><input type="search" id="theCheckOut" value="2/4/2020"></form>`;

        const new_autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
                site_type: 'lodging',
            },
            'search-results'
        );
        new_autocomplete.constructUrl(event2, stay_data);
        expect(new_autocomplete.appendParamsToURL).toBeCalledTimes(2);
    });
});

/* - - - - - - submitListener - - - - - -*/

describe('submitListener', () => {
    beforeAll(() => {
        document.body.innerHTML = ``;
    });

    afterAll(() => {
        jest.restoreAllMocks();
        document.body.innerHTML = ``;
    });

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('Calls constructUrl() on submit', () => {
        jest.spyOn(Autocomplete.prototype, 'setDateFormat').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'constructUrl').mockImplementation(() => true);

        document.body.innerHTML = `<form id="searchForm"><input type="search" id="address-input" placeholder="Destination" required="true" value=""><input id="theOtherSubmitButton" style="cursor:hand;cursor:pointer;" value="Search" type="submit" class="submit"><input type="search" id="theCheckIn" value="2/3/2020"><input type="search" id="theCheckOut" value="2/4/2020"></form>`;

        autocomplete.sumbitListener('form#searchForm', 'submit');
        document.getElementById('searchForm').submit();

        expect(autocomplete.constructUrl).toBeCalledTimes(1);
    });
});
