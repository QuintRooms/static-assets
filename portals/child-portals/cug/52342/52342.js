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

                    let script = document.createElement('script');
                    script.setAttribute('src', 'https://static.hotelsforhope.com/js/room-steals-provider.js');
                    document.head.appendChild(script);

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

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/cug/52342/52342.css">');