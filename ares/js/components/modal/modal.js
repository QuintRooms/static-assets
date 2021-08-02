import Utilities from '../../utilities';

const utilities = new Utilities();

const modal_styles_str = `

.outer-modal {
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
    background: rgba(0,0,0,0.40);
    display: none;
}

#x-button {
    border: none;
    color: #a1a1a1;
    display: inline-block;
    padding: 0px;
    margin-right: 16px;
    margin-top: 8px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap
}

.upper-right {
    position: absolute;
    right: 0;
    top: 0
}

#modal-title {
    margin-top: 8px;
    width: 100%;
    text-align: center;
    font-size: 20px;
}

hr .solid{
    border-top: 4px solid #5dc3ac;
}

.modal-body-container {
    padding-left: 10px;
    padding-right: 10px;
}

.modal-confirm-btn-container {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    border-radius: inherit;
    height: 60px;
    border:none;
    background: inherit;
}

.modal-confirm-btn {

    margin: 16px;
    padding: 8px;
    min-width: 180px;
    font-weight: bold;
    color: #fff;
    background: #5dc3ac;
    height: 36px;
    border-radius: 18px;
    border: none;
}

.modal-confirm-btn:hover {
    border: 3px solid #5dc3ac;
    color: #5dc3ac;
    background: #fff;
}


@media screen and (max-width: 768px) {

    .outer-modal {
        width: 75vw;
    }

}

@media screen and (max-width: 320px) {

    .modal-confirm-btn {
        min-width: 120px;
}

}
`;

export default class Modal {
    constructor(modal_title, modal_body, modal_id, modal_trigger_selector, exitButtonText) {
        this.modal_title = modal_title;
        this.modal_body = modal_body;
        this.modal_id = modal_id;
        this.modal_trigger_selector = modal_trigger_selector;
        this.exitButtonText = exitButtonText;
        this.outer_modal = '';
        this.overlay = '';
        this.modal_triggers = '';
        this.modal_closers = '';
    }

    init() {
        this.setModalTriggers();
        this.insertModalContainer();
        this.createExitButton();
        this.setVars().then((data) => {
            this.openListeners();
        });
    }

    async setVars() {
        await utilities.waitForSelectorInDOM(`.${this.modal_id}-trigger`);
        this.modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
        this.outer_modal = document.querySelector('.outer-modal');
        this.modal_closers = document.querySelectorAll(`.button-close-modal`);
        this.overlay = document.querySelector('.overlay');
        return {};
    }

    openListeners() {
        this.modal_triggers.addEventListener('click', this.showModal);
    }

    closeListeners() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.overlay')) this.hideOverlay();
        });
        this.modal_closers.forEach((closer) => {
            closer.addEventListener('click', this.hideModal);
        });
    }

    showModal = () => {
        this.outer_modal.style.display = 'block';
        this.overlay.style.display = 'block';
        this.modal_triggers.removeEventListener('click', this.showModal);
        this.closeListeners();
    };

    hideModal = () => {
        this.outer_modal.style.display = 'none';
        this.overlay.style.display = 'none';
        this.modal_closers.forEach((closer) => {
            closer.removeEventListener('click', this.hideModal);
        });
        this.openListeners();
    };

    hideOverlay = () => {
        this.outer_modal.style.display = 'none';
        this.overlay.style.display = 'none';
        document.removeEventListener('click', (event) => {
            if (event.target.closest('.overlay')) this.hideOverlay();
        });
        this.openListeners();
    };

    insertModalContainer() {
        document.body.insertAdjacentHTML(
            'beforeend',
            `
            <div class='overlay'></div>
            <div class='outer-modal' id=${this.modal_id}>
                <button id='x-button' class='button-close-modal upper-right'>x</button>
                <div id='modal-title'>${this.modal_title}</div>
                <hr class='solid'>
                <div class='modal-body-container'>${this.modal_body}</div>
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

    async setModalTriggers() {
        await utilities.waitForSelectorInDOM(this.modal_trigger_selector);
        const modal_trigger_setter = document.querySelector(this.modal_trigger_selector);
        modal_trigger_setter.classList.add(`${this.modal_id}-trigger`);
    }

    createExitButton() {
        const outer_modal = document.querySelector('.outer-modal');
        if (this.exitButtonText) {
            const modal_confirm_btn_container = document.createElement('div');
            const modal_confirm_btn = document.createElement('button');

            modal_confirm_btn_container.classList.add('modal-confirm-btn-container');
            modal_confirm_btn.classList.add('button-close-modal');
            modal_confirm_btn.classList.add('modal-confirm-btn');
            modal_confirm_btn_container.appendChild(modal_confirm_btn);
            outer_modal.appendChild(modal_confirm_btn_container);
            modal_confirm_btn.innerHTML = this.exitButtonText;
        }
    }
}
