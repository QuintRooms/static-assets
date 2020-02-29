import BasePortal from '../../build.js';

class ChildPortal extends BasePortal {

    constructor() {
        super();
        super.init();
    }
}

let child_portal = new ChildPortal();