import Utilities from '../../../js/utilities';

const utilities = new Utilities();

export default class RoomcashGraphic {
    constructor(property, index, insertElement, insertPosition) {
        this.property = property;
        this.index = index;
        this.insert_element = insertElement;
        this.insert_position = insertPosition;
        this.roomcash_id = `${this.index}-${Math.floor(Math.random() * 90000) + 10000}`;
        this.values = {
            roomcash_value: '',
            your_cash_value: '',
            currency: '',
            width: '',
        };
        this.init();
    }

    init() {
        this.getValues();

        if (this.property.querySelector('.ArnLimitedAvail')) {
            this.property.querySelector('.ArnRateCell').style.display = 'unset';
            this.property.querySelector('.ArnRateButton').style.display = 'none';
            return;
        }
        if (!this.values) {
            this.property.classList.add('no-roomCash-deal');
            if (!this.property.querySelector('.RateCalendarPopupAnchor')) return;

            const daily_rates = this.property.querySelector('.RateCalendarPopupAnchor');
            this.insertElement('.ArnRateCancelAnchor', 'afterend', daily_rates);
            return;
        }
        if (!this.values.your_cash_value || !this.values.roomcash_value || !this.values.width || !this.values.currency) {
            console.error(`There was an issue with one or more RoomCash values for the following property: ${this.property.id}`);
            return;
        }
        const html = this.getRoomcashGraphicHTML();
        // Add RoomCash bar
        this.insertHTML(this.insert_element, this.insert_position, html);
        this.addTooltips(this.roomcash_id);

        if (document.querySelector('.SinglePropDetail')) {
            const book_room = this.property.querySelector('.bookRoom');
            const cancel = this.property.querySelector('.ArnRateCancelAnchor');
            this.insertElement('.book', 'afterbegin', book_room);
            this.insertElement('.book', 'beforeend', cancel);
        }

        if (document.querySelector('.SearchHotels')) {
            const button = this.property.querySelector('.ArnRateButton');
            this.insertElement('.ArnPropName', 'beforeend', button);
            // insert average nightly
            this.insertHTML(
                '.ArnRateButton',
                'afterend',
                `
            <div id="rc-avg-nightly">
                <span id="strike-through-rate">${this.property.querySelector('.originalPrice').textContent}</span>
                <span>Avg/Night:${this.property.querySelector('.averageNightly').textContent}</span>
            </div>
            `
            );
        }

        this.setRoomCashWidth(this.values.width);
    }

    removeCurrency(value, element) {
        let currency;
        if (document.querySelector('.SearchHotels')) {
            currency = element.querySelector('.arnCurrency').textContent;
        } else {
            currency = element.querySelector('.ArnNightlyRate').getAttribute('total');
            currency = currency.substring(currency.length - 3);
        }

        if (currency === '$' || currency === 'USD') {
            return value.substring(1);
        }
        return value.substring(0, value.length - 3);
    }

    getCurrency(element) {
        let currency;
        if (document.querySelector('.SearchHotels')) {
            currency = element.querySelector('.arnCurrency').textContent;
        } else {
            currency = element.querySelector('.ArnNightlyRate').getAttribute('total');
            currency = currency.substring(currency.length - 3);
        }

        if (currency === 'USD') {
            return `$`;
        }
        return `${currency}`;
    }

    getValues() {
        let your_cash;
        if (!this.property.querySelector('.originalPrice')) return undefined;

        if (document.querySelector('.SearchHotels')) {
            your_cash = this.property.querySelector('.arnUnit').innerHTML;
        } else if (document.querySelector('.SinglePropDetail')) {
            your_cash = this.property.querySelector('.ArnNightlyRate').getAttribute('total');
            your_cash = your_cash.substring(0, your_cash.indexOf(' '));
        }
        if (your_cash.includes('<span>')) {
            your_cash = your_cash.substring(0, your_cash.indexOf('<span>'));
        }
        let room_cash = this.property.querySelector('.originalPrice').getAttribute('amount');
        room_cash = this.removeCurrency(room_cash, this.property);

        this.values.your_cash_value = your_cash;
        this.values.roomcash_value = Math.ceil(Number(room_cash)).toFixed(2);
        this.values.currency = this.getCurrency(this.property);
        this.values.width = this.property.querySelector('.originalPrice').getAttribute('percent');
        console.log(this.values);
    }

    getRoomcashGraphicHTML() {
        if (document.querySelector('.SearchHotels')) {
            return `
            <div class="roomcash-scale-container" id="rc-${this.roomcash_id}">
                <div id="roomcash-bar-container">
                    <span class="bar"></span>
                </div>
            <div class="container-lower">
                <div class="roomcash-amount">     
                    <div class="cash-text">
                        <span class="rc-value">$${this.values.roomcash_value}</span>
                        <p>RoomCash</p>
                    </div>
                </div>
                <div class="your-cash-amount">      
                    <div class="cash-text">
                        <span class="yc-value">${this.values.currency}${this.values.your_cash_value}</span>
                        <p>Your Cash</p>
                    </div>
                </div>
                </div>
            </div>`;
        }
        return `
        <tr colspan="2">
            <td colspan="2">
                <div class="prop-detail-lower">
                    <div class="roomcash-scale-container" id="rc-${this.roomcash_id}">
                        <div class="container-lower">
                            <div class="roomcash-amount">     
                                <div class="cash-text">
                                    <span class="rc-value">$${this.values.roomcash_value}</span>
                                    <p>RoomCash</p>
                                </div>
                            </div>
                            <div class="your-cash-amount">      
                                <div class="cash-text">
                                    <span class="yc-value">${this.values.currency}${this.values.your_cash_value}</span>
                                    <p>Your Cash</p>
                                </div>
                            </div>
                        </div>
                        <div id="roomcash-bar-container">
                            <span class="bar"></span>
                        </div>
                    </div>
                    <div class="book"></div>
                </div>
            </td>
        </tr>`;
    }

    addTooltips(id) {
        utilities.addToolTip(`#rc-${id} .roomcash-amount p`, 'beforeend', 'Maximum amount of your RoomCash we can apply.', '?', '#fff', '#000');
        utilities.addToolTip(`#rc-${id} .your-cash-amount p`, 'beforeend', `How much you'll pay when you book today.`, '?', '#fff', '#000');
    }

    insertElement(insertEl, position, content) {
        if (!this.property.querySelector(insertEl)) return;
        this.property.querySelector(insertEl).insertAdjacentElement(position, content);
    }

    insertHTML(insertEl, position, content) {
        if (!this.property.querySelector(insertEl)) return;
        this.property.querySelector(insertEl).insertAdjacentHTML(position, content);
    }

    setRoomCashWidth(width) {
        console.log(width);
        if (!width || parseInt(width, 10) < 18) return;

        const your_cash_width = 100 - parseInt(width, 10);

        this.property.querySelector('.bar').style.backgroundImage = `-webkit-linear-gradient(134deg, #1C8747 ${your_cash_width}%, #CC9831 ${width}%)`;
    }
}
