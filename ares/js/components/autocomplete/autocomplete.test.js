import Autocomplete from './autocomplete';

const autocomplete = new Autocomplete(
    {
        site_id: '60279',
        directory_name: 'ares_child',
    },
    'landing-page'
);

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
