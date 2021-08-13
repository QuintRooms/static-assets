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

#seacret-modal-adults-logo img {
    top: 50%;
    left: 50%;
    max-width: 200px;
    padding: 15px;
}

#modal-title {
    margin-top: 8px;
    width: 100%;
    text-align: center;
    font-size: 20px;
}

#number-adults-input {
    width: 3rem;
    height: 3rem;
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
    font-size: 18px;
    text-align: center;
    padding-top: 1rem;
}

#max-adults-text {
    font-size: 14px;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
}

.seacret-alert {
    color: red;
}

#max-limit-alert {
    font-size: 14px;
    visibility: hidden;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.modal-body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

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
        // return {};
    }

    checkAdultsParam() {
        const current_url = new URL(window.location.href);
        const current_params = current_url.searchParams;
        console.log(current_params);
        const check_adults_param = (params) => {
            for (const key of params.keys()) {
                if (key === 'adults') {
                    return true;
                }
            }
        };
        if (!check_adults_param(current_params)) this.showModal();
    }

    showModal = () => {
        this.seacret_modal_adults.style.display = 'block';
        this.overlay.style.display = 'block';
        console.log('inside ShowModal');
        this.modal_submit_btn.addEventListener('click', (event) => {
            event.preventDefault();
            const input_value = Number(this.adults_input.value);
            console.log('Number.isInteger(input_value)', Number.isInteger(input_value), input_value > 0, input_value < 5);
            console.log('typeof this.adults_input.value', typeof input_value);
            if (Number.isInteger(input_value) && input_value > 0 && input_value < 5) {
                const current_url = new URL(window.location.href);
                this.hideOverlay();
                this.hideModal();
                console.log(current_url);
                current_url.searchParams.set('adults', input_value);
                console.log(current_url);
                window.location.href = current_url;
            } else {
                document.querySelector('#max-limit-alert').style.visibility = 'visible';
            }
        });
    };

    hideModal = () => {
        this.seacret_modal_adults.style.display = 'none';
        this.overlay.style.display = 'none';
        this.modal_submit_btn.removeEventListener('click', this.hideModal);
    };

    hideOverlay = () => {
        this.seacret_modal_adults.style.display = 'none';
        this.overlay.style.display = 'none';
        document.removeEventListener('click', (event) => {
            if (event.target.closest('.overlay')) this.hideOverlay();
        });
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
                    <div class='seacret-alert' id='max-limit-alert'>
                        There is a maximum of 4 adults allowed per trip purchase.
                    </div>
                    <input type='number' min='1' step='1' max='4' class='seacret-form-input' id='number-adults-input'></input>
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
