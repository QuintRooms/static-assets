import Utilities from '../../utilities';

const utilities = new Utilities();

// const str1 = 'Room rates are subject to state and local taxes. Tax rates are subject to change at hotels discretion without notice. Tax is included in the total above.'
// const str2 = 'Check-In Time: 3 PM'
// const str3 = 'Check-Out Time: 11 AM'
// const str4 = `This price is based on the number of adults you specified in your search. The hotel may charge additional fees when more than two adults stay in a single room, per the hotel's individual policy. Any additional fees will be charged by the hotel directly at the time of checkout. For more details on fees associated with more than two adults staying in a single room, please contact the hotel directly. Guest will be responsible for additional fees such as additional guests, security deposit, incidentals, resort fees, and additional room nights. Guest will pay hotel directly for these charges if they exist.`

// const modal_arr_test = [
//   {
//   sub_title: 'Payment Policies', 
//   messages: [str1]
//   },
//   {
//     sub_title: 'Property Policies', 
//     messages: [str2, str3]
//   },
//   {
//     sub_title: 'Extra Person Fees/Incidental Fees:',
//     messages: [str4]
//   }
//   ];

export default class Modal {
    constructor(modal_title, modal_body, modal_id, button_text) {
        this.init();
        this.modal_title = modal_title;
        this.modal_body = modal_body;
        this.modal_id = modal_id;
        this.button_text =button_text;
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
              modal_container.classList.remove('is-visible');
          }
        });
    }
    
    openModal() {
        const modal_container = document.querySelector('.modal-container');
        document.parent.addEventListener('click', (event) => {
            if (
              event.target.matches('.button-open-modal')
            ) {
              modal_container.classList.add('is-visible');
          }
        });
    }

    setModalTrigger() {
        document.querySelector('.modal-body-container').insertAdjacentHTML(`beforeEnd, <div>${this.modal_body}</div>`);
    }

    init() {
        const modal_container = document.querySelector('.modal-container');
        modal_container.classList.add('is-visible');
        modal_container.id = this.modal_id;

        this.closeModal();
    }
}
