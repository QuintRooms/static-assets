import LandingPage from './landing-page';

const url = 'https://events.hotelsforhope.com/v6/?siteid=58196&utm_source=Website&utm_medium=Mobile&utm_campaign=Barrett-Jackson%202020';

describe('addUtmTrackingToUrls', () => {
    const html = `
    <div class="RootBody">
        <a class="event-container event-1" href="test.href" target="_blank">
            <div class="event-details">
                <h2 class="event-name">event 1</h2>
            </div>
            <div class="view-hotels">View Hotels</div>
        </a>
        <a class="event-container event-2" href="test.href" target="_blank">
            <div class="event-details">
                <h2 class="event-name">event 2</h2>
            </div>
            <div class="view-hotels">View Hotels</div>
        </a>
    </div>`;

    const landing_page = new LandingPage([
        {
            name: '2021 Scottsdale Auction',
            display_date: 'January 16 - 23, 2021',
            end_date: '1/25/2021', // M/D/YYYY
            portal_url: 'http://events.hotelsforhope.com/group-event?id=39777&utm_campaign=Barrett-Jackson%20Scottsdale%202021',
        },
        {
            name: '2021 West Palm Beach Auction',
            display_date: 'April 08 - 10, 2021',
            end_date: '04/12/2021', // M/D/YYYY
            portal_url: 'http://events.hotelsforhope.com/group-event?id=44704&utm_campaign=Barrett-Jackson%20West%20Palm%20Beach%202021',
        },
    ]);

    it('Returns an array of strings', () => {
        document.body.innerHTML = html;
        expect(landing_page.addUtmTrackingToUrls(url)).toEqual(['Website', 'Mobile']);
    });

    it('Returns if no URL is passed as an argument', () => {
        document.body.innerHTML = html;
        expect(landing_page.addUtmTrackingToUrls()).toEqual(new Error('URL is null'));
    });

    it('Returns if no elements with the class "event-container" exist', () => {
        document.body.innerHTML = `
        <div class="RootBody">
            <a class="event-1" href="test.href" target="_blank">
                <div class="event-details">
                    <h2 class="event-name">event 1</h2>
                </div>
                <div class="view-hotels">View Hotels</div>
            </a>
            <a class="event-2" href="test.href" target="_blank">
                <div class="event-details">
                    <h2 class="event-name">event 2</h2>
                </div>
                <div class="view-hotels">View Hotels</div>
            </a>
        </div>`;
        expect(landing_page.addUtmTrackingToUrls(url)).toEqual(new Error('No events exist!'));
    });

    it("Updates each event's href", () => {
        document.body.innerHTML = html;
        const new_html = `
    <div class="RootBody">
        <a class="event-container event-1" href="test.href&amp;utm_source=Website&amp;utm_medium=Mobile" target="_blank">
            <div class="event-details">
                <h2 class="event-name">event 1</h2>
            </div>
            <div class="view-hotels">View Hotels</div>
        </a>
        <a class="event-container event-2" href="test.href&amp;utm_source=Website&amp;utm_medium=Mobile" target="_blank">
            <div class="event-details">
                <h2 class="event-name">event 2</h2>
            </div>
            <div class="view-hotels">View Hotels</div>
        </a>
    </div>`;
        landing_page.addUtmTrackingToUrls(url);
        expect(document.body.innerHTML).toEqual(new_html);
    });
});
