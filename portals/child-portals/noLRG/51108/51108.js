import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.translateText('.event-rate', 'exclusive rates');
        noLRGPortal.translateText('.SearchHotels .PropLimitedAvail .ArnAvailability', 'no availability');
        noLRGPortal.translateText('#HotelNameContainer span', 'hotel name');
        noLRGPortal.translateText('.ArnAdults span', 'adults');

        document.querySelector('footer .container').insertAdjacentElement('beforeBegin', document.querySelector('.ArnSupportLinks.ArnSupportBottom'));
    }, 1);
});
noLRGPortal.translateText('.f1-policy', 'f1-policy');
noLRGPortal.translateText('#races', 'races');
noLRGPortal.translateText('#contactUs', 'contact us');
noLRGPortal.translateText('.openMapBtn', 'open map');
noLRGPortal.translateText('#theMarketingOptInAjax label', 'marketing opt in');

noLRGPortal.updateRoomDescription('.RoomDescription', 'Formula 1 Exclusive Rate');
noLRGPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/favicon.png', 'href');
noLRGPortal.updateHTML('header', '<nav class="hidden-xs navbar navbar-default top-menu"><div class="container-fluid"><ul class="nav navbar-nav left-nav"><li> <a href="https://www.formula1.com/" target="_blank" class="uppercase">Formula1.com </a></li></ul><ul class="nav navbar-nav navbar-right"><li> <a href="https://www.formula1.com/en/buy/tickets.html" target="_blank">F1 Tickets </a></li><li> <a href="https://www.formula1.com/en/buy/paddock-club.html" target="_blank">F1 Hospitality </a></li><li> <a href="https://www.formula1.com/en/buy/f1-experiences.html" target="_blank">F1 Experiences </a></li><li style="padding:0"><div class="languageContainer" id="language" style="padding:0;display:inline-block!important;position:relative;right:0;top:9px"><div id=":0.targetLanguage" style="display:inline" data-children-count="1"><select id="language" class="goog-te-combo" onchange="arnChangeTheme(this.value)"><option class="translateMe" selected="">Select Language</option><option value="standard">English (United States)</option><option value="french">Français (French)</option><option value="german">Deutsch (German)</option><option value="indonesia">Bahasa Indonesia (Indonesian)</option><option value="portuguese">Português (Portuguese)</option><option value="spanish">Español (Spanish)</option><option value="thai">ภาษาไทย (Thai)</option><option value="vietnamese">Tiếng Việt (Vietnamese)</option> </select></div></div></li></ul></div> </nav> <nav class="navbar navbar-default main-nav" id="yui_3_18_1_1_1558979333452_164"><div id="yui_3_18_1_1_1558979333452_163"><div class="navbar-header"><div class="collapsed navbar-toggle pull-left" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse"><span class="toggle-bar top-bar"></span> <span class="toggle-bar middle-bar"></span> <span class="toggle-bar bottom-bar"></span></div><a href="https://bookrooms.formula1.com/" class="hidden-xs navbar-brand"><img alt="F1 and Hotels for Hope Logo" src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51108/images/logo.png"> </a><a href="https://bookrooms.formula1.com/" class="hidden-lg hidden-md hidden-sm navbar-brand pull-right"><img alt="F1 and Hotels for Hope Logo" src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51108/images/logo.png"> </a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="display:none;height:0"><ul class="nav navbar-nav dynamic-nav pull-right"><li> <a href="https://bookrooms.formula1.com/" id="races">Races <svg class="chevron hidden-lg hidden-md hidden-sm" fill="none" height="12" id="i-chevron-right" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg> </a></li><li> <a href="https://events.hotelsforhope.com/v6/support?siteId=' + noLRGPortal.site_id + '" id="contactUs">Contact Us <svg class="chevron hidden-lg hidden-md hidden-sm" fill="none" height="12" id="i-chevron-right" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg> </a></li></ul><div class="hidden-lg hidden-md hidden-sm top-menu-mobile" id="yui_3_18_1_1_1558979333452_162"><ul class="nav navbar-nav" id="yui_3_18_1_1_1558979333452_161"><li> <a href="https://www.formula1.com/" target="_blank">FORMULA1.COM <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#15151e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg> </a></li><li> <a href="https://www.formula1.com/en/buy/tickets.html" target="_blank">F1 TICKETS <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#15151e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg> </a></li><li id="yui_3_18_1_1_1558979333452_160"><a href="https://www.formula1.com/en/buy/paddock-club.html" target="_blank" id="yui_3_18_1_1_1558979333452_159">F1 HOSPITALITY <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#15151e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg> </a></li><li> <a href="https://www.formula1.com/en/buy/f1-experiences.html" target="_blank">F1 EXPERIENCES <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#15151e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg> </a></li><li id="yui_3_18_1_1_1558979333452_176"><a id="yui_3_18_1_1_1558979333452_175"><div class="languageContainer" id="language" style="padding:0;display:inline-block!important;position:relative;right:0;top:0"><div id=":0.targetLanguage" style="display:inline" data-children-count=1> <select id="language" class="goog-te-combo" onchange="arnChangeTheme(this.value)"><option class="translateMe" selected="">Select Language</option><option value="standard">English (United States)</option><option value="french">Français (French)</option><option value="german">Deutsch (German)</option><option value="indonesia">Bahasa Indonesia (Indonesian)</option><option value="portuguese">Português (Portuguese)</option><option value="spanish">Español (Spanish)</option><option value="thai">ภาษาไทย (Thai)</option><option value="vietnamese">Tiếng Việt (Vietnamese)</option> </select></div></div> </a></li></ul></div></div></div> </nav>');
noLRGPortal.createHTML('footer', '<script><!-- zoho chat script -->var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"cadeedbe2c5dfeb1634625ce94ed428dac23cd1e84ecfdcb99f55e4f58b5b166", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id=zsiqwidget></div>");</script>', 'afterEnd');

noLRGPortal.createHTML('body', `<footer><div class="container"><div class="row">
                <div class="col-md-5 col-sm-6 col-xs-12 footer-logo">
                    <img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/` + noLRGPortal.site_id + `/images/f1-h4h-lockup.png" alt="F1 and Hotels for Hope Logo">
                    <p class="f1-policy">The F1 logo, FORMULA 1, F1, GRAND PRIX and related marks are trademarks of Formula One Licensing BV, a Formula 1 company. All rights reserved.</p>
                </div>
                <div class="col-md-7 col-sm-6 col-xs-12 copyright"></div>
            </div></footer></div>`, 'beforeEnd');

document.querySelector('footer .container').insertAdjacentElement('beforeBegin', document.querySelector('.ArnSupportLinks.ArnSupportBottom'));

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.translateText('#slideit > label', 'support');
                noLRGPortal.translateText('#slideit > section > span', 'support');
                noLRGPortal.translateText('#slideit .tw div', 'email us');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');