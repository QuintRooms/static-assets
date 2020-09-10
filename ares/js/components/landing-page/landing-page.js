import Utilities from '../../utilities';

const utilities = new Utilities();

export default class LandingPage {
    constructor(landing_page_events) {
        this.landing_page_events = landing_page_events;
    }

    init() {
        if (!document.querySelector('.RootBody')) return;

        this.insertStyles();
        this.generateEventHtml();
        this.removeArnSearchContainer();
    }

    /**
     *@description Removes ARN search container
     *@return void
     */
    async removeArnSearchContainer() {
        document.body.insertAdjacentHTML('afterBegin', '<style>#root-search-container{display: none;}');

        await utilities.waitForSelectorInDOM('#root-search-container');

        if (!document.querySelector('#root-search-container')) return;

        document.querySelector('#root-search-container').remove();
    }

    /**
     *@description Generates the events in HTML
     *@return void
     */
    async generateEventHtml() {
        await utilities.waitForSelectorInDOM('.ArnSearchContainerMainDiv');

        const container = document.querySelector('.ArnSearchContainerMainDiv');

        if (!container) return;

        this.landing_page_events.forEach((event, i) => {
            if (i === 0) container.insertAdjacentHTML('afterBegin', '<h1>Choose Your Upcoming Event</h1><div class="events"></div>');

            if (utilities.checkForPastDate(event.end_date)) return;

            document.querySelector('.events').insertAdjacentHTML(
                'beforeEnd',
                `
                <a class="event-container" href="${event.portal_url}" target="_blank">
                        <h2 class="event-name">${event.name}</h2>
                        <div class="display-date">${event.display_date}</div>
                </a>
                `
            );
        });
    }

    /**
     *@description Sets the number of columns for the grid
     *@return string
     */
    setUpEventColumns() {
        if (this.landing_page_events.length === 1) return `1fr`;
        if (this.landing_page_events.length === 2) return `1fr 1fr`;

        return `1fr 1fr 1fr`;
    }

    /**
     *@description Inserts styles into the body
     *@return void
     */
    insertStyles() {
        document.body.insertAdjacentHTML(
            'afterBegin',
            `
            <style>
                .events{
                    grid-template-columns: ${this.setUpEventColumns()};
                }
            </style>
        `
        );
    }
}
