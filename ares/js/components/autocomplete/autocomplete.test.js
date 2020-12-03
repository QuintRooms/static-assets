import Autocomplete from './autocomplete';

const autocomplete = new Autocomplete(
    {
        site_id: '60279',
        directory_name: 'ares_child',
    },
    'landing-page'
);

describe('insertAutocompleteToBody', () => {
    it('Updates the body with the Google Autocomplete script before end', () => {
        document.body.innerHTML = `
        <h1>This is a test</h1>`;

        const new_html = `
        <h1>This is a test</h1><script>
        function init() {
            const options = {
                types: ['(cities)']
            };
            const input = document.getElementById('input#address-input');
            const autocomplete = new google.maps.places.Autocomplete(input);
        }
        google.maps.event.addDomListener(window, 'load', init);
    </script>`;
        autocomplete.insertAutocompleteToBody();
        expect(document.body.innerHTML).toEqual(new_html);
    });
});
