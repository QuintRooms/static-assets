import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription('.RoomDescription', 'Quint Events Exclusive Rates');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/logo.svg', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/?siteid=' + noLRGPortal.site_id, 'href');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

async function setupF1Races() {
    let landing_page_container = document.querySelector('.landing-page');
    let response = await fetch('https://static.hotelsforhope.com/js/f1-races.json');
    let today = new Date();
    let races = await response.json()
        .then((races) => {
            Object.keys(races).forEach(race => {
                let end_date = new Date(races[race]['hide_race_date']);
                if (races[race]['year'] === 2020 && today < end_date) {
                    landing_page_container.insertAdjacentHTML('beforeEnd', `
                        <div class="race" data-target="#properties-${race}" data-toggle="collapse"  aria-expanded="true" aria-controls="properties-${race}">
                            <h3>${races[race]['event_name']}
                                <span class="pull-right">
                                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 50 80" xml:space="preserve">
                                        <polyline fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                    </svg>
                                </span>
                            </h3>
                            <div class="collapse" id="properties-${race}"></div>
                        </div>
                    `);
                    races[race]['properties'].forEach(function(element) {
                        if (element.name != '') {
                            document.querySelector(`#properties-${race}`).insertAdjacentHTML('beforeEnd', `
                            <a style="display: block;" target="_blank" href="${element.url}">${element.name}</a>
                        `);

                        }
                    });
                }
            });
        });
}

if (document.querySelector('.landing-page')) {
    setupF1Races();
}