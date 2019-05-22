let lrgPortal = new LRGPortal();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function(){  
        lrgPortal.ratesReadyEventMethods();
    },1)
});

