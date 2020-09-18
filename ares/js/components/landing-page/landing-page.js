import Utilities from '../../utilities';

const utilities = new Utilities();

export default class LandingPage {
    constructor(landing_page_events, hide_search) {
        this.landing_page_events = landing_page_events;
        this.hide_search = hide_search;
    }

    init() {
        if (!document.querySelector('.RootBody')) return;

        this.generateEventHtml();
        this.removeArnSearchContainer();
    }

    /**
     *@description Removes ARN search container
     *@return void
     */
    async removeArnSearchContainer() {
        if (!this.hide_search) return;

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
            if (i === 0) container.insertAdjacentHTML('beforeEnd', `<h1>Upcoming Events</h1><div class="events"></div>`);

            if (utilities.checkForPastDate(event.end_date)) return;

            document.querySelector('.events').insertAdjacentHTML(
                'beforeEnd',
                `
                <a class="event-container event-${i + 1}" href="${event.portal_url}" target="_blank">
                    <div class="event-details">
                        <h2 class="event-name">${event.name}</h2>
                        <div class="display-date">${event.display_date}</div>
                    </div>
                        <div class="view-hotels">View Hotels</div>
                </a>
                `
            );
        });
    }
}
