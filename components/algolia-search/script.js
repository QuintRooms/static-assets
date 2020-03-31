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

function hideArnSearchElement() {
    if (document.querySelector(".SearchHotels")) {
        // Hide tabs
        document.querySelector(".ArnGoCitySearch").style.display = "none";
        document.querySelector("div.ArnSearchHotelsImg+br").style.display = "none";
        document.querySelector(".ArnGoLandmarkSearch").style.display = "none";
        document.querySelector(".ArnGoAirportSearch").style.display = "none";
        document.querySelector("div#HotelNameContainer").style.display = "none";
    }

    // Hide ARN search bar
    if (document.querySelector("input#city")) document.querySelector("input#city").style.display = 'none';

    // Insert new search bar in html differently for RootBody vs .SearchHotels
    document.querySelector(".RootBody") ?
        document.querySelector("div#CitySearchContainer span").insertAdjacentHTML("beforeend",
            `<input type="search" id="address-input" placeholder="Destination" />`) 
        :
        document.querySelector("div#theSearchBox").insertAdjacentHTML("afterbegin",
          `<span>City Search:</span>
          <input type="search" id="address-input" placeholder="Destination" />`);
}

hideArnSearchElement();

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
        document.querySelector('input#city').value = e.suggestion.name + ', ' + e.suggestion.administrative || "";
    });

})();