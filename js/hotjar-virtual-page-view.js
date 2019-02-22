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

    async init() {
        await this.getSiteId();
        await this.getPageName();
        await this.getTestName();
    };

    async getSiteId() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
    }

    async getPageName() {
        let bodyClasses = document.querySelector('body');

        if (bodyClasses.classList.contains('SearchHotels')) {
            this.page_name = 'search-results';
        }
        if (bodyClasses.classList.contains('SinglePropDetail')) {
            this.page_name = 'property-detail';
        }
        if (bodyClasses.classList.contains('CheckOutForm')) {
            this.page_name = 'checkout';
        }
        if (bodyClasses.classList.contains('ConfirmationForm')) {
            this.page_name = 'confirmation';
        }
    }

    async getTestName() {
        let test_element = document.querySelector('.testName');

        if (test_element) {
            this.test_name = test_element.textContent;
        }
    }

    hitVirtualView() {
        if (this.page_name) {
            hj('vpv', '/' + this.page_name);
        }

        if (this.page_name) {
            hj('vpv', '/' + this.site_id + '/' + this.page_name);
        }

        if (this.test_name) {
            hj('vpv', '/' + this.site_id + '/' + this.page_name + this.test_name);
        }
    }
}

let hotJarVirtualView = new HotJarVirtualView();
hotJarVirtualView.hitVirtualView();
console.dir(hotJarVirtualView);