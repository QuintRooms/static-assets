export default function exclusiveRatesComingPopup(eventName, dates) {
    if (!document.querySelector('.SearchHotels')) return;

    function ratesComingSoon(event, date) {
        if (localStorage.getItem('ratesComingSoon')) return;
        document.body.classList.toggle('hidden');
        window.localStorage.setItem('ratesComingSoon', 'true');
        document.querySelector('.ArnSearchContainerMainDiv').insertAdjacentHTML(
            'afterbegin',
            `
            <div id="popup-modal" class="modal-overlay show-modal">
                <div id="exclusive-rates-popup" class="modal-container">
                    <div class="modal-header">
                        <div id="header-text">
                            <h3>Exclusive ${event} hotel rates will be available on ${date}</h3>
                        </div>
                        <span class="close-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                                <polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"></polyline>
                                <polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"></polyline>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            `
        );

        document.querySelector('.close-modal').addEventListener('click', () => {
            document.body.classList.toggle('hidden');
            document.querySelector('.modal-overlay').style.display = 'none';
        });
    }

    setTimeout(() => {
        ratesComingSoon(eventName, dates);
    }, 2000);
}
