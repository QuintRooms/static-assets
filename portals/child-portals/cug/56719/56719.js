import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/favicon.ico', 'href');

cugPortal.updateText('.lblNearbyCities', 'Search By Nearby Cities');
cugPortal.updateText('.lblAmenities', 'Search By Amenities');
cugPortal.updateText('.lblRating', 'Search By Star Rating');
cugPortal.updateText('.lblPropertyType', 'Search By Property Type');
cugPortal.updateText('.lblCurrency', 'Currency');

cugPortal.updateText('#CitySearchContainer span', 'City');
cugPortal.updateText('#CheckInContainer span', 'Check-in');
cugPortal.updateText('#CheckOutContainer span', 'Checkout');
cugPortal.updateText('.ArnRooms span', 'Rooms');
cugPortal.updateText('#HotelNameContainer span', 'Hotel Name (Optional)');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.perNight', 'per stay');
        cugPortal.updateText('.SearchHotels .modifySearch', 'Update Search');
        cugPortal.updateText('.SinglePropDetail .modifySearch', 'Update Search');

        cugPortal.updateText('.lblNearbyCities a', 'Search By Nearby Cities');
        cugPortal.updateText('.lblAmenities a', 'Search By Amenities');
        cugPortal.updateText('.lblRating a', 'Search By Star Rating');
        cugPortal.updateText('.lblPropertyType a', 'Search By Property Type');
        cugPortal.updateText('.lblCurrency a', 'Currency');

        showDatesInListing();
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {

                cugPortal.createHTML('#theOtherSubmitButton', '<i class="fa fa-chevron-right" aria-hidden="true"></i>', 'afterEnd');
                cugPortal.createHTML('#theSubmitButton', '<i class="fa fa-chevron-right" aria-hidden="true"></i>', 'afterEnd');

                cugPortal.updateHTML('header', `
                    <nav class="hidden-xs navbar navbar-default top-menu">
                        <div class="container-fluid">
                            <div class="container">
                                <ul class="nav navbar-nav left-nav">
                                    <li> <a href="https://www.formula1.com/" target="_blank" class="uppercase">Formula1.com </a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">
                                    <li> <a href="https://www.formula1.com/en/buy/tickets.html" target="_blank">F1 Tickets </a></li>
                                    <li> <a href="https://www.formula1.com/en/buy/paddock-club.html" target="_blank">F1 Hospitality </a></li>
                                    <li> <a href="https://www.formula1.com/en/buy/f1-experiences.html" target="_blank">F1 Experiences </a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-default main-nav" id="yui_3_18_1_1_1558979333452_164">
                        <div class="container">
                            <div class="navbar-header">
                                <div class="collapsed navbar-toggle pull-left" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse">
                                    <span class="toggle-bar top-bar"></span> 
                                    <span class="toggle-bar middle-bar"></span> 
                                    <span class="toggle-bar bottom-bar"></span>
                                </div>
                                <a href="https://events.hotelsforhope.com/v6/?siteid=56719" class="hidden-xs navbar-brand">
                                    <img alt="F1 Experiences Logo" src="https://static.hotelsforhope.com/portals/child-portals/cug/56719/images/logo.svg"> 
                                </a>
                                <a href="https://events.hotelsforhope.com/v6/?siteid=56719" class="hidden-lg hidden-md hidden-sm navbar-brand pull-left">
                                    <img alt="F1 Experiences Logo" src="https://static.hotelsforhope.com/portals/child-portals/cug/56719/images/logo.svg"> 
                                </a>
                                <ul class="pull-right user-account hidden-sm hidden-md hidden-lg">
                                    <li><i class="icon-account"></i>
                                        <div class="profile-container mobile-account"></div>
                                    </li>
                                </ul>
                            </div>
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="display:none;height:0">
                                <ul class="nav navbar-nav dynamic-nav">
                                    <li> 
                                        <a href="https://f1experiences.com/calendar-of-events" id="races">Races <svg class="chevron hidden-lg hidden-md hidden-sm" fill="none" height="12" id="i-chevron-right" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <path d="M4.5 10 L9 6 4.5 .75"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li> 
                                        <a href="https://f1experiences.com/about-us" id="aboutUs">About Us <svg class="chevron hidden-lg hidden-md hidden-sm" fill="none" height="12" id="i-chevron-right" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <path d="M4.5 10 L9 6 4.5 .75"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li> 
                                        <a href="https://f1experiences.com/contact-us" id="contactUs">Contact Us <svg class="chevron hidden-lg hidden-md hidden-sm" fill="none" height="12" id="i-chevron-right" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <path d="M4.5 10 L9 6 4.5 .75"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="pull-right user-account hidden-xs">
                                    <li><i class="icon-account"></i>
                                        <div class="profile-container"></div>
                                    </li>
                                </ul>
                                <div class="hidden-lg hidden-md hidden-sm top-menu-mobile" id="yui_3_18_1_1_1558979333452_162">
                                    <ul class="nav navbar-nav" id="yui_3_18_1_1_1558979333452_161">
                                        <li>
                                            <a href="https://www.formula1.com/" target="_blank">FORMULA1.COM <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#15151e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M4.5 10 L9 6 4.5 .75"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.formula1.com/en/buy/tickets.html" target="_blank">F1 TICKETS <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#15151e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M4.5 10 L9 6 4.5 .75"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li id="yui_3_18_1_1_1558979333452_160">
                                            <a href="https://www.formula1.com/en/buy/paddock-club.html" target="_blank" id="yui_3_18_1_1_1558979333452_159">F1 HOSPITALITY <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#15151e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M4.5 10 L9 6 4.5 .75"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.formula1.com/en/buy/f1-experiences.html" target="_blank">F1 EXPERIENCES <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#15151e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path d="M4.5 10 L9 6 4.5 .75"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </nav>
                `);

                cugPortal.updateAttribute('.SendMeNewPasswordAction', 'Send New Password', 'value');
                cugPortal.updateText('.CreateAnAccountAction', 'Register');
                cugPortal.updateText('.ArnAdults span', 'Adults');
                setTimeout(function() {
                    cugPortal.updateHTML('#slideit .open span', '<i class="fa fa-comment" aria-hidden="true"></i> Chat with us');
                    if (document.querySelector('#commands') && document.querySelector('.profile-container')) {
                        let profile_container = document.querySelectorAll('.profile-container');
                        let profile_icons = document.querySelectorAll('.icon-account');
                        profile_container.forEach(function(element) {
                            if (window.matchMedia("(max-width: 800px)").matches) {
                                document.querySelector('.mobile-account').insertAdjacentElement('afterBegin', document.querySelector('#commands'));
                            } else {
                                element.insertAdjacentElement('afterBegin', document.querySelector('#commands'));
                            }

                            profile_icons.forEach(function(icon) {
                                icon.addEventListener('click', function() {
                                    element.classList.toggle('show-profile');
                                });
                            });
                        });
                    }
                }, 1);


                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');


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

    let checkInDate = document.querySelector('meta[name="checkIn"]');
    let checkOutDate = document.querySelector('meta[name="checkOut"]');

    if (checkInDate && checkOutDate) {
        checkInDate = document.querySelector('meta[name="checkIn"]').getAttribute('content');
        checkOutDate = document.querySelector('meta[name="checkOut"]').getAttribute('content');

        checkInDate = new Date(checkInDate);
        checkOutDate = new Date(checkOutDate);

        let perStay = document.querySelectorAll('.ArnEnoughAvailableRooms .perNight');
        if (document.querySelector('.stayDates') == null) {
            perStay.forEach(function(element) {

                element.insertAdjacentHTML('beforeEnd', '<div class="stayDates">(' + days[checkInDate.getUTCDay()] + ' ' + checkInDate.getUTCDate() + '<sup>' + ordinal(checkInDate.getUTCDate) + '</sup>' + ' ' + months[checkInDate.getUTCMonth()] + ' - ' + days[checkOutDate.getUTCDay()] + ' ' + checkOutDate.getUTCDate() + '<sup>' + ordinal(checkOutDate.getUTCDate) + '</sup>' + ' ' + months[checkOutDate.getUTCMonth()] + ')</div>');
            });
        }
    }
}

cugPortal.createHTML('.footer-container', `
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-8 col-xs-12">
                    <p class="uppercase">Download the Official F1 App</p>
                    <ul>
                        <li><a href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&amp;hl=en_GB" target="_blank"><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51108/images/google-play.svg" class="app-store" alt="Google Play"></a></li>
                        <li><a href="https://itunes.apple.com/gb/app/official-f1-app/id835022598?mt=8" target="_blank"><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51108/images/apple-store.svg" class="app-store" alt="App Store"></a></li>
                    </ul>
                    <hr class="f1-divider visible-xs">
                </div>
                <div class="col-md-6 col-sm-4 col-xs-12">
                    <div class="social">
                        <a href="https://www.facebook.com/F1Experiences/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/f1_experiences"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/f1experiences/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/c/F1Experiences"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="row hidden-xs">
                <ul class="footer-nav f1-border">
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <h4>F1® Experiences</h4>
                        <li><a href="https://events.hotelsforhope.com/v6/?siteid=56719"><span>Home</span></a></li>
                        <li><a href="https://f1experiences.com/about-us"><span>About Us</span></a></li>
                        <li><a href="https://f1experiences.com/about-us/faqs"><span>FAQ</span></a></li>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <h4>Championship</h4>
                        <li><a href="https://f1experiences.com/calendar-of-events"><span>Races</span></a></li>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <h4>Hospitality</h4>
                        <li><a href="https://f1experiences.com/champions-club"><span>Champions Club</span></a></li>
                        <li><a href="https://f1experiences.com/paddock-club"><span>Formula 1 Paddock Club</span></a></li>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <h4>Latest</h4>
                        <li><a href="http://social.f1experiences.com/"><span>Our Blog</span></a></li>
                        <li><a href="https://f1experiences.com/contact-us"><span>Contact Us</span></a></li>
                    </div>
                </ul>
            </div>
            <div aria-multiselectable="true" class="panel-group hidden-sm hidden-md hidden-lg f1-border" id="accordion" role="tablist">
          <div class="panel panel-default">
            <div class="panel-heading" id="headingOne" role="tab">
              <p class="panel-title"><a aria-controls="collapseOne" aria-expanded="false" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseOne" role="button">F1<sup>®</sup> Experiences</a></p>
            </div>
            <div aria-labelledby="headingOne" class="panel-collapse collapse" id="collapseOne" role="tabpanel">
              <div class="panel-body">
                <p><a href="https://events.hotelsforhope.com/v6/?siteid=56719" class="footer-link">Home</a></p>
                <p><a href="https://f1experiences.com/about-us" class="footer-link">About Us</a></p>
                <p><a href="https://f1experiences.com/about-us/faqs" class="footer-link">FAQ</a></p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" id="headingTwo" role="tab">
              <p class="panel-title"><a aria-controls="collapseTwo" aria-expanded="false" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseTwo" role="button">Championship</a></p>
            </div>
            <div aria-labelledby="headingTwo" class="panel-collapse collapse" id="collapseTwo" role="tabpanel">
              <div class="panel-body">
                <p><a href="https://f1experiences.com/calendar-of-events" class="footer-link">Races</a></p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" id="headingThree" role="tab">
              <p class="panel-title"><a aria-controls="collapseThree" aria-expanded="false" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseThree" role="button">Hospitality</a></p>
            </div>
            <div aria-labelledby="headingThree" class="panel-collapse collapse" id="collapseThree" role="tabpanel">
              <div class="panel-body">
                <p><a href="https://f1experiences.com/champions-club" class="footer-link">Champions Club</a></p>
                <p><a href="https://f1experiences.com/paddock-club" class="footer-link">Formula 1 Paddock Club</a></p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" id="headingFive" role="tab">
              <p class="panel-title"><a aria-controls="collapseFive" aria-expanded="false" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseFive" role="button">Latest</a></p>
            </div>
            <div aria-labelledby="headingFive" class="panel-collapse collapse" id="collapseFive" role="tabpanel">
              <div class="panel-body">
                <p><a href="http://social.f1experiences.com/" target="_blank" class="footer-link">Our Blog</a></p>
                <p><a href="https://f1experiences.com/contact-us" class="footer-link">Contact Us</a></p>
              </div>
            </div>
          </div>
        </div>
            <div class="policies">
                <div class="row hidden-xs">
                    <div class="col-md-12 col-sm-12">
                        <ul class="policy-links">
                            <li>
                                <a href="https://www.iubenda.com/privacy-policy/24896936" class="iubenda-nostyle no-brand iubenda-embed"><span>Privacy Policy</span></a>
                                <script type="text/javascript" src="https://cdn.iubenda.com/iubenda_i_badge.js"></script>
                            </li>
                            <li>
                                <a href="https://events.hotelsforhope.com/v6/terms-and-conditions?siteId=56719&theme=standard" target="_blank"><span>Terms &amp; Conditions</span></a>
                            </li>
                            <li>
                                <a href="https://www.iubenda.com/privacy-policy/24896936/cookie-policy" class="iubenda-nostyle no-brand iubenda-embed"><span>Cookies Policy</span></a>
                            </li>                            
                            <li>
                                <a href="https://f1experiences.com/legal-notices"><span>Legal Notices</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div aria-multiselectable="true" class="panel-group hidden-sm hidden-md hidden-lg" id="accordion2" role="tablist">
                <div class="panel panel-default">
                  <div class="panel-heading" id="headingSix" role="tab">
                    <p class="panel-title"><a aria-controls="collapseSix" aria-expanded="false" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseSix" role="button">More</a></p>
                  </div>
                  <div aria-labelledby="headingSix" class="panel-collapse collapse" id="collapseSix" role="tabpanel">
                    <div class="panel-body">
                      <p><a href="https://www.iubenda.com/privacy-policy/24896936" class="iubenda-nostyle no-brand iubenda-embed">Privacy Policy</a><script type="text/javascript" src="https://cdn.iubenda.com/iubenda_i_badge.js"></script></p>
                      <p><a href="https://www.iubenda.com/privacy-policy/24896936/cookie-policy" class="iubenda-nostyle no-brand iubenda-embed">Cookies Policy</a></p>
                      <p><a href="https://events.hotelsforhope.com/v6/terms-and-conditions?siteId=56719&theme=standard" target="_blank">Terms &amp; Conditions</a></p>
                    </div>
                  </div>
                </div>
              </div>
                <hr class="f1-divider">
                <div class="row">
                    <div class="col-md-12 copyright">
                        <p>©2003-2019 Formula One World Championship Limited</p>
                        <p>F1® Experiences is operated by QuintEvents International, LLC and is authorised to do so by Formula 1 Digital Media Limited.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `, 'afterBegin')

if (document.querySelector('.SearchHotels .ArnSearchContainerMainDiv')) {
    document.querySelector('.SearchHotels .ArnSearchContainerMainDiv').classList.add('container');
    document.querySelector('.SearchHotels .ArnSearchContainerMainDiv').classList.remove('ArnSearchContainerMainDiv');
}