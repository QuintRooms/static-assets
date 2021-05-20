export default class Modal {
    constructor(modal_title, modal_body, modal_id, button_text) {
        this.modal_title = modal_title;
        this.modal_body = modal_body;
        this.modal_id = modal_id;
        this.button_text = button_text;
    }

    init() {
        this.insertModalContainer();

        this.toggleModal();
    }

    insertModalContainer() {
        document.body.insertAdjacentHTML(
            'beforeend',
            `
                <div class='modal hide-modal' id="${this.modal_id}">
                    <button id='x-button' class='button-close-modal'>x</button>
                    <div id='modal-title'>${this.modal_title}</div>
                    <div class='modal-body-container'>${this.modal_body}</div>
                </div>
                <style>
                    .modal {
                        background: white;
                        border-radius: 6px;
                        width: 300px;
                        padding: 15px;
                        flex-direction: column;
                        position: fixed;
                        z-index: 10;
                        top: 0;
                        align-self: center;
                        height: 600px;
                    }

                    #x-button {
                        position: absolute;
                        right: 4px;
                        top: 4px;
                    }

                    .hide-modal{
                        display: none;
                    }
                </style>
            `
        );
    }

    toggleModal() {
        const modal_container = document.querySelector('.modal');
        document.addEventListener('click', (event) => {
            if (event.target.matches('.button-close-modal') || !event.target.closest('.modal')) {
                modal_container.classList.toggle('hide-modal');
            }
        });
    }

    setModalTrigger() {
        const modal_triggers = document.querySelectorAll(`.${this.modal_id}-trigger`);
        modal_triggers.addEventListener('click', (event) => {
            if (event.target.matches(`.${this.modal_id}-trigger`)) {
                // modal_container.classList.add;
            }
        });
    }

    // createExitButton() {
    //     if (this.button_text)  {

    //     }
    // }
}
