let config = {
    "algolia_app_id": "plETUR94AASH",
    "algolia_api_key": "7bf688b47ae81044d05d094f0487df08",
    "currency": "USD",
    "distance_unit": "useMiles",
    "map_size": "12",
    "radius": "50",
    "dropdown_color": ""
}

let lat_lng;
let origin = window.location.origin;

function hideArnSearchElement(){

    if(document.querySelector('.SearchHotels')){
        // Hide tabs
        document.querySelector('.ArnGoCitySearch').style.display = 'none';
        document.querySelector('div.ArnSearchHotelsImg+br').style.display = 'none';
        document.querySelector('.ArnGoLandmarkSearch').style.display = 'none';
        document.querySelector('.ArnGoAirportSearch').style.display = 'none';
        document.querySelector('div#HotelNameContainer').style.display = 'none';
    }; 
    
    // Remove ARN search bar
    if( document.querySelector('input#city')){
        document.querySelector('input#city').remove();
        // document.querySelector('div#CitySearchContainer').remove();
    }

    // Insert new search bar
    document.querySelector('.RootBody') ?
        document.querySelector('div#CitySearchContainer span').insertAdjacentHTML('beforeend', `
        <input type="search" id="address-input" placeholder="Destination" />
    `
        ) :
    document.querySelector('div#theSearchBox').insertAdjacentHTML('afterbegin', `
        <span>City Search:</span>
        <input type="search" id="address-input" placeholder="Destination" />
    `
    );

    document.querySelector('form#searchForm')
    .addEventListener('submit', function(e){
        e.preventDefault();
        // arn_input.style.display = 'none';
        // arn_input.disabled = 'true';

        let destination_value = document.querySelector('input#address-input').value;
        console.log('destination_value:' + destination_value)

        let rooms_value = document.querySelector('select#rooms option[selected="selected"]').textContent;
        console.log('rooms_value:' + rooms_value);

        let adults_value = document.querySelector('select#adults option[selected="selected"]').textContent;
        console.log('adults value:' + adults_value);
        // adults_value.style.marginTop = '1px';

        // Checkin/checkout calc
        let check_in_value = document.querySelector('input#theCheckIn').value;
        console.log('check in value:' + check_in_value);
        let check_out_value = document.querySelector('input#theCheckOut').value;
        console.log('check_out_value:' + check_out_value);

        let num_nights = (check_in_value, check_out_value) => {
            let start = new Date(check_in_value);
            let end = new Date(check_out_value);
            let dayCount = 0;
          
            while (end > start) {
              dayCount++
              start.setDate(start.getDate() + 1);
            };
            return dayCount
          }
          let nights = num_nights(check_in_value, check_out_value);

          let url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=60188&longitude=${lat_lng.lng}&latitude=${lat_lng.lat}&radius=${config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}`
      
          window.location.href = url;
          console.log(url)
    })
    
}

hideArnSearchElement();

(function() {
    var placesAutocomplete = places({
      appId: config.algolia_app_id,
      apiKey: config.algolia_api_key,
      container: document.querySelector("input#address-input"),
    }).configure({
      aroundLatLngViaIP: "false",
      type: "city",
    });
    placesAutocomplete.on("change", function resultSelected(e) {
        document.querySelector("input#address-input").value = e.suggestion.value || '';
        lat_lng = e.suggestion.latlng;
    });
  })();


//   autoselectOnBlur: "true" /* for mobile only */

/* - - - -  Class names for Algolia dropdown - - - - - 

.algolia-autocomplete {
    width: 100%;
  }
  .algolia-autocomplete .aa-input, .algolia-autocomplete .aa-hint {
    width: 100%;
  }
  .algolia-autocomplete .aa-hint {
    color: #999;
  }
  .algolia-autocomplete .aa-dropdown-menu {
    width: 100%;
    background-color: #fff;
    border: 1px solid #999;
    border-top: none;
  }
  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion {
    cursor: pointer;
    padding: 5px 4px;
  }
  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion.aa-cursor {
    background-color: #B2D7FF;
  }
  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion em {
    font-weight: bold;
    font-style: normal;
  }

  */
