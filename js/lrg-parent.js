// IE 11 forEach Polyfill
if ('NodeList' in window && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

function updateAttribute(attribute, argument, selector) {
    let arr = document.querySelectorAll(selector);
    arr.forEach(function(element, index) {
        element.setAttribute(attribute, argument);
    });
}

updateAttribute('href', 'https://www.iubenda.com/privacy-policy/24896936', '.privacyLink');
updateAttribute('class', 'iubenda-nostyle no-brand iubenda-embed', '.privacyLink');

function addCustomTag(text, propId) {
    if (document.querySelector('#theArnProperty' + propId + ' .ArnPropThumb > .customTag')) {} else if (document.querySelector('#theArnProperty' + propId)) {
        let propertyThumbnail = document.querySelector('#theArnProperty' + propId + ' .ArnPropThumb');
        propertyThumbnail.insertAdjacentHTML('afterbegin', '<div class="customTag">' + text + '</div>');
    }
}

// runs on ratesReadyEvent
function eventRateProp() {
    let eventProp = document.querySelectorAll('.SearchHotels .OnSale');
    eventProp.forEach(function(element, index) {
        let percentSavings = element.querySelector('.percentSavings').textContent;
        let yourSavings = element.querySelector('.creditsValue').textContent;
        let sponsoredContainer = element.querySelector('.ArnContainerSponsored');
        let containerRanked = element.querySelector('.ArnContainerRanked');
        if (sponsoredContainer || containerRanked) {
            element.insertAdjacentHTML('afterBegin', '<div class="sash"><span class="event-rate">Lowest Rate Guarantee <span class="hoverTooltip">i</span><div class="tooltipContainer"><span class="tooltipClose">X</span><p>This rate is protected by our Lowest Rate Guarantee. Find a lower rate and our partners at Hotels for Hope will not only match it, but will throw in an extra $10. <br><a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=51107&theme=standard" target="_blank" class="tooltipLink">Learn more</a></p></div><div class="svg-container"><div class="triangle-bottomright"></div><svg class="svg-badge" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-38 0 512 512.00142"> <g> <path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " style=" stroke:none;fill-rule:nonzero;fill:rgb(255,255,255);fill-opacity:1;"/> </g> </svg> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg"> <path class="checkmark__check" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" d="M8 14l4 4 8-9"/></svg> </div></span><span class="percent-off">' + percentSavings + ' <span class="yourSavings">(Save ' + yourSavings + ')</span></span></div>');
        }
    });
}

function singlePropDetailLRGTag() {
    let singlePropLRG = document.querySelectorAll('.SinglePropDetail .SB16 .ArnNightlyRate');
    singlePropLRG.forEach(function(element) {
        if (element) {
            element.insertAdjacentHTML('afterbegin', '<div class="exclusiveRate"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-38 0 512 512.00142"><g id="surface1"><path d="M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"/><path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"/></g></svg>&nbsp;Lowest Rate Guarantee <span class="hoverTooltip">i</span><div class="tooltipContainer"><span class="tooltipClose">X</span><p>This rate is protected by our Lowest Rate Guarantee. Find a lower rate and our partners at Hotels for Hope will not only match it, but will throw in an extra $10. <br><a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=50055&theme=standard" target="_blank" class="tooltipLink">Learn more</a></p></div></div>');
        }
    });
}

function updateText(selector, text) {
    let classList = document.querySelectorAll(selector);
    classList.forEach(function(element, index) {
        element.textContent = text;
    });
}
updateText('.lowRateLink', 'Lowest Rate Guarantee');

function updateHTML(selector, html) {
    let classList = document.querySelectorAll(selector);
    if (classList) {
        classList.forEach(function(element, index) {
            element.innerHTML = html;
        });
    }
}

function appendToParent(childSelector, parentSelector) {
    let childElement = document.querySelector(childSelector);
    let parentElement = document.querySelector(parentSelector);

    if (childElement && parentElement) {
        parentElement.appendChild(childElement);
    }
}
appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
appendToParent('.lrgTipContainer', '#theDatePrompt');

function accordion(openElement, contentElement) {
    let content = document.querySelector(contentElement);
    let open = document.querySelector(openElement);
    if (open && content) {
        content.classList.add('hideAccordion');
        open.addEventListener('click', function() {
            content.classList.toggle('hideAccordion');
        });
    }
}
accordion('.PropertyAmenities legend', '.ArnAmenityContainer');

function replaceText(selector, textToReplace, replaceWith) {
    let str = document.querySelector(selector);
    if (str) {
        str.textContent = str.textContent.replace(textToReplace, replaceWith);
    }
}

let searchHotels = document.querySelector('body.SearchHotels');
if (searchHotels) {
    searchHotels.insertAdjacentHTML('beforeend', '<div class="openMapBtn"></div>');
    document.querySelector('.openMapBtn').addEventListener('click', openMap);
}

function openMap() {
    let map = document.querySelector('.ArnRightExtraContainer');
    let mapBtn = document.querySelector('.openMapBtn');
    mapBtn.classList.toggle('closeMapBtn');
    map.classList.toggle('showMap');
}

function setLowestRateURL() {
    let tooltipURL = document.querySelector('.tooltipLink');
    let siteId = document.querySelector('meta[name="siteId"]').getAttribute('content');
    tooltipURL.setAttribute('href', 'https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=' + siteId + '&theme=standard');
}

// runs on rateReadyEvent
function roomCountThreshhold() {
    let count = document.querySelectorAll('.roomCount strong');
    count.forEach(function(element, index) {
        let number = element.textContent;
        if (number > 5) {
            element.parentNode.style.display = 'none';
        }
    });
}

// runs on ratesReadyEvent
function removeBuggedReviews() {
    if (document.querySelector('.SearchHotels')) {
        let buggedReview = document.querySelectorAll('.ratingCount');
        buggedReview.forEach(function(element, index) {
            if (element.textContent == '-7.92281625142644e28') {
                element.style.display = 'none';
            }
        });
    }
}

// runs on rateReadyEvent
function collapseSearchBy(openSelector, collapsedSelector) {
    if (document.querySelector('.SearchHotels')) {
        let arr = document.querySelectorAll(collapsedSelector);
        arr.forEach(function(element, index) {
            element.style.display = 'none';
        });
        document.querySelector(openSelector).style.display = 'block';
    }
}

function loadExternalHTML(fileURL, classOfPageToAddFile, idOfContentToReplace, successFunction) {
    if (classOfPageToAddFile) {
        new Ajax.Updater(idOfContentToReplace, fileURL, { onComplete: successFunction });
    }
}

function rateGuaranteePage() {
    let eventRateGuarantee = document.querySelector('body.WBRateGuaranteeForm2');
    if (eventRateGuarantee) {
        document.querySelector('.WBRateGuaranteeForm > h1').textContent = 'Meet the Lowest Rate Guarantee';
        document.title = 'Lowest Rate Guarantee';
    }
}
rateGuaranteePage();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        roomCountThreshhold();
        removeBuggedReviews();

        replaceText('.ArnAcdParentLable', '- 0 Children', '');
        replaceText('.ArnAcdParentLable', 'Adults', 'Guests');
        replaceText('.ArnAcdAdultsContainer > .ArnAcdSpan', 'Adults', 'Guests');

        updateText('.ArnShowRatesLink', 'Book Rooms');
        updateText('a.bookRoom', 'Book Rooms');
        updateText('a.holdRoom', 'Hold Rooms');

        collapseSearchBy('.lblNearbyCities', '.lblNearbyCities + select');
        collapseSearchBy('.lblCurrency', '.lblCurrency + select');
        collapseSearchBy('.lblAmenities', '#AmentitiesContainer .ArnSearchField div');
        collapseSearchBy('.lblPropertyType', '#PropertyTypesContainer .ArnSearchField div');
        collapseSearchBy('.lblRating', '#PropertyClassesContainer .ArnSearchField div');

        if (document.querySelector('.SearchHotels .ArnPropName div.originalPrice span')) {
            document.querySelector('.SearchHotels .ArnPropName div.originalPrice span').style.textAlign = 'left';
            document.querySelector('.SearchHotels .ArnPropName div.originalPrice span').style.textAlign = 'center';
            eventRateProp();
        }

        if (window.matchMedia("(max-width: 800px)" && document.querySelector('.OptionsPricing')).matches) {
            document.querySelector('.OptionsPricing a').textContent = 'Rooms';
        }

    }, 1);
    singlePropDetailLRGTag();
});

function roomFundingConfirmation() {
    var nights = jQuery('.numberOfNights th').text();
    var nightsSplit = nights.split(" ");
    var nightsNum = nightsSplit[0];
    var roomFundingDonation = nightsNum * 2;
    var roomFundingText = "Your reservation just generated an <span style='color:#9C6AAD'>$" + roomFundingDonation + " donation</span> to <span style='color:#9C6AAD'>RoomFunding</span>.  And that's at no cost to you.";
    jQuery('.topRoomFunding').html(roomFundingText);
}

function savingsTag() {
    var savings = jQuery('.savings td').text()
    savingsShort = savings.split(' ');
    if (jQuery('body').hasClass('ConfirmationForm')) {
        savingsTopText = "You Saved $" + savingsShort[0];
        jQuery('.confirmationTopSavings').html(savingsTopText);
        jQuery('.confirmationSavings').addClass('show');
    } else if (jQuery('body').hasClass('CheckOutForm')) {
        savingsText = "<span class='font1'>Well done, friend! <b>You’re saving $" + savingsShort[0] + "</b> by booking today. </span><span class='font2'>[Tip: book now…before these rates are gone.]</span>";
        jQuery('.CheckOutForm .hurryBook').insertBefore(jQuery('.CheckOutForm #theReservationForm'));
        jQuery('.hurryBook').css('display', 'block');
    }
}

// Update room description to say event name instead of 'Special Event Rate'
function updateRoomDescription(selector, text) {
    if (document.querySelector('.SinglePropDetail')) {
        var original = document.querySelectorAll(selector);
        original.forEach(function(element, index) {
            var rateDate = document.querySelector('.ArnRateFromTo');
            element.removeChild(rateDate);
            var updated = element.innerHTML.replace('Special Event Rate', '<span style="font-weight:bold; color:#111; font-size: 17px;">' + text + '</span>');
            element.innerHTML = updated;
        });
    }
}

jQuery(document).ready(function() {
    jQuery(".WBSupportForm .ArnSupportChatTable p:first").replaceWith("If you would like to speak with a representative, please call <b>512-691-9555</b></br>");
    jQuery(".WBSupportForm.ArnSubPage .ArnSupportChatTable tbody tr td:first-child div:nth-child(4)").replaceWith("Call Center Weekday Hours: 8:00 AM - 5:30 PM CST");
    jQuery('.ConfirmationForm .confirmMessageContainer.desktopVersion').appendTo(jQuery('.ConfirmationForm .GuestForms').last());
    jQuery('.ConfirmationForm .confirmMessageContainer.mobileVersion').appendTo(jQuery('.ConfirmationForm .PaymentPolicies').last());
    jQuery('.ConfirmationForm .meetH4H.desktopVersion').appendTo(jQuery('.ConfirmationForm .GuestForms').last());
    jQuery('.ConfirmationForm .meetH4H.mobileVersion').appendTo(jQuery('.ConfirmationForm .PaymentPolicies').last());
});

jQuery(window).load(function() {
    savingsTag();
    roomFundingConfirmation();
    document.querySelector('.ArnSupportBottom .supportLink').insertAdjacentHTML('beforebegin', '<a href="https://www.iubenda.com/privacy-policy/24896936/cookie-policy" class="iubenda-nostyle no-brand iubenda-embed"><span>Cookies Policy</span></a><span class="dvd"> | </span>');
});

//Fav icon
jQuery('head').append('<link rel="shortcut icon" href="/appSkins/25729/v6/themes/standard/images/H4Hfavicon2.ico?v=4" />');