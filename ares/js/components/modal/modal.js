import Utilities from '../../utilities';

const utilities = new Utilities();

const modal_styles_str = `
    .outer-modal {
        background: white;
        border-radius: 6px;
        box-sizing: border-box;
        width: 300px;
        max-height: 90%;
        padding: 15px;
        flex-direction: column;
        align-self: center;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 995;
        transform: translate(-50%, -50%);
    }

    .overlay {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 995;
        background: rgba(0,0,0,0.70);
    }

    .hidden {
        display: none;
    }

    #x-button {
        border: none;
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
`;

export default class Modal {
    constructor(modal_title, modal_body, modal_id, modal_trigger) {
        this.init();
        this.modal_title = modal_title;
        this.modal_body = modal_body;
        this.modal_id = modal_id;
        this.modal_trigger = modal_trigger;
        this.outer_modal = document.querySelector('.outer-modal');
        this.openModal();
    }

    init() {
        console.log(`this.modal_title`, this.modal_title);
        console.log(`this.modal_body`, this.modal_body);
        console.log(`this.modal_id`, this.modal_id);
        console.log(`this.modal_trigger`, this.modal_trigger);
        this.setModalTriggers();
        this.insertModalContainer();
        this.openModal();
    }

    insertModalContainer() {
        document.body.insertAdjacentHTML(
            'beforeend',
            `
            <div class='overlay hidden'></div>
            <div class='outer-modal hidden' id=${this.modal_id}>
                <button id='x-button' class='button-close-modal upper-right'>x</button>
                <div id='modal-title'>${this.modal_title}</div>
                <div class='modal-body-container'>${this.modal_body}</div>
            </div>
            <style>
                ${modal_styles_str}
            </style>
        `
        );
    }

    setModalTriggers() {
        utilities.waitForSelectorInDOM(`.${this.modal_trigger}`);
        const modal_trigger_selector = document.querySelector(`.${this.modal_trigger}`);
        console.log(`.${this.modal_trigger}`);
        console.log(modal_trigger_selector);
        // modal_trigger_selector.classList.add(`${this.modal_id}-trigger`);
    }

    closeModal() {
        document.addEventListener('click', (event) => {
            if (event.target.matches('.button-close-modal') || !event.target.closest('.outer-modal')) {
                this.outer_modal.classList.toggle('hidden');
                this.openModal();
            }
        });
    }

    openModal() {
        utilities.waitForSelectorInDOM(`.${this.modal_id}-trigger`);
        const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
        console.log(modal_triggers);
        modal_triggers.addEventListener('click', (event) => {
            if (event.target.matches(`.${this.modal_id}-trigger`)) {
                this.outer_modal.classList.toggle('hidden');
                this.closeModal();
            }
        });
    }

    // createExitButton() {
    //     if (this.button_text)  {

    //     }
    // }
}
