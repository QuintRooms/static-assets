export default function popUp(config) {
    console.log('CONFIG: ', config);
    function showWeekendTwoPopUp() {
        document.body.classList.toggle('fixed');
        window.localStorage.setItem('weekendTwoPopup', 'true');
        document.querySelector('.ArnSearchContainerMainDiv').insertAdjacentHTML(
            'afterbegin',
            `
            <div class="modal-overlay show-modal">
                <div id="weekend-popup" class="modal-container">
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
                border: 2px solid #ccc;
            }

            #close-popup {
                cursor: pointer;
            }

            #close-popup:hover {
                text-decoration: underline
            }
            </style>
            `
        );
        document.querySelector('#close-popup').addEventListener('click', () => {
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
