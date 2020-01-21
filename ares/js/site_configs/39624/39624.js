import BasePortal from '../../build.js';

class ChildPortal extends BasePortal{
    constructor(){
        super();
        console.log('CUGPortal.constructor() fired.');
        this.init();
    }

    init(){
        super.getSiteConfigJSON();
        console.log('CUGPortal.init() fired.');
    }
}

let child_portal = new ChildPortal();