class Event {

    constructor(params, venueName, unit, from_lat, from_long) {
        this.params = [];
        this.venueName = venueName;
        this.unit = unit;
        this.from_lat = from_lat;
        this.from_long = from_long;

        this.init();
    }

    init() {
        this.getFromLatLong();
        this.getVenueName();
        this.getUnit();
    }

    getFromLatLong() {
        this.from_lat = document.querySelector('meta[name="aLatitude"]');
        this.from_long = document.querySelector('meta[name="aLongitude"]');

        if (this.from_lat) {
            this.from_lat = this.from_lat.getAttribute('content');
        }

        if (this.from_long) {
            this.from_long = this.from_long.getAttribute('content');
        }
    }

    async getPropertyLatLong(params) {
        let self = this;
        let property = document.querySelectorAll('.ArnProperty');

        property.forEach(function(element, index) {
            let to_lat = element.getAttribute('latitude');
            to_lat = parseFloat(to_lat);
            to_lat = to_lat.toFixed(4);
            element.setAttribute('latitude', to_lat);

            let to_long = element.getAttribute('longitude');
            to_long = parseFloat(to_long);
            to_long = to_long.toFixed(4);
            element.setAttribute('longitude', to_long);

            if (to_lat && to_long) {
                self.params.push([
                    [self.from_lat, self.from_long],
                    [to_lat, to_long]
                ]);
            }
        });
    }

    getVenueName() {
        this.venueName = document.querySelector('meta[name="SearchLocation"]').getAttribute('content');
    }

    getUnit() {
        let units = document.querySelector('.units').textContent;

        if (units.includes('miles')) {
            this.unit = 'miles';
        }

        if (units.includes('kilometers')) {
            this.unit = 'kilometers';
        }
    }

    async updateDistance() {
        let self = this;
        let distanceElement = document.querySelectorAll('.distanceLabel');

        let interval = 200;
        let promise = Promise.resolve();
        self.params.forEach(function(param) {
            promise = promise.then(function() {
                let url = 'https://distance.hotelsforhope.com?from_lat=' + param[0][0] + '&from_long=' + param[0][1] + '&to_lat=' + param[1][0] + '&to_long=' + param[1][1];

                let response = fetch(url).then((response) => {
                    let data = response.json();
                    return data;
                }).then((data) => {
                    distanceElement.forEach(function(element) {
                        let parent = element.closest('.ArnProperty');
                        if (data['to_lat'] == parent.getAttribute('latitude') && data['to_long'] == parent.getAttribute('longitude')) {
                            if (self.unit == 'miles') {
                                data['mi'] = parseFloat(data['mi']);
                                data['mi'] = data['mi'].toFixed(1);
                                element.textContent = data['mi'] + ' ' + self.unit + ' to ' + self.venueName;
                            }

                            if (self.unit == 'kilometers') {
                                data['km'] = parseFloat(data['km']);
                                data['km'] = data['km'].toFixed(1);
                                element.textContent = data['km'] + ' ' + self.unit + ' to ' + self.venueName;
                            }
                        }
                    });
                }).catch(() => {
                    console.log('There was an error trying to make your request');
                });

                return new Promise(function(resolve) {
                    setTimeout(resolve, interval);
                });
            });
        });
    }
}
let event = new Event();

jQuery(document).on("ratesReadyEvent", function() {
    event.params = [];
    event.getPropertyLatLong().then(() => {
        event.updateDistance();
    });
});