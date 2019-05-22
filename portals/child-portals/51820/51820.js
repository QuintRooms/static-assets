let lrgPortal = new LRGPortal();

lrgPortal.createLRGPortal();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function(){  
        lrgPortal.ratesReadyEventMethods();
    },1)
});

