import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'Room Steals');
cugPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/favicon.png', 'href');
cugPortal.updateText('#theMarketingOptInAjax label', 'I want to receive the latest information by email from Room Steals including event reminders, relevant news, surveys, offers, and promotions.');

let ratesReadyCount = 0;
jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        removePercentSavingsUnderThreshhold(5);
        showRatesPerLabel();

        showFullStayTotal('.SearchHotels', '.ArnContainer', '.ArnPriceCell');
        showFullStayTotal('.SinglePropDetail', '.ArnRateList ', '.yourRateAmount');

        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.event-rate', 'Exclusive Rates');

        if (ratesReadyCount === 0) {
            seeMoreRoomsClick();
            ratesReadyCount++;
        }

        document.querySelectorAll(".ArnPropClass").forEach(function(n) {
            var r = n.textContent,
                t = r.replace(/\D/g, ""),
                e = '<svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';
            1 == t && (n.innerHTML = e), 2 == t && (n.innerHTML = e + e), 3 == t && (n.innerHTML = e + e + e), 4 == t && (n.innerHTML = e + e + e + e), 5 == t && (n.innerHTML = e + e + e + e + e)
        })
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (document.querySelector('#AdminControlsContainer')) {
                    document.querySelector('#AdminControlsContainer').insertAdjacentHTML('afterBegin', '<a class="room-steals" href="#"><img src="https://static.hotelsforhope.com/portals/child-portals/cug/52342/images/logo-blue.png" alt="Room Steals Logo"></a>');

                    document.querySelector('.profileCommand').setAttribute('href', 'https://roomsteals.com/settings');

                } else {
                    cugPortal.createHTML('header', '<a class="room-steals" href="#"><img src="https://static.hotelsforhope.com/portals/child-portals/cug/52342/images/logo-blue.png" alt="Room Steals Logo"></a>', 'afterBegin');
                }

                if (document.querySelector('.ArnSupportBottom .cancelLink')) {
                    document.querySelector('.ArnSupportBottom .cancelLink').insertAdjacentHTML('afterEnd', '<span class="dvd"> | </span><a target="_blank" href="https://roomsteals.getrewardful.com/signup">Affiliate Program</a>');
                }
                cugPortal.updateAttribute('.termsLink', 'https://roomsteals.com/terms', 'href');
                cugPortal.updateAttribute('.privacyLink', 'https://roomsteals.com/privacy', 'href');

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');



if (document.querySelector('.WBLoginForm') || document.querySelector('.WBForgotPasswordForm')) {
    window.location.href = 'https://roomsteals.com/login';
    document.querySelector('body').style.display = 'none';
}

if (cugPortal.page_name === 'privacy-policy') {
    cugPortal.fetchAsset('https://static.hotelsforhope.com/portals/child-portals/cug/52342/html/privacyPolicy.html')
        .then(data => document.querySelector('.WBPrivacyPolicy .ArnSubPage').innerHTML = data)
        .catch(() => {
            throw new Error('File at path ' + url + ' not found.');
            return false;
        });
}

function removePercentSavingsUnderThreshhold(threshhold) {
    if (cugPortal.page_name === 'search-results' || cugPortal.page_name === 'property-detail') {
        let percentArr = document.querySelectorAll('.percentSavings');
        percentArr.forEach(function(element) {
            let percent = element.textContent;
            percent = percent.replace(/\D+/g, '');
            if (percent < threshhold) {
                element.style.visibility = 'hidden';
            }
        });
    }
}

let script = document.createElement('script');
script.setAttribute('src', 'https://static.hotelsforhope.com/js/roomsteals-api.js');
document.head.appendChild(script);

function seeMoreRoomsClick() {
    if (document.querySelector('.SinglePropDetail') && document.querySelector('#moreRatesLink')) {
        document.querySelector('#moreRatesLink').click();
    }
}

function showRatesPerLabel() {
    let theme_meta = document.querySelector('meta[name="theme"]');
    if (theme_meta) {
        let theme = theme_meta.getAttribute('content');
        if (theme === 'international') {
            cugPortal.updateText('.perNight', 'per stay');
        }
    }
    return false;
}

// show full stay total
function showFullStayTotal(page, property_container, rate_container) {
    let theme;
    let rate_element;
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let theme_meta = document.querySelector('meta[name="theme"]');
    let properties = document.querySelectorAll(property_container);

    if (!document.querySelector(page) || !theme_meta) return;

    theme = theme_meta.getAttribute('content');
    params.delete('theme');
    theme == 'standard' ? params.set('theme', 'international') : params.set('theme', 'standard');

    properties.forEach((property) => {
        if (!property) return;

        rate_element = property.querySelector(rate_container);

        if (!rate_element || !property.querySelector('.full-stay-link')) return;

        theme == 'standard' ?
            rate_element.insertAdjacentHTML('afterEnd', `<a class="full-stay-link" href="?${params}">Show Full Stay Price</a>`) :
            rate_element.insertAdjacentHTML('afterEnd', `<a class="full-stay-link" href="?${params}">Show Price Per Night</a>`);
    });
}

function showFullStayToggle() {
    let theme;
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let header = document.querySelector('#AdminControlsContainer')
    let theme_meta = document.querySelector('meta[name="theme"]');
    let toggle;

    if (!theme_meta) return;
    theme = theme_meta.getAttribute('content');
    params.delete('theme');
    theme == 'standard' ? params.set('theme', 'international') : params.set('theme', 'standard');

    if (theme == 'standard') {
        header.insertAdjacentHTML('afterEnd',
            `<span class="rs-label" id="rs-tax-inclusive">
                    <label for="rs-toggle">Show Full Stay Price</label>
                    <div class="rs-toggle">
                        <input type="checkbox" name="rs-toggle" class="rs-toggle-checkbox" id="rs-toggle">
                        <label class="rs-toggle-label" for="rs-toggle">
                            <span class="rs-toggle-inner"></span>
                            <span class="rs-toggle-switch"></span>
                        </label>
                    </div>
                </span>`);
    } else {
        header.insertAdjacentHTML('afterEnd',
            `<span class="rs-label" id="rs-tax-inclusive">
                    <label for="rs-toggle">Show Full Stay Price</label>
                    <div class="rs-toggle">
                        <input type="checkbox" name="rs-toggle" class="rs-toggle-checkbox" id="rs-toggle">
                        <label class="rs-toggle-label" for="rs-toggle">
                            <span class="rs-toggle-inner"></span>
                            <span class="rs-toggle-switch"></span>
                        </label>
                    </div>
                </span>`);
        toggle = document.querySelector('#rs-toggle');
        toggle.checked = true;
    }

    document.querySelector('#rs-tax-inclusive').addEventListener('click', (e) => {
        window.location.href = '?' + params;
    });
}

showFullStayToggle();

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/cug/52342/52342.css">');