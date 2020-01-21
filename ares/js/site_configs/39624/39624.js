class ChildPortal extends BasePortal{
    constructor(){
        super();
        console.log('CUGPortal.constructor() fired.');
        this.init();
    }

    init(){
        super.getPageName();
        console.log('CUGPortal.init() fired.');
    }
}