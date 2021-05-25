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
           display: none;
    }

    .overlay {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 995;
        background: rgba(0,0,0,0.70);
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
    constructor(modal_title, modal_body, modal_id, modal_trigger_selector) {
        this.modal_title = modal_title;
        this.modal_body = modal_body;
        this.modal_id = modal_id;
        this.modal_trigger_selector = modal_trigger_selector;
        this.init();
        this.outer_modal = document.querySelector('.outer-modal');
        this.overlay = document.querySelector('.overlay');
        this.modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
        this.modal_closers = document.querySelector(`.button-close-modal`);
    }

    init() {
        this.setModalTriggers();
        this.insertModalContainer();
        this.openListeners();
    }

    openListeners() {
      // const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
        console.log('this.modal_triggers', this.modal_triggers);
        this.modal_triggers.forEach((modal_trigger) => {
            modal_trigger.addEventListener('click', this.showModal);
      });
    }

    closeListeners() {
      // const modal_closers = document.querySelectorAll('.button-close-modal');
        console.log('this.modal_closers', this.modal_closers);
        this.modal_closers.forEach((modal_closer) => {
            modal_closer.addEventListener('click', this.hideModal);
            document.addEventListener('click', (event) => {
                console.log(this.hideModal);
                if (!event.target.closest('.outer-modal')) {
                    this.hideModal();
                }
            });
        });
    }

    showModal() {
        this.outer_modal.style.display = 'block';
        this.overlay.style.display = 'block';
    }

    hideModal() {
        this.outer_modal.style.display = 'none';
        this.overlay.style.display = 'none';
    }

    // async initiateOpenModal() {
    //     console.log('inside initiateopenModal');
    //     await utilities.waitForSelectorInDOM(`.${this.modal_id}-trigger`);
    //     const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
    //     console.log('modal_triggers inside inititateOpenModal', modal_triggers);

    //     modal_triggers.addEventListener('click', this.openModal);
    //     console.log('initiateOpenModal executed');
    // }

    insertModalContainer() {
        document.body.insertAdjacentHTML(
            'beforeend',
            `
            <div class='overlay hide'></div>
            <div class='outer-modal hide' id=${this.modal_id}>
                <button id='x-button' class='button-close-modal upper-right'>x</button>
                <div id='modal-title'>${this.modal_title}</div>
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
        await utilities.waitForSelectorInDOM('#HotelNameContainer');
        const modal_trigger_setter = document.querySelector('#HotelNameContainer');
        modal_trigger_setter.classList.add(`${this.modal_id}-trigger`);
    }
}
