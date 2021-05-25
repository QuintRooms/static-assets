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

    .hide {
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
        // this.modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
    }

    init() {
        this.setModalTriggers();
        this.insertModalContainer();
        this.initiateOpenModal();
    }

    toggleModalVisibility() {
        console.log('inside toggleModalVisibility');
        const modal_state = this.outer_modal.classList;
        const overlay_state = this.overlay.classList;
        const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
        console.log('modal_triggers inside toggleModal', modal_triggers);

        if (modal_state.contains('hide')) {
            modal_state.remove('hide');
            overlay_state.remove('hide');
            modal_triggers.removeEventListener('click', this.openModal);
            document.addEventListener('click', this.closeModal);
        } else {
            modal_state.add('hide');
            overlay_state.add('hide');
            document.removeEventListener('click', this.closeModal);
            modal_triggers.addEventListener('click', this.openModal);
        }
    }

    async openModal(event) {
        const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
        console.log('inside openModal');
        console.log('openModal event.target', event.target);
        console.log('modal triggers inside openModal', modal_triggers);
        // this.toggleModalVisibility();

        event.preventDefault();
        if (event.target.matches(modal_triggers)) {
            console.log('inside openModal if statement');
            this.toggleModalVisibility();
        }
    }

    async initiateOpenModal() {
        console.log('inside initiateopenModal');
        await utilities.waitForSelectorInDOM(`.${this.modal_id}-trigger`);
        const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
        console.log('modal_triggers inside inititateOpenModal', modal_triggers);

        modal_triggers.addEventListener('click', this.openModal);
        console.log('initiateOpenModal executed');
    }

    closeModal(event) {
        console.log('inside closeModal');
        event.preventDefault();
        if (event.target.matches('.button-close-modal') || !event.target.closest('.outer-modal')) {
            this.toggleModalVisibility();
        }
    }

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

    // async openModal() {
    //     await utilities.waitForSelectorInDOM(`.${this.modal_id}-trigger`);
    //     const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
    //     console.log('this.outer_modal', this.outer_modal);
    //     modal_triggers.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         if (this.outer_modal.classList.contains('hide') && event.target.matches(`.${this.modal_id}-trigger`)) {
    //             console.log('modal classlist before open click toggle', this.outer_modal.classList);
    //             console.log('openModal clicked!');
    //             this.outer_modal.classList.remove('hide');
    //             this.overlay.classList.remove('hide');
    //             console.log('modal classlist after open click', this.outer_modal.classList);
    //             this.toggleModal();
    //         }
    //     });
    // }

    // closeModal() {
    //     const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
    //     document.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         if (!this.outer_modal.classList.contains('hide') && event.target.matches('.button-close-modal') || !event.target.closest('.outer_modal')) {
    //             console.log('modal classlist before close click toggle', this.outer_modal.classList);
    //             console.log('closeModal clicked!');
    //             this.outer_modal.classList.add('hide');
    //             this.overlay.classList.add('hide');
    //             console.log('modal classlist after close click', this.outer_modal.classList);
    //             this.toggleModal();
    //         }
    //     });
    // }



    // async openModal() {
    //     const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
    //     await utilities.waitForSelectorInDOM(modal_triggers);
    //     this.modal_triggers.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         console.log('modal classlist before open click toggle', this.outer_modal.classList);
    //         console.log('openModal clicked!');
    //         this.toggleModalVisibility();
    //         console.log('modal classlist after close click', this.outer_modal.classList);
    //     });
    //     document.removeEventListener('click', (event) => {
    //         event.preventDefault();
    //         if (event.target.matches('.button-close-modal') || !event.target.closest('.outer_modal')){
    //             this.toggleModalVisibility();
    //         }
    //     });
    // }

    // async closeModal() {
    //     const modal_triggers = document.querySelector(`.${this.modal_id}-trigger`);
    //     await utilities.waitForSelectorInDOM(modal_triggers);
    //     document.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         console.log('modal classlist before close click toggle', this.outer_modal.classList);
    //         console.log('closeModal clicked!');
    //         if (event.target.matches('.button-close-modal') || !event.target.closest('.outer_modal')){
    //             this.toggleModalVisibility();
    //             console.log('modal classlist after close click', this.outer_modal.classList);
    //         }
    //     });
    //     this.modal_triggers.removeEventListener('click', (event) => {
    //         event.preventDefault();
    //         this.toggleModalVisibility();
    //     });
    // }

    // createExitButton() {
    //     if (this.button_text)  {

    //     }
    // }
}
