import NoLRGPortal from "../../../js/portal-setup.js";

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription(
  ".RoomDescription",
  "Hotels for Hope Exclusive Rates"
);

jQuery(document).on("ratesReadyEvent", function() {
  setTimeout(function() {
    noLRGPortal.ratesReadyEventMethods();
    noLRGPortal.updateText(".event-rate", "Exclusive Rates");
  }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
  let element = document.querySelector(elementWaitingFor);
  let config = { attributes: false, childList: true, subtree: false };

  function callback(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        noLRGPortal.updateAttribute(
          ".logo img",
          "https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/logo.png",
          "src"
        );
        noLRGPortal.updateAttribute(
          ".logo",
          "https://www.hotelsforhope.com/",
          "href"
        );
        observer.disconnect();
      }
    }
  }
  let observer = new MutationObserver(callback);
  observer.observe(element, config);
}

waitForElementToLoad("header");

document
  .querySelector("body")
  .insertAdjacentHTML(
    "beforeEnd",
    '<link rel="stylesheet" type="text/css" href="https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/60188.css">'
  );

noLRGPortal.updateAttribute(
  ".RootBody",
  "background-image: url(https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/banner.png)",
  "style"
);

/* - - - - -  Image slideshow gallery - - - - - */

function replaceImageSlideshow() {
  document.querySelector(".ArnPhotoContainer").style.display = "none";

  let propId = document.querySelector('meta[name="aPropertyId"]').content;
  let counter = 0;
  let propImages;
  let carouselImages;

  async function getPropImages() {
    try {
      let data = await fetch(
        `https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h_2025&password=0Ba7R3wI{f7_|I9H&propertyid=${propId}`,
        {
          method: "GET"
        }
      ).then(response => response.json());
      return data.Images.map(e => e.ImagePath.replace(/_300/, "_804480"));
    } catch (error) {
      console.log(error);
    }
  }

  async function createPropImageSlideshow() {
    propImages = await getPropImages();
    document.querySelector(".PropertyLinks").insertAdjacentHTML(
      "afterend",
      `<div class="carousel-container">
          <div class="carousel-slide">
          </div>
          <a id="previousBtn">&#10094;</a>
          <a id="nextBtn">&#10095;</a>
      </div>`
    );
    populateImages();
  }

  function populateImages() {
    carouselImages = document.querySelectorAll(".carousel-slide img");
    for (let i = counter === 0 ? counter : counter + 2; i < counter + 5; i++) {
      if (i === propImages.length) return;
      document.querySelector(".carousel-slide").insertAdjacentHTML(
        "beforeend",
        `<div class="image-wrapper">
          <div class ="image-number">${i + 1}/${propImages.length}</div>
          <img src=${propImages[i]}>
        </div>`
      );
    }
  }

  async function createCarousel() {
    await createPropImageSlideshow();

    let carouselSlide = document.querySelector(".carousel-slide");
    const previousBtn = document.querySelector("#previousBtn");
    const nextBtn = document.querySelector("#nextBtn");

    nextBtn.addEventListener("click", () => {
      carouselImages = document.querySelectorAll(".carousel-slide img");
      if (counter === carouselImages.length - 1) return;
      counter++;
      let size = carouselImages[counter].clientWidth;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      if (counter === carouselImages.length - 2) {
        populateImages();
      }
    });

    previousBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      counter--;
      let size = carouselImages[counter].clientWidth;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });
  }

  createCarousel();
}

if (document.querySelector(".SinglePropDetail")) {
  replaceImageSlideshow();
}

/* - - - - - Algolia search - - - - - */

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
let site_id = searchParams.get("siteid");

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
  let value = dropdown.querySelector(`option[value="${dropdown.value}"]`).textContent;
  
  dropdown.addEventListener('change', function() {
      for (let i = 0; i < dropdown.length; i++) {
          if (dropdown[i].selected) {
              dropdown.selectedIndex = i;
              value = dropdown[i].textContent;
              break;
          }
      }
      return value;
  });
  return value;
}

function calcuateCheckDates(check_in_value, check_out_value) {    
  let start = new Date(check_in_value);
  let end = new Date(check_out_value);
  let dayCount = 0;
  while (end > start) {
      dayCount++;
      start.setDate(start.getDate() + 1);
  }
  return dayCount;
}

function constructURLOnSubmit() {
  let arn_submit_btn = document.querySelector("input#theSubmitButton");
  arn_submit_btn.setAttribute("onClick", "");

  document.querySelector("form#searchForm").addEventListener("submit", function(e) {
      e.preventDefault();

      let check_in_value = document.querySelector('input#theCheckIn').value;
      let check_out_value = document.querySelector('input#theCheckOut').value;
      let rooms_value = setDropdownIndex('select#rooms');
      let adults_value = setDropdownIndex('select#adults');
      let nights = calcuateCheckDates(check_in_value, check_out_value);
      let destination_value = document.querySelector("input#address-input").value;

      if (lat_lng) {
          url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=${site_id}&longitude=${lat_lng.lng}&latitude=${lat_lng.lat}&radius=${config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
      } else {
          let lng = searchParams.get("longitude");
          let lat = searchParams.get("latitude");

          url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=${site_id}&longitude=${lng}&latitude=${lat}&radius=${config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
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

