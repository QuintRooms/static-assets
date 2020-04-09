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

function hideArnSearchElement() {
  if (document.querySelector(".SearchHotels")) {
    // Hide tabs
    document.querySelector(".ArnGoCitySearch").style.display = "none";
    document.querySelector("div.ArnSearchHotelsImg+br").style.display = "none";
    document.querySelector(".ArnGoLandmarkSearch").style.display = "none";
    document.querySelector(".ArnGoAirportSearch").style.display = "none";
    document.querySelector("div#HotelNameContainer").style.display = "none";
    document.querySelector('input#theCheckIn').required = true;
    // Hide green event marker if there is no event
    jQuery("#theBody").on("arnMapLoadedEvent", () => {
      if (!searchParams.has("locationlabel") || !searchParams.has("points")) {
        document.querySelector("img.arn-green-marker-icon").style.display =
          "none";
      }
    });
  }

  // Remove ARN search bar
  if (document.querySelector("input#city")) {
    document.querySelector("input#city").remove();
  }

  // Insert new search bar
  document.querySelector(".RootBody")
    ? document.querySelector("div#CitySearchContainer span").insertAdjacentHTML(
        "beforeend",
        `
        <input type="search" id="address-input" placeholder="Destination" required="true" />
    `
      )
    : document.querySelector("div#theSearchBox").insertAdjacentHTML(
        "afterbegin",
        `
        <span>City Search:</span>
        <input type="search" id="address-input" placeholder="Destination" required="true"  />
    `
      );

  // On .SearchHotels page, pre-populate destination to input and clear on click
  if (document.querySelector(".SearchHotels")) {
    let destination = searchParams.get("destination");
    let algolia_input = document.querySelector("input#address-input");
    algolia_input.value = destination;

    algolia_input.addEventListener("click", function() {
      algolia_input.value = "";
    });
  }

  // function
  let rooms_value = document.querySelector(
    'select#rooms option[selected="selected"]'
  ).textContent;

  let adults_value = document.querySelector(
    'select#adults option[selected="selected"]'
  ).textContent;

  // Set index for rooms and adults dropdowns & define vars for adults/rooms
  let rooms_dropdown = document.querySelector("select#rooms");

  rooms_dropdown.addEventListener("change", function() {
    for (let i = 0; i < rooms_dropdown.length; i++) {
      if (rooms_dropdown[i].selected) {
        rooms_dropdown.selectedIndex = i;
        rooms_value = rooms_dropdown[i].textContent;
        break;
      }
    }
  });

  let adults_dropdown = document.querySelector("select#adults");

  adults_dropdown.addEventListener("change", function() {
    for (let i = 0; i < adults_dropdown.length; i++) {
      if (adults_dropdown[i].selected) {
        adults_dropdown.selectedIndex = i;
        adults_value = adults_dropdown[i].textContent;
        break;
      }
    }
  });

  // clears out ARN's onClick functionality
  let arn_submit_btn = document.querySelector("input#theSubmitButton");
  arn_submit_btn.setAttribute("onClick", "");

  document
    .querySelector("form#searchForm")
    .addEventListener("submit", function(e) {
      e.preventDefault();

      let destination_value = document.querySelector("input#address-input")
        .value;

      // Checkin/checkout calc
      let check_in_value = document.querySelector("input#theCheckIn").value;
      let check_out_value = document.querySelector("input#theCheckOut").value;

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

      let nights = num_nights(check_in_value, check_out_value);

      // dayJs calculation
      //   let date1 = dayjs(document.querySelector("input#theCheckIn").value);
      //   let date2 = dayjs(document.querySelector("input#theCheckOut").value);
      //   let nights = date1.diff(date2, 'day');

      if (lat_lng) {
        url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=60188&longitude=${lat_lng.lng}&latitude=${lat_lng.lat}&radius=${config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
      } else {
        let lng = searchParams.get("longitude");
        let lat = searchParams.get("latitude");

        url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=60188&longitude=${lng}&latitude=${lat}&radius=${config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
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
