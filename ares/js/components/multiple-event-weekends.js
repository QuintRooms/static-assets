export default function popUp(config) {
    if (!document.querySelector('.SearchHotels') && !document.querySelector('.SinglePropDetail')) return;

    function showWeekendTwoPopUp() {
        document.body.classList.toggle('fixed');
        window.localStorage.setItem('weekendTwoPopup', 'true');
        const page_element = document.querySelector('.SearchHotels') ? '.ArnSearchContainerMainDiv' : '#theBody';
        // const page_element = document.querySelector('.SearchHotels') ? '.ArnSearchContainerMainDiv' : '.ArnSubPage.PropDetailView';
        document.querySelector(page_element).insertAdjacentHTML(
            'afterbegin',
            `
            <div id="popup-modal" class="modal-overlay show-modal">
                <div id="weekend-popup" class="modal-container">
                    <div class="modal-header">
                        <h3>Weekend Two?</h3>
                        <span class="close-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                                <polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"></polyline>
                                <polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"></polyline>
                            </svg>
                        </span>
                    </div>
                    <span>Do you want to view exclusive hotel rates for weekend two?</span>
                    <a target="_blank" href="">Check Rates</a>
                    <a id="close-popup">Don't show this message again</a>
                </div>
            </div>
            <style>


            #weekend-popup {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 30vw;
                height: 20vh;
                border: 2px solid ${config.primary_color};
            }

            #close-popup {
                cursor: pointer;
            }

            #close-popup:hover {
                text-decoration: underline
            }

            #popup-modal.show-modal {
                z-index: 501;
                top: 0px;
            }

            #popup-modal .modal-header {
                width: 100%;
            }
            </style>
            `
        );
        document.querySelector('#close-popup').addEventListener('click', () => {
            document.body.classList.toggle('fixed');
            document.querySelector('.modal-overlay').style.display = 'none';
        });
        document.querySelector('.close-modal').addEventListener('click', () => {
            document.body.classList.toggle('fixed');
            document.querySelector('.modal-overlay').style.display = 'none';
        });
    }

    document.querySelector('#theCheckIn').addEventListener('click', () => {
        if (localStorage.getItem('weekendTwoPopup')) return;
        showWeekendTwoPopUp();
    });
    document.querySelector('#theCheckOut').addEventListener('click', () => {
        if (localStorage.getItem('weekendTwoPopup')) return;
        showWeekendTwoPopUp();
    });
}
