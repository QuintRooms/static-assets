import Utilities from '../../utilities';
import logo from './logo.png';

const utilities = new Utilities();

const modal_styles_str = `

.seacret-modal-adults {
    background: white;
    border-radius: 18px;
    box-sizing: border-box;
    width: 600px;
    max-height: 75%;
    overflow: hidden;
    padding: 15px;
    flex-direction: column;
    align-items: center;
    align-self: center;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 995;
    transform: translate(-50%, -50%);
    display: none;
}

.overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 995;
    background: rgba(0,0,0,0.90);
    display: none;
}

#seacret-modal-adults-logo {
    display: grid;
    grid-template-columns: 10% auto 10%;
}

#seacret-modal-adults-logo img {
    grid-column: 2;
    justify-self: center;
    top: 50%;
    left: 50%;
    max-width: 200px;
    padding: 15px;
}

#number-adults-input {
    width: 3rem;
    height: 3rem;
    font-size: 24px;
    text-align: center;
}

hr .solid{
    border-top: 4px solid #5dc3ac;
}

.modal-body-container {
    padding-left: 10px;
    padding-right: 10px;
}

.modal-body-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    text-align: center;
    padding-top: 1rem;
}

#max-adults-text {
    font-size: 14px;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
}

#max-limit-alert {
    font-size: 12px;
    visibility: hidden;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: red;
    color: white;
    height: height: 3rem;
    margin: 1rem;
    transition: 1s;
    border-radius: 6px;
    font-weight: bold;
    letter-spacing: .1rem;
    text-align: center;
    padding: .6rem;
}

.modal-body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

// input[type=number]::-webkit-inner-spin-button, 
// input[type=number]::-webkit-outer-spin-button { 
//   -webkit-appearance: none; 
//   margin: 0; 
// }

@media screen and (max-width: 768px) {

    .seacret-modal-adults {
        width: 75vw;
    }

}

@media screen and (max-width: 320px) {

    .modal-confirm-btn {
        min-width: 120px;
}

}
`;

export default class ModalSeacret {
    constructor(modal_id) {
        this.modal_id = modal_id;
        // this.modal_trigger_selector = modal_trigger_selector;
        // this.seacret_modal_adults = '';
        // this.overlay = '';
        // this.modal_triggers = '';
        // this.modal_submit_btn = '';
    }

    init() {
        this.insertModalContainer();
        this.setVars().then((data) => {
            this.checkAdultsParam();
        });
    }

    async setVars() {
        await utilities.waitForSelectorInDOM(`.seacret-modal-adults`);
        this.seacret_modal_adults = document.querySelector('.seacret-modal-adults');
        this.modal_submit_btn = document.querySelector(`#number-adults-btn`);
        this.overlay = document.querySelector('.overlay');
        this.adults_input = document.getElementById('number-adults-input');
        this.modal_triggers = document.getElementById('change-adults-btn');
        console.log('modal_triggers:', this.modal_triggers);
        // return {};
    }

    checkAdultsParam() {
        let current_url = new URL(window.location.href);
        let current_params = current_url.searchParams;
        console.log(current_params);
        const check_adults_param = (params) => {
            for (let key of params.keys()) {
                if (key === 'adults') {
                    return true;
                }
            }
        };
        if (!check_adults_param(current_params)) {
            this.showModal();
        } else this.openListeners();
    }

    showModal = () => {
        this.seacret_modal_adults.style.display = 'block';
        this.overlay.style.display = 'block';
        // console.log('inside ShowModal');
        this.closeListeners();
    };

    closeListeners() {
        this.modal_triggers.removeEventListener('click', this.showModal);
        this.modal_submit_btn.addEventListener('click', this.hideModal);
    }

    openListeners() {
        this.modal_submit_btn.removeEventListener('click', this.hideModal);
        this.modal_triggers.addEventListener('click', this.showModal);
    }

    hideModal = (event) => {
        event.preventDefault();
        const input_value = Number(this.adults_input.value);

        // console.log('Number.isInteger(input_value)', Number.isInteger(input_value), input_value > 0, input_value < 5);
        // console.log('typeof this.adults_input.value', typeof input_value);
        if (Number.isInteger(input_value) && input_value > 0 && input_value < 5) {
            let current_url = new URL(window.location.href);
            this.seacret_modal_adults.style.display = 'none';
            this.overlay.style.display = 'none';
            current_url.searchParams.set('adults', input_value);
            window.location.href = current_url;
        } else {
            const limit_alert = document.querySelector('#max-limit-alert');
            limit_alert.style.visibility = 'visible';
            setTimeout(() => {
                limit_alert.style.visibility = 'hidden';
            }, 3000);
        }
    };

    insertModalContainer() {
        document.body.insertAdjacentHTML(
            'beforeend',
            `
            <div class='overlay'></div>
            <div class='seacret-modal-adults' id=${this.modal_id}>
                <div id='seacret-modal-adults-logo'>
                    <img src=${logo} alt='logo'>
                </div>
                <hr class='solid'>
                <div class='modal-body-container'>
                    <div class='modal-body-text'>
                        How many adults (ages 18+) will attend this trip?
                    </div>
                    <div id='limit-alert-container'>
                        <div class='seacret-alert' id='max-limit-alert'>
                            Only 1-4 adults allowed per trip purchase.
                        </div>
                    </div>
                    <input type='number' min='1' step='1' max='4' class='seacret-form-input' id='number-adults-input' value='2'></input>
                    <button class='seacret-confirm-btn' id='number-adults-btn'>SEE TRIP</button>
                </div>
            </div>
            <style>
                ${modal_styles_str}
                .${this.modal_id}-trigger {
                    cursor: pointer;
                }
            </style>
        `
        );
    }
}
