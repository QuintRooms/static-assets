let f1Portal = new LRGPortal();

f1Portal.updateAttribute('href', 'https://bookrooms.formula1.com/v6', 'header a');
f1Portal.updateAttribute('src', 'https://static.hotelsforhope.com/portals/child-portals/51108/img/F1_Rooms_H4H_LockUp_White.png', 'header img');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        f1Portal.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate">Exclusive Rate</span><span class="percent-off"><span class="yourSavings"></span></span></div>');
        f1Portal.singlePropExclusiveTag('<div class="exclusiveRate">Exclusive Rate</div>');
    }, 1);
});