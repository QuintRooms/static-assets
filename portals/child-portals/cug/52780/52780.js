import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'C3 Travel');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.event-rate', 'Exclusive Rates');
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                cugPortal.updateText('.CreateAnAccountAction', 'Register');
                cugPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/cug/52780/images/logo.png', 'src');
                cugPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/?siteid=' + cugPortal.site_id, 'href');

                let logo = document.querySelector('.logo');
                let adminControls = document.querySelector('#AdminControlsContainer');
                if (adminControls) {
                    adminControls.insertAdjacentElement('afterBegin', logo);
                    adminControls.insertAdjacentHTML('afterEnd', `
                        <ul class="partner-nav">
                            <li><a href="https://events.hotelsforhope.com/v6/?siteid=52780" target="_blank">C3 Travel</a>
                            <li><a href="https://events.hotelsforhope.com/v6/?siteid=52916" target="_blank">C3 MGMT Travel</a>
                            <li><a href="https://events.hotelsforhope.com/v6/?siteid=52870" target="_blank">FGT Travel</a>
                        </ul>
                        `);
                }

                if (document.querySelector('.MemberAuthenticated')) {
                    document.querySelector('#AdminControlsContainer').insertAdjacentElement('afterBegin', logo);
                }

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

function eventSlidesTemplate(eventName, dateRange, endDate, location, portalURL, backgroundImage) {
    let slideTemplate = `
        <div class="col-md-4 col-sm-6 col-xs-12">
            <li class="slide">
                <div class="festival-container">
                    <a href="` + portalURL + `" target="_blank">
                            <div class="festival" style="background: linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(` + backgroundImage + `) no-repeat center center /cover">
                                <h4 class="date" data-endDate="` + endDate + `">` + dateRange + `</h4>
                                <h3 class="name">` + eventName + `</h3>
                                <h4 class="location">` + location + `</h4>
                            </div>
                        </a>
                </div>
            </li>
        </div>
    `;
    if (slideTemplate) {
        document.querySelector('#imgList').insertAdjacentHTML('afterBegin', slideTemplate);
    }
}

function eventSlider() {
    let sliderContainer = `
        <section>
            <h1>Traveling in a Group?</h1>
            <button class="group-travel-btn" data-toggle="modal" data-target="#hotelFormModal">Group Hotel Request</button>
        </section>
        <section class="event-slider alternate-bg" id="event-slider">
            <h1 class="text-center">C3 Events</h1>
            <div class="scroll-arrow" id="scroll-left">
                <main>
                    <svg viewBox="0 0 68 33" class="chevron chevron-left">
                        <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"> </path>
                    </svg>
                </main>
            </div>
            <ul id="imgList">

            </ul>
            <div class="scroll-arrow" id="scroll-right">
                <main>
                    <svg viewBox="0 0 68 33" class="chevron chevron-right">
                        <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"> </path>
                    </svg>
                </main>
            </div>
        </section>
    `;

    let searchContainer = document.querySelector('.RootBody .ArnSearchContainerMainDiv');
    if (searchContainer) {

        searchContainer.insertAdjacentHTML('afterend', sliderContainer);

        eventSlidesTemplate('Lollapalooza', 'Jul 30 - Aug 2', 'August 2 2020', 'Grant Park, Chicago', 'http://lollapalooza.hotelsforhope.com/group-event?id=35879', 'https://media.travsrv.com/appSkins/48167/v6/themes/standard/images/lolla.jpg');

        eventSlidesTemplate('Innings Festival', 'Feb 29 - Mar 1, 2020', 'March 1 2020', 'Tempe, AZ', 'http://events.hotelsforhope.com/group-event?id=35043', 'https://cdn-1-www.inningsfestival.com/wp/wp-content/themes/forte-child/img/INF-Web-Footer-01.svg');

        eventSlidesTemplate('Voodoo Music + Arts Experience', 'Oct 25 - 27', 'October 27 2019', 'City Park, New Orleans', 'http://events.hotelsforhope.com/group-event?id=34747', 'https://media.travsrv.com/appSkins/51439/v6/themes/standard/images/voodoo-bg.jpg');

        eventSlidesTemplate('Exit 111', 'Oct 11 - 13', 'October 13 2019', 'Manchester, TN', 'http://events.hotelsforhope.com/group-event?id=34724', 'https://www.exit111festival.com/wp-www-exit111festival-com/wp/wp-content/uploads/2019/04/vipbillboard480-410eb5d6.png');
        eventSlidesTemplate('Austin City Limits', 'Oct 4 - 6 & Oct 11 - 13', 'October 13 2019', 'Austin, TX', 'https://aclfestival.hotelsforhope.com/group-event?id=31785', 'https://media.travsrv.com/appSkins/48167/v6/themes/standard/images/acl.jpg');

        eventSlidesTemplate('Music City Food + Wine', 'Sept 20 - 22', 'September 22 2019', 'Nashville, TN', 'http://events.hotelsforhope.com/group-event?id=32013', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/51441/images/banner.jpg');

        let slideWidth = document.querySelector('.festival-container').offsetWidth + 10;
        let imgList = document.getElementById('imgList');
        let scrollRight = document.getElementById('scroll-right');
        let scrollLeft = document.getElementById('scroll-left');

        scrollRight.addEventListener('click', (event) => {
            imgList.scrollBy(slideWidth, 0);
        });

        scrollLeft.addEventListener('click', (event) => {
            imgList.scrollBy(-slideWidth, 0);
        });

        let dates = document.querySelectorAll('.date');
        dates.forEach(function(element, index) {

            let endDate = element.getAttribute('data-endDate');
            let today = new Date();
            let parent = element.closest('.col-md-4');
            endDate = new Date(endDate);

            if (endDate < today) {
                parent.style.display = 'none';
            }

            // last loop
            if (index == dates.length - 1) {
                if (endDate < today) {
                    let slider = document.querySelector('.event-slider');
                    let eventDeals = document.querySelector('.event-deals');
                    let featuredDestinations = document.querySelector('.featuredDestinationsContainer');
                    slider.style.display = 'none';
                    eventDeals.style.display = 'none';
                    featuredDestinations.style.display = 'block';

                }
            }
        });
    }
}

eventSlider();

let tabs = [{
        'label': 'Hotels',
        'icon': '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hotel" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-hotel fa-w-18 fa-2x"><path fill="currentColor" d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z" class=""></path></svg>',
        'url': '#',
        'id': "hotelsTab"
    },
    {
        'label': 'C3 Events',
        'icon': '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-calendar-alt fa-w-18 fa-2x"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" class=""></path></svg>',
        'url': '#event-slider',
        'id': 'eventSliderTab'
    },
    {
        'label': 'Group Hotel Request',
        'icon': '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="wpforms" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-wpforms fa-w-18 fa-2x"><path fill="currentColor" d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z" class=""></path></svg>',
        'url': '#event-form-container',
        'id': 'hotelRequestTab'
    }
].reverse();

function addTabsToRootPageSearch(arrayOfTabs) {
    let searchWidget = document.querySelector('.RootBody .ArnPrimarySearchContainer');
    searchWidget.insertAdjacentHTML('beforeBegin', '<div class="tab-container"></div>');

    arrayOfTabs.forEach(function(tab) {
        let tabContainer = document.querySelector('.tab-container');
        tabContainer.insertAdjacentHTML('afterBegin', `
                <a href="` + tab['url'] + `" class="tab" id=` + tab['id'] + `>
                    <span class="tab-icon">` + tab['icon'] + `</span>
                    <span class="tab-label">` + tab['label'] + `</span>
                </a>
        `);
    });
    document.querySelector('.tab:first-child').classList.add('active');
    document.querySelector('#hotelRequestTab').setAttribute('data-toggle', 'modal');
    document.querySelector('#hotelRequestTab').setAttribute('data-target', '#hotelFormModal');
}

/**
 * @description fetches hotelRequestForm html and inserts it into the body
 * @return data html
 */
async function createHotelRequestForm() {
    let response = await fetch('https://static.hotelsforhope.com/portals/child-portals/cug/52780/html/hotelRequestForm.html');
    let data = await response.text()
        .then((data) => {
            document.querySelector('body').insertAdjacentHTML('beforeEnd', data);
        });
}

/**
 * @description validates and paginates hotel request form
 * @return void
 */
async function hotelRequestFormValidation() {
    let next = document.querySelector('#form-pagebreak-next_86');
    let back = document.querySelector('#form-pagebreak-back_86');
    let form = document.querySelector('.jotform-form');
    let firstPage = document.querySelector('.jotform-form ul.form-section:first-child');
    let secondPage = document.querySelector('.jotform-form ul.form-section:nth-child(2)');
    let inputsToRequire = [
        document.querySelector('#input_11_0_0'),
        document.querySelector('#input_11_1_0'),
        document.querySelector('#input_11_2_0'),
        document.querySelector('#input_11_3_0')
    ];

    document.querySelector('#c3-email').textContent = 'c3travel@hotelsforhope.com';
    document.querySelector('#c3-email').setAttribute('href', 'mailto:c3travel@hotelsforhope.com');

    if (form) {
        next.onclick = () => {
            if (form.reportValidity()) {
                firstPage.style.display = 'none';
                secondPage.style.display = 'block';
                next.style.display = 'none';
                inputsToRequire.forEach((element) => {
                    element.setAttribute('required', true);
                });
            }
        }
        back.onclick = () => {
            firstPage.style.display = 'block';
            secondPage.style.display = 'none';
            next.style.display = 'block';

            inputsToRequire.forEach((element) => {
                element.removeAttribute('required', false);
            });
        }
    }
}

function appendAdvancedFiltersToMainSearch() {
    let advancedFilters = document.querySelector('.RootBody .ArnSecondarySearchOuterContainer');
    let search = document.querySelector('.RootBody .ArnPrimarySearchContainer');
    search.insertAdjacentElement('beforeEnd', advancedFilters);
}

if (document.querySelector('.RootBody')) {
    addTabsToRootPageSearch(tabs);
    appendAdvancedFiltersToMainSearch();
    createHotelRequestForm()
        .then(() => {
            // hotelRequestFormValidation();
        });
}

window.onload = function() {
    cugPortal.updateText('.RootBody .modifySearch', 'C3 Travel, whether you\'re travelling for personal stay or business, we\'ve got you covered');
}

cugPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');