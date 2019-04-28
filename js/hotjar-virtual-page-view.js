class HotJarVirtualView {

    site_id;
    page_name;
    test_name;

    constructor(site_id, page_name, test_name) {
        this.site_id = site_id;
        this.page_name = page_name;
        this.test_name = test_name;

        this.init();
    }

    init() {
        this.getSiteId();
        this.getPageName();
        this.getTestName();
    };

    getSiteId() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
    }

    getPageName() {
        let bodyClasses = document.querySelector('body');

        if (bodyClasses.classList.contains('SearchHotels')) {
            this.page_name = 'search-results';
            return;
        }
        if (bodyClasses.classList.contains('SinglePropDetail')) {
            this.page_name = 'property-detail';
            return;
        }
        if (bodyClasses.classList.contains('CheckOutForm')) {
            this.page_name = 'checkout';
            return;
        }
        if (bodyClasses.classList.contains('ConfirmationForm')) {
            this.page_name = 'confirmation';
            return;
        }

        // formula 1 static pages
        if (bodyClasses.classList.contains('bookroomsLanding')){
            this.page_name = 'bookrooms-landing';
            return;
        }

        if (bodyClasses.classList.contains('fowtPage')){
            this.page_name = 'fowt-landing';
            return;
        }
    }

    getTestName() {
        let test_element = document.querySelector('.testName');

        if (test_element) {
            this.test_name = test_element.getAttribute('data-test');
            return;
        }
    }

    hitVirtualView() {
        // hits hotjar for all sites
        if (this.page_name) {
            hj('vpv', '/' + this.page_name);
        }
        // hits hotjar when there is no test running - our control
        if (this.site_id && this.page_name && this.test_name == null) {
            hj('vpv', '/' + this.site_id + '/' + this.page_name);
        }
        // hits hotjar when there is a test name - our experiment
        if (this.site_id && this.page_name && this.test_name) {
            hj('vpv', '/' + this.site_id + '/' + this.page_name + '/' + this.test_name);
        }
        return;
    }
}

let hotJarVirtualView = new HotJarVirtualView();
hotJarVirtualView.hitVirtualView();