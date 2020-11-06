import Utilities from '../../utilities';

const utilities = new Utilities();

export default class Banner {
    constructor(event, link, text) {
        this.event = event;
        this.link = link;
        this.text = text;
    }

    init() {
        this.renderBanner();
        if (this.link) this.addButtonToBanner();
    }

    async renderBanner(text) {
        await utilities.waitForSelectorInDOM('header');
        // render the default banner with just the text
    }

    addButtonToBanner() {
        // Add a button with outbound link
    }
}
