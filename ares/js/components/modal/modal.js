import Utilities from '../../utilities';

const utilities = new Utilities();

const modal_styles_str = `
    #modal-container {
        background: white;
        border-radius: 6px;
        box-sizing: border-box;
        width: 300px;
        max-height: 90%;
        padding: 15px;
        flex-direction: column;
        position: relative;
        align-self: center;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 990;
        transform: translate(-50%, -50%);

    }
    #x-button {
        position: absolute;
        margin-right: 4px;
        margin-top: 4px;
    }
`;

export default class Modal {
    constructor(modal_title, modal_body, modal_id, button_text) {
        this.init();
        this.modal_title = modal_title;
        this.modal_body = modal_body;
        this.moald_id = modal_id;
        this.button_text = button_text;
        this.modal_container = document.querySelector('.modal-container');
    }

    init() {
        this.insertModalContainer();
        this.setModalTitle(this.modal_title);
        this.setModalBody(this.modal_body);
        this.modal_container.classList.add('is-visible');
        this.modal_container.id = this.modal_id;

        // this.closeModal();
    }

    insertModalContainer() {
        document.body.insertAdjacentHTML(
            'beforeend',
            `
            <div class='overlay'>fart</div>
            <div class='modal-container id=${this.modal_id}'>
                <button id='x-button' class='button-close-modal'>x</button>
                <div id='modal-title'>${this.modal_title}</div>
                <div class='modal-body-container'>${this.modal_body}</div>
            </div>
            <style>
                ${modal_styles_str}
            </style>
        `
        );
    }

    setModalTitle() {
        if (this.modal_title) {
            document.querySelector('#modal-title').appendChild(this.modal_title);
        }
    }

    setModalBody() {
        document.querySelector('.modal-body-container').insertAdjacentHTML(`beforeEnd, <div>${this.modal_body}</div>`);
    }

    closeModal() {
        document.addEventListener('click', (event) => {
            if (event.target.matches('.button-close-modal') || !event.target.closest('.modal-container')) {
                this.modal_container.classList.toggle('is-visible');
            }
        });
    }

    setModalTrigger() {
        const modal_triggers = document.querySelectorAll(`.${this.modal_id}-trigger`);
        modal_triggers.addEventListener('click', (event) => {
            if (event.target.matches(`.${this.modal_id}-trigger`)) {
                this.modal_container.classList.toggle('is-visible');
            }
        });
    }

    // createExitButton() {
    //     if (this.button_text)  {

    //     }
    // }

   
}
