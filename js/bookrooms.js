// IE 11 forEach Polyfill
if ('NodeList' in window && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

jQuery('.top-menu-dynamic').append('<li style="padding:0;"><div id="language" class="languageContainer" style="padding:0;display: inline-block !important;position: relative;right:0;top:9px;"><div id=":0.targetLanguage" style="display: inline;"><select style="text-transform:uppercase !important;font-weight:600; color: #15151e !important;height: initial;" id="language" class="goog-te-combo" onChange="arnChangeTheme(this.value)"><option class="translateMe" selected>Select Language</option><option value="standard">English (United States)</option><option valeu="german">Deutsch (German)</option><option value="indonesia">Bahasa Indonesia (Indonesian)</option><option value="mandarin">普通话 (Mandarin)</option><option value="portuguese">Português (Portuguese)</option><option value="spanish">Español (Spanish)</option><option value="thai">ภาษาไทย (Thai)</option></select></div></div></li>');

jQuery('.top-menu-mobile .nav').append('<li><a><div id="language" class="languageContainer" style="padding:0;display: inline-block !important;position: relative;right:0;top:0;"><div id=":0.targetLanguage" style="display: inline;"><select style="text-transform:uppercase !important;font-weight:600; color: #15151e !important;height: initial;" id="language" class="goog-te-combo" onChange="arnChangeTheme(this.value)"><option class="translateMe" selected>Select Language</option><option value="standard">English (United States)</option><option value="german">Deutsch (German)</option><option value="indonesia">Bahasa Indonesia (Indonesian)</option><option value="mandarin">普通话 (Mandarin)</option><option value="portuguese">Português (Portuguese)</option><option value="spanish">Español (Spanish)</option><option value="thai">ภาษาไทย (Thai)</option></select></div></div></a></li>');

jQuery('a[href="http://bookrooms-staging.hotelsforhope.com/"]').prop('href', 'https://bookrooms.formula1.com/v6');
jQuery('meta[content="http://events.hotelsforhope.com/appSkins/45251/v6/themes/standard/images/F1-Social.png"]').attr('href', 'https://events.hotelsforhope.com/appSkins/45251/v6/themes/standard/images/F1-Social.png');

jQuery('.top-menu-dynamic a').each(function() {
    jQuery(this).attr('target', '_blank');
});

function updateFOWTHeader() {
    // get url parameters and find siteid
    var urlParams = new URLSearchParams(location.search);
    urlParams.has('siteid');
    urlParams.has('siteId');
    var siteIdParam = urlParams.get('siteid');
    var siteIdSubPage = urlParams.get('siteId');

    var fowtSiteIDs = [46985, 46988, 45250, 45248, 45255, 46453, 45259, 45260, 45261, 45262, 45263, 45264, 45265, 45266, 45268, 45267, 45273, 45269, 45270, 45271, 45272, 45274, 45275, 46448, 45259, 45257, 46452];

    for (var i = 0; i < fowtSiteIDs.length; i++) {
        if (siteIdParam == fowtSiteIDs[i]) {
            jQuery('.main-nav').css('background', '#15151e');
            jQuery('.container').first().wrap('<div class="top-menu-bg"></div>');
            jQuery('.top-menu-bg').css('background', '#e10600');
            jQuery('.left-nav, .top-menu-mobile').remove();
            jQuery('.top-menu-dynamic').html('<li>Formula 1 World Travel').css({
                'color': '#fff',
                'font-size': '15px'
            });
            jQuery('a[href="http://bookrooms-staging.hotelsforhope.com/"]').attr('href', 'https://bookrooms.formula1.com/v6/fowt');

        }
        if (siteIdSubPage == fowtSiteIDs[i]) {
            jQuery('.main-nav').css('background', '#15151e');
        }
    }
}
updateFOWTHeader();

// update checkout label verbiage
function updateCheckoutVerbiage(selector, text) {
    document.querySelector(selector).textContent = text;
}
if (document.body.classList.contains('CheckOutForm')) {
    updateCheckoutVerbiage('.confirmationAgreement label', 'I agree to the policies above and the terms and conditions found on this website.');

}

function addPerStayToPrice() {
    if (document.querySelector('.SearchHotels')) {
        let price = document.querySelectorAll('.ArnPriceCell');
        if (document.querySelector('.perStay') == null) {
            price.forEach(function(element) {
                element.insertAdjacentHTML('beforeend', '<div class="perStay" style="font-weight: bold">&nbsp; per stay</div>');
            });
        }
    }
}

// set ordinal
function ordinal(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

function showDatesInListing() {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let checkInDate = document.querySelector('meta[name="checkIn"]').getAttribute('content');
    let checkOutDate = document.querySelector('meta[name="checkOut"]').getAttribute('content');

    checkInDate = new Date(checkInDate);
    checkOutDate = new Date(checkOutDate);

    let perStay = document.querySelectorAll('.ArnEnoughAvailableRooms .perStay');
    if (document.querySelector('.stayDates') == null) {
        perStay.forEach(function(element) {
            element.insertAdjacentHTML('afterend', '<div class="stayDates">(' + days[checkInDate.getUTCDay()] + ' ' + checkInDate.getUTCDate() + '<sup>' + ordinal(checkInDate.getUTCDate) + '</sup>' + ' ' + months[checkInDate.getUTCMonth()] + ' - ' + days[checkOutDate.getUTCDay()] + ' ' + checkOutDate.getUTCDate() + '<sup>' + ordinal(checkOutDate.getUTCDate) + '</sup>' + ' ' + months[checkOutDate.getUTCMonth()] + ')</div>');
        });
    }
}

function addExternalScript(url) {
    let script = document.createElement('script');
    script.setAttribute('src', url);
    document.head.appendChild(script);
}

jQuery(document).on("ratesReadyEvent", function() {
    addPerStayToPrice();
    showDatesInListing();
    addExternalScript('https://static.hotelsforhope.com/js/calculate-distance.js');
});

// google tag manager script to load hotjar
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PVTQ8XV');