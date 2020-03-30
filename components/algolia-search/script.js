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
let origin = window.location.origin;

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
  if (document.querySelector("input#city")) {
    document.querySelector("input#city").style.display = 'none';
  }

  // Insert new search bar in html differently for RootBody vs .SearchHotels
  document.querySelector(".RootBody")
    ? document.querySelector("div#CitySearchContainer span").insertAdjacentHTML(
        "beforeend",
        `
        <input type="search" id="address-input" placeholder="Destination" />
    `
      )
    : document.querySelector("div#theSearchBox").insertAdjacentHTML(
        "afterbegin",
        `
        <span>City Search:</span>
        <input type="search" id="address-input" placeholder="Destination" />
    `
      );

  document
    .querySelector("form#searchForm")
    .addEventListener("submit", function(e) {
      e.preventDefault();

      let arn_city_input = document.querySelector('div#CitySearchContainer')
      let destination_value = document.querySelector("input#address-input")
        .value;
        arn_city_input.value = destination_value;

      // let rooms_value = document.querySelector(
      //   'select#rooms option[selected="selected"]'
      // ).textContent;

      // let adults_value = document.querySelector(
      //   'select#adults option[selected="selected"]'
      // ).textContent;

      // Checkin/checkout calc
      // let check_in_value = document.querySelector("input#theCheckIn").value;
      // let check_out_value = document.querySelector("input#theCheckOut").value;

      // dayJs calculation
      //   let date1 = dayjs(document.querySelector("input#theCheckIn").value);
      //   let date2 = dayjs(document.querySelector("input#theCheckOut").value);
      //   let nights = date1.diff(date2, 'day');

      // If using Day Js plugin, remove following nights calculation
      // let num_nights = (check_in_value, check_out_value) => {
      //   let start = new Date(check_in_value);
      //   let end = new Date(check_out_value);
      //   let dayCount = 0;

      //   while (end > start) {
      //     dayCount++;
      //     start.setDate(start.getDate() + 1);
      //   }
      //   return dayCount;
      // };
      // let nights = num_nights(check_in_value, check_out_value);

      // let url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=60188&longitude=${lat_lng.lng}&latitude=${lat_lng.lat}&radius=${config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}`;

      

      // window.location.href = url;
    });
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
    document.querySelector("input#address-input").value =
      e.suggestion.value || "";
    lat_lng = e.suggestion.latlng;
  });
})();

//   autoselectOnBlur: "true" /* for mobile only */




