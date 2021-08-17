import Utilities from '../../utilities';
import logo from './logo.png';

const utilities = new Utilities();
const dayjs = require('dayjs');

const modal_styles_str = `
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

    getTripFromLocalStorage() {
        const trip_details = localStorage.getItem('trip_details');
        if (!trip_details) return;

        return JSON.parse(trip_details);
    }

    hideModal = (event) => {
        event.preventDefault();

        const input_value = Number(this.adults_input.value);
        const trip_details = this.getTripFromLocalStorage();
        const start_date = dayjs(trip_details.data.start_date).format('MM/DD/YYYY');
        const end_date = dayjs(trip_details.data.end_date).format('MM/DD/YYYY');
        const nights = dayjs(end_date).diff(dayjs(start_date), 'days');
        console.log(nights);
        // console.log('Number.isInteger(input_value)', Number.isInteger(input_value), input_value > 0, input_value < 5);
        // console.log('typeof this.adults_input.value', typeof input_value);
        if (Number.isInteger(input_value) && input_value > 0 && input_value < 5) {
            const current_url = new URL(window.location.href);
            this.seacret_modal_adults.style.display = 'none';
            this.overlay.style.display = 'none';
            current_url.searchParams.set('adults', input_value);
            current_url.searchParams.set('checkin', start_date);
            current_url.searchParams.set('nights', nights);
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
            <div class="overlay"></div>
            <div class="seacret-modal-adults" id=${this.modal_id}>
                <div id="seacret-modal-adults-logo">
                    <img src=${logo} alt="logo">
                </div>
                <hr class="solid">
                <div class="modal-body-container">
                    <div class="modal-sub-title">
                        WELCOME TO YOUR ESCAPE!
                    </div>
                    <div class="modal-body-text">
                    How many total travelers will be joining you on your escape?
                    </div>
                    <input type="number" min="1" step="1" max="4" class="seacret-form-input" id="number-adults-input" value="2"></input>
                    <div id="limit-alert-container">
                        <div class="seacret-alert" id="max-limit-alert">
                            Only 1-4 travelers allowed per trip purchase.
                        </div>
                    </div>
                    <button class="seacret-confirm-btn" id="number-adults-btn">SEE TRIP</button>
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
