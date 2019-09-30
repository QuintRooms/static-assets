import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'Room Steals');
cugPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/favicon.png', 'href');
cugPortal.updateText('#theMarketingOptInAjax label', 'I want to receive the latest information by email from Room Steals including event reminders, relevant news, surveys, offers, and promotions.');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.event-rate', 'Exclusive Rates');
        createStarIcons();
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (document.querySelector('#AdminControlsContainer')) {
                    document.querySelector('#AdminControlsContainer').insertAdjacentHTML('afterBegin', '<a class="room-steals" href="https://roomsteals.com/home"><img src="https://static.hotelsforhope.com/portals/child-portals/cug/52342/images/logo-blue.png" alt="Room Steals Logo"></a>');

                    let script = document.createElement('script');
                    script.setAttribute('src', 'https://static.hotelsforhope.com/js/room-steals-provider.js');
                    document.head.appendChild(script);

                } else {
                    cugPortal.createHTML('header', '<a class="room-steals" href="https://hotels.roomsteals.com"><img src="https://static.hotelsforhope.com/portals/child-portals/cug/52342/images/logo-blue.png" alt="Room Steals Logo"></a>', 'afterBegin');
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

function createStarIcons() {
    let star_elements = document.querySelectorAll('.ArnPropClass');
    star_elements.forEach(function(star) {
        let number_of_stars = star.textContent;
        let num = number_of_stars.replace(/\D/g, "");
        let star_svg = '<svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';
        if (num == 1) {
            star.innerHTML = star_svg;
        }
        if (num == 2) {
            star.innerHTML = star_svg + star_svg;
        }
        if (num == 3) {
            star.innerHTML = star_svg + star_svg + star_svg;
        }
        if (num == 4) {
            star.innerHTML = star_svg + star_svg + star_svg + star_svg;
        }
        if (num == 5) {
            star.innerHTML = star_svg + star_svg + star_svg + star_svg + star_svg;
        }
    });
}