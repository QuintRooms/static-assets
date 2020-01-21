import BasePortal from '../../build.js';

class ChildPortal extends BasePortal {
    constructor() {
        super();
        console.log('CUGPortal.constructor() fired.');
        this.init();
    }

    init() {
        console.log('CUGPortal.init() fired.');
        super.getSiteID()
            .then(() => {
                super.getSiteConfigJSON();
            });
    }
}

let child_portal = new ChildPortal();