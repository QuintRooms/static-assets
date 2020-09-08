export default function popUp(config, event2_name, url1, url2) {
    if (!document.querySelector('.SearchHotels') && !document.querySelector('.SinglePropDetail')) return;

    function showWeekendTwoPopUp(url, event) {
        document.body.classList.toggle('hidden');
        window.localStorage.setItem('weekendTwoPopup', 'true');
        const page_element = document.querySelector('.SearchHotels') ? '.ArnSearchContainerMainDiv' : '#theBody';
        // const page_element = document.querySelector('.SearchHotels') ? '.ArnSearchContainerMainDiv' : '.ArnSubPage.PropDetailView';
        document.querySelector(page_element).insertAdjacentHTML(
            'afterbegin',
            `
            <div id="popup-modal" class="modal-overlay show-modal">
                <div id="weekend-popup" class="modal-container">
                    <div class="modal-header">
                        <div id="header-text">
                            <h3>${event}</h3>
                        </div>
                        <span class="close-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                                <polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"></polyline>
                                <polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"></polyline>
                            </svg>
                        </span>
                    </div>
                    <span id="popup-message">Looking for exclusive rates for the ${event}?</span>
                    <a id="check-rates" target="_blank" href="${url}">Check Rates</a>
                </div>
            </div>
            `
        );

        document.querySelector('.close-modal').addEventListener('click', () => {
            document.body.classList.toggle('hidden');
            document.querySelector('.modal-overlay').style.display = 'none';
        });
    }

    const event_url = config.site_id.toString() === document.querySelector('meta[name="siteId"]').content ? url2 : url1;
    const event_name = config.site_id.toString() === document.querySelector('meta[name="siteId"]').content ? event2_name : config.lodging.event_name;

    document.querySelector('#theCheckIn').addEventListener('click', () => {
        if (localStorage.getItem('weekendTwoPopup')) return;
        showWeekendTwoPopUp(event_url, event_name);
    });
    document.querySelector('#theCheckOut').addEventListener('click', () => {
        if (localStorage.getItem('weekendTwoPopup')) return;
        showWeekendTwoPopUp(event_url, event_name);
    });
}
