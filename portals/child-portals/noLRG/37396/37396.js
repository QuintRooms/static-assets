import NoLRGPortal from '../../../js/portal-setup';

const no_lrg_portal = new NoLRGPortal();

no_lrg_portal.updateRoomDescription(
    '.RoomDescription',
    'Barrett-Jackson Rooms'
);

jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        no_lrg_portal.ratesReadyEventMethods();
        no_lrg_portal.updateText('.event-rate', 'Exclusive Rates');
        no_lrg_portal.addCustomTag('Host Hotel', 41188);

        if (no_lrg_portal.site_id === '37396') {
            no_lrg_portal.addCustomTag('Free Tram to Mandalay Bay', 564);
            no_lrg_portal.addCustomTag('Free Tram to Mandalay Bay', 22619);
        }

        if (no_lrg_portal.site_id === '37395') {
            no_lrg_portal.addCustomTag('Shuttle to Mohegan Sun', 191384);
        }

        if (no_lrg_portal.site_id === '49551') {
            no_lrg_portal.addCustomTag(
                '<div style="border-bottom: 1px solid rgba(255, 255, 255, .4);">Host Hotel</div><div>Complimentary Shuttle</div>',
                20
            );
            no_lrg_portal.addCustomTag(
                '<div style="border-bottom: 1px solid rgba(255, 255, 255, .4);">Hilton Hotel</div><div>Complimentary Shuttle</div>',
                16460
            );
            no_lrg_portal.addCustomTag(
                '<div>2 Bedroom Suites w/ 2 Kings</div>',
                257
            );

            addHiltonTags();
            no_lrg_portal.updateText(
                '.event-rate',
                'Exclusive Barrett-Jackson Rates'
            );
        }

        if (no_lrg_portal.site_id === '49552') {
            no_lrg_portal.addCustomTag(
                '<div>Marriott Oceanfront Open Feb 2020</div>',
                3486114
            );
            no_lrg_portal.updateText(
                '.event-rate',
                'Exclusive Barrett-Jackson Rates'
            );
        }

        if (no_lrg_portal.site_id === '60292') {
            no_lrg_portal.addCustomTag(
                '<div>New Hotel Open 2020</div>',
                3486114
            );
        }
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    const element = document.querySelector(elementWaitingFor);
    const config = {
        attributes: false,
        childList: true,
        subtree: false,
    };

    function callback(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                no_lrg_portal.updateAttribute(
                    '.logo img',
                    'https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/logo.png',
                    'src'
                );
                no_lrg_portal.updateAttribute(
                    '.logo',
                    'https://www.barrett-jackson.com/',
                    'href'
                );
                document
                    .querySelector('body')
                    .insertAdjacentHTML(
                        'beforeEnd',
                        '<a href="https://www.grandcanyon.org/" class="side-banner" target="_blank"><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/leftbanner.jpg"></a>'
                    );
                observer.disconnect();
            }
        }
    }
    const observer = new MutationObserver(callback);
    observer.observe(element, config);
}

waitForElementToLoad('header');

no_lrg_portal.updateText(
    '#theMarketingOptInAjax label',
    'Opt in to receive communication from the event and its partners.'
);

function addHiltonTags() {
    const hilton_prop_ids = [
        236618,
        16,
        31,
        21,
        12937,
        267891,
        257288,
        1220075,
        1268837,
        175722,
        65,
        188905,
        16460,
        16343,
        12715,
        71,
        16797,
        16417,
        277232,
        16454,
        16470,
        165275,
        182101,
        659056,
        3349002,
        50725,
        282039,
        16523,
        1269346,
        1367176,
        1239970,
        272052,
        188634,
        3469078,
        378245,
        3309155,
        277416,
        2302525,
        3167140,
        16837,
        859570,
        215220,
        2048227,
        13770,
        13499,
        67,
        20050,
        20252,
        415537,
        6,
        619759,
        24,
        446580,
        25,
        3349688,
        2048225,
        1243044,
        1758007,
        851719,
        20132,
        180778,
        244634,
        20130,
        277730,
        277731,
        187648,
        20133,
        20164,
        262395,
        19706,
        3011273,
        16452,
        220004,
        2048226,
        3468713,
    ];

    hilton_prop_ids.forEach((prop) => {
        if (document.querySelector(`#theArnProperty${prop}`)) {
            document.querySelector(
                `#theArnProperty${prop} .ArnContainer`
            ).style.background =
                'url("https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/hilton-logo.svg") no-repeat 100% 25px / 65%';

            if (window.matchMedia('(max-width: 500px)').matches) {
                document.querySelector(
                    `#theArnProperty${prop} .ArnContainer`
                ).style.background =
                    'url("https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/images/hilton-logo.svg") 0 85% / 100% no-repeat';
            }

            no_lrg_portal.addCustomTag(
                '<div style="border-bottom: 1px solid rgba(255, 255, 255, .4);">Hilton Hotel</div>',
                prop
            );
            // if (document.querySelector('#theArnProperty' + prop + '> .sash')) {
            //     document.querySelector('#theArnProperty' + prop + '> .sash .event-rate').textContent = 'Hilton Deals';
            // }
        }
    });
}

document
    .querySelector('body')
    .insertAdjacentHTML(
        'beforeEnd',
        '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/37396/37396.css">'
    );

// function getPropIds() {
//     const props = document.querySelectorAll('.propId');
//     const prop_ids = [];
//     props.forEach(function (prop) {
//         prop_ids.push(prop.textContent);
//     });
//     console.log(prop_ids);
// }

// getPropIds();

function updateLandingPage() {
    if (!no_lrg_portal.site_id === '60292') return;
    let markup;
    try {
        fetch('/portals/child-portals/noLRG/37396/html/60292.html').then(
            (response) => {
                console.log(response);
                markup = response.text();
                console.log(`html bj markup: ${markup}`);
                return markup;
            }
        );
    } catch (error) {
        return error;
    }

    document
        .querySelector('div.landing-page-container')
        .insertAdjacentHTML('afterbegin', markup);
}
updateLandingPage();
