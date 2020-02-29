import BasePortal from '../../build.js';

class ChildPortal extends BasePortal {
	
    constructor() {
        super();
        console.log('CUGPortal.constructor() fired.');
        super.init();
    }
}

let child_portal = new ChildPortal();