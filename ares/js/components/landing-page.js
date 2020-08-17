import Utilities from '../utilities';

const utilities = new Utilities();

export default class LandingPage {
    constructor(landing_page_events, primary_color, secondary_color, primary_text_color) {
        this.landing_page_events = landing_page_events;
        this.primary_color = primary_color;
        this.secondary_color = secondary_color;
        this.primary_text_color = primary_text_color;
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
            if (i === 0) container.insertAdjacentHTML('afterBegin', '<h1>Upcoming Events</h1><div class="events"></div>');

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
                    display: grid;
                    grid-template-columns: ${this.setUpEventColumns()};
                    max-width: 75vw;
                }

                .event-container{
                    margin: 18px;
                    padding: 18px;
                    text-align: center;
                    color: ${this.primary_text_color};
                    border: 1px solid ${this.primary_text_color};
                    position: relative;
                    background: linear-gradient(
                        to right,
                        ${this.secondary_color}c9,
                        ${this.secondary_color}c9
                    );
                    text-decoration: none;
                    z-index: 1;
                }
                .event-container::before{
                    position: absolute;
                    content: "";
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background: linear-gradient(
                        to bottom,
                        ${this.secondary_color}c9,
                        ${this.primary_color}c9
                    );
                    z-index: -1;
                    transition: opacity 0.45s ease-in-out;
                    opacity: 0;
                }

                .event-container:hover::before{
                    opacity: 1;
                }

                .event-container h2{
                    font-weight: normal;
                }

                @media screen and (max-width: 800px){
                    .events{
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        `
        );
    }
}
