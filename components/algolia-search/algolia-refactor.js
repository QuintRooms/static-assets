let config = {
    algolia_app_id: "plETUR94AASH",
    algolia_api_key: "7bf688b47ae81044d05d094f0487df08",
    currency: "USD",
    distance_unit: "useMiles",
    map_size: "12",
    radius: "50",
    ap_suggestion_background_color: "#fff",
    ap_suggestion_hint_background_color: "#f5f5f5",
    ap_suggestion_text_color: "#333",
    ap_suggestion_hint_text_color: "#333"
};

let lat_lng;
let url;
let origin = window.location.origin;
let params = new URL(window.location.href);
let searchParams = new URLSearchParams(params.search);

function setInputToRequired(selector){
  if(!document.querySelector(selector) || !document.querySelector('.SearchHotels')) return;

  document.querySelector(selector).required = true;
}

function hideArnSearchElements(selectors) {
    if (!document.querySelector('.SearchHotels')) return;
    let elements = document.querySelectorAll(selectors);

    elements.forEach((element) => {
        element.style.display = 'none';
    });
}

function removeArnSearchBar(selector) {
    if (!document.querySelector(selector)) return;

    document.querySelector(selector).remove();
}

function insertAlgoliaSearch(page, selector, adjacent_location, html) {
    if (!document.querySelector(page)) return;

    document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
}

function prepopulateDestinationInputOnSearchHotels() {
    if (!document.querySelector('.SearchHotels')) return;

    let destination = searchParams.get('destination');
    let algolia_input = document.querySelector('input#address-input');
    algolia_input.value = destination;

    algolia_input.addEventListener('click', function() {
        algolia_input.value = '';
    });
}

function setDropdownIndex(dropdown_selector) {
    let dropdown = document.querySelector(dropdown_selector);
    let value = dropdown.querySelector('option[selected="selected"]');

    dropdown.addEventListener('change', function() {
        for (let i = 0; i < dropdown.length; i++) {
            if (dropdown[i].selected) {
                dropdown.selectedIndex = i;
                value = dropdown[i].textContent;
                break;
            }
        }
    });
}

function calcuateCheckDates() {
    let destination_value = document.querySelector('input#address-input').value;

    // Checkin/checkout calc
    let check_in_value = document.querySelector('input#theCheckIn').value;
    let check_out_value = document.querySelector('input#theCheckOut').value;

    let num_nights = (check_in_value, check_out_value) => {
        let start = new Date(check_in_value);
        let end = new Date(check_out_value);
        let dayCount = 0;
        while (end > start) {
            dayCount++;
            start.setDate(start.getDate() + 1);
        }
        return dayCount;
    };

    return [num_nights(check_in_value, check_out_value), check_in_value];
}

function constructURLOnSubmit() {
    let arn_submit_btn = document.querySelector("input#theSubmitButton");
    arn_submit_btn.setAttribute("onClick", "");

    document.querySelector("form#searchForm").addEventListener("submit", function(e) {
        e.preventDefault();
        let nights = calcuateCheckDates();

        let destination_value = document.querySelector("input#address-input").value;

        if (lat_lng) {
            url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=46460&longitude=${lat_lng.lng}&latitude=${lat_lng.lat}&radius=${config.radius}&checkin=${nights[1]}&nights=${nights[0]}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
        } else {
            let lng = searchParams.get("longitude");
            let lat = searchParams.get("latitude");

            url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=46460&longitude=${lng}&latitude=${lat}&radius=${config.radius}&checkin=${nights[1]}&nights=${nights[0]}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
        }

        if (document.querySelector(".RootBody")) {
            if (!validateSubmitOptions()) return false;
            $("theBody").addClassName("searchingForResults");
            doPushPagePrep();
            $("theArnPushPage").show();
            $("theArnPushPageContent").show();
        }

        window.location.href = url;
    });
}


insertAlgoliaSearch('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
insertAlgoliaSearch('.SearchHotels', 'div#theSearchBox', 'afterBegin', '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />');
removeArnSearchBar('input#city');
prepopulateDestinationInputOnSearchHotels();
setDropdownIndex('select#rooms');
setDropdownIndex('select#adults');
setInputToRequired('input#theCheckIn');

jQuery('#theBody').on('arnMapLoadedEvent', () => {
    if (searchParams.has('locationlabel') || searchParams.has('points')) return;
    hideArnSearchElements('img.arn-green-marker-icon');
});

hideArnSearchElements('.ArnGoCitySearch, div.ArnSearchHotelsImg+br, .ArnGoLandmarkSearch, .ArnGoAirportSearch, div#HotelNameContainer');
constructURLOnSubmit();

(function() {
    var placesAutocomplete = places({
        appId: config.algolia_app_id,
        apiKey: config.algolia_api_key,
        container: document.querySelector("input#address-input")
    }).configure({
        aroundLatLngViaIP: "false",
        type: "city"
    });
    placesAutocomplete.on("change", function resultSelected(e) {
        document.querySelector("input#address-input").value =
            e.suggestion.value || "";
        lat_lng = e.suggestion.latlng;
    });
})();