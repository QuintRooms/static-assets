// const dayjs = require('dayjs');

export default class Autocomplete {
    constructor(site_config, page_name) {
        this.site_config = site_config;
        this.page_name = page_name;
        // this.utilities = utilities;
    }

    init() {
        this.insertAutocompleteToBody();
    }

    insertAutocompleteToBody() {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<script>
        function init() {
            const options = {
                types: ['(cities)']
            };
            const input = document.getElementById('input#address-input');
            const autocomplete = new google.maps.places.Autocomplete(input);
        }
        google.maps.event.addDomListener(window, 'load', init);
    </script>`
        );
    }
}
