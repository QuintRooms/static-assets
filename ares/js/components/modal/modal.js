import Utilities from '../../utilities';

const utilities = new Utilities();

export default class Modal {
    constructor(modal_title, modal_body, modal_id, button_text) {
        this.init();
        this.modal_title = modal_title;
        this.modal_body = modal_body;
        this.moald_id = modal_id;
        this.button_text = button_text;
    }

    init() {
        this.insertModalContainer();
        this.setModalTitle(this.modal_title);
        const modal_container = document.querySelector('.modal-container');
        modal_container.classList.add('is-visible');
        modal_container.id = this.modal_id;

        this.closeModal();
    }

    insertModalContainer() {
        document.body.insertAdjacentHTML('beforeend', `<div class='modal-container'>
        <button id='x-button' class='button-close-modal'>x</button>
        <div id='modal-title'></div>
        <div class='modal-body-container'></div>
        </div>`);
    }

    setModalTitle() {
        if (this.modal_title) {
            document.querySelector('#modal-title').appendChild(this.modal_title);
        }
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
        const modal_container = document.querySelector('.modal-container');
        document.addEventListener('click', (event) => {
            if (
              event.target.matches('.button-close-modal') ||
              !event.target.closest('.modal-container')
            ) {
              modal_container.classList.toggle('is-visible');
            }
        });
    }
    
    openModal() {
        const modal_container = document.querySelector('.modal-container');
        document.parent.addEventListener('click', (event) => {
            if (
                event.target.matches('.button-open-modal')
            ) {
                modal_container.classList.toggle('is-visible');
                this.closeModal();
            }
        });
    }

    setModalTrigger() {
        const modal_triggers = document.querySelectorAll(`.${this.modal_id}-trigger`);
        modal_triggers.addEventListener('click', (event) => {
                if (
                    event.target.matches(`.${this.modal_id}-trigger`)
                ) {
                    modal_container.classList.add
                }
        })
    }

    // createExitButton() {
    //     if (this.button_text)  {

    //     }
    // }

   
}
