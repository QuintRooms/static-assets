import Autocomplete from './autocomplete';

document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

const autocomplete = new Autocomplete(
    {
        site_id: '60279',
        directory_name: 'ares_child',
        distance_unit: 'useMiles',
    },
    'landing-page'
);

describe('Constructor sets property values', () => {
    it('Sets the value of site_config', () => {
        expect(autocomplete.site_config).toEqual(expect.objectContaining({site_id: '60279', directory_name: 'ares_child', distance_unit: 'useMiles'}));
    });
    it('Sets the value of page_name to landing-page', () => {
        expect(autocomplete.page_name).toEqual('landing-page');
    });
    it('Sets the value of latitude to null', () => {
        expect(autocomplete.lat).toBeNull();
    });
    it('Sets the value of longitude null', () => {
        expect(autocomplete.lng).toBeNull();
    });
    it('Sets the value of original_params', () => {
        expect(autocomplete.original_params.toString()).toEqual(
            'siteid=62309&currency=USD&cid=ROCK&useMiles=&checkin=11%2F12%2F21&pageSize=15&mapSize=13&groupid=43285&radius=5&nights=3&latitude=26.10879170000000&map=&longitude=-80.10643370000000&destination=Austin%2C+TX%2C+USA'
        );
    });
});

describe('hideArnSearchInput', () => {
    it('Positions ARN search input off the page and removes the required attribute', () => {
        afterEach(() => {
            document.body.innerHTML = '';
        });

        document.body.innerHTML = `
        <h1 class="RootBody">This is a test</h1>
        <input id="city" required>`;

        const new_html = `
        <h1 class="RootBody">This is a test</h1>
        <input id="city" style="position: absolute; left: -10000px;">`;
        autocomplete.hideArnSearchInput('input#city');
        expect(document.body.innerHTML).toEqual(new_html);
    });
});

describe('insertNewSearchInput', () => {
    afterEach(() => {
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
            '.RootBody',
            'div#CitySearchContainer span',
            'beforeEnd',
            '<input type="search" id="address-input" placeholder="Destination" required="true">'
        );
        expect(document.body.innerHTML).toEqual(new_html);
    });
});

describe('setAttribute', () => {
    it('Sets an onClick attribute to and empty string', () => {
        afterEach(() => {
            document.body.innerHTML = '';
        });
    });
    document.body.innerHTML = `<input id="theSubmitButton" onclick="$('theBody').addClassName('searchingForResults');doPushPagePrep();$('theArnPushPage').show();$('theArnPushPageContent').show()">`;

    autocomplete.setAttribute('input#theSubmitButton', 'onClick', '');
    expect(document.body.innerHTML).toEqual(`<input id="theSubmitButton" onclick="">`);
});

describe('getDestination', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('Returns the destination string from the input', () => {
        document.body.innerHTML = `<meta name="original_params" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination="Austin, TX, USA"><input type="search" id="address-input" placeholder="Destination" required="true" value="Austin, TX, USA">
        `;
        expect(autocomplete.getDestination('input#address-input')).toEqual('Austin, TX, USA');
    });

    it('Sets destination if it exists in Original Params', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        expect(autocomplete.getDestination('input#address-input')).toEqual('Austin, TX, USA');
    });
});
