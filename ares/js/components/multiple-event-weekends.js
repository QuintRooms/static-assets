export default function popUp(config, event2_name, url1, url2) {
    if (!document.querySelector('.SearchHotels') && !document.querySelector('.SinglePropDetail')) return;

    function showWeekendTwoPopUp(url, event) {
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
            <style>
            @font-face {
                font-family: 'F1-Regular';
                src: url('https://media.travsrv.com/appSkins/45249/v6/themes/standard/Formula1-Display-Regular_web.eot?#iefix') format("embedded-opentype"), url("https://media.travsrv.com/appSkins/45249/v6/themes/standard/Formula1-Display-Regular_web.ttf") format("truetype");
            }

            @font-face {
                font-family: 'F1-Black';
                src: url('https://media.travsrv.com/appSkins/45249/v6/themes/standard/Formula1-Display-Black_web.eot?#iefix') format("embedded-opentype"), url("https://media.travsrv.com/appSkins/45249/v6/themes/standard/Formula1-Display-Black_web.ttf") format("truetype");
            }
            
            @font-face {
                font-family: 'F1-Bold';
                src: url('https://media.travsrv.com/appSkins/45249/v6/themes/standard/Formula1-Display-Bold_web.eot?#iefix') format("embedded-opentype"), url("https://media.travsrv.com/appSkins/45249/v6/themes/standard/Formula1-Display-Bold_web.ttf") format("truetype");
            }

            #weekend-popup {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: 50vw;
                height: 25vh;
                border: 5px solid ${config.primary_color};
                border-radius: 20px;
            }

            #weekend-popup .modal-header {
                border-bottom: 3px solid #6C6C6C;
                justify-content: center;
            }

            #header-text {
                width: 100%;
                display: flex;
                justify-content: center;
            }

            #weekend-popup .modal-header h3 {
                font-size: 20px;
                font-family: 'F1-Regular', 'Helvetica';
                margin-bottom: 20px;
                letter-spacing: 1px;
            }

            #weekend-popup #popup-message {
                font-family: 'F1-Regular', 'Helvetica';
                font-size: 15px;
                letter-spacing: 1px;
            }

            #check-rates {
                border: 2px solid ${config.primary_color};
                padding: 10px 20px 10px 20px;
                text-decoration: none;
                color: #fff;
                background: ${config.primary_color};
                font-family: 'F1-Regular', 'Helvetica';
            }

            #check-rates:hover {
                color: #000;
                background: #fff;
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

        document.querySelector('.close-modal').addEventListener('click', () => {
            document.body.classList.toggle('fixed');
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
