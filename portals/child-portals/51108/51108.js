let noLRGPortal = new NoLRGPortal();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function(){  
        noLRGPortal.ratesReadyEventMethods();
    },1)
});

noLRGPortal.updateAttribute('href', 'https://bookrooms.formula1.com/v6', 'header a');
noLRGPortal.updateAttribute('src', 'https://static.hotelsforhope.com/portals/child-portals/51108/images/F1_Rooms_H4H_LockUp_White.png', 'header img');
noLRGPortal.updateAttribute('href', 'https://static.hotelsforhope.com/portals/child-portals/51108/images/favicon.png', '#favicon');
